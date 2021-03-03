import useStyles from './style'
import React from 'react'
import { Backdrop, Button, DialogActions, Fade, Grid, Modal, PropTypes, Typography } from '@material-ui/core'
import { KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp } from '@material-ui/icons'
import { setAboutOpen } from '../../reducer'

type PropTypes = {
  languageIsEn: boolean
  aboutIsOpen: boolean
  dispatch: any
}

const About: React.FC<PropTypes> = ({ languageIsEn, aboutIsOpen, dispatch }): JSX.Element => {
  const classes = useStyles()

  const handleAboutToggle = () => {
    dispatch(setAboutOpen(!aboutIsOpen))
  }

  return (
    <div>
      <Button className={classes.button} variant="contained" color="primary" onClick={handleAboutToggle}>
        {languageIsEn ? 'About' : 'Об игре'}
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={aboutIsOpen}
        onClose={handleAboutToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={aboutIsOpen}>
          <div className={classes.paper}>
            <Typography paragraph variant="h4" component="div">
              {languageIsEn ? 'About' : 'Об игре'}
            </Typography>
            <Typography paragraph variant="body1" component="div">
              {languageIsEn ? 'Join the numbers and get to the 2048 tile!' : 'Соединяйте вместе одинаковые числа и дойдите до 2048!'}
            </Typography>
            <Typography paragraph variant="body1" component="div">
              {languageIsEn
                ? 'Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one.'
                : 'Используйте Ваши стрелки на клавиатуре, чтобы перемещать плитки. Когда 2 плитки с одинаковым числом соприкосаются, они сливаются в одну.'}
            </Typography>
            <Typography paragraph variant="body1" component="div">
              {languageIsEn ? 'Get to the 2048 tile, and reach a high score!' : 'Соберите плитку с числом 2048 и установите рекорд!'}
            </Typography>
            <Typography paragraph variant="h5" component="div">
              {languageIsEn ? 'Hotkeys' : 'Горячие клавиши'}
            </Typography>
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
                <Typography variant="h6">{languageIsEn ? 'Move down' : 'Переместить вниз'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid item container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <KeyboardArrowUp />
                </div>
                <div className={classes.hotkey}>
                  <Typography variant="h6">W</Typography>
                </div>
              </Grid>
              <Grid item container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Move up' : 'Переместить вверх'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid item container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <KeyboardArrowRight />
                </div>
                <div className={classes.hotkey}>
                  <Typography variant="h6">D</Typography>
                </div>
              </Grid>
              <Grid item container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Move right' : 'Переместить вправо'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid item container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <KeyboardArrowLeft />
                </div>
                <div className={classes.hotkey}>
                  <Typography variant="h6">A</Typography>
                </div>
              </Grid>
              <Grid item container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Move left' : 'Переместить влево'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid item container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <Typography variant="h6">N</Typography>
                </div>
              </Grid>
              <Grid item container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'New game' : 'Новая игра'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid item container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <Typography variant="h6">G</Typography>
                </div>
              </Grid>
              <Grid item container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Score' : 'Результаты'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid item container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <Typography variant="h6">T</Typography>
                </div>
              </Grid>
              <Grid item container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Settings' : 'Настройки'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid item container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <Typography variant="h6">P</Typography>
                </div>
              </Grid>
              <Grid item container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Pause' : 'Пауза'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid item container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <Typography variant="h6">F</Typography>
                </div>
              </Grid>
              <Grid item container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Fullscreen mode' : 'Полноэкранный режим'}</Typography>
              </Grid>
            </Grid>
            <DialogActions>
              <Button className={classes.closeButton} onClick={handleAboutToggle} color="primary">
                Close
              </Button>
            </DialogActions>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default About
