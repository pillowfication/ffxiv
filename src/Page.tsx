import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Typography from '@material-ui/core/Typography'
import Footer from '../src/Footer'
import { useTranslation } from '../src/i18n'

interface Props {
  title: string | string[]
  description?: string
  seo?: object
  og?: object
  children?: React.ReactNode
}

const Page = ({ title, description, seo = {}, og = {}, children }: Props): React.ReactElement => {
  const router = useRouter()
  const { i18n } = useTranslation('common')
  const path = typeof title === 'string' ? title : title.join(' | ')
  const tail = typeof title === 'string' ? title : title[title.length - 1]

  return (
    <>
      <Head>
        <title>{path}</title>
      </Head>
      <NextSeo
        title={path}
        description={description}
        canonical={`https://ffxiv.pf-n.co${router.asPath}`}
        openGraph={{
          url: `https://ffxiv.pf-n.co${router.asPath}`,
          title: path,
          description,
          locale: i18n.language,
          site_name: 'Lulu’s Tools',
          ...og
        }}
        {...seo}
      />
      <Typography variant='h1' gutterBottom>{tail}</Typography>
      {children}
      <Footer />
    </>
  )
}

export default Page
