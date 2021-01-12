import data from './data/miqote.json'
import { Clan, Gender } from './types'
import { randomElement } from './utils'

export const FORENAMES = {
  [Clan.SeekersOfTheSun]: {
    [Gender.Male]: data.seekers_of_the_sun.male_forenames,
    [Gender.Female]: data.seekers_of_the_sun.female_forenames
  },
  [Clan.KeepersOfTheMoon]: {
    [Gender.Male]: data.keepers_of_the_moon.male_forenames,
    [Gender.Female]: data.keepers_of_the_moon.female_forenames
  }
}

export const SURNAMES = {
  [Clan.SeekersOfTheSun]: data.seekers_of_the_sun.female_surnames,
  [Clan.KeepersOfTheMoon]: data.keepers_of_the_moon.surnames
}

export default function generateMiqote (clan: Clan.SeekersOfTheSun | Clan.KeepersOfTheMoon, gender: Gender) {
  const forename = randomElement(FORENAMES[clan][gender])
  const surname = clan === Clan.SeekersOfTheSun && gender === Gender.Male
    ? Math.random() < 0.97 ? 'Tia' : 'Nunh'
    : randomElement(SURNAMES[clan])
  return `${forename} ${surname}`
}
