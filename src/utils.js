export function paddedZero (n) {
  return n > 9 ? n : '0' + n
}

export function formatTime (date) {
  return `${paddedZero(date.getUTCHours())}:${paddedZero(date.getUTCMinutes())}`
}
