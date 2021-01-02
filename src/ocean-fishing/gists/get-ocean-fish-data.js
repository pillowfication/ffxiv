const fs = require('fs')
const path = require('path')
const { fishingSpots, fishes, baits, achievements } = require('./data/fish-data.json')

const OUTPUT = path.resolve(__dirname, './data/ocean-fish-data.json')
const THE_HIGH_SEAS = 900 // TerritoryID

const fishMap = {}
for (const [id, fish] of Object.entries(fishes)) {
  fishMap[id] = fish
}

function getFishIds (fishingSpot) {
  const fishIds = []
  for (let i = 0; i < 10; ++i) {
    if (fishingSpot[`Item${i}`]) {
      fishIds.push(fishingSpot[`Item${i}TargetID`])
    }
  }
  return fishIds
}

const results = {
  fishingSpots: (() => {
    const data = {}
    const oceanFishingSpots = Object.values(fishingSpots)
      .filter(fishingSpot => fishingSpot.TerritoryTypeTargetID === THE_HIGH_SEAS)
    for (const fishingSpot of oceanFishingSpots) {
      data[fishingSpot.ID] = {
        id: fishingSpot.ID,
        name_de: fishingSpot.PlaceName.Name_de,
        name_en: fishingSpot.PlaceName.Name_en,
        name_fr: fishingSpot.PlaceName.Name_fr,
        name_ja: fishingSpot.PlaceName.Name_ja,
        fishes: getFishIds(fishingSpot)
      }
    }
    return data
  })(),
  fishes: (() => {
    const data = {}
    const oceanFishingSpots = Object.values(fishingSpots)
      .filter(fishingSpot => fishingSpot.TerritoryTypeTargetID === THE_HIGH_SEAS)
    for (const fishingSpot of oceanFishingSpots) {
      for (const fishId of getFishIds(fishingSpot)) {
        const fish = fishMap[fishId]
        data[fish.ID] = {
          id: fish.ID,
          name_de: fish.Name_de,
          name_en: fish.Name_en,
          name_fr: fish.Name_fr,
          name_ja: fish.Name_ja,
          icon: fish.Icon
        }
      }
    }
    return data
  })(),
  baits: (() => {
    const data = {}
    for (const bait of Object.values(baits)) {
      data[bait.ID] = {
        id: bait.ID,
        name_de: bait.Name_de,
        name_en: bait.Name_en,
        name_fr: bait.Name_fr,
        name_ja: bait.Name_ja,
        icon: bait.Icon
      }
    }
    return data
  })(),
  achievements: (() => {
    const data = {}
    for (const achievement of Object.values(achievements)) {
      data[achievement.ID] = {
        id: achievement.ID,
        name_de: achievement.Name_de,
        name_en: achievement.Name_en,
        name_fr: achievement.Name_fr,
        name_ja: achievement.Name_ja,
        icon: achievement.Icon
      }
    }
    return data
  })()
}

fs.writeFileSync(OUTPUT, JSON.stringify(results))
