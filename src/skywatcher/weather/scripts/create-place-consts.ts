import fs from 'fs'
import path from 'path'
import placeNames from '../data/place-names.json'

const OUTPUT = path.resolve(__dirname, '../src/types/place.ts')
const IDS = Object.keys(placeNames).map(Number).sort((a, b) => a - b)

const counts: Record<string, number> = {}
function getCount (key: string) {
  if (counts[key]) {
    return ++counts[key]
  } else {
    return (counts[key] = 1)
  }
}

fs.writeFileSync(OUTPUT, 'export enum Place {\n')

for (let i = 0; i < IDS.length; ++i) {
  const id = IDS[i]
  const key = placeNames[id].Name_en && placeNames[id].Name_en.replace(/[^a-z]+/ig, '') || 'UNKNOWN'
  const count = getCount(key)
  fs.appendFileSync(OUTPUT, `  ${key}${count > 1 ? `_${count}` : ''} = ${id}${i < IDS.length - 1 ? ',' : ''}\n`)
}

fs.appendFileSync(OUTPUT, '}\n')
