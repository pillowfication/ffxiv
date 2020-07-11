import { paddedZero } from '../utils'

const EORZEAN_RATIO = 1440 / 70

export default function getEorzeanTime (now = new Date()) {
  const eorzeanTime = new Date(Math.floor(now.getTime() * EORZEAN_RATIO))
  eorzeanTime.toString = () =>
    paddedZero(eorzeanTime.getUTCHours()) + ':' + paddedZero(eorzeanTime.getUTCMinutes())
  return eorzeanTime
}
