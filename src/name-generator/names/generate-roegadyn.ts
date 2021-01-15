import data from './data/roegadyn.json'
import { Clan, Gender } from './types'
import { randomElement } from './utils'

export const FORENAMES = {
  [Clan.SeaWolf]: {
    [Gender.Male]: data.sea_wolf.male_forenames,
    [Gender.Female]: data.sea_wolf.female_forenames
  },
  [Clan.Hellsguard]: data.hellsguard.forenames
}

export const SURNAMES = {
  [Clan.SeaWolf]: {
    [Gender.Male]: data.sea_wolf.male_surnames,
    [Gender.Female]: data.sea_wolf.female_surnames
  },
  [Clan.Hellsguard]: {
    [Gender.Male]: data.hellsguard.male_surnames,
    [Gender.Female]: data.hellsguard.female_surnames
  }
}

export default function generateRoegadyn (clan: Clan.SeaWolf | Clan.Hellsguard, gender: Gender) {
  const forename = randomElement(clan === Clan.SeaWolf ? FORENAMES[clan][gender] : FORENAMES[clan])
  const surname = randomElement(SURNAMES[clan][gender])
  return `${forename} ${surname}`
}
