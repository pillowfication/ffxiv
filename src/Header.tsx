import React, { useEffect, useState } from 'react'
import NoSsr from '@mui/material/NoSsr'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Switch from '@mui/material/Switch'
import Tooltip from '@mui/material/Tooltip'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import HomeIcon from '@mui/icons-material/Home'
import GitHubIcon from '@mui/icons-material/GitHub'
import TranslateIcon from '@mui/icons-material/Translate'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from './Link'
import { useTranslation } from './i18n'

const LANGUAGES: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
  cn: '中文',
  ko: '한국어'
}

function getLanguage (locale: string): string {
  return LANGUAGES[locale] !== undefined ? LANGUAGES[locale] : locale.toUpperCase()
}

interface Props {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

const Header = ({ theme, setTheme }: Props): React.ReactElement => {
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
    <AppBar position='sticky' enableColorOnDark>
      <Container maxWidth='lg'>
        <Toolbar disableGutters variant='dense'>
          <Tooltip title='Go home' enterDelay={300}>
            <Button
              component={Link}
              variant='contained'
              color='primary'
              disableElevation
              href='/'
            >
              <HomeIcon />
              <Typography sx={{ ml: 1, textTransform: 'none' }}>Lulu’s Tools</Typography>
            </Button>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title='Source code' enterDelay={300}>
            <Button
              component={Link}
              variant='contained'
              color='primary'
              disableElevation
              href='https://github.com/pillowfication/ffxiv'
            >
              <GitHubIcon />
            </Button>
          </Tooltip>
          <Tooltip title='Change language' enterDelay={300}>
            <Button
              variant='contained'
              color='primary'
              disableElevation
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
            onClose={handleSelectLanguage.bind(null, undefined)}
          >
            {
              // @ts-expect-error
              [i18n.options.defaultLanguage, ...i18n.options.otherLanguages].map(locale =>
                <MenuItem key={locale} onClick={handleSelectLanguage.bind(null, locale)}>{getLanguage(locale)}</MenuItem>
              )
            }
          </Menu>
          <Switch checked={theme === 'dark'} onChange={handleChangeTheme} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
