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
      fontSize: '2.5rem'
    },
    h3: {
      fontSize: '2rem'
    },
    h4: {
      fontSize: '1.85rem'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      }
    },
    MuiTable: {
      defaultProps: {
        size: 'small'
      }
      // styleOverrides: {
      //   root: {
      //     '& tbody tr:last-child > *': {
      //       borderBottom: 0
      //     }
      //   }
      // }
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
      default: '#121a21',
      paper: '#0f1315'
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: '"Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '4rem'
    },
    h2: {
      fontSize: '2.5rem'
    },
    h3: {
      fontSize: '2rem'
    },
    h4: {
      fontSize: '1.85rem'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        color: '#5d9bff',
        underline: 'hover'
      }
    },
    MuiTable: {
      defaultProps: {
        size: 'small'
      }
      // styleOverrides: {
      //   root: {
      //     '& tbody tr:last-child > *': {
      //       borderBottom: 0
      //     }
      //   }
      // }
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
