const _9HR = 32400000

// Cycle repeats every 6 days starting at this epoch
const LULU_EPOCH = 1593270000000 + _9HR
const DEST_CYCLE = 'NR'
const TIME_CYCLE = 'DSN'

function fromEpoch (day, hour) {
  return new Date(LULU_EPOCH + day * 86400000 + hour * 3600000 - _9HR)
}

function calculateVoyages (date, count, filter) {
  date = new Date(date.getTime() + _9HR)
  let day = Math.floor((date.getTime() - LULU_EPOCH) / 86400000)
  let hour = date.getUTCHours()

  // Adjust time to fall on the next voyage, including any ongoing
  if (date.getUTCMinutes() < 45) {
    hour -= 1
  }
  hour += (hour & 1) ? 2 : 1
  if (hour === 0) {
    day -= 1
    hour = 24
  } else if (hour === 25) {
    day += 1
    hour = 1
  }

  // Find the current voyage
  const voyageNumber = hour >> 1
  let destIndex = (day + voyageNumber) % 2
  let timeIndex = ((day >> 1) + (voyageNumber >> 1)) % 3

  // Loop until however many voyages are found
  const upcomingVoyages = []
  while (upcomingVoyages.length < count) {
    const destinationCode = DEST_CYCLE[destIndex] + TIME_CYCLE[timeIndex]
    if (!filter || filter.includes(destinationCode)) {
      upcomingVoyages.push({ time: fromEpoch(day, hour), destinationCode })
    }
    if (hour === 23) {
      day += 1
      hour = 1
      timeIndex = (timeIndex + ((day & 1) ? 1 : 2)) % 3 // Time shifts every other day
    } else {
      hour += 2
      destIndex = (destIndex + 1) % 2
      timeIndex = (timeIndex + ((hour >> 1 & 1) ? 0 : 1)) % 3
    }
  }

  return upcomingVoyages
}

export default calculateVoyages
