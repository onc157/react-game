import useStyles from '@components/About/style'
import React, { useState } from 'react'
import { Backdrop, Button, Fade, Grid, Modal, PropTypes, Typography } from '@material-ui/core'
import { KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp } from '@material-ui/icons'

type PropTypes = {
  languageIsEn: boolean
}

const About: React.FC<PropTypes> = ({ languageIsEn }): JSX.Element => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        {languageIsEn ? 'About' : 'Об игре'}
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
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
              <Grid container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <KeyboardArrowDown />
                </div>
                <div className={classes.hotkey}>
                  <Typography variant="h6">S</Typography>
                </div>
              </Grid>
              <Grid container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Move down' : 'Переместить вниз'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <KeyboardArrowUp />
                </div>
                <div className={classes.hotkey}>
                  <Typography variant="h6">W</Typography>
                </div>
              </Grid>
              <Grid container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Move up' : 'Переместить вверх'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <KeyboardArrowRight />
                </div>
                <div className={classes.hotkey}>
                  <Typography variant="h6">D</Typography>
                </div>
              </Grid>
              <Grid container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Move right' : 'Переместить вправо'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <KeyboardArrowLeft />
                </div>
                <div className={classes.hotkey}>
                  <Typography variant="h6">A</Typography>
                </div>
              </Grid>
              <Grid container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Move left' : 'Переместить влево'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <Typography variant="h6">N</Typography>
                </div>
              </Grid>
              <Grid container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'New game' : 'Новая игра'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <Typography variant="h6">G</Typography>
                </div>
              </Grid>
              <Grid container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Score' : 'Результаты'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <Typography variant="h6">T</Typography>
                </div>
              </Grid>
              <Grid container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Settings' : 'Настройки'}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridElement}>
              <Grid container xs={3} justify="center">
                <div className={classes.hotkey}>
                  <Typography variant="h6">P</Typography>
                </div>
              </Grid>
              <Grid container xs={9} alignItems="center">
                <Typography variant="h6">{languageIsEn ? 'Pause' : 'Пауза'}</Typography>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default About
