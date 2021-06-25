import fs from 'fs'
import path from 'path'
import * as sc from '../../../saint-coinach'
// import { upperFirst } from '../../../utils'
import enemyLocations from '../data/enemy-locations.json'
// import drops from '../data/drops.json'

/* eslint-disable @typescript-eslint/naming-convention */
const BNpcName_en = sc.requireCsv('BNpcName', 'en')
const BNpcName_de = sc.requireCsv('BNpcName', 'de')
const BNpcName_fr = sc.requireCsv('BNpcName', 'fr')
const BNpcName_ja = sc.requireCsv('BNpcName', 'ja')
const BNpcName_cn = sc.requireCsv('BNpcName', 'cn')
const BNpcName_ko = sc.requireCsv('BNpcName', 'ko')
// const Item_en = sc.requireCsv('Item', 'en')
// const Item_de = sc.requireCsv('Item', 'de')
// const Item_fr = sc.requireCsv('Item', 'fr')
// const Item_ja = sc.requireCsv('Item', 'ja')
// const Item_cn = sc.requireCsv('Item', 'cn')
// const Item_ko = sc.requireCsv('Item', 'ko')
const Map = sc.requireCsv('Map')
const MapMarker = sc.requireCsv('MapMarker')
const PlaceName_en = sc.requireCsv('PlaceName', 'en')
const PlaceName_de = sc.requireCsv('PlaceName', 'de')
const PlaceName_fr = sc.requireCsv('PlaceName', 'fr')
const PlaceName_ja = sc.requireCsv('PlaceName', 'ja')
const PlaceName_cn = sc.requireCsv('PlaceName', 'cn')
const PlaceName_ko = sc.requireCsv('PlaceName', 'ko')

// function range (start: number, end: number): number[] {
//   return Array.from({ length: end - start + 1 }, (_, index) => start + index)
// }

const ZadnorMap = Map.data.find(({ '#': id }) => id === 665)

const zadnor = {
  mapId: ZadnorMap.Id,
  sizeFactor: ZadnorMap.SizeFactor,
  offsetX: ZadnorMap['Offset{X}'],
  offsetY: ZadnorMap['Offset{Y}'],
  placeName: {
    en: PlaceName_en.get(+ZadnorMap.PlaceName).Name,
    de: PlaceName_de.get(+ZadnorMap.PlaceName).Name,
    fr: PlaceName_fr.get(+ZadnorMap.PlaceName).Name,
    ja: PlaceName_ja.get(+ZadnorMap.PlaceName).Name,
    cn: PlaceName_cn.get(+ZadnorMap.PlaceName)?.Name ?? '',
    ko: PlaceName_ko.get(+ZadnorMap.PlaceName)?.Name ?? ''
  },
  placeName_sub: {
    en: PlaceName_en.get(+ZadnorMap['PlaceName{Sub}']).Name,
    de: PlaceName_de.get(+ZadnorMap['PlaceName{Sub}']).Name,
    fr: PlaceName_fr.get(+ZadnorMap['PlaceName{Sub}']).Name,
    ja: PlaceName_ja.get(+ZadnorMap['PlaceName{Sub}']).Name,
    cn: PlaceName_cn.get(+ZadnorMap['PlaceName{Sub}'])?.Name ?? '',
    ko: PlaceName_ko.get(+ZadnorMap['PlaceName{Sub}'])?.Name ?? ''
  },
  placeName_region: {
    en: PlaceName_en.get(+ZadnorMap['PlaceName{Region}']).Name,
    de: PlaceName_de.get(+ZadnorMap['PlaceName{Region}']).Name,
    fr: PlaceName_fr.get(+ZadnorMap['PlaceName{Region}']).Name,
    ja: PlaceName_ja.get(+ZadnorMap['PlaceName{Region}']).Name,
    cn: PlaceName_cn.get(+ZadnorMap['PlaceName{Region}'])?.Name ?? '',
    ko: PlaceName_ko.get(+ZadnorMap['PlaceName{Region}'])?.Name ?? ''
  },
  mapMarkers: MapMarker.data
    .filter(mapMarker => Math.floor(mapMarker['#']) === ZadnorMap.MapMarkerRange)
    .map(mapMarker => ({
      id: isFinite(+String(mapMarker['#']).split('.')[1]) ? +String(mapMarker['#']).split('.')[1] : 0,
      x: mapMarker.X,
      y: mapMarker.Y,
      icon: +mapMarker.Icon,
      placeName_subtext: {
        en: PlaceName_en.get(+mapMarker['PlaceName{Subtext}']).Name,
        de: PlaceName_de.get(+mapMarker['PlaceName{Subtext}']).Name,
        fr: PlaceName_fr.get(+mapMarker['PlaceName{Subtext}']).Name,
        ja: PlaceName_ja.get(+mapMarker['PlaceName{Subtext}']).Name,
        cn: PlaceName_cn.get(+mapMarker['PlaceName{Subtext}'])?.Name ?? '',
        ko: PlaceName_ko.get(+mapMarker['PlaceName{Subtext}'])?.Name ?? ''
      },
      subtextOrientation: mapMarker.SubtextOrientation
    })),
  starMonsters: enemyLocations.star_monsters
    .map(starMonster => ({
      id: starMonster.id,
      x: starMonster.coords[0],
      y: starMonster.coords[1],
      name: {
        en: BNpcName_en.get(starMonster.id).Singular,
        de: BNpcName_de.get(starMonster.id).Singular,
        fr: BNpcName_fr.get(starMonster.id).Singular,
        ja: BNpcName_ja.get(starMonster.id).Singular,
        cn: BNpcName_cn.get(starMonster.id)?.Singular ?? '',
        ko: BNpcName_ko.get(starMonster.id)?.Singular ?? ''
      }
    })),
  sprites: Object.entries(enemyLocations.sprites).reduce((acc, [spriteType, spriteData]) => {
    acc[spriteType] = {
      id: spriteData.id,
      name: {
        en: BNpcName_en.get(spriteData.id).Singular,
        de: BNpcName_de.get(spriteData.id).Singular,
        fr: BNpcName_fr.get(spriteData.id).Singular,
        ja: BNpcName_ja.get(spriteData.id).Singular,
        cn: BNpcName_cn.get(spriteData.id)?.Singular ?? '',
        ko: BNpcName_ko.get(spriteData.id)?.Singular ?? ''
      },
      locations: spriteData.locations.map((location: any) => ({
        level: location.level,
        x: location.coords[0],
        y: location.coords[1]
      }))
    }
    return acc
  }, {})
  // items: [...range(30884, 30899), 31135].reduce((acc, itemId) => {
  //   acc[itemId] = {
  //     id: itemId,
  //     name: {
  //       en: Item_en.get(itemId).Name,
  //       de: Item_de.get(itemId).Name,
  //       fr: Item_fr.get(itemId).Name,
  //       ja: Item_ja.get(itemId).Name,
  //       cn: Item_cn.get(itemId).Name,
  //       ko: Item_ko.get(itemId).Name
  //     },
  //     description: {
  //       en: Item_en.get(itemId).Description,
  //       de: Item_de.get(itemId).Description,
  //       fr: Item_fr.get(itemId).Description,
  //       ja: Item_ja.get(itemId).Description,
  //       cn: Item_cn.get(itemId).Description,
  //       ko: Item_ko.get(itemId).Description
  //     }
  //   }
  //   return acc
  // }, {}),
  // drops: ['zone_1', 'zone_2', 'zone_3'].reduce((acc, zone) => {
  //   acc[zone.replace('_', '')] = drops[zone].map((datum: any) => {
  //     const monsterId = BNpcName_en.data.find(bNpcName_en => bNpcName_en.Singular === datum.name)['#']
  //     const lootName = datum.loot === 'cluster' ? 'Zadnorn Cluster' : `Forgotten Fragment of ${upperFirst(datum.loot)}`
  //     const lootId = Item_en.data.find(item_en => item_en.Name === lootName)['#']
  //     return {
  //       monster: monsterId,
  //       name: {
  //         en: BNpcName_en.get(monsterId).Singular,
  //         de: BNpcName_de.get(monsterId).Singular,
  //         fr: BNpcName_fr.get(monsterId).Singular,
  //         ja: BNpcName_ja.get(monsterId).Singular,
  //         cn: BNpcName_cn.get(monsterId).Singular,
  //         ko: BNpcName_ko.get(monsterId).Singular
  //       },
  //       rank: datum.rank,
  //       loot: lootId,
  //       count: datum.count,
  //       rate: datum.rate,
  //       condition: datum.condition
  //     }
  //   })
  //   return acc
  // }, {})
}

fs.writeFileSync(path.resolve(__dirname, '../data/zadnor.json'), JSON.stringify(zadnor))

// Until I figure out how to get map names from ids
fs.copyFileSync(
  path.join(sc.FOLDER, 'ui/map', 'n4b/n4b6 - Zadnor.png'),
  path.resolve(__dirname, '../data/zadnor.png')
)

for (const mapMarker of zadnor.mapMarkers) {
  if (mapMarker.icon !== 0) {
    fs.writeFileSync(path.resolve(__dirname, `../data/icon-${mapMarker.icon}.png`), sc.getIcon(mapMarker.icon).buffer)
  }
}

console.log('Done!')
