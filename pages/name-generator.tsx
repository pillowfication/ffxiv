import React from 'react'
import Page from '../src/Page'
import Generator from '../src/name-generator/Generator'
import About from '../src/name-generator/About'
import i18n from '../src/i18n'
import { TFunction } from 'next-i18next'

type Props = {
  t: TFunction
}

const NameGenerator = ({ t }: Props) => {
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

export default i18n.withTranslation('name-generator')(NameGenerator)
