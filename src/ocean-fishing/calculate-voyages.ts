import { DestinationStop, Time, DestinationStopTime } from './maps'

const _9HR = 32400000
const _45MIN = 2700000

// Cycle repeats every 12 days starting at this epoch
const LULU_EPOCH = 1593270000000 + _9HR
const DEST_CYCLE: DestinationStop[] = ['B', 'T', 'N', 'R']
const TIME_CYCLE: Time[] = ['S', 'S', 'S', 'S', 'N', 'N', 'N', 'N', 'D', 'D', 'D', 'D']

function fromEpoch (day: number, hour: number) {
  return new Date(LULU_EPOCH + day * 86400000 + hour * 3600000 - _9HR)
}

function _calculateVoyages (date: Date, count: number, filter?: string[]) {
  const adjustedDate = new Date(date.getTime() + _9HR - _45MIN) // Subtract 45 minutes to catch ongoing voyages
  let day = Math.floor((adjustedDate.getTime() - LULU_EPOCH) / 86400000)
  let hour = adjustedDate.getUTCHours()

  hour += (hour & 1) ? 2 : 1
  if (hour > 23) {
    day += 1
    hour -= 24
  }

  // Find the current voyage
  const voyageNumber = hour >> 1
  let destIndex = ((day + voyageNumber) % 4 + 4) % 4
  let timeIndex = ((day + voyageNumber) % 12 + 12) % 12

  // Loop until however many voyages are found
  const upcomingVoyages: Array<{time: Date, destinationCode: DestinationStopTime}> = []
  while (upcomingVoyages.length < count) {
    const destinationCode = DEST_CYCLE[destIndex] + TIME_CYCLE[timeIndex] as DestinationStopTime
    if (!filter || filter.includes(destinationCode)) {
      upcomingVoyages.push({ time: fromEpoch(day, hour), destinationCode })
    }
    if (hour === 23) {
      day += 1
      hour = 1
      destIndex = (destIndex + 2) % 4
      timeIndex = (timeIndex + 2) % 12
    } else {
      hour += 2
      destIndex = (destIndex + 1) % 4
      timeIndex = (timeIndex + 1) % 12
    }
  }

  return upcomingVoyages
}

// Record the pattern for faster calculations
const pattern = _calculateVoyages(new Date(_45MIN), 144).map(x => x.destinationCode)

export default function calculateVoyages (date: Date, count: number, filter?: string[]) {
  const startIndex = Math.floor((date.getTime() - _45MIN) / 7200000)
  const results = []
  for (let i = 0; results.length < count; ++i) {
    const destinationCode = pattern[(startIndex + i) % 144]
    if (!filter || filter.includes(destinationCode)) {
      results.push({
        time: new Date((startIndex + i + 1) * 7200000),
        destinationCode
      })
    }
  }
  return results
}
