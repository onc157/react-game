import React from 'react'
import { Button } from '@material-ui/core'
import './style.scss'

const GameMenu = (): JSX.Element => {
  return (
    <div className="menu-wrapper">
      <Button variant="contained" color="primary">
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
