import fs from 'fs'
import path from 'path'
import csvParse from 'csv-parse/lib/sync'

// What to do about this...
const SAINT_COINACH_FOLDER = 'C:\\Users\\Pillowfication\\ws\\SaintCoinach.Cmd-master-b924-83ad23a'
const VERSION = '2020.12.29.0000.0000'

function mapKeys (keys: Record<string, string>, datum: {}) {
  const mappedDatum = {}
  for (const [key, value] of Object.entries(datum)) {
    mappedDatum[keys[key] || `<UNKNOWN_${key}>`] = value
  }
  return mappedDatum
}

function parseValues (types: Record<string, string>, datum: object) {
  for (const [key, value] of Object.entries(datum)) {
    const type = types[key]
    if (type === 'byte' || type.match(/^u?int\d+$/)) {
      datum[key] = Number(value)
    } else if (type.match(/^bit&\d+$/)) {
      datum[key] = (value === 'True')
    } else if (type === 'Color') {
      const [, A, R, G, B] = value.match(/Color \[A=(\d+), R=(\d+), G=(\d+), B=(\d+)\]/)
      datum[key] = {
        A: Number(A),
        R: Number(R),
        G: Number(G),
        B: Number(B)
      }
    }
  }
  return datum
}

export function get (key: string) {
  const file = path.join(SAINT_COINACH_FOLDER, VERSION, 'exd-all', key + '.csv')
  console.log('Reading file', file)

  const buffer = fs.readFileSync(file)
  const csv = csvParse(buffer.toString(), { columns: true })
  const [_keys, _types, _defaults, ..._data] = csv

  const keys = mapKeys(_keys, _keys) as Record<string, string>
  const types = mapKeys(_keys, _types) as Record<string, string>
  const defaults = parseValues(types, mapKeys(_keys, _defaults))
  const data = _data.map((datum: any) => parseValues(types, mapKeys(_keys, datum))) as any[]

  return { keys, types, defaults, data }
}

function padZeroes (id: number) {
  return ('000000' + id).slice(-6)
}

export function parseIconId (icon: string) {
  const match = icon.match(/^ui\/icon\/\d{6}\/(\d{6}).(?:tex|png)$/)
  return Number(match[1])
}

export function getIcon (id: number) {
  const folder = padZeroes(id - (id % 1000))
  const fileName = padZeroes(id)

  const file = path.join(SAINT_COINACH_FOLDER, VERSION, 'ui/icon', folder, fileName + '.png')
  const buffer = fs.readFileSync(file)

  return { path: file, buffer }
}
