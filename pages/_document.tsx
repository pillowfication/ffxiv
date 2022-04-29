import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from '../src/create-emotion-cache'
import { GA_TRACKING_ID } from '../src/gtag'

class MyDocument extends Document {
  render (): React.ReactElement {
    return (
      <Html lang='en'>
        <Head>
          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' />
          {(this.props as any).emotionStyleTags}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}', {
  page_path: window.location.pathname,
});
            `.trim()
          }} />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS_HTML' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  const originalRenderPage = ctx.renderPage
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App: any) => props => <App emotionCache={cache} {...props} />
  })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      key={style.key}
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    emotionStyleTags
  }
}

export default MyDocument
