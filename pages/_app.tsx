import React, { useEffect, useState } from 'react'
import NextApp from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import GlobalStyles from '../src/GlobalStyles'
import Header from '../src/Header'
import { lightTheme, darkTheme } from '../src/themes'
import * as gtag from '../src/gtag'
import i18n from '../src/i18n'

const useStyles = makeStyles(() => ({
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
  }, [])

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
        <Header theme={theme} setTheme={setTheme} />
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
