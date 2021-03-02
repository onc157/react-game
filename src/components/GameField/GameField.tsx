import React from 'react'
import FieldCell from '../FieldCell/FieldCell'
import './style.scss'

type PropTypes = {
  cellsValue: (number | null)[][]
}

const GameField: React.FC<PropTypes> = ({ cellsValue }): JSX.Element => {
  const fieldCells = cellsValue.map((cellRow, rowI) => {
    return (
      <div key={rowI} className="field__row">
        {cellRow.map((cell, cellI) => (
          <FieldCell key={cellI} value={cell} />
        ))}
      </div>
    )
  })
  return <div className="field-wrapper">{fieldCells}</div>
}

export default GameField
