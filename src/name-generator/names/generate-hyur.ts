import data from './data/hyur.json'
import { Clan, Gender } from './types'
import { randomElement } from './utils'

export const FORENAMES = {
  [Clan.Midlander]: {
    [Gender.Male]: data.midlander.male_forenames,
    [Gender.Female]: data.midlander.female_forenames
  },
  [Clan.Highlander]: {
    [Gender.Male]: data.highlander.male_forenames,
    [Gender.Female]: data.highlander.female_forenames
  }
}

export const SURNAMES = {
  [Clan.Midlander]: data.midlander.surnames,
  [Clan.Highlander]: data.highlander.surnames
}

export default function generateHyur (clan: Clan.Midlander | Clan.Highlander, gender: Gender) {
  const forename = randomElement(FORENAMES[clan][gender])
  const surname = randomElement(SURNAMES[clan])
  return `${forename} ${surname}`
}
