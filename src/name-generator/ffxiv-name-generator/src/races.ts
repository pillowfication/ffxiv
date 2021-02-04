import { Race, Clan, Gender } from './types'

const RACES = [
  Race.Hyur,
  Race.Elezen,
  Race.Lalafell,
  Race.Miqote,
  Race.Roegadyn,
  Race.AuRa,
  Race.Hrothgar,
  Race.Viera
]

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

export function getRaces (): Race[] {
  return RACES
}

export function getClans (race: Race): Clan[] {
  return CLANS[race]
}

export function getGenders (race: Race): Gender[] {
  switch (race) {
    case Race.Hrothgar: return [Gender.Male]
    case Race.Viera: return [Gender.Female]
    default: return [Gender.Male, Gender.Female]
  }
}
