import React from 'react'
import TimeIcon from './TimeIcon'
import { Stop, Time, DestTime } from './ffxiv-ocean-fishing'
import {
  fishingSpots,
  fishes,
  achievements,
  FishingSpot,
  Fish,
  Achievement
} from './ffxiv-ocean-fishing/data'

export const STOP_MAP: Record<Stop, FishingSpot> = {
  B: fishingSpots[248],
  C: fishingSpots[246],
  G: fishingSpots[237],
  I: fishingSpots[286],
  K: fishingSpots[288],
  N: fishingSpots[243],
  O: fishingSpots[292],
  P: fishingSpots[290],
  R: fishingSpots[241],
  S: fishingSpots[239],
  T: fishingSpots[250]
}

export const TIME_MAP: Record<Time, React.ReactNode> = {
  D: React.createElement(TimeIcon, { time: 'D' }),
  N: React.createElement(TimeIcon, { time: 'N' }),
  S: React.createElement(TimeIcon, { time: 'S' })
}

export const SPECTRAL_FISH_MAP: Record<Stop, Fish> = {
  B: fishes[32083],
  C: fishes[32063],
  G: fishes[29784],
  I: fishes[40529],
  K: fishes[40549],
  N: fishes[29786],
  O: fishes[40589],
  P: fishes[40569],
  R: fishes[29787],
  S: fishes[29785],
  T: fishes[32103]
}

export const GREEN_FISH_MAP: Record<Stop, Fish> = {
  B: fishes[32084],
  C: fishes[32064],
  G: fishes[29744],
  I: fishes[40530],
  K: fishes[40550],
  N: fishes[29747],
  O: fishes[40590],
  P: fishes[40570],
  R: fishes[29746],
  S: fishes[29745],
  T: fishes[32104]
}

export const BLUE_FISH_MAP: Record<Stop, Fish> = {
  B: fishes[32094],
  C: fishes[32074],
  G: fishes[29788],
  I: fishes[40540],
  K: fishes[40560],
  N: fishes[29791],
  O: fishes[40600],
  P: fishes[40580],
  R: fishes[29790],
  S: fishes[29789],
  T: fishes[32114]
}

export const ACHIEVEMENTS_MAP: Record<DestTime, Achievement[]> = {
  BD: [achievements[2755]],
  BN: [achievements[2756]],
  BS: [],
  ND: [],
  NN: [achievements[2563]],
  NS: [achievements[2566]],
  OD: [],
  ON: [achievements[3267]],
  OS: [achievements[3267], achievements[3269]],
  PD: [achievements[3268]],
  PN: [achievements[3268]],
  PS: [achievements[3269]],
  RD: [achievements[2564]],
  RN: [achievements[2565]],
  RS: [],
  TD: [achievements[2754], achievements[2756]],
  TN: [achievements[2754]],
  TS: []
}

// This should be automated later...
export const FILTER_MAP: Record<string, DestTime[]> = {
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
