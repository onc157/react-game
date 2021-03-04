import { GameDataType } from '../types/types'

export const isIdenticalArrays = (array1: GameDataType, array2: GameDataType): boolean => {
  return JSON.stringify(array1) === JSON.stringify(array2) ? true : false
}
