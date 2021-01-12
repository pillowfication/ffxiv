import React from 'react'
import Page from '../src/Page'
import Calculator from '../src/mini-cactpot/Calculator'
import About from '../src/mini-cactpot/About'
import i18n from '../src/i18n'
import { TFunction } from 'next-i18next'

type Props = {
  t: TFunction
}

const MiniCactpot = ({ t }: Props) => {
  return (
    <Page title={t('title')}>
      <Calculator />
      <About />
    </Page>
  )
}

MiniCactpot.getInitialProps = async () => ({
  namespacesRequired: ['common', 'mini-cactpot']
})

export default i18n.withTranslation('mini-cactpot')(MiniCactpot)
