import React from 'react'
import { Button } from '@material-ui/core'
import './style.scss'
import About from '@components/About/About'
import Score from '@components/Score/Score'
import Settings from '@components/Settings/Settings'

type PropTypes = {
  fieldSize: number
  setFieldSize: (fieldSize: number) => void
  onSetPause: () => void
  languageIsEn: boolean
  resetGame: () => void
  aboutIsOpen: boolean
  setAboutOpen: (aboutIsOpen: boolean) => void
  settingsIsOpen: boolean
  setSettingsOpen: (settingsIsOpen: boolean) => void
  initField: () => void
  setResetGame: (gameIsReset: boolean) => void
}

const GameMenu: React.FC<PropTypes> = ({
  fieldSize,
  setFieldSize,
  onSetPause,
  languageIsEn,
  resetGame,
  aboutIsOpen,
  setAboutOpen,
  settingsIsOpen,
  setSettingsOpen,
  initField,
  setResetGame,
}): JSX.Element => {
  const onResetGame = () => {
    setResetGame(true)
  }

  return (
    <div className="menu-wrapper">
      <Button variant="contained" color="primary" onClick={onResetGame}>
        {languageIsEn ? 'New game' : 'Новая игра'}
      </Button>
      <About languageIsEn={languageIsEn} aboutIsOpen={aboutIsOpen} setAboutOpen={setAboutOpen} />
      <Score languageIsEn={languageIsEn} />
      <Settings
        fieldSize={fieldSize}
        setFieldSize={setFieldSize}
        languageIsEn={languageIsEn}
        settingsIsOpen={settingsIsOpen}
        setSettingsOpen={setSettingsOpen}
        resetGame={resetGame}
        initField={initField}
      />
      <Button variant="contained" color="primary" onClick={onSetPause}>
        Pause
      </Button>
    </div>
  )
}

export default GameMenu
