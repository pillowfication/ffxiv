import data from './data/hrothgar.json'
import { Clan } from './types'
import { randomElement } from './utils'

const FORENAMES = {
  [Clan.Helions]: data.helions.forenames,
  [Clan.TheLost]: data.the_lost.forenames
}

const SURNAMES = {
  [Clan.Helions]: data.helions.surnames,
  [Clan.TheLost]: data.the_lost.surnames
}

export default function generateHrothgar (clan: Clan.Helions | Clan.TheLost) {
  const forename = randomElement(FORENAMES[clan])
  const surname = randomElement(SURNAMES[clan])
  return `${forename} ${surname}`
}
