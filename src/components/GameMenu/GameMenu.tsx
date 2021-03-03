import React from 'react'
import { Button } from '@material-ui/core'
import './style.scss'
import About from '@components/About/About'
import Score from '@components/Score/Score'
import Settings from '@components/Settings/Settings'
import { InitialStateType } from '../../types/types.'
import { setResetGame } from '../../reducer'

type PropTypes = {
  onSetPause: () => void
  resetGame: () => void
  initField: () => void
  state: InitialStateType
  dispatch: any
}

const GameMenu: React.FC<PropTypes> = ({ onSetPause, resetGame, initField, state, dispatch }): JSX.Element => {
  const onResetGame = () => {
    dispatch(setResetGame(true))
  }

  return (
    <div className="menu-wrapper">
      <Button variant="contained" color="primary" onClick={onResetGame}>
        {state.languageIsEn ? 'New game' : 'Новая игра'}
      </Button>
      <About languageIsEn={state.languageIsEn} aboutIsOpen={state.aboutIsOpen} dispatch={dispatch} />
      <Score languageIsEn={state.languageIsEn} />
      <Settings resetGame={resetGame} initField={initField} state={state} dispatch={dispatch} />
      <Button variant="contained" color="primary" onClick={onSetPause}>
        Pause
      </Button>
    </div>
  )
}

export default GameMenu
