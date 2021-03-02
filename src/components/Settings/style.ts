import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      maxWidth: '600px',
      borderRadius: '15px',
    },
    gridElement: {
      margin: '10px 0',
    },
    hotkey: {
      border: '1px solid grey',
      borderRadius: '10px',
      width: '35px',
      height: '35px',
      boxShadow: '2px 2px grey',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '10px',
    },
  }),
)

export default useStyles
