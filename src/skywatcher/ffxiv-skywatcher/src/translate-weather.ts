import { Weather } from './types'
import weathers from '../data/weathers.json'
import translate from '../../../translate'

export default function translateWeather (weather: Weather, locale: string = 'en'): string {
  return translate(locale, weathers[weather], 'name')
}
