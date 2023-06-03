import { Stop, Destination, Time } from './types'

const STOPS_SEQUENCES: Record<Destination, Stop[]> = {
    [Destination.TheNorthernStraitOfMerlthor]: [Stop.TheSouthernStraitOfMerlthor, Stop.GaladionBay, Stop.TheNorthernStraitOfMerlthor],
    [Destination.RhotanoSea]: [Stop.GaladionBay, Stop.TheSouthernStraitOfMerlthor, Stop.RhotanoSea],
    [Destination.TheBloodbrineSea]: [Stop.TheCieldalaes, Stop.TheNorthernStraitOfMerlthor, Stop.TheBloodbrineSea],
    [Destination.TheRothlytSound]: [Stop.TheCieldalaes, Stop.RhotanoSea, Stop.TheRothlytSound],
    [Destination.TheRubySea]: [Stop.TheSirensongSea, Stop.Kugane, Stop.TheRubySea],
    [Destination.TheOneRiver]: [Stop.TheSirensongSea, Stop.Kugane, Stop.TheOneRiver]
}

const TIMES_SEQUENCE: Array<Time> = [Time.Day, Time.Sunset, Time.Night]

/**
 * Get the {@link Stop}s associated with the specified {@link Destination}.
 */
export function getStops (destination: Destination): Stop[] {
    return STOPS_SEQUENCES[destination]
}

/**
 * Get the {@link Stop}-{@link Time}s associated with the specified {@link Destination}-{@link Time}.
 */
export function getStopTimes (destination: Destination, time: Time): Array<{ stop: Stop, time: Time }> {
    const stops = STOPS_SEQUENCES[destination]
    const startTimeIndex = (TIMES_SEQUENCE.indexOf(time) - stops.length + 1) % TIMES_SEQUENCE.length + TIMES_SEQUENCE.length
    return stops.map((stop, stopIndex) => ({ stop, time: TIMES_SEQUENCE[(startTimeIndex + stopIndex) % TIMES_SEQUENCE.length] }))
}
