export type GameDataType = number[][]

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
  gameIsStart: boolean
  aboutIsOpen: boolean
  settingsIsOpen: boolean
  gameIsReset: boolean
  maxValue: number
  scoreValue: number
  globalScoreValue: number
}
