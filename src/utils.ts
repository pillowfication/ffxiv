import { format, formatDistanceStrict } from 'date-fns'
import de from 'date-fns/locale/de'
import fr from 'date-fns/locale/fr'
import ja from 'date-fns/locale/ja'
import cn from 'date-fns/locale/zh-CN'
import ko from 'date-fns/locale/ko'

const DATE_LOCALES = { en: undefined, de, fr, ja, cn, ko }

export function paddedZero (n: number): string {
  return n > 9 ? String(n) : `0${n}`
}

export function formatTime (date: Date): string {
  return `${paddedZero(date.getHours())}:${paddedZero(date.getMinutes())}`
}

export function formatTimeUtc (date: Date): string {
  return `${paddedZero(date.getUTCHours())}:${paddedZero(date.getUTCMinutes())}`
}

export function toTimeString (now: Date, options: { padded?: boolean, locale?: string } = {}): string {
  const { padded = false, locale = 'en' } = options
  const timeString = format(now, locale === 'en' ? 'hh:mm a' : 'HH:mm', { locale: DATE_LOCALES[locale] })
  return timeString.replace(/^0/, padded ? ' ' : '')
}

export function timeUntil (now: Date, then: Date, options: { full?: boolean, locale?: string } = {}): string {
  const { full, locale = 'en' } = options
  const diffString = formatDistanceStrict(then, now, { addSuffix: true, locale: DATE_LOCALES[locale] })
  if (full !== undefined && full) {
    switch (locale) {
      case 'de': return `${diffString} um ${format(then, 'H:mm', { locale: DATE_LOCALES[locale] })}`
      case 'fr': return `${diffString} à ${format(then, 'H:mm', { locale: DATE_LOCALES[locale] })}`
      case 'ja': return `${diffString} at ${format(then, 'H:mm', { locale: DATE_LOCALES[locale] })}`
      default: return `${diffString} at ${format(then, 'h:mm a', { locale: DATE_LOCALES[locale] })}`
    }
  } else {
    return diffString
  }
}

export function translate (locale: string, obj: any, ...keys: string[]): string {
  if (obj == null) {
    return `{${JSON.stringify(obj)}}`
  }
  for (const key of keys) {
    const keyLocale = `${key}_${locale}`
    if (obj[keyLocale] !== undefined && obj[keyLocale] !== '') return obj[keyLocale]
  }

  // Fallback to 'en'
  if (locale !== 'en') {
    return translate('en', obj, ...keys)
  }

  return `{[Object].${keys.join(',')}}`
}
