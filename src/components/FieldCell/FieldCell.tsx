import React from 'react'
import './style.scss'

type PropTypes = {
  value: number | null
}

const FieldCell: React.FC<PropTypes> = ({ value }): JSX.Element => {
  return (
    <div className={value ? `cell-wrapper cell__active cell--${value}` : 'cell-wrapper'}>
      <span className="cell__number">{value}</span>
    </div>
  )
}

export default FieldCell
