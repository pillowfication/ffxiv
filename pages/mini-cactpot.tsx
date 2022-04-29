import React from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Page from '../src/Page'
import Calculator from '../src/mini-cactpot/Calculator'
import About from '../src/mini-cactpot/About'

const MiniCactpot = (): React.ReactElement => {
  const { t } = useTranslation('mini-cactpot')
  return (
    <Page title={t('_title')} description={t('_description')}>
      <Calculator />
      <About />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'mini-cactpot']))
    }
  }
}

export default MiniCactpot
