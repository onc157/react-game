import React from 'react'
import FieldCell from '../FieldCell/FieldCell'
import './style.scss'

type PropTypes = {
  cellsValue: (number | null)[][]
}

const GameField: React.FC<PropTypes> = ({ cellsValue }): JSX.Element => {
  const fieldCells = cellsValue.map((cellRow, rowI) =>
    cellRow.map((cell, cellI) => <FieldCell key={(cellI + 1) * (rowI + 1)} value={cell} />),
  )

  return <div className="field-wrapper">{fieldCells}</div>
}

export default GameField
