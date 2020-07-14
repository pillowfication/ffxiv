import { createMuiTheme } from '@material-ui/core/styles'
import { lighten, fade } from '@material-ui/core/styles/colorManipulator'

const PRIMARY_COLOR = '#0f3d87'

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: lighten(PRIMARY_COLOR, 0.5),
      main: PRIMARY_COLOR,
      dark: '#082554'
    },
    background: {
      default: '#fafbfc'
    },
    action: {
      hover: fade(PRIMARY_COLOR, 0.15)
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '3rem'
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 700
    },
    h6: {
      fontSize: '1.3rem',
      fontWeight: 600
    }
  },
  overrides: {
    MuiLink: {
      root: {
        color: PRIMARY_COLOR
      }
    },
    MuiTableHead: {
      root: {
        backgroundColor: '#e0e0e0'
      }
    },
    MuiTableBody: {
      root: {
        backgroundColor: '#f5f5f5'
      }
    },
    MuiTableCell: {
      head: {
        fontWeight: 'bold'
      }
    }
  }
})

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#1966e3',
      main: PRIMARY_COLOR,
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
    fontSize: 16,
    fontFamily: '"Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '3rem'
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 700
    },
    h6: {
      fontSize: '1.3rem',
      fontWeight: 600
    }
  },
  overrides: {
    MuiLink: {
      root: {
        color: '#1966e3'
      }
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#1966e3'
        }
      }
    },
    MuiInput: {
      underline: {
        '&::after': {
          borderBottomColor: '#1966e3'
        }
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#31363f'
      }
    },
    MuiTableHead: {
      root: {
        backgroundColor: '#2c313a'
      }
    },
    MuiTableBody: {
      root: {
        backgroundColor: '#31363f'
      }
    },
    MuiTableCell: {
      head: {
        fontWeight: 'bold'
      }
    }
  }
})
