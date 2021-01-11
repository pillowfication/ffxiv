import { Region, Zone } from './consts'

const PARTITION: { [key in Region]: Zone[] } = {
  [Region.EUREKA]: [
    Zone.EUREKA_ANEMOS,
    Zone.EUREKA_PAGOS,
    Zone.EUREKA_PYROS,
    Zone.EUREKA_HYDATOS
  ],
  [Region.GYR_ABANIA]: [
    Zone.RHALGRS_REACH,
    Zone.THE_FRINGES,
    Zone.THE_PEAKS,
    Zone.THE_LOCHS
  ],
  [Region.ISHGARD_AND_SURROUNDING_AREAS]: [
    Zone.ISHGARD,
    Zone.COERTHAS_CENTRAL_HIGHLANDS,
    Zone.COERTHAS_WESTERN_HIGHLANDS,
    Zone.THE_SEA_OF_CLOUDS,
    Zone.AZYS_LLA,
    Zone.IDYLLSHIRE,
    Zone.THE_DRAVANIAN_FORELANDS,
    Zone.THE_DRAVANIAN_HINTERLANDS,
    Zone.THE_CHURNING_MISTS
  ],
  [Region.LA_NOSCEA]: [
    Zone.LIMSA_LOMINSA,
    Zone.MIDDLE_LA_NOSCEA,
    Zone.LOWER_LA_NOSCEA,
    Zone.EASTERN_LA_NOSCEA,
    Zone.WESTERN_LA_NOSCEA,
    Zone.UPPER_LA_NOSCEA,
    Zone.OUTER_LA_NOSCEA,
    Zone.WOLVES_DEN_PIER
  ],
  [Region.NORVRANDT]: [
    Zone.THE_CRYSTARIUM,
    Zone.EULMORE,
    Zone.LAKELAND,
    Zone.KHOLUSIA,
    Zone.AMH_ARAENG,
    Zone.IL_MHEG,
    Zone.THE_RAKTIKA_GREATWOOD,
    Zone.THE_TEMPEST
  ],
  [Region.OTHERS]: [
    Zone.MOR_DHONA,
    Zone.MIST,
    Zone.THE_LAVENDER_BEDS,
    Zone.THE_GOBLET,
    Zone.SHIROGANE,
    Zone.THE_DIADEM,
    Zone.THE_BOZJAN_SOUTHERN_FRONT
  ],
  [Region.THANALAN]: [
    Zone.ULDAH,
    Zone.WESTERN_THANALAN,
    Zone.CENTRAL_THANALAN,
    Zone.EASTERN_THANALAN,
    Zone.SOUTHERN_THANALAN,
    Zone.NORTHERN_THANALAN
    // Zone.GOLD_SAUCER
  ],
  [Region.THE_BLACK_SHROUD]: [
    Zone.GRIDANIA,
    Zone.CENTRAL_SHROUD,
    Zone.EAST_SHROUD,
    Zone.SOUTH_SHROUD,
    Zone.NORTH_SHROUD
  ],
  [Region.THE_FAR_EAST]: [
    Zone.KUGANE,
    Zone.THE_RUBY_SEA,
    Zone.YANXIA,
    Zone.THE_AZIM_STEPPE
    // Zone.THE_DOMAN_ENCLAVE
  ]
}

export default PARTITION
