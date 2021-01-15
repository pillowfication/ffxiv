import path from 'path'
import NextI18Next from 'next-i18next'
import config from 'next/config'

const i18n = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de', 'fr', 'ja'],
  localeSubpaths: config().publicRuntimeConfig.localeSubpaths,
  localePath: path.resolve('./public/static/locales')
})

export default i18n
export const withTranslation = i18n.withTranslation
export const useTranslation = i18n.useTranslation
