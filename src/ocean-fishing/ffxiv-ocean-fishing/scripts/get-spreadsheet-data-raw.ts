import fs from 'fs'
import path from 'path'
import url from 'url'
import * as cheerio from 'cheerio'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const SHEET = path.resolve(__dirname, '../data/Ocean Fishing Data.html')
const OUTPUT = path.resolve(__dirname, '../data/spreadsheet-data-raw.json')
const $ = cheerio.load(fs.readFileSync(SHEET).toString())

// Parsing the sheet works by finding the cells with these strings as text,
// then reading the 10 rows after it
const FISHING_SPOTS = {
    'Indigo Route': [
        'Outer Galadion Bay',
        'Galadion Spectral Current',
        'The Southern Strait of Merlthor',
        'Southern Merlthor Spectral Current',
        'The Northern Strait of Merlthor',
        'Northern Merlthor Spectral Current',
        'Open Rhotano Sea',
        'Rhotano Spectral Current',
        'Cieldalaes Margin',
        'Cieldalaes Spectral Current',
        'Open Bloodbrine Sea',
        'Bloodbrine Spectral Current',
        'Outer Rothlyt Sound',
        'Rothlyt Spectral Current'
    ],
    'Ruby Route': [
        'Open Sirensong Sea',
        'Sirensong Spectral Current',
        'Kugane Coast',
        'Kugane Spectral Current',
        'Open Ruby Sea',
        'Ruby Spectral Current',
        'Lower One River',
        'One River Spectral Current'
    ]
}

const data: Record<string, any> = {}

;(async () => {
    for (const fishingSpot of [...FISHING_SPOTS['Indigo Route'], ...FISHING_SPOTS['Ruby Route']]) {
        data[fishingSpot] = []
        const isRubyRoute = FISHING_SPOTS['Ruby Route'].includes(fishingSpot)

        // Find the cell contain the `fishingSpot` text
        let tr = $('table.waffle tr').filter((_, elem) => $(elem).text().includes(fishingSpot)).eq(0)
        tr = tr.next() // skip a row

        // Loop over the 10 rows after it
        for (let i = 0; i < 10; ++i) {
            tr = tr.next()
            const fishData: any = {}

            const getTd = (index: number): cheerio.Cheerio<cheerio.Element> => {
                let currCol = 1
                let td = $(tr).find('th, td').eq(0)
                while (currCol < index) {
                    currCol += Number(td.attr('colspan') ?? '1')
                    td = td.next()
                }
                return td
            }

            fishData.name = getTd(isRubyRoute ? 3 : 4).text().trim()

            fishData.moochable = getColor(getTd(isRubyRoute ? 3 : 4)) === 'YELLOW'
            fishData.mooched = getColor(getTd(isRubyRoute ? 3 : 4)) === 'GRAY'
            fishData.moochOnly = getColor(getTd(isRubyRoute ? 3 : 4)) === 'ORANGE'
            fishData.intuition = getColor(getTd(isRubyRoute ? 3 : 4)) === 'RED'

            fishData.baits = {
                ragworm: {
                    biteTime: fishData.moochOnly ? null : parseBiteTime(getTd(isRubyRoute ? 4 : 5)),
                    usable: fishData.moochOnly ? false : getColor(getTd(isRubyRoute ? 4 : 5)) === 'GREEN' || getColor(getTd(isRubyRoute ? 4 : 5)) === 'BLUE',
                    best: fishData.moochOnly ? false : getColor(getTd(isRubyRoute ? 4 : 5)) === 'BLUE'
                },
                krill: {
                    biteTime: fishData.moochOnly ? null : parseBiteTime(getTd(isRubyRoute ? 5 : 6)),
                    usable: fishData.moochOnly ? false : getColor(getTd(isRubyRoute ? 5 : 6)) === 'GREEN' || getColor(getTd(isRubyRoute ? 5 : 6)) === 'BLUE',
                    best: fishData.moochOnly ? false : getColor(getTd(isRubyRoute ? 5 : 6)) === 'BLUE'
                },
                plumpWorm: {
                    biteTime: fishData.moochOnly ? null : parseBiteTime(getTd(isRubyRoute ? 6 : 7)),
                    usable: fishData.moochOnly ? false : getColor(getTd(isRubyRoute ? 6 : 7)) === 'GREEN' || getColor(getTd(isRubyRoute ? 6 : 7)) === 'BLUE',
                    best: fishData.moochOnly ? false : getColor(getTd(isRubyRoute ? 6 : 7)) === 'BLUE'
                },
                other: {
                    biteTime: fishData.moochOnly ? null : parseBiteTime(getTd(isRubyRoute ? 7 : 8)),
                    usable: fishData.moochOnly ? false : getColor(getTd(isRubyRoute ? 7 : 8)) === 'GREEN' || getColor(getTd(isRubyRoute ? 7 : 8)) === 'BLUE',
                    best: fishData.moochOnly ? false : getColor(getTd(isRubyRoute ? 7 : 8)) === 'BLUE'
                },
                mooch: {
                    biteTime: fishData.moochOnly ? parseBiteTime(getTd(isRubyRoute ? 4 : 5)) : null,
                    usable: fishData.moochOnly || fishData.mooched,
                    best: fishData.moochOnly
                }
            }

            fishData.points = parsePoints(getTd(isRubyRoute ? 8 : 9))

            fishData.doubleHook = parseMultiHook(getTd(isRubyRoute ? 9 : 10))
            fishData.tripleHook = parseMultiHook(getTd(isRubyRoute ? 10 : 11))

            fishData.tug = parseBite(getTd(isRubyRoute ? 11 : 12))

            fishData.hookset = parseHookset(getTd(isRubyRoute ? 12 : 13))

            fishData.availability = {}
            for (const index of [1, 2, 3, 4, 5, 6, 7]) {
                if (!isRubyRoute && index === 7)
                    fishData.availability[`weather${index}`] = null
                else
                    fishData.availability[`weather${index}`] = parseAvailability(getTd(isRubyRoute ? 12 + index : 13 + index))
            }

            fishData.stars = parseStars(getTd(20))

            fishData.notes = parseNotes(getTd(21))

            data[fishingSpot].push(fishData)
        }
    }

    function getColor(elem: cheerio.Cheerio<cheerio.Element>): 'WHITE' | 'BLUE' | 'GREEN' | 'YELLOW' | 'GRAY' | 'ORANGE' | 'RED' | null {
        const classes = (elem.attr('class') ?? '').trim().split(/\s+/)
        let colorHex: string | undefined

        for (const className of classes.reverse()) {
            const regex = new RegExp(`\\.${className}[^{]*?{.*?background(?:-color)?:(#[0-9A-Fa-f]+?);.*?}`)
            const match = $('style').text().match(regex)
            if (match != null) {
                colorHex = match[1].toLowerCase()
                break
            }
        }

        switch (colorHex ?? '#ffffff') {
            case '#ffffff':
                return 'WHITE'
            case '#9fc5e8':
            case '#a4c2f4':
                return 'BLUE'
            case '#b6d7a8':
                return 'GREEN'
            case '#ffe599':
                return 'YELLOW'
            case '#cccccc':
                return 'GRAY'
            case '#f9cb9c':
                return 'ORANGE'
            case '#ea9999':
                return 'RED'
            default:
                console.log(`Element with text "${elem.text()}" has unexpected color "${colorHex}"`)
                return null
        }
    }

    function parseBiteTime(elem: cheerio.Cheerio<cheerio.Element>): [number, number | null] | null {
        if (elem.text().trim() === '')
            return null

        //                                                     (   X   ) (         X - X         ) (   X+  )
        const match = elem.text().trim().match(/^(?:.*,)?\s*(?:([0-9.]+)|([0-9.]+)\s*-\s*([0-9.]+)|([0-9.]+)\+)\s*(?:seconds)?$/)
        if (match == null) {
            console.log(`Element with text "${elem.text()}" has unexpected biteTime format`)
            return null
        } else if (match[1] != undefined) {
            // Matches `X`
            return [Number(match[1]), Number(match[1])]
        } else if (match[2] != undefined && match[3] != undefined) {
            // Matches `X - X`
            return [Number(match[2]), Number(match[3])]
        } else {
            // Matches `X+`
            return [Number(match[4]), null]
        }
    }

    function parsePoints(elem: cheerio.Cheerio<cheerio.Element>): number | null {
        if (elem.text().trim() === '') {
            return null
        } else if (/^\d+$/.test(elem.text().trim())) {
            return Number(elem.text().trim())
        } else {
            console.log(`Element with text "${elem.text()}" has unexpected points format`)
            return null
        }
    }

    function parseMultiHook(elem: cheerio.Cheerio<cheerio.Element>): [number, number] | null {
        if (elem.text().trim() === '')
            return null

        const match = elem.text().trim().match(/^(?:(\d+)|(\d+)\s*-\s*(\d+))$/)
        if (match == null) {
            console.log(`Element with text "${elem.text()}" has unexpected multiHook format`)
            return null
        } else if (match[1] != undefined) {
            // Matches `X`
            return [Number(match[1]), Number(match[1])]
        } else {
            // Matches `X - X`
            return [Number(match[2]), Number(match[3])]
        }
    }

    function parseBite(elem: cheerio.Cheerio<cheerio.Element>): number | null {
        if (elem.text().trim() === '') {
            return null
        } else if (/^❗+$/.test(elem.text().trim())) {
            return elem.text().trim().length
        } else {
            console.log(`Element with text "${elem.text()}" has unexpected bite format`)
            return null
        }
    }

    function parseHookset(elem: cheerio.Cheerio<cheerio.Element>): 'Precision' | 'Powerful' | null {
        const imgSrc = $(elem).find('img').attr('src') ?? ''
        switch (imgSrc.match(/\/Untitled\((\d+)\)\.png$/)?.[1] ?? '') {
            case '':
                return null
            case '9':
            case '138':
            case '199':
            case '324':
            case '455':
            case '475':
            case '487':
                return 'Precision'
            case '12':
            case '141':
            case '196':
            case '327':
            case '453':
            case '473':
            case '485':
                return 'Powerful'
            default:
                console.log(`Element with text "${elem.text()}" has unexpected hookset "${imgSrc}"`)
                return null
        }
    }

    function parseAvailability(elem: cheerio.Cheerio<cheerio.Element>): boolean | null {
        const text = $(elem).text().trim()
        switch (text) {
            case '':
                return null
            case '❌':
                return false
            case '✔️':
                return true
            default:
                console.log(`Element with text "${elem.text()}" has unexpected availability format`)
                return null
        }
    }

    function parseStars(elem: cheerio.Cheerio<cheerio.Element>): number | null {
        if (elem.text().trim() === '') {
            return null
        } else if (/^\d+$/.test(elem.text().trim())) {
            return Number(elem.text().trim())
        } else {
            console.log(`Element with text "${elem.text()}" has unexpected stars format`)
            return null
        }
    }

    function parseNotes(elem: cheerio.Cheerio<cheerio.Element>): string | null {
        return elem.text().trim() || null
    }

    fs.writeFileSync(OUTPUT, JSON.stringify(data, null, 2))

    console.log('Done!')
})().then(null, null)
