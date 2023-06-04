import React from 'react'
import TimeIcon from './TimeIcon'
import { Stop, Destination, Time } from './ffxiv-ocean-fishing'
import {
    fishingSpots,
    fishes,
    achievements,
    FishingSpot,
    Fish,
    Achievement
} from './ffxiv-ocean-fishing/data'

export const STOP_MAP: Record<Stop | Destination, FishingSpot> = {
    [Stop.GaladionBay]: fishingSpots[237],
    [Stop.TheSouthernStraitOfMerlthor]: fishingSpots[239],
    [Stop.TheNorthernStraitOfMerlthor]: fishingSpots[243],
    [Stop.RhotanoSea]: fishingSpots[241],
    [Stop.TheCieldalaes]: fishingSpots[246],
    [Stop.TheBloodbrineSea]: fishingSpots[248],
    [Stop.TheRothlytSound]: fishingSpots[250],
    [Stop.TheSirensongSea]: fishingSpots[286],
    [Stop.Kugane]: fishingSpots[288],
    [Stop.TheRubySea]: fishingSpots[290],
    [Stop.TheOneRiver]: fishingSpots[292]
}

export const TIME_MAP: Record<Time, React.ReactNode> = {
    [Time.Day]: React.createElement(TimeIcon, { time: Time.Day }),
    [Time.Sunset]: React.createElement(TimeIcon, { time: Time.Sunset }),
    [Time.Night]: React.createElement(TimeIcon, { time: Time.Night })
}

export const SPECTRAL_FISH_MAP: Record<Stop, Fish> = {
    [Stop.GaladionBay]: fishes[29784],
    [Stop.TheSouthernStraitOfMerlthor]: fishes[29785],
    [Stop.TheNorthernStraitOfMerlthor]: fishes[29786],
    [Stop.RhotanoSea]: fishes[29787],
    [Stop.TheCieldalaes]: fishes[32063],
    [Stop.TheBloodbrineSea]: fishes[32083],
    [Stop.TheRothlytSound]: fishes[32103],
    [Stop.TheSirensongSea]: fishes[40529],
    [Stop.Kugane]: fishes[40549],
    [Stop.TheRubySea]: fishes[40569],
    [Stop.TheOneRiver]: fishes[40589]
}

export const GREEN_FISH_MAP: Record<Stop, Fish> = {
    [Stop.GaladionBay]: fishes[29744],
    [Stop.TheNorthernStraitOfMerlthor]: fishes[29747],
    [Stop.TheSouthernStraitOfMerlthor]: fishes[29745],
    [Stop.RhotanoSea]: fishes[29746],
    [Stop.TheCieldalaes]: fishes[32064],
    [Stop.TheBloodbrineSea]: fishes[32084],
    [Stop.TheRothlytSound]: fishes[32104],
    [Stop.TheSirensongSea]: fishes[40530],
    [Stop.Kugane]: fishes[40550],
    [Stop.TheRubySea]: fishes[40570],
    [Stop.TheOneRiver]: fishes[40590]
}

export const BLUE_FISH_MAP: Record<Stop, Fish> = {
    [Stop.GaladionBay]: fishes[29788],
    [Stop.TheNorthernStraitOfMerlthor]: fishes[29791],
    [Stop.TheSouthernStraitOfMerlthor]: fishes[29789],
    [Stop.RhotanoSea]: fishes[29790],
    [Stop.TheCieldalaes]: fishes[32074],
    [Stop.TheBloodbrineSea]: fishes[32094],
    [Stop.TheRothlytSound]: fishes[32114],
    [Stop.TheSirensongSea]: fishes[40540],
    [Stop.Kugane]: fishes[40560],
    [Stop.TheRubySea]: fishes[40580],
    [Stop.TheOneRiver]: fishes[40600]
}

export const ACHIEVEMENTS_MAP: Record<Destination, Record<Time, Achievement[]>> = {
    [Destination.TheNorthernStraitOfMerlthor]: {
        [Time.Day]: [],
        [Time.Sunset]: [achievements[2566]],
        [Time.Night]: [achievements[2563]]
    },
    [Destination.RhotanoSea]: {
        [Time.Day]: [achievements[2564]],
        [Time.Sunset]: [],
        [Time.Night]: [achievements[2565]]
    },
    [Destination.TheBloodbrineSea]: {
        [Time.Day]: [achievements[2755]],
        [Time.Sunset]: [],
        [Time.Night]: [achievements[2756]]
    },
    [Destination.TheRothlytSound]: {
        [Time.Day]: [achievements[2754], achievements[2756]],
        [Time.Sunset]: [],
        [Time.Night]: [achievements[2754]]
    },
    [Destination.TheRubySea]: {
        [Time.Day]: [achievements[3268]],
        [Time.Sunset]: [achievements[3269]],
        [Time.Night]: [achievements[3268]]
    },
    [Destination.TheOneRiver]: {
        [Time.Day]: [],
        [Time.Sunset]: [achievements[3267], achievements[3269]],
        [Time.Night]: [achievements[3267]]
    }
}

// This should be automated later...
export const FILTER_MAP: Record<string, Array<{ destination: Destination, time: Time }>> = {
    [Destination.TheNorthernStraitOfMerlthor]: [{ destination: Destination.TheNorthernStraitOfMerlthor, time: Time.Day }, { destination: Destination.TheNorthernStraitOfMerlthor, time: Time.Sunset }, { destination: Destination.TheNorthernStraitOfMerlthor, time: Time.Night }],
    [Destination.RhotanoSea]: [{ destination: Destination.RhotanoSea, time: Time.Day }, { destination: Destination.RhotanoSea, time: Time.Sunset }, { destination: Destination.RhotanoSea, time: Time.Night }],
    [Destination.TheBloodbrineSea]: [{ destination: Destination.TheBloodbrineSea, time: Time.Day }, { destination: Destination.TheBloodbrineSea, time: Time.Sunset }, { destination: Destination.TheBloodbrineSea, time: Time.Night }],
    [Destination.TheRothlytSound]: [{ destination: Destination.TheRothlytSound, time: Time.Day }, { destination: Destination.TheRothlytSound, time: Time.Sunset }, { destination: Destination.TheRothlytSound, time: Time.Night }],
    [Destination.TheRubySea]: [{ destination: Destination.TheRubySea, time: Time.Day }, { destination: Destination.TheRubySea, time: Time.Sunset }, { destination: Destination.TheRubySea, time: Time.Night }],
    [Destination.TheOneRiver]: [{ destination: Destination.TheOneRiver, time: Time.Day }, { destination: Destination.TheOneRiver, time: Time.Sunset }, { destination: Destination.TheOneRiver, time: Time.Night }],
    [Destination.TheNorthernStraitOfMerlthor + Time.Day]: [{ destination: Destination.TheNorthernStraitOfMerlthor, time: Time.Day }],
    [Destination.TheNorthernStraitOfMerlthor + Time.Sunset]: [{ destination: Destination.TheNorthernStraitOfMerlthor, time: Time.Sunset}],
    [Destination.TheNorthernStraitOfMerlthor + Time.Night]: [{ destination: Destination.TheNorthernStraitOfMerlthor, time: Time.Night }],
    [Destination.RhotanoSea + Time.Day]: [{ destination: Destination.RhotanoSea, time: Time.Day }],
    [Destination.RhotanoSea + Time.Sunset]: [{ destination: Destination.RhotanoSea, time: Time.Sunset}],
    [Destination.RhotanoSea + Time.Night]: [{ destination: Destination.RhotanoSea, time: Time.Night }],
    [Destination.TheBloodbrineSea + Time.Day]: [{ destination: Destination.TheBloodbrineSea, time: Time.Day }],
    [Destination.TheBloodbrineSea + Time.Sunset]: [{ destination: Destination.TheBloodbrineSea, time: Time.Sunset}],
    [Destination.TheBloodbrineSea + Time.Night]: [{ destination: Destination.TheBloodbrineSea, time: Time.Night }],
    [Destination.TheRothlytSound + Time.Day]: [{ destination: Destination.TheRothlytSound, time: Time.Day }],
    [Destination.TheRothlytSound + Time.Sunset]: [{ destination: Destination.TheRothlytSound, time: Time.Sunset}],
    [Destination.TheRothlytSound + Time.Night]: [{ destination: Destination.TheRothlytSound, time: Time.Night }],
    [Destination.TheRubySea + Time.Day]: [{ destination: Destination.TheRubySea, time: Time.Day }],
    [Destination.TheRubySea + Time.Sunset]: [{ destination: Destination.TheRubySea, time: Time.Sunset}],
    [Destination.TheRubySea + Time.Night]: [{ destination: Destination.TheRubySea, time: Time.Night }],
    [Destination.TheOneRiver + Time.Day]: [{ destination: Destination.TheOneRiver, time: Time.Day }],
    [Destination.TheOneRiver + Time.Sunset]: [{ destination: Destination.TheOneRiver, time: Time.Sunset}],
    [Destination.TheOneRiver + Time.Night]: [{ destination: Destination.TheOneRiver, time: Time.Night }],
    sothis: [{ destination: Destination.TheNorthernStraitOfMerlthor, time: Time.Day }, { destination: Destination.RhotanoSea, time: Time.Sunset}],
    coral_manta: [{ destination: Destination.TheNorthernStraitOfMerlthor, time: Time.Sunset}, { destination: Destination.RhotanoSea, time: Time.Day }],
    elasmosaurus: [{ destination: Destination.TheBloodbrineSea, time: Time.Sunset}, { destination: Destination.TheNorthernStraitOfMerlthor, time: Time.Day }],
    stonescale: [{ destination: Destination.RhotanoSea, time: Time.Sunset}, { destination: Destination.TheRothlytSound, time: Time.Night }],
    hafgufa: [{ destination: Destination.TheBloodbrineSea, time: Time.Sunset}, { destination: Destination.TheRothlytSound, time: Time.Sunset}],
    seafaring_toad: [{ destination: Destination.TheBloodbrineSea, time: Time.Day }],
    placodus: [{ destination: Destination.TheRothlytSound, time: Time.Sunset}],
    octopodes: [{ destination: Destination.TheNorthernStraitOfMerlthor, time: Time.Night }],
    sharks: [{ destination: Destination.RhotanoSea, time: Time.Day }],
    jellyfish: [{ destination: Destination.RhotanoSea, time: Time.Night }],
    seadragons: [{ destination: Destination.TheNorthernStraitOfMerlthor, time: Time.Sunset}],
    balloons: [{ destination: Destination.TheRothlytSound, time: Time.Day }, { destination: Destination.TheRothlytSound, time: Time.Night }],
    crabs: [{ destination: Destination.TheBloodbrineSea, time: Time.Day }],
    mantas: [{ destination: Destination.TheBloodbrineSea, time: Time.Night }, { destination: Destination.TheRothlytSound, time: Time.Day }]
}
