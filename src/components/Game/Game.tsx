import React, { useEffect, useState } from 'react'
import GameMenu from '../GameMenu/GameMenu'
import GameStats from '../GameStats/GameStats'
import GameField from '../GameField/GameField'
import './style.scss'
import { Button } from '@material-ui/core'
import { getRandomFieldValue } from '@helpers/getRandomFieldValue'
import { getInitialData } from '@helpers/getInitialData'
import { INITIAL_MOVES, KEYS } from '../../constants'
import { GameDataType } from '../../types/types.'
import { getCopyOfArray } from '@helpers/getCopyOfArray'
import _ from 'lodash'
import { isIdenticalArrays } from '@helpers/isIdenticalArrays'

const Game = (): JSX.Element => {
  const [fieldSize, setFieldSize] = useState<number>(4)
  const [gameData, setGameData] = useState<GameDataType>(getInitialData(fieldSize))

  const addRandomValue = (newData: GameDataType) => {
    let isAdded = false

    while (!isAdded) {
      const getRandomRow = _.random(fieldSize - 1)
      const getRandomColumn = _.random(fieldSize - 1)

      if (newData[getRandomRow][getRandomColumn] === 0) {
        newData[getRandomRow][getRandomColumn] = getRandomFieldValue()
        isAdded = true
      }
    }
  }

  const initField = () => {
    const newData = getCopyOfArray(gameData)

    for (let i = 0; i < INITIAL_MOVES; i += 1) {
      addRandomValue(newData)
    }

    setGameData(newData)
  }

  useEffect(() => {
    initField()

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const swipeLeft = (copyData: GameDataType) => {
    const newData = getCopyOfArray(copyData)

    for (let i = 0; i < fieldSize; i += 1) {
      const row = newData[i]
      let prevIndex = 0
      let currentIndex = 1

      while (prevIndex < fieldSize) {
        if (currentIndex === fieldSize) {
          currentIndex = prevIndex + 1
          prevIndex += 1
          continue
        }
        if (row[prevIndex] === 0 && row[currentIndex] === 0) {
          currentIndex += 1
        } else if (row[prevIndex] === 0 && row[currentIndex] !== 0) {
          row[prevIndex] = row[currentIndex]
          row[currentIndex] = 0
          currentIndex += 1
        } else if (row[prevIndex] !== 0 && row[currentIndex] === 0) {
          currentIndex += 1
        } else if (row[prevIndex] !== 0 && row[currentIndex] !== 0) {
          if (row[prevIndex] === row[currentIndex]) {
            row[prevIndex] = row[prevIndex] + row[currentIndex]
            row[currentIndex] = 0
            prevIndex = currentIndex + 1
            currentIndex += 1
          } else {
            prevIndex += 1
            currentIndex = prevIndex + 1
          }
        }
      }
    }
    if (!isIdenticalArrays(copyData, newData)) {
      addRandomValue(newData)
    }

    return newData
  }

  const swipeRight = (copyData: GameDataType) => {
    const newData = getCopyOfArray(copyData)

    for (let i = fieldSize - 1; i >= 0; i -= 1) {
      const row = newData[i]
      let prevIndex = row.length - 1
      let currentIndex = prevIndex - 1

      while (prevIndex > 0) {
        if (currentIndex === -1) {
          currentIndex = prevIndex - 1
          prevIndex -= 1
          continue
        }
        if (row[prevIndex] === 0 && row[currentIndex] === 0) {
          currentIndex -= 1
        } else if (row[prevIndex] === 0 && row[currentIndex] !== 0) {
          row[prevIndex] = row[currentIndex]
          row[currentIndex] = 0
          currentIndex -= 1
        } else if (row[prevIndex] !== 0 && row[currentIndex] === 0) {
          currentIndex -= 1
        } else if (row[prevIndex] !== 0 && row[currentIndex] !== 0) {
          if (row[prevIndex] === row[currentIndex]) {
            row[prevIndex] = row[prevIndex] + row[currentIndex]
            row[currentIndex] = 0
            prevIndex = currentIndex - 1
            currentIndex -= 1
          } else {
            prevIndex -= 1
            currentIndex = prevIndex - 1
          }
        }
      }
    }
    if (!isIdenticalArrays(copyData, newData)) {
      addRandomValue(newData)
    }

    return newData
  }
  const swipeUp = (copyData: GameDataType) => {
    const newData = getCopyOfArray(copyData)

    for (let i = 0; i < fieldSize; i += 1) {
      let prevIndex = 0
      let currentIndex = 1

      while (prevIndex < fieldSize) {
        if (currentIndex === fieldSize) {
          currentIndex = prevIndex + 1
          prevIndex += 1
          continue
        }
        if (newData[prevIndex][i] === 0 && newData[currentIndex][i] === 0) {
          currentIndex += 1
        } else if (newData[prevIndex][i] === 0 && newData[currentIndex][i] !== 0) {
          newData[prevIndex][i] = newData[currentIndex][i]
          newData[currentIndex][i] = 0
          currentIndex += 1
        } else if (newData[prevIndex][i] !== 0 && newData[currentIndex][i] === 0) {
          currentIndex += 1
        } else if (newData[prevIndex][i] !== 0 && newData[currentIndex][i] !== 0) {
          if (newData[prevIndex][i] === newData[currentIndex][i]) {
            newData[prevIndex][i] = newData[prevIndex][i] + newData[currentIndex][i]
            newData[currentIndex][i] = 0
            prevIndex = currentIndex + 1
            currentIndex += 1
          } else {
            prevIndex += 1
            currentIndex = prevIndex + 1
          }
        }
      }
    }
    if (!isIdenticalArrays(copyData, newData)) {
      addRandomValue(newData)
    }

    return newData
  }

  const swipeDown = (copyData: GameDataType) => {
    const newData = getCopyOfArray(copyData)

    for (let i = fieldSize - 1; i >= 0; i -= 1) {
      let prevIndex = newData.length - 1
      let currentIndex = prevIndex - 1

      while (prevIndex > 0) {
        if (currentIndex === -1) {
          currentIndex = prevIndex - 1
          prevIndex -= 1
          continue
        }
        if (newData[prevIndex][i] === 0 && newData[currentIndex][i] === 0) {
          currentIndex -= 1
        } else if (newData[prevIndex][i] === 0 && newData[currentIndex][i] !== 0) {
          newData[prevIndex][i] = newData[currentIndex][i]
          newData[currentIndex][i] = 0
          currentIndex -= 1
        } else if (newData[prevIndex][i] !== 0 && newData[currentIndex][i] === 0) {
          currentIndex -= 1
        } else if (newData[prevIndex][i] !== 0 && newData[currentIndex][i] !== 0) {
          if (newData[prevIndex][i] === newData[currentIndex][i]) {
            newData[prevIndex][i] = newData[prevIndex][i] + newData[currentIndex][i]
            newData[currentIndex][i] = 0
            prevIndex = currentIndex - 1
            currentIndex -= 1
          } else {
            prevIndex -= 1
            currentIndex = prevIndex - 1
          }
        }
      }
    }
    if (!isIdenticalArrays(copyData, newData)) {
      addRandomValue(newData)
    }

    return newData
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case KEYS.LEFT:
      case KEYS.KEY_A:
        setGameData(prevState => {
          const copyData = getCopyOfArray(prevState)
          return swipeLeft(copyData)
        })
        break
      case KEYS.RIGHT:
      case KEYS.KEY_D:
        setGameData(prevState => {
          const copyData = getCopyOfArray(prevState)
          return swipeRight(copyData)
        })
        break
      case KEYS.ARROW_UP:
      case KEYS.KEY_W:
        setGameData(prevState => {
          const copyData = getCopyOfArray(prevState)
          return swipeUp(copyData)
        })
        break
      case KEYS.ARROW_DOWN:
      case KEYS.KEY_S:
        setGameData(prevState => {
          const copyData = getCopyOfArray(prevState)
          return swipeDown(copyData)
        })
        break
      default:
        break
    }
  }

  const handlerClick = () => {
    const newData = getCopyOfArray(gameData)
    addRandomValue(newData)
    setGameData(newData)
  }

  return (
    <div className="game-wrapper">
      <GameMenu setGameData={setGameData} fieldSize={fieldSize} initField={initField} />
      <GameStats />
      <Button variant="contained" color="primary" onClick={handlerClick}>
        Test
      </Button>
      <GameField cellsValue={gameData} />
    </div>
  )
}

export default Game
