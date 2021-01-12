import React from 'react'
import Page from '../src/Page'
import Calculator from '../src/wondrous-tails/Calculator'
import i18n from '../src/i18n'
import { TFunction } from 'next-i18next'

type Props = {
  t: TFunction
}

const WondrousTails = ({ t }: Props) => {
  return (
    <Page title={t('title')}>
      <Calculator />
    </Page>
  )
}

WondrousTails.getInitialProps = async () => ({
  namespacesRequired: ['common', 'wondrous-tails']
})

export default i18n.withTranslation('wondrous-tails')(WondrousTails)
