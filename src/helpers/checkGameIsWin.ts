import { setGameWin, setScoreData } from '../reducer'

const checkGameIsWin = (
  value: number,
  dispatch: any,
  gameIsContinue: boolean,
  playSound: (sound: () => void) => void,
  winSound: () => void,
): void => {
  if (value === 2048 && !gameIsContinue) {
    playSound(winSound)
    dispatch(setGameWin(true))
    dispatch(setScoreData(value))
  }
}

export default checkGameIsWin
