# Build the data files

1. `node get-fish-data.js`

This creates `data/fish-data.json` which houses all the data for fishing spots and fishes, as well as some baits and achievements.

2. `node get-ocean-fish-data.js`

This handpicks from `data/fish-data.json` just the ocean fishing information we care about, creating `data/ocean-fish-data.json`.

3. `node create-sprites.js`

All the images needed are spliced together into a single image at `data/ocean-fishing-icons.png`. The file `data/ocean-fishing-icons-map.json` is also created which keeps track which image was placed where.

(Also copy the `.png` over to `/public/images` until I figure out how to import a `.png` in this setup.)

4. Go to the [Ocean Fishing spreadsheet](https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit#gid=149797934) and click `File > Download > Web page`. Extract `Ocean Fishing Textual Style.html` into the `/data` folder.

5. `node get-spreadsheet-data.js`

This scrapes information from `data/Ocean Fishing Textual Style.html` and puts it into `data/spreadsheet-data-raw.json`. Check for any changes and reflect those changes in `data/spreadsheet-data.json`. Scraping is a little inconsistent, and the sheet's data isn't the cleanest, so this extra step keeps the website's data clean.

6. `node get-bite-times.js`

This reads the data in the `tc-data` folder to determine (possibly) more accurate bite times for the fish, creating `data/ocean-fish-bite-times.json`.
