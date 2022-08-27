import React from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Page from '../src/Page'
import Calculator from '../src/faux-hollows/Calculator'

const FauxHollows = (): React.ReactElement => {
  const { t } = useTranslation('faux-hollows')
  return (
    <Page title={t('_title')} description={t('_description')}>
      <Calculator />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'faux-hollows']))
    }
  }
}

export default FauxHollows
