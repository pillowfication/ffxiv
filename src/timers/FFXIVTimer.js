import moment from 'moment'

class FFXIVTimer {
  constructor (lastCompletedAt) {
    this.lastCompletedAt = lastCompletedAt || null
  }

  complete () {
    this.lastCompletedAt = moment.utc()
  }

  toPlainObj () {
    return {
      name: this.constructor.name,
      lastCompletedAt: this.lastCompletedAt
    }
  }
}

export class GCTimer extends FFXIVTimer {
  static fromPlainObj (obj) {
    return new GCTimer(obj.lastCompletedAt)
  }

  getResetInterval () {
    const now = moment.utc()
    const resetMark = moment.utc().set(this.constructor.resetTime)

    if (now.diff(resetMark) < 0) {
      return [resetMark.clone().subtract(1, 'day'), resetMark]
    } else {
      return [resetMark, resetMark.clone().add(1, 'day')]
    }
  }

  isAvailable () {
    return this.lastCompletedAt === null || this.lastCompletedAt < this.getResetInterval()[0]
  }

  getResetInfo () {
    const resetInterval = this.getResetInterval()
    return {
      lastReset: resetInterval[0],
      nextReset: resetInterval[1],
      timeUntilNextReset: moment.duration(resetInterval[1].diff(moment.utc()))
    }
  }
}
GCTimer.timerName = 'Grand Company Missions'
GCTimer.resetTime = { h: 20, m: 0, s: 0, ms: 0 } // GC Turn-ins reset every day at 8pm UTC

const TIMERS_LIST = [
  GCTimer
]

export function fromPlainObj (obj) {
  for (const timer of TIMERS_LIST) {
    if (timer.name === obj.name) {
      return timer.fromPlainObj(obj)
    }
  }
}

export default FFXIVTimer
