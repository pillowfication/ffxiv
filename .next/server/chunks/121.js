"use strict";
exports.id = 121;
exports.ids = [121];
exports.modules = {

/***/ 5648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ chocobo_color_FruitIcon)
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
// EXTERNAL MODULE: ./src/chocobo-color/ffxiv-chocobo-color/data/index.ts + 2 modules
var data = __webpack_require__(3905);
;// CONCATENATED MODULE: ./src/chocobo-color/ffxiv-chocobo-color/data/fruits-icons-map.json
const fruits_icons_map_namespaceObject = JSON.parse('[8157,8158,8159,8160,8161,8162,8163]');
// EXTERNAL MODULE: ./src/translate.ts
var translate = __webpack_require__(9465);
;// CONCATENATED MODULE: ./src/chocobo-color/FruitIcon.tsx








const FruitIcon = ({ fruit , size =1 , sx  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)();
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
        title: (0,translate/* default */.Z)(locale, data/* fruits */.DN[fruit], "name"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            sx: [
                {
                    display: "inline-block",
                    position: "relative",
                    width: 48 * size,
                    height: 48 * size,
                    transform: `scale(${size})`
                },
                ...Array.isArray(sx) ? sx : [
                    sx
                ]
            ],
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        position: "absolute",
                        top: 2 * size,
                        left: 4 * size,
                        width: 40 * size,
                        height: 40 * size,
                        backgroundImage: 'url("/images/chocobo-color/fruits-icons.png")',
                        backgroundSize: `${fruits_icons_map_namespaceObject.length * 100}% 100%`,
                        backgroundPosition: `${fruits_icons_map_namespaceObject.indexOf(fruit) * -100}% 0%`
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 48 * size,
                        height: 48 * size,
                        backgroundImage: 'url("/images/chocobo-color/item-cover.png")',
                        backgroundSize: "100% 100%"
                    }
                })
            ]
        })
    });
};
/* harmony default export */ const chocobo_color_FruitIcon = (/*#__PURE__*/external_react_default().memo(FruitIcon));


/***/ }),

/***/ 9371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9465);






const StainButton = ({ stain , color , inline =false , selected =false , onClick  })=>{
    const { i18n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const locale = i18n.language;
    const stainColor = stain !== undefined ? stain.color : color;
    const title = stain !== undefined ? (0,_translate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(locale, stain, "name") : `(${String(color === null || color === void 0 ? void 0 : color.R)}, ${String(color === null || color === void 0 ? void 0 : color.G)}, ${String(color === null || color === void 0 ? void 0 : color.B)})`;
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
        title: title,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {
            component: "span",
            square: true,
            onClick: onClick,
            sx: {
                display: "inline-block",
                width: inline ? "1em" : "2em",
                height: inline ? "1em" : "2em",
                backgroundColor: `rgb(${stainColor.R},${stainColor.G},${stainColor.B})`,
                borderStyle: "solid",
                borderWidth: selected ? 3 : 1,
                borderColor: selected ? "primary.light" : "#00000055",
                m: 0.5,
                lineHeight: "100%",
                verticalAlign: inline ? "text-bottom" : "middle",
                cursor: onClick === undefined ? undefined : "pointer"
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StainButton);


/***/ }),

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Il": () => (/* binding */ Color),
  "j0": () => (/* binding */ Shade),
  "DN": () => (/* binding */ fruits),
  "DX": () => (/* binding */ stains)
});

;// CONCATENATED MODULE: ./src/chocobo-color/ffxiv-chocobo-color/data/stains.json
const stains_namespaceObject = JSON.parse('{"0":{"id":0,"color":{"R":0,"G":0,"B":0},"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"shade":2},"1":{"id":1,"color":{"R":228,"G":223,"B":208},"name":{"en":"Snow White","de":"Schneeweiß","fr":"blanc neige","ja":"スノウホワイト","cn":"素雪白","ko":"하얀 눈색"},"shade":2},"2":{"id":2,"color":{"R":172,"G":168,"B":162},"name":{"en":"Ash Grey","de":"Aschgrau","fr":"gris cendre","ja":"アッシュグレイ","cn":"苍白灰","ko":"회색"},"shade":2},"3":{"id":3,"color":{"R":137,"G":135,"B":132},"name":{"en":"Goobbue Grey","de":"Goobbuegrau","fr":"gris goobbue","ja":"グゥーブーグレイ","cn":"古菩灰","ko":"구부 회색"},"shade":2},"4":{"id":4,"color":{"R":101,"G":101,"B":101},"name":{"en":"Slate Grey","de":"Schiefergrau","fr":"gris ardoise","ja":"スレートグレイ","cn":"石板灰","ko":"진회색"},"shade":2},"5":{"id":5,"color":{"R":72,"G":71,"B":66},"name":{"en":"Charcoal Grey","de":"Anthrazit","fr":"gris charbon","ja":"チャコールグレイ","cn":"木炭灰","ko":"탄회색"},"shade":2},"6":{"id":6,"color":{"R":43,"G":41,"B":35},"name":{"en":"Soot Black","de":"Rußschwarz","fr":"noir suie","ja":"スートブラック","cn":"煤烟黑","ko":"숯검정색"},"shade":2},"7":{"id":7,"color":{"R":230,"G":159,"B":150},"name":{"en":"Rose Pink","de":"Rosarot","fr":"rose floral","ja":"ローズピンク","cn":"玫瑰粉","ko":"장미색"},"shade":4},"8":{"id":8,"color":{"R":131,"G":105,"B":105},"name":{"en":"Lilac Purple","de":"Altrosa","fr":"lilas","ja":"ライラックパープル","cn":"丁香紫","ko":"라일락색"},"shade":4},"9":{"id":9,"color":{"R":91,"G":23,"B":41},"name":{"en":"Rolanberry Red","de":"Rolanbeerenrot","fr":"rouge rolanbaie","ja":"ロランベリーレッド","cn":"罗兰莓","ko":"롤란베리색"},"shade":4},"10":{"id":10,"color":{"R":120,"G":26,"B":26},"name":{"en":"Dalamud Red","de":"Dalamudrot","fr":"rouge Dalamud","ja":"ダラガブレッド","cn":"卫月红","ko":"달라가브색"},"shade":4},"11":{"id":11,"color":{"R":98,"G":34,"B":7},"name":{"en":"Rust Red","de":"Rostrot","fr":"rouille","ja":"ラストレッド","cn":"铁锈红","ko":"녹슨 빨간색"},"shade":4},"12":{"id":12,"color":{"R":69,"G":21,"B":17},"name":{"en":"Wine Red","de":"Weinrot","fr":"lie-de-vin","ja":"ワインレッド","cn":"果酒红","ko":"포도주색"},"shade":4},"13":{"id":13,"color":{"R":204,"G":108,"B":94},"name":{"en":"Coral Pink","de":"Korallenrosa","fr":"rose corail","ja":"コーラルピンク","cn":"珊瑚粉","ko":"산호색"},"shade":4},"14":{"id":14,"color":{"R":145,"G":59,"B":39},"name":{"en":"Blood Red","de":"Blutrot","fr":"rouge sang","ja":"ブラッドレッド","cn":"鲜血红","ko":"선홍색"},"shade":4},"15":{"id":15,"color":{"R":228,"G":170,"B":138},"name":{"en":"Salmon Pink","de":"Lachsrosa","fr":"rose saumon","ja":"サーモンピンク","cn":"鲑鱼粉","ko":"연어색"},"shade":4},"16":{"id":16,"color":{"R":183,"G":92,"B":45},"name":{"en":"Sunset Orange","de":"Abendrot","fr":"orange couchant","ja":"サンセットオレンジ","cn":"日落橙","ko":"노을색"},"shade":5},"17":{"id":17,"color":{"R":125,"G":57,"B":6},"name":{"en":"Mesa Red","de":"Tafelbergrot","fr":"vermillon terne","ja":"メサレッド","cn":"台地红","ko":"황야의 붉은색"},"shade":5},"18":{"id":18,"color":{"R":106,"G":75,"B":55},"name":{"en":"Bark Brown","de":"Borkenbraun","fr":"marron écorce","ja":"バークブラウン","cn":"树皮棕","ko":"나무껍질색"},"shade":5},"19":{"id":19,"color":{"R":110,"G":61,"B":36},"name":{"en":"Chocolate Brown","de":"Schokoladenbraun","fr":"chocolat","ja":"チョコレートブラウン","cn":"巧克力","ko":"초콜릿색"},"shade":5},"20":{"id":20,"color":{"R":79,"G":45,"B":31},"name":{"en":"Russet Brown","de":"Rotbraun","fr":"brun fauve","ja":"ラセットブラウン","cn":"铁锈棕","ko":"적갈색"},"shade":5},"21":{"id":21,"color":{"R":48,"G":33,"B":27},"name":{"en":"Kobold Brown","de":"Koboldbraun","fr":"brun kobold","ja":"コボルドブラウン","cn":"钴铁棕","ko":"코볼드색"},"shade":5},"22":{"id":22,"color":{"R":201,"G":145,"B":86},"name":{"en":"Cork Brown","de":"Korkbraun","fr":"brun liège","ja":"コルクブラウン","cn":"软木棕","ko":"코르크색"},"shade":5},"23":{"id":23,"color":{"R":153,"G":110,"B":63},"name":{"en":"Qiqirn Brown","de":"Qiqirnbraun","fr":"brun qiqirn","ja":"キキルンブラウン","cn":"卢恩棕","ko":"키키룬색"},"shade":5},"24":{"id":24,"color":{"R":123,"G":92,"B":45},"name":{"en":"Opo-opo Brown","de":"Opo-Opobraun","fr":"brun opo-opo","ja":"オポオポブラウン","cn":"奥猴棕","ko":"오포오포색"},"shade":5},"25":{"id":25,"color":{"R":162,"G":135,"B":92},"name":{"en":"Aldgoat Brown","de":"Steinbockbraun","fr":"brun bouquetin","ja":"アルドゴートブラウン","cn":"山羊棕","ko":"큰뿔염소색"},"shade":5},"26":{"id":26,"color":{"R":197,"G":116,"B":36},"name":{"en":"Pumpkin Orange","de":"Kürbisorange","fr":"orange citrouille","ja":"パンプキンオレンジ","cn":"南瓜橙","ko":"늙은호박색"},"shade":5},"27":{"id":27,"color":{"R":142,"G":88,"B":27},"name":{"en":"Acorn Brown","de":"Eichelbraun","fr":"brun noisette","ja":"エーコンブラウン","cn":"橡果棕","ko":"도토리색"},"shade":5},"28":{"id":28,"color":{"R":100,"G":66,"B":22},"name":{"en":"Orchard Brown","de":"Obstbraun","fr":"feuille-morte","ja":"オーチャードブラウン","cn":"果园棕","ko":"과수원 흙색"},"shade":5},"29":{"id":29,"color":{"R":61,"G":41,"B":13},"name":{"en":"Chestnut Brown","de":"Kastanienbraun","fr":"brun châtaigne","ja":"チェスナットブラウン","cn":"山栗棕","ko":"밤색"},"shade":5},"30":{"id":30,"color":{"R":185,"G":164,"B":137},"name":{"en":"Gobbiebag Brown","de":"Kartonbraun","fr":"brun gobelin","ja":"ゴブリンブラウン","cn":"哥布林","ko":"고블린색"},"shade":5},"31":{"id":31,"color":{"R":146,"G":129,"B":108},"name":{"en":"Shale Brown","de":"Schieferbraun","fr":"brun schiste","ja":"シェールブラウン","cn":"页岩棕","ko":"찰흙색"},"shade":5},"32":{"id":32,"color":{"R":97,"G":82,"B":69},"name":{"en":"Mole Brown","de":"Maulwurfsbraun","fr":"brun taupe","ja":"モールブラウン","cn":"鼹鼠棕","ko":"두더지색"},"shade":5},"33":{"id":33,"color":{"R":63,"G":51,"B":41},"name":{"en":"Loam Brown","de":"Lehmbraun","fr":"brun argile","ja":"ロームブラウン","cn":"沃土棕","ko":"비옥토색"},"shade":5},"34":{"id":34,"color":{"R":235,"G":211,"B":160},"name":{"en":"Bone White","de":"Knochenweiß","fr":"ivoire","ja":"ボーンホワイト","cn":"骸骨白","ko":"상아색"},"shade":6},"35":{"id":35,"color":{"R":183,"G":163,"B":112},"name":{"en":"Ul Brown","de":"Ul\'dahbraun","fr":"ocre uldien","ja":"ウルダハンブラウン","cn":"黄沙棕","ko":"울다하 갈색"},"shade":6},"36":{"id":36,"color":{"R":219,"G":180,"B":87},"name":{"en":"Desert Yellow","de":"Wüstengelb","fr":"jaune chocobo","ja":"チョコボイエロー","cn":"陆行鸟黄","ko":"초코보 노랑"},"shade":6},"37":{"id":37,"color":{"R":250,"G":198,"B":43},"name":{"en":"Honey Yellow","de":"Honiggelb","fr":"jaune miel","ja":"ハニーイエロー","cn":"蜂蜜黄","ko":"꿀색"},"shade":6},"38":{"id":38,"color":{"R":228,"G":158,"B":52},"name":{"en":"Millioncorn Yellow","de":"Maisgelb","fr":"jaune milli-maïs","ja":"ミリオンコーンイエロー","cn":"玉米黄","ko":"옥수수색"},"shade":6},"39":{"id":39,"color":{"R":188,"G":136,"B":4},"name":{"en":"Coeurl Yellow","de":"Coeurlgelb","fr":"jaune coeurl","ja":"クァールイエロー","cn":"猛豹黄","ko":"커얼색"},"shade":6},"40":{"id":40,"color":{"R":242,"G":215,"B":112},"name":{"en":"Cream Yellow","de":"Cremegelb","fr":"jaune crème","ja":"クリームイエロー","cn":"奶油黄","ko":"크림색"},"shade":6},"41":{"id":41,"color":{"R":165,"G":132,"B":48},"name":{"en":"Halatali Yellow","de":"Halataligelb","fr":"jaune Halatali","ja":"ハラタリイエロー","cn":"日影黄","ko":"할라탈리 노란색"},"shade":6},"42":{"id":42,"color":{"R":64,"G":51,"B":17},"name":{"en":"Raisin Brown","de":"Rosinenbraun","fr":"raisin sec","ja":"レーズンブラウン","cn":"萄干棕","ko":"건포도색"},"shade":6},"43":{"id":43,"color":{"R":88,"G":82,"B":48},"name":{"en":"Mud Green","de":"Schlammgrün","fr":"kaki","ja":"マッドグリーン","cn":"泥沼绿","ko":"습지 녹색"},"shade":7},"44":{"id":44,"color":{"R":187,"G":187,"B":138},"name":{"en":"Sylph Green","de":"Sylphengrün","fr":"vert sylphe","ja":"シルフグリーン","cn":"妖精绿","ko":"실프색"},"shade":7},"45":{"id":45,"color":{"R":171,"G":176,"B":84},"name":{"en":"Lime Green","de":"Limettengrün","fr":"vert citron","ja":"ライムグリーン","cn":"青柠绿","ko":"라임색"},"shade":7},"46":{"id":46,"color":{"R":112,"G":115,"B":38},"name":{"en":"Moss Green","de":"Moosgrün","fr":"vert mousse","ja":"モスグリーン","cn":"苔藓绿","ko":"이끼색"},"shade":7},"47":{"id":47,"color":{"R":139,"G":156,"B":99},"name":{"en":"Meadow Green","de":"Grasgrün","fr":"vert prairie","ja":"メドウグリーン","cn":"牧草绿","ko":"풀색"},"shade":7},"48":{"id":48,"color":{"R":75,"G":82,"B":50},"name":{"en":"Olive Green","de":"Olivgrün","fr":"vert olive","ja":"オリーヴグリーン","cn":"橄榄绿","ko":"올리브색"},"shade":7},"49":{"id":49,"color":{"R":50,"G":54,"B":33},"name":{"en":"Marsh Green","de":"Sumpfgrün","fr":"vert viridien","ja":"マーシュグリーン","cn":"沼泽绿","ko":"늪지 녹색"},"shade":7},"50":{"id":50,"color":{"R":155,"G":179,"B":99},"name":{"en":"Apple Green","de":"Apfelgrün","fr":"vert pomme","ja":"アップルグリーン","cn":"苹果绿","ko":"풋사과색"},"shade":7},"51":{"id":51,"color":{"R":101,"G":130,"B":65},"name":{"en":"Cactuar Green","de":"Kaktusgrün","fr":"vert cactuar","ja":"サボテンダーグリーン","cn":"仙人掌","ko":"선인장색"},"shade":7},"52":{"id":52,"color":{"R":40,"G":75,"B":44},"name":{"en":"Hunter Green","de":"Jägergrün","fr":"vert chasseur","ja":"ハンターグリーン","cn":"猎人绿","ko":"진녹색"},"shade":7},"53":{"id":53,"color":{"R":64,"G":99,"B":57},"name":{"en":"Ochu Green","de":"Ochugrün","fr":"vert otyugh","ja":"オチューグリーン","cn":"口花绿","ko":"오츄색"},"shade":7},"54":{"id":54,"color":{"R":95,"G":117,"B":88},"name":{"en":"Adamantoise Green","de":"Adaman-Taimaigrün","fr":"vert adamankhélone","ja":"アダマンタスグリーン","cn":"金龟绿","ko":"금강거북색"},"shade":7},"55":{"id":55,"color":{"R":59,"G":77,"B":60},"name":{"en":"Nophica Green","de":"Nophicagrün","fr":"vert Nophica","ja":"ノフィカグリーン","cn":"地神绿","ko":"노피카의 녹색"},"shade":7},"56":{"id":56,"color":{"R":30,"G":42,"B":33},"name":{"en":"Deepwood Green","de":"Waldgrün","fr":"vert sapin","ja":"ディープウッドグリーン","cn":"深林绿","ko":"밀림 녹색"},"shade":7},"57":{"id":57,"color":{"R":150,"G":189,"B":185},"name":{"en":"Celeste Green","de":"Azurblau","fr":"vert céleste","ja":"セレストグリーン","cn":"天上蓝","ko":"옅은 청록색"},"shade":7},"58":{"id":58,"color":{"R":67,"G":114,"B":114},"name":{"en":"Turquoise Green","de":"Türkis","fr":"turquoise","ja":"ターコイズグリーン","cn":"绿松蓝","ko":"터키석색"},"shade":7},"59":{"id":59,"color":{"R":31,"G":70,"B":70},"name":{"en":"Morbol Green","de":"Morbolgrün","fr":"vert morbol","ja":"モルボルグリーン","cn":"魔花绿","ko":"몰볼색"},"shade":7},"60":{"id":60,"color":{"R":178,"G":196,"B":206},"name":{"en":"Ice Blue","de":"Eisblau","fr":"bleu glace","ja":"アイスブルー","cn":"寒冰蓝","ko":"옅은 하늘색"},"shade":8},"61":{"id":61,"color":{"R":131,"G":176,"B":210},"name":{"en":"Sky Blue","de":"Himmelblau","fr":"bleu ciel","ja":"スカイブルー","cn":"天空蓝","ko":"하늘색"},"shade":8},"62":{"id":62,"color":{"R":100,"G":129,"B":160},"name":{"en":"Seafog Blue","de":"Seenebelblau","fr":"bleu horizon","ja":"シーフォグブルー","cn":"海雾蓝","ko":"바다안개색"},"shade":8},"63":{"id":63,"color":{"R":59,"G":104,"B":134},"name":{"en":"Peacock Blue","de":"Pfauenblau","fr":"bleu paon","ja":"ピーコックブルー","cn":"孔雀蓝","ko":"공작깃 파란색"},"shade":8},"64":{"id":64,"color":{"R":28,"G":61,"B":84},"name":{"en":"Rhotano Blue","de":"Rhotanoblau","fr":"bleu de Rhotano","ja":"ロータノブルー","cn":"罗海蓝","ko":"로타노 바다색"},"shade":8},"65":{"id":65,"color":{"R":142,"G":155,"B":172},"name":{"en":"Corpse Blue","de":"Leichenblau","fr":"bleu charron","ja":"コープスブルー","cn":"腐尸蓝","ko":"좀비의 얼굴색"},"shade":8},"66":{"id":66,"color":{"R":79,"G":87,"B":102},"name":{"en":"Ceruleum Blue","de":"Erdseimblau","fr":"bleu céruleum","ja":"セルレアムブルー","cn":"青磷蓝","ko":"청린수색"},"shade":8},"67":{"id":67,"color":{"R":47,"G":56,"B":81},"name":{"en":"Woad Blue","de":"Indigoblau","fr":"bleu guède","ja":"ウォードブルー","cn":"靛青蓝","ko":"쪽빛 파란색"},"shade":8},"68":{"id":68,"color":{"R":26,"G":31,"B":39},"name":{"en":"Ink Blue","de":"Tintenblau","fr":"bleu encre","ja":"インクブルー","cn":"油墨蓝","ko":"검푸른색"},"shade":8},"69":{"id":69,"color":{"R":91,"G":127,"B":192},"name":{"en":"Raptor Blue","de":"Raptorenblau","fr":"bleu raptor","ja":"ラプトルブルー","cn":"盗龙蓝","ko":"랍토르색"},"shade":8},"70":{"id":70,"color":{"R":47,"G":88,"B":137},"name":{"en":"Othard Blue","de":"Othardblau","fr":"bleu d\'Othard","ja":"オサードブルー","cn":"东洲蓝","ko":"오사드 바다색"},"shade":8},"71":{"id":71,"color":{"R":35,"G":65,"B":114},"name":{"en":"Storm Blue","de":"Sturmblau","fr":"bleu tempête","ja":"ストームブルー","cn":"风暴蓝","ko":"선명한 파란색"},"shade":8},"72":{"id":72,"color":{"R":17,"G":41,"B":68},"name":{"en":"Void Blue","de":"Nichtsblau","fr":"bleu du néant","ja":"ヴォイドブルー","cn":"虚空蓝","ko":"보이드의 파란색"},"shade":8},"73":{"id":73,"color":{"R":39,"G":48,"B":103},"name":{"en":"Royal Blue","de":"Königsblau","fr":"bleu royal","ja":"ロイヤルブルー","cn":"皇室蓝","ko":"감청색"},"shade":8},"74":{"id":74,"color":{"R":24,"G":25,"B":55},"name":{"en":"Midnight Blue","de":"Mitternachtsblau","fr":"bleu de minuit","ja":"ミッドナイトブルー","cn":"午夜蓝","ko":"밤하늘색"},"shade":8},"75":{"id":75,"color":{"R":55,"G":55,"B":71},"name":{"en":"Shadow Blue","de":"Schattenblau","fr":"bleu turquin","ja":"シャドウブルー","cn":"阴影蓝","ko":"청회색"},"shade":8},"76":{"id":76,"color":{"R":49,"G":45,"B":87},"name":{"en":"Abyssal Blue","de":"Tiefblau","fr":"bleu marine","ja":"アビサルブルー","cn":"深渊蓝","ko":"청보라색"},"shade":8},"77":{"id":77,"color":{"R":135,"G":127,"B":174},"name":{"en":"Lavender Purple","de":"Lavendelblau","fr":"lavande","ja":"ラベンダーブルー","cn":"薰衣草","ko":"라벤더색"},"shade":9},"78":{"id":78,"color":{"R":81,"G":69,"B":96},"name":{"en":"Gloom Purple","de":"Düsterviolett","fr":"colombin","ja":"グルームパープル","cn":"忧郁紫","ko":"어두운 보라색"},"shade":9},"79":{"id":79,"color":{"R":50,"G":44,"B":59},"name":{"en":"Currant Purple","de":"Johannisbeerenviolett","fr":"cassis","ja":"カラントパープル","cn":"醋栗紫","ko":"머루색"},"shade":9},"80":{"id":80,"color":{"R":183,"G":158,"B":188},"name":{"en":"Iris Purple","de":"Irisviolett","fr":"iris","ja":"アイリスパープル","cn":"虹膜紫","ko":"붓꽃색"},"shade":9},"81":{"id":81,"color":{"R":59,"G":42,"B":61},"name":{"en":"Grape Purple","de":"Weintraubenviolett","fr":"raisin","ja":"グレープパープル","cn":"葡萄紫","ko":"포도색"},"shade":9},"82":{"id":82,"color":{"R":254,"G":206,"B":245},"name":{"en":"Lotus Pink","de":"Lotusrosa","fr":"mauve lotus","ja":"ロータスピンク","cn":"莲花粉","ko":"연꽃색"},"shade":9},"83":{"id":83,"color":{"R":220,"G":155,"B":202},"name":{"en":"Colibri Pink","de":"Kolibrirosa","fr":"mauve colibri","ja":"コリブリピンク","cn":"蜂鸟粉","ko":"콜리브리색"},"shade":9},"84":{"id":84,"color":{"R":121,"G":82,"B":108},"name":{"en":"Plum Purple","de":"Pflaumenviolett","fr":"prune","ja":"プラムパープル","cn":"仙子梅","ko":"매화색"},"shade":9},"85":{"id":85,"color":{"R":102,"G":48,"B":78},"name":{"en":"Regal Purple","de":"Königsviolett","fr":"byzantium","ja":"リーガルパープル","cn":"帝王紫","ko":"자주색"},"shade":9},"86":{"id":86,"color":{"R":228,"G":0,"B":17},"name":{"en":"Ruby Red","de":"Rubinrot","fr":"rouge rubis","ja":"ルビーレッド","cn":"宝石红","ko":"홍옥색"},"shade":4},"87":{"id":87,"color":{"R":245,"G":55,"B":155},"name":{"en":"Cherry Pink","de":"Kirschpink","fr":"rose cerise","ja":"チェリーピンク","cn":"樱桃粉","ko":"꽃분홍색"},"shade":4},"88":{"id":88,"color":{"R":254,"G":248,"B":100},"name":{"en":"Canary Yellow","de":"Kanariengelb","fr":"jaune serin","ja":"カナリーイエロー","cn":"丝雀黄","ko":"카나리아색"},"shade":6},"89":{"id":89,"color":{"R":251,"G":241,"B":180},"name":{"en":"Vanilla Yellow","de":"Vanillegelb","fr":"jaune vanille","ja":"バニライエロー","cn":"香草黄","ko":"바닐라색"},"shade":6},"90":{"id":90,"color":{"R":0,"G":14,"B":162},"name":{"en":"Dragoon Blue","de":"Dragoonblau","fr":"bleu dragon","ja":"ドラグーンブルー","cn":"龙骑蓝","ko":"새파란색"},"shade":8},"91":{"id":91,"color":{"R":4,"G":175,"B":205},"name":{"en":"Turquoise Blue","de":"Cyan","fr":"bleu turquoise","ja":"ターコイズブルー","cn":"松石蓝","ko":"담청색"},"shade":8},"92":{"id":92,"color":{"R":96,"G":96,"B":104},"name":{"en":"Gunmetal Black","de":"Cermetgrau","fr":"bronze à canon","ja":"ガンメタル","cn":"炮铜黑","ko":"건메탈색"},"shade":10},"93":{"id":93,"color":{"R":233,"G":227,"B":218},"name":{"en":"Pearl White","de":"Perlmutt","fr":"blanc perlé","ja":"パールホワイト","cn":"珍珠白","ko":"진주색"},"shade":10},"94":{"id":94,"color":{"R":231,"G":209,"B":151},"name":{"en":"Metallic Brass","de":"Metallic Messing","fr":"cuivre jaune","ja":"シャインブラス","cn":"金属铜","ko":"황동색"},"shade":10},"95":{"id":95,"color":{"R":0,"G":0,"B":0},"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"shade":0},"96":{"id":96,"color":{"R":0,"G":0,"B":0},"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"shade":0},"97":{"id":97,"color":{"R":0,"G":0,"B":0},"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"shade":0},"98":{"id":98,"color":{"R":0,"G":0,"B":0},"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"shade":0},"99":{"id":99,"color":{"R":0,"G":0,"B":0},"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"shade":0},"100":{"id":100,"color":{"R":0,"G":0,"B":0},"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"shade":0},"101":{"id":101,"color":{"R":249,"G":248,"B":244},"name":{"en":"Pure White","de":"Wolkenweiß","fr":"blanc immaculé","ja":"ピュアホワイト","cn":"无瑕白","ko":"순백색"},"shade":10},"102":{"id":102,"color":{"R":30,"G":30,"B":30},"name":{"en":"Jet Black","de":"Rabenschwarz","fr":"noir de jais","ja":"ジェットブラック","cn":"煤玉黑","ko":"칠흑색"},"shade":10},"103":{"id":103,"color":{"R":253,"G":200,"B":198},"name":{"en":"Pastel Pink","de":"Pastellrosa","fr":"rose pastel","ja":"パステルピンク","cn":"柔彩粉","ko":"부드러운 연분홍"},"shade":10},"104":{"id":104,"color":{"R":50,"G":25,"B":25},"name":{"en":"Dark Red","de":"Dunkelrot","fr":"rouge foncé","ja":"ダークレッド","cn":"黑暗红","ko":"짙은 빨강"},"shade":10},"105":{"id":105,"color":{"R":40,"G":33,"B":28},"name":{"en":"Dark Brown","de":"Dunkelbraun","fr":"brun foncé","ja":"ダークブラウン","cn":"黑暗棕","ko":"짙은 갈색"},"shade":10},"106":{"id":106,"color":{"R":186,"G":207,"B":170},"name":{"en":"Pastel Green","de":"Pastellgrün","fr":"vert pastel","ja":"パステルグリーン","cn":"柔彩绿","ko":"부드러운 연녹색"},"shade":10},"107":{"id":107,"color":{"R":21,"G":44,"B":44},"name":{"en":"Dark Green","de":"Dunkelgrün","fr":"vert foncé","ja":"ダークグリーン","cn":"黑暗绿","ko":"짙은 녹색"},"shade":10},"108":{"id":108,"color":{"R":150,"G":164,"B":217},"name":{"en":"Pastel Blue","de":"Pastellblau","fr":"bleu pastel","ja":"パステルブルー","cn":"柔彩蓝","ko":"부드러운 연파랑"},"shade":10},"109":{"id":109,"color":{"R":18,"G":31,"B":45},"name":{"en":"Dark Blue","de":"Dunkelblau","fr":"bleu foncé","ja":"ダークブルー","cn":"黑暗蓝","ko":"짙은 파랑"},"shade":10},"110":{"id":110,"color":{"R":187,"G":181,"B":218},"name":{"en":"Pastel Purple","de":"Pastellviolett","fr":"violet pastel","ja":"パステルパープル","cn":"柔彩紫","ko":"부드러운 연보라"},"shade":10},"111":{"id":111,"color":{"R":35,"G":32,"B":38},"name":{"en":"Dark Purple","de":"Dunkelviolett","fr":"violet foncé","ja":"ダークパープル","cn":"黑暗紫","ko":"짙은 자주색"},"shade":10},"112":{"id":112,"color":{"R":167,"G":167,"B":167},"name":{"en":"Metallic Silver","de":"Metallic Silber","fr":"argent brillant","ja":"シルバー","cn":"闪耀银","ko":"은색"},"shade":10},"113":{"id":113,"color":{"R":237,"G":230,"B":61},"name":{"en":"Metallic Gold","de":"Metallic Gold","fr":"or brillant","ja":"ゴールド","cn":"闪耀金","ko":"금색"},"shade":10},"114":{"id":114,"color":{"R":182,"G":29,"B":75},"name":{"en":"Metallic Red","de":"Metallic Rot","fr":"rouge métallique","ja":"メタリックレッド","cn":"金属红","ko":"금속질 빨간색"},"shade":10},"115":{"id":115,"color":{"R":228,"G":140,"B":47},"name":{"en":"Metallic Orange","de":"Metallic Orange","fr":"orange métallique","ja":"メタリックオレンジ","cn":"金属橙","ko":"금속질 주황색"},"shade":10},"116":{"id":116,"color":{"R":244,"G":218,"B":70},"name":{"en":"Metallic Yellow","de":"Metallic Gelb","fr":"jaune métallique","ja":"メタリックイエロー","cn":"金属黄","ko":"금속질 노란색"},"shade":10},"117":{"id":117,"color":{"R":34,"G":167,"B":87},"name":{"en":"Metallic Green","de":"Metallic Grün","fr":"vert métallique","ja":"メタリックグリーン","cn":"金属绿","ko":"금속질 녹색"},"shade":10},"118":{"id":118,"color":{"R":94,"G":212,"B":230},"name":{"en":"Metallic Sky Blue","de":"Metallic Himmelblau","fr":"bleu ciel métallique","ja":"メタリックスカイブルー","cn":"金属蓝","ko":"금속질 하늘색"},"shade":10},"119":{"id":119,"color":{"R":80,"G":82,"B":217},"name":{"en":"Metallic Blue","de":"Metallic Blau","fr":"bleu métallique","ja":"メタリックブルー","cn":"金属靛","ko":"금속질 파란색"},"shade":10},"120":{"id":120,"color":{"R":163,"G":102,"B":194},"name":{"en":"Metallic Purple","de":"Metallic Violett","fr":"violet métallique","ja":"メタリックパープル","cn":"金属紫","ko":"금속질 보라색"},"shade":10}}');
;// CONCATENATED MODULE: ./src/chocobo-color/ffxiv-chocobo-color/data/fruits.json
const fruits_namespaceObject = JSON.parse('{"8157":{"id":8157,"icon":25308,"name":{"en":"Xelphatol Apple","de":"Xelphatol-Apfel","fr":"Pomme de Xelphatol","ja":"ゼルファトルの果実","cn":"塞尔法特尔沙果","ko":"젤파톨 사과"},"singular":{"en":"Xelphatol apple","de":"Xelphatol-Apfel","fr":"pomme de Xelphatol","ja":"ゼルファトルの果実","cn":"塞尔法特尔沙果","ko":"젤파톨 사과"},"plural":{"en":"Xelphatol apples","de":"Xelphatol-Äpfel","fr":"pommes de Xelphatol","ja":"","cn":"","ko":""}},"8158":{"id":8158,"icon":25311,"name":{"en":"Doman Plum","de":"Doma-Pflaume","fr":"Prune de Doma","ja":"ドマの果実","cn":"多玛青梅","ko":"도마 자두"},"singular":{"en":"Doman plum","de":"Doma-Pflaume","fr":"prune de Doma","ja":"ドマの果実","cn":"多玛青梅","ko":"도마 자두"},"plural":{"en":"Doman plums","de":"Doma-Pflaumen","fr":"prunes de Doma","ja":"","cn":"","ko":""}},"8159":{"id":8159,"icon":25313,"name":{"en":"Mamook Pear","de":"Mamook-Birne","fr":"Poire alligator de Mamook","ja":"マムークの果実","cn":"辉鳞油梨","ko":"마무크 배"},"singular":{"en":"Mamook pear","de":"Mamook-Birne","fr":"poire alligator de Mamook","ja":"マムークの果実","cn":"辉鳞油梨","ko":"마무크 배"},"plural":{"en":"Mamook pears","de":"Mamook-Birnen","fr":"poires alligator de Mamook","ja":"","cn":"","ko":""}},"8160":{"id":8160,"icon":25310,"name":{"en":"Valfruit","de":"Val-Frucht","fr":"Groseille sanguine du Val","ja":"バルの果実","cn":"瓦尔醋栗","ko":"발 딸기"},"singular":{"en":"valfruit","de":"Val-Frucht","fr":"groseille sanguine du Val","ja":"バルの果実","cn":"瓦尔醋栗","ko":"발 딸기"},"plural":{"en":"valfruits","de":"Val-Früchte","fr":"groseilles sanguines du Val","ja":"","cn":"","ko":""}},"8161":{"id":8161,"icon":25309,"name":{"en":"O\'Ghomoro Berries","de":"O\'Ghomoro-Beere","fr":"Raisin d\'O\'Ghomoro","ja":"オ・ゴモロの果実","cn":"奥·哥摩罗浆果","ko":"오고모로 포도"},"singular":{"en":"bunch of O\'Ghomoro berries","de":"O\'Ghomoro-Beere","fr":"grappe de raisin d\'O\'Ghomoro","ja":"オ・ゴモロの果実","cn":"奥·哥摩罗浆果","ko":"오고모로 포도"},"plural":{"en":"bunches of O\'Ghomoro berries","de":"O\'Ghomoro-Beeren","fr":"grappes de raisin d\'O\'Ghomoro","ja":"","cn":"","ko":""}},"8162":{"id":8162,"icon":25303,"name":{"en":"Cieldalaes Pineapple","de":"Cieldaläen-Ananas","fr":"Ananas des Cieldalaes","ja":"シェルダレーの果実","cn":"谢尔达莱凤梨","ko":"시엘달레 파인애플"},"singular":{"en":"Cieldalaes pineapple","de":"Cieldaläen-Ananas","fr":"ananas des Cieldalaes","ja":"シェルダレーの果実","cn":"谢尔达莱凤梨","ko":"시엘달레 파인애플"},"plural":{"en":"Cieldalaes pineapples","de":"Cieldaläen-Ananas","fr":"ananas des Cieldalaes","ja":"","cn":"","ko":""}},"8163":{"id":8163,"icon":25305,"name":{"en":"Han Lemon","de":"Han-Zitrone","fr":"Citron de Radz-at-Han","ja":"ラザハンの果実","cn":"拉札罕柠檬","ko":"라자한 레몬"},"singular":{"en":"Han lemon","de":"Han-Zitrone","fr":"citron de Radz-at-Han","ja":"ラザハンの果実","cn":"拉札罕柠檬","ko":"라자한 레몬"},"plural":{"en":"Han lemons","de":"Han-Zitronen","fr":"citrons de Radz-at-Han","ja":"","cn":"","ko":""}}}');
;// CONCATENATED MODULE: ./src/chocobo-color/ffxiv-chocobo-color/data/index.ts


function clampRGB(value) {
    return value < 0 ? 0 : value > 255 ? 255 : value;
}
class Color {
    constructor(R, G, B){
        this.R = clampRGB(R);
        this.G = clampRGB(G);
        this.B = clampRGB(B);
    }
    add({ R , G , B  }) {
        return new Color(this.R + R, this.G + G, this.B + B);
    }
    differenceFrom(color) {
        return {
            R: color.R - this.R,
            G: color.G - this.G,
            B: color.B - this.B
        };
    }
    distanceTo(color) {
        return Math.hypot(this.R - color.R, this.G - color.G, this.B - color.B);
    }
}
var Shade;
(function(Shade) {
    Shade["White"] = "white";
    Shade["Red"] = "red";
    Shade["Brown"] = "brown";
    Shade["Yellow"] = "yellow";
    Shade["Green"] = "green";
    Shade["Blue"] = "blue";
    Shade["Purple"] = "purple";
})(Shade || (Shade = {}));
for (const stain of Object.values(stains_namespaceObject)){
    stain.color = new Color(stain.color.R, stain.color.G, stain.color.B);
}
const stains = stains_namespaceObject;
const fruits = fruits_namespaceObject;


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Il": () => (/* reexport */ data/* Color */.Il),
  "PO": () => (/* binding */ Fruit),
  "j0": () => (/* reexport */ data/* Shade */.j0),
  "uX": () => (/* binding */ calculateFruits),
  "$x": () => (/* binding */ fruitValues),
  "cl": () => (/* binding */ isValidStain),
  "Iu": () => (/* binding */ translate)
});

// UNUSED EXPORTS: calculateFruitsDistance, calculateFruitsMatrix

// EXTERNAL MODULE: ./src/chocobo-color/ffxiv-chocobo-color/data/index.ts + 2 modules
var data = __webpack_require__(3905);
;// CONCATENATED MODULE: ./src/chocobo-color/ffxiv-chocobo-color/locales/en.json
const en_namespaceObject = JSON.parse('{"shade":{"white":"White","red":"Red","brown":"Brown","yellow":"Yellow","green":"Green","blue":"Blue","purple":"Purple"}}');
;// CONCATENATED MODULE: ./src/chocobo-color/ffxiv-chocobo-color/locales/de.json
const de_namespaceObject = JSON.parse('{"shade":{"white":"Weiß","red":"Rot","brown":"Braun","yellow":"Gelb","green":"Grün","blue":"Blau","purple":"Lila"}}');
;// CONCATENATED MODULE: ./src/chocobo-color/ffxiv-chocobo-color/locales/fr.json
const fr_namespaceObject = JSON.parse('{"shade":{"white":"Blanc","red":"Rouge","brown":"Brun","yellow":"Jaune","green":"Vert","blue":"Bleu","purple":"Violet"}}');
;// CONCATENATED MODULE: ./src/chocobo-color/ffxiv-chocobo-color/locales/ja.json
const ja_namespaceObject = JSON.parse('{"shade":{"white":"白","red":"赤","brown":"褐","yellow":"黄","green":"緑","blue":"青","purple":"紫"}}');
;// CONCATENATED MODULE: ./src/chocobo-color/ffxiv-chocobo-color/locales/cn.json
const cn_namespaceObject = JSON.parse('{"shade":{"white":"白色","red":"红色","brown":"棕色","yellow":"黄色","green":"绿色","blue":"蓝色","purple":"紫色"}}');
;// CONCATENATED MODULE: ./src/chocobo-color/ffxiv-chocobo-color/locales/ko.json
const ko_namespaceObject = JSON.parse('{"shade":{"white":"백색","red":"빨강","brown":"갈색","yellow":"황색","green":"녹색","blue":"청색","purple":"심훙색"}}');
;// CONCATENATED MODULE: ./src/chocobo-color/ffxiv-chocobo-color/index.ts







const LOCALES = {
    en: en_namespaceObject,
    de: de_namespaceObject,
    fr: fr_namespaceObject,
    ja: ja_namespaceObject,
    cn: cn_namespaceObject,
    ko: ko_namespaceObject
};

var Fruit;
(function(Fruit) {
    Fruit[Fruit["XelphatolApple"] = 8157] = "XelphatolApple";
    Fruit[Fruit["DomanPlum"] = 8158] = "DomanPlum";
    Fruit[Fruit["MamookPear"] = 8159] = "MamookPear";
    Fruit[Fruit["Valfruit"] = 8160] = "Valfruit";
    Fruit[Fruit["OGhomoroBerries"] = 8161] = "OGhomoroBerries";
    Fruit[Fruit["CieldalaesPineapple"] = 8162] = "CieldalaesPineapple";
})(Fruit || (Fruit = {}));
const fruitValues = {
    [Fruit.XelphatolApple]: {
        R: 5,
        G: -5,
        B: -5
    },
    [Fruit.MamookPear]: {
        R: -5,
        G: 5,
        B: -5
    },
    [Fruit.OGhomoroBerries]: {
        R: -5,
        G: -5,
        B: 5
    },
    [Fruit.DomanPlum]: {
        R: -5,
        G: 5,
        B: 5
    },
    [Fruit.Valfruit]: {
        R: 5,
        G: -5,
        B: 5
    },
    [Fruit.CieldalaesPineapple]: {
        R: 5,
        G: 5,
        B: -5
    }
};
function _pick(array, count) {
    if (count === 1) {
        return array.map((x)=>[
                x
            ]
        );
    } else {
        return array.flatMap((x)=>_pick(array, count - 1).map((subPick)=>[
                    x,
                    ...subPick
                ]
            )
        );
    }
}
function pick(array, count) {
    return Array.from(Array(count)).flatMap((_, index)=>_pick(array, index + 1)
    );
}
function maximum(array, predicate) {
    let maxVal = -Infinity;
    let maxElem = null;
    for (const elem of array){
        const val = predicate(elem);
        if (val > maxVal) {
            maxVal = val;
            maxElem = elem;
        }
    }
    return {
        elem: maxElem,
        val: maxVal
    };
}
function isValidStain(stain) {
    return stain.id !== 0 && stain.shade >= 2 && stain.shade <= 9 && stain.id <= 85;
}
function calculateFruitsDistance(fromColor, toColor, lookahead = 1) {
    const fruits1 = [];
    let currentColor = fromColor;
    let currentDistance = fromColor.distanceTo(toColor);
    while(true){
        const best = maximum(pick(Object.keys(fruitValues).map((key)=>Number(key)
        ), lookahead), (fruits)=>-fruits.reduce((acc, curr)=>acc.add(fruitValues[curr])
            , currentColor).distanceTo(toColor)
        );
        if (-best.val >= currentDistance) {
            return {
                fruits: fruits1,
                color: currentColor,
                distance: currentDistance
            };
        } else {
            fruits1.push(best.elem[0]);
            currentColor = currentColor.add(fruitValues[best.elem[0]]);
            currentDistance = currentColor.distanceTo(toColor);
        }
    }
}
function calculateFruitsMatrix(fromColor, toColor) {
    const difference = fromColor.differenceFrom(toColor);
    const fR = -(difference.G + difference.B) / 10;
    const fG = -(difference.R + difference.B) / 10;
    const fB = -(difference.R + difference.G) / 10;
    const fruitCounts = [
        [
            Fruit.XelphatolApple,
            fR > 0 ? Math.round(fR) : 0
        ],
        [
            Fruit.MamookPear,
            fG > 0 ? Math.round(fG) : 0
        ],
        [
            Fruit.OGhomoroBerries,
            fB > 0 ? Math.round(fB) : 0
        ],
        [
            Fruit.Valfruit,
            fR < 0 ? Math.round(-fR) : 0
        ],
        [
            Fruit.DomanPlum,
            fG < 0 ? Math.round(-fG) : 0
        ],
        [
            Fruit.CieldalaesPineapple,
            fB < 0 ? Math.round(-fB) : 0
        ]
    ];
    const fruits = [];
    let currentColor = fromColor;
    while(fruitCounts.reduce((acc, curr)=>acc + curr[1]
    , 0) > 0){
        const best = maximum(fruitCounts.filter(([, count])=>count > 0
        ), ([fruit])=>{
            const nextColor = currentColor.add(fruitValues[fruit]);
            return -Math.max(...[
                nextColor.R,
                nextColor.G,
                nextColor.B
            ].map((val)=>Math.abs(127.5 - val)
            ));
        });
        fruits.push(best.elem[0]);
        currentColor = currentColor.add(fruitValues[best.elem[0]]);
        best.elem[1] -= 1;
    }
    return {
        fruits,
        color: currentColor,
        distance: currentColor.distanceTo(toColor)
    };
}
const cache = {};
function calculateFruits(fromStain, toStain) {
    const key = `${fromStain.id},${toStain.id}`;
    if (cache[key] !== undefined) {
        return cache[key];
    }
    const solution = calculateFruitsDistance(fromStain.color, toStain.color, 3);
    // Honey Yellow -> Currant Purple
    if (fromStain.id === 37 && toStain.id === 79) {
        solution.fruits.splice(solution.fruits.lastIndexOf(Fruit.XelphatolApple), 1);
        solution.color = solution.color.add(fruitValues[Fruit.DomanPlum]);
        solution.distance = solution.color.distanceTo(toStain.color);
    }
    // Celeste Green -> Currant Purple
    if (fromStain.id === 57 && toStain.id === 79) {
        solution.fruits.push(Fruit.MamookPear);
        solution.color = solution.color.add(fruitValues[Fruit.MamookPear]);
        solution.distance = solution.color.distanceTo(toStain.color);
    }
    return cache[key] = solution;
}
function translate(type, id, locale = "en") {
    var ref, ref1;
    const translation = (ref = LOCALES[locale]) === null || ref === void 0 ? void 0 : (ref1 = ref[type]) === null || ref1 === void 0 ? void 0 : ref1[id];
    return translation !== null ? translation : `{${type}.${id}}`;
}


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


/***/ })

};
;