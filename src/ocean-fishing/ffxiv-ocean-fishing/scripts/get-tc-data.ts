import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
import oceanFishingFishingSpots from '../data/fishing-spots.json'
import oceanFishingBaits from '../data/baits.json'

const BAIT_IDS = Object.keys(oceanFishingBaits).map(Number)
  .concat([
    29722, // Ghoul Barracuda
    29761, // Hi-aetherlouse
    29718, // Tossed Dagger
    32107 // Rothlyt Mussel
  ])
const FISHING_SPOTS = Object.keys(oceanFishingFishingSpots).map(Number)

async function getTCBiteTimes (spotId: number, baitId: number): Promise<any> {
  const res = await fetch('https://gubal.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      operationName: 'BiteTimesPerFishPerSpotPerBaitQuery',
      variables: { spotId, baitId },
      query: `
        query BiteTimesPerFishPerSpotPerBaitQuery($fishId: Int, $spotId: Int, $baitId: Int) {
          biteTimes: bite_time_per_fish_per_spot_per_bait(
            where: { spot: { _eq: $spotId }, itemId: { _eq: $fishId }, baitId: { _eq: $baitId }, flooredBiteTime: { _gt: 1, _lt: 600 }, occurences: { _gte: 3 } }
          ) {
            itemId
            baitId
            flooredBiteTime
            occurences
          }
        }
      `
    })
  })

  const json = await res.json()
  json.data.biteTimes = json.data.biteTimes
    .map((datum: any) => ({
      itemId: datum.itemId,
      baitId: datum.baitId,
      biteTime: datum.flooredBiteTime,
      occurrences: datum.occurences // Rename this variable...
    }))

  // Aggregate data
  for (let i = 0; i < json.data.biteTimes.length; ++i) {
    const curr = json.data.biteTimes[i]
    for (let j = i + 1; j < json.data.biteTimes.length; ++j) {
      const check = json.data.biteTimes[j]
      if (curr.itemId === check.itemId && curr.baitId === check.baitId && curr.biteTime === check.biteTime) {
        (curr.occurrences as number) += check.occurrences as number
        json.data.biteTimes.splice(j--, 1)
      }
    }
  }

  return json.data.biteTimes
}

async function getTCBaitPercentages (spotId: number): Promise<any> {
  const res = await fetch('https://gubal.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      operationName: 'BaitsPerFishPerSpotQuery',
      variables: { spotId },
      query: `
        query BaitsPerFishPerSpotQuery($fishId: Int, $spotId: Int, $misses: Int) {
          baits: baits_per_fish_per_spot(
            where: { spot: { _eq: $spotId }, itemId: { _eq: $fishId }, occurences: { _gt: 1 } }
          ) {
            itemId
            spot
            baitId
            occurences
          }
          ${/*
          mooches: baits_per_fish_per_spot(
            where: { spot: { _eq: $spotId }, baitId: { _eq: $fishId }, occurences: { _gt: 1 } }
          ) {
            itemId
            spot
            baitId
          }
          */''}
        }
      `
    })
  })

  const json = await res.json()
  json.data.baits = json.data.baits
    .map((datum: any) => ({
      itemId: datum.itemId,
      baitId: datum.baitId,
      occurrences: datum.occurences // Rename this variable...
    }))

  return json.data.baits
}

;(async () => {
  console.log('Fetching bite times...')
  for (const fishingSpot of FISHING_SPOTS) {
    const allBiteTimes: any[] = []
    for (const baitId of BAIT_IDS) {
      if (fishingSpot === 0 || baitId === 0) {
        continue
      } else {
        console.log('Fetching:', { spot: fishingSpot, baitId })
        allBiteTimes.push(...await getTCBiteTimes(fishingSpot, baitId))
      }
    }
    fs.writeFileSync(path.resolve(__dirname, `../data/tc/spot-${fishingSpot}_bite-times.json`), JSON.stringify(allBiteTimes))
  }

  console.log('Fetching bait percentages...')
  for (const fishingSpot of FISHING_SPOTS) {
    console.log('Fetching:', { spot: fishingSpot })
    const baitPercentages = await getTCBaitPercentages(fishingSpot)
    fs.writeFileSync(path.resolve(__dirname, `../data/tc/spot-${fishingSpot}_bait-percentages.json`), JSON.stringify(baitPercentages))
  }

  console.log('Done!')
})().then(null, null)
