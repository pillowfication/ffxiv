import { Place } from './types'
import placeNames from '../data/place-names.json'

export default function translatePlace (place: Place, locale: string = 'en'): string {
  return placeNames[place][`name_${locale}`]
}