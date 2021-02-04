import { Color, Shade, Stain, Fruit as FruitInfo } from './data'
import en from './locales/en.json'
import de from './locales/de.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
const LOCALES = { en, de, fr, ja }

export { Color, Shade }
export type { Stain, FruitInfo }

export enum Fruit {
  XelphatolApple = 8157,
  DomanPlum = 8158,
  MamookPear = 8159,
  Valfruit = 8160,
  OGhomoroBerries = 8161,
  CieldalaesPineapple = 8162
}

export const fruitValues: Record<Fruit, { R: number, G: number, B: number }> = {
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

function maximum<T> (array: T[], predicate: (elem: T) => number): { elem: T, val: number } {
  let maxVal = -Infinity
  let maxElem: T = null as any as T
  for (const elem of array) {
    const val = predicate(elem)
    if (val > maxVal) {
      maxVal = val
      maxElem = elem
    }
  }
  return { elem: maxElem, val: maxVal }
}

export function isValidStain (stain: Stain): boolean {
  return stain.id !== 0 && stain.shade >= 2 && stain.shade <= 9 && stain.id <= 85
}

export function calculateFruitsDistance (fromColor: Color, toColor: Color, lookahead = 1): { fruits: Fruit[], color: Color, distance: number } {
  const fruits: Fruit[] = []
  let currentColor = fromColor
  let currentDistance = fromColor.distanceTo(toColor)

  while (true) {
    const best = maximum(
      pick(Object.keys(fruitValues).map(key => Number(key) as Fruit), lookahead),
      fruits => -fruits.reduce((acc, curr) => acc.add(fruitValues[curr]), currentColor).distanceTo(toColor)
    )
    if (-best.val >= currentDistance) {
      return {
        fruits,
        color: currentColor,
        distance: currentDistance
      }
    } else {
      fruits.push(best.elem[0])
      currentColor = currentColor.add(fruitValues[best.elem[0]])
      currentDistance = currentColor.distanceTo(toColor)
    }
  }
}

export function calculateFruitsMatrix (fromColor: Color, toColor: Color): { fruits: Fruit[], color: Color, distance: number } {
  const difference = fromColor.differenceFrom(toColor)
  const fR = -(difference.G + difference.B) / 10
  const fG = -(difference.R + difference.B) / 10
  const fB = -(difference.R + difference.G) / 10

  const fruitCounts: Array<[Fruit, number]> = [
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

  return {
    fruits,
    color: currentColor,
    distance: currentColor.distanceTo(toColor)
  }
}

const cache: Record<string, { fruits: Fruit[], color: Color, distance: number }> = {}

export function calculateFruits (fromStain: Stain, toStain: Stain): { fruits: Fruit[], color: Color, distance: number } {
  const key = `${fromStain.id},${toStain.id}`
  if (cache[key] !== undefined) {
    return cache[key]
  }

  const solution = calculateFruitsDistance(fromStain.color, toStain.color, 3)

  // Honey Yellow -> Currant Purple
  if (fromStain.id === 37 && toStain.id === 79) {
    solution.fruits.splice(solution.fruits.lastIndexOf(Fruit.XelphatolApple), 1)
    solution.color = solution.color.add(fruitValues[Fruit.DomanPlum])
    solution.distance = solution.color.distanceTo(toStain.color)
  }
  // Celeste Green -> Currant Purple
  if (fromStain.id === 57 && toStain.id === 79) {
    solution.fruits.push(Fruit.MamookPear)
    solution.color = solution.color.add(fruitValues[Fruit.MamookPear])
    solution.distance = solution.color.distanceTo(toStain.color)
  }

  return (cache[key] = solution)
}

export function translate (type: 'shade', id: string, locale: string = 'en'): string {
  const translation = LOCALES?.[locale][type][id]
  return translation !== null ? translation : `{${type}.${id}}`
}
