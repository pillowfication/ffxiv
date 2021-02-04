import React from 'react'
import Page from '../src/Page'
import Calculator from '../src/wondrous-tails/Calculator'
import { useTranslation } from '../src/i18n'

const WondrousTails = (): React.ReactElement => {
  const { t } = useTranslation('wondrous-tails')

  return (
    <Page title={t('_title')} description={t('_description')}>
      <Calculator />
    </Page>
  )
}

WondrousTails.getInitialProps = async () => ({
  namespacesRequired: ['common', 'wondrous-tails']
})

export default WondrousTails
