import useStyles from './style'
import React from 'react'
import {
  Backdrop,
  Button,
  DialogActions,
  Fade,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Modal,
  PropTypes,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from '@material-ui/core'
import { StateType } from '../../types/types.'
import { setFieldSize, setFullScreen, setLanguage, setMusic, setMusicValue, setSettingsOpen, setSound, setSoundValue } from '../../reducer'
import { Fullscreen, FullscreenExit, MusicNote, MusicOff, VolumeDown, VolumeUp } from '@material-ui/icons'

type PropTypes = {
  resetGame: () => void
  initField: () => void
  state: StateType
  dispatch: any
  toggleFullScreen: () => void
  bgSoundOn: () => void
  stop: () => void
  playSound: (sound: () => void) => void
  modalSound: () => void
}

const Settings: React.FC<PropTypes> = ({
  resetGame,
  state,
  dispatch,
  toggleFullScreen,
  bgSoundOn,
  stop,
  playSound,
  modalSound,
}): JSX.Element => {
  const classes = useStyles()

  const handleChangeFieldSize = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFieldSize(+target.value))
    handleSettingsToggle()
    resetGame()
  }

  const handleChangeLanguage = () => {
    dispatch(setLanguage(!state.languageIsEn))
  }

  const handleSettingsToggle = () => {
    playSound(modalSound)
    dispatch(setSettingsOpen(!state.settingsIsOpen))
  }

  const handleFullscreenToggle = () => {
    playSound(modalSound)
    dispatch(setFullScreen(!state.fullScreenIsActive))
    toggleFullScreen()
  }

  const onBgMusicOn = () => {
    if (!state.isMusicOn) {
      bgSoundOn()
    }
  }

  const onBgMusicOff = () => {
    if (state.isMusicOn) {
      stop()
    }
  }

  const handleSoundToggle = () => {
    dispatch(setSound(!state.isSoundOn))
  }

  const handleMusicToggle = () => {
    dispatch(setMusic(!state.isMusicOn))
  }

  const handleChangeSoundValue = (event: any, newValue: number | number[]) => {
    dispatch(setSoundValue(newValue as number))
  }

  const handleChangeMusicValue = (event: any, newValue: number | number[]) => {
    dispatch(setMusicValue(newValue as number))
  }

  return (
    <div>
      <Button className={classes.button} variant="contained" color="primary" onClick={handleSettingsToggle}>
        {state.languageIsEn ? 'Settings' : 'Настройки'}
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={state.settingsIsOpen}
        onClose={handleSettingsToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={state.settingsIsOpen}>
          <div className={classes.paper}>
            <Typography paragraph variant="h4" component="div">
              {state.languageIsEn ? 'Settings' : 'Настройки'}
            </Typography>
            <FormControl className={classes.form} component="fieldset">
              <FormLabel className={classes.formLabel} component="legend">
                {state.languageIsEn ? 'Field size:' : 'Размер поля:'}
              </FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={state.fieldSize} onChange={handleChangeFieldSize} row>
                <FormControlLabel value={4} control={<Radio />} label="4 x 4" />
                <FormControlLabel value={5} control={<Radio />} label="5 x 5" />
                <FormControlLabel value={6} control={<Radio />} label="6 x 6" />
              </RadioGroup>
            </FormControl>
            <FormControl className={classes.form} component="fieldset">
              <FormLabel className={classes.formLabel} component="legend">
                {state.languageIsEn ? 'Language:' : 'Язык:'}
              </FormLabel>
              <RadioGroup
                // className={classes.radioGroup}
                aria-label="gender"
                name="gender1"
                value={state.languageIsEn}
                onChange={handleChangeLanguage}
                row
              >
                <FormControlLabel value={true} control={<Radio />} label={state.languageIsEn ? 'English:' : 'Английский:'} />
                <FormControlLabel value={false} control={<Radio />} label={state.languageIsEn ? 'Russian:' : 'Русский:'} />
              </RadioGroup>
            </FormControl>
            <div className={classes.fullscreen}>
              <Typography paragraph variant="body1" component="div">
                {state.languageIsEn ? 'Fullscreen Mode: ' : 'Полноэкранный режим: '}
              </Typography>

              <Button className={classes.button} variant="contained" color="primary" onClick={handleFullscreenToggle}>
                {state.fullScreenIsActive ? <FullscreenExit /> : <Fullscreen />}
              </Button>
            </div>
            <FormControl className={classes.form} component="fieldset">
              <FormLabel className={classes.formLabel} component="legend">
                {state.languageIsEn ? 'Sound:' : 'Звук:'}
              </FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={state.isSoundOn} onChange={handleSoundToggle} row>
                <FormControlLabel value={true} control={<Radio />} label={state.languageIsEn ? 'On:' : 'Вкл:'} />
                <FormControlLabel value={false} control={<Radio />} label={state.languageIsEn ? 'Off:' : 'Выкл:'} />
              </RadioGroup>
            </FormControl>
            <Grid container spacing={2}>
              <Grid item>
                <VolumeDown />
              </Grid>
              <Grid item xs>
                <Slider
                  className={classes.slider}
                  value={state.soundValue * 100}
                  onChange={handleChangeSoundValue}
                  aria-labelledby="continuous-slider"
                />
              </Grid>
              <Grid item>
                <VolumeUp />
              </Grid>
            </Grid>
            <FormControl className={classes.form} component="fieldset">
              <FormLabel className={classes.formLabel} component="legend">
                {state.languageIsEn ? 'Music:' : 'Музыка:'}
              </FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={state.isMusicOn} onChange={handleMusicToggle} row>
                <FormControlLabel value={true} onClick={onBgMusicOn} control={<Radio />} label={state.languageIsEn ? 'On:' : 'Вкл:'} />
                <FormControlLabel value={false} onClick={onBgMusicOff} control={<Radio />} label={state.languageIsEn ? 'Off:' : 'Выкл:'} />
              </RadioGroup>
            </FormControl>
            <Grid container spacing={2}>
              <Grid item>
                <MusicOff />
              </Grid>
              <Grid item xs>
                <Slider
                  className={classes.slider}
                  value={state.musicValue * 100}
                  onChange={handleChangeMusicValue}
                  aria-labelledby="continuous-slider"
                />
              </Grid>
              <Grid item>
                <MusicNote />
              </Grid>
            </Grid>
            <DialogActions>
              <Button className={classes.closeButton} onClick={handleSettingsToggle} color="primary">
                Close
              </Button>
            </DialogActions>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Settings
