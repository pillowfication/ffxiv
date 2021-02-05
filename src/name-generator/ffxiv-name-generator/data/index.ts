import _charaMakeNames from './chara-make-names.json'
import _miqoteSuffixes from './miqote-suffixes.json'
import _miqoteTribes from './miqote-tribes.json'
import _roegadynDictionary from './roegadyn-dictionary.json'

export const charaMakeNames = {
  hyur_midlander_male: _charaMakeNames.HyurMidlanderMale,
  hyur_midlander_female: _charaMakeNames.HyurMidlanderFemale,
  hyur_midlander_lastName: _charaMakeNames.HyurMidlanderLastName,
  hyur_highlander_male: _charaMakeNames.HyurHighlanderMale,
  hyur_highlander_female: _charaMakeNames.HyurHighlanderFemale,
  hyur_highlander_lastName: _charaMakeNames.HyurHighlanderLastName,
  elezen_male: _charaMakeNames.ElezenMale,
  elezen_female: _charaMakeNames.ElezenFemale,
  elezen_wildwood_lastName: _charaMakeNames.ElezenWildwoodLastName,
  elezen_duskwight_lastName: _charaMakeNames.ElezenDuskwightLastName,
  lalafell_plainsfolk_firstNameStart: _charaMakeNames.LalafellPlainsfolkFirstNameStart,
  lalafell_plainsfolk_lastNameStart: _charaMakeNames.LalafellPlainsfolkLastNameStart,
  lalafell_plainsfolk_endOfNames: _charaMakeNames.LalafellPlainsfolkEndOfNames,
  lalafell_dunesfolk_male: _charaMakeNames.LalafellDunesfolkMale,
  lalafell_dunesfolk_male_lastName: _charaMakeNames.LalafellDunesfolkMaleLastName,
  lalafell_dunesfolk_female: _charaMakeNames.LalafellDunesfolkFemale,
  lalafell_dunesfolk_female_lastName: _charaMakeNames.LalafellDunesfolkFemaleLastName,
  miqote_seekerOfTheSun_male: _charaMakeNames.MiqoteSunMale,
  miqote_seekerOfTheSun_female: _charaMakeNames.MiqoteSunFemale,
  miqote_seekerOfTheSun_male_lastName: _charaMakeNames.MiqoteSunMaleLastName,
  miqote_seekerOfTheSun_female_lastName: _charaMakeNames.MiqoteSunFemaleLastName,
  miqote_keeperOfTheMoon_male: _charaMakeNames.MiqoteMoonMale,
  miqote_keeperOfTheMoon_female: _charaMakeNames.MiqoteMoonFemale,
  miqote_keeperOfTheMoon_lastName: _charaMakeNames.MiqoteMoonLastname,
  roegadyn_seaWolf_male: _charaMakeNames.RoegadynSeaWolfMale,
  roegadyn_seaWolf_male_lastName: _charaMakeNames.RoegadynSeaWolfMaleLastName,
  roegadyn_seaWolf_female: _charaMakeNames.RoegadynSeaWolfFemale,
  roegadyn_seaWolf_female_lastName: _charaMakeNames.RoegadynSeaWolfFemaleLastName,
  roegadyn_hellsguard_firstName: _charaMakeNames.RoegadynHellsguardFirstName,
  roegadyn_hellsguard_male_lastName: _charaMakeNames.RoegadynHellsguardMaleLastName,
  roegadyn_hellsguard_female_lastName: _charaMakeNames.RoegadynHellsguardFemaleLastName,
  auRa_raen_male: _charaMakeNames.AuRaRaenMale,
  auRa_raen_female: _charaMakeNames.AuRaRaenFemale,
  auRa_raen_lastName: _charaMakeNames.AuRaRaenLastName,
  auRa_xaela_male: _charaMakeNames.AuRaXaelaMale,
  auRa_xaela_female: _charaMakeNames.AuRaXaelaFemale,
  auRa_xaela_lastName: _charaMakeNames.AuRaXaelaLastName,
  hrothgar_helions_firstName: _charaMakeNames.HrothgarHellionsFirstName,
  hrothgar_helions_lastName: _charaMakeNames.HrothgarHellionsLastName,
  hrothgar_theLost_firstName: _charaMakeNames.HrothgarLostFirstName,
  hrothgar_theLost_lastName: _charaMakeNames.HrothgarLostLastName,
  viera_firstName: _charaMakeNames.VieraFirstName,
  viera_rava_lastName: _charaMakeNames.VieraRavaLastName,
  viera_veena_lastName: _charaMakeNames.VieraVeenaLastName
}

export const miqoteSuffixes = _miqoteSuffixes as Record<string, number>
export const miqoteTribes = _miqoteTribes as Record<string, string>

export interface DictionaryEntry {
  definition_en: string
  grammar: 'A' | 'N' | 'AN' | 'V' | 'X'
  derivatives?: Record<'A' | 'N' | 'AN' | 'V' | 'X', string>
}

export const roegadynDictionary = _roegadynDictionary as any as Record<string, DictionaryEntry>
