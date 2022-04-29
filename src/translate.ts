type Locale = 'en' | 'de' | 'fr' | 'ja' | 'cn' | 'ko'

export type Translatable = Record<Locale, string>

// Keep locale as `string` because of i18n.language
export default function translate<T, K extends keyof { [P in keyof T as T[P] extends Translatable ? P : never]: T[P] } & string & keyof T> (locale: string, obj: T, ...keys: K[]): string {
  for (const key of keys) {
    const translation = (obj[key] as unknown as Translatable)[locale as Locale]
    if (translation != null && translation !== '') {
      return translation
    }
  }

  // Fallback to 'en'
  if (locale !== 'en') {
    return translate('en', obj, ...keys)
  }

  return `{${keys.join(',')}}`
}
