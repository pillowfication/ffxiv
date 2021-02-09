import { Dest, Time, DestTime } from './types'

const _9HR = 32400000
const _45MIN = 2700000

// Cycle repeats every 12 days starting at this epoch
const LULU_EPOCH = 1593270000000 + _9HR
const DEST_CYCLE: Dest[] = ['N', 'R']
const TIME_CYCLE: Time[] = ['D', 'S', 'S', 'N', 'N', 'D']

function fromEpoch (day: number, hour: number): Date {
  return new Date(LULU_EPOCH + day * 86400000 + hour * 3600000 - _9HR)
}

function _calculateVoyages (date: Date, count: number, filter?: DestTime[]): Array<{ date: Date, destTime: DestTime }> {
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
  let destIndex = ((day + voyageNumber) % DEST_CYCLE.length + DEST_CYCLE.length) % DEST_CYCLE.length
  let timeIndex = ((day + voyageNumber) % TIME_CYCLE.length + TIME_CYCLE.length) % TIME_CYCLE.length

  // Loop until however many voyages are found
  const upcomingVoyages: Array<{ date: Date, destTime: DestTime }> = []
  while (upcomingVoyages.length < count) {
    const destTime = DEST_CYCLE[destIndex] + TIME_CYCLE[timeIndex] as DestTime
    if (filter === undefined || filter.includes(destTime)) {
      upcomingVoyages.push({ date: fromEpoch(day, hour), destTime })
    }
    if (hour === 23) {
      day += 1
      hour = 1
      destIndex = (destIndex + 2) % DEST_CYCLE.length
      // timeIndex = (timeIndex + 2) % TIME_CYCLE.length
      timeIndex = (timeIndex + 1) % TIME_CYCLE.length // Time is not skipped for old routes
    } else {
      hour += 2
      destIndex = (destIndex + 1) % DEST_CYCLE.length
      timeIndex = (timeIndex + 1) % TIME_CYCLE.length
    }
  }

  return upcomingVoyages
}

// Record the pattern for faster calculations
const pattern = _calculateVoyages(new Date(_45MIN), 36).map(({ destTime }) => destTime)

export default function calculateVoyages (date: Date, count: number, filter?: DestTime[]): Array<{ date: Date, destTime: DestTime }> {
  const startIndex = Math.floor((date.getTime() - _45MIN) / 7200000)
  const upcomingVoyages: Array<{ date: Date, destTime: DestTime }> = []

  for (let i = 0; upcomingVoyages.length < count && i < 100000; ++i) {
    const destTime = pattern[(startIndex + i) % 36]
    if (filter === undefined || filter.includes(destTime)) {
      upcomingVoyages.push({ date: new Date((startIndex + i + 1) * 7200000), destTime })
    }
  }

  return upcomingVoyages
}
