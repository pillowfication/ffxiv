import React from 'react'
import Page from '../src/Page'
import Calculator from '../src/chocobo-color/Calculator'
import { useTranslation } from '../src/i18n'

const ChocoboColor = () => {
  const { t } = useTranslation('chocobo-color')

  return (
    <Page
      title={t('title')}
      description='Calculator for changing your chocobo’s color.'
    >
      <Calculator />
    </Page>
  )
}

ChocoboColor.getInitialProps = async () => ({
  namespacesRequired: ['common', 'chocobo-color']
})

export default ChocoboColor
