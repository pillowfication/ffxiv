import { format, formatDistanceStrict } from 'date-fns'
import { de, fr, ja } from 'date-fns/locale'

const DATE_LOCALES = {
  de,
  fr,
  ja
}

export function paddedZero (n: number) {
  return n > 9 ? String(n) : '0' + n
}

export function formatTime (date: Date) {
  return `${paddedZero(date.getUTCHours())}:${paddedZero(date.getUTCMinutes())}`
}

export function toTimeString (now: Date, options: { padded?: boolean, locale?: string } = {}) {
  const { padded, locale = 'en' } = options
  const timeString = format(now, locale === 'en' ? 'hh:mm a' : 'HH:mm', { locale: DATE_LOCALES[locale] })
  return timeString.replace(/^0/, padded ? ' ' : '')
}

export function timeUntil (now: Date, then: Date, options: { full?: boolean, locale?: string } = {}) {
  const { full, locale = 'en' } = options
  const diffString = formatDistanceStrict(then, now, { addSuffix: true, locale: DATE_LOCALES[locale] })
  if (!full) {
    return diffString
  } else {
    // TODO: Figure out how to translate this thing fully
    return `${diffString} at ${format(then, 'h:mm aaaa', { locale: DATE_LOCALES[locale] })}`
  }
}
