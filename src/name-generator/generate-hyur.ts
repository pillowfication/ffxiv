import data from './data/hyur.json'
import { Clan, Gender } from './types'
import { randomElement } from './utils'

const FORENAMES = {
  [Clan.Midlander]: {
    [Gender.Male]: data.midlander.male_forenames,
    [Gender.Female]: data.midlander.female_forenames
  },
  [Clan.Highlander]: {
    [Gender.Male]: data.highlander.male_forenames,
    [Gender.Female]: data.highlander.female_forenames
  }
}

const SURNAMES = {
  [Clan.Midlander]: data.midlander.surnames,
  [Clan.Highlander]: data.highlander.surnames
}

export default function generateHyur (clan: Clan.Midlander | Clan.Highlander, gender: Gender) {
  const forenames = FORENAMES[clan][gender]
  const surnames = SURNAMES[clan]
  return `${randomElement(forenames)} ${randomElement(surnames)}`
}
