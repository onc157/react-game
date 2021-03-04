import { GameDataType } from '../types/types'

export const getCopyOfArray = (oldArray: GameDataType): GameDataType => {
  return JSON.parse(JSON.stringify(oldArray))
}
