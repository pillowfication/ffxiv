import data from './data/viera.json'
import { Clan } from './types'
import { randomElement } from './utils'

const FORENAMES = data.forenames

const SURNAMES = {
  [Clan.Rava]: data.rava.surnames,
  [Clan.Veena]: data.veena.surnames
}

export default function generateHrothgar (clan: Clan.Rava | Clan.Veena) {
  const forename = randomElement(FORENAMES)
  const surname = randomElement(SURNAMES[clan])
  return `${forename} ${surname}`
}
