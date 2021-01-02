const fs = require('fs')
const path = require('path')
const bent = require('bent')

const XIVAPI = 'https://xivapi.com'
const getJSON = bent('json')

const OUTPUT = path.resolve(__dirname, './data/fish-data.json')

async function getAllPages (url, qThing) {
  const results = []
  for (let page = 1; ; ++page) {
    const data = await getJSON(`${XIVAPI}${url}${qThing ? '&' : '?'}page=${page}`)
    results.push(...data.Results)
    if (page === data.Pagination.PageTotal) {
      return results
    }
  }
}

async function getSearchResult (query, type) {
  const results = await getAllPages(`/search?string=${query}`, true)
  for (const result of results) {
    if (result.UrlType === type && result.Name === query) {
      return await getJSON(`${XIVAPI}${result.Url}`)
    }
  }
  throw new Error(`Could not find item: ${query} (${type})`)
}

;(async () => {
  // Get the list of all fishing spots
  console.log(`Fetching ${XIVAPI}/FishingSpot`)
  const fishingSpots = await getAllPages('/FishingSpot')

  // All the gathered data for whatever will be shoved in here
  const fishingSpotsResults = {}
  const fishesResults = {}
  const baitsResults = {}
  const achievementsResults = {}

  // Get data for fishing spots and fishes
  for (const { Url: url } of fishingSpots) {
    console.log(`Fetching ${XIVAPI}${url}`)
    const fishingSpotData = await getJSON(`${XIVAPI}${url}`)

    // Add all the fishes found there
    for (let i = 0; i < 10; ++i) {
      const fishData = fishingSpotData[`Item${i}`]
      if (fishData) {
        fishesResults[fishData.ID] = fishData
        fishingSpotData[`Item${i}`] = true // Remove the fish data here to avoid duplicate data
      }
    }

    // Add the fishing spot data
    fishingSpotsResults[fishingSpotData.ID] = fishingSpotData
  }

  // Get data for these baits
  const BAITS = [
    'Ragworm',
    'Krill',
    'Plump Worm',
    'Versatile Lure',
    'Glowworm',
    'Shrimp Cage Feeder',
    'Heavy Steel Jig',
    'Rat Tail',
    'Squid Strip',
    'Pill Bug'
  ]
  for (const bait of BAITS) {
    console.log(`Fetching ${XIVAPI}/search?string=${bait}`)
    const baitData = await getSearchResult(bait, 'Item')
    baitsResults[baitData.ID] = baitData
  }

  // Get data for these achievements
  const ACHIEVEMENTS = [
    'What Did Octopodes Do to You?',
    'What Did Sharks Do to You?',
    'What Did Jellyfish Do to You?',
    'What Did Seadragons Do to You?',
    'What Did Balloons Do to You?',
    'What Did Crabs Do to You?',
    'What Did Mantas Do to You?'
  ]
  for (const achievement of ACHIEVEMENTS) {
    console.log(`Fetching ${XIVAPI}/search?string=${achievement}`)
    const achievementData = await getSearchResult(achievement, 'Achievement')
    achievementsResults[achievementData.ID] = achievementData
  }

  console.log('Writing to file...')
  fs.writeFileSync(OUTPUT, JSON.stringify({
    fishingSpots: fishingSpotsResults,
    fishes: fishesResults,
    baits: baitsResults,
    achievements: achievementsResults
  }))

  console.log('Done!')
})()
