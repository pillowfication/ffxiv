export enum Route {
    Indigo,
    Ruby
}

export enum Stop {
    GaladionBay = 'G',
    TheSouthernStraitOfMerlthor = 'S',
    TheNorthernStraitOfMerlthor = 'N',
    RhotanoSea = 'R',
    TheCieldalaes = 'C',
    TheBloodbrineSea = 'B',
    TheRothlytSound = 'T',
    TheSirensongSea = 'I',
    Kugane = 'K',
    TheRubySea = 'U',
    TheOneRiver = 'O'
}

export enum Destination {
    TheNorthernStraitOfMerlthor = Stop.TheNorthernStraitOfMerlthor,
    RhotanoSea = Stop.RhotanoSea,
    TheBloodbrineSea = Stop.TheBloodbrineSea,
    TheRothlytSound = Stop.TheRothlytSound,
    TheRubySea = Stop.TheRubySea,
    TheOneRiver = Stop.TheOneRiver
}

export enum Time {
    Day = 'D',
    Sunset = 'S',
    Night = 'N'
}
