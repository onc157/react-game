import React from 'react'
import { Button } from '@material-ui/core'
import './style.scss'
import { StateType } from '../../types/types.'
import { setResetGame } from '../../reducer'
import About from '../About/About'
import Score from '../Score/Score'
import Settings from '../Settings/Settings'
import useStyles from './style'
import useSound from 'use-sound'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

type PropTypes = {
  onSetPause: () => void
  resetGame: () => void
  initField: () => void
  state: StateType
  dispatch: any
  toggleFullScreen: () => void
  bgSoundOn: () => void
  stop: () => void
  playSound: (sound: () => void) => void
  modalSound: () => void
}

const GameMenu: React.FC<PropTypes> = ({
  onSetPause,
  resetGame,
  initField,
  state,
  dispatch,
  toggleFullScreen,
  bgSoundOn,
  stop,
  playSound,
  modalSound,
}): JSX.Element => {
  const classes = useStyles()

  const onResetGame = () => {
    dispatch(setResetGame(true))
    resetGame()
  }

  return (
    <div className="menu-wrapper">
      <Button className={classes.button} variant="contained" color="primary" onClick={onResetGame}>
        {state.languageIsEn ? 'New game' : 'Новая игра'}
      </Button>
      <About
        languageIsEn={state.languageIsEn}
        aboutIsOpen={state.aboutIsOpen}
        dispatch={dispatch}
        playSound={playSound}
        modalSound={modalSound}
      />
      <Score languageIsEn={state.languageIsEn} state={state} dispatch={dispatch} playSound={playSound} modalSound={modalSound} />
      <Settings
        resetGame={resetGame}
        initField={initField}
        state={state}
        dispatch={dispatch}
        toggleFullScreen={toggleFullScreen}
        bgSoundOn={bgSoundOn}
        stop={stop}
        playSound={playSound}
        modalSound={modalSound}
      />
      <Button className={classes.button} variant="contained" color="primary" onClick={onSetPause}>
        {state.languageIsEn ? 'Pause' : 'Пауза'}
      </Button>
    </div>
  )
}

export default GameMenu
