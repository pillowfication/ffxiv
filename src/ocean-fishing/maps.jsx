import TimeIcon from './TimeIcon.jsx'

export const DEST_MAP = {
  S: 'Southern Strait',
  G: 'Galadion Bay',
  N: 'Northern Strait',
  R: 'Rhotano Sea'
}

export const TIME_MAP = {
  D: TimeIcon.Day,
  S: TimeIcon.Sunset,
  N: TimeIcon.Night
}

export const OBJECTIVES_MAP = {
  ND: ['sothis', 'elasmosaurus'],
  RD: ['sharks', 'coralManta'],
  NS: ['seadragons', 'coralManta'],
  RS: ['sothis', 'stonescale'],
  NN: ['octopodes'],
  RN: ['jellyfish']
}

export const ROUTE_MAP = {
  N: ['S', 'G', 'N'],
  R: ['G', 'S', 'R']
}

export const BLUE_FISH_MAP = {
  GN: 'sothis',
  SN: 'coralManta',
  ND: 'elasmosaurus',
  RS: 'stonescale'
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
