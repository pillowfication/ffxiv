const moment = require('moment')

// Cycle repeats every 6 days, subtract time to make sure we're in the future
const LULU_EPOCH = moment('2020-06-28 00:00+09:00').subtract(666, 'days')
const DEST_CYCLE = ['N', 'R']
const TIME_CYCLE = ['D', 'S', 'N']

function calculateVoyages (time, count, filter) {
  // Important that `time` is UTC+09:00
  let day = time.diff(LULU_EPOCH, 'days')
  let hour = time.hour()

  // Adjust time to fall on the next voyage, including any ongoing
  if (time.minute() < 45) hour -= 1
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
    if (!filter || destinationCode === filter) {
      upcomingVoyages.push({ day, hour, destinationCode })
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

module.exports = calculateVoyages
module.exports.LULU_EPOCH = LULU_EPOCH
