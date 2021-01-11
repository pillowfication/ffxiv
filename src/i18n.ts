import path from 'path'
import NextI18Next from 'next-i18next'
import config from 'next/config'

export default new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de', 'fr', 'ja'],
  localeSubpaths: config().publicRuntimeConfig.localeSubpaths,
  localePath: path.resolve('./public/static/locales')
})
