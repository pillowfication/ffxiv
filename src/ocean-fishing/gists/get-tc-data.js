const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const { fishingSpots, baits } = require('./data/ocean-fish-data.json')

const BAITS = [
  ...Object.keys(baits),
  29722, // Ghoul Barracuda
  29761, // Hi-aetherlouse
  29718, // Tossed Dagger
  32107 // Rothlyt Mussel
]

const BEARER_TOKEN = require('./tc-bearer-token.json')

async function getTCData (spotId, baitId) {
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
      referrer: 'https://ffxivteamcraft.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: JSON.stringify({
        operationName: 'BiteTimesPerFishPerSpotPerBaitQuery',
        variables: { spotId, baitId },
        query: "query BiteTimesPerFishPerSpotPerBaitQuery($fishId: Int, $spotId: Int, $baitId: Int) {\\n  biteTimes: bite_time_per_fish_per_spot_per_bait(where: {spot: {_eq: $spotId}, itemId: {_eq: $fishId}, baitId: {_eq: $baitId}, biteTime: {_gt: 1}, occurences: {_gte: 1}}) {\\n    itemId\\n    spot\\n    baitId\\n    biteTime\\n    occurences\\n    __typename\\n  }\\n}\\n"
      }),
      method: 'POST',
      mode: 'cors'
    }
  )

  const json = await res.json()
  for (const datum of json.data.biteTimes) {
    if (datum.__typename) {
      delete datum.__typename
    }
  }
  return json
}

;(async () => {
  for (const fishingSpot of Object.keys(fishingSpots)) {
    const allData = { data: { biteTimes: [] } }
    for (const bait of BAITS) {
      console.log('Fetching:', { spot: fishingSpot, bait })
      allData.data.biteTimes.push(...(await getTCData(fishingSpot, bait)).data.biteTimes)
    }
    fs.writeFileSync(path.resolve(__dirname, `./data/tc/spot-${fishingSpot}.json`), JSON.stringify(allData))
  }
})()
