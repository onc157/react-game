import { GameDataType } from '../types/types'

export const getInitialData = (fieldSize: number): GameDataType => {
  return Array(fieldSize)
    .fill(null)
    .map(() => Array(fieldSize).fill(0))
}
