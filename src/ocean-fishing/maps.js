import TimeIcon from './TimeIcon'

export const DEST_MAP = {
  S: 'Southern Strait',
  G: 'Galadion Bay',
  N: 'Northern Strait',
  R: 'Rhotano Sea'
}

export const TIME_MAP = {
  D: <TimeIcon.Day />,
  S: <TimeIcon.Sunset />,
  N: <TimeIcon.Night />
}

export const OBJECTIVES_MAP = {
  ND: ['Sothis', 'Elasmosaurus'],
  RD: ['What Did Sharks Do to You?', 'Coral Manta'],
  NS: ['What Did Seadragons Do to You?', 'Coral Manta'],
  RS: ['Sothis', 'Stonescale'],
  NN: ['What Did Octopodes Do to You?'],
  RN: ['What Did Jellyfish Do to You?']
}

export const ROUTE_MAP = {
  N: ['S', 'G', 'N'],
  R: ['G', 'S', 'R']
}

export const FISH_MAP = {
  S: ['Spectral Discus', 'Little Leviathan'],
  G: ['Spectral Megalodon', 'Drunkfish'],
  N: ['Spectral Sea Bo', 'Shooting Star'],
  R: ['Spectral Bass', 'Sabaton']
}

export const BLUE_FISH_MAP = {
  GN: 'Sothis',
  SN: 'Coral Manta',
  ND: 'Elasmosaurus',
  RS: 'Stonescale'
}

export const ACHIEVEMENTS_MAP = {
  RN: 'What Did Jellyfish Do to You?',
  NS: 'What Did Seadragons Do to You?',
  RD: 'What Did Sharks Do to You?',
  NN: 'What Did Octopodes Do to You?'
}

export const FILTER_MAP = {
  ND: ['ND'],
  RD: ['RD'],
  NS: ['NS'],
  RS: ['RS'],
  NN: ['NN'],
  RN: ['RN'],
  sothis: ['ND', 'RS'],
  coral_manta: ['RD', 'NS'],
  elasmosaurus: ['ND'],
  stonescale: ['RS'],
  jellyfish: ['RN'],
  seadragons: ['NS'],
  sharks: ['RD'],
  octopodes: ['NN']
}
