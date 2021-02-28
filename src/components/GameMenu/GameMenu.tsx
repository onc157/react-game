import React from 'react'
import { Button } from '@material-ui/core'
import './style.scss'
import { getInitialData } from '@helpers/getInitialData'
import { GameDataType } from '../../types/types.'
import { INITIAL_MOVES } from '../../constants'

type PropTypes = {
  gameData: GameDataType
  setGameData: (initialData: GameDataType) => void
  addRandomValue: (gameData: GameDataType) => void
  fieldSize: number
}

const GameMenu: React.FC<PropTypes> = ({ gameData, setGameData, addRandomValue, fieldSize }): JSX.Element => {
  const newGame = () => {
    const initialData = getInitialData(fieldSize)

    for (let i = 0; i < INITIAL_MOVES; i += 1) {
      addRandomValue(initialData)
    }

    setGameData(initialData)
  }

  return (
    <div className="menu-wrapper">
      <Button variant="contained" color="primary" onClick={newGame}>
        New game
      </Button>
      <Button variant="contained" color="primary">
        Score
      </Button>
      <Button variant="contained" color="primary">
        About
      </Button>
      <Button variant="contained" color="primary">
        Settings
      </Button>
    </div>
  )
}

export default GameMenu
