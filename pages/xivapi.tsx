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

const XIVAPI = () => {
  const classes = useStyles()
  const { t } = useTranslation('xivapi')
  const [url, setUrl] = useQueryState('url', { history: 'push' })
  const [inputUrl, setInputUrl] = useState('')

  useEffect(() => {
    if (!url) {
      setUrl('/content')
    }
  }, [])

  useEffect(() => {
    setInputUrl(url)
  }, [url])

  const handleInputUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setUrl(inputUrl)
    }
  }

  const handleClickGo = () => {
    setUrl(inputUrl)
  }

  return (
    <Page
      title={t('XIVAPI')}
      description='An interface for browsing the XIVAPI.'
    >
      <Section>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.inputContainer}>
            <TextField
              variant='filled'
              label='URL'
              InputProps={{
                startAdornment: <InputAdornment position='start'>https://xivapi.com</InputAdornment>
              }}
              value={inputUrl}
              onChange={handleInputUrl}
              onKeyPress={handleKeyPress}
              className={classes.input}
            />
            <Button variant='contained' color='primary' onClick={handleClickGo}>Enter</Button>
          </Grid>
          <Grid item xs={12}>
            <NoSsr>
              {url && <Results url={url} onChangeUrl={setUrl} />}
            </NoSsr>
          </Grid>
        </Grid>
      </Section>
    </Page>
  )
}

XIVAPI.getInitialProps = async () => ({
  namespacesRequired: ['common', 'xivapi']
})

export default XIVAPI
