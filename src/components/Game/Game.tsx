import React, { useEffect, useReducer, useState } from 'react'
import GameMenu from '../GameMenu/GameMenu'
import GameStats from '../GameStats/GameStats'
import GameField from '../GameField/GameField'
import './style.scss'
import { getRandomFieldValue } from '@helpers/getRandomFieldValue'
import { getInitialData } from '@helpers/getInitialData'
import { GameDataType } from '../../types/types.'
import _ from 'lodash'
import { isIdenticalArrays } from '@helpers/isIdenticalArrays'
import swipeLeft from '../../utils/swipeLeft'
import swipeRight from '../../utils/swipeRight'
import swipeUp from '../../utils/swipeUp'
import swipeDown from '../../utils/swipeDown'
import { INITIAL_MOVES, KEYS } from '../../constants'
import reducer, {
  initialState,
  setGameData,
  setInitTime,
  setNowTime,
  setPause,
  setPauseDelay,
  setResetGame,
  setStartGame,
  setStartPauseDelay,
} from '../../reducer'
import { stat } from 'fs'

const Game = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const [fieldSize, setFieldSize] = useState<number>(4)
  // const [gameData, setGameData] = useState<GameDataType>(getInitialData(state.fieldSize))
  // const [initTime, setInitTime] = useState(new Date())
  // const [nowTime, setNowTime] = useState<Date>(new Date(new Date().getTime() - new Date().getTime()))
  // const [isPause, setPause] = useState(false)
  // const [pauseDelay, setPauseDelay] = useState(0)
  // const [startPauseDelay, setStartPauseDelay] = useState<Date | undefined>()
  // const [languageIsEn, setLanguage] = useState(true)
  // const [gameIsOver, setGameOver] = useState(false)
  // const [gameIsStart, setStartGame] = useState(false)
  // const [aboutIsOpen, setAboutOpen] = useState(false)
  // const [settingsIsOpen, setSettingsOpen] = useState(false)
  // const [gameIsReset, setResetGame] = useState(false)

  const addRandomValue = (newData: GameDataType) => {
    let isAdded = false

    while (!isAdded) {
      const getRandomRow = _.random(state.fieldSize - 1)
      const getRandomColumn = _.random(state.fieldSize - 1)

      if (newData[getRandomRow][getRandomColumn] === 0) {
        newData[getRandomRow][getRandomColumn] = getRandomFieldValue()
        isAdded = true
      }

      if (state.gameIsStart && !checkGameIsOver(newData)) {
        console.log('you lose')
        return
      }
    }
  }

  const initField = () => {
    const initialData = getInitialData(state.fieldSize)

    for (let i = 0; i < INITIAL_MOVES; i += 1) {
      addRandomValue(initialData)
    }

    if (state.gameIsStart) {
      dispatch(setResetGame(false))
      resetGame()
    }

    dispatch(setStartGame(true))
    dispatch(setGameData(initialData))
  }

  const resetGame = () => {
    dispatch(setPauseDelay(0))
    dispatch(setInitTime(new Date()))
    dispatch(setNowTime(new Date(new Date().getTime() - new Date().getTime())))
  }

  useEffect(() => {
    // check LocalStorage
    initField()
  }, [state.fieldSize, state.gameIsReset])

  const setTimer = () => {
    if (!state.isPause) {
      const diffTime = new Date().getTime() - state.initTime.getTime() - state.pauseDelay
      dispatch(setNowTime(new Date(diffTime)))
    }
  }

  useEffect(() => {
    const updateTimeInterval = setInterval(() => setTimer(), 1000)
    return () => clearInterval(updateTimeInterval)
  }, [state.isPause, state.pauseDelay, state.startPauseDelay, resetGame])

  const handleKeydown = (e: KeyboardEvent) => {
    let newData = []

    switch (e.code) {
      case KEYS.LEFT:
      case KEYS.KEY_A:
        newData = swipeLeft(state.gameData, state.fieldSize)
        if (!isIdenticalArrays(state.gameData, newData)) {
          addRandomValue(newData)
        }
        dispatch(setGameData(newData))
        break
      case KEYS.RIGHT:
      case KEYS.KEY_D:
        newData = swipeRight(state.gameData, state.fieldSize)
        if (!isIdenticalArrays(state.gameData, newData)) {
          addRandomValue(newData)
        }
        dispatch(setGameData(newData))
        break
      case KEYS.ARROW_UP:
      case KEYS.KEY_W:
        newData = swipeUp(state.gameData, state.fieldSize)
        if (!isIdenticalArrays(state.gameData, newData)) {
          addRandomValue(newData)
        }
        dispatch(setGameData(newData))
        break
      case KEYS.ARROW_DOWN:
      case KEYS.KEY_S:
        newData = swipeDown(state.gameData, state.fieldSize)
        if (!isIdenticalArrays(state.gameData, newData)) {
          addRandomValue(newData)
        }
        dispatch(setGameData(newData))
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
    if (!state.isPause) {
      dispatch(setStartPauseDelay(new Date()))
      dispatch(setPause(!state.isPause))
    } else {
      const pause = new Date().getTime() - state.startPauseDelay!.getTime()
      dispatch(setPauseDelay(state.pauseDelay + pause))
      dispatch(setPause(!state.isPause))
    }
  }

  const checkGameIsOver = (newData: GameDataType): boolean => {
    if (newData.flat().every(cell => cell !== 0)) {
      for (let i = 0; i < state.fieldSize; i += 1) {
        for (let j = 0; j < state.fieldSize - 1; j += 1) {
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
      <GameMenu onSetPause={onSetPause} resetGame={resetGame} initField={initField} state={state} dispatch={dispatch} />
      <GameStats nowTime={state.nowTime} />
      <GameField cellsValue={state.gameData} />
    </div>
  )
}

export default Game
