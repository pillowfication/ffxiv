import * as data from './data'
import { Route, Stop, Dest, Time, StopTime, DestTime } from './src/types'
export type { Route, Stop, Dest, Time, StopTime, DestTime }

export { default as calculateVoyages } from './src/calculate-voyages'
export { default as getStopTimes } from './src/get-stop-times'

if (typeof window !== 'undefined') {
  (window as any).OceanFishingData = data
}
