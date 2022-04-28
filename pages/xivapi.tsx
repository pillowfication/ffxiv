import React, { useEffect, useState } from 'react'
import { useQueryState } from 'next-usequerystate'
import NoSsr from '@mui/material/NoSsr'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import Page from '../src/Page'
import Section from '../src/Section'
import Results from '../src/xivapi/Results'
import { useTranslation } from '../src/i18n'

const Xivapi = (): React.ReactElement => {
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
          <Grid item xs={12}>
            <TextField
              variant='filled'
              fullWidth
              label='URL'
              InputProps={{
                startAdornment: <InputAdornment position='start'>https://xivapi.com</InputAdornment>,
                endAdornment: <Button variant='contained' color='primary' onClick={handleClickGo}>Go</Button>
              }}
              value={inputUrl !== null ? inputUrl : ''}
              onChange={handleInputUrl}
              onKeyPress={handleKeyPress}
            />
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
