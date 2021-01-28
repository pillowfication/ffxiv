import _stains from './stains.json'
import _fruits from './fruits.json'

function clampRGB (value: number) {
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

  add ({ R, G, B }: { R: number, G: number, B: number }) {
    return new Color(this.R + R, this.G + G, this.B + B)
  }

  differenceFrom (color: Color) {
    return {
      R: color.R - this.R,
      G: color.G - this.G,
      B: color.B - this.B
    }
  }

  distanceTo (color: Color) {
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

export type Stain = {
  id: number,
  color: Color,
  name_en: string,
  name_de: string,
  name_fr: string,
  name_ja: string,
  shade: number,
  shadeIndex: number
}

export type Fruit = {
  id: number,
  icon: number,
  name_en: string,
  name_de: string,
  name_fr: string,
  name_ja: string
}

for (const stain of Object.values(_stains)) {
  stain.color = new Color(stain.color.R, stain.color.G, stain.color.B)
}

export const stains = <any>_stains as Record<number, Stain>
export const fruits = _fruits as Record<number, Fruit>
