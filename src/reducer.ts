import { GameDataType, InitialStateType } from './types/types.'

const SET_FIELD_SIZE = 'SET_FIELD_SIZE'
const SET_GAME_DATA = 'SET_GAME_DATA'
const SET_INIT_TIME = 'SET_INIT_TIME'
const SET_NOW_TIME = 'SET_NOW_TIME'
const SET_PAUSE = 'SET_PAUSE'
const SET_PAUSE_DELAY = 'SET_PAUSE_DELAY'
const SET_START_PAUSE_DELAY = 'SET_START_PAUSE_DELAY'
const SET_LANGUAGE = 'SET_LANGUAGE'
const SET_GAME_OVER = 'SET_GAME_OVER'
const SET_GAME_START = 'SET_GAME_START'
const SET_ABOUT_OPEN = 'SET_ABOUT_OPEN'
const SET_SETTINGS_OPEN = 'SET_SETTINGS_OPEN'
const SET_RESET_GAME = 'SET_RESET_GAME'

export const initialState: InitialStateType = {
  fieldSize: 4,
  gameData: [],
  initTime: new Date(),
  nowTime: new Date(new Date().getTime() - new Date().getTime()),
  isPause: false,
  pauseDelay: 0,
  startPauseDelay: null,
  languageIsEn: true,
  gameIsOver: false,
  gameIsStart: false,
  aboutIsOpen: false,
  settingsIsOpen: false,
  gameIsReset: false,
}

const reducer = (state: InitialStateType, action: any) => {
  switch (action.type) {
    case SET_FIELD_SIZE:
      return {
        ...state,
        fieldSize: action.fieldSize,
      }
    case SET_GAME_DATA:
      return {
        ...state,
        gameData: action.newData,
      }
    case SET_INIT_TIME:
      return {
        ...state,
        initTime: action.initTime,
      }
    case SET_NOW_TIME:
      return {
        ...state,
        nowTime: action.nowTime,
      }
    case SET_PAUSE:
      return {
        ...state,
        isPause: action.isPause,
      }
    case SET_PAUSE_DELAY:
      return {
        ...state,
        pauseDelay: action.pauseDelay,
      }
    case SET_START_PAUSE_DELAY:
      return {
        ...state,
        startPauseDelay: action.startPauseDelay,
      }
    case SET_LANGUAGE:
      return {
        ...state,
        languageIsEn: action.languageIsEn,
      }
    case SET_GAME_OVER:
      return {
        ...state,
        gameIsOver: action.gameIsOver,
      }
    case SET_GAME_START:
      return {
        ...state,
        gameIsStart: action.gameIsStart,
      }
    case SET_ABOUT_OPEN:
      return {
        ...state,
        aboutIsOpen: action.aboutIsOpen,
      }
    case SET_SETTINGS_OPEN:
      return {
        ...state,
        settingsIsOpen: action.settingsIsOpen,
      }
    case SET_RESET_GAME:
      return {
        ...state,
        gameIsReset: action.gameIsReset,
      }
    default:
      return state
  }
}

export const setFieldSize = (fieldSize: number) => ({ type: SET_FIELD_SIZE, fieldSize })
export const setGameData = (newData: GameDataType) => ({ type: SET_GAME_DATA, newData })
export const setInitTime = (initTime: Date) => ({ type: SET_INIT_TIME, initTime })
export const setNowTime = (nowTime: Date) => ({ type: SET_NOW_TIME, nowTime })
export const setPause = (isPause: boolean) => ({ type: SET_PAUSE, isPause })
export const setPauseDelay = (pauseDelay: number) => ({ type: SET_PAUSE_DELAY, pauseDelay })
export const setStartPauseDelay = (startPauseDelay: Date | null) => ({ type: SET_START_PAUSE_DELAY, startPauseDelay })
export const setLanguage = (languageIsEn: boolean) => ({ type: SET_LANGUAGE, languageIsEn })
export const setGameOver = (gameIsOver: boolean) => ({ type: SET_GAME_OVER, gameIsOver })
export const setStartGame = (gameIsStart: boolean) => ({ type: SET_GAME_START, gameIsStart })
export const setAboutOpen = (aboutIsOpen: boolean) => ({ type: SET_ABOUT_OPEN, aboutIsOpen })
export const setSettingsOpen = (settingsIsOpen: boolean) => ({ type: SET_SETTINGS_OPEN, settingsIsOpen })
export const setResetGame = (gameIsReset: boolean) => ({ type: SET_RESET_GAME, gameIsReset })

export default reducer
