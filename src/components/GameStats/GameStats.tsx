import React from 'react'
import { Chip, makeStyles } from '@material-ui/core'
import './style.scss'
import useStyles from './style'

type PropTypes = {
  nowTime: Date
}

const GameStats: React.FC<PropTypes> = ({ nowTime }): JSX.Element => {
  const classes = useStyles()

  return (
    <div className="stats-wrapper">
      <Chip className={classes.chip} label="SCORE: " />
      <Chip className={classes.chip} label="GLOBAL: " />
      <Chip className={classes.chip} label={`Time: ${nowTime.getMinutes()} : ${nowTime.getSeconds()}`} />
    </div>
  )
}

export default GameStats
