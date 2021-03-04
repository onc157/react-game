import React from 'react'
import './style.scss'
import { StateType } from '../../types/types'

type PropTypes = {
  state: StateType
}

const GameStats: React.FC<PropTypes> = ({ state }): JSX.Element => {
  return (
    <div className="stats-wrapper">
      <div className="stats__cell">
        {state.languageIsEn ? 'Score: ' : 'Счет: '}
        {state.scoreValue}
      </div>
      <div className="stats__cell">
        {state.languageIsEn ? 'Global: ' : 'Общий: '}
        {state.globalScoreValue}
      </div>
      <div className="stats__cell">
        {state.languageIsEn ? 'Max: ' : 'Макс. : '}
        {state.maxValue}
      </div>
      <div className="stats__cell">
        {state.languageIsEn ? 'Time: ' : 'Время: '}
        {`${state.nowTime.getMinutes()} : ${state.nowTime.getSeconds()}`}
      </div>
    </div>
  )
}

export default GameStats
