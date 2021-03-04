import { GameDataType } from '../types/types.'
import { getCopyOfArray } from '../helpers/getCopyOfArray'
import updateScoreValues from '../helpers/updateScoreValues'

const swipeRight = (
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

  for (let i = fieldSize - 1; i >= 0; i -= 1) {
    const row = newData[i]
    let prevIndex = row.length - 1
    let currentIndex = prevIndex - 1

    while (prevIndex > 0) {
      if (currentIndex === -1) {
        currentIndex = prevIndex - 1
        prevIndex -= 1
        continue
      }
      if (row[prevIndex] === 0 && row[currentIndex] === 0) {
        currentIndex -= 1
      } else if (row[prevIndex] === 0 && row[currentIndex] !== 0) {
        row[prevIndex] = row[currentIndex]
        row[currentIndex] = 0
        currentIndex -= 1
      } else if (row[prevIndex] !== 0 && row[currentIndex] === 0) {
        currentIndex -= 1
      } else if (row[prevIndex] !== 0 && row[currentIndex] !== 0) {
        if (row[prevIndex] === row[currentIndex]) {
          row[prevIndex] = row[prevIndex] + row[currentIndex]
          updateScoreValues(row[prevIndex], globalScoreValue, maxValue, dispatch, gameIsContinue, playSound, winSound)
          row[currentIndex] = 0
          currentIndex = prevIndex - 1
          prevIndex -= 1
        } else {
          prevIndex -= 1
          currentIndex = prevIndex - 1
        }
      }
    }
  }

  return newData
}

export default swipeRight
