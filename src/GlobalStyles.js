import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  '@global': {
    section: {
      marginBottom: theme.spacing(4)
    },
    code: {
      fontFamily: 'Consolas, "Liberation Mono", Courier, monospace',
      'pre &': {
        fontSize: '1.125em'
      }
    }
  }
}))

export default function GlobalStyles (props) {
  useStyles()
  return null
}
