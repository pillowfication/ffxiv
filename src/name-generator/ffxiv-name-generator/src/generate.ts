import names from '../data/chara-make-names.json'
import { randomElement, formatName } from './utils'
import { Clan, Gender } from './types'

const GENERATORS: Record<Clan, { [key in Gender]: () => string }> = {
  [Clan.Midlander]: {
    [Gender.Male]: () => {
      const forename = randomElement(names.HyurMidlanderMale)
      const surname = randomElement(names.HyurMidlanderLastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(names.HyurMidlanderFemale)
      const surname = randomElement(names.HyurMidlanderLastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Highlander]: {
    [Gender.Male]: () => {
      const forename = randomElement(names.HyurHighlanderMale)
      const surname = randomElement(names.HyurHighlanderLastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(names.HyurHighlanderFemale)
      const surname = randomElement(names.HyurHighlanderLastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Wildwood]: {
    [Gender.Male]: () => {
      const forename = randomElement(names.ElezenMale)
      const surname = randomElement(names.ElezenWildwoodLastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(names.ElezenFemale)
      const surname = randomElement(names.ElezenWildwoodLastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Duskwight]: {
    [Gender.Male]: () => {
      const forename = randomElement(names.ElezenMale)
      const surname = randomElement(names.ElezenDuskwightLastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(names.ElezenFemale)
      const surname = randomElement(names.ElezenDuskwightLastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Plainsfolk]: {
    [Gender.Male]: () => {
      const phonemeA = randomElement(names.LalafellPlainsfolkFirstNameStart)
      const phonemeB = randomElement(names.LalafellPlainsfolkEndOfNames)
      const phonemeC = randomElement(names.LalafellPlainsfolkLastNameStart)
      return formatName(phonemeA + phonemeB, phonemeC + phonemeB)
    },
    [Gender.Female]: () => {
      const phonemeA = randomElement(names.LalafellPlainsfolkFirstNameStart)
      const phonemeB = randomElement(names.LalafellPlainsfolkEndOfNames)
      return formatName(phonemeA + phonemeB + phonemeB, phonemeA + phonemeB)
    }
  },
  [Clan.Dunesfolk]: {
    [Gender.Male]: () => {
      const phonemeAA = randomElement(names.LalafellDunesfolkMale)
      const phonemeB = randomElement(names.LalafellDunesfolkMaleLastName)
      const phonemeCC = randomElement(names.LalafellDunesfolkMale)
      return formatName(phonemeAA + phonemeB, phonemeCC + phonemeB)
    },
    [Gender.Female]: () => {
      const phonemeA = randomElement(names.LalafellDunesfolkFemale)
      const phonemeB = randomElement(names.LalafellDunesfolkFemaleLastName)
      return formatName(phonemeA + phonemeA + phonemeB, phonemeA + phonemeB)
    }
  },
  [Clan.SeekerOfTheSun]: {
    [Gender.Male]: () => {
      const forename = randomElement(names.MiqoteSunMale)
      const surname = randomElement(names.MiqoteSunMaleLastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(names.MiqoteSunFemale)
      const surname = randomElement(names.MiqoteSunFemaleLastName)
      return formatName(forename, surname)
    }
  },
  [Clan.KeeperOfTheMoon]: {
    [Gender.Male]: () => {
      const forename = randomElement(names.MiqoteMoonMale)
      const surname = randomElement(names.MiqoteMoonLastname)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(names.MiqoteMoonFemale)
      const surname = randomElement(names.MiqoteMoonLastname)
      return formatName(forename, surname)
    }
  },
  [Clan.SeaWolf]: {
    [Gender.Male]: () => {
      const forename = randomElement(names.RoegadynSeaWolfMale)
      const surname = randomElement(names.RoegadynSeaWolfMaleLastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(names.RoegadynSeaWolfFemale)
      const surname = randomElement(names.RoegadynSeaWolfFemaleLastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Hellsguard]: {
    [Gender.Male]: () => {
      const forename = randomElement(names.RoegadynHellsguardFirstName)
      const surname = randomElement(names.RoegadynHellsguardMaleLastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(names.RoegadynHellsguardFirstName)
      const surname = randomElement(names.RoegadynHellsguardFemaleLastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Raen]: {
    [Gender.Male]: () => {
      const forename = randomElement(names.AuRaRaenMale)
      const surname = randomElement(names.AuRaRaenLastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(names.AuRaRaenFemale)
      const surname = randomElement(names.AuRaRaenLastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Xaela]: {
    [Gender.Male]: () => {
      const forename = randomElement(names.AuRaXaelaMale)
      const surname = randomElement(names.AuRaXaelaLastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      const forename = randomElement(names.AuRaXaelaFemale)
      const surname = randomElement(names.AuRaXaelaLastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Helions]: {
    [Gender.Male]: () => {
      const forename = randomElement(names.HrothgarHellionsFirstName)
      const surname = randomElement(names.HrothgarHellionsLastName)
      return formatName(forename, surname)
    },
    [Gender.Female]: () => {
      throw new Error(`Cannot generate: ${Clan.Helions} ${Gender.Female}`)
    }
  },
  [Clan.TheLost]: {
    [Gender.Male]: () => {
      const forename = randomElement(names.HrothgarLostFirstName)
      const surname = randomElement(names.HrothgarLostLastName)
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
      const forename = randomElement(names.VieraFirstName)
      const surname = randomElement(names.VieraRavaLastName)
      return formatName(forename, surname)
    }
  },
  [Clan.Veena]: {
    [Gender.Male]: () => {
      throw new Error(`Cannot generate: ${Clan.Veena} ${Gender.Male}`)
    },
    [Gender.Female]: () => {
      const forename = randomElement(names.VieraFirstName)
      const surname = randomElement(names.VieraVeenaLastName)
      return formatName(forename, surname)
    }
  }
}

export default function generate (clan: Clan, gender: Gender) {
  return GENERATORS[clan][gender]()
}
