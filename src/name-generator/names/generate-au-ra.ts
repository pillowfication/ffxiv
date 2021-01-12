import data from './data/au-ra.json'
import { Clan, Gender } from './types'
import { randomElement } from './utils'

export const FORENAMES = {
  [Clan.Raen]: {
    [Gender.Male]: data.raen.male_forenames,
    [Gender.Female]: data.raen.female_forenames
  },
  [Clan.Xaela]: {
    [Gender.Male]: data.xaela.male_forenames,
    [Gender.Female]: data.xaela.female_forenames
  }
}

export const SURNAMES = {
  [Clan.Raen]: data.raen.surnames,
  [Clan.Xaela]: data.xaela.surnames
}

export default function generateAuRa (clan: Clan.Raen | Clan.Xaela, gender: Gender) {
  const forename = randomElement(FORENAMES[clan][gender])
  const surname = randomElement(SURNAMES[clan])
  return `${forename} ${surname}`
}
