import { ROUTE_MAP } from './maps'

export function toTimeString (now, padded) {
  const hours = now.getHours()
  const displayHours = hours % 12 === 0 ? 12 : hours % 12
  return `${padded && displayHours < 10 ? ' ' + displayHours : displayHours}:00 ${hours < 12 ? 'AM' : 'PM'}`
}

export function timeUntil (now, then, full) {
  const diff = then.getTime() - now.getTime()
  if (diff < -900000) {
    return 'en route'
  } else if (diff < 0) {
    return 'boarding now'
  } else {
    let days = diff / 86400000
    if (days >= 1) {
      days = Math.round(days)
      return full
        ? `next is in ${days} ${days > 1 ? 'days' : 'day'} at ${toTimeString(then)}`
        : `in ${days} ${days > 1 ? 'days' : 'day'}`
    }

    let hours = diff / 3600000
    if (hours >= 1) {
      hours = Math.round(hours)
      return full
        ? `next is in ${hours} ${hours > 1 ? 'hours' : 'hour'} at ${toTimeString(then)}`
        : `in ${hours} ${hours > 1 ? 'hours' : 'hour'}`
    }

    const minutes = Math.round(diff / 60000)
    return full
      ? `next is in ${minutes} ${minutes > 1 ? 'minutes' : 'minute'} at ${toTimeString(then)}`
      : `in ${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`
  }
}

export function getStops (destinationCode) {
  const stops = ROUTE_MAP[destinationCode[0]]
  const timeIndex = 'DSN'.indexOf(destinationCode[1])
  return stops.map((stop, index) => stop + 'DSN'.charAt((index + timeIndex + 1) % 3))
}