import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
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
import i18n from '../i18n'
import GlobalStyles from '../src/GlobalStyles'
import { lightTheme, darkTheme } from '../src/themes'

const LANGUAGES = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語'
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 0,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  homeIcon: {
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(1)
    },
  },
  gitHubIcon: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      margin: theme.spacing(0, 2)
    }
  },
  titleButton: {
    textTransform: 'none'
  },
  languageButton: {
    marginRight: theme.spacing(2)
  },
  language: {
    margin: theme.spacing(0, 0.5, 0, 1),
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  brightnessIcon: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    }
  },
  main: {
    paddingTop: '4rem',
    paddingBottom: '6rem'
  }
}))

type Props = {
  Component: React.ComponentClass,
  pageProps: object
}

const App = ({ Component, pageProps }: Props) => {
  const classes = useStyles()
  const router = useRouter()
  const [languageAnchorEl, setLanguageAnchorEl] = useState<HTMLElement>(null)
  const [theme, setTheme] = useState('light')

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
                  <Link href='https://github.com/pillowfication/ffxiv'>
                    <Button color='inherit'>
                      <GitHubIcon />
                    </Button>
                  </Link>
                  <Tooltip title='Choose Language' enterDelay={300}>
                    <Button
                      variant='contained'
                      color='primary'
                      disableElevation
                      className={classes.languageButton}
                      onClick={handleClickLanguage}
                    >
                      <TranslateIcon fontSize='small' />
                      <span className={classes.language}>{router.locale}</span>
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
                      <MenuItem key={locale} onClick={handleSelectLanguage.bind(null, locale)}>{LANGUAGES[locale] || locale.toUpperCase()}</MenuItem>
                    )}
                  </Menu>
                  <Brightness5Icon className={classes.brightnessIcon} />
                  <Switch
                    checked={theme === 'dark'}
                    onChange={handleChangeTheme}
                  />
                  <Brightness2Icon className={classes.brightnessIcon} />
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

export default i18n.appWithTranslation(App)
