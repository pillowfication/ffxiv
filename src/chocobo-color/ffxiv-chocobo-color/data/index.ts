import _stains from './stains.json'
import _fruits from './fruits.json'

import { Translatable } from '../../../translate'

function clampRGB (value: number): number {
  return value < 0 ? 0 : value > 255 ? 255 : value
}

export class Color {
  R: number
  G: number
  B: number

  constructor (R: number, G: number, B: number) {
    this.R = clampRGB(R)
    this.G = clampRGB(G)
    this.B = clampRGB(B)
  }

  add ({ R, G, B }: { R: number, G: number, B: number }): Color {
    return new Color(this.R + R, this.G + G, this.B + B)
  }

  differenceFrom (color: Color): { R: number, G: number, B: number } {
    return {
      R: color.R - this.R,
      G: color.G - this.G,
      B: color.B - this.B
    }
  }

  distanceTo (color: Color): number {
    return Math.hypot(this.R - color.R, this.G - color.G, this.B - color.B)
  }
}

export enum Shade {
  White = 'white',
  Red = 'red',
  Brown = 'brown',
  Yellow = 'yellow',
  Green = 'green',
  Blue = 'blue',
  Purple = 'purple'
}

export interface Stain {
  id: number
  color: Color
  name: Translatable
  shade: number
  shadeIndex: number
}

for (const stain of Object.values(_stains)) {
  stain.color = new Color(stain.color.R, stain.color.G, stain.color.B)
}

export const stains = _stains as any as Record<number, Stain>

export interface Fruit {
  id: number
  icon: number
  name: Translatable
  singular: Translatable
  plural: Translatable
}

export const fruits = _fruits as Record<number, Fruit>
