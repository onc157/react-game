import { GameDataType } from '../types/types'
import { getCopyOfArray } from '../helpers/getCopyOfArray'
import updateScoreValues from '../helpers/updateScoreValues'

const swipeLeft = (
  copyData: GameDataType,
  fieldSize: number,
  globalScoreValue: number,
  maxValue: number,
  dispatch: any,
  gameIsContinue: boolean,
  playSound: (sound: () => void) => void,
  winSound: () => void,
): GameDataType => {
  const newData = getCopyOfArray(copyData)

  for (let i = 0; i < fieldSize; i += 1) {
    const row = newData[i]
    let prevIndex = 0
    let currentIndex = 1

    while (prevIndex < fieldSize) {
      if (currentIndex === fieldSize) {
        currentIndex = prevIndex + 1
        prevIndex += 1
        continue
      }
      if (row[prevIndex] === 0 && row[currentIndex] === 0) {
        currentIndex += 1
      } else if (row[prevIndex] === 0 && row[currentIndex] !== 0) {
        row[prevIndex] = row[currentIndex]
        row[currentIndex] = 0
        currentIndex += 1
      } else if (row[prevIndex] !== 0 && row[currentIndex] === 0) {
        currentIndex += 1
      } else if (row[prevIndex] !== 0 && row[currentIndex] !== 0) {
        if (row[prevIndex] === row[currentIndex]) {
          row[prevIndex] = row[prevIndex] + row[currentIndex]
          updateScoreValues(row[prevIndex], globalScoreValue, maxValue, dispatch, gameIsContinue, playSound, winSound)
          row[currentIndex] = 0
          currentIndex = prevIndex + 1
          prevIndex += 1
        } else {
          prevIndex += 1
          currentIndex = prevIndex + 1
        }
      }
    }
  }

  return newData
}

export default swipeLeft
