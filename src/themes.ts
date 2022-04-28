import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#3f639f',
      main: '#0f3d87',
      dark: '#0a2a5e'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00'
    },
    background: {
      default: '#f8f9fa'
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      }
    }
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#3f639f',
      main: '#0f3d87',
      dark: '#0a2a5e'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00'
    },
    text: {
      primary: '#e0e0e0'
    },
    background: {
      default: '#24292e'
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif'
  }
})
