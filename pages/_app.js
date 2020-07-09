import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/Link'
import { ThemeProvider, makeStyles, withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import HomeIcon from '@material-ui/icons/Home'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import Brightness5Icon from '@material-ui/icons/Brightness5'
import { lightTheme, darkTheme } from '../src/themes'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 0
  },
  homeIcon: {
    marginRight: theme.spacing(1)
  },
  titleButton: {
    textTransform: 'none'
  },
  main: {
    paddingTop: '4rem'
  }
}))

const GlobalStyles = withStyles((theme) => ({
  '@global': {
    'a, a.MuiLink-root': {
      textDecoration: 'none',
      color: theme.palette.type === 'light'
        ? theme.palette.primary.main
        : theme.palette.primary.light
    },
    'a.MuiLink-root:hover': {
      textDecoration: 'none'
    }
  }
}), { name: 'GlobalStyles' })(() => <></>)

export default function App (props) {
  const { Component, pageProps } = props
  const [darkMode, setDarkMode] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const handleChangeTheme = (event) => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <Head>
        <title>Lulu’s FFXIV Tools</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <GlobalStyles />
        <AppBar position='fixed'>
          <Container maxWidth='lg'>
            <Grid container justify='space-between' alignItems='center'>
              <Grid item>
                <Toolbar disableGutters className={classes.toolbar}>
                  <Link href='/'>
                    <Button className={classes.titleButton} color='inherit'>
                      <HomeIcon className={classes.homeIcon} />
                      <Typography>Lulu’s Tools</Typography>
                    </Button>
                  </Link>
                </Toolbar>
              </Grid>
              <Grid item>
                <Toolbar disableGutters className={classes.toolbar}>
                  <Brightness5Icon />
                  <Switch
                    checked={darkMode}
                    onChange={handleChangeTheme}
                  />
                  <Brightness2Icon />
                </Toolbar>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
        <Container maxWidth='lg' className={classes.main}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
