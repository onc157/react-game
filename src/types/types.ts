import { makeStyles } from '@material-ui/core'

export type GameDataType = number[][]
export type ScoreDataType = {
  scoreValue: number
  time: string
}

export type StateType = {
  fieldSize: number
  gameData: GameDataType
  initTime: Date
  nowTime: Date
  isPause: boolean
  pauseDelay: number
  startPauseDelay: Date | null
  languageIsEn: boolean
  gameIsOver: boolean
  gameIsWin: boolean
  gameIsStart: boolean
  gameIsContinue: boolean
  aboutIsOpen: boolean
  scoreIsOpen: boolean
  settingsIsOpen: boolean
  gameIsReset: boolean
  maxValue: number
  scoreValue: number
  globalScoreValue: number
  scoreData: ScoreDataType[]
  fullScreenIsActive: boolean
  isSoundOn: boolean
  soundValue: number
  isMusicOn: boolean
  musicValue: number
}
