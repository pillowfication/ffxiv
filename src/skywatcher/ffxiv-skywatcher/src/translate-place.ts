import { Place } from './types'
import placeNames from '../data/place-names.json'
import translate from '../../../translate'

export default function translatePlace (place: Place, locale: string = 'en'): string {
  return translate(locale, placeNames[place], 'name')
}
