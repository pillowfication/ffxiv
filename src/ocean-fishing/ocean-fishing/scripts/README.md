# Build the data files

1. `ts-node get-fish-data.ts`

This creates `data/fish-data.json` which houses all the data for ocean fishing spots and fishes, as well as some baits and achievements.

2. `ts-node get-ocean-fish-data.ts`

This reformats the data from `data/fish-data.json`, picking only relevant data and grabbing some addition data from the Lodestone, creating `data/ocean-fish-data.json`.

3. `ts-node create-sprites.ts`

All the images needed are fetched and spliced together into a single image at `data/ocean-fishing-icons.png`. The file `data/ocean-fishing-icons-map.json` is also created which keeps track of which image was placed where. Copy the image to `/public/images/ocean-fishing/ocean-fishing-icons.png`.

4. Go to the [Ocean Fishing spreadsheet](https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit#gid=149797934) and click `File > Download > Web page`. Extract `Ocean Fishing Textual Style.html` into the `data` folder.

5. `ts-node get-spreadsheet-data.ts`

This scrapes information from `data/Ocean Fishing Textual Style.html` and puts it into `data/spreadsheet-data-raw.json`. Check for any changes and reflect those changes in `data/spreadsheet-data.json`. Scraping is a little inconsistent, and the sheet's data isn't the cleanest, so this extra step keeps the website's data clean.

6. `ts-node get-tc-data.ts`

This scrapes Teamcraft for bite time data, putting everything in `data/tc`. This requires you to first create the file `tc-bearer-token.json` that contains your bearer token (details below).

7. `ts-node get-bite-times.ts`

This reads the data in the `data/tc` folder to determine (possibly) more accurate bite times for the fish, creating `data/ocean-fish-bite-times.json`. At this point, you may also want to run `ts-node create-bite-times-csv.ts` and `git diff data/bite-times.csv` to see what has changed.

8. `ts-node create-everything.ts`

Finally, we can create the master file `data/everything.json` that puts all our data into the single file that is served.

---

**Getting a bearer token**

On Chrome, press F12 to open the console. Click the Network tab and navigate to https://ffxivteamcraft.com/db/en/item/4926/Chub. Type "gubal" in the Network tab's filter, and select "XHR" next to it too. Click on any of the results below, then Headers > Request Headers. Look for the `authorization` key that looks something like

```
authorization: Bearer [...gibberish...]
```

Create the file `tc-bearer-token.json`, and paste your bearer token in quotes like

```
"Bearer [...gibberish...]"
```
