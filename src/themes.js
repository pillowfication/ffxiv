import { createMuiTheme } from '@material-ui/core/styles'

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#1966e3',
      main: '#0f3d87',
      dark: '#082554'
    },
    background: {
      default: '#fafbfc'
    }
  },
  typography: {
    fontFamily: '"Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    h5: {
      fontWeight: 700
    },
    h6: {
      fontWeight: 700
    }
  }
})

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#1966e3',
      main: '#0f3d87',
      dark: '#082554'
    },
    text: {
      primary: '#e0e0e0'
    },
    background: {
      default: '#24292e'
    }
  },
  typography: {
    fontFamily: '"Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    h5: {
      fontWeight: 700
    },
    h6: {
      fontWeight: 700
    }
  }
})
