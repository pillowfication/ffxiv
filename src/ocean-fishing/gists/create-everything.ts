import fs from 'fs'
import path from 'path'
import fishData from './data/ocean-fish-data.json'
import spreadsheet from './data/spreadsheet-data.json'
import biteTimes from './data/ocean-fish-bite-times.json'

const OUTPUT = path.resolve(__dirname, './data/everything.json')

const fishesByName = {}
Object.values(fishData.fishes).forEach(fish => { fishesByName[fish.name_en] = fish })

const baitsByName = {}
Object.values(fishData.baits).forEach(bait => { baitsByName[bait.name_en] = bait })

const spreadsheetFishes = Object.values(spreadsheet).flatMap((x: Array<any>) => x)

// Attach spreadsheet data to fishes
for (const fishId in fishData.fishes) {
  const fish = fishData.fishes[fishId]
  const spreadsheetData = spreadsheetFishes.find(fishInfo => fishInfo.name === fish.name_en)

  if (spreadsheetData) {
    // Replace baits/mooches/intuitions with their corresponding IDs
    if (spreadsheetData.bait) {
      spreadsheetData.bait = baitsByName[spreadsheetData.bait].id
    }
    if (spreadsheetData.mooch) {
      spreadsheetData.mooch = fishesByName[spreadsheetData.mooch].id
    }
    if (spreadsheetData.intuition) {
      spreadsheetData.intuition = spreadsheetData.intuition.map(({ name, count }) => ({
        id: fishesByName[name].id,
        count
      }))
    }
    // Replace biteTime with TC data
    spreadsheetData.bite_time = biteTimes[fishId]
  } else {
    console.error('Could not find spreadsheet data for fish:', fish)
  }
  fish.spreadsheet_data = spreadsheetData
}

fs.writeFileSync(OUTPUT, JSON.stringify(fishData))
