import React from 'react'
import { Chip } from '@material-ui/core'
import './style.scss'
import useStyles from './style'
import { InitialStateType } from '../../types/types.'

type PropTypes = {
  state: InitialStateType
}

const GameStats: React.FC<PropTypes> = ({ state }): JSX.Element => {
  const classes = useStyles()

  return (
    <div className="stats-wrapper">
      <Chip className={classes.chip} label="SCORE: " />
      <Chip className={classes.chip} label="GLOBAL: " />
      <Chip className={classes.chip} label={`Max: ${state.maxValue} `} />
      <Chip className={classes.chip} label={`Time: ${state.nowTime.getMinutes()} : ${state.nowTime.getSeconds()}`} />
    </div>
  )
}

export default GameStats
