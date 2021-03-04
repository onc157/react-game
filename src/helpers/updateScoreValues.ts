import { setGlobalScore, setMaxValue, setScore } from '../reducer'
import checkGameIsWin from './checkGameIsWin'

const updateScoreValues = (
  value: number,
  globalScoreValue: number,
  maxValue: number,
  dispatch: any,
  gameIsContinue: boolean,
  playSound: (sound: () => void) => void,
  winSound: () => void,
) => {
  dispatch(setScore(value))
  dispatch(setGlobalScore(value))
  if (value > maxValue) dispatch(setMaxValue(value))
  checkGameIsWin(value, dispatch, gameIsContinue, playSound, winSound)
}

export default updateScoreValues
