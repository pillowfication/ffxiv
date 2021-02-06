import fs from 'fs'
import path from 'path'
import * as saintCoinach from '../../../saint-coinach'
import myData from '../data/my-data.json'

/* eslint-disable @typescript-eslint/naming-convention */
const Map = saintCoinach.get('Map')
const MapMarker = saintCoinach.get('MapMarker')
const PlaceName_en = saintCoinach.get('PlaceName.en')
const PlaceName_de = saintCoinach.get('PlaceName.de')
const PlaceName_fr = saintCoinach.get('PlaceName.fr')
const PlaceName_ja = saintCoinach.get('PlaceName.ja')
const BNpcName_en = saintCoinach.get('BNpcName.en')
const BNpcName_de = saintCoinach.get('BNpcName.de')
const BNpcName_fr = saintCoinach.get('BNpcName.fr')
const BNpcName_ja = saintCoinach.get('BNpcName.ja')

const BozjaMap = Map.data.find(({ '#': id }) => id === 606)

const bozja = {
  mapId: BozjaMap.Id,
  sizeFactor: BozjaMap.SizeFactor,
  offsetX: BozjaMap['Offset{X}'],
  offsetY: BozjaMap['Offset{Y}'],
  placeName_en: PlaceName_en.data.find(({ '#': id }) => id === +BozjaMap.PlaceName).Name,
  placeName_de: PlaceName_de.data.find(({ '#': id }) => id === +BozjaMap.PlaceName).Name,
  placeName_fr: PlaceName_fr.data.find(({ '#': id }) => id === +BozjaMap.PlaceName).Name,
  placeName_ja: PlaceName_ja.data.find(({ '#': id }) => id === +BozjaMap.PlaceName).Name,
  placeName_ko: PlaceName_en.data.find(({ '#': id }) => id === +BozjaMap.PlaceName).Name, // Fallback to en
  placeName_sub_en: PlaceName_en.data.find(({ '#': id }) => id === +BozjaMap['PlaceName{Sub}']).Name,
  placeName_sub_de: PlaceName_de.data.find(({ '#': id }) => id === +BozjaMap['PlaceName{Sub}']).Name,
  placeName_sub_fr: PlaceName_fr.data.find(({ '#': id }) => id === +BozjaMap['PlaceName{Sub}']).Name,
  placeName_sub_ja: PlaceName_ja.data.find(({ '#': id }) => id === +BozjaMap['PlaceName{Sub}']).Name,
  placeName_sub_ko: PlaceName_en.data.find(({ '#': id }) => id === +BozjaMap['PlaceName{Sub}']).Name, // Fallback to en
  placeName_region_en: PlaceName_en.data.find(({ '#': id }) => id === +BozjaMap['PlaceName{Region}']).Name,
  placeName_region_de: PlaceName_de.data.find(({ '#': id }) => id === +BozjaMap['PlaceName{Region}']).Name,
  placeName_region_fr: PlaceName_fr.data.find(({ '#': id }) => id === +BozjaMap['PlaceName{Region}']).Name,
  placeName_region_ja: PlaceName_ja.data.find(({ '#': id }) => id === +BozjaMap['PlaceName{Region}']).Name,
  placeName_region_ko: PlaceName_en.data.find(({ '#': id }) => id === +BozjaMap['PlaceName{Region}']).Name, // Fallback to en
  mapMarkers: MapMarker.data
    .filter(mapMarker => Math.floor(mapMarker['#']) === BozjaMap.MapMarkerRange)
    .map(mapMarker => ({
      id: isFinite(+String(mapMarker['#']).split('.')[1]) ? +String(mapMarker['#']).split('.')[1] : 0,
      x: mapMarker.X,
      y: mapMarker.Y,
      icon: +mapMarker.Icon,
      placeName_subtext_en: PlaceName_en.data.find(({ '#': id }) => id === +mapMarker['PlaceName{Subtext}']).Name,
      placeName_subtext_de: PlaceName_de.data.find(({ '#': id }) => id === +mapMarker['PlaceName{Subtext}']).Name,
      placeName_subtext_fr: PlaceName_fr.data.find(({ '#': id }) => id === +mapMarker['PlaceName{Subtext}']).Name,
      placeName_subtext_ja: PlaceName_ja.data.find(({ '#': id }) => id === +mapMarker['PlaceName{Subtext}']).Name,
      placeName_subtext_ko: PlaceName_en.data.find(({ '#': id }) => id === +mapMarker['PlaceName{Subtext}']).Name, // Fallback to en
      subtextOrientation: mapMarker.SubtextOrientation
    })),
  starMonsters: myData.star_monsters
    .map(starMonster => ({
      id: starMonster.id,
      name_en: BNpcName_en.data.find(({ '#': id }) => id === starMonster.id).Singular,
      name_de: BNpcName_de.data.find(({ '#': id }) => id === starMonster.id).Singular,
      name_fr: BNpcName_fr.data.find(({ '#': id }) => id === starMonster.id).Singular,
      name_ja: BNpcName_ja.data.find(({ '#': id }) => id === starMonster.id).Singular,
      name_ko: BNpcName_en.data.find(({ '#': id }) => id === starMonster.id).Singular, // Fallback to en
      x: starMonster.coords[0],
      y: starMonster.coords[1]
    })),
  sprites: Object.keys(myData.sprites).reduce((acc, spriteType) => {
    acc[spriteType] = {
      id: myData.sprites[spriteType].id,
      name_en: BNpcName_en.data.find(({ '#': id }) => id === myData.sprites[spriteType].id).Singular,
      name_de: BNpcName_de.data.find(({ '#': id }) => id === myData.sprites[spriteType].id).Singular,
      name_fr: BNpcName_fr.data.find(({ '#': id }) => id === myData.sprites[spriteType].id).Singular,
      name_ja: BNpcName_ja.data.find(({ '#': id }) => id === myData.sprites[spriteType].id).Singular,
      name_ko: BNpcName_en.data.find(({ '#': id }) => id === myData.sprites[spriteType].id).Singular, // Fallback to en
      locations: myData.sprites[spriteType].locations.map((location: any) => ({
        level: location.level,
        x: location.coords[0],
        y: location.coords[1]
      }))
    }
    return acc
  }, {})
}

fs.writeFileSync(path.resolve(__dirname, '../data/bozja.json'), JSON.stringify(bozja))

// Until I figure out how to get map names from ids
const SAINT_COINACH_FOLDER = path.resolve(__dirname, '../../../../../SaintCoinach.Cmd-master-b930-8ab7d24/2021.01.28.0000.0000')
fs.copyFileSync(
  path.join(SAINT_COINACH_FOLDER, 'ui/map', 'n4b/n4b4 - Bozjan Southern Front.png'),
  path.resolve(__dirname, '../data/bozja.png')
)

for (const mapMarker of bozja.mapMarkers) {
  if (mapMarker.icon !== 0) {
    fs.writeFileSync(path.resolve(__dirname, `../data/icon-${mapMarker.icon}.png`), saintCoinach.getIcon(mapMarker.icon).buffer)
  }
}
