import { DestinationStop, Stop, Time, DestinationStopTime, StopTime } from './types'

export type { DestinationStop, Stop, Time, DestinationStopTime, StopTime }

export { default as calculateVoyages } from './calculate-voyages'

const STOPS_SEQUENCE: Record<DestinationStop, [Stop, Stop, Stop]> = {
  B: ['C', 'N', 'B'],
  N: ['S', 'G', 'N'],
  R: ['G', 'S', 'R'],
  T: ['C', 'R', 'T']
}

const TIMES_SEQUENCE: Record<Time, [Time, Time, Time]> = {
  D: ['S', 'N', 'D'],
  S: ['N', 'D', 'S'],
  N: ['D', 'S', 'N']
}

export function getStops (destinationCode: DestinationStopTime) {
  const stops: Stop[] = STOPS_SEQUENCE[destinationCode[0]]
  const times: Time[] = TIMES_SEQUENCE[destinationCode[1]]
  return [stops[0] + times[0], stops[1] + times[1], stops[2] + times[2]] as [StopTime, StopTime, StopTime]
}
