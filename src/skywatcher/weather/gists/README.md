1. `ts-node get-weathers.ts`

Creates `/data/weathers.json` containing data for every weather.

2. `ts-node create-weather-icons.ts`

Creates `/data/weather-icons.png` and `/data/weather-icons-map.json`. Copy `/data/weather-icons.png` into `/public/images`.

3. `ts-node create-weather-consts.ts`

Creates `/types/weather.ts` for convenience.

4. `ts-node get-weather-rates.ts`

Creates `/data/weather-rates.json` containing data for possible weather rates.

5. `ts-node get-maps.ts`

Creates `/data/maps.json` containing data for place-region-weather combinations.

6. `ts-node get-place-names.ts`

Creates `/data/place-names.json` containing data for every place name found in `/data/maps.json`.

7. `ts-node create-place-name-consts.ts`

Creates `/types/place-name.ts` for convenience.
