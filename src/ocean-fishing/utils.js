const timeFormat = { hour: 'numeric', minute: 'numeric' }

export function timeUntil (now, then, full) {
  const diff = then.getTime() - now.getTime()
  if (diff < -900000) {
    return 'en route'
  } else if (diff < 0) {
    return 'boarding now'
  } else {
    const hours = Math.floor(diff / 3600000)
    const minutes = Math.floor((diff % 3600000) / 60000)
    if (hours < 1) {
      return full
        ? `next is in ${minutes} minutes at ${then.toLocaleString(undefined, timeFormat)}`
        : `${minutes} minutes`
    } else {
      return full
        ? `next is in ${hours} hours at ${then.toLocaleString(undefined, timeFormat)}`
        : `${hours} hours`
    }
  }
}
