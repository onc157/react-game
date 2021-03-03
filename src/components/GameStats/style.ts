import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      width: '150px',
      height: '40px',
      fontSize: '15px',
    },
  }),
)

export default useStyles
