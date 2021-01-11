import { Weather, Zone } from './consts'

const CHANCES: { [key in Zone]: [number, Weather][] } = {
  [Zone.AmhAraeng]: [
    [45, Weather.FairSkies],
    [60, Weather.Clouds],
    [70, Weather.DustStorms],
    [80, Weather.HeatWaves],
    [100, Weather.ClearSkies]
  ],
  [Zone.AzysLla]: [
    [35, Weather.FairSkies],
    [70, Weather.Clouds],
    [100, Weather.Thunder]
  ],
  [Zone.CentralShroud]: [
    [5, Weather.Thunder],
    [20, Weather.Rain],
    [30, Weather.Fog],
    [40, Weather.Clouds],
    [55, Weather.FairSkies],
    [85, Weather.ClearSkies],
    [100, Weather.FairSkies]
  ],
  [Zone.CentralThanalan]: [
    [15, Weather.DustStorms],
    [55, Weather.ClearSkies],
    [75, Weather.FairSkies],
    [85, Weather.Clouds],
    [95, Weather.Fog],
    [100, Weather.Rain]
  ],
  [Zone.CoerthasCentralHighlands]: [
    [20, Weather.Blizzards],
    [60, Weather.Snow],
    [70, Weather.FairSkies],
    [75, Weather.ClearSkies],
    [90, Weather.Clouds],
    [100, Weather.Fog]
  ],
  [Zone.CoerthasWesternHighlands]: [
    [20, Weather.Blizzards],
    [60, Weather.Snow],
    [70, Weather.FairSkies],
    [75, Weather.ClearSkies],
    [90, Weather.Clouds],
    [100, Weather.Fog]
  ],
  [Zone.EastShroud]: [
    [5, Weather.Thunder],
    [20, Weather.Rain],
    [30, Weather.Fog],
    [40, Weather.Clouds],
    [55, Weather.FairSkies],
    [85, Weather.ClearSkies],
    [100, Weather.FairSkies]
  ],
  [Zone.EasternLaNoscea]: [
    [5, Weather.Fog],
    [50, Weather.ClearSkies],
    [80, Weather.FairSkies],
    [90, Weather.Clouds],
    [95, Weather.Rain],
    [100, Weather.Showers]
  ],
  [Zone.EasternThanalan]: [
    [40, Weather.ClearSkies],
    [60, Weather.FairSkies],
    [70, Weather.Clouds],
    [80, Weather.Fog],
    [85, Weather.Rain],
    [100, Weather.Showers]
  ],
  [Zone.Eulmore]: [
    [10, Weather.Gales],
    [20, Weather.Rain],
    [30, Weather.Fog],
    [45, Weather.Clouds],
    [85, Weather.FairSkies],
    [100, Weather.ClearSkies]
  ],
  [Zone.EurekaAnemos]: [
    [30, Weather.FairSkies],
    [60, Weather.Gales],
    [90, Weather.Showers],
    [100, Weather.Snow]
  ],
  [Zone.EurekaHydatos]: [
    [12, Weather.FairSkies],
    [34, Weather.Showers],
    [56, Weather.Gloom],
    [78, Weather.Thunderstorms],
    [100, Weather.Snow]
  ],
  [Zone.EurekaPagos]: [
    [10, Weather.FairSkies],
    [28, Weather.Fog],
    [46, Weather.HeatWaves],
    [64, Weather.Snow],
    [82, Weather.Thunder],
    [100, Weather.Blizzards]
  ],
  [Zone.EurekaPyros]: [
    [10, Weather.FairSkies],
    [28, Weather.HeatWaves],
    [46, Weather.Thunder],
    [64, Weather.Blizzards],
    [82, Weather.UmbralWind],
    [100, Weather.Snow]
  ],
  [Zone.Gridania]: [
    [5, Weather.Rain],
    [20, Weather.Rain],
    [30, Weather.Fog],
    [40, Weather.Clouds],
    [55, Weather.FairSkies],
    [85, Weather.ClearSkies],
    [100, Weather.FairSkies]
  ],
  [Zone.Idyllshire]: [
    [10, Weather.Clouds],
    [20, Weather.Fog],
    [30, Weather.Rain],
    [40, Weather.Showers],
    [70, Weather.ClearSkies],
    [100, Weather.FairSkies]
  ],
  [Zone.IlMheg]: [
    [10, Weather.Rain],
    [20, Weather.Fog],
    [35, Weather.Clouds],
    [45, Weather.Thunderstorms],
    [60, Weather.ClearSkies],
    [100, Weather.FairSkies]
  ],
  [Zone.Ishgard]: [
    [60, Weather.Snow],
    [70, Weather.FairSkies],
    [75, Weather.ClearSkies],
    [90, Weather.Clouds],
    [100, Weather.Fog]
  ],
  [Zone.Kholusia]: [
    [10, Weather.Gales],
    [20, Weather.Rain],
    [30, Weather.Fog],
    [45, Weather.Clouds],
    [85, Weather.FairSkies],
    [100, Weather.ClearSkies]
  ],
  [Zone.Kugane]: [
    [10, Weather.Rain],
    [20, Weather.Fog],
    [40, Weather.Clouds],
    [80, Weather.FairSkies],
    [100, Weather.ClearSkies]
  ],
  [Zone.Lakeland]: [
    [20, Weather.ClearSkies],
    [60, Weather.FairSkies],
    [75, Weather.Clouds],
    [85, Weather.Fog],
    [95, Weather.Rain],
    [100, Weather.Thunderstorms]
  ],
  [Zone.LimsaLominsa]: [
    [20, Weather.Clouds],
    [50, Weather.ClearSkies],
    [80, Weather.FairSkies],
    [90, Weather.Fog],
    [100, Weather.Rain]
  ],
  [Zone.LowerLaNoscea]: [
    [20, Weather.Clouds],
    [50, Weather.ClearSkies],
    [70, Weather.FairSkies],
    [80, Weather.Wind],
    [90, Weather.Fog],
    [100, Weather.Rain]
  ],
  [Zone.MiddleLaNoscea]: [
    [20, Weather.Clouds],
    [50, Weather.ClearSkies],
    [70, Weather.FairSkies],
    [80, Weather.Wind],
    [90, Weather.Fog],
    [100, Weather.Rain]
  ],
  [Zone.Mist]: [
    [20, Weather.Clouds],
    [50, Weather.ClearSkies],
    [70, Weather.FairSkies],
    [80, Weather.FairSkies],
    [90, Weather.Fog],
    [100, Weather.Rain]
  ],
  [Zone.MorDhona]: [
    [15, Weather.Clouds],
    [30, Weather.Fog],
    [60, Weather.Gloom],
    [75, Weather.ClearSkies],
    [100, Weather.FairSkies]
  ],
  [Zone.NorthShroud]: [
    [5, Weather.Fog],
    [10, Weather.Showers],
    [25, Weather.Rain],
    [30, Weather.Fog],
    [40, Weather.Clouds],
    [70, Weather.FairSkies],
    [100, Weather.ClearSkies]
  ],
  [Zone.NorthernThanalan]: [
    [5, Weather.ClearSkies],
    [20, Weather.FairSkies],
    [50, Weather.Clouds],
    [100, Weather.Fog]
  ],
  [Zone.OuterLaNoscea]: [
    [30, Weather.ClearSkies],
    [50, Weather.FairSkies],
    [70, Weather.Clouds],
    [85, Weather.Fog],
    [100, Weather.Rain]
  ],
  [Zone.RhalgrsReach]: [
    [15, Weather.ClearSkies],
    [60, Weather.FairSkies],
    [80, Weather.Clouds],
    [90, Weather.Fog],
    [100, Weather.Thunder]
  ],
  [Zone.Shirogane]: [
    [10, Weather.Rain],
    [20, Weather.Fog],
    [40, Weather.Clouds],
    [80, Weather.FairSkies],
    [100, Weather.ClearSkies]
  ],
  [Zone.SouthShroud]: [
    [5, Weather.Fog],
    [10, Weather.Thunderstorms],
    [25, Weather.Thunder],
    [30, Weather.Fog],
    [40, Weather.Clouds],
    [70, Weather.FairSkies],
    [100, Weather.ClearSkies]
  ],
  [Zone.SouthernThanalan]: [
    [20, Weather.HeatWaves],
    [60, Weather.ClearSkies],
    [80, Weather.FairSkies],
    [90, Weather.Clouds],
    [100, Weather.Fog]
  ],
  [Zone.TheAzimSteppe]: [
    [5, Weather.Gales],
    [10, Weather.Wind],
    [17, Weather.Rain],
    [25, Weather.Fog],
    [35, Weather.Clouds],
    [75, Weather.FairSkies],
    [100, Weather.ClearSkies]
  ],
  [Zone.TheBozjanSouthernFront]: [
    [53, Weather.FairSkies],
    [65, Weather.Rain],
    [77, Weather.Wind],
    [89, Weather.Thunder],
    [100, Weather.DustStorms]
  ],
  [Zone.TheChurningMists]: [
    [10, Weather.Clouds],
    [20, Weather.Gales],
    [40, Weather.UmbralStatic],
    [70, Weather.ClearSkies],
    [100, Weather.FairSkies]
  ],
  [Zone.TheCrystarium]: [
    [20, Weather.ClearSkies],
    [60, Weather.FairSkies],
    [75, Weather.Clouds],
    [85, Weather.Fog],
    [95, Weather.Rain],
    [100, Weather.Thunderstorms]
  ],
  [Zone.TheDiadem]: [
    [30, Weather.FairSkies],
    [60, Weather.Fog],
    [90, Weather.Wind],
    [100, Weather.UmbralWind]
  ],
  [Zone.TheDravanianForelands]: [
    [10, Weather.Clouds],
    [20, Weather.Fog],
    [30, Weather.Thunder],
    [40, Weather.DustStorms],
    [70, Weather.ClearSkies],
    [100, Weather.FairSkies]
  ],
  [Zone.TheDravanianHinterlands]: [
    [10, Weather.Clouds],
    [20, Weather.Fog],
    [30, Weather.Rain],
    [40, Weather.Showers],
    [70, Weather.ClearSkies],
    [100, Weather.FairSkies]
  ],
  [Zone.TheFringes]: [
    [15, Weather.ClearSkies],
    [60, Weather.FairSkies],
    [80, Weather.Clouds],
    [90, Weather.Fog],
    [100, Weather.Thunder]
  ],
  [Zone.TheGoblet]: [
    [40, Weather.ClearSkies],
    [60, Weather.FairSkies],
    [85, Weather.Clouds],
    [95, Weather.Fog],
    [100, Weather.Rain]
  ],
  [Zone.TheLavenderBeds]: [
    [5, Weather.Clouds],
    [20, Weather.Rain],
    [30, Weather.Fog],
    [40, Weather.Clouds],
    [55, Weather.FairSkies],
    [85, Weather.ClearSkies],
    [100, Weather.FairSkies]
  ],
  [Zone.TheLochs]: [
    [20, Weather.ClearSkies],
    [60, Weather.FairSkies],
    [80, Weather.Clouds],
    [90, Weather.Fog],
    [100, Weather.Thunderstorms]
  ],
  [Zone.ThePeaks]: [
    [10, Weather.ClearSkies],
    [60, Weather.FairSkies],
    [75, Weather.Clouds],
    [85, Weather.Fog],
    [95, Weather.Wind],
    [100, Weather.DustStorms]
  ],
  [Zone.TheRaktikaGreatwood]: [
    [10, Weather.Fog],
    [20, Weather.Rain],
    [30, Weather.UmbralWind],
    [45, Weather.ClearSkies],
    [85, Weather.FairSkies],
    [100, Weather.Clouds]
  ],
  [Zone.TheRubySea]: [
    [10, Weather.Thunder],
    [20, Weather.Wind],
    [35, Weather.Clouds],
    [75, Weather.FairSkies],
    [100, Weather.ClearSkies]
  ],
  [Zone.TheSeaOfClouds]: [
    [30, Weather.ClearSkies],
    [60, Weather.FairSkies],
    [70, Weather.Clouds],
    [80, Weather.Fog],
    [90, Weather.Wind],
    [100, Weather.UmbralWind]
  ],
  [Zone.TheTempest]: [
    [20, Weather.Clouds],
    [80, Weather.FairSkies],
    [100, Weather.ClearSkies]
  ],
  [Zone.Uldah]: [
    [40, Weather.ClearSkies],
    [60, Weather.FairSkies],
    [85, Weather.Clouds],
    [95, Weather.Fog],
    [100, Weather.Rain]
  ],
  [Zone.UpperLaNoscea]: [
    [30, Weather.ClearSkies],
    [50, Weather.FairSkies],
    [70, Weather.Clouds],
    [80, Weather.Fog],
    [90, Weather.Thunder],
    [100, Weather.Thunderstorms]
  ],
  [Zone.WesternLaNoscea]: [
    [10, Weather.Fog],
    [40, Weather.ClearSkies],
    [60, Weather.FairSkies],
    [80, Weather.Clouds],
    [90, Weather.Wind],
    [100, Weather.Gales]
  ],
  [Zone.WesternThanalan]: [
    [40, Weather.ClearSkies],
    [60, Weather.FairSkies],
    [85, Weather.Clouds],
    [95, Weather.Fog],
    [100, Weather.Rain]
  ],
  [Zone.WolvesDenPier]: [
    [20, Weather.Clouds],
    [50, Weather.ClearSkies],
    [80, Weather.FairSkies],
    [90, Weather.Fog],
    [100, Weather.Thunderstorms]
  ],
  [Zone.Yanxia]: [
    [5, Weather.Showers],
    [15, Weather.Rain],
    [25, Weather.Fog],
    [40, Weather.Clouds],
    [80, Weather.FairSkies],
    [100, Weather.ClearSkies]
  ]
}

export default CHANCES
