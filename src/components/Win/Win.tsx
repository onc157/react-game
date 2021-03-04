import useStyles from './style'
import React from 'react'
import { Backdrop, Button, Fade, Modal, PropTypes, Typography } from '@material-ui/core'
import { setGameContinue, setGameWin, setResetGame } from '../../reducer'
import { StateType } from '../../types/types'

type PropTypes = {
  resetGame: () => void
  state: StateType
  dispatch: any
}

const Win: React.FC<PropTypes> = ({ resetGame, state, dispatch }): JSX.Element => {
  const classes = useStyles()

  const onResetGame = () => {
    dispatch(setGameWin(false))
    dispatch(setResetGame(true))
    resetGame()
  }

  const onContinueGame = () => {
    dispatch(setGameWin(false))
    dispatch(setGameContinue(true))
  }

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={state.gameIsWin}
        onClose={onResetGame}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={state.gameIsWin}>
          <div className={classes.paper}>
            <Typography paragraph variant="h3" component="div">
              {state.languageIsEn ? 'You Win!' : 'Вы выиграли!'}
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
            <Typography paragraph variant="body1" component="div">
              {state.languageIsEn
                ? `Even though you won, you can continue to enjoy the game, good luck!`
                : `Несмотря на то, что вы выиграли, вы можете и дальше наслаждаться игрой. Удачи!`}
            </Typography>
            <Button className={classes.button} variant="contained" color="primary" onClick={onContinueGame}>
              {state.languageIsEn ? 'Continue' : 'Продолжить'}
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Win
