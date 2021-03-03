import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderRadius: '15px',
      padding: '5px 10px',
      minWidth: '80px',
    },
  }),
)

export default useStyles
