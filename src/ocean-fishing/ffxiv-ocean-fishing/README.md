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

This script will probably need some minor updating before it runs successfully. Instructions are in the source. Otherwise, yell at Lulu.

## Update data from the Ocean Fishing Spreadsheet

Whenever the [Ocean Fishing Spreadsheet](https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing) changes, data may need to be updated.

  1. Go to [`https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing`](https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing) and select `File > Download > Web page (.html, zipped)`
  2. Extract `Ocean Fishing Textual Style.html` into `data/Ocean Fishing Textual Style.html`
  3. Execute `ts-node scripts/get-spreadsheet-data.ts`

This creates

  - `data/spreadsheet-data-raw.json`

(This step may fail or do strange stuff whenever the spreadsheet changes, since the spreadsheet is pretty messy/inconsistent and difficult to parse. Update the `get-spreadsheet-data.ts` script or yell at Lulu to do it.)

Check for any changes to `spreadsheet-data-raw.json` (try `git diff`) and manually update `data/spreadsheet-data.json` to reflect any changes. This file is manually changed since the spreadsheet doesn’t change often, and its format is too wonky to automatically parse consistently.

Note: The bait data in `spreadsheet-data-raw.json` refers to `desynthesisBait` in `spreadsheet-data.json`. The `bestBait` property comes from Teamcraft data (and is also manually updated so that changes are vetted).

## Update data from FFXIV Teamcraft

[Teamcraft](https://ffxivteamcraft.com/) will need to be periodically scraped to have the most up-to-date information on bite times and bait percentages.

  1. Grab a Bearer Token from Teamcraft and place it in `scripts/tc-bearer-token.json`.

This will have to be fetched before every scrape. The `tc-bearer-token.json` file is ignored by git, so if this is the first time, you will need to create this file. The contents of `tc-bearer-token.json` should look like

```json
"Bearer [lots of random characters]"
```

Check that it is surrounded by quotes (`""`).

> To get a Bearer Token in Google Chrome, ask Lulu or
>
>   1. Press `Ctrl + Shift + I` to open the Developer Tools. (Also `F12` or `Chrome Menu Bar > More tools > Developer tools`.)
>   2. Select the `Network` tab.
>   3. Navigate to a TC page like [`https://ffxivteamcraft.com/db/en/item/29788/Sothis`](https://ffxivteamcraft.com/db/en/item/29788/Sothis). (The Network tab must be active before the page loads. If it’s empty, try refreshing.)
>   4. Type `gubal` in the Network tab’s filter input. (Sometimes you will have to scroll down on the web page before any `gubal-proxy` requests are made.)
>   5. Click on any of the `gubal-proxy` results that has a Status of 200.
>   6. Select the `Headers` tab. In the `Request Headers` section, look for
>
> ```
> authorization: Bearer [lots of random characters]
> ```

  2. Execute `ts-node scripts/get-tc-data.ts`

This creates a bunch of files in `/data/tc` that are all ignored by git.

  3. Execute `ts-node scripts/get-bite-times.ts`

This creates

  - `data/bite-times.json`
  - `data/bite-times.csv`

The `bite-times.csv` file should be checked for any major changes that may require certain strategies or suggestions to be updated.
