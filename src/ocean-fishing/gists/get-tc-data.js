const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')

const BEARER_TOKEN = require('./tc-bearer-token.json')

const FISHING_SPOTS = [
  237, 238,
  239, 240,
  241, 242,
  243, 244,
  246, 247,
  248, 249,
  250, 251
]

const BAITS = [
  29714,
  29715,
  29716
]

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
      body: `{"operationName":"BiteTimesPerFishPerSpotPerBaitQuery","variables":{"spotId":${spotId},"baitId":${baitId}},"query":"query BiteTimesPerFishPerSpotPerBaitQuery($fishId: Int, $spotId: Int, $baitId: Int) {\\n  biteTimes: bite_time_per_fish_per_spot_per_bait(where: {spot: {_eq: $spotId}, itemId: {_eq: $fishId}, baitId: {_eq: $baitId}, biteTime: {_gt: 1}, occurences: {_gte: 1}}) {\\n    itemId\\n    spot\\n    baitId\\n    biteTime\\n    occurences\\n    __typename\\n  }\\n}\\n"}`,
      method: 'POST',
      mode: 'cors'
  })
  const json = await res.json()
  for (const datum of json.data.biteTimes) {
    if (datum.__typename) {
      delete datum.__typename
    }
  }
  return json
}

;(async () => {
  for (const fishingSpot of FISHING_SPOTS) {
    for (const bait of BAITS) {
      console.log(`Fetching: { spot: ${fishingSpot}, bait: ${bait} }`)
      fs.writeFileSync(path.resolve(__dirname, `./data/tc/s${fishingSpot}-b${bait}.json`), JSON.stringify(await getTCData(fishingSpot, bait)))
    }
  }
})()
