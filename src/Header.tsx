import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
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
import Link from './Link'
import { useTranslation } from './i18n'

const LANGUAGES = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
  ko: '한국어'
}

function getLanguage (locale: string): string {
  return LANGUAGES[locale] !== undefined ? LANGUAGES[locale] : locale.toUpperCase()
}

const useStyles = makeStyles(theme => ({
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
  }
}))

interface Props {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

const Header = ({ theme, setTheme }: Props): React.ReactElement => {
  const classes = useStyles()
  const { i18n } = useTranslation('common')
  const [languageAnchorEl, setLanguageAnchorEl] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const handleClickLanguage = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setLanguageAnchorEl(event.currentTarget)
  }

  const handleSelectLanguage = (locale?: string): void => {
    setLanguageAnchorEl(null)
    if (locale !== undefined) {
      i18n.changeLanguage(locale)
        .then(() => {})
        .catch(() => {})
    }
  }

  const handleChangeTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <AppBar position='fixed'>
      <Container maxWidth='lg'>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item>
            <Toolbar disableGutters className={classes.toolbar}>
              <Tooltip title='Go home' enterDelay={300}>
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
              </Tooltip>
            </Toolbar>
          </Grid>
          <Grid item>
            <Toolbar disableGutters className={classes.toolbar}>
              <Box display={{ xs: 'none', md: 'inline-block' }}>
                <Tooltip title='Source code' enterDelay={300}>
                  <Button
                    variant='contained'
                    color='primary'
                    disableElevation
                    href='https://github.com/pillowfication/ffxiv'
                  >
                    <GitHubIcon />
                  </Button>
                </Tooltip>
              </Box>
              <Tooltip title='Change language' enterDelay={300}>
                <Button
                  variant='contained'
                  color='primary'
                  disableElevation
                  className={classes.languageButton}
                  onClick={handleClickLanguage}
                >
                  <TranslateIcon fontSize='small' />
                  <Box display={{ xs: 'none', md: 'inline-block' }} px={1} >
                    <NoSsr>{getLanguage(i18n.language)}</NoSsr>
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
                {
                  // @ts-expect-error
                  [i18n.options.defaultLanguage, ...i18n.options.otherLanguages].map(locale =>
                    <MenuItem key={locale} onClick={handleSelectLanguage.bind(null, locale)}>{getLanguage(locale)}</MenuItem>
                  )
                }
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
  )
}

export default Header
