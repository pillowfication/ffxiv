import React from 'react'
import Page from '../src/Page'
import Generator from '../src/name-generator/Generator'
import About from '../src/name-generator/About'
import { useTranslation } from '../src/i18n'

const NameGenerator = () => {
  const { t } = useTranslation('name-generator')

  return (
    <Page
      title={t('title')}
      description='FFXIV random name generator for all the races.'
    >
      <Generator />
      <About />
    </Page>
  )
}

NameGenerator.getInitialProps = async () => ({
  namespacesRequired: ['common', 'name-generator']
})

export default NameGenerator
