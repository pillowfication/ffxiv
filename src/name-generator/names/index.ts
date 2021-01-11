import generateHyur from './generate-hyur'
import generateElezen from './generate-elezen'
import generateLalafell from './generate-lalafell'
import generateMiqote from './generate-miqote'
import generateRoegadyn from './generate-roegadyn'
import { Race, Clan, Gender } from './types'

import en from './locales/en.json'
import de from './locales/de.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
const LOCALES = { en, de, fr, ja }

const GENERATORS: Record<Race, (clan: Clan, gender: Gender) => string> = {
  [Race.Hyur]: generateHyur,
  [Race.Elezen]: generateElezen,
  [Race.Lalafell]: generateLalafell,
  [Race.Miqote]: generateMiqote,
  [Race.Roegadyn]: generateRoegadyn,
  [Race.AuRa]: () => '',
  [Race.Hrothgar]: () => '',
  [Race.Viera]: () => ''
}

export function translate (type: 'race' | 'clan' | 'gender', id: string, locale: string = 'en') {
  return (LOCALES[locale] && LOCALES[locale][type][id]) || id
}

export default function generate (race: Race, clan: Clan, gender: Gender) {
  return GENERATORS[race](clan, gender)
}
