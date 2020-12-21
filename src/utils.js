export function paddedZero (n) {
  return n > 9 ? n : '0' + n
}

export function formatTime (date) {
  return `${paddedZero(date.getUTCHours())}:${paddedZero(date.getUTCMinutes())}`
}

export function toTimeString (now, padded) {
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const displayHours = hours % 12 === 0 ? 12 : hours % 12
  return `${padded && displayHours < 10 ? ' ' + displayHours : displayHours}:${paddedZero(minutes)} ${hours < 12 ? 'AM' : 'PM'}`
}

function getTimeUntil (now, then) {
  const diff = then.getTime() - now.getTime()
  let days = diff / 86400000
  if (days >= 1) {
    days = Math.round(days)
    return `${days} ${days > 1 ? 'days' : 'day'}`
  }

  let hours = diff / 3600000
  if (hours >= 1) {
    hours = Math.round(hours)
    return `${hours} ${hours > 1 ? 'hours' : 'hour'}`
  }

  const minutes = Math.round(diff / 60000)
  return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`
}

export function timeUntil (now, then, full) {
  const diff = then.getTime() - now.getTime()
  if (Math.abs(diff) < 60000) {
    return 'now'
  }

  if (diff < 0) {
    const timeString = getTimeUntil(then, now)
    return full
      ? `last was ${timeString} ago at ${toTimeString(then)}`
      : `${timeString} ago`
  } else {
    const timeString = getTimeUntil(now, then)
    return full
      ? `next is in ${timeString} at ${toTimeString(then)}`
      : `in ${timeString}`
  }
}
