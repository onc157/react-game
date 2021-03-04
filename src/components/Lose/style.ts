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
      alignItems: 'center',
      justifyContent: 'center',
      padding: '50px',
      backgroundImage: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
      boxShadow: theme.shadows[5],
      borderRadius: '15px',
      color: '#FFF',
      outline: 'none',
    },
    button: {
      marginTop: '20px',
      width: '200px',
      height: '60px',
      fontSize: '20px',
      borderRadius: '15px',
    },
  }),
)

export default useStyles
