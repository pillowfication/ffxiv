import React from 'react'
import Page from '../src/Page'
import Calculator from '../src/mini-cactpot/Calculator'
import About from '../src/mini-cactpot/About'
import { useTranslation } from '../src/i18n'

const MiniCactpot = () => {
  const { t } = useTranslation('mini-cactpot')
  return (
    <Page
      title={t('title')}
      description='Calculator for the Mini Cactpot lottery.'
    >
      <Calculator />
      <About />
    </Page>
  )
}

MiniCactpot.getInitialProps = async () => ({
  namespacesRequired: ['common', 'mini-cactpot']
})

export default MiniCactpot
