import React from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Page from '../src/Page'
import Calculator from '../src/high-or-low/Calculator'
import About from '../src/high-or-low/About'

const HighOrLow = (): React.ReactElement => {
  const { t } = useTranslation('high-or-low')

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
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'high-or-low']))
    }
  }
}

export default HighOrLow
