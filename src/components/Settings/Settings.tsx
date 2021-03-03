import useStyles from '@components/Settings/style'
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
  Typography,
} from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'
import { InitialStateType } from '../../types/types.'
import { setFieldSize, setSettingsOpen } from '../../reducer'

type PropTypes = {
  resetGame: () => void
  initField: () => void
  state: InitialStateType
  dispatch: any
}

const Settings: React.FC<PropTypes> = ({ resetGame, state, dispatch }): JSX.Element => {
  const classes = useStyles()

  const handleChangeFieldSize = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFieldSize(+target.value))
    handleSettingsToggle()
    resetGame()
  }

  const handleSettingsToggle = () => {
    dispatch(setSettingsOpen(!state.settingsIsOpen))
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleSettingsToggle}>
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

            <FormControl component="fieldset">
              <FormLabel component="legend">Field size:</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={state.fieldSize} onChange={handleChangeFieldSize}>
                <FormControlLabel value={4} control={<Radio />} label="4 x 4" />
                <FormControlLabel value={5} control={<Radio />} label="5 x 5" />
                <FormControlLabel value={6} control={<Radio />} label="6 x 6" />
              </RadioGroup>
            </FormControl>

            <Grid container className={classes.gridElement}>
              <Grid item container xs={3} justify="center">
                <Grid item className={classes.hotkey}>
                  <KeyboardArrowDown />
                </Grid>
                <Grid item className={classes.hotkey}>
                  <Typography variant="h6">S</Typography>
                </Grid>
              </Grid>
              <Grid item container xs={9} alignItems="center">
                <Typography variant="h6">{state.languageIsEn ? 'Move down' : 'Переместить вниз'}</Typography>
              </Grid>
            </Grid>

            <DialogActions>
              <Button onClick={handleSettingsToggle} color="primary">
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
