import React from 'react'
import TimeIcon from './TimeIcon'

export type DestinationStop = 'B' | 'N' | 'R' | 'T'
export type Stop = 'B' | 'C' | 'G' | 'N' | 'R' | 'S' | 'T'
export type Time = 'D' | 'S' | 'N'
export type DestinationStopTime = `${DestinationStop}${Time}`
export type StopTime = `${Stop}${Time}`

export const STOPS_SEQUENCE: { [key in DestinationStop]: [Stop, Stop, Stop] } = {
  B: ['C', 'N', 'B'],
  N: ['S', 'G', 'N'],
  R: ['G', 'S', 'R'],
  T: ['C', 'R', 'T']
}

export const TIMES_SEQUENCE: { [key in Time]: [Time, Time, Time] } = {
  D: ['S', 'N', 'D'],
  S: ['N', 'D', 'S'],
  N: ['D', 'S', 'N']
}

export const STOP_MAP: { [key in Stop]: number } = {
  B: 248,
  C: 246,
  G: 237,
  N: 243,
  R: 241,
  S: 239,
  T: 250
}

export const TIME_MAP: { [key in Time]: React.ReactNode } = {
  D: React.createElement(TimeIcon, { time: 'D' }),
  N: React.createElement(TimeIcon, { time: 'N' }),
  S: React.createElement(TimeIcon, { time: 'S' })
}

export const SPECTRAL_FISH_MAP: { [key in Stop]: number } = {
  B: 32083,
  C: 32063,
  G: 29784,
  N: 29786,
  R: 29787,
  S: 29785,
  T: 32103
}

export const GREEN_FISH_MAP: { [key in Stop]: number } = {
  B: 32084,
  C: 32064,
  G: 29744,
  N: 29747,
  R: 29746,
  S: 29745,
  T: 32104
}

export const BLUE_FISH_MAP: { [key in Stop]: number } = {
  B: 32094,
  C: 32074,
  G: 29788,
  N: 29791,
  R: 29790,
  S: 29789,
  T: 32114
}

export const ACHIEVEMENTS_MAP: { [key in DestinationStopTime]: number[] } = {
  BD: [2755],
  BN: [2756],
  BS: [],
  ND: [],
  NN: [2563],
  NS: [2566],
  RD: [2564],
  RN: [2565],
  RS: [],
  TD: [2754, 2756],
  TN: [2754],
  TS: []
}

// This should be automated later...
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
  coral_manta: ['NS', 'RD'],
  elasmosaurus: ['BS', 'ND'],
  stonescale: ['RS', 'TN'],
  hafgufa: ['BS', 'TS'],
  seafaring_toad: ['BD'],
  placodus: ['TS'],
  octopodes: ['NN'],
  sharks: ['RD'],
  jellyfish: ['RN'],
  seadragons: ['NS'],
  balloons: ['TD', 'TN'],
  crabs: ['BD'],
  mantas: ['BN', 'TD']
}
