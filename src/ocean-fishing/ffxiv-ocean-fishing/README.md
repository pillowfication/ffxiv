# How to update the data in this module.

Each section can be updated independently, whenever it needs to.

## Update datamined stuff from FFXIV

Every time there is a new FFXIV patch, fish data may need to be updated.

  1. Make sure `/datamining` is updated. Instructions are somewhere?
  2. Execute `ts-node scripts/get-ocean-fishing-data.ts`

This creates the following data files:

  - `data/fishing-spots.json`
  - `data/place-names.json`
  - `data/fishes.json`
  - `data/baits.json`
  - `data/content-bonuses.json`
  - `data/achievements.json`

Icons may also need to be updated.

  3. Execute `ts-node scripts/create-icons.ts`
  4. Copy `data/icons.png` to `/public/images/ocean-fishing/icons.png`

This creates

  - `data/icons.png`
  - `data/icons-map.json`

## Update data from the Lodestone

Every time there is a new FFXIV patch, data fetched from the Lodestone may need to be updated.

  1. Execute `ts-node scripts/get-lodestone-data.ts`

This creates

  - `data/lodestone-data.json`

This script is a little fickle and will probably need some minor updating before it runs successfully. Instructions are in the source. Otherwise, yell at Lulu.

## Update data from the Ocean Fishing Spreadsheet

Whenever the [Ocean Fishing Spreadsheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vRwGdlaadqwY_X7htQdIGbKmhaAue2leyrB7jj06gsuoCcdwxRQtDdqLKW0k-H3SJ7P7wvM1pi2zoJ2/pubhtml#) changes, data may need to be updated.

  1. Go to [`https://docs.google.com/spreadsheets/d/e/2PACX-1vRwGdlaadqwY_X7htQdIGbKmhaAue2leyrB7jj06gsuoCcdwxRQtDdqLKW0k-H3SJ7P7wvM1pi2zoJ2/pubhtml#`](https://docs.google.com/spreadsheets/d/e/2PACX-1vRwGdlaadqwY_X7htQdIGbKmhaAue2leyrB7jj06gsuoCcdwxRQtDdqLKW0k-H3SJ7P7wvM1pi2zoJ2/pubhtml#) and select `File > Download > Web page (.html, zipped)`
  2. Save as `Ocean Fishing Data.html`
  3. Execute `ts-node scripts/get-spreadsheet-data-raw.ts`
  4. Execute `ts-node scripts/get-spreadsheet-data.ts`

This creates

  - `data/spreadsheet-data-raw.json`
  - `data/spreadsheet-data.json`

(This step may fail or do strange stuff whenever the spreadsheet changes, since the spreadsheet is pretty messy/inconsistent and difficult to parse. Update the `get-spreadsheet-data-raw.ts` script or yell at Lulu.)

First `spreadsheet-data-raw.json` is created which parses as much information as it can from the spreadsheet. Then `get-spreadsheet-data.ts` reads this file, fixes it up a bit (e.g. resolves baits, resolves weathers, manually adds data that couldn't be parsed), and produces the final `spreadsheet-data.json`.
