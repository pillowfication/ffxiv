import fs from 'fs'
import path from 'path'
import url from 'url'
import { Weather } from '../../../skywatcher/ffxiv-skywatcher/src/types'
import spreadsheetDataRaw from '../data/spreadsheet-data-raw.json' assert { type: 'json' }

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const OUTPUT = path.resolve(__dirname, '../data/spreadsheet-data.json')

const PILL_BUG = 2587
const RAT_TAIL = 2591
const GLOWWORM = 2603
const SHRIMP_CAGE_FEEDER = 2613
const HEAVY_STEEL_JIG = 2619
const STONEFLY_NYMPH = 12704
const SQUID_STRIP = 27590
const RAGWORM = 29714
const KRILL = 29715
const PLUMP_WORM = 29716
const VERSATILE_LURE = 29717
const MACKEREL_STRIP = 36593

;(async () => {
  const data: Record<string, any> = spreadsheetDataRaw

  // Pre-fixes
  for (const fishes of Object.values(data)) {
    for (const fish of fishes) {
      switch (fish.name) {
        case 'Hi-Aetherlouse':
          fish.name = 'Hi-aetherlouse'
          break
        case 'Jewel of Plum Spring':
          fish.notes = 'Intuition: x2 Yanxian Goby, x1 Gensui Shrimp (15s)'
          break
        case 'Snapping Koban':
          fish.mooched = true
          fish.baits.mooch = { biteTime: null, usable: true, best: null }
          break
        case 'Tentacale Thresher':
          fish.name = 'Tentacle Thresher'
          break
        case 'Yato-no-Kami':
          fish.name = 'Yato-no-kami'
          break
      }
    }
  }

  for (const [fishingSpot, fishes] of Object.entries<any>(data)) {
    const isSpectral = /spectral current/i.test(fishingSpot)
    for (const fish of fishes) {
      // Snapping Koban is also a mooched fish
      if (fish.name === 'Snapping Koban') {
        fish.mooched = true
        fish.baits.mooch = { biteTime: null, usable: true, best: null }
      }

      // Rename Hi-aetherlouse
      if (fish.name === 'Hi-Aetherlouse') {
        fish.name = 'Hi-aetherlouse'
      }

      // Fix baits
      const newBaits: any = {
        [RAGWORM]: fish.baits.ragworm,
        [KRILL]: fish.baits.krill,
        [PLUMP_WORM]: fish.baits.plumpWorm
      }

      if (isSpectral) {
        newBaits[VERSATILE_LURE] = null
        newBaits[getSpecialBait(fishingSpot)] = fish.baits.other
      } else {
        newBaits[VERSATILE_LURE] = fish.baits.other
      }

      if (fish.baits.mooch.usable) {
        fish.mooches = {
          [getMoochBait(fishingSpot)]: {
            ...fish.baits.mooch
          }
        }
      }

      fish.baits = newBaits
      
      // Fix time and weather availabilities
      if (isSpectral) {
        fish.timeAvailability = ['D', 'S', 'N'].filter((_, index) => fish.availability[`weather${index + 1}`])
        fish.weatherAvailability = { type: 'ALL' }
      } else {
        fish.timeAvailability = ['D', 'S', 'N']

        const possibleWeathers = getPossibleWeathers(fishingSpot)
        const weatherAvailabilites = possibleWeathers.map((_, index) => fish.availability[`weather${index + 1}`])
        if (weatherAvailabilites.every(availability => availability === true)) {
          fish.weatherAvailability = { type: 'ALL' }
        } else if (weatherAvailabilites.some(availability => availability === false)) {
          fish.weatherAvailability = { type: 'NOT OK', weathers: possibleWeathers.filter((_, index) => weatherAvailabilites[index] === false) }
        } else {
          fish.weatherAvailability = { type: 'OK', weathers: possibleWeathers.filter((_, index) => weatherAvailabilites[index] === true) }
        }
      }

      delete fish.availability
      
      // Add intuition duration and fishes
      if (fish.intuition) {
        const intMatch = (fish.notes as string).match(/^Intuition:\s*(.*)\s*\((\d+)s\)$/)
        if (intMatch != null) {
          fish.intuitionDuration = Number(intMatch[2])
          fish.intuitionFishes = intMatch[1].split(',').map(fishNote => {
            const fishMatch = fishNote.trim().match(/^x(\d+) (.+)$/)
            return {
              fish: fishMatch?.[2],
              count: Number(fishMatch?.[1]) || null
            }
          })
        } else {
          fish.intuitionDuration = null
          fish.intuitionFishes = null
        }
      }

      // Drop notes
      delete fish.notes

      // Fix mooch data appearing as bait data
      if (['Smooth Jaguar', 'Levi Elver', 'Panoptes', 'Snapping Koban'].includes(fish.name)) {
        fish.mooches[getMoochBait(fishingSpot)].biteTime = fish.baits[0].biteTime
        fish.mooches[getMoochBait(fishingSpot)].useable = fish.baits[0].useable
        fish.mooches[getMoochBait(fishingSpot)].best = fish.baits[0].best
        delete fish.baits[0]
      }
    }
  }

  function getSpecialBait (fishingSpot: string): number {
    switch (fishingSpot) {
      case 'Galadion Spectral Current':
        return GLOWWORM
      case 'Southern Merlthor Spectral Current':
        return SHRIMP_CAGE_FEEDER
      case 'Northern Merlthor Spectral Current':
        return HEAVY_STEEL_JIG
      case 'Rhotano Spectral Current':
        return RAT_TAIL
      case 'Cieldalaes Spectral Current':
        return SQUID_STRIP
      case 'Bloodbrine Spectral Current':
        return PILL_BUG
      case 'Rothlyt Spectral Current':
        return 0
      case 'Sirensong Spectral Current':
        return MACKEREL_STRIP
      case 'Kugane Spectral Current':
        return 0
      case 'Ruby Spectral Current':
        return SQUID_STRIP
      case 'One River Spectral Current':
        return STONEFLY_NYMPH
      default:
        return 0
    }
  }

  function getMoochBait (fishingSpot: string): string {
    return data[fishingSpot].find((fish: any) => fish.moochable).name
  }

  function getPossibleWeathers (fishingSpot: string): Weather[] {
    switch (fishingSpot) {
      case 'Outer Galadion Bay':
        return [Weather.FairSkies, Weather.Clouds, Weather.Fog, Weather.Rain, Weather.Showers, Weather.ClearSkies]
      case 'The Southern Strait of Merlthor':
        return [Weather.FairSkies, Weather.Clouds, Weather.Fog, Weather.Wind, Weather.Gales, Weather.ClearSkies]
      case 'The Northern Strait of Merlthor':
        return [Weather.FairSkies, Weather.Clouds, Weather.Fog, Weather.Snow, Weather.Blizzards, Weather.ClearSkies]
      case 'Open Rhotano Sea':
        return [Weather.FairSkies, Weather.Clouds, Weather.Fog, Weather.DustStorms, Weather.HeatWaves, Weather.ClearSkies]
      case 'Cieldalaes Margin':
        return [Weather.FairSkies, Weather.Clouds, Weather.Fog, Weather.Thunder, Weather.Thunderstorms, Weather.ClearSkies]
      case 'Open Bloodbrine Sea':
        return [Weather.FairSkies, Weather.Clouds, Weather.Fog, Weather.Rain, Weather.Showers, Weather.ClearSkies]
      case 'Outer Rothlyt Sound':
        return [Weather.FairSkies, Weather.Clouds, Weather.Fog, Weather.Thunder, Weather.Thunderstorms, Weather.ClearSkies]
      case 'Open Sirensong Sea':
        return [Weather.FairSkies, Weather.Clouds, Weather.Fog, Weather.Rain, Weather.Thunderstorms, Weather.ClearSkies]
      case 'Kugane Coast':
        return [Weather.FairSkies, Weather.Clouds, Weather.Fog, Weather.Rain, Weather.Showers, Weather.ClearSkies]
      case 'Open Ruby Sea':
        return [Weather.FairSkies, Weather.Clouds, Weather.Fog, Weather.Wind, Weather.Gales, Weather.Thunder, Weather.ClearSkies]
      case 'Lower One River':
        return [Weather.FairSkies, Weather.Clouds, Weather.Fog, Weather.Rain, Weather.Showers, Weather.ClearSkies]
      default:
        return []
    }
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(data, null, 2))

  console.log('Done!')
})().then(null, null)
