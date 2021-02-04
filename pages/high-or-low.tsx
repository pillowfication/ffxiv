import React from 'react'
import Page from '../src/Page'
import Calculator from '../src/high-or-low/Calculator'
import About from '../src/high-or-low/About'
import { useTranslation } from '../src/i18n'

const HighOrLow = (): React.ReactElement => {
  const { t } = useTranslation('high-or-low')

  return (
    <Page title={t('_title')} description={t('_description')}>
      <Calculator />
      <About />
    </Page>
  )
}

HighOrLow.getInitialProps = async () => ({
  namespacesRequired: ['common', 'high-or-low']
})

export default HighOrLow
