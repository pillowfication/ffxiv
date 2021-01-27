import fs from 'fs'
import path from 'path'
import placeNames from '../data/place-names.json'
import weathers from '../data/weathers.json'

const OUTPUT = path.resolve(__dirname, '../src/types.ts')

const counts: Record<string, number> = {}
function getCount (namespace: string, key: string) {
  const _key = `${namespace}.${key}`
  return counts[_key] ? ++counts[_key] : (counts[_key] = 1)
}

fs.writeFileSync(OUTPUT, '')

fs.appendFileSync(OUTPUT, 'export enum Place {\n')
Object.values(placeNames)
  .sort((a, b) => a.id - b.id)
  .forEach((placeName, index, array) => {
    const key = placeName.name_en && placeName.name_en.replace(/[^a-z0-9]+/ig, '') || 'UNKNOWN'
    const count = getCount('placeName', key)
    fs.appendFileSync(OUTPUT, `  ${key}${count > 1 ? `_${count}` : ''} = ${placeName.id}${index < array.length - 1 ? ',' : ''}\n`)
  })
fs.appendFileSync(OUTPUT, '}\n')

fs.appendFileSync(OUTPUT, '\n')

fs.appendFileSync(OUTPUT, 'export enum Weather {\n')
Object.values(weathers)
  .sort((a, b) => a.id - b.id)
  .forEach((weather, index, array) => {
    const key = weather.name_en && weather.name_en.replace(/[^a-z0-9]+/ig, '') || 'UNKNOWN'
    const count = getCount('weather', key)
    fs.appendFileSync(OUTPUT, `  ${key}${count > 1 ? `_${count}` : ''} = ${weather.id}${index < array.length - 1 ? ',' : ''}\n`)
  })
fs.appendFileSync(OUTPUT, '}\n')
