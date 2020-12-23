import { timeUntil as genericTimeUntil } from '../utils'
import { ROUTE_MAP } from './maps'
import FISH from './gists/data/fish.json'

const FISH_MAP = {}
for (const key in FISH) {
  for (const fish of FISH[key]) {
    FISH_MAP[fish.name] = fish
  }
}

export function timeUntil (now, then, full) {
  const diff = then.getTime() - now.getTime()
  if (diff < -900000) {
    return 'en route'
  } else if (diff < 0) {
    return 'boarding now'
  } else {
    return genericTimeUntil(now, then, full)
  }
}

export function getStops (destinationCode) {
  const stops = ROUTE_MAP[destinationCode[0]]
  const timeIndex = 'DSN'.indexOf(destinationCode[1])
  return stops.map((stop, index) => stop + 'DSN'.charAt((index + timeIndex + 1) % 3))
}

export function getBaitChain (fishName) {
  const fish = FISH_MAP[fishName]

  let currBait = fish
  const bait = [currBait]
  while (currBait) {
    if (currBait.bait) {
      bait.unshift({ name: currBait.bait })
      currBait = null
    } else if (currBait.mooch) {
      currBait = FISH_MAP[currBait.mooch]
      bait.unshift(currBait)
    } else {
      console.error(`Incomplete chain for ${fishName}`)
      currBait = null
    }
  }

  const intuitionFishes = fish.intuition && fish.intuition.map((intuitionFish) => ({
    count: intuitionFish.count,
    bait: getBaitChain(intuitionFish.name).bait
  }))

  return { bait, intuitionFishes }
}
