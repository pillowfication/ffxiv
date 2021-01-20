import generate from './generate'
import { Race, Clan, Gender } from './types'

import en from './locales/en.json'
import de from './locales/de.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
const LOCALES = { en, de, fr, ja }

const CLANS: Record<Race, Clan[]> = {
  [Race.Hyur]: [Clan.Midlander, Clan.Highlander],
  [Race.Elezen]: [Clan.Wildwood, Clan.Duskwight],
  [Race.Lalafell]: [Clan.Plainsfolk, Clan.Dunesfolk],
  [Race.Miqote]: [Clan.SeekerOfTheSun, Clan.KeeperOfTheMoon],
  [Race.Roegadyn]: [Clan.SeaWolf, Clan.Hellsguard],
  [Race.AuRa]: [Clan.Raen, Clan.Xaela],
  [Race.Hrothgar]: [Clan.Helions, Clan.TheLost],
  [Race.Viera]: [Clan.Rava, Clan.Veena]
}

export function getClans (race: Race) {
  return CLANS[race]
}

export function getGenders (race: Race) {
  switch (race) {
    case Race.Hrothgar: return [Gender.Male]
    case Race.Viera: return [Gender.Female]
    default: return [Gender.Male, Gender.Female]
  }
}

export function translate (type: 'race' | 'clan' | 'gender', id: string, locale: string = 'en') {
  return (LOCALES[locale] && LOCALES[locale][type][id]) || `{${type}.${id}}`
}

export default generate
