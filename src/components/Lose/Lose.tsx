import useStyles from './style'
import React from 'react'
import { Backdrop, Button, Fade, Modal, PropTypes, Typography } from '@material-ui/core'
import { setGameOver, setResetGame } from '../../reducer'
import { StateType } from '../../types/types.'

type PropTypes = {
  resetGame: () => void
  state: StateType
  dispatch: any
}

const Lose: React.FC<PropTypes> = ({ resetGame, state, dispatch }): JSX.Element => {
  const classes = useStyles()

  const onResetGame = () => {
    dispatch(setGameOver(false))
    dispatch(setResetGame(true))
    resetGame()
  }

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={state.gameIsOver}
        onClose={onResetGame}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={state.gameIsOver}>
          <div className={classes.paper}>
            <Typography paragraph variant="h3" component="div">
              {state.languageIsEn ? 'You Lose!' : 'Вы проиграли!'}
            </Typography>
            <Typography paragraph variant="h4" component="div">
              {state.languageIsEn ? `Your Score: ${state.scoreValue}` : `Ваш счет: ${state.scoreValue}`}
            </Typography>
            <Typography paragraph variant="h5" component="div">
              {state.languageIsEn ? `Your maximum tile value: ${state.maxValue}` : `Максимальное собранное значение: ${state.maxValue}`}
            </Typography>
            <Button className={classes.button} variant="contained" color="primary" onClick={onResetGame}>
              {state.languageIsEn ? 'Try again' : 'Попробовать снова'}
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Lose
