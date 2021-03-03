import { setGlobalScore, setMaxValue, setScore } from '../reducer'
import checkGameIsWin from './checkGameIsWin'

const updateScoreValues = (value: number, maxValue: number, dispatch: any, gameIsContinue: boolean) => {
  dispatch(setScore(value))
  dispatch(setGlobalScore(value))
  if (value > maxValue) dispatch(setMaxValue(value))
  checkGameIsWin(value, dispatch, gameIsContinue)
}

export default updateScoreValues
