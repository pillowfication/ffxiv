import React from 'react'
import dynamic from 'next/dynamic'
import Page from '../src/Page'
import { useTranslation } from '../src/i18n'
import UpcomingWeathers from '../src/bozja/UpcomingWeathers'

const Map = dynamic(
  async () => await import('../src/bozja/Map'),
  { ssr: false }
)

const Bozja = (): React.ReactElement => {
  const { t } = useTranslation('bozja')

  return (
    <Page title={t('_title')} description={t('_description')}>
      <UpcomingWeathers />
      <Map />
    </Page>
  )
}

Bozja.getInitialProps = async () => ({
  namespacesRequired: ['common', 'bozja']
})

export default Bozja
