const timeFormat = { hour: 'numeric', minute: 'numeric' }

export function timeUntil (now, then, full) {
  const diff = then.getTime() - now.getTime()
  if (diff < -900000) {
    return 'en route'
  } else if (diff < 0) {
    return 'boarding now'
  } else {
    let hours = Math.floor(diff / 3600000)
    const minutes = Math.floor((diff % 3600000) / 60000)
    if (hours < 1) {
      return full
        ? `next is in ${minutes} ${minutes > 1 ? 'minutes' : 'minute'} at ${then.toLocaleString(undefined, timeFormat)}`
        : `in ${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`
    } else {
      if (minutes >= 30) {
        ++hours
      }
      return full
        ? `next is in ${hours} ${hours > 1 ? 'hours' : 'hour'} at ${then.toLocaleString(undefined, timeFormat)}`
        : `in ${hours} ${hours > 1 ? 'hours' : 'hour'}`
    }
  }
}
