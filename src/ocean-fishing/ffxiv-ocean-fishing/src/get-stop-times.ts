import { Stop, Dest, Time, StopTime, DestTime } from './types'

const STOPS_SEQUENCE: Record<Dest, [Stop, Stop, Stop]> = {
  B: ['C', 'N', 'B'],
  N: ['S', 'G', 'N'],
  R: ['G', 'S', 'R'],
  T: ['C', 'R', 'T'],
  O: ['I', 'K', 'O'],
  P: ['I', 'K', 'P']
}

const TIMES_SEQUENCE: Record<Time, [Time, Time, Time]> = {
  D: ['S', 'N', 'D'],
  S: ['N', 'D', 'S'],
  N: ['D', 'S', 'N']
}

export default function getStopTimes (destTime: DestTime): [StopTime, StopTime, StopTime] {
  const stops = STOPS_SEQUENCE[destTime[0] as Dest]
  const times = TIMES_SEQUENCE[destTime[1] as Time]
  return [stops[0] + times[0], stops[1] + times[1], stops[2] + times[2]] as [StopTime, StopTime, StopTime]
}
