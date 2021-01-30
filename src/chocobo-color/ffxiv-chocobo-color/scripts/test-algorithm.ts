import { isValidStain, calculateFruits, Stain, Color } from '..'
import { stains } from '../data'

const VALID_STAINS = Object.values(stains).filter(isValidStain)

function getClosestStain (color: Color) {
  let minDistance = Number.MAX_VALUE
  let minStain: Stain = null
  for (const stain of VALID_STAINS) {
    const distance = color.distanceTo(stain.color)
    if (distance < minDistance) {
      minDistance = distance
      minStain = stain
    }
  }
  return minStain
}

let i = 0
for (const fromStain of VALID_STAINS) {
  console.log(++i)
  for (const toStain of VALID_STAINS) {
    const solution = calculateFruits(fromStain, toStain)
    const closestStain = getClosestStain(solution.color)
    if (closestStain.id !== toStain.id) {
      console.log(`${fromStain.name_en} --> ${toStain.name_en},  (${solution.color.R}, ${solution.color.G}, ${solution.color.B}) ${closestStain.name_en}`)
    }
  }
}
