import { GameDataType, ScoreDataType, StateType } from './types/types.'

const SET_FIELD_SIZE = 'SET_FIELD_SIZE'
const SET_GAME_DATA = 'SET_GAME_DATA'
const SET_INIT_TIME = 'SET_INIT_TIME'
const SET_NOW_TIME = 'SET_NOW_TIME'
const SET_PAUSE = 'SET_PAUSE'
const SET_PAUSE_DELAY = 'SET_PAUSE_DELAY'
const SET_START_PAUSE_DELAY = 'SET_START_PAUSE_DELAY'
const SET_LANGUAGE = 'SET_LANGUAGE'
const SET_GAME_OVER = 'SET_GAME_OVER'
const SET_GAME_WIN = 'SET_GAME_WIN'
const SET_GAME_START = 'SET_GAME_START'
const SET_GAME_CONTINUE = 'SET_GAME_CONTINUE'
const SET_ABOUT_OPEN = 'SET_ABOUT_OPEN'
const SET_SETTINGS_OPEN = 'SET_SETTINGS_OPEN'
const SET_SCORE_OPEN = 'SET_SCORE_OPEN'
const SET_RESET_GAME = 'SET_RESET_GAME'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_SCORE = 'SET_SCORE'
const SET_GLOBAL_SCORE = 'SET_GLOBAL_SCORE'
const SET_SCORE_DATA = 'SET_FETCH_SCORE'
const SET_FETCH_DATA = 'SET_FETCH_DATA'
const SET_FULLSCREEN = 'SET_FULLSCREEN'
const SET_SOUND = 'SET_SOUND'
const SET_SOUND_VALUE = 'SET_SOUND_VALUE'
const SET_MUSIC = 'SET_MUSIC'
const SET_MUSIC_VALUE = 'SET_MUSIC_VALUE'

export const initialState: StateType = {
  fieldSize: 4,
  gameData: [],
  initTime: new Date(),
  nowTime: new Date(new Date().getTime() - new Date().getTime()),
  isPause: false,
  pauseDelay: 0,
  startPauseDelay: null,
  languageIsEn: true,
  gameIsOver: false,
  gameIsWin: false,
  gameIsStart: false,
  gameIsContinue: false,
  aboutIsOpen: false,
  scoreIsOpen: false,
  settingsIsOpen: false,
  gameIsReset: false,
  maxValue: 0,
  scoreValue: 0,
  globalScoreValue: 0,
  scoreData: [],
  fullScreenIsActive: false,
  isSoundOn: true,
  soundValue: 0.7,
  isMusicOn: true,
  musicValue: 0.2,
}

const reducer = (state: StateType, action: any): StateType => {
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
    case SET_GAME_WIN:
      return {
        ...state,
        gameIsWin: action.gameIsWin,
      }
    case SET_GAME_START:
      return {
        ...state,
        gameIsStart: action.gameIsStart,
      }
    case SET_GAME_CONTINUE:
      return {
        ...state,
        gameIsContinue: action.gameIsContinue,
      }
    case SET_ABOUT_OPEN:
      return {
        ...state,
        aboutIsOpen: action.aboutIsOpen,
      }
    case SET_SCORE_OPEN:
      return {
        ...state,
        scoreIsOpen: action.scoreIsOpen,
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
    case SET_MAX_VALUE:
      return {
        ...state,
        maxValue: action.maxValue,
      }
    case SET_SCORE:
      if (action.scoreValue === 0) {
        return {
          ...state,
          scoreValue: 0,
        }
      } else {
        return {
          ...state,
          scoreValue: state.scoreValue + action.scoreValue,
        }
      }
    case SET_GLOBAL_SCORE:
      if (state.scoreValue >= state.globalScoreValue) {
        return {
          ...state,
          globalScoreValue: state.scoreValue,
        }
      }
      return state
    case SET_SCORE_DATA:
      // eslint-disable-next-line no-case-declarations
      const value = action.scoreForLocal
      // eslint-disable-next-line no-case-declarations
      const time = `${state.nowTime.getMinutes()} : ${state.nowTime.getSeconds()}`
      // eslint-disable-next-line no-case-declarations
      const newScoreData = [...state.scoreData]
      newScoreData.push({ scoreValue: value, time: time })
      newScoreData.sort((a: ScoreDataType, b: ScoreDataType) => b.scoreValue - a.scoreValue)
      if (newScoreData.length > 10) {
        newScoreData.pop()
      }

      localStorage.setItem('scoreData', JSON.stringify(newScoreData))
      return {
        ...state,
        scoreData: newScoreData,
      }
    case SET_FETCH_DATA:
      return {
        ...state,
        ...action.fetchData,
        initTime: new Date(action.fetchData.initTime),
        nowTime: new Date(action.fetchData.nowTime),
      }
    case SET_FULLSCREEN:
      return {
        ...state,
        fullScreenIsActive: action.fullScreenIsActive,
      }
    case SET_SOUND: {
      return {
        ...state,
        isSoundOn: action.isSoundOn,
      }
    }
    case SET_MUSIC: {
      return {
        ...state,
        isMusicOn: action.isMusicOn,
      }
    }
    case SET_SOUND_VALUE: {
      return {
        ...state,
        soundValue: action.soundValue / 100,
      }
    }
    case SET_MUSIC_VALUE: {
      return {
        ...state,
        musicValue: action.musicValue / 100,
      }
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
export const setGameWin = (gameIsWin: boolean) => ({ type: SET_GAME_WIN, gameIsWin })
export const setGameContinue = (gameIsContinue: boolean) => ({ type: SET_GAME_CONTINUE, gameIsContinue })
export const setStartGame = (gameIsStart: boolean) => ({ type: SET_GAME_START, gameIsStart })
export const setAboutOpen = (aboutIsOpen: boolean) => ({ type: SET_ABOUT_OPEN, aboutIsOpen })
export const setScoreOpen = (scoreIsOpen: boolean) => ({ type: SET_SCORE_OPEN, scoreIsOpen })
export const setSettingsOpen = (settingsIsOpen: boolean) => ({ type: SET_SETTINGS_OPEN, settingsIsOpen })
export const setResetGame = (gameIsReset: boolean) => ({ type: SET_RESET_GAME, gameIsReset })
export const setMaxValue = (maxValue: number) => ({ type: SET_MAX_VALUE, maxValue })
export const setScore = (scoreValue: number) => ({ type: SET_SCORE, scoreValue })
export const setGlobalScore = (globalScoreValue: number) => ({ type: SET_GLOBAL_SCORE, globalScoreValue })
export const setScoreData = (scoreForLocal: number) => ({ type: SET_SCORE_DATA, scoreForLocal })
export const setFetchData = (fetchData: StateType) => ({ type: SET_FETCH_DATA, fetchData })
export const setFullScreen = (fullScreenIsActive: boolean) => ({ type: SET_FULLSCREEN, fullScreenIsActive })
export const setSound = (isSoundOn: boolean) => ({ type: SET_SOUND, isSoundOn })
export const setSoundValue = (soundValue: number) => ({ type: SET_SOUND_VALUE, soundValue })
export const setMusic = (isMusicOn: boolean) => ({ type: SET_MUSIC, isMusicOn })
export const setMusicValue = (musicValue: number) => ({ type: SET_MUSIC_VALUE, musicValue })

export default reducer
