import React from 'react'
import { Button } from '@material-ui/core'
import './style.scss'
import { getInitialData } from '@helpers/getInitialData'
import { GameDataType } from '../../types/types.'
import { INITIAL_MOVES } from '../../constants'
import About from '@components/About/About'
import Score from '@components/Score/Score'

type PropTypes = {
  setGameData: (initialData: GameDataType) => void
  // addRandomValue: (gameData: GameDataType) => void
  fieldSize: number
  onSetPause: () => void
  languageIsEn: boolean
}

const GameMenu: React.FC<PropTypes> = ({ setGameData, fieldSize, onSetPause, languageIsEn }): JSX.Element => {
  // const newGame = () => {
  //   const initialData = getInitialData(fieldSize)
  //
  //   for (let i = 0; i < INITIAL_MOVES; i += 1) {
  //     addRandomValue(initialData)
  //   }
  //
  //   setGameData(initialData)
  // }

  return (
    <div className="menu-wrapper">
      <Button variant="contained" color="primary">
        {languageIsEn ? 'New game' : 'Новая игра'}
      </Button>
      <About languageIsEn={languageIsEn} />
      <Score languageIsEn={languageIsEn} />
      <Button variant="contained" color="primary">
        Settings
      </Button>
      <Button variant="contained" color="primary" onClick={onSetPause}>
        Pause
      </Button>
    </div>
  )
}

export default GameMenu
