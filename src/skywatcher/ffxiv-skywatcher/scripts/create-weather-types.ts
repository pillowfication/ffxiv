import fs from 'fs'
import path from 'path'
import placeNames from '../data/place-names.json'
import weathers from '../data/weathers.json'

const OUTPUT = path.resolve(__dirname, '../src/types.ts')

const counts: Record<string, number> = {}
function getCount (namespace: string, key: string): number {
  const _key = `${namespace}.${key}`
  return counts[_key] !== undefined ? ++counts[_key] : (counts[_key] = 1)
}

function getIdentifier (string: string): string {
  if (string === '') {
    return 'Unknown'
  } else {
    const cleaned = string.replace(/[']+/ig, '').replace(/[^a-z0-9]+/ig, ' ').trim()
    return cleaned.length > 0 ? cleaned.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('') : 'Other'
  }
}

fs.writeFileSync(OUTPUT, '')

fs.appendFileSync(OUTPUT, 'export enum Place {\n')
Object.values(placeNames)
  .sort((a, b) => a.id - b.id)
  .forEach((placeName, index, array) => {
    const key = placeName.id === 0 ? 'DEFAULT' : getIdentifier(placeName.name_en)
    const count = getCount('placeName', key)
    fs.appendFileSync(OUTPUT, `  ${key}${count > 1 ? `_${count}` : ''} = ${placeName.id}${index < array.length - 1 ? ',' : ''}\n`)
  })
fs.appendFileSync(OUTPUT, '}\n')

fs.appendFileSync(OUTPUT, '\n')

fs.appendFileSync(OUTPUT, 'export enum Weather {\n')
Object.values(weathers)
  .sort((a, b) => a.id - b.id)
  .forEach((weather, index, array) => {
    const key = weather.id === 0 ? 'DEFAULT' : getIdentifier(weather.name_en)
    const count = getCount('weather', key)
    fs.appendFileSync(OUTPUT, `  ${key}${count > 1 ? `_${count}` : ''} = ${weather.id}${index < array.length - 1 ? ',' : ''}\n`)
  })
fs.appendFileSync(OUTPUT, '}\n')
