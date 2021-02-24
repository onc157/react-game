import React from 'react'
import { Chip } from '@material-ui/core'
import './style.scss'

const GameStats = (): JSX.Element => {
  return (
    <div className="stats-wrapper">
      <Chip label="SCORE" />
      <Chip label="GLOBAL" />
      <Chip label="TIME" />
    </div>
  )
}

export default GameStats
