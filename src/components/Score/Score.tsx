import useStyles from '@components/Score/style'
import React, { useState } from 'react'
import {
  Backdrop,
  Button,
  Fade,
  Modal,
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core'
import { ScoreDataType, StateType } from '../../types/types.'

type PropTypes = {
  languageIsEn: boolean
  state: StateType
  dispatch: any
}

const Score: React.FC<PropTypes> = ({ languageIsEn, state, dispatch }): JSX.Element => {
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
      <Button className={classes.button} variant="contained" color="primary" onClick={handleOpen}>
        {languageIsEn ? 'Score' : 'Результаты'}
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
              {state.languageIsEn ? 'Score' : 'Результаты'}
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">{state.languageIsEn ? '#' : '№'}</TableCell>
                    <TableCell align="center">{state.languageIsEn ? 'Score' : 'Очки'}</TableCell>
                    <TableCell align="center">{state.languageIsEn ? 'Time' : 'Время'}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.scoreData.map((row: ScoreDataType, i: number) => (
                    <TableRow key={i}>
                      <TableCell align="center">{i + 1}</TableCell>
                      <TableCell align="center">{row.scoreValue}</TableCell>
                      <TableCell align="center">{row.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Score
