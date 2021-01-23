import fs from 'fs'
import path from 'path'
import fetch, { fetchAllPages, getSearchResult } from '../../fetch-xivapi'

const OUTPUT = path.resolve(__dirname, './data/fish-data.json')
const THE_HIGH_SEAS = 900 // TerritoryID

;(async () => {
  // Get the list of all fishing spots
  console.log('Fetching', '/FishingSpot')
  const fishingSpots = await fetchAllPages('/FishingSpot', { columns: 'Url' })
  console.log(`${fishingSpots.length} URLs found`)

  // All the gathered data for whatever will be shoved in here
  const fishingSpotsResults = {}
  const fishesResults = {}
  const baitsResults = {}
  const achievementsResults = {}

  // Get data for fishing spots and fishes
  for (const { Url: url } of fishingSpots) {
    console.log('Fetching', url)
    const fishingSpotData = await fetch(url)
    if (fishingSpotData.TerritoryTypeTargetID !== THE_HIGH_SEAS) {
      continue
    }

    // Add all the fishes found there
    for (let i = 0; i < 10; ++i) {
      const fishData = fishingSpotData[`Item${i}`]
      if (fishData) {
        fishesResults[fishData.ID] = fishData
        fishingSpotData[`Item${i}`] = fishData.ID // Remove the fish data here to avoid duplicate data
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
    console.log('Fetching', `/search?string=${bait}`)
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
    console.log('Fetching', `/search?string=${achievement}`)
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
