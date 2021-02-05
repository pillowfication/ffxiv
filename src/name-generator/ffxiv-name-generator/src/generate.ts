import { charaMakeNames } from '../data'
import { randomElement, formatName } from './utils'
import { Clan, Gender } from './types'

const GENERATORS: Record<Clan, { [key in Gender]: () => string }> = {
  [Clan.Midlander]: {
    [Gender.Male]: () => {
      const forename = randomElement(charaMakeNames.hyur_midlander_male)
      const surname = randomElement(charaMakeNames.hyur_midlander_lastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(charaMakeNames.hyur_midlander_female)
      const surname = randomElement(charaMakeNames.hyur_midlander_lastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Highlander]: {
    [Gender.Male]: () => {
      const forename = randomElement(charaMakeNames.hyur_highlander_male)
      const surname = randomElement(charaMakeNames.hyur_highlander_lastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(charaMakeNames.hyur_highlander_female)
      const surname = randomElement(charaMakeNames.hyur_highlander_lastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Wildwood]: {
    [Gender.Male]: () => {
      const forename = randomElement(charaMakeNames.elezen_male)
      const surname = randomElement(charaMakeNames.elezen_wildwood_lastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(charaMakeNames.elezen_female)
      const surname = randomElement(charaMakeNames.elezen_wildwood_lastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Duskwight]: {
    [Gender.Male]: () => {
      const forename = randomElement(charaMakeNames.elezen_male)
      const surname = randomElement(charaMakeNames.elezen_duskwight_lastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(charaMakeNames.elezen_female)
      const surname = randomElement(charaMakeNames.elezen_duskwight_lastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Plainsfolk]: {
    [Gender.Male]: () => {
      const phonemeA = randomElement(charaMakeNames.lalafell_plainsfolk_firstNameStart)
      const phonemeB = randomElement(charaMakeNames.lalafell_plainsfolk_endOfNames)
      const phonemeC = randomElement(charaMakeNames.lalafell_plainsfolk_lastNameStart)
      return formatName(phonemeA + phonemeB, phonemeC + phonemeB)
    },
    [Gender.Female]: () => {
      const phonemeA = randomElement(charaMakeNames.lalafell_plainsfolk_firstNameStart)
      const phonemeB = randomElement(charaMakeNames.lalafell_plainsfolk_endOfNames)
      return formatName(phonemeA + phonemeB + phonemeB, phonemeA + phonemeB)
    }
  },
  [Clan.Dunesfolk]: {
    [Gender.Male]: () => {
      const phonemeAA = randomElement(charaMakeNames.lalafell_dunesfolk_male)
      const phonemeB = randomElement(charaMakeNames.lalafell_dunesfolk_male_lastName)
      const phonemeCC = randomElement(charaMakeNames.lalafell_dunesfolk_male)
      return formatName(phonemeAA + phonemeB, phonemeCC + phonemeB)
    },
    [Gender.Female]: () => {
      const phonemeA = randomElement(charaMakeNames.lalafell_dunesfolk_female)
      const phonemeB = randomElement(charaMakeNames.lalafell_dunesfolk_female_lastName)
      return formatName(phonemeA + phonemeA + phonemeB, phonemeA + phonemeB)
    }
  },
  [Clan.SeekerOfTheSun]: {
    [Gender.Male]: () => {
      const forename = randomElement(charaMakeNames.miqote_seekerOfTheSun_male)
      const surname = randomElement(charaMakeNames.miqote_seekerOfTheSun_male_lastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(charaMakeNames.miqote_seekerOfTheSun_female)
      const surname = randomElement(charaMakeNames.miqote_seekerOfTheSun_female_lastName)
      return formatName(forename, surname)
    }
  },
  [Clan.KeeperOfTheMoon]: {
    [Gender.Male]: () => {
      const forename = randomElement(charaMakeNames.miqote_keeperOfTheMoon_male)
      const surname = randomElement(charaMakeNames.miqote_keeperOfTheMoon_lastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(charaMakeNames.miqote_keeperOfTheMoon_female)
      const surname = randomElement(charaMakeNames.miqote_keeperOfTheMoon_lastName)
      return formatName(forename, surname)
    }
  },
  [Clan.SeaWolf]: {
    [Gender.Male]: () => {
      const forename = randomElement(charaMakeNames.roegadyn_seaWolf_male)
      const surname = randomElement(charaMakeNames.roegadyn_seaWolf_male_lastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(charaMakeNames.roegadyn_seaWolf_female)
      const surname = randomElement(charaMakeNames.roegadyn_seaWolf_female_lastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Hellsguard]: {
    [Gender.Male]: () => {
      const forename = randomElement(charaMakeNames.roegadyn_hellsguard_firstName)
      const surname = randomElement(charaMakeNames.roegadyn_hellsguard_male_lastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(charaMakeNames.roegadyn_hellsguard_firstName)
      const surname = randomElement(charaMakeNames.roegadyn_hellsguard_female_lastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Raen]: {
    [Gender.Male]: () => {
      const forename = randomElement(charaMakeNames.auRa_raen_male)
      const surname = randomElement(charaMakeNames.auRa_raen_lastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(charaMakeNames.auRa_raen_female)
      const surname = randomElement(charaMakeNames.auRa_raen_lastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Xaela]: {
    [Gender.Male]: () => {
      const forename = randomElement(charaMakeNames.auRa_xaela_male)
      const surname = randomElement(charaMakeNames.auRa_xaela_lastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(charaMakeNames.auRa_xaela_female)
      const surname = randomElement(charaMakeNames.auRa_xaela_lastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Helions]: {
    [Gender.Male]: () => {
      const forename = randomElement(charaMakeNames.hrothgar_helions_firstName)
      const surname = randomElement(charaMakeNames.hrothgar_helions_lastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      throw new Error(`Cannot generate: ${Clan.Helions} ${Gender.Female}`)
    }
  },
  [Clan.TheLost]: {
    [Gender.Male]: () => {
      const forename = randomElement(charaMakeNames.hrothgar_theLost_firstName)
      const surname = randomElement(charaMakeNames.hrothgar_theLost_lastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      throw new Error(`Cannot generate: ${Clan.TheLost} ${Gender.Female}`)
    }
  },
  [Clan.Rava]: {
    [Gender.Male]: () => {
      throw new Error(`Cannot generate: ${Clan.Rava} ${Gender.Male}`)
    },
    [Gender.Female]: () => {
      const forename = randomElement(charaMakeNames.viera_firstName)
      const surname = randomElement(charaMakeNames.viera_rava_lastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Veena]: {
    [Gender.Male]: () => {
      throw new Error(`Cannot generate: ${Clan.Veena} ${Gender.Male}`)
    },
    [Gender.Female]: () => {
      const forename = randomElement(charaMakeNames.viera_firstName)
      const surname = randomElement(charaMakeNames.viera_veena_lastName)
      return formatName(forename, surname)
    }
  }
}

export default function generate (clan: Clan, gender: Gender): string {
  return GENERATORS[clan][gender]()
}
