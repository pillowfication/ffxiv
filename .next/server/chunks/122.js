"use strict";
exports.id = 122;
exports.ids = [122];
exports.modules = {

/***/ 2203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ skywatcher_WeatherIcon)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: ./src/skywatcher/ffxiv-skywatcher/src/translate-weather.ts
var translate_weather = __webpack_require__(5679);
;// CONCATENATED MODULE: ./src/skywatcher/ffxiv-skywatcher/data/weather-icons-map.json
const weather_icons_map_namespaceObject = JSON.parse('[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173]');
;// CONCATENATED MODULE: ./src/skywatcher/WeatherIcon.tsx







const ICON_SIZE = 32;
const WeatherIcon = ({ weather , sx =[]  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)();
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
        title: (0,translate_weather/* default */.Z)(weather, locale),
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: [
                {
                    display: "inline-block",
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    verticalAlign: "middle",
                    backgroundImage: 'url("/images/skywatcher/weather-icons.png")',
                    backgroundSize: `${weather_icons_map_namespaceObject.length * 100}% 100%`
                },
                ...Array.isArray(sx) ? sx : [
                    sx
                ]
            ],
            style: {
                backgroundPosition: `${weather_icons_map_namespaceObject.indexOf(weather) * -100}% 0%`
            }
        })
    });
};
/* harmony default export */ const skywatcher_WeatherIcon = (/*#__PURE__*/external_react_default().memo(WeatherIcon));


/***/ }),

/***/ 5679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ translateWeather)
/* harmony export */ });
/* harmony import */ var _data_weathers_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9247);
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9465);


function translateWeather(weather, locale = "en") {
    return (0,_translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(locale, _data_weathers_json__WEBPACK_IMPORTED_MODULE_0__[weather], "name");
};


/***/ }),

/***/ 7456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ Place),
/* harmony export */   "y": () => (/* binding */ Weather)
/* harmony export */ });
var Place;
(function(Place) {
    Place[Place["DEFAULT"] = 0] = "DEFAULT";
    Place[Place["LaNoscea"] = 22] = "LaNoscea";
    Place[Place["TheBlackShroud"] = 23] = "TheBlackShroud";
    Place[Place["Thanalan"] = 24] = "Thanalan";
    Place[Place["Coerthas"] = 25] = "Coerthas";
    Place[Place["MorDhona"] = 26] = "MorDhona";
    Place[Place["LimsaLominsaUpperDecks"] = 28] = "LimsaLominsaUpperDecks";
    Place[Place["LimsaLominsaLowerDecks"] = 29] = "LimsaLominsaLowerDecks";
    Place[Place["MiddleLaNoscea"] = 30] = "MiddleLaNoscea";
    Place[Place["LowerLaNoscea"] = 31] = "LowerLaNoscea";
    Place[Place["EasternLaNoscea"] = 32] = "EasternLaNoscea";
    Place[Place["WesternLaNoscea"] = 33] = "WesternLaNoscea";
    Place[Place["UpperLaNoscea"] = 34] = "UpperLaNoscea";
    Place[Place["BrayfloxsLongstop"] = 36] = "BrayfloxsLongstop";
    Place[Place["TheWanderersPalace"] = 37] = "TheWanderersPalace";
    Place[Place["UldahStepsOfNald"] = 40] = "UldahStepsOfNald";
    Place[Place["UldahStepsOfThal"] = 41] = "UldahStepsOfThal";
    Place[Place["WesternThanalan"] = 42] = "WesternThanalan";
    Place[Place["CentralThanalan"] = 43] = "CentralThanalan";
    Place[Place["EasternThanalan"] = 44] = "EasternThanalan";
    Place[Place["SouthernThanalan"] = 45] = "SouthernThanalan";
    Place[Place["NorthernThanalan"] = 46] = "NorthernThanalan";
    Place[Place["TheSunkenTempleOfQarn"] = 50] = "TheSunkenTempleOfQarn";
    Place[Place["NewGridania"] = 52] = "NewGridania";
    Place[Place["OldGridania"] = 53] = "OldGridania";
    Place[Place["CentralShroud"] = 54] = "CentralShroud";
    Place[Place["EastShroud"] = 55] = "EastShroud";
    Place[Place["SouthShroud"] = 56] = "SouthShroud";
    Place[Place["NorthShroud"] = 57] = "NorthShroud";
    Place[Place["CoerthasCentralHighlands"] = 63] = "CoerthasCentralHighlands";
    Place[Place["MorDhona_2"] = 67] = "MorDhona_2";
    Place[Place["TheLostCityOfAmdapor"] = 125] = "TheLostCityOfAmdapor";
    Place[Place["AmdaporKeep"] = 128] = "AmdaporKeep";
    Place[Place["PharosSirius"] = 230] = "PharosSirius";
    Place[Place["OuterLaNoscea"] = 350] = "OuterLaNoscea";
    Place[Place["CommandRoom"] = 351] = "CommandRoom";
    Place[Place["BowlOfEmbers"] = 357] = "BowlOfEmbers";
    Place[Place["WolvesDenPier"] = 358] = "WolvesDenPier";
    Place[Place["TheNavel"] = 359] = "TheNavel";
    Place[Place["Thornmarch"] = 360] = "Thornmarch";
    Place[Place["TheHowlingEye"] = 361] = "TheHowlingEye";
    Place[Place["TheWeepingSaint"] = 392] = "TheWeepingSaint";
    Place[Place["StoneVigil"] = 401] = "StoneVigil";
    Place[Place["Snowcloak"] = 404] = "Snowcloak";
    Place[Place["StepsOfFaith"] = 406] = "StepsOfFaith";
    Place[Place["TheKeeperOfTheLake"] = 418] = "TheKeeperOfTheLake";
    Place[Place["Mist"] = 425] = "Mist";
    Place[Place["TheLavenderBeds"] = 426] = "TheLavenderBeds";
    Place[Place["TheGoblet"] = 427] = "TheGoblet";
    Place[Place["TheHowlingEye_2"] = 459] = "TheHowlingEye_2";
    Place[Place["RhotanoSea"] = 462] = "RhotanoSea";
    Place[Place["PortaDecumana"] = 477] = "PortaDecumana";
    Place[Place["SealRock"] = 496] = "SealRock";
    Place[Place["AbalathiasSpine"] = 497] = "AbalathiasSpine";
    Place[Place["Dravania"] = 498] = "Dravania";
    Place[Place["LimsaLominsa"] = 500] = "LimsaLominsa";
    Place[Place["Other"] = 501] = "Other";
    Place[Place["LaNoscea_2"] = 502] = "LaNoscea_2";
    Place[Place["Uldah"] = 504] = "Uldah";
    Place[Place["Thanalan_2"] = 505] = "Thanalan_2";
    Place[Place["Gridania"] = 506] = "Gridania";
    Place[Place["TheBlackShroud_2"] = 507] = "TheBlackShroud_2";
    Place[Place["Coerthas_2"] = 508] = "Coerthas_2";
    Place[Place["MorDhona_3"] = 509] = "MorDhona_3";
    Place[Place["AbalathiasSpine_2"] = 510] = "AbalathiasSpine_2";
    Place[Place["Dravania_2"] = 511] = "Dravania_2";
    Place[Place["Ishgard"] = 512] = "Ishgard";
    Place[Place["Kugane"] = 513] = "Kugane";
    Place[Place["GyrAbania"] = 514] = "GyrAbania";
    Place[Place["Othard"] = 515] = "Othard";
    Place[Place["TheCrystarium"] = 516] = "TheCrystarium";
    Place[Place["Eulmore"] = 517] = "Eulmore";
    Place[Place["Norvrandt"] = 518] = "Norvrandt";
    Place[Place["Unknown"] = 519] = "Unknown";
    Place[Place["DalamudsShadow"] = 1301] = "DalamudsShadow";
    Place[Place["TheOuterCoil"] = 1302] = "TheOuterCoil";
    Place[Place["TheWhorleater"] = 1334] = "TheWhorleater";
    Place[Place["TheStrikingTree"] = 1363] = "TheStrikingTree";
    Place[Place["CarteneauFlatsBorderlandRuins"] = 1374] = "CarteneauFlatsBorderlandRuins";
    Place[Place["HullbreakerIsle"] = 1377] = "HullbreakerIsle";
    Place[Place["AkhAfahAmphitheatre"] = 1399] = "AkhAfahAmphitheatre";
    Place[Place["TheBurningHeart"] = 1409] = "TheBurningHeart";
    Place[Place["TheDiadem"] = 1647] = "TheDiadem";
    Place[Place["TheFeastingGrounds"] = 1664] = "TheFeastingGrounds";
    Place[Place["TheFieldsOfGlory"] = 1740] = "TheFieldsOfGlory";
    Place[Place["TheWeepingCityOfMhach"] = 1742] = "TheWeepingCityOfMhach";
    Place[Place["Xelphatol"] = 1792] = "Xelphatol";
    Place[Place["BaelsarsWall"] = 1857] = "BaelsarsWall";
    Place[Place["DunScaith"] = 1868] = "DunScaith";
    Place[Place["TheEmphasisMiseryEmphasis"] = 1960] = "TheEmphasisMiseryEmphasis";
    Place[Place["TheDravanianForelands"] = 2000] = "TheDravanianForelands";
    Place[Place["TheDravanianHinterlands"] = 2001] = "TheDravanianHinterlands";
    Place[Place["TheChurningMists"] = 2002] = "TheChurningMists";
    Place[Place["SohmAl"] = 2031] = "SohmAl";
    Place[Place["TheAery"] = 2050] = "TheAery";
    Place[Place["ThokAstThok"] = 2081] = "ThokAstThok";
    Place[Place["Idyllshire"] = 2082] = "Idyllshire";
    Place[Place["TheSeaOfClouds"] = 2100] = "TheSeaOfClouds";
    Place[Place["AzysLla"] = 2101] = "AzysLla";
    Place[Place["TheLimitlessBlue"] = 2151] = "TheLimitlessBlue";
    Place[Place["SingularityReactor"] = 2178] = "SingularityReactor";
    Place[Place["VoidArk"] = 2181] = "VoidArk";
    Place[Place["CoerthasWesternHighlands"] = 2200] = "CoerthasWesternHighlands";
    Place[Place["DuskVigil"] = 2214] = "DuskVigil";
    Place[Place["ContainmentBayS1T7"] = 2256] = "ContainmentBayS1T7";
    Place[Place["ContainmentBayP1T6"] = 2265] = "ContainmentBayP1T6";
    Place[Place["ContainmentBayZ1T9"] = 2266] = "ContainmentBayZ1T9";
    Place[Place["TheInterdimensionalRift"] = 2284] = "TheInterdimensionalRift";
    Place[Place["TheBlessedTreasury"] = 2295] = "TheBlessedTreasury";
    Place[Place["TheSirensongSea"] = 2297] = "TheSirensongSea";
    Place[Place["Emanation"] = 2299] = "Emanation";
    Place[Place["Foundation"] = 2300] = "Foundation";
    Place[Place["ThePillars"] = 2301] = "ThePillars";
    Place[Place["TheVault"] = 2327] = "TheVault";
    Place[Place["TheJadeStoa"] = 2354] = "TheJadeStoa";
    Place[Place["DeltascapeV10"] = 2357] = "DeltascapeV10";
    Place[Place["DeltascapeV20"] = 2358] = "DeltascapeV20";
    Place[Place["DeltascapeV30"] = 2359] = "DeltascapeV30";
    Place[Place["DeltascapeV40"] = 2360] = "DeltascapeV40";
    Place[Place["GyrAbania_2"] = 2400] = "GyrAbania_2";
    Place[Place["Othard_2"] = 2401] = "Othard_2";
    Place[Place["Hingashi"] = 2402] = "Hingashi";
    Place[Place["RhalgrsReach"] = 2403] = "RhalgrsReach";
    Place[Place["Kugane_2"] = 2404] = "Kugane_2";
    Place[Place["Other_2"] = 2405] = "Other_2";
    Place[Place["TheFringes"] = 2406] = "TheFringes";
    Place[Place["ThePeaks"] = 2407] = "ThePeaks";
    Place[Place["TheLochs"] = 2408] = "TheLochs";
    Place[Place["TheRubySea"] = 2409] = "TheRubySea";
    Place[Place["Yanxia"] = 2410] = "Yanxia";
    Place[Place["TheAzimSteppe"] = 2411] = "TheAzimSteppe";
    Place[Place["Shirogane"] = 2412] = "Shirogane";
    Place[Place["BokairoInn"] = 2413] = "BokairoInn";
    Place[Place["EurekaAnemos"] = 2414] = "EurekaAnemos";
    Place[Place["Ultimacy"] = 2449] = "Ultimacy";
    Place[Place["EurekaPagos"] = 2462] = "EurekaPagos";
    Place[Place["HellsKier"] = 2496] = "HellsKier";
    Place[Place["TheWreathOfSnakes"] = 2510] = "TheWreathOfSnakes";
    Place[Place["EurekaPyros"] = 2530] = "EurekaPyros";
    Place[Place["EurekaHydatos"] = 2545] = "EurekaHydatos";
    Place[Place["TheRoyalAirshipLanding"] = 2708] = "TheRoyalAirshipLanding";
    Place[Place["Transparency"] = 2715] = "Transparency";
    Place[Place["SigmascapeV10"] = 2717] = "SigmascapeV10";
    Place[Place["SigmascapeV20"] = 2718] = "SigmascapeV20";
    Place[Place["SigmascapeV30"] = 2719] = "SigmascapeV30";
    Place[Place["SigmascapeV40"] = 2720] = "SigmascapeV40";
    Place[Place["PsiscapeV10"] = 2725] = "PsiscapeV10";
    Place[Place["TheInterdimensionalRift_2"] = 2727] = "TheInterdimensionalRift_2";
    Place[Place["PsiscapeV20"] = 2736] = "PsiscapeV20";
    Place[Place["TheInterdimensionalRift_3"] = 2737] = "TheInterdimensionalRift_3";
    Place[Place["TheHouseOfTheFierce"] = 2805] = "TheHouseOfTheFierce";
    Place[Place["TheDomanEnclave"] = 2813] = "TheDomanEnclave";
    Place[Place["TheBurn"] = 2851] = "TheBurn";
    Place[Place["Norvrandt_2"] = 2950] = "Norvrandt_2";
    Place[Place["TheCrystarium_2"] = 2951] = "TheCrystarium_2";
    Place[Place["Eulmore_2"] = 2952] = "Eulmore_2";
    Place[Place["Lakeland"] = 2953] = "Lakeland";
    Place[Place["Kholusia"] = 2954] = "Kholusia";
    Place[Place["AmhAraeng"] = 2955] = "AmhAraeng";
    Place[Place["IlMheg"] = 2956] = "IlMheg";
    Place[Place["TheRaktikaGreatwood"] = 2957] = "TheRaktikaGreatwood";
    Place[Place["TheTempest"] = 2958] = "TheTempest";
    Place[Place["Amaurot"] = 2985] = "Amaurot";
    Place[Place["MtGulg"] = 2997] = "MtGulg";
    Place[Place["TheQitanaRavel"] = 3018] = "TheQitanaRavel";
    Place[Place["HolminsterSwitch"] = 3050] = "HolminsterSwitch";
    Place[Place["MalikahsWell"] = 3139] = "MalikahsWell";
    Place[Place["TheNereusTrench"] = 3216] = "TheNereusTrench";
    Place[Place["AtlasPeak"] = 3217] = "AtlasPeak";
    Place[Place["TheDancingPlague"] = 3218] = "TheDancingPlague";
    Place[Place["TheCrownOfTheImmaculate"] = 3219] = "TheCrownOfTheImmaculate";
    Place[Place["TheDyingGasp"] = 3220] = "TheDyingGasp";
    Place[Place["ThePendantsPersonalSuite"] = 3222] = "ThePendantsPersonalSuite";
    Place[Place["TheConfessionalOfToupasaTheElder"] = 3228] = "TheConfessionalOfToupasaTheElder";
    Place[Place["OnsalHakair"] = 3378] = "OnsalHakair";
    Place[Place["LyheMheg"] = 3428] = "LyheMheg";
    Place[Place["TheFirmament"] = 3435] = "TheFirmament";
    Place[Place["CinderDrift"] = 3442] = "CinderDrift";
    Place[Place["TheHighSeas"] = 3443] = "TheHighSeas";
    Place[Place["AnamnesisAnyder"] = 3467] = "AnamnesisAnyder";
    Place[Place["TheEmphasisEndeavorEmphasis"] = 3477] = "TheEmphasisEndeavorEmphasis";
    Place[Place["CidsMemory"] = 3479] = "CidsMemory";
    Place[Place["TransmissionControl"] = 3486] = "TransmissionControl";
    Place[Place["GreatGlacier"] = 3487] = "GreatGlacier";
    Place[Place["TheHeroesGauntlet"] = 3511] = "TheHeroesGauntlet";
    Place[Place["BozjanSouthernFront"] = 3534] = "BozjanSouthernFront";
    Place[Place["TheSeatOfSacrifice"] = 3568] = "TheSeatOfSacrifice";
    Place[Place["Zadnor"] = 3662] = "Zadnor";
    Place[Place["TheDarkInside"] = 3684] = "TheDarkInside";
    Place[Place["TheMothercrystal"] = 3685] = "TheMothercrystal";
    Place[Place["TheFinalDay"] = 3686] = "TheFinalDay";
    Place[Place["TheNorthernEmpty"] = 3702] = "TheNorthernEmpty";
    Place[Place["Ilsabard"] = 3703] = "Ilsabard";
    Place[Place["TheSeaOfStars"] = 3704] = "TheSeaOfStars";
    Place[Place["TheWorldUnsundered"] = 3705] = "TheWorldUnsundered";
    Place[Place["OldSharlayan"] = 3706] = "OldSharlayan";
    Place[Place["RadzAtHan"] = 3707] = "RadzAtHan";
    Place[Place["Labyrinthos"] = 3708] = "Labyrinthos";
    Place[Place["Thavnair"] = 3709] = "Thavnair";
    Place[Place["Garlemald"] = 3710] = "Garlemald";
    Place[Place["MareLamentorum"] = 3711] = "MareLamentorum";
    Place[Place["UltimaThule"] = 3712] = "UltimaThule";
    Place[Place["Elpis"] = 3713] = "Elpis";
    Place[Place["Labyrinthos_2"] = 3740] = "Labyrinthos_2";
    Place[Place["Thavnair_2"] = 3741] = "Thavnair_2";
    Place[Place["TheSeaOfStars_2"] = 3742] = "TheSeaOfStars_2";
    Place[Place["TheWorldUnsundered_2"] = 3743] = "TheWorldUnsundered_2";
    Place[Place["OldSharlayan_2"] = 3744] = "OldSharlayan_2";
    Place[Place["RadzAtHan_2"] = 3745] = "RadzAtHan_2";
    Place[Place["TheGatesOfPandMonium"] = 3769] = "TheGatesOfPandMonium";
    Place[Place["TheStigmaDreamscape"] = 3783] = "TheStigmaDreamscape";
    Place[Place["TheFervidLimbo"] = 3797] = "TheFervidLimbo";
    Place[Place["TheStagnantLimbo"] = 3798] = "TheStagnantLimbo";
    Place[Place["MainHall"] = 3817] = "MainHall";
    Place[Place["Andron"] = 3818] = "Andron";
    Place[Place["MagnaGlacies"] = 3924] = "MagnaGlacies";
    Place[Place["Vanaspati"] = 4015] = "Vanaspati";
    Place[Place["BeyondTheStars"] = 4021] = "BeyondTheStars";
    Place[Place["TheOmphalos"] = 4031] = "TheOmphalos";
    Place[Place["RestrictedArchives"] = 4034] = "RestrictedArchives";
    Place[Place["ZerosDomain"] = 4038] = "ZerosDomain";
    Place[Place["MeghadutaGuestChambers"] = 4039] = "MeghadutaGuestChambers";
    Place[Place["UnnamedIsland"] = 4043] = "UnnamedIsland";
    Place[Place["StormsCrown"] = 4045] = "StormsCrown";
    Place[Place["TheDeadEnds"] = 4100] = "TheDeadEnds";
    Place[Place["TheTowerOfBabil"] = 4118] = "TheTowerOfBabil";
    Place[Place["TheSanguineLimbo"] = 4135] = "TheSanguineLimbo";
    Place[Place["Idyllshire_2"] = 4136] = "Idyllshire_2";
    Place[Place["RhalgrsReach_2"] = 4137] = "RhalgrsReach_2";
    Place[Place["Garlemald_2"] = 4138] = "Garlemald_2";
    Place[Place["Empyreum"] = 4139] = "Empyreum";
    Place[Place["Aglaia"] = 4167] = "Aglaia";
    Place[Place["TheFellCourtOfTroia"] = 4180] = "TheFellCourtOfTroia";
    Place[Place["SeatOfTheForemost"] = 4185] = "SeatOfTheForemost";
    Place[Place["ThePestilentPurgatory"] = 4196] = "ThePestilentPurgatory";
    Place[Place["StormsCrown_2"] = 4197] = "StormsCrown_2";
    Place[Place["TheHollowPurgatory"] = 4198] = "TheHollowPurgatory";
    Place[Place["TheCausticPurgatory"] = 4249] = "TheCausticPurgatory";
    Place[Place["StygianInsenescenceCells"] = 4250] = "StygianInsenescenceCells";
})(Place || (Place = {}));
var Weather;
(function(Weather) {
    Weather[Weather["DEFAULT"] = 0] = "DEFAULT";
    Weather[Weather["ClearSkies"] = 1] = "ClearSkies";
    Weather[Weather["FairSkies"] = 2] = "FairSkies";
    Weather[Weather["Clouds"] = 3] = "Clouds";
    Weather[Weather["Fog"] = 4] = "Fog";
    Weather[Weather["Wind"] = 5] = "Wind";
    Weather[Weather["Gales"] = 6] = "Gales";
    Weather[Weather["Rain"] = 7] = "Rain";
    Weather[Weather["Showers"] = 8] = "Showers";
    Weather[Weather["Thunder"] = 9] = "Thunder";
    Weather[Weather["Thunderstorms"] = 10] = "Thunderstorms";
    Weather[Weather["DustStorms"] = 11] = "DustStorms";
    Weather[Weather["Sandstorms"] = 12] = "Sandstorms";
    Weather[Weather["HotSpells"] = 13] = "HotSpells";
    Weather[Weather["HeatWaves"] = 14] = "HeatWaves";
    Weather[Weather["Snow"] = 15] = "Snow";
    Weather[Weather["Blizzards"] = 16] = "Blizzards";
    Weather[Weather["Gloom"] = 17] = "Gloom";
    Weather[Weather["Auroras"] = 18] = "Auroras";
    Weather[Weather["Darkness"] = 19] = "Darkness";
    Weather[Weather["Tension"] = 20] = "Tension";
    Weather[Weather["Clouds_2"] = 21] = "Clouds_2";
    Weather[Weather["StormClouds"] = 22] = "StormClouds";
    Weather[Weather["RoughSeas"] = 23] = "RoughSeas";
    Weather[Weather["RoughSeas_2"] = 24] = "RoughSeas_2";
    Weather[Weather["Louring"] = 25] = "Louring";
    Weather[Weather["HeatWaves_2"] = 26] = "HeatWaves_2";
    Weather[Weather["Gloom_2"] = 27] = "Gloom_2";
    Weather[Weather["Gales_2"] = 28] = "Gales_2";
    Weather[Weather["Eruptions"] = 29] = "Eruptions";
    Weather[Weather["FairSkies_2"] = 30] = "FairSkies_2";
    Weather[Weather["FairSkies_3"] = 31] = "FairSkies_3";
    Weather[Weather["FairSkies_4"] = 32] = "FairSkies_4";
    Weather[Weather["FairSkies_5"] = 33] = "FairSkies_5";
    Weather[Weather["FairSkies_6"] = 34] = "FairSkies_6";
    Weather[Weather["Irradiance"] = 35] = "Irradiance";
    Weather[Weather["CoreRadiation"] = 36] = "CoreRadiation";
    Weather[Weather["CoreRadiation_2"] = 37] = "CoreRadiation_2";
    Weather[Weather["CoreRadiation_3"] = 38] = "CoreRadiation_3";
    Weather[Weather["CoreRadiation_4"] = 39] = "CoreRadiation_4";
    Weather[Weather["ShelfClouds"] = 40] = "ShelfClouds";
    Weather[Weather["ShelfClouds_2"] = 41] = "ShelfClouds_2";
    Weather[Weather["ShelfClouds_3"] = 42] = "ShelfClouds_3";
    Weather[Weather["ShelfClouds_4"] = 43] = "ShelfClouds_4";
    Weather[Weather["Oppression"] = 44] = "Oppression";
    Weather[Weather["Oppression_2"] = 45] = "Oppression_2";
    Weather[Weather["Oppression_3"] = 46] = "Oppression_3";
    Weather[Weather["Oppression_4"] = 47] = "Oppression_4";
    Weather[Weather["Oppression_5"] = 48] = "Oppression_5";
    Weather[Weather["UmbralWind"] = 49] = "UmbralWind";
    Weather[Weather["UmbralStatic"] = 50] = "UmbralStatic";
    Weather[Weather["Smoke"] = 51] = "Smoke";
    Weather[Weather["FairSkies_7"] = 52] = "FairSkies_7";
    Weather[Weather["RoyalLevin"] = 53] = "RoyalLevin";
    Weather[Weather["Hyperelectricity"] = 54] = "Hyperelectricity";
    Weather[Weather["RoyalLevin_2"] = 55] = "RoyalLevin_2";
    Weather[Weather["Oppression_6"] = 56] = "Oppression_6";
    Weather[Weather["Thunder_2"] = 57] = "Thunder_2";
    Weather[Weather["Thunder_3"] = 58] = "Thunder_3";
    Weather[Weather["CutScene"] = 59] = "CutScene";
    Weather[Weather["Multiplicity"] = 60] = "Multiplicity";
    Weather[Weather["Multiplicity_2"] = 61] = "Multiplicity_2";
    Weather[Weather["Rain_2"] = 62] = "Rain_2";
    Weather[Weather["FairSkies_8"] = 63] = "FairSkies_8";
    Weather[Weather["Rain_3"] = 64] = "Rain_3";
    Weather[Weather["FairSkies_9"] = 65] = "FairSkies_9";
    Weather[Weather["Dragonstorms"] = 66] = "Dragonstorms";
    Weather[Weather["Dragonstorms_2"] = 67] = "Dragonstorms_2";
    Weather[Weather["Subterrain"] = 68] = "Subterrain";
    Weather[Weather["Concordance"] = 69] = "Concordance";
    Weather[Weather["Concordance_2"] = 70] = "Concordance_2";
    Weather[Weather["BeyondTime"] = 71] = "BeyondTime";
    Weather[Weather["BeyondTime_2"] = 72] = "BeyondTime_2";
    Weather[Weather["BeyondTime_3"] = 73] = "BeyondTime_3";
    Weather[Weather["DemonicInfinity"] = 74] = "DemonicInfinity";
    Weather[Weather["DemonicInfinity_2"] = 75] = "DemonicInfinity_2";
    Weather[Weather["DemonicInfinity_3"] = 76] = "DemonicInfinity_3";
    Weather[Weather["DimensionalDisruption"] = 77] = "DimensionalDisruption";
    Weather[Weather["DimensionalDisruption_2"] = 78] = "DimensionalDisruption_2";
    Weather[Weather["DimensionalDisruption_3"] = 79] = "DimensionalDisruption_3";
    Weather[Weather["Revelstorms"] = 80] = "Revelstorms";
    Weather[Weather["Revelstorms_2"] = 81] = "Revelstorms_2";
    Weather[Weather["EternalBliss"] = 82] = "EternalBliss";
    Weather[Weather["EternalBliss_2"] = 83] = "EternalBliss_2";
    Weather[Weather["Wyrmstorms"] = 84] = "Wyrmstorms";
    Weather[Weather["Wyrmstorms_2"] = 85] = "Wyrmstorms_2";
    Weather[Weather["Revelstorms_3"] = 86] = "Revelstorms_3";
    Weather[Weather["Quicklevin"] = 87] = "Quicklevin";
    Weather[Weather["Thunder_4"] = 88] = "Thunder_4";
    Weather[Weather["DimensionalDisruption_4"] = 89] = "DimensionalDisruption_4";
    Weather[Weather["FairSkies_10"] = 90] = "FairSkies_10";
    Weather[Weather["ClearSkies_2"] = 91] = "ClearSkies_2";
    Weather[Weather["WhiteCyclones"] = 92] = "WhiteCyclones";
    Weather[Weather["WhiteCyclones_2"] = 93] = "WhiteCyclones_2";
    Weather[Weather["WhiteCyclones_3"] = 94] = "WhiteCyclones_3";
    Weather[Weather["Ultimania"] = 95] = "Ultimania";
    Weather[Weather["WhiteCyclones_4"] = 96] = "WhiteCyclones_4";
    Weather[Weather["Moonlight"] = 97] = "Moonlight";
    Weather[Weather["Moonlight_2"] = 98] = "Moonlight_2";
    Weather[Weather["Moonlight_3"] = 99] = "Moonlight_3";
    Weather[Weather["Moonlight_4"] = 100] = "Moonlight_4";
    Weather[Weather["RedMoon"] = 101] = "RedMoon";
    Weather[Weather["Scarlet"] = 102] = "Scarlet";
    Weather[Weather["Scarlet_2"] = 103] = "Scarlet_2";
    Weather[Weather["Scarlet_3"] = 104] = "Scarlet_3";
    Weather[Weather["FairSkies_11"] = 105] = "FairSkies_11";
    Weather[Weather["FairSkies_12"] = 106] = "FairSkies_12";
    Weather[Weather["FairSkies_13"] = 107] = "FairSkies_13";
    Weather[Weather["FairSkies_14"] = 108] = "FairSkies_14";
    Weather[Weather["Flames"] = 109] = "Flames";
    Weather[Weather["Tsunamis"] = 110] = "Tsunamis";
    Weather[Weather["Cyclones"] = 111] = "Cyclones";
    Weather[Weather["Geostorms"] = 112] = "Geostorms";
    Weather[Weather["TrueBlue"] = 113] = "TrueBlue";
    Weather[Weather["TrueBlue_2"] = 114] = "TrueBlue_2";
    Weather[Weather["TrueBlue_3"] = 115] = "TrueBlue_3";
    Weather[Weather["UmbralTurbulence"] = 116] = "UmbralTurbulence";
    Weather[Weather["TrueBlue_4"] = 117] = "TrueBlue_4";
    Weather[Weather["EverlastingLight"] = 118] = "EverlastingLight";
    Weather[Weather["Gales_3"] = 119] = "Gales_3";
    Weather[Weather["Termination"] = 120] = "Termination";
    Weather[Weather["Termination_2"] = 121] = "Termination_2";
    Weather[Weather["Dreams"] = 122] = "Dreams";
    Weather[Weather["Dreams_2"] = 123] = "Dreams_2";
    Weather[Weather["Dreams_3"] = 124] = "Dreams_3";
    Weather[Weather["Brilliance"] = 125] = "Brilliance";
    Weather[Weather["Brilliance_2"] = 126] = "Brilliance_2";
    Weather[Weather["Termination_3"] = 127] = "Termination_3";
    Weather[Weather["Termination_4"] = 128] = "Termination_4";
    Weather[Weather["EverlastingLight_2"] = 129] = "EverlastingLight_2";
    Weather[Weather["Eruptions_2"] = 130] = "Eruptions_2";
    Weather[Weather["Termination_5"] = 131] = "Termination_5";
    Weather[Weather["FairSkies_15"] = 132] = "FairSkies_15";
    Weather[Weather["UmbralFlare"] = 133] = "UmbralFlare";
    Weather[Weather["UmbralDuststorm"] = 134] = "UmbralDuststorm";
    Weather[Weather["UmbralLevin"] = 135] = "UmbralLevin";
    Weather[Weather["UmbralTempest"] = 136] = "UmbralTempest";
    Weather[Weather["Starshower"] = 137] = "Starshower";
    Weather[Weather["Delirium"] = 138] = "Delirium";
    Weather[Weather["Clouds_3"] = 139] = "Clouds_3";
    Weather[Weather["Clouds_4"] = 140] = "Clouds_4";
    Weather[Weather["Irradiance_2"] = 141] = "Irradiance_2";
    Weather[Weather["Irradiance_3"] = 142] = "Irradiance_3";
    Weather[Weather["StormClouds_2"] = 143] = "StormClouds_2";
    Weather[Weather["Firestorm"] = 144] = "Firestorm";
    Weather[Weather["SpectralCurrent"] = 145] = "SpectralCurrent";
    Weather[Weather["Unknown"] = 146] = "Unknown";
    Weather[Weather["Climactic"] = 147] = "Climactic";
    Weather[Weather["MoonDust"] = 148] = "MoonDust";
    Weather[Weather["AstromagneticStorm"] = 149] = "AstromagneticStorm";
    Weather[Weather["Apocalypse"] = 150] = "Apocalypse";
    Weather[Weather["Polarization"] = 151] = "Polarization";
    Weather[Weather["Polarization_2"] = 152] = "Polarization_2";
    Weather[Weather["Polarization_3"] = 153] = "Polarization_3";
    Weather[Weather["Polarization_4"] = 154] = "Polarization_4";
    Weather[Weather["Polarization_5"] = 155] = "Polarization_5";
    Weather[Weather["Projection"] = 156] = "Projection";
    Weather[Weather["PandMonium"] = 157] = "PandMonium";
    Weather[Weather["PandMonium_2"] = 158] = "PandMonium_2";
    Weather[Weather["PandMonium_3"] = 159] = "PandMonium_3";
    Weather[Weather["Ultimatum"] = 160] = "Ultimatum";
    Weather[Weather["Inevitability"] = 161] = "Inevitability";
    Weather[Weather["Transcendence"] = 162] = "Transcendence";
    Weather[Weather["Transcendence_2"] = 163] = "Transcendence_2";
    Weather[Weather["Transcendence_3"] = 164] = "Transcendence_3";
    Weather[Weather["Transcendence_4"] = 165] = "Transcendence_4";
    Weather[Weather["Transcendence_5"] = 166] = "Transcendence_5";
    Weather[Weather["Transcendence_6"] = 167] = "Transcendence_6";
    Weather[Weather["Transcendence_7"] = 168] = "Transcendence_7";
    Weather[Weather["Transcendence_8"] = 169] = "Transcendence_8";
    Weather[Weather["Dragonstorms_3"] = 170] = "Dragonstorms_3";
    Weather[Weather["Vacuity"] = 171] = "Vacuity";
    Weather[Weather["Vacuity_2"] = 172] = "Vacuity_2";
    Weather[Weather["Vacuity_3"] = 173] = "Vacuity_3";
})(Weather || (Weather = {}));


/***/ }),

/***/ 9465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ translate)
/* harmony export */ });
// Keep locale as `string` because of i18n.language
function translate(locale, obj, ...keys) {
    for (const key of keys){
        const translation = obj[key][locale];
        if (translation != null && translation !== "") {
            return translation;
        }
    }
    // Fallback to 'en'
    if (locale !== "en") {
        return translate("en", obj, ...keys);
    }
    return `{${keys.join(",")}}`;
};


/***/ }),

/***/ 8473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LW": () => (/* binding */ timeUntil),
/* harmony export */   "Qs": () => (/* binding */ formatTimeUtc),
/* harmony export */   "U9": () => (/* binding */ toTimeString),
/* harmony export */   "jC": () => (/* binding */ upperFirst),
/* harmony export */   "mr": () => (/* binding */ formatTime)
/* harmony export */ });
/* unused harmony export paddedZero */
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_locale_de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5791);
/* harmony import */ var date_fns_locale_de__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_de__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4913);
/* harmony import */ var date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_locale_ja__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3101);
/* harmony import */ var date_fns_locale_ja__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_ja__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_locale_zh_CN__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2608);
/* harmony import */ var date_fns_locale_zh_CN__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_zh_CN__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(129);
/* harmony import */ var date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_5__);






const DATE_LOCALES = {
    en: undefined,
    de: (date_fns_locale_de__WEBPACK_IMPORTED_MODULE_1___default()),
    fr: (date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_2___default()),
    ja: (date_fns_locale_ja__WEBPACK_IMPORTED_MODULE_3___default()),
    cn: (date_fns_locale_zh_CN__WEBPACK_IMPORTED_MODULE_4___default()),
    ko: (date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_5___default())
};
function paddedZero(n) {
    return n > 9 ? String(n) : `0${n}`;
}
function formatTime(date) {
    return `${paddedZero(date.getHours())}:${paddedZero(date.getMinutes())}`;
}
function formatTimeUtc(date) {
    return `${paddedZero(date.getUTCHours())}:${paddedZero(date.getUTCMinutes())}`;
}
function toTimeString(now, options = {}) {
    const { padded =false , locale ="en"  } = options;
    const timeString = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(now, locale === "en" ? "hh:mm a" : "HH:mm", {
        locale: DATE_LOCALES[locale]
    });
    return timeString.replace(/^0/, padded ? "\u2007" : "");
}
function timeUntil(now, then, options = {}) {
    const { full =false , locale ="en"  } = options;
    const diffString = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.formatDistanceStrict)(then, now, {
        addSuffix: true,
        locale: DATE_LOCALES[locale]
    });
    if (full) {
        return `${diffString} (${(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(then, locale === "en" ? "h:mm a" : "H:mm", {
            locale: DATE_LOCALES[locale]
        })})`;
    } else {
        return diffString;
    }
}
function upperFirst(string) {
    return string[0].toUpperCase() + string.slice(1);
}


/***/ }),

/***/ 9247:
/***/ ((module) => {

module.exports = JSON.parse('{"0":{"id":0,"icon":0,"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":"●설명용 날씨"},"description":{"en":"","de":"","fr":"","ja":"","cn":"","ko":"●하겠습니다"}},"1":{"id":1,"icon":60201,"name":{"en":"Clear Skies","de":"Klar","fr":"Dégagé","ja":"快晴","cn":"碧空","ko":"쾌청"},"description":{"en":"clear","de":"klar","fr":"radieux","ja":"","cn":"","ko":"쾌청하겠습니다"}},"2":{"id":2,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"ensoleillé","ja":"","cn":"","ko":"맑겠습니다"}},"3":{"id":3,"icon":60203,"name":{"en":"Clouds","de":"Wolkig","fr":"Couvert","ja":"曇り","cn":"阴云","ko":"흐림"},"description":{"en":"overcast","de":"wolkig","fr":"couvert","ja":"","cn":"","ko":"흐리겠습니다"}},"4":{"id":4,"icon":60204,"name":{"en":"Fog","de":"Neblig","fr":"Brouillard","ja":"霧","cn":"薄雾","ko":"안개"},"description":{"en":"foggy","de":"nebelig","fr":"brumeux","ja":"","cn":"","ko":"안개가 끼겠습니다"}},"5":{"id":5,"icon":60205,"name":{"en":"Wind","de":"Windig","fr":"Vent","ja":"風","cn":"微风","ko":"바람"},"description":{"en":"windy","de":"windig","fr":"venteux","ja":"","cn":"","ko":"바람이 불겠습니다"}},"6":{"id":6,"icon":60206,"name":{"en":"Gales","de":"Stürmisch","fr":"Vents violents","ja":"暴風","cn":"强风","ko":"폭풍"},"description":{"en":"gusty","de":"stürmisch","fr":"très venteux","ja":"","cn":"","ko":"폭풍이 불겠습니다"}},"7":{"id":7,"icon":60207,"name":{"en":"Rain","de":"Regnerisch","fr":"Pluie","ja":"雨","cn":"小雨","ko":"비"},"description":{"en":"rainy","de":"regnerisch","fr":"pluvieux","ja":"","cn":"","ko":"비가 내리겠습니다"}},"8":{"id":8,"icon":60208,"name":{"en":"Showers","de":"Wolkenbruch","fr":"Pluie torrentielle","ja":"暴雨","cn":"暴雨","ko":"폭우"},"description":{"en":"showery","de":"wolkenbruchartig","fr":"très pluvieux","ja":"","cn":"","ko":"폭우가 쏟아지겠습니다"}},"9":{"id":9,"icon":60209,"name":{"en":"Thunder","de":"Gewittrig","fr":"Orages","ja":"雷","cn":"打雷","ko":"번개"},"description":{"en":"thundery","de":"gewittrig","fr":"orageux","ja":"","cn":"","ko":"번개가 치겠습니다"}},"10":{"id":10,"icon":60210,"name":{"en":"Thunderstorms","de":"Gewitter","fr":"Orages violents","ja":"雷雨","cn":"雷雨","ko":"뇌우"},"description":{"en":"stormy","de":"gewittrig","fr":"très orageux","ja":"","cn":"","ko":"뇌우가 퍼붓겠습니다"}},"11":{"id":11,"icon":60211,"name":{"en":"Dust Storms","de":"Staubig","fr":"Tempêtes de poussière","ja":"砂塵","cn":"扬沙","ko":"모래먼지"},"description":{"en":"dusty","de":"staubig","fr":"tempêteux","ja":"","cn":"","ko":"모래먼지가 일겠습니다"}},"12":{"id":12,"icon":60212,"name":{"en":"Sandstorms","de":"Sandsturm","fr":"Tempêtes de sable","ja":"砂嵐","cn":"沙尘暴","ko":"모래폭풍"},"description":{"en":"sandy","de":"sandstürmisch","fr":"tempêteux","ja":"","cn":"","ko":"모래폭풍이 불겠습니다"}},"13":{"id":13,"icon":60213,"name":{"en":"Hot Spells","de":"Heiß","fr":"Chaud","ja":"熱波","cn":"高温","ko":"열파"},"description":{"en":"hot","de":"heiß","fr":"chaud","ja":"","cn":"","ko":"열파가 발생하겠습니다"}},"14":{"id":14,"icon":60214,"name":{"en":"Heat Waves","de":"Gluthitze","fr":"Torride","ja":"灼熱波","cn":"热浪","ko":"작열파"},"description":{"en":"blistering","de":"glutheiß","fr":"torride","ja":"","cn":"","ko":"작열파가 발생하겠습니다"}},"15":{"id":15,"icon":60215,"name":{"en":"Snow","de":"Schnee","fr":"Neige","ja":"雪","cn":"小雪","ko":"눈"},"description":{"en":"snowy","de":"verschneit","fr":"neigeux","ja":"","cn":"","ko":"눈이 내리겠습니다"}},"16":{"id":16,"icon":60216,"name":{"en":"Blizzards","de":"Schneesturm","fr":"Blizzard","ja":"吹雪","cn":"暴雪","ko":"눈보라"},"description":{"en":"blizzardy","de":"schneestürmisch","fr":"au blizzard","ja":"","cn":"","ko":"눈보라가 치겠습니다"}},"17":{"id":17,"icon":60218,"name":{"en":"Gloom","de":"Unheimlich","fr":"Nébuleux","ja":"妖霧","cn":"妖雾","ko":"요마의 안개"},"description":{"en":"gloomy","de":"unheimlich","fr":"nébuleux","ja":"","cn":"","ko":"요마의 안개가 끼겠습니다"}},"18":{"id":18,"icon":60217,"name":{"en":"Auroras","de":"Aurora","fr":"Aurore","ja":"オーロラ","cn":"极光","ko":"오로라"},"description":{"en":"experiencing auroral activity","de":"aurorenhaft","fr":"auroral","ja":"","cn":"","ko":"오로라가 나타나겠습니다"}},"19":{"id":19,"icon":60251,"name":{"en":"Darkness","de":"Dunkel","fr":"Ténèbres","ja":"闇","cn":"黑暗","ko":"어둠"},"description":{"en":"dark","de":"dunkel","fr":"ténébreux","ja":"","cn":"","ko":"어둡겠습니다"}},"20":{"id":20,"icon":60255,"name":{"en":"Tension","de":"Düsternis","fr":"Désespérance","ja":"闘気","cn":"绝命","ko":"투기"},"description":{"en":"crackling with tension","de":"düster","fr":"désespérant","ja":"","cn":"","ko":"투기를 띠겠습니다"}},"21":{"id":21,"icon":60203,"name":{"en":"Clouds","de":"Wolkig","fr":"Couvert","ja":"曇り","cn":"阴云","ko":"흐림"},"description":{"en":"overcast","de":"wolkig","fr":"couvert","ja":"","cn":"","ko":"흐리겠습니다"}},"22":{"id":22,"icon":60259,"name":{"en":"Storm Clouds","de":"Wetterleuchten","fr":"Orageux","ja":"雷雲","cn":"雷云","ko":"뇌운"},"description":{"en":"threatened by rain","de":"wetterleuchtend","fr":"menaçant","ja":"","cn":"","ko":"뇌운이 발생하겠습니다"}},"23":{"id":23,"icon":60258,"name":{"en":"Rough Seas","de":"Tosend","fr":"Houle","ja":"時化","cn":"暴风雨","ko":"파랑"},"description":{"en":"experiencing rough seas","de":"tosend","fr":"houleux","ja":"","cn":"","ko":"파랑이 일겠습니다"}},"24":{"id":24,"icon":60258,"name":{"en":"Rough Seas","de":"Tosend","fr":"Houle","ja":"時化","cn":"暴风雨","ko":"파랑"},"description":{"en":"experiencing rough seas","de":"tosend","fr":"houleux","ja":"","cn":"","ko":"파랑이 일겠습니다"}},"25":{"id":25,"icon":60257,"name":{"en":"Louring","de":"Finster","fr":"Nuageux","ja":"曇天","cn":"阴沉","ko":"먹구름"},"description":{"en":"loury","de":"finster","fr":"nuageux","ja":"","cn":"","ko":"먹구름이 끼겠습니다"}},"26":{"id":26,"icon":60252,"name":{"en":"Heat Waves","de":"Gluthitze","fr":"Torride","ja":"灼熱波","cn":"热浪","ko":"작열파"},"description":{"en":"blistering","de":"glutheiß","fr":"torride","ja":"","cn":"","ko":"작열파가 발생하겠습니다"}},"27":{"id":27,"icon":60256,"name":{"en":"Gloom","de":"Unheimlich","fr":"Nébuleux","ja":"妖霧","cn":"妖雾","ko":"요마의 안개"},"description":{"en":"gloomy","de":"unheimlich","fr":"nébuleux","ja":"","cn":"","ko":"요마의 안개가 끼겠습니다"}},"28":{"id":28,"icon":60253,"name":{"en":"Gales","de":"Stürmisch","fr":"Vents violents","ja":"暴風","cn":"暴风","ko":"폭풍"},"description":{"en":"gusty","de":"stürmisch","fr":"déchaîné avec de violentes rafales","ja":"","cn":"","ko":"폭풍이 불겠습니다"}},"29":{"id":29,"icon":60254,"name":{"en":"Eruptions","de":"Rauchschwaden","fr":"Éruptions","ja":"噴煙","cn":"烟雾","ko":"분화"},"description":{"en":"erupting","de":"rauchig","fr":"éruptif","ja":"","cn":"","ko":"화산이 분화하겠습니다"}},"30":{"id":30,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"clair","ja":"","cn":"","ko":"맑겠습니다"}},"31":{"id":31,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"clair","ja":"","cn":"","ko":"맑겠습니다"}},"32":{"id":32,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"clair","ja":"","cn":"","ko":"맑겠습니다"}},"33":{"id":33,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"clair","ja":"","cn":"","ko":"맑겠습니다"}},"34":{"id":34,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"clair","ja":"","cn":"","ko":"맑겠습니다"}},"35":{"id":35,"icon":60260,"name":{"en":"Irradiance","de":"Blendend","fr":"Rayonnement","ja":"極光","cn":"极光","ko":"극광"},"description":{"en":"irradiant","de":"blendend","fr":"rayonnant","ja":"","cn":"","ko":"극광이 나타나겠습니다"}},"36":{"id":36,"icon":60261,"name":{"en":"Core Radiation","de":"Kernstrahlung","fr":"Radiations du Cœur","ja":"龍核","cn":"辉核","ko":"용핵"},"description":{"en":"radioactive","de":"radioaktiv","fr":"radioactif","ja":"","cn":"","ko":"용핵이 진동하겠습니다"}},"37":{"id":37,"icon":60261,"name":{"en":"Core Radiation","de":"Kernstrahlung","fr":"Radiations du Cœur","ja":"龍核","cn":"辉核","ko":"용핵"},"description":{"en":"radioactive","de":"radioaktiv","fr":"radioactif","ja":"","cn":"","ko":"용핵이 진동하겠습니다"}},"38":{"id":38,"icon":60261,"name":{"en":"Core Radiation","de":"Kernstrahlung","fr":"Radiations du Cœur","ja":"龍核","cn":"辉核","ko":"용핵"},"description":{"en":"radioactive","de":"radioaktiv","fr":"radioactif","ja":"","cn":"","ko":"용핵이 진동하겠습니다"}},"39":{"id":39,"icon":60261,"name":{"en":"Core Radiation","de":"Kernstrahlung","fr":"Radiations du Cœur","ja":"龍核","cn":"辉核","ko":"용핵"},"description":{"en":"radioactive","de":"radioaktiv","fr":"radioactif","ja":"","cn":"","ko":"용핵이 진동하겠습니다"}},"40":{"id":40,"icon":60262,"name":{"en":"Shelf Clouds","de":"Wolkenschleier","fr":"Amas nuageux","ja":"群雲","cn":"滩云","ko":"떼구름"},"description":{"en":"unnaturally cloudy","de":"unnatürlich wolkig","fr":"anormalement couvert","ja":"","cn":"","ko":"떼구름이 끼겠습니다"}},"41":{"id":41,"icon":60262,"name":{"en":"Shelf Clouds","de":"Wolkenschleier","fr":"Amas nuageux","ja":"群雲","cn":"滩云","ko":"떼구름"},"description":{"en":"unnaturally cloudy","de":"unnatürlich wolkig","fr":"anormalement couvert","ja":"","cn":"","ko":"떼구름이 끼겠습니다"}},"42":{"id":42,"icon":60262,"name":{"en":"Shelf Clouds","de":"Wolkenschleier","fr":"Amas nuageux","ja":"群雲","cn":"滩云","ko":"떼구름"},"description":{"en":"unnaturally cloudy","de":"unnatürlich wolkig","fr":"anormalement couvert","ja":"","cn":"","ko":"떼구름이 끼겠습니다"}},"43":{"id":43,"icon":60262,"name":{"en":"Shelf Clouds","de":"Wolkenschleier","fr":"Amas nuageux","ja":"群雲","cn":"滩云","ko":"떼구름"},"description":{"en":"unnaturally cloudy","de":"unnatürlich wolkig","fr":"anormalement couvert","ja":"","cn":"","ko":"떼구름이 끼겠습니다"}},"44":{"id":44,"icon":60264,"name":{"en":"Oppression","de":"Bedrückend","fr":"Oppression","ja":"神意","cn":"神意","ko":"섭리"},"description":{"en":"oppressive","de":"bedrückend","fr":"oppressant","ja":"","cn":"","ko":"섭리를 비추겠습니다"}},"45":{"id":45,"icon":60264,"name":{"en":"Oppression","de":"Bedrückend","fr":"Oppression","ja":"神意","cn":"神意","ko":"섭리"},"description":{"en":"oppressive","de":"bedrückend","fr":"oppressant","ja":"","cn":"","ko":"섭리를 비추겠습니다"}},"46":{"id":46,"icon":60264,"name":{"en":"Oppression","de":"Bedrückend","fr":"Oppression","ja":"神意","cn":"神意","ko":"섭리"},"description":{"en":"oppressive","de":"bedrückend","fr":"oppressant","ja":"","cn":"","ko":"섭리를 비추겠습니다"}},"47":{"id":47,"icon":60264,"name":{"en":"Oppression","de":"Bedrückend","fr":"Oppression","ja":"神意","cn":"神意","ko":"섭리"},"description":{"en":"oppressive","de":"bedrückend","fr":"oppressant","ja":"","cn":"","ko":"섭리를 비추겠습니다"}},"48":{"id":48,"icon":60264,"name":{"en":"Oppression","de":"Bedrückend","fr":"Oppression","ja":"神意","cn":"神意","ko":"섭리"},"description":{"en":"oppressive","de":"bedrückend","fr":"oppressant","ja":"","cn":"","ko":"섭리를 비추겠습니다"}},"49":{"id":49,"icon":60219,"name":{"en":"Umbral Wind","de":"Schattenwind","fr":"Vent ombral","ja":"霊風","cn":"灵风","ko":"그림자바람"},"description":{"en":"experiencing umbral wind","de":"schattenwindig","fr":"perturbé par des vents ombraux","ja":"","cn":"","ko":"그림자바람이 불겠습니다"}},"50":{"id":50,"icon":60220,"name":{"en":"Umbral Static","de":"Schattengewitter","fr":"Charges ombrales","ja":"放電","cn":"灵电","ko":"방전"},"description":{"en":"experiencing umbral static","de":"schattengewittrig","fr":"perturbé par des charges ombrales","ja":"","cn":"","ko":"방전이 일어나겠습니다"}},"51":{"id":51,"icon":60263,"name":{"en":"Smoke","de":"Qualm","fr":"Fumées","ja":"煙霧","cn":"烟武","ko":"연무"},"description":{"en":"smoky","de":"qualmig","fr":"fumeux","ja":"","cn":"","ko":"연무가 끼겠습니다"}},"52":{"id":52,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"clair","ja":"","cn":"","ko":"맑겠습니다"}},"53":{"id":53,"icon":60226,"name":{"en":"Royal Levin","de":"Königsgewitter","fr":"Éclairs royaux","ja":"獣雷","cn":"兽雷","ko":"야수번개"},"description":{"en":"experiencing royal levin","de":"königlich gewittrig","fr":"perturbé par des éclairs royaux","ja":"","cn":"","ko":"야수번개가 치겠습니다"}},"54":{"id":54,"icon":60227,"name":{"en":"Hyperelectricity","de":"Hochspannung","fr":"Hyperélectricité","ja":"雷波","cn":"雷波","ko":"번개파동"},"description":{"en":"hyperelectric","de":"hochspannend","fr":"chargé d\'hyperélectricité","ja":"","cn":"","ko":"번개파동이 발생하겠습니다"}},"55":{"id":55,"icon":60226,"name":{"en":"Royal Levin","de":"Königsgewitter","fr":"Éclairs royaux","ja":"獣雷","cn":"兽雷","ko":"야수번개"},"description":{"en":"experiencing royal levin","de":"königlich gewittrig","fr":"perturbé par des éclairs royaux","ja":"","cn":"","ko":"야수번개가 치겠습니다"}},"56":{"id":56,"icon":60264,"name":{"en":"Oppression","de":"Numinos","fr":"Oppression","ja":"神意","cn":"神意","ko":"섭리"},"description":{"en":"oppressive","de":"numinos","fr":"oppressant","ja":"","cn":"","ko":"섭리를 비추겠습니다"}},"57":{"id":57,"icon":60209,"name":{"en":"Thunder","de":"Gewittrig","fr":"Orages","ja":"雷","cn":"打雷","ko":"번개"},"description":{"en":"thundery","de":"gewittrig","fr":"orageux","ja":"","cn":"","ko":"번개가 치겠습니다"}},"58":{"id":58,"icon":60209,"name":{"en":"Thunder","de":"Gewittrig","fr":"Orages","ja":"雷","cn":"打雷","ko":"번개"},"description":{"en":"thundery","de":"gewittrig","fr":"orageux","ja":"","cn":"","ko":"번개가 치겠습니다"}},"59":{"id":59,"icon":0,"name":{"en":"CutScene","de":"","fr":"","ja":"","cn":"","ko":""},"description":{"en":"CutScenery","de":"","fr":"","ja":"","cn":"","ko":""}},"60":{"id":60,"icon":60265,"name":{"en":"Multiplicity","de":"Mystisch","fr":"Multiplicité","ja":"神秘","cn":"神秘","ko":"신비"},"description":{"en":"experiencing multiplicity","de":"mystisch","fr":"marqué par la multiplicité","ja":"","cn":"","ko":"신비롭겠습니다"}},"61":{"id":61,"icon":60265,"name":{"en":"Multiplicity","de":"Mystisch","fr":"Multiplicité","ja":"神秘","cn":"神秘","ko":"신비"},"description":{"en":"experiencing multiplicity","de":"mystisch","fr":"marqué par la multiplicité","ja":"","cn":"","ko":"신비롭겠습니다"}},"62":{"id":62,"icon":60207,"name":{"en":"Rain","de":"Regnerisch","fr":"Pluie","ja":"雨","cn":"小雨","ko":"비"},"description":{"en":"rainy","de":"regnerisch","fr":"pluvieux","ja":"","cn":"","ko":"비가 내리겠습니다"}},"63":{"id":63,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"ensoleillé","ja":"","cn":"","ko":"맑겠습니다"}},"64":{"id":64,"icon":60207,"name":{"en":"Rain","de":"Regnerisch","fr":"Pluie","ja":"雨","cn":"小雨","ko":"비"},"description":{"en":"rainy","de":"regnerisch","fr":"pluvieux","ja":"","cn":"","ko":"비가 내리겠습니다"}},"65":{"id":65,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"ensoleillé","ja":"","cn":"","ko":"맑겠습니다"}},"66":{"id":66,"icon":60266,"name":{"en":"Dragonstorms","de":"Hass","fr":"Tempête de haine","ja":"邪天","cn":"邪天","ko":"사룡의 원념"},"description":{"en":"unnaturally stormy","de":"hasserfüllt","fr":"frappé par une tempête de haine","ja":"","cn":"","ko":"사룡의 원념을 띠겠습니다"}},"67":{"id":67,"icon":60266,"name":{"en":"Dragonstorms","de":"Hass","fr":"Tempête de haine","ja":"邪天","cn":"邪天","ko":"사룡의 원념"},"description":{"en":"unnaturally stormy","de":"hasserfüllt","fr":"frappé par une tempête de haine","ja":"","cn":"","ko":"사룡의 원념을 띠겠습니다"}},"68":{"id":68,"icon":60202,"name":{"en":"Subterrain","de":"Unterirdisch","fr":"Souterrain","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"subterranean","de":"unterirdisch","fr":"souterrain","ja":"","cn":"","ko":"맑겠습니다"}},"69":{"id":69,"icon":60267,"name":{"en":"Concordance","de":"Gerechtigkeit","fr":"Harmonie","ja":"調和","cn":"平衡","ko":"조화"},"description":{"en":"concordant","de":"gerecht","fr":"harmonieux","ja":"","cn":"","ko":"조화롭겠습니다"}},"70":{"id":70,"icon":60267,"name":{"en":"Concordance","de":"Gerechtigkeit","fr":"Harmonie","ja":"調和","cn":"平衡","ko":"조화"},"description":{"en":"concordant","de":"gerecht","fr":"harmonieux","ja":"","cn":"","ko":"조화롭겠습니다"}},"71":{"id":71,"icon":60268,"name":{"en":"Beyond Time","de":"Zeitfluss","fr":"Hors du temps","ja":"時流","cn":"时光","ko":"시류"},"description":{"en":"temporal","de":"zeitlich ablaufend","fr":"atemporel","ja":"","cn":"","ko":"시류가 흐르겠습니다"}},"72":{"id":72,"icon":60268,"name":{"en":"Beyond Time","de":"Zeitfluss","fr":"Hors du temps","ja":"時流","cn":"时光","ko":"시류"},"description":{"en":"temporal","de":"zeitlich ablaufend","fr":"atemporel","ja":"","cn":"","ko":"시류가 흐르겠습니다"}},"73":{"id":73,"icon":60268,"name":{"en":"Beyond Time","de":"Zeitfluss","fr":"Hors du temps","ja":"時流","cn":"时光","ko":"시류"},"description":{"en":"temporal","de":"zeitlich ablaufend","fr":"atemporel","ja":"","cn":"","ko":"시류가 흐르겠습니다"}},"74":{"id":74,"icon":60269,"name":{"en":"Demonic Infinity","de":"Dämonisch unendlich","fr":"Infini démoniaque","ja":"鬼気","cn":"鬼气","ko":"귀기"},"description":{"en":"demonically infinite","de":"dämonisch unendlich","fr":"démoniaquement infini","ja":"","cn":"","ko":"귀기가 서리겠습니다"}},"75":{"id":75,"icon":60269,"name":{"en":"Demonic Infinity","de":"Dämonisch unendlich","fr":"Infini démoniaque","ja":"鬼気","cn":"鬼气","ko":"귀기"},"description":{"en":"demonically infinite","de":"dämonisch unendlich","fr":"démoniaquement infini","ja":"","cn":"","ko":"귀기가 서리겠습니다"}},"76":{"id":76,"icon":60269,"name":{"en":"Demonic Infinity","de":"Dämonisch unendlich","fr":"Infini démoniaque","ja":"鬼気","cn":"鬼气","ko":"귀기"},"description":{"en":"demonically infinite","de":"dämonisch unendlich","fr":"démoniaquement infini","ja":"","cn":"","ko":"귀기가 서리겠습니다"}},"77":{"id":77,"icon":60274,"name":{"en":"Dimensional Disruption","de":"Dimensionsspaltend","fr":"Perturbation dimensionnelle","ja":"次元","cn":"次元","ko":"차원"},"description":{"en":"extradimensional","de":"dimensionsspaltend","fr":"perturbé sur le plan dimensionnel","ja":"","cn":"","ko":"차원의 틈이 벌어지겠습니다"}},"78":{"id":78,"icon":60274,"name":{"en":"Dimensional Disruption","de":"Dimensionsspaltend","fr":"Perturbation dimensionnelle","ja":"次元","cn":"次元","ko":"차원"},"description":{"en":"extradimensional","de":"dimensionsspaltend","fr":"perturbé sur le plan dimensionnel","ja":"","cn":"","ko":"차원의 틈이 벌어지겠습니다"}},"79":{"id":79,"icon":60274,"name":{"en":"Dimensional Disruption","de":"Dimensionsspaltend","fr":"Perturbation dimensionnelle","ja":"次元","cn":"次元","ko":"차원"},"description":{"en":"extradimensional","de":"dimensionsspaltend","fr":"perturbé sur le plan dimensionnel","ja":"","cn":"","ko":"차원의 틈이 벌어지겠습니다"}},"80":{"id":80,"icon":60271,"name":{"en":"Revelstorms","de":"Feiersturm","fr":"Tempête festive","ja":"嵐天","cn":"豪雨","ko":"호우"},"description":{"en":"revelry","de":"feierlich stürmisch","fr":"tempêtueusement festif","ja":"","cn":"","ko":"호우가 내리겠습니다"}},"81":{"id":81,"icon":60271,"name":{"en":"Revelstorms","de":"Feiersturm","fr":"Tempête festive","ja":"嵐天","cn":"豪雨","ko":"호우"},"description":{"en":"revelry","de":"feierlich stürmisch","fr":"tempêtueusement festif","ja":"","cn":"","ko":"호우가 내리겠습니다"}},"82":{"id":82,"icon":60270,"name":{"en":"Eternal Bliss","de":"Ewigschön","fr":"Béatitude éternelle","ja":"美天","cn":"极乐","ko":"미혹"},"description":{"en":"blissful","de":"ewigschön","fr":"baigné par la béatitude éternelle","ja":"","cn":"","ko":"미혹에 빠지겠습니다"}},"83":{"id":83,"icon":60270,"name":{"en":"Eternal Bliss","de":"Ewigschön","fr":"Béatitude éternelle","ja":"美天","cn":"极乐","ko":"미혹"},"description":{"en":"blissful","de":"ewigschön","fr":"baigné par la béatitude éternelle","ja":"","cn":"","ko":"미혹에 빠지겠습니다"}},"84":{"id":84,"icon":60272,"name":{"en":"Wyrmstorms","de":"Drachensturm","fr":"Tempête draconique","ja":"龍天","cn":"龙威","ko":"신룡의 폭풍"},"description":{"en":"unnaturally stormy","de":"drachenstürmisch","fr":"anormalement tempêtueux","ja":"","cn":"","ko":"신룡의 폭풍이 치겠습니다"}},"85":{"id":85,"icon":60272,"name":{"en":"Wyrmstorms","de":"Drachensturm","fr":"Tempête draconique","ja":"龍天","cn":"龙威","ko":"신룡의 폭풍"},"description":{"en":"unnaturally stormy","de":"drachenstürmisch","fr":"anormalement tempêtueux","ja":"","cn":"","ko":"신룡의 폭풍이 치겠습니다"}},"86":{"id":86,"icon":60271,"name":{"en":"Revelstorms","de":"Feiersturm","fr":"Tempête festive","ja":"嵐天","cn":"豪雨","ko":"호우"},"description":{"en":"revelry","de":"feierlich stürmisch","fr":"tempêtueusement festif","ja":"","cn":"","ko":"호우가 내리겠습니다"}},"87":{"id":87,"icon":60273,"name":{"en":"Quicklevin","de":"Blitzsturm","fr":"Vif-orage","ja":"迅雷","cn":"迅雷","ko":"전선뇌우"},"description":{"en":"hypervoltaic","de":"blitzend stürmisch","fr":"vif-orageux","ja":"","cn":"","ko":"전선뇌우가 치겠습니다"}},"88":{"id":88,"icon":60209,"name":{"en":"Thunder","de":"Gewittrig","fr":"Orages","ja":"雷","cn":"打雷","ko":"번개"},"description":{"en":"thundery","de":"gewittrig","fr":"orageux","ja":"","cn":"","ko":"번개가 치겠습니다"}},"89":{"id":89,"icon":60274,"name":{"en":"Dimensional Disruption","de":"Dimensionsspaltend","fr":"Perturbation dimensionnelle","ja":"次元","cn":"次元","ko":"차원"},"description":{"en":"extradimensional","de":"dimensionsspaltend","fr":"perturbé sur le plan dimensionnel","ja":"","cn":"","ko":"차원의 틈이 벌어지겠습니다"}},"90":{"id":90,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"ensoleillé","ja":"","cn":"","ko":"맑겠습니다"}},"91":{"id":91,"icon":60201,"name":{"en":"Clear Skies","de":"Klar","fr":"Dégagé","ja":"快晴","cn":"碧空","ko":"쾌청"},"description":{"en":"clear","de":"klar","fr":"radieux","ja":"","cn":"","ko":"쾌청하겠습니다"}},"92":{"id":92,"icon":60275,"name":{"en":"White Cyclones","de":"Weißer Zyklon","fr":"Tempête blanche","ja":"白嵐","cn":"白旋风","ko":"하얀 폭풍"},"description":{"en":"cyclonic","de":"zyklonisch","fr":"tempêtueux","ja":"","cn":"","ko":"하얀 폭풍이 치겠습니다"}},"93":{"id":93,"icon":60275,"name":{"en":"White Cyclones","de":"Weißer Zyklon","fr":"Tempête blanche","ja":"白嵐","cn":"白旋风","ko":"하얀 폭풍"},"description":{"en":"cyclonic","de":"zyklonisch","fr":"tempêtueux","ja":"","cn":"","ko":"하얀 폭풍이 치겠습니다"}},"94":{"id":94,"icon":60275,"name":{"en":"White Cyclones","de":"Weißer Zyklon","fr":"Tempête blanche","ja":"白嵐","cn":"白旋风","ko":"하얀 폭풍"},"description":{"en":"cyclonic","de":"zyklonisch","fr":"tempêtueux","ja":"","cn":"","ko":"하얀 폭풍이 치겠습니다"}},"95":{"id":95,"icon":60277,"name":{"en":"Ultimania","de":"Ultimativ","fr":"Fantasmagorique","ja":"幻想","cn":"幻想","ko":"환상"},"description":{"en":"ultimaniacal","de":"ultimativ","fr":"fantasmagorique","ja":"","cn":"","ko":"환상이 펼쳐지겠습니다"}},"96":{"id":96,"icon":60275,"name":{"en":"White Cyclones","de":"Weißer Zyklon","fr":"Tempête blanche","ja":"白嵐","cn":"白旋风","ko":"하얀 폭풍"},"description":{"en":"cyclonic","de":"zyklonisch","fr":"tempêtueux","ja":"","cn":"","ko":"하얀 폭풍이 치겠습니다"}},"97":{"id":97,"icon":60276,"name":{"en":"Moonlight","de":"Dunkle Mondnacht","fr":"Clair de lune","ja":"月夜","cn":"月夜","ko":"달빛"},"description":{"en":"moonlit","de":"dunkelmondisch","fr":"baigné par un beau clair de lune","ja":"","cn":"","ko":"달빛이 비치겠습니다"}},"98":{"id":98,"icon":60276,"name":{"en":"Moonlight","de":"Dunkle Mondnacht","fr":"Clair de lune","ja":"月夜","cn":"月夜","ko":"달빛"},"description":{"en":"moonlit","de":"dunkelmondisch","fr":"baigné par un beau clair de lune","ja":"","cn":"","ko":"달빛이 비치겠습니다"}},"99":{"id":99,"icon":60276,"name":{"en":"Moonlight","de":"Dunkle Mondnacht","fr":"Clair de lune","ja":"月夜","cn":"月夜","ko":"달빛"},"description":{"en":"moonlit","de":"dunkelmondisch","fr":"baigné par un beau clair de lune","ja":"","cn":"","ko":"달빛이 비치겠습니다"}},"100":{"id":100,"icon":60276,"name":{"en":"Moonlight","de":"Dunkle Mondnacht","fr":"Clair de lune","ja":"月夜","cn":"月夜","ko":"달빛"},"description":{"en":"moonlit","de":"dunkelmondisch","fr":"baigné par un beau clair de lune","ja":"","cn":"","ko":"달빛이 비치겠습니다"}},"101":{"id":101,"icon":60293,"name":{"en":"Red Moon","de":"Roter Mond","fr":"Lune rouge","ja":"紅月下","cn":"红月下","ko":"붉은 달"},"description":{"en":"portentious","de":"rotmondisch","fr":"baigné par le clair d\'une lune rougeoyante","ja":"","cn":"","ko":"붉은 달이 뜨겠습니다"}},"102":{"id":102,"icon":60278,"name":{"en":"Scarlet","de":"Rotlodernd","fr":"Vermillon","ja":"朱炎","cn":"朱炎","ko":"붉은 불꽃 "},"description":{"en":"scarlet","de":"rotlodernd","fr":"vermillon","ja":"","cn":"","ko":"붉은 불꽃이 피어나겠습니다"}},"103":{"id":103,"icon":60278,"name":{"en":"Scarlet","de":"Rotlodernd","fr":"Vermillon","ja":"朱炎","cn":"朱炎","ko":"붉은 불꽃 "},"description":{"en":"scarlet","de":"rotlodernd","fr":"vermillon","ja":"","cn":"","ko":"붉은 불꽃이 피어나겠습니다"}},"104":{"id":104,"icon":60278,"name":{"en":"Scarlet","de":"Rotlodernd","fr":"Vermillon","ja":"朱炎","cn":"朱炎","ko":"붉은 불꽃 "},"description":{"en":"scarlet","de":"rotlodernd","fr":"vermillon","ja":"","cn":"","ko":"붉은 불꽃이 피어나겠습니다"}},"105":{"id":105,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"ensoleillé","ja":"","cn":"","ko":"맑겠습니다"}},"106":{"id":106,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"ensoleillé","ja":"","cn":"","ko":"맑겠습니다"}},"107":{"id":107,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"ensoleillé","ja":"","cn":"","ko":"맑겠습니다"}},"108":{"id":108,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"ensoleillé","ja":"","cn":"","ko":"맑겠습니다"}},"109":{"id":109,"icon":60279,"name":{"en":"Flames","de":"Feuer","fr":"Flammes","ja":"火炎","cn":"烈焰","ko":"화염"},"description":{"en":"fiery","de":"feurig","fr":"enflammé","ja":"","cn":"","ko":"화염이 일겠습니다"}},"110":{"id":110,"icon":60280,"name":{"en":"Tsunamis","de":"Tsunami","fr":"Raz-de-marée","ja":"津波","cn":"海啸","ko":"해일"},"description":{"en":"wet","de":"nass","fr":"détrempé","ja":"","cn":"","ko":"해일이 일겠습니다"}},"111":{"id":111,"icon":60281,"name":{"en":"Cyclones","de":"Tornado","fr":"Tornade","ja":"竜巻","cn":"龙卷风","ko":"회오리"},"description":{"en":"cyclonic","de":"stürmisch","fr":"tourbillonant","ja":"","cn":"","ko":"회오리가 불겠습니다"}},"112":{"id":112,"icon":60282,"name":{"en":"Geostorms","de":"Erdbeben","fr":"Séisme","ja":"地震","cn":"地震","ko":"지진"},"description":{"en":"shakey","de":"bebend","fr":"tremblant","ja":"","cn":"","ko":"지진이 발생하겠습니다"}},"113":{"id":113,"icon":60283,"name":{"en":"True Blue","de":"Blauschimmernd","fr":"Azur","ja":"青春","cn":"青空","ko":"푸른 봄날"},"description":{"en":"true blue","de":"blauschimmernd","fr":"azur","ja":"","cn":"","ko":"푸른 봄날이 되겠습니다"}},"114":{"id":114,"icon":60283,"name":{"en":"True Blue","de":"Blauschimmernd","fr":"Azur","ja":"青春","cn":"青空","ko":"푸른 봄날"},"description":{"en":"true blue","de":"blauschimmernd","fr":"azur","ja":"","cn":"","ko":"푸른 봄날이 되겠습니다"}},"115":{"id":115,"icon":60283,"name":{"en":"True Blue","de":"Blauschimmernd","fr":"Azur","ja":"青春","cn":"青空","ko":"푸른 봄날"},"description":{"en":"true blue","de":"blauschimmernd","fr":"azur","ja":"","cn":"","ko":"푸른 봄날이 되겠습니다"}},"116":{"id":116,"icon":60284,"name":{"en":"Umbral Turbulence","de":"Astrale Turbulenzen","fr":"Turbulences ombrales","ja":"乱霊流","cn":"乱灵流","ko":"난령류"},"description":{"en":"umbrally turbulent","de":"astral-turbulent","fr":"affecté par des turbulences ombrales","ja":"","cn":"","ko":"난령류가 형성되겠습니다"}},"117":{"id":117,"icon":60283,"name":{"en":"True Blue","de":"Blauschimmernd","fr":"Azur","ja":"青春","cn":"青空","ko":"푸른 봄날"},"description":{"en":"true blue","de":"blauschimmernd","fr":"azur","ja":"","cn":"","ko":"푸른 봄날이 되겠습니다"}},"118":{"id":118,"icon":60221,"name":{"en":"Everlasting Light","de":"Ewiges Licht","fr":"Clarté éternelle","ja":"無尽光","cn":"无尽光","ko":"끝없는 빛"},"description":{"en":"bright","de":"wie immer von Licht bedeckt","fr":"nimbé de Lumière","ja":"","cn":"","ko":"끝없는 빛이 비치겠습니다"}},"119":{"id":119,"icon":60253,"name":{"en":"Gales","de":"Stürmisch","fr":"Vents violents","ja":"暴風","cn":"暴风","ko":"폭풍"},"description":{"en":"gusty","de":"stürmisch","fr":"très venteux","ja":"","cn":"","ko":"폭풍이 불겠습니다"}},"120":{"id":120,"icon":60287,"name":{"en":"Termination","de":"Apokalyptisch","fr":"Apocalypse","ja":"終末","cn":"末日","ko":"종말"},"description":{"en":"terminal","de":"apokalyptisch","fr":"apocalyptique","ja":"","cn":"","ko":"종말이 찾아오겠습니다"}},"121":{"id":121,"icon":60287,"name":{"en":"Termination","de":"Apokalyptisch","fr":"Apocalypse","ja":"終末","cn":"末日","ko":"종말"},"description":{"en":"terminal","de":"apokalyptisch","fr":"apocalyptique","ja":"","cn":"","ko":"종말이 찾아오겠습니다"}},"122":{"id":122,"icon":60285,"name":{"en":"Dreams","de":"Feenträume","fr":"Rêverie","ja":"妖夢","cn":"妖梦","ko":"이상한 꿈"},"description":{"en":"dreamy","de":"träumerisch","fr":"onirique","ja":"","cn":"","ko":"이상한 꿈을 꾸겠습니다"}},"123":{"id":123,"icon":60285,"name":{"en":"Dreams","de":"Feenträume","fr":"Rêverie","ja":"妖夢","cn":"妖梦","ko":"이상한 꿈"},"description":{"en":"dreamy","de":"träumerisch","fr":"onirique","ja":"","cn":"","ko":"이상한 꿈을 꾸겠습니다"}},"124":{"id":124,"icon":60285,"name":{"en":"Dreams","de":"Feenträume","fr":"Rêverie","ja":"妖夢","cn":"妖梦","ko":"이상한 꿈"},"description":{"en":"dreamy","de":"träumerisch","fr":"onirique","ja":"","cn":"","ko":"이상한 꿈을 꾸겠습니다"}},"125":{"id":125,"icon":60286,"name":{"en":"Brilliance","de":"Strahlende Glanzhaftigkeit","fr":"Radiance divine","ja":"光天","cn":"光天","ko":"눈부신 하늘"},"description":{"en":"brilliant","de":"makellos strahlend","fr":"divin","ja":"","cn":"","ko":"눈부신 하늘이 되겠습니다"}},"126":{"id":126,"icon":60286,"name":{"en":"Brilliance","de":"Strahlende Glanzhaftigkeit","fr":"Radiance divine","ja":"光天","cn":"光天","ko":"눈부신 하늘"},"description":{"en":"brilliant","de":"makellos strahlend","fr":"divin","ja":"","cn":"","ko":"눈부신 하늘이 되겠습니다"}},"127":{"id":127,"icon":60287,"name":{"en":"Termination","de":"Apokalyptisch","fr":"Apocalypse","ja":"終末","cn":"末日","ko":"종말"},"description":{"en":"terminal","de":"apokalyptisch","fr":"apocalyptique","ja":"","cn":"","ko":"종말이 찾아오겠습니다"}},"128":{"id":128,"icon":60287,"name":{"en":"Termination","de":"Apokalyptisch","fr":"Apocalypse","ja":"終末","cn":"末日","ko":"종말"},"description":{"en":"terminal","de":"apokalyptisch","fr":"apocalyptique","ja":"","cn":"","ko":"종말이 찾아오겠습니다"}},"129":{"id":129,"icon":60221,"name":{"en":"Everlasting Light","de":"Ewiges Licht","fr":"Clarté éternelle","ja":"無尽光","cn":"无尽光","ko":"끝없는 빛"},"description":{"en":"bright","de":"wie immer von Licht bedeckt","fr":"nimbé de Lumière","ja":"","cn":"","ko":"끝없는 빛이 비치겠습니다"}},"130":{"id":130,"icon":60254,"name":{"en":"Eruptions","de":"Rauchschwaden","fr":"Éruptions","ja":"噴煙","cn":"烟雾","ko":"분화"},"description":{"en":"erupting","de":"rauchig","fr":"éruptif","ja":"","cn":"","ko":"화산이 분화하겠습니다"}},"131":{"id":131,"icon":60287,"name":{"en":"Termination","de":"Apokalyptisch","fr":"Apocalypse","ja":"終末","cn":"末日","ko":"종말"},"description":{"en":"terminal","de":"apokalyptisch","fr":"apocalyptique","ja":"","cn":"","ko":"종말이 찾아오겠습니다"}},"132":{"id":132,"icon":60202,"name":{"en":"Fair Skies","de":"Heiter","fr":"Clair","ja":"晴れ","cn":"晴朗","ko":"맑음"},"description":{"en":"fair","de":"heiter","fr":"ensoleillé","ja":"","cn":"","ko":"맑겠습니다"}},"133":{"id":133,"icon":60288,"name":{"en":"Umbral Flare","de":"Feuerseelenwinde","fr":"Vent ombral de feu","ja":"焔霊風","cn":"灵烈火","ko":"화속성풍"},"description":{"en":"darkly burning","de":"von Feuerseelenwinden umtost","fr":"venteux et nimbé de feu","ja":"","cn":"","ko":"화속성풍이 불겠습니다"}},"134":{"id":134,"icon":60289,"name":{"en":"Umbral Duststorm","de":"Erdseelenwinde","fr":"Vent ombral de terre","ja":"土霊風","cn":"灵飘尘","ko":"토속성풍"},"description":{"en":"darkly dusty","de":"von Erdseelenwinden umtost","fr":"venteux et nimbé de terre","ja":"","cn":"","ko":"토속성풍이 불겠습니다"}},"135":{"id":135,"icon":60290,"name":{"en":"Umbral Levin","de":"Donnerseelenwinde","fr":"Vent ombral de foudre","ja":"雷霊風","cn":"灵飞电","ko":"뇌속성풍"},"description":{"en":"darkly thunderous","de":"von Donnerseelenwinden umtost","fr":"venteux et nimbé de foudre","ja":"","cn":"","ko":"뇌속성풍이 불겠습니다"}},"136":{"id":136,"icon":60291,"name":{"en":"Umbral Tempest","de":"Sturmseelenwinde","fr":"Vent ombral des tempêtes","ja":"嵐霊風","cn":"灵罡风","ko":"풍속성풍"},"description":{"en":"darkly tempestuous","de":"von Sturmseelenwinden umtost","fr":"venteux et tempétueux","ja":"","cn":"","ko":"풍속성풍이 불겠습니다"}},"137":{"id":137,"icon":60296,"name":{"en":"Starshower","de":"Sternenregen","fr":"Pluie d\'étoiles","ja":"流星雨","cn":"流星雨","ko":"유성우"},"description":{"en":"calamitous","de":"sterneregnend","fr":"météoritique","ja":"","cn":"","ko":"유성우가 쏟아지겠습니다"}},"138":{"id":138,"icon":60294,"name":{"en":"Delirium","de":"Erinnerungsturbulenzen","fr":"Tempête de souvenirs","ja":"記憶乱流","cn":"记忆乱流","ko":"기억난류"},"description":{"en":"delirium","de":"erinnerungsturbulent","fr":"bouillonnant de souvenirs","ja":"","cn":"","ko":"기억난류가 흐르겠습니다"}},"139":{"id":139,"icon":60203,"name":{"en":"Clouds","de":"Wolkig","fr":"Couvert","ja":"曇り","cn":"阴云","ko":"흐림"},"description":{"en":"overcast","de":"wolkig","fr":"couvert","ja":"","cn":"","ko":"흐리겠습니다"}},"140":{"id":140,"icon":60203,"name":{"en":"Clouds","de":"Wolkig","fr":"Couvert","ja":"曇り","cn":"阴云","ko":"흐림"},"description":{"en":"overcast","de":"wolkig","fr":"couvert","ja":"","cn":"","ko":"흐리겠습니다"}},"141":{"id":141,"icon":60260,"name":{"en":"Irradiance","de":"Blendend","fr":"Rayonnement","ja":"極光","cn":"极光","ko":"극광"},"description":{"en":"irradiant","de":"blendend","fr":"rayonnant","ja":"","cn":"","ko":"극광이 나타나겠습니다"}},"142":{"id":142,"icon":60260,"name":{"en":"Irradiance","de":"Blendend","fr":"Rayonnement","ja":"極光","cn":"极光","ko":"극광"},"description":{"en":"irradiant","de":"blendend","fr":"rayonnant","ja":"","cn":"","ko":"극광이 나타나겠습니다"}},"143":{"id":143,"icon":60259,"name":{"en":"Storm Clouds","de":"Wetterleuchten","fr":"Orageux","ja":"雷雲","cn":"雷云","ko":"뇌운"},"description":{"en":"threatened by rain","de":"wetterleuchtend","fr":"menaçant","ja":"","cn":"","ko":"뇌운이 발생하겠습니다"}},"144":{"id":144,"icon":60295,"name":{"en":"Firestorm","de":"Flammensturm","fr":"Tempête de feu","ja":"焔嵐 ","cn":"火风暴","ko":"불바람"},"description":{"en":"hellacious","de":"flammenstürmend","fr":"tempêteux","ja":"","cn":"","ko":"불바람이 불겠습니다"}},"145":{"id":145,"icon":60292,"name":{"en":"Spectral Current","de":"Phantomströmung","fr":"Courant spectral","ja":"幻海流 ","cn":"幻海流","ko":"환해류"},"description":{"en":"spectral","de":"im Phantomstrom treibend","fr":"spectral","ja":"","cn":"","ko":"환해류가 흐르겠습니다"}},"146":{"id":146,"icon":0,"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"description":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""}},"147":{"id":147,"icon":60297,"name":{"en":"Climactic","de":"Endzeitig","fr":"Fatidique","ja":"決戦","cn":"决战","ko":"결전"},"description":{"en":"climactic","de":"endzeitig","fr":"fatidique","ja":"","cn":"","ko":"결전의 날이 다가오겠습니다"}},"148":{"id":148,"icon":60222,"name":{"en":"Moon Dust","de":"Mondstaubig","fr":"Tempêtes de régolithe","ja":"月砂塵","cn":"月尘","ko":"달모래먼지"},"description":{"en":"regolithic","de":"mondstaubig","fr":"tempêteux","ja":"","cn":"","ko":"달모래먼지가 일겠습니다"}},"149":{"id":149,"icon":60223,"name":{"en":"Astromagnetic Storm","de":"Magnetsturm","fr":"Astromagnétique","ja":"磁気嵐","cn":"磁暴","ko":"자기장 폭풍"},"description":{"en":"astromagnetic","de":"magnetisch","fr":"astromagnétique","ja":"","cn":"","ko":"자기장 폭풍이 불겠습니다"}},"150":{"id":150,"icon":60224,"name":{"en":"Apocalypse","de":"Apokalypse","fr":"Apocalypse","ja":"終末","cn":"末日","ko":"종말"},"description":{"en":"apocalyptic","de":"apokalyptisch","fr":"apocalyptique","ja":"","cn":"","ko":"종말이 찾아오겠습니다"}},"151":{"id":151,"icon":60298,"name":{"en":"Polarization","de":"Polarisierend","fr":"Polarisation","ja":"星霊","cn":"星灵","ko":"별빛그림자"},"description":{"en":"polarized","de":"polarisierend","fr":"polarisé","ja":"","cn":"","ko":"별빛그림자가 지겠습니다"}},"152":{"id":152,"icon":60298,"name":{"en":"Polarization","de":"Polarisierend","fr":"Polarisation","ja":"星霊","cn":"星灵","ko":"별빛그림자"},"description":{"en":"polarized","de":"polarisierend","fr":"polarisé","ja":"","cn":"","ko":"별빛그림자가 지겠습니다"}},"153":{"id":153,"icon":60298,"name":{"en":"Polarization","de":"Polarisierend","fr":"Polarisation","ja":"星霊","cn":"星灵","ko":"별빛그림자"},"description":{"en":"polarized","de":"polarisierend","fr":"polarisé","ja":"","cn":"","ko":"별빛그림자가 지겠습니다"}},"154":{"id":154,"icon":60298,"name":{"en":"Polarization","de":"Polarisierend","fr":"Polarisation","ja":"星霊","cn":"星灵","ko":"별빛그림자"},"description":{"en":"polarized","de":"polarisierend","fr":"polarisé","ja":"","cn":"","ko":"별빛그림자가 지겠습니다"}},"155":{"id":155,"icon":60298,"name":{"en":"Polarization","de":"Polarisierend","fr":"Polarisation","ja":"星霊","cn":"星灵","ko":"별빛그림자"},"description":{"en":"polarized","de":"polarisierend","fr":"polarisé","ja":"","cn":"","ko":"별빛그림자가 지겠습니다"}},"156":{"id":156,"icon":60225,"name":{"en":"Projection","de":"Imaginär","fr":"Virtuel","ja":"仮想","cn":"虚拟","ko":"가상"},"description":{"en":"projected","de":"imaginär","fr":"virtuel","ja":"","cn":"","ko":"가상이 펼쳐지겠습니다"}},"157":{"id":157,"icon":60228,"name":{"en":"Pandæmonium","de":"Pandæmonium","fr":"Pandæmonium","ja":"万魔殿","cn":"万魔殿","ko":"마의 전당"},"description":{"en":"demonic","de":"pandæmonisch","fr":"pandæmoniaque","ja":"","cn":"","ko":"마의 전당이 열리겠습니다"}},"158":{"id":158,"icon":60228,"name":{"en":"Pandæmonium","de":"Pandæmonium","fr":"Pandæmonium","ja":"万魔殿","cn":"万魔殿","ko":"마의 전당"},"description":{"en":"demonic","de":"pandæmonisch","fr":"pandæmoniaque","ja":"","cn":"","ko":"마의 전당이 열리겠습니다"}},"159":{"id":159,"icon":60228,"name":{"en":"Pandæmonium","de":"Pandæmonium","fr":"Pandæmonium","ja":"万魔殿","cn":"万魔殿","ko":"마의 전당"},"description":{"en":"demonic","de":"pandæmonisch","fr":"pandæmoniaque","ja":"","cn":"","ko":"마의 전당이 열리겠습니다"}},"160":{"id":160,"icon":60299,"name":{"en":"Ultimatum","de":"Eschatologie","fr":"Eschatologique","ja":"終極","cn":"终极","ko":"종극"},"description":{"en":"ultimate","de":"eschatologisch","fr":"eschatologique","ja":"","cn":"","ko":"종극에 다다르겠습니다"}},"161":{"id":161,"icon":60229,"name":{"en":"Inevitability","de":"Verzweifelnd","fr":"Désespoir","ja":"絶望","cn":"绝望","ko":"절망"},"description":{"en":"inevitable","de":"verzweifelnd","fr":"désespérant","ja":"","cn":"","ko":"절망에 빠지겠습니다"}},"162":{"id":162,"icon":60230,"name":{"en":"Transcendence","de":"Götterwetter","fr":"Mythologique","ja":"神域","cn":"神域","ko":""},"description":{"en":"transcendent","de":"göttlich","fr":"mythologique","ja":"","cn":"","ko":""}},"163":{"id":163,"icon":60230,"name":{"en":"Transcendence","de":"Götterwetter","fr":"Mythologique","ja":"神域","cn":"神域","ko":""},"description":{"en":"transcendent","de":"göttlich","fr":"mythologique","ja":"","cn":"","ko":""}},"164":{"id":164,"icon":60230,"name":{"en":"Transcendence","de":"Götterwetter","fr":"Mythologique","ja":"神域","cn":"神域","ko":""},"description":{"en":"transcendent","de":"göttlich","fr":"mythologique","ja":"","cn":"","ko":""}},"165":{"id":165,"icon":60230,"name":{"en":"Transcendence","de":"Götterwetter","fr":"Mythologique","ja":"神域","cn":"神域","ko":""},"description":{"en":"transcendent","de":"göttlich","fr":"mythologique","ja":"","cn":"","ko":""}},"166":{"id":166,"icon":60230,"name":{"en":"Transcendence","de":"Götterwetter","fr":"Mythologique","ja":"神域","cn":"神域","ko":""},"description":{"en":"transcendent","de":"göttlich","fr":"mythologique","ja":"","cn":"","ko":""}},"167":{"id":167,"icon":60230,"name":{"en":"Transcendence","de":"Götterwetter","fr":"Mythologique","ja":"神域","cn":"神域","ko":""},"description":{"en":"transcendent","de":"göttlich","fr":"mythologique","ja":"","cn":"","ko":""}},"168":{"id":168,"icon":60230,"name":{"en":"Transcendence","de":"Götterwetter","fr":"Mythologique","ja":"神域","cn":"神域","ko":""},"description":{"en":"transcendent","de":"göttlich","fr":"mythologique","ja":"","cn":"","ko":""}},"169":{"id":169,"icon":60230,"name":{"en":"Transcendence","de":"Götterwetter","fr":"Mythologique","ja":"神域","cn":"神域","ko":""},"description":{"en":"transcendent","de":"göttlich","fr":"mythologique","ja":"","cn":"","ko":""}},"170":{"id":170,"icon":60266,"name":{"en":"Dragonstorms","de":"Hass","fr":"Tempête de haine","ja":"邪天","cn":"","ko":""},"description":{"en":"unnaturally stormy","de":"hasserfüllt","fr":"frappé par une tempête de haine","ja":"","cn":"","ko":""}},"171":{"id":171,"icon":60231,"name":{"en":"Vacuity","de":"Leere","fr":"Néant","ja":"虚無","cn":"","ko":""},"description":{"en":"vacuous","de":"leer","fr":"vide","ja":"","cn":"","ko":""}},"172":{"id":172,"icon":60231,"name":{"en":"Vacuity","de":"Leere","fr":"Néant","ja":"虚無","cn":"","ko":""},"description":{"en":"vacuous","de":"leer","fr":"vide","ja":"","cn":"","ko":""}},"173":{"id":173,"icon":60231,"name":{"en":"Vacuity","de":"Leere","fr":"Néant","ja":"虚無","cn":"","ko":""},"description":{"en":"vacuous","de":"leer","fr":"vide","ja":"","cn":"","ko":""}}}');

/***/ })

};
;