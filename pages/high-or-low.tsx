import React from 'react'
import Page from '../src/Page'
import Calculator from '../src/high-or-low/Calculator'
import About from '../src/high-or-low/About'
import i18n from '../src/i18n'
import { TFunction } from 'next-i18next'

type Props = {
  t: TFunction
}

const HighOrLow = ({ t }: Props) => {
  return (
    <Page title={t('title')}>
      <Calculator />
      <About />
    </Page>
  )
}

HighOrLow.getInitialProps = async () => ({
  namespacesRequired: ['common', 'high-or-low']
})

export default i18n.withTranslation('high-or-low')(HighOrLow)
