import React from 'react'
import Page from '../src/Page'
import Generator from '../src/name-generator/Generator'
import About from '../src/name-generator/About'
import { useTranslation } from '../src/i18n'

const NameGenerator = (): React.ReactElement => {
  const { t } = useTranslation('name-generator')

  return (
    <Page title={t('_title')} description={t('_description')}>
      <Generator />
      <About />
    </Page>
  )
}

NameGenerator.getInitialProps = async () => ({
  namespacesRequired: ['common', 'name-generator']
})

export default NameGenerator
