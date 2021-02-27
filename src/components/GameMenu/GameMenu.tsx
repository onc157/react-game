import React from 'react'
import { Button } from '@material-ui/core'
import './style.scss'
import { getInitialData } from '@helpers/getInitialData'
import { GameDataType } from '../../types/types.'

type PropTypes = {
  setGameData: (initialData: GameDataType) => void
  fieldSize: number
  initField: () => void
}

const GameMenu: React.FC<PropTypes> = ({ setGameData, fieldSize, initField }): JSX.Element => {
  const newGame = () => {
    setGameData(getInitialData(fieldSize))
    // initField()
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
