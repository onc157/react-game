import { setGlobalScore, setMaxValue, setScore } from '../reducer'

const updateScoreValues = (value: number, maxValue: number, dispatch: any) => {
  dispatch(setScore(value))
  dispatch(setGlobalScore(value))
  if (value > maxValue) dispatch(setMaxValue(value))
}

export default updateScoreValues
