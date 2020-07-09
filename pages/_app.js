import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import { ThemeProvider, makeStyles /* , withStyles */ } from '@material-ui/core/styles'
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
    minHeight: 0,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  homeIcon: {
    marginRight: theme.spacing(1)
  },
  titleButton: {
    textTransform: 'none'
  },
  main: {
    paddingTop: '4rem',
    paddingBottom: '6rem'
  }
}))

// const GlobalStyles = withStyles((theme) => ({
//   '@global': {
//   }
// }), { name: 'GlobalStyles' })(() => <></>)

export default function App (props) {
  const { Component, pageProps } = props
  const [theme, setTheme] = useState('light')
  const classes = useStyles()

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
    setTheme((typeof window !== 'undefined' && window.localStorage.getItem('theme')) || 'light')
  }, [])

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const handleChangeTheme = (event) => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Head>
        <title>Lulu’s FFXIV Tools</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        {/* <GlobalStyles /> */}
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
                    checked={theme === 'dark'}
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
