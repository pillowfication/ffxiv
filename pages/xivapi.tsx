import React, { useEffect, useState } from 'react'
import { useQueryState } from 'next-usequerystate'
import { makeStyles } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import Page from '../src/Page'
import Section from '../src/Section'
import Results from '../src/xivapi/Results'
import { useTranslation } from '../src/i18n'

const useStyles = makeStyles(() => ({
  inputContainer: {
    display: 'flex'
  },
  input: {
    flex: 1
  }
}))

const Xivapi = (): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation('xivapi')
  const [url, setUrl] = useQueryState('url', { history: 'push' })
  const [inputUrl, setInputUrl] = useState('')

  useEffect(() => {
    if (url === null) {
      void setUrl('/content')
    }
  }, [])

  useEffect(() => {
    if (url !== null) {
      setInputUrl(url)
    }
  }, [url])

  const handleInputUrl = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputUrl(event.target.value)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      void setUrl(inputUrl)
    }
  }

  const handleClickGo = (): void => {
    void setUrl(inputUrl)
  }

  return (
    <Page title={t('_title')} description={t('_description')}>
      <Section>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.inputContainer}>
            <TextField
              variant='filled'
              label='URL'
              InputProps={{
                startAdornment: <InputAdornment position='start'>https://xivapi.com</InputAdornment>
              }}
              value={inputUrl !== null ? inputUrl : ''}
              onChange={handleInputUrl}
              onKeyPress={handleKeyPress}
              className={classes.input}
            />
            <Button variant='contained' color='primary' onClick={handleClickGo}>Enter</Button>
          </Grid>
          <Grid item xs={12}>
            <NoSsr>
              {url !== null && (
                <Results url={url} onChangeUrl={(...args) => { void setUrl(...args) }} />
              )}
            </NoSsr>
          </Grid>
        </Grid>
      </Section>
    </Page>
  )
}

Xivapi.getInitialProps = async () => ({
  namespacesRequired: ['common', 'xivapi']
})

export default Xivapi
