import React from 'react'
import Page from '../src/Page'
import { useTranslation } from '../src/i18n'

const ChocoboColor = () => {
  const { t } = useTranslation('chocobo-color')

  return (
    <Page
      title={t('title')}
      description='Calculator for changing your chocobo’s color.'
    >
      Hello
    </Page>
  )
}

ChocoboColor.getInitialProps = async () => ({
  namespacesRequired: ['common', 'chocobo-color']
})

export default ChocoboColor
