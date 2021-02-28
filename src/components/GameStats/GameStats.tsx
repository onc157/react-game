import React from 'react'
import { Chip } from '@material-ui/core'
import './style.scss'

type PropTypes = {
  nowTime: Date
}

const GameStats: React.FC<PropTypes> = ({ nowTime }): JSX.Element => {
  return (
    <div className="stats-wrapper">
      <Chip label="SCORE" />
      <Chip label="GLOBAL" />
      <Chip label={`Time: ${nowTime.getMinutes()} : ${nowTime.getSeconds()}`} />
    </div>
  )
}

export default GameStats
