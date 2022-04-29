import React from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Page from '../src/Page'
import Generator from '../src/name-generator/Generator'
import About from '../src/name-generator/About'

const NameGenerator = (): React.ReactElement => {
  const { t } = useTranslation('name-generator')

  return (
    <Page title={t('_title')} description={t('_description')}>
      <Generator />
      <About />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'name-generator']))
    }
  }
}

export default NameGenerator
