import React, { useEffect, useReducer } from 'react'
import GameMenu from '../GameMenu/GameMenu'
import GameStats from '../GameStats/GameStats'
import GameField from '../GameField/GameField'
import './style.scss'
import { getRandomFieldValue } from '@helpers/getRandomFieldValue'
import { getInitialData } from '@helpers/getInitialData'
import { GameDataType, StateType } from '../../types/types.'
import _ from 'lodash'
import { isIdenticalArrays } from '@helpers/isIdenticalArrays'
import swipeLeft from '../../utils/swipeLeft'
import swipeRight from '../../utils/swipeRight'
import swipeUp from '../../utils/swipeUp'
import swipeDown from '../../utils/swipeDown'
import { INITIAL_MOVES, KEYS } from '../../constants'
import reducer, {
  initialState,
  setFetchData,
  setGameContinue,
  setGameData,
  setGameOver,
  setGlobalScore,
  setInitTime,
  setMaxValue,
  setNowTime,
  setPause,
  setPauseDelay,
  setResetGame,
  setScore,
  setScoreData,
  setStartGame,
  setStartPauseDelay,
} from '../../reducer'
import Lose from '@components/Lose/Lose'
import Win from '@components/Win/Win'

const Game = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)

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
        dispatch(setScoreData(state.scoreValue))
        dispatch(setGameOver(true))
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
    localStorage.removeItem('state')
    dispatch(setPauseDelay(0))
    dispatch(setInitTime(new Date()))
    dispatch(setNowTime(new Date(new Date().getTime() - new Date().getTime())))
    dispatch(setMaxValue(0))
    dispatch(setScore(0))
    dispatch(setMaxValue(0))
    dispatch(setGameContinue(false))
  }

  useEffect(() => {
    // check LocalStorage
    if (localStorage.state) {
      const fetchData = JSON.parse(localStorage.state)
      dispatch(setFetchData(fetchData))
    } else {
      initField()
    }
  }, [state.fieldSize, state.gameIsReset])

  const setTimer = () => {
    if (!state.isPause) {
      // console.log(new Date().getTime())
      const diffTime = new Date().getTime() - state.initTime.getTime() - state.pauseDelay
      dispatch(setNowTime(new Date(diffTime)))
    }
  }

  const setLocalStorage = () => {
    const fetchData = { ...state }
    localStorage.setItem('state', JSON.stringify(fetchData))
  }

  useEffect(() => {
    window.addEventListener('beforeunload', setLocalStorage)
    return () => window.removeEventListener('beforeunload', setLocalStorage)
  })

  useEffect(() => {
    const updateTimeInterval = setInterval(() => setTimer(), 1000)
    return () => clearInterval(updateTimeInterval)
  }, [state.isPause, state.pauseDelay, state.startPauseDelay, resetGame])

  const handleKeydown = (e: KeyboardEvent) => {
    let newData = []

    switch (e.code) {
      case KEYS.LEFT:
      case KEYS.KEY_A:
        newData = swipeLeft(state.gameData, state.fieldSize, state.maxValue, dispatch, state.gameIsContinue)
        if (!isIdenticalArrays(state.gameData, newData)) {
          addRandomValue(newData)
        }
        dispatch(setGameData(newData))
        break
      case KEYS.RIGHT:
      case KEYS.KEY_D:
        newData = swipeRight(state.gameData, state.fieldSize, state.maxValue, dispatch, state.gameIsContinue)
        if (!isIdenticalArrays(state.gameData, newData)) {
          addRandomValue(newData)
        }
        dispatch(setGameData(newData))
        break
      case KEYS.ARROW_UP:
      case KEYS.KEY_W:
        newData = swipeUp(state.gameData, state.fieldSize, state.maxValue, dispatch, state.gameIsContinue)
        if (!isIdenticalArrays(state.gameData, newData)) {
          addRandomValue(newData)
        }
        dispatch(setGameData(newData))
        break
      case KEYS.ARROW_DOWN:
      case KEYS.KEY_S:
        newData = swipeDown(state.gameData, state.fieldSize, state.maxValue, dispatch, state.gameIsContinue)
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
      <GameField cellsValue={state.gameData} />
      <GameStats state={state} />
      <Lose resetGame={resetGame} state={state} dispatch={dispatch} />
      <Win resetGame={resetGame} state={state} dispatch={dispatch} />
    </div>
  )
}

export default Game
