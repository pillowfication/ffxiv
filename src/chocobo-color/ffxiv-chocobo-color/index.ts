import { stains, Color } from './data'
import en from './locales/en.json'
import de from './locales/de.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
const LOCALES = { en, de, fr, ja }

export enum Fruit {
  XelphatolApple = 8157,
  MamookPear = 8158,
  OGhomoroBerries = 8159,
  DomanPlum = 8160,
  Valfruit = 8161,
  CieldalaesPineapple = 8162
}

const fruitValues: Record<Fruit, { R: number, G: number, B: number }> = {
  [Fruit.XelphatolApple]: { R: 5, G: -5, B: -5 },
  [Fruit.MamookPear]: { R: -5, G: 5, B: -5 },
  [Fruit.OGhomoroBerries]: { R: -5, G: -5, B: 5 },
  [Fruit.DomanPlum]: { R: -5, G: 5, B: 5 },
  [Fruit.Valfruit]: { R: 5, G: -5, B: 5 },
  [Fruit.CieldalaesPineapple]: { R: 5, G: 5, B: -5 }
}

function _pick<T> (array: T[], count: number): T[][] {
  if (count === 1) {
    return array.map(x => [x])
  } else {
    return array.flatMap(x => _pick(array, count - 1).map(subPick => [x, ...subPick]))
  }
}

function pick<T> (array: T[], count: number): T[][] {
  return Array.from(Array(count)).flatMap((_, index) => _pick(array, index + 1))
}

function maximum<T> (array: T[], predicate: (elem: T) => number) {
  let maxVal = -Infinity
  let maxElem: T
  for (const elem of array) {
    let val = predicate(elem)
    if (val > maxVal) {
      maxVal = val
      maxElem = elem
    }
  }
  return { elem: maxElem, val: maxVal }
}

function calculateFruitsDistance (fromColor: Color, toColor: Color, lookahead = 1) {
  const fruits: Fruit[] = []
  let currentColor = fromColor
  let currentDistance = fromColor.distanceTo(toColor)

  while (true) {
    const best = maximum(
      pick(Object.keys(fruitValues).map(Number) as Fruit[], lookahead),
      fruits => -fruits.reduce((acc, curr) => acc.add(fruitValues[curr]), currentColor).distanceTo(toColor)
    )
    if (-best.val >= currentDistance) {
      return fruits
    } else {
      fruits.push(best.elem[0])
      currentColor = currentColor.add(fruitValues[best.elem[0]])
      currentDistance = currentColor.distanceTo(toColor)
    }
  }
}

function calculateFruitsMatrix (fromColor: Color, toColor: Color) {
  const difference = fromColor.differenceFrom(toColor)
  const fR = -(difference.G + difference.B) / 10
  const fG = -(difference.R + difference.B) / 10
  const fB = -(difference.R + difference.G) / 10

  const fruitCounts: [Fruit, number][] = [
    [Fruit.XelphatolApple, fR > 0 ? Math.round(fR) : 0],
    [Fruit.MamookPear, fG > 0 ? Math.round(fG) : 0],
    [Fruit.OGhomoroBerries, fB > 0 ? Math.round(fB) : 0],
    [Fruit.Valfruit, fR < 0 ? Math.round(-fR) : 0],
    [Fruit.DomanPlum, fG < 0 ? Math.round(-fG) : 0],
    [Fruit.CieldalaesPineapple, fB < 0 ? Math.round(-fB) : 0]
  ]
  const fruits: Fruit[] = []
  let currentColor = fromColor

  while (fruitCounts.reduce((acc, curr) => acc + curr[1], 0) > 0) {
    const best = maximum(
      fruitCounts.filter(([, count]) => count > 0),
      ([fruit]) => {
        const nextColor = currentColor.add(fruitValues[fruit])
        return -Math.max(...[nextColor.R, nextColor.G, nextColor.B].map(val => Math.abs(127.5 - val)))
      }
    )
    fruits.push(best.elem[0])
    currentColor = currentColor.add(fruitValues[best.elem[0]])
    best.elem[1] -= 1
  }

  return fruits
}

// const fruits = calculateFruitsMatrix(stains[36].color, stains[1].color)
// console.log(fruits)
// console.log(cF(fruits))

// function cF (a: Fruit[]) {
//   return Object.values(Fruit).map(f => [f, a.filter(b => b === f).length])
// }
//
// function play (startColor: Color, fruits: Fruit[]) {
//   let c = startColor
//   console.log(cF(fruits))
//   console.log(c.toString())
//   for (const fruit of fruits) {
//     c = c.add(fruitValues[fruit])
//     console.log(c.toString() + '   |', fruit)
//   }
// }
//
// const start = new Color(230, 230, 230)
// const end = new Color(0, 0, 5)
//
// play(start, calculateFruitsMatrix(start, end))
// play(start, calculateFruitsDistance(start, end, 1))
// play(start, calculateFruitsDistance(start, end, 6))

// const validColors = Object.values(stains).filter(x => x.id < 84).map(x => x.color)
//
// let min = Infinity
// let foo = null
//
// for (let i = 0; i < validColors.length; ++i) {
//   console.log(i)
//   for (let j = i + 1; j < validColors.length; ++j) {
//     const d = validColors[i].distanceTo(validColors[j])
//     if (d < min) {
//       min = d
//       foo = [validColors[i], validColors[j]]
//     }
//   }
// }
//
// console.log(min, foo)

function applyFruits (color: Color, fruits: Fruit[]) {
  return fruits.reduce
}

// const CURRANT_PURPLE = stains[79]
// const GRAPE_PURPLE = stains[81]
//
// for (const stain of Object.values(stains)) {
//   // console.log(`${stain.name_en} -> ${CURRANT_PURPLE.name_en}`)
//   const fruits = calculateFruitsDistance(stain.color, CURRANT_PURPLE.color, 3)
//   const result = fruits.reduce((color, fruit) => color.add(fruitValues[fruit]), stain.color)
//   const closestMatch = maximum(Object.values(stains), stain => -stain.color.distanceTo(result))
//   console.log(`${stain.name_en} -> ${closestMatch.elem.name_en}`)
// }

export function translate (type: 'shade', id: string, locale: string = 'en') {
  return (LOCALES[locale] && LOCALES[locale][type][id]) || `{${type}.${id}}`
}
