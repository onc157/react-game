import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'space-between',
      justifyContent: 'center',
      backgroundImage: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '15px',
      color: '#FFF',
      outline: 'none',
    },
    button: {
      borderRadius: '15px',
      padding: '5px 10px',
      minWidth: '100px',
    },
    closeButton: {
      color: '#D0A9FF',
    },
    form: {
      margin: '10px 0',
    },
    formLabel: {
      color: '#FFF',
    },
    fullscreen: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    fullscreenButton: {
      border: 'none',
      borderRadius: '15px',
      background: 'rgba(255, 255, 255, 0.4)',
    },
  }),
)

export default useStyles
