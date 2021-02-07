import fs from 'fs'
import path from 'path'
import * as sc from '../../../saint-coinach'
import myData from '../data/my-data.json'

/* eslint-disable @typescript-eslint/naming-convention */
const Map = sc.requireCsv('Map')
const MapMarker = sc.requireCsv('MapMarker')
const PlaceName_en = sc.requireCsv('PlaceName', 'en')
const PlaceName_de = sc.requireCsv('PlaceName', 'de')
const PlaceName_fr = sc.requireCsv('PlaceName', 'fr')
const PlaceName_ja = sc.requireCsv('PlaceName', 'ja')
const PlaceName_cn = sc.requireCsv('PlaceName', 'cn')
const PlaceName_ko = sc.requireCsv('PlaceName', 'ko')
const BNpcName_en = sc.requireCsv('BNpcName', 'en')
const BNpcName_de = sc.requireCsv('BNpcName', 'de')
const BNpcName_fr = sc.requireCsv('BNpcName', 'fr')
const BNpcName_ja = sc.requireCsv('BNpcName', 'ja')
const BNpcName_cn = sc.requireCsv('BNpcName', 'cn')
const BNpcName_ko = sc.requireCsv('BNpcName', 'ko')

const BozjaMap = Map.data.find(({ '#': id }) => id === 606)

const bozja = {
  mapId: BozjaMap.Id,
  sizeFactor: BozjaMap.SizeFactor,
  offsetX: BozjaMap['Offset{X}'],
  offsetY: BozjaMap['Offset{Y}'],
  placeName_en: PlaceName_en.get(+BozjaMap.PlaceName).Name,
  placeName_de: PlaceName_de.get(+BozjaMap.PlaceName).Name,
  placeName_fr: PlaceName_fr.get(+BozjaMap.PlaceName).Name,
  placeName_ja: PlaceName_ja.get(+BozjaMap.PlaceName).Name,
  placeName_cn: PlaceName_cn.get(+BozjaMap.PlaceName).Name,
  placeName_ko: PlaceName_ko.get(+BozjaMap.PlaceName).Name,
  placeName_sub_en: PlaceName_en.get(+BozjaMap['PlaceName{Sub}']).Name,
  placeName_sub_de: PlaceName_de.get(+BozjaMap['PlaceName{Sub}']).Name,
  placeName_sub_fr: PlaceName_fr.get(+BozjaMap['PlaceName{Sub}']).Name,
  placeName_sub_ja: PlaceName_ja.get(+BozjaMap['PlaceName{Sub}']).Name,
  placeName_sub_cn: PlaceName_cn.get(+BozjaMap['PlaceName{Sub}']).Name,
  placeName_sub_ko: PlaceName_ko.get(+BozjaMap['PlaceName{Sub}']).Name,
  placeName_region_en: PlaceName_en.get(+BozjaMap['PlaceName{Region}']).Name,
  placeName_region_de: PlaceName_de.get(+BozjaMap['PlaceName{Region}']).Name,
  placeName_region_fr: PlaceName_fr.get(+BozjaMap['PlaceName{Region}']).Name,
  placeName_region_ja: PlaceName_ja.get(+BozjaMap['PlaceName{Region}']).Name,
  placeName_region_cn: PlaceName_cn.get(+BozjaMap['PlaceName{Region}']).Name,
  placeName_region_ko: PlaceName_ko.get(+BozjaMap['PlaceName{Region}']).Name,
  mapMarkers: MapMarker.data
    .filter(mapMarker => Math.floor(mapMarker['#']) === BozjaMap.MapMarkerRange)
    .map(mapMarker => ({
      id: isFinite(+String(mapMarker['#']).split('.')[1]) ? +String(mapMarker['#']).split('.')[1] : 0,
      x: mapMarker.X,
      y: mapMarker.Y,
      icon: +mapMarker.Icon,
      placeName_subtext_en: PlaceName_en.get(+mapMarker['PlaceName{Subtext}']).Name,
      placeName_subtext_de: PlaceName_de.get(+mapMarker['PlaceName{Subtext}']).Name,
      placeName_subtext_fr: PlaceName_fr.get(+mapMarker['PlaceName{Subtext}']).Name,
      placeName_subtext_ja: PlaceName_ja.get(+mapMarker['PlaceName{Subtext}']).Name,
      placeName_subtext_cn: PlaceName_cn.get(+mapMarker['PlaceName{Subtext}']).Name,
      placeName_subtext_ko: PlaceName_ko.get(+mapMarker['PlaceName{Subtext}']).Name,
      subtextOrientation: mapMarker.SubtextOrientation
    })),
  starMonsters: myData.star_monsters
    .map(starMonster => ({
      id: starMonster.id,
      x: starMonster.coords[0],
      y: starMonster.coords[1],
      name_en: BNpcName_en.get(starMonster.id).Singular,
      name_de: BNpcName_de.get(starMonster.id).Singular,
      name_fr: BNpcName_fr.get(starMonster.id).Singular,
      name_ja: BNpcName_ja.get(starMonster.id).Singular,
      name_cn: BNpcName_cn.get(starMonster.id).Singular,
      name_ko: BNpcName_ko.get(starMonster.id).Singular
    })),
  sprites: Object.entries(myData.sprites).reduce((acc, [spriteType, spriteData]) => {
    acc[spriteType] = {
      id: spriteData.id,
      name_en: BNpcName_en.get(spriteData.id).Singular,
      name_de: BNpcName_de.get(spriteData.id).Singular,
      name_fr: BNpcName_fr.get(spriteData.id).Singular,
      name_ja: BNpcName_ja.get(spriteData.id).Singular,
      name_cn: BNpcName_cn.get(spriteData.id).Singular,
      name_ko: BNpcName_ko.get(spriteData.id).Singular,
      locations: spriteData.locations.map((location: any) => ({
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
    fs.writeFileSync(path.resolve(__dirname, `../data/icon-${mapMarker.icon}.png`), sc.getIcon(mapMarker.icon).buffer)
  }
}

console.log('Done!')
