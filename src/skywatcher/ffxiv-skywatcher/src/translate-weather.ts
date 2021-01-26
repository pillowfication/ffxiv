import { Weather } from './types/weather'
import weathers from '../data/weathers.json'

export default function translateWeather (weather: Weather, locale: string = 'en'): string {
  return weathers[weather][`Name_${locale}`]
}
