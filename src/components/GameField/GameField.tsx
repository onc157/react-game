import React from 'react'
import FieldCell from '../FieldCell/FieldCell'
import './style.scss'
import { StateType } from '../../types/types.'

type PropTypes = {
  cellsValue: (number | null)[][]
  state: StateType
}

const GameField: React.FC<PropTypes> = ({ cellsValue, state }): JSX.Element => {
  const fieldCells = cellsValue.map((cellRow, rowI) => {
    return (
      <div key={rowI} className="field__row">
        {cellRow.map((cell, cellI) => (
          <FieldCell key={cellI} value={cell} />
        ))}
      </div>
    )
  })
  return (
    <div className="field-wrapper">
      {fieldCells}
      <div className={!state.isPause ? 'pause-wrapper' : 'pause-wrapper pause-wrapper--active'}>Pause On</div>
    </div>
  )
}

export default GameField
