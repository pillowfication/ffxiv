import { makeStyles } from '@material-ui/core/styles'

const ustStyles = makeStyles((theme) => ({
  '@global': {
    section: {
      marginBottom: theme.spacing(4)
    },
    code: {
      fontSize: '1.25em'
    }
  }
}))

export default function GlobalStyles (props) {
  ustStyles()
  return null
}
