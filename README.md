# Lulu’s Tools

https://ffxiv.pf-n.co/

Just a site so I can learn new frameworks and stuff.

## Development

  1. `npm install`
  2. `npm run dev`
  3. Go to `localhost:3000`

## Updating data

  1. Download [SaintCoinach.Cmd](https://github.com/xivapi/SaintCoinach/releases) to `ffxiv/datamining`
  2. Execute `SaintCoinach.Cmd.exe "D:\\SquareEnix\\FINAL FANTASY XIV - A Realm Reborn"` then `allrawexd` (also `maps` and `ui`)
  3. Download the CN and KO repositories to `ffxiv/datamining` (`git pull`)
    - https://github.com/thewakingsands/ffxiv-datamining-cn
    - https://github.com/Ra-Workspace/ffxiv-datamining-ko
  4. Execute whatever scripts I wrote that grab data
