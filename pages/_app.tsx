import React, { useEffect, useState } from 'react'
import NextApp from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import Tooltip from '@material-ui/core/Tooltip'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import HomeIcon from '@material-ui/icons/Home'
import GitHubIcon from '@material-ui/icons/GitHub'
import TranslateIcon from '@material-ui/icons/Translate'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import Brightness5Icon from '@material-ui/icons/Brightness5'
import Link from '../src/Link'
import GlobalStyles from '../src/GlobalStyles'
import { lightTheme, darkTheme } from '../src/themes'
import i18n from '../i18n'
import * as gtag from '../src/gtag'

const LANGUAGES = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語'
}

function getLanguage (locale: string): string {
  return LANGUAGES[locale] || (locale || '').toUpperCase()
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 0,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    '& a': {
      color: '#ffffff',
      textTransform: 'none'
    }
  },
  homeIcon: {
    marginRight: theme.spacing(1)
  },
  languageButton: {
    marginRight: theme.spacing(2)
  },
  brightnessIcon: {
    verticalAlign: 'middle'
  },
  main: {
    paddingTop: '4rem',
    paddingBottom: '6rem'
  }
}))

type Props = {
  Component: React.ComponentClass,
  pageProps?: object
}

const App = ({ Component, pageProps }: Props) => {
  const classes = useStyles()
  const router = useRouter()
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    if (typeof window !== 'undefined') {
      setTheme(window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const handleClickLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLanguageAnchorEl(event.currentTarget)
  }

  const handleSelectLanguage = (locale?: string) => {
    setLanguageAnchorEl(null)
    locale && i18n.i18n.changeLanguage(locale)
  }

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Head>
        <title>Lulu’s FFXIV Tools</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS_HTML' />
      </Head>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        <GlobalStyles />
        <AppBar position='fixed'>
          <Container maxWidth='lg'>
            <Grid container justify='space-between' alignItems='center'>
              <Grid item>
                <Toolbar disableGutters className={classes.toolbar}>
                  <Button
                    component={Link}
                    variant='contained'
                    color='primary'
                    disableElevation
                    underline='none'
                    href='/'
                  >
                    <HomeIcon className={classes.homeIcon} />
                    <Typography>Lulu’s Tools</Typography>
                  </Button>
                </Toolbar>
              </Grid>
              <Grid item>
                <Toolbar disableGutters className={classes.toolbar}>
                  <Box display={{ xs: 'none', md: 'inline-block' }}>
                    <Button
                      component={Link}
                      variant='contained'
                      color='primary'
                      disableElevation
                      underline='none'
                      href='https://github.com/pillowfication/ffxiv'
                    >
                      <GitHubIcon />
                    </Button>
                  </Box>
                  <Tooltip title='Choose Language' enterDelay={300}>
                    <Button
                      variant='contained'
                      color='primary'
                      disableElevation
                      className={classes.languageButton}
                      onClick={handleClickLanguage}
                    >
                      <TranslateIcon fontSize='small' />
                      <Box display={{ xs: 'none', md: 'inline-block' }} px={1} >
                        {getLanguage(i18n.i18n.language)}
                      </Box>
                      <ExpandMoreIcon fontSize='small' />
                    </Button>
                  </Tooltip>
                  <Menu
                    anchorEl={languageAnchorEl}
                    marginThreshold={0}
                    open={Boolean(languageAnchorEl)}
                    onClose={handleSelectLanguage.bind(null, null)}
                  >
                    {[i18n.config.defaultLanguage, ...i18n.config.otherLanguages].map(locale =>
                      <MenuItem key={locale} onClick={handleSelectLanguage.bind(null, locale)}>{getLanguage(locale)}</MenuItem>
                    )}
                  </Menu>
                  <Box display={{ xs: 'none', md: 'inline-block' }}>
                    <Brightness5Icon className={classes.brightnessIcon} />
                  </Box>
                  <Switch
                    checked={theme === 'dark'}
                    onChange={handleChangeTheme}
                  />
                  <Box display={{ xs: 'none', md: 'inline-block' }}>
                    <Brightness2Icon className={classes.brightnessIcon} />
                  </Box>
                </Toolbar>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
        <Container maxWidth='lg' className={classes.main} component='main'>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}

App.getInitialProps = async (appContext: any) => ({
  ...await NextApp.getInitialProps(appContext)
})

export default i18n.appWithTranslation(App)
