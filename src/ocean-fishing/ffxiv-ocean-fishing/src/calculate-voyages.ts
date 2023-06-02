import { Route, Dest, Time, DestTime } from './types'

const _9HR = 32400000
const _45MIN = 2700000

// Cycle repeats every 12 days starting at this epoch
const LULU_EPOCH = 1593270000000 + _9HR
const DEST_CYCLE: Record<Route, Dest[]> = {
  INDIGO: ['B', 'T', 'N', 'R'],
  RUBY: ['O', 'P']
}
const TIME_CYCLE: Record<Route, Time[]> = {
  INDIGO: ['S', 'S', 'S', 'S', 'N', 'N', 'N', 'N', 'D', 'D', 'D', 'D'],
  RUBY: ['D', 'D', 'S', 'S', 'N', 'N']
}

function fromEpoch (day: number, hour: number): Date {
  return new Date(LULU_EPOCH + day * 86400000 + hour * 3600000 - _9HR)
}

function _calculateVoyages (route: Route, date: Date, count: number, filter?: DestTime[]): Array<{ date: Date, destTime: DestTime }> {
  const destCycle = DEST_CYCLE[route]
  const timeCycle = TIME_CYCLE[route]

  const adjustedDate = new Date(date.getTime() + _9HR - _45MIN) // Subtract 45 minutes to catch ongoing voyages
  let day = Math.floor((adjustedDate.getTime() - LULU_EPOCH) / 86400000)
  let hour = adjustedDate.getUTCHours()

  // Adjust hour to be odd
  hour += (hour & 1) === 0 ? 1 : 2
  if (hour > 23) {
    day += 1
    hour -= 24
  }

  // Find the current voyage
  const voyageNumber = hour >> 1
  let destIndex = ((day + voyageNumber) % destCycle.length + destCycle.length) % destCycle.length
  let timeIndex = ((day + voyageNumber) % timeCycle.length + timeCycle.length) % timeCycle.length

  // Loop until however many voyages are found
  const upcomingVoyages: Array<{ date: Date, destTime: DestTime }> = []
  while (upcomingVoyages.length < count) {
    const destTime = destCycle[destIndex] + timeCycle[timeIndex] as DestTime
    if (filter === undefined || filter.includes(destTime)) {
      upcomingVoyages.push({ date: fromEpoch(day, hour), destTime })
    }
    if (hour === 23) {
      day += 1
      hour = 1
      destIndex = (destIndex + 2) % destCycle.length
      timeIndex = (timeIndex + 2) % timeCycle.length
    } else {
      hour += 2
      destIndex = (destIndex + 1) % destCycle.length
      timeIndex = (timeIndex + 1) % timeCycle.length
    }
  }

  return upcomingVoyages
}

// Record the pattern for faster calculations
const patterns: Record<Route, DestTime[]> = {
  INDIGO: _calculateVoyages('INDIGO', new Date(_45MIN), 144).map(({ destTime }) => destTime),
  RUBY: _calculateVoyages('RUBY', new Date(_45MIN), 144).map(({ destTime }) => destTime)
}

export default function calculateVoyages (route: Route, date: Date, count: number, filter?: DestTime[]): Array<{ date: Date, destTime: DestTime }> {
  const startIndex = Math.floor((date.getTime() - _45MIN) / 7200000)
  const upcomingVoyages: Array<{ date: Date, destTime: DestTime }> = []

  for (let i = 0; upcomingVoyages.length < count && i < 100000; ++i) {
    const destTime = patterns[route][(startIndex + i) % 144]
    if (filter === undefined || filter.includes(destTime)) {
      upcomingVoyages.push({ date: new Date((startIndex + i + 1) * 7200000), destTime })
    }
  }

  return upcomingVoyages
}
