import { setGameWin, setScoreData } from '../reducer'

const checkGameIsWin = (value: number, dispatch: any, gameIsContinue: boolean): void => {
  if (value === 2048 && !gameIsContinue) {
    dispatch(setGameWin(true))
    dispatch(setScoreData(value))
  }
}

export default checkGameIsWin
