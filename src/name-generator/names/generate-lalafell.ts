import data from './data/lalafell.json'
import { Clan, Gender } from './types'
import { randomElement, upperFirst } from './utils'

export const PHONEMES = {
  [Clan.Plainsfolk]: {
    A: data.plainsfolk.phoneme_a,
    B: data.plainsfolk.phoneme_b,
    C: data.plainsfolk.phoneme_c
  },
  [Clan.Dunesfolk]: {
    [Gender.Male]: {
      AC: data.dunesfolk.male_phoneme_ac,
      B: data.dunesfolk.male_phoneme_b
    },
    [Gender.Female]: {
      A: data.dunesfolk.female_phoneme_a,
      B: data.dunesfolk.female_phoneme_b
    }
  }
}

export default function generateLalafell (clan: Clan.Plainsfolk | Clan.Dunesfolk, gender: Gender) {
  switch (clan) {
    case Clan.Plainsfolk:
      if (gender === Gender.Male) {
        const phonemeA = randomElement(PHONEMES[clan].A)
        const phonemeB = randomElement(PHONEMES[clan].B)
        const phonemeC = randomElement(PHONEMES[clan].C)
        const forename = upperFirst(phonemeA + phonemeB)
        const surname = upperFirst(phonemeC + phonemeB)
        return `${forename} ${surname}`
      } else {
        const phonemeA = randomElement(PHONEMES[clan].A)
        const phonemeB = randomElement(PHONEMES[clan].B)
        const forename = upperFirst(phonemeA + phonemeB + phonemeB)
        const surname = upperFirst(phonemeA + phonemeB)
        return `${forename} ${surname}`
      }
    case Clan.Dunesfolk:
      if (gender === Gender.Male) {
        const phonemeA = randomElement(PHONEMES[clan][gender].AC)
        const phonemeB = randomElement(PHONEMES[clan][gender].B)
        const phonemeC = randomElement(PHONEMES[clan][gender].AC)
        const forename = upperFirst(phonemeA + phonemeA + phonemeB)
        const surname = upperFirst(phonemeC + phonemeC + phonemeB)
        return `${forename} ${surname}`
      } else {
        const phonemeA = randomElement(PHONEMES[clan][gender].A)
        const phonemeB = randomElement(PHONEMES[clan][gender].B)
        const forename = upperFirst(phonemeA + phonemeA + phonemeB)
        const surname = upperFirst(phonemeA + phonemeB)
        return `${forename} ${surname}`
      }
  }
}
