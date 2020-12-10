import TimeIcon from './TimeIcon'

export const DEST_MAP = {
  B: 'Bloodbrine Sea',
  C: 'Cieldalaes',
  G: 'Galadion Bay',
  N: 'Northern Strait of Merlthor',
  R: 'Rhotano Sea',
  S: 'Southern Strait of Merlthor',
  T: 'Rothlyt Sound'
}

export const TIME_MAP = {
  D: <TimeIcon.Day />,
  N: <TimeIcon.Night />,
  S: <TimeIcon.Sunset />
}

export const OBJECTIVES_MAP = {
  BD: ['Seafaring Toad'],
  BN: ['What Did Mantas Do to You?'],
  BS: ['Elasmosaurus', 'Hafgufa'],
  ND: ['Sothis', 'Elasmosaurus'],
  NN: ['What Did Octopodes Do to You?'],
  NS: ['What Did Seadragons Do to You?', 'Coral Manta'],
  RD: ['What Did Sharks Do to You?', 'Coral Manta'],
  RN: ['What Did Jellyfish Do to You?'],
  RS: ['Sothis', 'Stonescale'],
  TD: [],
  TN: ['What Did Balloons Do to You?', 'Stonescale'],
  TS: ['Hafgufa', 'Placodus']
}

export const ROUTE_MAP = {
  B: ['C', 'N', 'B'],
  N: ['S', 'G', 'N'],
  R: ['G', 'S', 'R'],
  T: ['C', 'R', 'T']
}

export const FISH_MAP = {
  B: ['Spectral Eel', 'Bareface'],
  C: ['Spectral Butterfly', 'Cieldalaes Geode'],
  G: ['Spectral Megalodon', 'Drunkfish'],
  N: ['Spectral Sea Bo', 'Shooting Star'],
  R: ['Spectral Bass', 'Sabaton'],
  S: ['Spectral Discus', 'Little Leviathan'],
  T: ['Spectresaur', 'Ginkgo Fin']
}

export const BLUE_FISH_MAP = {
  BD: 'Seafaring Toad',
  CN: 'Hafgufa',
  GN: 'Sothis',
  ND: 'Elasmosaurus',
  RS: 'Stonescale',
  SN: 'Coral Manta',
  TS: 'Placodus'
}

export const ACHIEVEMENTS_MAP = {
  BN: 'What Did Mantas Do to You?',
  NN: 'What Did Octopodes Do to You?',
  NS: 'What Did Seadragons Do to You?',
  RD: 'What Did Sharks Do to You?',
  RN: 'What Did Jellyfish Do to You?',
  TN: 'What Did Balloons Do to You?'
}

export const FILTER_MAP = {
  B: ['BD', 'BN', 'BS'],
  N: ['ND', 'NN', 'NS'],
  R: ['RD', 'RN', 'RS'],
  T: ['TD', 'TN', 'TS'],
  BD: ['BD'],
  BN: ['BN'],
  BS: ['BS'],
  ND: ['ND'],
  NN: ['NN'],
  NS: ['NS'],
  RD: ['RD'],
  RN: ['RN'],
  RS: ['RS'],
  TD: ['TD'],
  TN: ['TN'],
  TS: ['TS'],
  sothis: ['ND', 'RS'],
  coral_manta: ['RD', 'NS'],
  elasmosaurus: ['BS', 'ND'],
  stonescale: ['RS', 'TN'],
  hafgufa: ['BS', 'TS'],
  seafaring_toad: ['BD'],
  placodus: ['TS'],
  jellyfish: ['RN'],
  seadragons: ['NS'],
  sharks: ['RD'],
  octopodes: ['NN']
}
