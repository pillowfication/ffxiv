import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0f3d87'
    },
    secondary: {
      main: '#f4511e'
    },
    error: {
      main: '#d32f2f'
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '4rem'
    },
    h2: {
      fontSize: '3rem'
    },
    h3: {
      fontSize: '2.5rem'
    },
    h4: {
      fontSize: '2rem'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      }
    },
    MuiList: {
      defaultProps: {
        dense: true
      }
    },
    MuiMenuItem: {
      defaultProps: {
        dense: true
      }
    },
    MuiTable: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        placement: 'top',
        disableInteractive: true
      }
    }
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0f3d87'
    },
    secondary: {
      main: '#f4511e'
    },
    error: {
      main: '#d32f2f'
    },
    background: {
      default: '#24292e'
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '4rem'
    },
    h2: {
      fontSize: '3rem'
    },
    h3: {
      fontSize: '2.5rem'
    },
    h4: {
      fontSize: '2rem'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        color: '#5d9bff',
        underline: 'hover'
      }
    },
    MuiList: {
      defaultProps: {
        dense: true
      }
    },
    MuiMenuItem: {
      defaultProps: {
        dense: true
      }
    },
    MuiTable: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        placement: 'top',
        disableInteractive: true
      }
    }
  }
})
