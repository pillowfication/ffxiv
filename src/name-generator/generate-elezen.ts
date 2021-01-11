import data from './data/elezen.json'
import { Clan, Gender } from './types'
import { randomElement } from './utils'

const FORENAMES = {
  [Gender.Male]: data.male_forenames,
  [Gender.Female]: data.female_forenames
}

const SURNAMES = {
  [Clan.Wildwood]: data.wildwood_surnames,
  [Clan.Duskwight]: data.duskwight_surnames
}

export default function generateHyur (clan: Clan.Wildwood | Clan.Duskwight, gender: Gender) {
  const forename = gender === Gender.Male
    ? randomElement(FORENAMES[gender], SURNAMES[Clan.Wildwood], SURNAMES[Clan.Duskwight])
    : randomElement(FORENAMES[gender])
  const surname = randomElement(SURNAMES[clan])
  return `${forename} ${surname}`
}
