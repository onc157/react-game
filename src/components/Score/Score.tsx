import useStyles from '@components/About/style'
import React, { useState } from 'react'
import { Backdrop, Button, Fade, Modal } from '@material-ui/core'

type PropTypes = {
  languageIsEn: boolean
}

const Score: React.FC<PropTypes> = ({ languageIsEn }): JSX.Element => {
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
            <h2 id="spring-modal-title">Spring modal</h2>
            <p id="spring-modal-description">react-spring animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Score
