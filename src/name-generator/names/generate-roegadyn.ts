import data from './data/roegadyn.json'
import { Clan, Gender } from './types'
import { randomElement } from './utils'

export const FORENAMES = {
  [Clan.SeaWolves]: {
    [Gender.Male]: data.sea_wolves.male_forenames,
    [Gender.Female]: data.sea_wolves.female_forenames
  },
  [Clan.Hellsguard]: data.hellsguard.forenames
}

export const SURNAMES = {
  [Clan.SeaWolves]: {
    [Gender.Male]: data.sea_wolves.male_surnames,
    [Gender.Female]: data.sea_wolves.female_surnames
  },
  [Clan.Hellsguard]: {
    [Gender.Male]: data.hellsguard.male_surnames,
    [Gender.Female]: data.hellsguard.female_surnames
  }
}

export default function generateRoegadyn (clan: Clan.SeaWolves | Clan.Hellsguard, gender: Gender) {
  const forename = randomElement(clan === Clan.SeaWolves ? FORENAMES[clan][gender] : FORENAMES[clan])
  const surname = randomElement(SURNAMES[clan][gender])
  return `${forename} ${surname}`
}
