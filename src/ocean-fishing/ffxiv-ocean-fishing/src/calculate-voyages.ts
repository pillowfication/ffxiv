import { Route, Destination, Time } from './types'

const _9HR = 32400000
const _45MIN = 2700000

// Cycle repeats every 12 days starting at this epoch
const LULU_EPOCH = 1593270000000 + _9HR
const DEST_CYCLE: Record<Route, Destination[]> = {
    [Route.Indigo]: [Destination.TheBloodbrineSea, Destination.TheRothlytSound, Destination.TheNorthernStraitOfMerlthor, Destination.RhotanoSea],
    [Route.Ruby]: [Destination.TheOneRiver, Destination.TheRubySea]
}
const TIME_CYCLE: Record<Route, Time[]> = {
    [Route.Indigo]: [Time.Sunset, Time.Sunset, Time.Sunset, Time.Sunset, Time.Night, Time.Night, Time.Night, Time.Night, Time.Day, Time.Day, Time.Day, Time.Day],
    [Route.Ruby]: [Time.Day, Time.Day, Time.Sunset, Time.Sunset, Time.Night, Time.Night]
}

function fromEpoch(day: number, hour: number): Date {
    return new Date(LULU_EPOCH + day * 86400000 + hour * 3600000 - _9HR)
}

function _calculateVoyages(route: Route, date: Date, count: number, filter?: Array<{ destination: Destination, time: Time }>): Array<{ date: Date, destination: Destination, time: Time }> {
    const destCycle = DEST_CYCLE[route]
    const timeCycle = TIME_CYCLE[route]

    // Subtract 45 minutes to catch ongoing voyages
    const adjustedDate = new Date(date.getTime() + _9HR - _45MIN)
    let day = Math.floor((adjustedDate.getTime() - LULU_EPOCH) / 86400000)
    let hour = adjustedDate.getUTCHours()

    // Adjust hour to be odd
    hour += (hour & 1) === 0 ? 1 : 2
    if (hour > 23) {
        day += 1
        hour -= 24
    }

    // Find the current voyage
    const voyageNumber = hour >> 1
    let destIndex = ((day + voyageNumber) % destCycle.length + destCycle.length) % destCycle.length
    let timeIndex = ((day + voyageNumber) % timeCycle.length + timeCycle.length) % timeCycle.length

    // Loop until however many voyages are found
    const upcomingVoyages: Array<{ date: Date, destination: Destination, time: Time }> = []
    while (upcomingVoyages.length < count) {
        const destination = destCycle[destIndex]
        const time = timeCycle[timeIndex]
        if (filter == null || filter.some(({ destination: filterDestination, time: filterTime }) => filterDestination === destination && filterTime === time)) {
            upcomingVoyages.push({ date: fromEpoch(day, hour), destination, time })
        }

        if (hour === 23) {
            day += 1
            hour = 1
            destIndex = (destIndex + 2) % destCycle.length
            timeIndex = (timeIndex + 2) % timeCycle.length
        } else {
            hour += 2
            destIndex = (destIndex + 1) % destCycle.length
            timeIndex = (timeIndex + 1) % timeCycle.length
        }
    }

    return upcomingVoyages
}

// Record the pattern for faster calculations
const patterns: Record<Route, Array<{ destination: Destination, time: Time }>> = {
    [Route.Indigo]: _calculateVoyages(Route.Indigo, new Date(_45MIN), 144).map(({ destination, time }) => ({ destination, time })),
    [Route.Ruby]: _calculateVoyages(Route.Ruby, new Date(_45MIN), 144).map(({ destination, time }) => ({ destination, time }))
}

export default function calculateVoyages(route: Route, date: Date, count: number, filter?: Array<{ destination: Destination, time: Time }>): Array<{ date: Date, destination: Destination, time: Time }> {
    const startIndex = Math.floor((date.getTime() - _45MIN) / 7200000)
    const upcomingVoyages: Array<{ date: Date, destination: Destination, time: Time }> = []

    for (let i = 0; upcomingVoyages.length < count && i < 100000; ++i) {
        const { destination, time } = patterns[route][(startIndex + i) % 144]
        if (filter == null || filter.some(({ destination: filterDestination, time: filterTime }) => filterDestination === destination && filterTime === time)) {
            upcomingVoyages.push({ date: new Date((startIndex + i + 1) * 7200000), destination, time })
        }
    }

    return upcomingVoyages
}
