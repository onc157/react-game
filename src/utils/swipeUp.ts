import { GameDataType } from '../types/types'
import { getCopyOfArray } from '../helpers/getCopyOfArray'
import updateScoreValues from '../helpers/updateScoreValues'

const swipeUp = (
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
    let prevIndex = 0
    let currentIndex = 1

    while (prevIndex < fieldSize) {
      if (currentIndex === fieldSize) {
        currentIndex = prevIndex + 1
        prevIndex += 1
        continue
      }
      if (newData[prevIndex][i] === 0 && newData[currentIndex][i] === 0) {
        currentIndex += 1
      } else if (newData[prevIndex][i] === 0 && newData[currentIndex][i] !== 0) {
        newData[prevIndex][i] = newData[currentIndex][i]
        newData[currentIndex][i] = 0
        currentIndex += 1
      } else if (newData[prevIndex][i] !== 0 && newData[currentIndex][i] === 0) {
        currentIndex += 1
      } else if (newData[prevIndex][i] !== 0 && newData[currentIndex][i] !== 0) {
        if (newData[prevIndex][i] === newData[currentIndex][i]) {
          newData[prevIndex][i] = newData[prevIndex][i] + newData[currentIndex][i]
          updateScoreValues(newData[prevIndex][i], globalScoreValue, maxValue, dispatch, gameIsContinue, playSound, winSound)
          newData[currentIndex][i] = 0
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

export default swipeUp
