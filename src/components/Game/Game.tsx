import React, { useEffect, useState } from 'react'
import GameMenu from '../GameMenu/GameMenu'
import GameStats from '../GameStats/GameStats'
import GameField from '../GameField/GameField'
import './style.scss'
import { Button } from '@material-ui/core'
import _ from 'lodash'
import { INITIAL_MOVES } from '../../constants'
import { getRandomFieldValue } from '../../helpers/getRandomFieldValue'
import { getInitialData } from '../../helpers/getInitialData'

const Game = (): JSX.Element => {
  const [fieldSize, setFieldSize] = useState(4)

  const initialData = getInitialData(fieldSize)

  const [gameData, SetGameData] = useState(initialData)

  const addRandomValue = (newData: (number | null)[][]) => {
    let isAdded = false

    while (!isAdded) {
      const getRandomRow = _.random(fieldSize - 1)
      const getRandomColumn = _.random(fieldSize - 1)

      if (newData[getRandomRow][getRandomColumn] === null) {
        newData[getRandomRow][getRandomColumn] = getRandomFieldValue()
        isAdded = true
      }
    }
  }

  const initField = () => {
    const newData = _.cloneDeep(gameData)

    for (let i = 0; i < INITIAL_MOVES; i += 1) {
      addRandomValue(newData)
    }

    SetGameData(newData)
  }

  useEffect(() => initField(), [])

  const handlerClick = () => {
    const newData = _.cloneDeep(gameData)
    addRandomValue(newData)
    SetGameData(newData)
  }

  return (
    <div className="game-wrapper">
      <GameMenu />
      <GameStats />
      <Button variant="contained" color="primary" onClick={handlerClick}>
        Test
      </Button>
      <GameField cellsValue={gameData} />
    </div>
  )
}

export default Game
