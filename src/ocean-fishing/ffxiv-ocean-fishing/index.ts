import * as data from './data'
import { Stop, Dest, Time, StopTime, DestTime } from './src/types'
export type { Stop, Dest, Time, StopTime, DestTime }

export { default as calculateVoyages } from './src/calculate-voyages'
export { default as calculateVoyagesOld } from './src/calculate-voyages-old'
export { default as getStopTimes } from './src/get-stop-times'

if (typeof window !== 'undefined') {
  (window as any).OceanFishingData = data
}
