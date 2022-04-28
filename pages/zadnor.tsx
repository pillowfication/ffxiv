import React from 'react'
// import dynamic from 'next/dynamic'
import Paper from '@mui/material/Paper'
import Page from '../src/Page'
import { useTranslation } from '../src/i18n'
import UpcomingWeathers from '../src/zadnor/UpcomingWeathers'

// const Map = dynamic(
//   async () => await import('../src/zadnor/Map'),
//   { ssr: false }
// )

const Zadnor = (): React.ReactElement => {
  const { t } = useTranslation('zadnor')

  return (
    <Page title={t('_title')} description={t('_description')}>
      <UpcomingWeathers />
      <Paper variant='outlined' sx={{ p: 2, mb: 2, textAlign: 'center', fontWeight: 'bold' }}>{'{ NO MAP RIGHT NOW }'}</Paper>
    </Page>
  )
}

Zadnor.getInitialProps = async () => ({
  namespacesRequired: ['common', 'zadnor']
})

export default Zadnor
