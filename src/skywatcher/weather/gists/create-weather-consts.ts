import fs from 'fs'
import path from 'path'
import weathers from '../data/weathers.json'

const OUTPUT = path.resolve(__dirname, '../consts/weathers.ts')
const IDS = Object.keys(weathers).map(Number).sort((a, b) => a - b)

const counts: Record<string, number> = {}
function getCount (key: string) {
  if (counts[key]) {
    return ++counts[key]
  } else {
    return (counts[key] = 1)
  }
}

fs.writeFileSync(OUTPUT, 'export enum Weather {\n')

for (let i = 0; i < IDS.length; ++i) {
  const id = IDS[i]
  const key = weathers[id].Name_en ? weathers[id].Name_en.replace(/\s+/g, '') : 'UNKNOWN'
  const count = getCount(key)
  fs.appendFileSync(OUTPUT, `  ${key}${count > 1 ? `_${count}` : ''} = ${id}${i < IDS.length - 1 ? ',' : ''}\n`)
}

fs.appendFileSync(OUTPUT, '}\n')
