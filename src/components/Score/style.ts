import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundImage: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '15px',
      color: '#FFF',
      outline: 'none',
    },
    gridElement: {
      margin: '10px 0',
    },
    hotkey: {
      border: '1px solid grey',
      borderRadius: '10px',
      width: '35px',
      height: '35px',
      boxShadow: '2px 2px #FFF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '10px',
    },
    button: {
      borderRadius: '15px',
    },
    closeButton: {
      color: '#D0A9FF',
    },
    table: {
      minWidth: 450,
    },
  }),
)

export default useStyles
