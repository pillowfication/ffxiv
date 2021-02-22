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
  const { full = false, locale = 'en' } = options
  const diffString = formatDistanceStrict(then, now, { addSuffix: true, locale: DATE_LOCALES[locale] })
  if (full) {
    return `${diffString} (${format(then, locale === 'en' ? 'h:mm a' : 'H:mm', { locale: DATE_LOCALES[locale] })})`
  } else {
    return diffString
  }
}

export function upperFirst (string: string): string {
  return string[0].toUpperCase() + string.slice(1)
}
