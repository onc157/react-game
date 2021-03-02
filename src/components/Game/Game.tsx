import React, { useEffect, useState } from 'react'
import GameMenu from '../GameMenu/GameMenu'
import GameStats from '../GameStats/GameStats'
import GameField from '../GameField/GameField'
import './style.scss'
import { getRandomFieldValue } from '@helpers/getRandomFieldValue'
import { getInitialData } from '@helpers/getInitialData'
import { GameDataType } from '../../types/types.'
import { getCopyOfArray } from '@helpers/getCopyOfArray'
import _ from 'lodash'
import { isIdenticalArrays } from '@helpers/isIdenticalArrays'
import swipeLeft from '../../utils/swipeLeft'
import swipeRight from '../../utils/swipeRight'
import swipeUp from '../../utils/swipeUp'
import swipeDown from '../../utils/swipeDown'
import { INITIAL_MOVES, KEYS } from '../../constants'

const Game = (): JSX.Element => {
  const [fieldSize, setFieldSize] = useState<number>(4)
  const [gameData, setGameData] = useState<GameDataType>(getInitialData(fieldSize))
  const [initTime, setInitTime] = useState(new Date())
  const [nowTime, setNowTime] = useState(new Date())
  const [isPause, setPause] = useState(false)
  const [pauseDelay, setPauseDelay] = useState(0)
  const [startPauseDelay, setStartPauseDelay] = useState<Date | undefined>()
  const [languageIsEn, setLanguage] = useState(true)
  const [gameIsOver, setGameOver] = useState(false)
  const [gameIsStart, setStartGame] = useState(false)

  const addRandomValue = (newData: GameDataType) => {
    let isAdded = false

    while (!isAdded) {
      const getRandomRow = _.random(fieldSize - 1)
      const getRandomColumn = _.random(fieldSize - 1)

      if (newData[getRandomRow][getRandomColumn] === 0) {
        newData[getRandomRow][getRandomColumn] = getRandomFieldValue()
        isAdded = true
      }

      if (gameIsStart && !checkGameIsOver(newData)) {
        console.log('you lose')
        return
      }
    }
  }

  const initField = () => {
    const initialData = getCopyOfArray(gameData)

    for (let i = 0; i < INITIAL_MOVES; i += 1) {
      addRandomValue(initialData)
    }

    setStartGame(true)
    setGameData(initialData)
  }

  const setTimer = () => {
    if (!isPause) {
      const diffTime = new Date().getTime() - initTime.getTime() - pauseDelay
      setNowTime(new Date(diffTime))
    }
  }

  useEffect(() => {
    // check LocalStorage
    initField()
  }, [])

  useEffect(() => {
    const updateTimeInterval = setInterval(() => setTimer(), 1000)
    return () => clearInterval(updateTimeInterval)
  }, [isPause, pauseDelay, startPauseDelay])

  const handleKeydown = (e: KeyboardEvent) => {
    let newData = []

    switch (e.code) {
      case KEYS.LEFT:
      case KEYS.KEY_A:
        newData = swipeLeft(gameData, fieldSize)
        if (!isIdenticalArrays(gameData, newData)) {
          addRandomValue(newData)
        }
        setGameData(newData)
        break
      case KEYS.RIGHT:
      case KEYS.KEY_D:
        newData = swipeRight(gameData, fieldSize)
        if (!isIdenticalArrays(gameData, newData)) {
          addRandomValue(newData)
        }
        setGameData(newData)
        break
      case KEYS.ARROW_UP:
      case KEYS.KEY_W:
        newData = swipeUp(gameData, fieldSize)
        if (!isIdenticalArrays(gameData, newData)) {
          addRandomValue(newData)
        }
        setGameData(newData)
        break
      case KEYS.ARROW_DOWN:
      case KEYS.KEY_S:
        newData = swipeDown(gameData, fieldSize)
        if (!isIdenticalArrays(gameData, newData)) {
          addRandomValue(newData)
        }
        setGameData(newData)
        break
      default:
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  })

  const onSetPause = () => {
    if (!isPause) {
      setStartPauseDelay(new Date())
      setPause(!isPause)
    } else {
      const pause = new Date().getTime() - startPauseDelay!.getTime()
      setPauseDelay(pauseDelay + pause)
      setPause(!isPause)
    }
  }

  const checkGameIsOver = (newData: GameDataType): boolean => {
    if (newData.flat().every(cell => cell !== 0)) {
      for (let i = 0; i < fieldSize; i += 1) {
        for (let j = 0; j < fieldSize - 1; j += 1) {
          if (newData[i][j] === newData[i][j + 1]) {
            return true
          } else if (newData[j][i] === newData[j + 1][i]) {
            return true
          }
        }
      }
      return false
    }
    return true
  }

  return (
    <div className="game-wrapper">
      <GameMenu
        setGameData={setGameData}
        // addRandomValue={addRandomValue}
        fieldSize={fieldSize}
        onSetPause={onSetPause}
        languageIsEn={languageIsEn}
      />
      <GameStats nowTime={nowTime} />
      <GameField cellsValue={gameData} />
    </div>
  )
}

export default Game
