import { paddedZero } from '../utils'

const EORZEAN_RATIO = 1440 / 70

export function getEorzeanTime (now = new Date()) {
  const eorzeanTime = new Date(Math.floor(now.getTime() * EORZEAN_RATIO))
  eorzeanTime.toString = () =>
    paddedZero(eorzeanTime.getUTCHours()) + ':' + paddedZero(eorzeanTime.getUTCMinutes())
  return eorzeanTime
}

export function getLocalTime (now = new Date()) {
  const localTime = new Date(Math.floor(now.getTime() / EORZEAN_RATIO))
  localTime.toString = () =>
    paddedZero(localTime.getHours()) + ':' + paddedZero(localTime.getMinutes())
  return localTime
}
