import React from 'react'
import Page from '../src/Page'
import Calculator from '../src/high-or-low/Calculator'
import About from '../src/high-or-low/About'
import { useTranslation } from '../src/i18n'

const HighOrLow = () => {
  const { t } = useTranslation('high-or-low')

  return (
    <Page
      title={t('title')}
      description='Calculator for the guessing game “High or Low” played against Tista-Bie in Eulmore.'
    >
      <Calculator />
      <About />
    </Page>
  )
}

HighOrLow.getInitialProps = async () => ({
  namespacesRequired: ['common', 'high-or-low']
})

export default HighOrLow
