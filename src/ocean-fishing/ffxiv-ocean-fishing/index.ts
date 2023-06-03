import * as data from './data'

if (typeof window !== 'undefined') {
    (window as any).OceanFishingData = data
}

export { Route, Stop, Destination, Time } from './src/types'
export { default as calculateVoyages } from './src/calculate-voyages'
export { getStops, getStopTimes } from './src/calculate-stops'
