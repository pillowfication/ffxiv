import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
import { fishingSpots, baits } from './data/ocean-fish-data.json'

const BAITS = [
  ...Object.keys(baits).map(Number),
  29722, // Ghoul Barracuda
  29761, // Hi-aetherlouse
  29718, // Tossed Dagger
  32107 // Rothlyt Mussel
]

// @ts-ignore
import BEARER_TOKEN from './tc-bearer-token.json'

async function getTCData (spotId: number, baitId: number) {
  const res = await fetch(
    'https://us-central1-ffxivteamcraft.cloudfunctions.net/gubal-proxy',
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en',
        authorization: BEARER_TOKEN,
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        pragma: 'no-cache',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site'
      },
      // referrer: 'https://ffxivteamcraft.com/',
      // referrerPolicy: 'strict-origin-when-cross-origin',
      body: `{"operationName":"BiteTimesPerFishPerSpotPerBaitQuery","variables":{"spotId":${spotId},"baitId":${baitId}},"query":"query BiteTimesPerFishPerSpotPerBaitQuery($fishId: Int, $spotId: Int, $baitId: Int) {\\n  biteTimes: bite_time_per_fish_per_spot_per_bait(where: {spot: {_eq: $spotId}, itemId: {_eq: $fishId}, baitId: {_eq: $baitId}, biteTime: {_gt: 1}, occurences: {_gte: 1}}) {\\n    itemId\\n    spot\\n    baitId\\n    biteTime\\n    occurences\\n    __typename\\n  }\\n}\\n"}`,
      method: 'POST'
      // mode: 'cors'
    }
  )

  const json = await res.json()
  json.data.biteTimes = json.data.biteTimes.map((datum: any) => ({
    itemId: datum.itemId,
    baitId: datum.baitId,
    biteTime: datum.biteTime,
    occurrences: datum.occurences // Rename this variable...
  }))

  // Aggregate data
  for (let i = 0; i < json.data.biteTimes.length; ++i) {
    const curr = json.data.biteTimes[i]
    for (let j = i + 1; j < json.data.biteTimes.length; ++j) {
      const check = json.data.biteTimes[j]
      if (curr.itemId === check.itemId && curr.baitId === check.baitId && curr.biteTime === check.biteTime) {
        curr.occurrences += check.occurrences
        json.data.biteTimes.splice(j--, 1)
      }
    }
  }

  return json.data.biteTimes
}

;(async () => {
  for (const fishingSpot of Object.keys(fishingSpots).map(Number)) {
    const allData = []
    for (const bait of BAITS) {
      console.log('Fetching:', { spot: fishingSpot, bait })
      allData.push(...await getTCData(fishingSpot, bait))
    }
    fs.writeFileSync(path.resolve(__dirname, `./data/tc/spot-${fishingSpot}.json`), JSON.stringify(allData))
  }
})()
