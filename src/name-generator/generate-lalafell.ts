import data from './data/lalafell.json'
import { Clan, Gender } from './types'
import { randomElement, upperFirst } from './utils'

const PHONEMES = {
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
        const A = randomElement(PHONEMES[clan].A)
        const B = randomElement(PHONEMES[clan].B)
        const C = randomElement(PHONEMES[clan].C)
        const forename = upperFirst(A + B)
        const surname = upperFirst(C + B)
        return `${forename} ${surname}`
      } else {
        const A = randomElement(PHONEMES[clan].A)
        const B = randomElement(PHONEMES[clan].B)
        const forename = upperFirst(A + B + B)
        const surname = upperFirst(A + B)
        return `${forename} ${surname}`
      }
    case Clan.Dunesfolk:
      if (gender === Gender.Male) {
        const A = randomElement(PHONEMES[clan][gender].AC)
        const B = randomElement(PHONEMES[clan][gender].B)
        const C = randomElement(PHONEMES[clan][gender].AC)
        const forename = upperFirst(A + A + B)
        const surname = upperFirst(C + C + B)
        return `${forename} ${surname}`
      } else {
        const A = randomElement(PHONEMES[clan][gender].A)
        const B = randomElement(PHONEMES[clan][gender].B)
        const forename = upperFirst(A + A + B)
        const surname = upperFirst(A + B)
        return `${forename} ${surname}`
      }
  }
}
