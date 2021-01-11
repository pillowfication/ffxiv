import { Region, Zone } from './consts'

const PARTITION: { [key in Region]: Zone[] } = {
  [Region.Eureka]: [
    Zone.EurekaAnemos,
    Zone.EurekaPagos,
    Zone.EurekaPyros,
    Zone.EurekaHydatos
  ],
  [Region.GyrAbania]: [
    Zone.RhalgrsReach,
    Zone.TheFringes,
    Zone.ThePeaks,
    Zone.TheLochs
  ],
  [Region.IshgardAndSurroundingAreas]: [
    Zone.Ishgard,
    Zone.CoerthasCentralHighlands,
    Zone.CoerthasWesternHighlands,
    Zone.TheSeaOfClouds,
    Zone.AzysLla,
    Zone.Idyllshire,
    Zone.TheDravanianForelands,
    Zone.TheDravanianHinterlands,
    Zone.TheChurningMists
  ],
  [Region.LaNoscea]: [
    Zone.LimsaLominsa,
    Zone.MiddleLaNoscea,
    Zone.LowerLaNoscea,
    Zone.EasternLaNoscea,
    Zone.WesternLaNoscea,
    Zone.UpperLaNoscea,
    Zone.OuterLaNoscea,
    Zone.WolvesDenPier
  ],
  [Region.Norvrandt]: [
    Zone.TheCrystarium,
    Zone.Eulmore,
    Zone.Lakeland,
    Zone.Kholusia,
    Zone.AmhAraeng,
    Zone.IlMheg,
    Zone.TheRaktikaGreatwood,
    Zone.TheTempest
  ],
  [Region.Others]: [
    Zone.MorDhona,
    Zone.Mist,
    Zone.TheLavenderBeds,
    Zone.TheGoblet,
    Zone.Shirogane,
    Zone.TheDiadem,
    Zone.TheBozjanSouthernFront
  ],
  [Region.Thanalan]: [
    Zone.Uldah,
    Zone.WesternThanalan,
    Zone.CentralThanalan,
    Zone.EasternThanalan,
    Zone.SouthernThanalan,
    Zone.NorthernThanalan
    // Zone.GoldSaucer
  ],
  [Region.TheBlackShroud]: [
    Zone.Gridania,
    Zone.CentralShroud,
    Zone.EastShroud,
    Zone.SouthShroud,
    Zone.NorthShroud
  ],
  [Region.TheFarEast]: [
    Zone.Kugane,
    Zone.TheRubySea,
    Zone.Yanxia,
    Zone.TheAzimSteppe
    // Zone.TheDomanEnclave
  ]
}

export default PARTITION
