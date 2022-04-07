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

Whenever the [Ocean Fishing Spreadsheet](https://docs.google.com/spreadsheets/d/1R0Nt8Ye7EAQtU8CXF1XRRj67iaFpUk1BXeDgt6abxsQ/edit#gid=149797934) changes, data may need to be updated.

  1. Go to [`https://docs.google.com/spreadsheets/d/1R0Nt8Ye7EAQtU8CXF1XRRj67iaFpUk1BXeDgt6abxsQ/edit#gid=149797934`](https://docs.google.com/spreadsheets/d/1R0Nt8Ye7EAQtU8CXF1XRRj67iaFpUk1BXeDgt6abxsQ/edit#gid=149797934) and select `File > Download > Web page (.html, zipped)`
  2. Extract `Data.html` into `data/Ocean Fishing Data.html`
  3. Execute `ts-node scripts/get-spreadsheet-data.ts`

This creates

  - `data/spreadsheet-data-raw.json`

(This step may fail or do strange stuff whenever the spreadsheet changes, since the spreadsheet is pretty messy/inconsistent and difficult to parse. Update the `get-spreadsheet-data.ts` script or yell at Lulu.)

Check for any changes to `spreadsheet-data-raw.json` (try `git diff`) and manually update `data/spreadsheet-data.json` to reflect any changes. This file is manually changed since the spreadsheet doesn’t change often, and its format is too wonky to automatically parse consistently.

## Update data from FFXIV Teamcraft

[Teamcraft](https://ffxivteamcraft.com/) will need to be periodically scraped to have the most up-to-date information on bite times and bait percentages.

  1. Execute `ts-node scripts/get-tc-data.ts`

This creates a bunch of files in `/data/tc` that are all ignored by git.

  2. Execute `ts-node scripts/get-bite-times.ts`

This creates

  - `data/bite-times.json`
  - `data/bite-times.csv`

The `bite-times.csv` file should be checked for any major changes that may require certain strategies or suggestions to be updated. It also contains Teamcraft’s suggested baits which should be checked for peculiarities.
