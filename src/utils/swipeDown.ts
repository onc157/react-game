import { GameDataType } from '../types/types.'
import { getCopyOfArray } from '@helpers/getCopyOfArray'
import updateScoreValues from '@helpers/updateScoreValues'

const swipeDown = (copyData: GameDataType, fieldSize: number, maxValue: number, dispatch: any, gameIsContinue: boolean): GameDataType => {
  const newData = getCopyOfArray(copyData)

  for (let i = fieldSize - 1; i >= 0; i -= 1) {
    let prevIndex = newData.length - 1
    let currentIndex = prevIndex - 1

    while (prevIndex > 0) {
      if (currentIndex === -1) {
        currentIndex = prevIndex - 1
        prevIndex -= 1
        continue
      }
      if (newData[prevIndex][i] === 0 && newData[currentIndex][i] === 0) {
        currentIndex -= 1
      } else if (newData[prevIndex][i] === 0 && newData[currentIndex][i] !== 0) {
        newData[prevIndex][i] = newData[currentIndex][i]
        newData[currentIndex][i] = 0
        currentIndex -= 1
      } else if (newData[prevIndex][i] !== 0 && newData[currentIndex][i] === 0) {
        currentIndex -= 1
      } else if (newData[prevIndex][i] !== 0 && newData[currentIndex][i] !== 0) {
        if (newData[prevIndex][i] === newData[currentIndex][i]) {
          newData[prevIndex][i] = newData[prevIndex][i] + newData[currentIndex][i]
          updateScoreValues(newData[prevIndex][i], maxValue, dispatch, gameIsContinue)
          newData[currentIndex][i] = 0
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

export default swipeDown
