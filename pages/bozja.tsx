import React from 'react'
// import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Paper from '@mui/material/Paper'
import Page from '../src/Page'
import UpcomingWeathers from '../src/bozja/UpcomingWeathers'
import DropsTable from '../src/bozja/DropsTable'

// const Map = dynamic(
//   async () => await import('../src/bozja/Map'),
//   { ssr: false }
// )

const Bozja = (): React.ReactElement => {
  const { t } = useTranslation('bozja')

  return (
    <Page title={t('_title')} description={t('_description')}>
      <UpcomingWeathers />
      <Paper variant='outlined' sx={{ p: 2, mb: 2, textAlign: 'center', fontWeight: 'bold' }}>{'{ NO MAP RIGHT NOW }'}</Paper>
      <DropsTable />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'bozja']))
    }
  }
}

export default Bozja
