import data from './data/miqote.json'
import { Clan, Gender } from './types'
import { randomElement } from './utils'

export const FORENAMES = {
  [Clan.SeekerOfTheSun]: {
    [Gender.Male]: data.seeker_of_the_sun.male_forenames,
    [Gender.Female]: data.seeker_of_the_sun.female_forenames
  },
  [Clan.KeeperOfTheMoon]: {
    [Gender.Male]: data.keeper_of_the_moon.male_forenames,
    [Gender.Female]: data.keeper_of_the_moon.female_forenames
  }
}

export const SURNAMES = {
  [Clan.SeekerOfTheSun]: data.seeker_of_the_sun.female_surnames,
  [Clan.KeeperOfTheMoon]: data.keeper_of_the_moon.surnames
}

export default function generateMiqote (clan: Clan.SeekerOfTheSun | Clan.KeeperOfTheMoon, gender: Gender) {
  const forename = randomElement(FORENAMES[clan][gender])
  const surname = clan === Clan.SeekerOfTheSun && gender === Gender.Male
    ? Math.random() < 0.97 ? 'Tia' : 'Nunh'
    : randomElement(SURNAMES[clan])
  return `${forename} ${surname}`
}
