import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Typography from '@material-ui/core/Typography'
import Footer from '../src/Footer'
import i18n from '../src/i18n'
import { I18n } from 'next-i18next'

type Props = {
  title?: string,
  description?: string,
  seo?: object,
  i18n: I18n,
  children?: React.ReactNode
}

const Page = ({ title, description, seo = {}, i18n, children }: Props) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://ffxiv.pf-n.co${router.asPath}`}
        openGraph={{
          url: `https://ffxiv.pf-n.co${router.asPath}`,
          title,
          description,
          locale: i18n.language,
          site_name: 'Lulu’s Tools'
        }}
        {...seo}
      />
      <Typography variant='h1' gutterBottom>{title}</Typography>
      {children}
      <Footer />
    </>
  )
}

export default i18n.withTranslation()(Page)
