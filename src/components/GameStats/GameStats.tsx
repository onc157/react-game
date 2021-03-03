import React from 'react'
import { Chip } from '@material-ui/core'
import './style.scss'
import useStyles from './style'
import { StateType } from '../../types/types.'

type PropTypes = {
  state: StateType
}

const GameStats: React.FC<PropTypes> = ({ state }): JSX.Element => {
  const classes = useStyles()
  return (
    <div className="stats-wrapper">
      <Chip className={classes.chip} label={`Score: ${state.scoreValue} `} />
      <Chip className={classes.chip} label={`Global: ${state.globalScoreValue} `} />
      <Chip className={classes.chip} label={`Max: ${state.maxValue} `} />

      <Chip className={classes.chip} label={`Time: ${state.nowTime.getMinutes()} : ${state.nowTime.getSeconds()}`} />
    </div>
  )
}

export default GameStats
