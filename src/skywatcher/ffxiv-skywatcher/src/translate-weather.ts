import { Weather } from './types'
import weathers from '../data/weathers.json'

export default function translateWeather (weather: Weather, locale: string = 'en'): string {
  return weathers[weather][`name_${locale}`]
}
