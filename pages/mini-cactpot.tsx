import React from 'react'
import Page from '../src/Page'
import Calculator from '../src/mini-cactpot/Calculator'
import About from '../src/mini-cactpot/About'
import { useTranslation } from '../src/i18n'

const MiniCactpot = (): React.ReactElement => {
  const { t } = useTranslation('mini-cactpot')
  return (
    <Page title={t('_title')} description={t('_description')}>
      <Calculator />
      <About />
    </Page>
  )
}

MiniCactpot.getInitialProps = async () => ({
  namespacesRequired: ['common', 'mini-cactpot']
})

export default MiniCactpot
