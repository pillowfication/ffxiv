import React, { useEffect, useState } from 'react'
import NextApp, { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import Container from '@mui/material/Container'
import createEmotionCache from '../src/create-emotion-cache'
import Header from '../src/Header'
import Footer from '../src/Footer'
import { lightTheme, darkTheme } from '../src/themes'
import * as gtag from '../src/gtag'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const clientSideEmotionCache = createEmotionCache()

interface Props extends AppProps {
  emotionCache?: EmotionCache
}

const App = (props: Props): React.ReactElement => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps
  } = props
  const router = useRouter()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Lulu’s FFXIV Tools</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline enableColorScheme />
        <Header theme={theme} setTheme={setTheme} />
        <Container maxWidth='lg' component='main'>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  )
}

App.getInitialProps = async (appContext: any) => ({
  ...await NextApp.getInitialProps(appContext)
})

export default appWithTranslation(App)
