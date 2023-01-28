"use strict";
(() => {
var exports = {};
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 3956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ bozja),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: ./src/Page.tsx
var Page = __webpack_require__(6906);
// EXTERNAL MODULE: ./src/skywatcher/UpcomingWeatherTable.tsx + 1 modules
var UpcomingWeatherTable = __webpack_require__(1039);
// EXTERNAL MODULE: ./src/skywatcher/ffxiv-skywatcher/src/types.ts
var types = __webpack_require__(7456);
;// CONCATENATED MODULE: ./src/bozja/UpcomingWeathers.tsx




const UpcomingWeathers = ()=>{
    const { 0: now1 , 1: setNow  } = (0,external_react_.useState)(new Date());
    (0,external_react_.useEffect)(()=>{
        let interval;
        (function loop() {
            const now = new Date();
            setNow(now);
            interval = setTimeout(()=>{
                interval = setTimeout(loop, (60000 - now.getTime() * 1440 / 70 % 60000) / (1440 / 70));
            }, 0);
        })();
        return ()=>{
            clearTimeout(interval);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(UpcomingWeatherTable/* default */.Z, {
        now: now1,
        places: [
            {
                place: types/* Place.BozjanSouthernFront */.N.BozjanSouthernFront,
                weatherRateIndex: 0
            }
        ],
        showLabels: true,
        showLocalTime: true,
        count: 14,
        hidePlaceName: true
    });
};
/* harmony default export */ const bozja_UpcomingWeathers = (UpcomingWeathers);

// EXTERNAL MODULE: external "@mui/material/Tabs"
var Tabs_ = __webpack_require__(8544);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
// EXTERNAL MODULE: external "@mui/material/Table"
var Table_ = __webpack_require__(9181);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);
// EXTERNAL MODULE: external "@mui/material/TableHead"
var TableHead_ = __webpack_require__(5953);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);
// EXTERNAL MODULE: external "@mui/material/TableBody"
var TableBody_ = __webpack_require__(8823);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);
// EXTERNAL MODULE: external "@mui/material/TableRow"
var TableRow_ = __webpack_require__(4848);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(5612);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);
;// CONCATENATED MODULE: ./src/bozja/RankIcon.tsx



const mapRank = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    S: "\u2605"
};
const RankIcon = ({ rank  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
        variant: "outlined",
        sx: {
            display: "inline-block",
            width: "2em",
            textAlign: "center",
            fontWeight: "bold",
            mr: 1
        },
        children: mapRank[rank]
    });
};
/* harmony default export */ const bozja_RankIcon = (RankIcon);

// EXTERNAL MODULE: ./src/Section.tsx
var Section = __webpack_require__(8884);
// EXTERNAL MODULE: ./src/skywatcher/WeatherIcon.tsx + 1 modules
var WeatherIcon = __webpack_require__(2203);
;// CONCATENATED MODULE: ./src/bozja/utils.ts
function formatMonster(label, locale) {
    // TODO: weird bracket stuffs in German
    switch(locale){
        case "en":
        case "de":
        case "cn":
        case "ko":
            return label.split(" ").map((word)=>{
                if ([
                    "of",
                    "des"
                ].includes(word)) {
                    return word;
                } else {
                    return word[0].toUpperCase() + word.slice(1);
                }
            }).join(" ");
        case "fr":
            return label[0].toUpperCase() + label.slice(1);
        default:
            return label;
    }
}

;// CONCATENATED MODULE: ./src/bozja/ffxiv-bozja/data/bozja.json
const bozja_namespaceObject = JSON.parse('{"ev":{"30884":{"id":30884,"name":{"en":"Forgotten Fragment of Caution","de":"Unbegutachteter Frontsplitter der Neuartigkeit","fr":"Éclat oublié non identifié de fougue","ja":"未鑑定ロストシャード:新鋭","cn":"未鉴定的新锐失传碎晶","ko":"미감정 로스트 샤드: 신예"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 2\\r\\nPotential memories contained: Lost Manawall, Lost Stealth, Lost Protect, Lost Shell, Lost Cure, Lost Cure III, Lost Incense","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 2)\\r\\nKann folgende Verschollene Kommandos enthalten: Verschollene Mana-Wand, Verschollene Coeurl-Pfoten, Verschollenes Protes, Verschollenes Vallum, Verschollene Vita, Verschollene Vitaga, Verschollener Hohn","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Mur de mana oublié, Furtivité oubliée, Bouclier oublié, Barrière oubliée, Soin oublié, Méga Soin oublié ou Incitation oubliée.\\r\\nRang de résistant requis<Indent/>: 2","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:2\\r\\n鑑定結果候補:ロスト・ウォール／ロスト・ステルス／ロスト・プロテス／ロスト・シェル／ロスト・ケアル／ロスト・ケアルガ／ロスト・エンミティ","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：2\\r\\n鉴定结果预测：失传坚壁/失传潜行/失传护盾/失传魔盾/失传治疗/失传愈疗/失传激怒","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 2\\n감정 결과 후보: 로스트 장벽/로스트 은신/로스트 프로테스/로스트 셸/로스트 케알/로스트 케알가/로스트 적의"}},"30885":{"id":30885,"name":{"en":"Forgotten Fragment of Preparation","de":"Unbegutachteter Frontsplitter der Unterstützung","fr":"Éclat oublié non identifié de soutien","ja":"未鑑定ロストシャード:支援","cn":"未鉴定的支援失传碎晶","ko":"미감정 로스트 샤드: 지원"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 2\\r\\nPotential memories contained: Resistance Phoenix, Resistance Potion","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 2)\\r\\nKann folgende Verschollene Kommandos enthalten: Phönixfeder des Widerstands, Heiltrank des Widerstands","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Plume de phénix de la résistance ou Potion de la résistance.\\r\\nRang de résistant requis<Indent/>: 2","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:2\\r\\n鑑定結果候補:レジスタンスフェニックスフェザー／レジスタンスポーション","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：2\\r\\n鉴定结果预测：义军不死鸟之尾/义军恢复药","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 2\\n감정 결과 후보: 저항군용 피닉스 깃털/저항군용 포션"}},"30886":{"id":30886,"name":{"en":"Forgotten Fragment of Skill","de":"Unbegutachteter Frontsplitter der Verstärkung","fr":"Éclat oublié non identifié de perfectionnement","ja":"未鑑定ロストシャード:強化","cn":"未鉴定的强化失传碎晶","ko":"미감정 로스트 샤드: 강화"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 2\\r\\nPotential memories contained: Essence of the Aetherweaver, Essence of the Martialist, Essence of the Savior, Essence of the Veteran, Essence of the Platebearer","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 2)\\r\\nKann folgende Verschollene Kommandos enthalten: Zaubertrank des Veteranen, Zaubertrank des Kämpfers, Zaubertrank des Heilers, Zaubertrank des Kampfmagiers, Zaubertrank des Ritters","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Breuvage magique de prêtre guerrier, Breuvage magique de protecteur intrépide, Breuvage magique de vivificateur, Breuvage magique de mage guerrier ou Breuvage magique de soldat cuirassé.\\r\\nRang de résistant requis<Indent/>: 2","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:2\\r\\n鑑定結果候補:術士の秘薬／闘士の秘薬／治癒者の秘薬／魔戦士の秘薬／重騎兵の秘薬","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：2\\r\\n鉴定结果预测：术士的秘药/斗士的秘药/治愈者的秘药/魔战士的秘药/重骑兵的秘药","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 2\\n감정 결과 후보: 술사의 비약/투사의 비약/치유자의 비약/마전사의 비약/중기병의 비약"}},"30887":{"id":30887,"name":{"en":"Forgotten Fragment of Ingenuity","de":"Unbegutachteter Frontsplitter der Unterweisung","fr":"Éclat oublié non identifié de maîtrise","ja":"未鑑定ロストシャード:熟練","cn":"未鉴定的熟练失传碎晶","ko":"미감정 로스트 샤드: 숙련"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 5\\r\\nPotential memories contained: Lost Paralyze III, Lost Banish III, Lost Dispel, Lost Spellforge, Lost Steelsting, Lost Swift","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 5)\\r\\nKann folgende Verschollene Kommandos enthalten: Verschollenes Paralyga, Verschollenes Verbannga, Verschollenes Entzaubern, Verschollene Zauberschmiede, Verschollener Stahlstachel, Verschollene Eile","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Méga Paralysie oubliée, Méga Bannissement oublié, Dissipation oubliée, Forgesort oublié, Morsure de l\'acier oubliée ou Vélocité oubliée.\\r\\nRang de résistant requis<Indent/>: 5","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:5\\r\\n鑑定結果候補:ロスト・パライガ／ロスト・バニシュガ／ロスト・ディスペル／ロスト・スペルフォージ／ロスト・スチールスティング／ロスト・スウィフト","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：5\\r\\n鉴定结果预测：失传强麻痹/失传强放逐/失传驱魔/失传铸魔/失传钢刺/失传敏捷","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 5\\n감정 결과 후보: 로스트 파라이가/로스트 배니시가/로스트 디스펠/로스트 마법 연성/로스트 강철 화살/로스트 질주"}},"30888":{"id":30888,"name":{"en":"Forgotten Fragment of Care","de":"Unbegutachteter Frontsplitter der Heilung","fr":"Éclat oublié non identifié de guérison","ja":"未鑑定ロストシャード:治癒","cn":"未鉴定的治愈失传碎晶","ko":"미감정 로스트 샤드: 치유"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 5\\r\\nPotential memories contained: Resistance Reraiser, Resistance Potion Kit, Resistance Ether Kit","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 5)\\r\\nKann folgende Verschollene Kommandos enthalten: Lebensfeder des Widerstands, Tränkesammlung des Widerstands, Äthersammlung des Widerstands","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Vitaplume de la résistance, Kit de potion de la résistance ou Kit d\'éther de la résistance.\\r\\nRang de résistant requis<Indent/>: 5","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:5\\r\\n鑑定結果候補:レジスタンスリレイザー／レジスタンスポーションキット／レジスタンスエーテルキット","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：5\\r\\n鉴定结果预测：义军复活药/义军恢复药箱/义军以太药箱","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 5\\n감정 결과 후보: 저항군용 리레이저/저항군용 포션 키트/저항군용 에테르 키트"}},"30889":{"id":30889,"name":{"en":"Forgotten Fragment of Awakening","de":"Unbegutachteter Frontsplitter der Hypnose","fr":"Éclat oublié non identifié d\'hypnose","ja":"未鑑定ロストシャード:催眠","cn":"未鉴定的催眠失传碎晶","ko":"미감정 로스트 샤드: 최면"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 5\\r\\nPotential memories contained: Essence of the Guardian, Essence of the Ordained, Essence of the Skirmisher, Essence of the Watcher, Essence of the Profane, Essence of the Irregular, Essence of the Breathtaker","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 5)\\r\\nKann folgende Verschollene Kommandos enthalten: Zaubertrank des Beschützers, Zaubertrank des Priesters, Zaubertrank des Kriegers, Zaubertrank des Spähers, Zaubertrank des Mönchs, Zaubertrank des Berserkers, Zaubertrank des Diebes","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Breuvage magique de gardien, Breuvage magique de prêtre, Breuvage magique de combattant, Breuvage magique d\'éclaireur, Breuvage magique de prêtre hérétique,  Breuvage magique de guerrier enragé ou Breuvage magique de voleur.\\r\\nRang de résistant requis<Indent/>: 5","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:5\\r\\n鑑定結果候補:守護者の秘薬／司祭の秘薬／武人の秘薬／斥候の秘薬／破戒僧の秘薬／狂戦士の秘薬／盗賊の秘薬","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：5\\r\\n鉴定结果预测：守护者的秘药/祭司的秘药/武人的秘药/斥候的秘药/破戒僧的秘药/狂战士的秘药/盗贼的秘药","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 5\\n감정 결과 후보: 수호자의 비약/사제의 비약/무인의 비약/척후의 비약/파계승의 비약/광전사의 비약/도적의 비약"}},"30890":{"id":30890,"name":{"en":"Forgotten Fragment of Support","de":"Unbegutachteter Frontsplitter der Hingabe","fr":"Éclat oublié non identifié d\'abnégation","ja":"未鑑定ロストシャード:献身","cn":"未鉴定的献身失传碎晶","ko":"미감정 로스트 샤드: 헌신"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 8\\r\\nPotential memories contained: Lost Reflect, Lost Stoneskin, Lost Bravery","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 8)\\r\\nKann folgende Verschollene Kommandos enthalten: Verschollene Reflektion, Verschollene Steinhaut, Verschollene Courage","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Miroir oublié, Cuirasse oubliée ou Bravoure oubliée.\\r\\nRang de résistant requis<Indent/>: 8","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:8\\r\\n鑑定結果候補:ロスト・リフレク／ロスト・ストンスキン／ロスト・ブレイブ","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：8\\r\\n鉴定结果预测：失传反射/失传石肤/失传勇气","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 8\\n감정 결과 후보: 로스트 리플렉트/로스트 스톤스킨/로스트 브레이브"}},"30891":{"id":30891,"name":{"en":"Forgotten Fragment of Violence","de":"Unbegutachteter Frontsplitter des Meuchelmords","fr":"Éclat oublié non identifié d\'élimination","ja":"未鑑定ロストシャード:暗殺","cn":"未鉴定的暗杀失传碎晶","ko":"미감정 로스트 샤드: 암살"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 8\\r\\nPotential memories contained: Lost Focus, Lost Slash, Lost Death","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 8)\\r\\nKann folgende Verschollene Kommandos enthalten: Verschollene Ladung, Verschollener Schlitzer, Verschollener Tod","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Focalisation oubliée, Taillade oubliée ou Mort oubliée.\\r\\nRang de résistant requis<Indent/>: 8","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:8\\r\\n鑑定結果候補:ロスト・チャージ／ロスト・スラッシュ／ロスト・デス","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：8\\r\\n鉴定结果预测：失传蓄力/失传斩击/失传即死","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 8\\n감정 결과 후보: 로스트 집중/로스트 참격/로스트 데스"}},"30892":{"id":30892,"name":{"en":"Forgotten Fragment of Resolve","de":"Unbegutachteter Frontsplitter des Entschlusses","fr":"Éclat oublié non identifié de résolution","ja":"未鑑定ロストシャード:決意","cn":"未鉴定的决意失传碎晶","ko":"미감정 로스트 샤드: 결의"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 8\\r\\nPotential memories contained: Banner of Noble Ends, Banner of Honored Sacrifice, Banner of Tireless Conviction, Banner of Firm Resolve, Banner of Solemn Clarity, Banner of Honed Acuity","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 8)\\r\\nKann folgende Verschollene Kommandos enthalten: Gemüt der Verdrossenheit, Gemüt der Ungehaltenheit, Gemüt der Beharrlichkeit, Gemüt der Folgsamkeit, Gemüt der Besinnlichkeit, Gemüt der Empfindsamkeit","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Seuil de la frénésie, Seuil de l\'abnégation, Seuil de la patience, Seuil de la pré<SoftHyphen/>ser<SoftHyphen/>va<SoftHyphen/>tion, Seuil de la contemplation ou Seuil de la perception.\\r\\nRang de résistant requis<Indent/>: 8","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:8\\r\\n鑑定結果候補:背水の境地／捨身の境地／忍耐の境地／堅守の境地／瞑想の境地／鋭敏の境地","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：8\\r\\n鉴定结果预测：背水境地/舍身境地/忍耐境地/坚守境地/冥想境地/敏锐境地","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 8\\n감정 결과 후보: 배수의 경지/필사의 경지/인내의 경지/수비의 경지/명상의 경지/예민의 경지"}},"30893":{"id":30893,"name":{"en":"Forgotten Fragment of Compassion","de":"Unbegutachteter Frontsplitter des Segens","fr":"Éclat oublié non identifié de bénédiction","ja":"未鑑定ロストシャード:祝福","cn":"未鉴定的祝福失传碎晶","ko":"미감정 로스트 샤드: 축복"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 8\\r\\nPotential memories contained: Lost Cure II, Lost Cure IV, Lost Arise, Resistance Medikit","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 8)\\r\\nKann folgende Verschollene Kommandos enthalten: Verschollene Vitra, Verschollene Vitaka, Verschollener Erzengel, Kräutersammlung des Widerstands","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Extra Soin oublié, Giga Soin oublié, Maxi-Vie oubliée ou Kit médical de la résistance.\\r\\nRang de résistant requis<Indent/>: 8","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:8\\r\\n鑑定結果候補:ロスト・ケアルラ／ロスト・ケアルジャ／ロスト・アレイズ／レジスタンスレメディキット","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：8\\r\\n鉴定结果预测：失传救疗/失传圣疗/失传完全复活/义军治愈箱","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 8\\n감정 결과 후보: 로스트 케알라/로스트 케알쟈/로스트 어레이즈/저항군용 치료제 키트"}},"30894":{"id":30894,"name":{"en":"Forgotten Fragment of Superstition","de":"Unbegutachteter Frontsplitter des Glaubens","fr":"Éclat oublié non identifié de croyance","ja":"未鑑定ロストシャード:信仰","cn":"未鉴定的信仰失传碎晶","ko":"미감정 로스트 샤드: 신앙"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 11\\r\\nPotential memories contained: Essence of the Bloodsucker, Essence of the Beast, Essence of the Templar","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 11)\\r\\nKann folgende Verschollene Kommandos enthalten: Zaubertrank des Blutsaugers, Zaubertrank der Wolfsleute, Zaubertrank des Paladins","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Breuvage magique de vampire, Breuvage magique d\'homme-loup ou Breuvage magique de chevalier sacré.\\r\\nRang de résistant requis<Indent/>: 11","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:11\\r\\n鑑定結果候補:吸血鬼の秘薬／人狼の秘薬／聖騎士の秘薬","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：11\\r\\n鉴定结果预测：吸血鬼的秘药/狼人的秘药/圣骑士的秘药","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 11\\n감정 결과 후보: 흡혈귀의 비약/늑대인간의 비약/성기사의 약"}},"30895":{"id":30895,"name":{"en":"Forgotten Fragment of Mastery","de":"Unbegutachteter Frontsplitter des Erwachens","fr":"Éclat oublié non identifié d\'exaltation","ja":"未鑑定ロストシャード:覚醒","cn":"未鉴定的觉醒失传碎晶","ko":"미감정 로스트 샤드: 각성"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 11\\r\\nPotential memories contained: Deep Essence of the Aetherweaver, Deep Essence of the Martialist, Deep Essence of the Savior, Deep Essence of the Veteran, Deep Essence of the Platebearer","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 11)\\r\\nKann folgende Verschollene Kommandos enthalten: Wundertrank des Veteranen, Wundertrank des Kämpfers, Wundertrank des Heilers, Wundertrank des Kampfmagiers, Wundertrank des Ritters","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Breuvage miraculeux de prêtre guerrier, Breuvage miraculeux de protecteur intrépide, Breuvage miraculeux de vivificateur, Breuvage miraculeux de mage guerrier ou Breuvage miraculeux de soldat cuirassé.\\r\\nRang de résistant requis<Indent/>: 11","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:11\\r\\n鑑定結果候補:術士の霊薬／闘士の霊薬／治癒者の霊薬／魔戦士の霊薬／重騎兵の霊薬","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：11\\r\\n鉴定结果预测：术士的灵药/斗士的灵药/治愈者的灵药/魔战士的灵药/重骑兵的灵药","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 11\\n감정 결과 후보: 술사의 영약/투사의 영약/치유자의 영약/마전사의 영약/중기병의 영약"}},"30896":{"id":30896,"name":{"en":"Forgotten Fragment of Sagacity","de":"Unbegutachteter Frontsplitter der Kampfkunst","fr":"Éclat oublié non identifié de tactique","ja":"未鑑定ロストシャード:戦術","cn":"未鉴定的战术失传碎晶","ko":"미감정 로스트 샤드: 전술"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 12\\r\\nPotential memories contained: Lost Font of Magic, Lost Font of Skill, Lost Font of Power","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 12)\\r\\nKann folgende Verschollene Kommandos enthalten: Verschollene Magiefontäne, Verschollene Technikfontäne, Verschollene Machtfontäne","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Fontaine de magie oubliée, Fontaine de technique oubliée ou Fontaine de puissance oubliée.\\r\\nRang de résistant requis<Indent/>: 12","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:12\\r\\n鑑定結果候補:ロスト・マジックフォント／ロスト・スキルフォント／ロスト・パワーフォント","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：12\\r\\n鉴定结果预测：失传魔泉/失传技泉/失传力泉","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 12\\n감정 결과 후보: 로스트 마법의 원천/로스트 기술의 원천/로스트 힘의 원천"}},"30897":{"id":30897,"name":{"en":"Forgotten Fragment of Becoming","de":"Unbegutachteter Frontsplitter der Müdigkeit","fr":"Éclat oublié non identifié de transe","ja":"未鑑定ロストシャード:睡魔","cn":"未鉴定的睡魔失传碎晶","ko":"미감정 로스트 샤드: 수마"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 13\\r\\nPotential memories contained: Deep Essence of the Guardian, Deep Essence of the Ordained, Deep Essence of the Skirmisher, Deep Essence of the Watcher, Deep Essence of the Profane, Deep Essence of the Irregular, Deep Essence of the Breathtaker","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 13)\\r\\nKann folgende Verschollene Kommandos enthalten: Wundertrank des Beschützers, Wundertrank des Priesters, Wundertrank des Kriegers, Wundertrank des Spähers, Wundertrank des Mönchs, Wundertrank des Berserkers, Wundertrank des Diebes","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Breuvage miraculeux de gardien, Breuvage miraculeux de prêtre, Breuvage miraculeux de combattant, Breuvage miraculeux d\'éclaireur, Breuvage miraculeux de prêtre hérétique, Breuvage miraculeux de guerrier enragé ou  Breuvage miraculeux de voleur.\\r\\nRang de résistant requis<Indent/>: 13","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:13\\r\\n鑑定結果候補:守護者の霊薬／司祭の霊薬／武人の霊薬／斥候の霊薬／破戒僧の霊薬／狂戦士の霊薬／盗賊の霊薬","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：13\\r\\n鉴定结果预测：守护者的灵药/祭司的灵药/武人的灵药/斥候的灵药/破戒僧的灵药/狂战士的灵药/盗贼的灵药","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 13\\n감정 결과 후보: 수호자의 영약/사제의 영약/무인의 영약/척후의 영약/파계승의 영약/광전사의 영약/도적의 영약"}},"30898":{"id":30898,"name":{"en":"Forgotten Fragment of Transcendence","de":"Unbegutachteter Frontsplitter der Verkündung","fr":"Éclat oublié non identifié d\'aubaine","ja":"未鑑定ロストシャード:福音","cn":"未鉴定的福音失传碎晶","ko":"미감정 로스트 샤드: 복음"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 14\\r\\nPotential memories contained: Deep Essence of the Bloodsucker, Deep Essence of the Beast, Deep Essence of the Templar","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 14)\\r\\nKann folgende Verschollene Kommandos enthalten: Wundertrank des Blutsaugers, Wundertrank der Wolfsleute, Wundertrank des Paladins","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Breuvage miraculeux de vampire, Breuvage miraculeux d\'homme-loup ou Breuvage miraculeux de chevalier sacré.\\r\\nRang de résistant requis<Indent/>: 14","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:14\\r\\n鑑定結果候補:吸血鬼の霊薬／人狼の霊薬／聖騎士の霊薬","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：14\\r\\n鉴定结果预测：吸血鬼的灵药/狼人的灵药/圣骑士的灵药","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 14\\n감정 결과 후보: 흡혈귀의 영약/늑대인간의 영약/성기사의 영약"}},"30899":{"id":30899,"name":{"en":"Forgotten Fragment of Caprice","de":"Unbegutachteter Frontsplitter der Kunst<SoftHyphen/>fer<SoftHyphen/>tig<SoftHyphen/>keit","fr":"Éclat oublié non identifié de finesse","ja":"未鑑定ロストシャード:技巧","cn":"未鉴定的技巧失传碎晶","ko":"미감정 로스트 샤드: 기교"},"description":{"en":"A single, unidentified memory of the lost.\\r\\n\\r\\nResistance rank required for appraisal: 15\\r\\nPotential memories contained: Lost Fair Trade, Mimic, Dynamis Dice","de":"In diesem Kristall ist eine verschollene Erinnerung enthalten. (Begutachtung ab Widerstandsrang 15)\\r\\nKann folgende Verschollene Kommandos enthalten: Verschollener Handel, Nachahmung, Würfel des Schicksals","fr":"Un fragment de cristal renfermant un savoir oublié depuis des lustres.\\r\\nSon identification peut octroyer Échange équitable oublié, Mime ou Dé du destin.\\r\\nRang de résistant requis<Indent/>: 15","ja":"記憶が秘められた結晶片\\r\\n鑑定に必要なレジスタンスランク:15\\r\\n鑑定結果候補:ロスト・フェアトレード／ものまね／運命のダイス","cn":"蕴藏有记忆的结晶片。\\r\\n鉴定所需义军等级：15\\r\\n鉴定结果预测：失传公平交易/模仿/命运骰子","ko":"기억을 간직한 결정 조각.\\n감정 가능 레지스탕스 랭크: 15\\n감정 결과 후보: 로스트 공정거래/흉내/운명의 주사위"}},"31135":{"id":31135,"name":{"en":"Bozjan Cluster","de":"Bozja-Polykristall","fr":"Cristal bozjien","ja":"ボズヤクラスター","cn":"博兹雅晶簇","ko":"보즈야 클러스터"},"description":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""}}},"zm":{"zone1":[{"monster":9520,"name":{"en":"Bozjan nepenthes","de":"Bozja-Nepenthes","fr":"népenthès de Bozja","ja":"ボズヤ・ネペンテス","cn":"博兹雅猪笼草","ko":"보즈야 네펜데스"},"rank":1,"loot":30886,"count":1,"rate":20,"condition":null},{"monster":9516,"name":{"en":"Bozjan orobon","de":"Bozja-Orobon","fr":"orobon de Bozja","ja":"ボズヤ・オロボン","cn":"博兹雅鬼鮟鱇","ko":"보즈야 아귀"},"rank":1,"loot":30886,"count":1,"rate":20,"condition":null},{"monster":9517,"name":{"en":"4th Legion slasher","de":"Schlitzer[p] der IV. Legion","fr":"lacératrice de la 4e légion","ja":"IVレギオン・スラッシャー","cn":"第四军团魔导螳螂","ko":"IV군단 슬래셔"},"rank":1,"loot":31135,"count":1,"rate":20,"condition":null},{"monster":9515,"name":{"en":"Bozjan korrigan","de":"Bozja-Korrigane","fr":"korrigan de Bozja","ja":"ボズヤ・コリガン","cn":"博兹雅柯瑞甘","ko":"보즈야 코리건"},"rank":2,"loot":30886,"count":1,"rate":25,"condition":null},{"monster":9518,"name":{"en":"Bozjan mudpuppy","de":"Bozja-Olm","fr":"protée de Bozja","ja":"ボズヤ・マッドパピー","cn":"博兹雅泥沼蝾螈","ko":"보즈야 흙도롱뇽"},"rank":2,"loot":30886,"count":1,"rate":25,"condition":null},{"monster":113,"name":{"en":"earth sprite","de":"Erd-Exergon","fr":"élémentaire de terre","ja":"アーススプライト","cn":"土元精","ko":"땅 정령"},"rank":2,"loot":30885,"count":1,"rate":100,"condition":"dust"},{"monster":9519,"name":{"en":"4th Legion nimrod","de":"Nimrod[p] der IV. Legion","fr":"nimrod de la 4e légion","ja":"IVレギオン・ニムロッド","cn":"第四军团魔导强猎手","ko":"IV군단 니므롯"},"rank":2,"loot":31135,"count":1,"rate":25,"condition":null},{"monster":115,"name":{"en":"wind sprite","de":"Wind-Exergon","fr":"élémentaire de vent","ja":"ウィンドスプライト","cn":"风元精","ko":"바람 정령"},"rank":3,"loot":30885,"count":1,"rate":100,"condition":"wind"},{"monster":9534,"name":{"en":"Bozjan geshunpest","de":"Bozja-Gespenst","fr":"gespenst de Bozja","ja":"ボズヤ・ゲシュンペスト","cn":"博兹雅死魂","ko":"보즈야 게슌페스트"},"rank":3,"loot":30885,"count":2,"rate":100,"condition":"night"},{"monster":9521,"name":{"en":"Bozjan matamata","de":"Bozja-Matamata","fr":"matamata de Bozja","ja":"ボズヤ・マタマタ","cn":"博兹雅玛塔蛇颈龟","ko":"보즈야 마타마타"},"rank":3,"loot":30886,"count":3,"rate":100,"condition":null},{"monster":9523,"name":{"en":"4th Legion roader","de":"Rotula[p] der IV. Legion","fr":"magna rouleur de la 4e légion","ja":"IVレギオン・マグナローダー","cn":"第四军团魔导机车大魔","ko":"IV군단 마그나로더"},"rank":3,"loot":31135,"count":1,"rate":50,"condition":null},{"monster":9522,"name":{"en":"4th Legion death claw","de":"Todesklaue[p] der IV. Legion","fr":"griffe de mort de la 4e légion","ja":"IVレギオン・デスクロー","cn":"第四军团魔导死亡爪","ko":"IV군단 죽음손아귀"},"rank":3,"loot":31135,"count":1,"rate":50,"condition":null},{"monster":56,"name":{"en":"water sprite","de":"Wasser-Exergon","fr":"élémentaire d\'eau","ja":"ウォータースプライト","cn":"水元精","ko":"물 정령"},"rank":4,"loot":30885,"count":2,"rate":100,"condition":"rain"},{"monster":9535,"name":{"en":"Bozjan wraith","de":"Bozja-Geist","fr":"spectre de Bozja","ja":"ボズヤ・レイス","cn":"博兹雅幽灵","ko":"보즈야 망령"},"rank":5,"loot":30885,"count":5,"rate":100,"condition":"night"},{"monster":117,"name":{"en":"lightning sprite","de":"Blitz-Exergon","fr":"élémentaire de foudre","ja":"ライトニングスプライト","cn":"雷元精","ko":"번개 정령"},"rank":5,"loot":30885,"count":5,"rate":100,"condition":"thunder"},{"monster":9532,"name":{"en":"tideborn angel","de":"Blauengel","fr":"dragon bleu","ja":"ブルーエンジェル","cn":"蓝海天使","ko":"푸른 천사"},"rank":"S","loot":30884,"count":20,"rate":100,"condition":null},{"monster":9531,"name":{"en":"fern flower","de":"Farnblüte","fr":"fleur de fougère","ja":"ファーンフラワー","cn":"蕨花","ko":"양치꽃"},"rank":"S","loot":30884,"count":20,"rate":100,"condition":null},{"monster":9530,"name":{"en":"Ink Claw","de":"Tintenstachel","fr":"scorpion pinces d\'encre","ja":"インククロウ","cn":"墨染巨钳虾","ko":"먹물발톱"},"rank":"S","loot":30884,"count":20,"rate":100,"condition":null}],"zone2":[{"monster":9540,"name":{"en":"Bozjan doblyn","de":"Bozja-Dobalos","fr":"doblyn de Bozja","ja":"ボズヤ・ドブラン","cn":"博兹雅矿妖虫","ko":"보즈야 도브란"},"rank":1,"loot":30889,"count":1,"rate":10,"condition":null},{"monster":9541,"name":{"en":"Bozjan sabotender","de":"Bozja-Kaktor","fr":"pampa de Bozja","ja":"ボズヤ・サボテンダー","cn":"博兹雅仙人刺","ko":"보즈야 사보텐더"},"rank":1,"loot":30889,"count":1,"rate":10,"condition":null},{"monster":9539,"name":{"en":"4th Legion vanguard","de":"Frontbrecher[p] der IV. Legion","fr":"avant-garde de la 4e légion","ja":"IVレギオン・ヴァンガード","cn":"第四军团魔导先锋","ko":"IV군단 뱅가드"},"rank":1,"loot":31135,"count":1,"rate":10,"condition":null},{"monster":6943,"name":{"en":"red chocobo","de":"rot[a] Chocobo","fr":"chocobo rouge","ja":"赤チョコボ","cn":"红陆行鸟","ko":"붉은 초코보"},"rank":2,"loot":30889,"count":1,"rate":25,"condition":null},{"monster":9542,"name":{"en":"Bozjan tormentor","de":"Bozja-Quäler","fr":"tourmenteur de Bozja","ja":"ボズヤ・トーメンター","cn":"博兹雅折磨蜥","ko":"보즈야 고통도마뱀"},"rank":2,"loot":30889,"count":1,"rate":25,"condition":null},{"monster":56,"name":{"en":"water sprite","de":"Wasser-Exergon","fr":"élémentaire d\'eau","ja":"ウォータースプライト","cn":"水元精","ko":"물 정령"},"rank":2,"loot":30888,"count":1,"rate":100,"condition":"rain"},{"monster":9544,"name":{"en":"4th Legion avenger","de":"Rächer[p] der IV. Legion","fr":"vengeur de la 4e légion","ja":"IVレギオン・アヴェンジャー","cn":"第四军团魔导复仇者","ko":"IV군단 어벤저"},"rank":2,"loot":31135,"count":1,"rate":25,"condition":null},{"monster":9545,"name":{"en":"Bozjan antlion","de":"Bozja-Ameisenlöwe","fr":"fourmilion de Bozja","ja":"ボズヤ・アントリオン","cn":"博兹雅蚁狮","ko":"보즈야 개미귀신"},"rank":3,"loot":30889,"count":1,"rate":50,"condition":null},{"monster":9548,"name":{"en":"Bozjan wight","de":"Bozja-Skelett","fr":"squelette de Bozja","ja":"ボズヤ・スケルトン","cn":"博兹雅尸鬼","ko":"보즈야 해골"},"rank":3,"loot":30888,"count":2,"rate":100,"condition":"night"},{"monster":9546,"name":{"en":"Bozjan worm","de":"Bozja-Wurm","fr":"ver de Bozja","ja":"ボズヤ・ウォーム","cn":"博兹雅巨虫","ko":"보즈야 지렁이"},"rank":3,"loot":30889,"count":1,"rate":50,"condition":null},{"monster":117,"name":{"en":"lightning sprite","de":"Blitz-Exergon","fr":"élémentaire de foudre","ja":"ライトニングスプライト","cn":"雷元精","ko":"번개 정령"},"rank":3,"loot":30888,"count":1,"rate":100,"condition":"thunder"},{"monster":9547,"name":{"en":"4th Legion gunship","de":"Kanonenschiff[p] der IV. Legion","fr":"vaisseau de la 4e légion","ja":"IVレギオン・ガンシップ","cn":"第四军团魔导炮艇","ko":"IV군단 건십"},"rank":3,"loot":31135,"count":1,"rate":50,"condition":null},{"monster":9550,"name":{"en":"Bozjan bandersnatch","de":"Bozja-Bandersnatch","fr":"bandersnatch de Bozja","ja":"ボズヤ・バンダースナッチ","cn":"博兹雅斑攫兽","ko":"보즈야 밴더스내치"},"rank":4,"loot":30889,"count":1,"rate":75,"condition":null},{"monster":9551,"name":{"en":"Bozjan biast","de":"Bozja-Smei","fr":"biast de Bozja","ja":"ボズヤ・ビアスト","cn":"博兹雅雷蛟","ko":"보즈야 번개도마뱀"},"rank":4,"loot":30889,"count":1,"rate":100,"condition":null},{"monster":9549,"name":{"en":"Bozjan taipan","de":"Bozja-Taipan","fr":"taïpan de Bozja","ja":"ボズヤ・タイパン","cn":"博兹雅太攀蛇","ko":"보즈야 타이판"},"rank":4,"loot":30889,"count":1,"rate":100,"condition":null},{"monster":115,"name":{"en":"wind sprite","de":"Wind-Exergon","fr":"élémentaire de vent","ja":"ウィンドスプライト","cn":"风元精","ko":"바람 정령"},"rank":4,"loot":30888,"count":2,"rate":100,"condition":"wind"},{"monster":9555,"name":{"en":"Bozjan dullahan","de":"Bozja-Dullahan","fr":"dullahan de Bozja","ja":"ボズヤ・デュラハン","cn":"博兹雅无头骑士","ko":"보즈야 둘라한"},"rank":5,"loot":30888,"count":5,"rate":100,"condition":"night"},{"monster":113,"name":{"en":"earth sprite","de":"Erd-Exergon","fr":"élémentaire de terre","ja":"アーススプライト","cn":"土元精","ko":"땅 정령"},"rank":5,"loot":30888,"count":3,"rate":100,"condition":"dust"},{"monster":9558,"name":{"en":"Psoglav","de":"Psoglav","fr":"Psoglav","ja":"ソーグラヴ","cn":"索格拉夫","ko":"프소글라브"},"rank":"S","loot":30887,"count":20,"rate":100,"condition":null},{"monster":9556,"name":{"en":"Viy","de":"Wij","fr":"Vij","ja":"ヴィイ","cn":"邪灵维","ko":"비이"},"rank":"S","loot":30887,"count":20,"rate":100,"condition":null},{"monster":9557,"name":{"en":"Smok","de":"Smok","fr":"Smok","ja":"スモク","cn":"斯莫克龙","ko":"스모크"},"rank":"S","loot":30887,"count":20,"rate":100,"condition":null}],"zone3":[{"monster":9561,"name":{"en":"Bozjan screamer","de":"Bozja-Schriller","fr":"piailleur de Bozja","ja":"ボズヤ・スクリーマー","cn":"博兹雅尖叫雕","ko":"보즈야 꽥꽥새"},"rank":1,"loot":30893,"count":1,"rate":10,"condition":null},{"monster":9560,"name":{"en":"Bozjan elbst","de":"Bozja-Elbst","fr":"elbst de Bozja","ja":"ボズヤ・エルブスト","cn":"博兹雅水龙蜥","ko":"보즈야 엘브스트"},"rank":1,"loot":30893,"count":1,"rate":10,"condition":null},{"monster":9559,"name":{"en":"4th Legion hexadrone","de":"Hexadrohne[p] der IV. Legion","fr":"hexadrone de la 4e légion","ja":"IVレギオン・ヘキサローラー","cn":"第四军团魔导六轮装甲","ko":"IV군단 헥사롤러"},"rank":1,"loot":31135,"count":1,"rate":10,"condition":null},{"monster":9562,"name":{"en":"Bozjan ranunculus","de":"Bozja-Ranunculus","fr":"renoncule de Bozja","ja":"ボズヤ・ラナンキュラス","cn":"博兹雅毛茛花","ko":"보즈야 라넌큘러스"},"rank":2,"loot":30893,"count":1,"rate":25,"condition":null},{"monster":9563,"name":{"en":"Bozjan phobosuchus","de":"Bozja-Phobosuchus","fr":"phobosuchus de Bozja","ja":"ボズヤ・フォボスクス","cn":"博兹雅怖鳄","ko":"보즈야 포보수쿠스"},"rank":2,"loot":30893,"count":1,"rate":25,"condition":null},{"monster":117,"name":{"en":"lightning sprite","de":"Blitz-Exergon","fr":"élémentaire de foudre","ja":"ライトニングスプライト","cn":"雷元精","ko":"번개 정령"},"rank":2,"loot":30890,"count":1,"rate":75,"condition":"thunder"},{"monster":9564,"name":{"en":"4th Legion scorpion","de":"Skorpion[p] der IV. Legion","fr":"scorpion magitek de la 4e légion","ja":"IVレギオン・ガードスコーピオン","cn":"第四军团守卫机蝎","ko":"IV군단 경비 전갈"},"rank":2,"loot":31135,"count":1,"rate":25,"condition":null},{"monster":9565,"name":{"en":"Bozjan monitor","de":"Bozja-Waran","fr":"varan de Bozja","ja":"ボズヤ・モニター","cn":"博兹雅飞巨蜥","ko":"보즈야 감시도마뱀"},"rank":3,"loot":30893,"count":1,"rate":50,"condition":null},{"monster":9568,"name":{"en":"Bozjan gravekeeper","de":"Bozja-Grabwächter","fr":"gardien de cimetière de Bozja","ja":"ボズヤ・グレイブキーパー","cn":"博兹雅墓穴守卫","ko":"보즈야 묘지기"},"rank":3,"loot":30891,"count":1,"rate":100,"condition":"night"},{"monster":9567,"name":{"en":"Bozjan ochu","de":"Bozja-Ochu","fr":"otyugh de Bozja","ja":"ボズヤ・オチュー","cn":"博兹雅大口花","ko":"보즈야 오츄"},"rank":3,"loot":30893,"count":1,"rate":50,"condition":null},{"monster":56,"name":{"en":"water sprite","de":"Wasser-Exergon","fr":"élémentaire d\'eau","ja":"ウォータースプライト","cn":"水元精","ko":"물 정령"},"rank":3,"loot":30890,"count":1,"rate":100,"condition":"rain"},{"monster":9430,"name":{"en":"4th Legion armored weapon","de":"Panzerwaffe[p] der IV. Legion","fr":"arme blindée de la 4e légion","ja":"IVレギオン・アームドウェポン","cn":"第四军团武装重甲","ko":"IV군단 무장 병기"},"rank":3,"loot":31135,"count":1,"rate":50,"condition":null},{"monster":9569,"name":{"en":"Bozjan goobbue","de":"Bozja-Goobbue","fr":"goobbue de Bozja","ja":"ボズヤ・グゥーブー","cn":"博兹雅古菩猩猩","ko":"보즈야 구부"},"rank":4,"loot":30893,"count":1,"rate":75,"condition":null},{"monster":9571,"name":{"en":"Bozjan snake","de":"Bozja-Nerodia","fr":"nerodia de Bozja","ja":"ボズヤ・ネロディア","cn":"博兹雅巨水蛇","ko":"보즈야 여울물뱀"},"rank":4,"loot":30893,"count":1,"rate":75,"condition":null},{"monster":9570,"name":{"en":"Bozjan wadjet","de":"Bozja-Wadjet","fr":"ouadjet de Bozja","ja":"ボズヤ・ウアジェット","cn":"博兹雅神蜥蜴瓦吉特","ko":"보즈야 워제트"},"rank":4,"loot":30893,"count":1,"rate":75,"condition":null},{"monster":113,"name":{"en":"earth sprite","de":"Erd-Exergon","fr":"élémentaire de terre","ja":"アーススプライト","cn":"土元精","ko":"땅 정령"},"rank":4,"loot":30890,"count":1,"rate":100,"condition":"dust"},{"monster":115,"name":{"en":"wind sprite","de":"Wind-Exergon","fr":"élémentaire de vent","ja":"ウィンドスプライト","cn":"风元精","ko":"바람 정령"},"rank":5,"loot":30890,"count":2,"rate":100,"condition":"wind"},{"monster":9573,"name":{"en":"Bozjan doll","de":"Bozja-Dhole","fr":"poupée de Bozja","ja":"ボズヤ・ドール","cn":"博兹雅人偶","ko":"보즈야 인형"},"rank":5,"loot":30893,"count":1,"rate":100,"condition":null},{"monster":9679,"name":{"en":"Bozjan elasmoth","de":"Bozja-Elasmoth","fr":"erasmus de Bozja","ja":"ボズヤ・エラスモス","cn":"博兹雅艾拉斯摩斯","ko":"보즈야 엘라스모스"},"rank":5,"loot":30893,"count":1,"rate":100,"condition":null},{"monster":9572,"name":{"en":"Bozjan anzu","de":"Bozja-Anzu","fr":"anzu de Bozja","ja":"ボズヤ・アンズー","cn":"博兹雅安祖","ko":"보즈야 안즈"},"rank":5,"loot":30893,"count":1,"rate":100,"condition":null},{"monster":9575,"name":{"en":"Bozjan rider","de":"Bozja-Reiter","fr":"cavalier de Bozja","ja":"ボズヤ・ライダー","cn":"博兹雅骑士","ko":"보즈야 기수"},"rank":5,"loot":30891,"count":5,"rate":100,"condition":"night"},{"monster":9576,"name":{"en":"Patty","de":"Patty","fr":"Patty","ja":"パティ","cn":"帕迪","ko":"패티"},"rank":"S","loot":30891,"count":20,"rate":100,"condition":null},{"monster":9577,"name":{"en":"Clingy Clare","de":"Klaudia [t] Klebrig[a]","fr":"Claire la collante","ja":"クリンギー・クレア","cn":"黏人魔花克莱尔","ko":"끈끈한 클레어"},"rank":"S","loot":30891,"count":20,"rate":100,"condition":null},{"monster":9578,"name":{"en":"bird of barathrum","de":"Herz[p] des Barathrum","fr":"oiseau de Barathrum","ja":"バード・オブ・バラスルーム","cn":"深渊猛禽","ko":"구렁텅이새"},"rank":"S","loot":30891,"count":20,"rate":100,"condition":null}]}}');
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(8473);
// EXTERNAL MODULE: ./src/translate.ts
var translate = __webpack_require__(9465);
;// CONCATENATED MODULE: ./src/bozja/DropsTable.tsx




















const conditionMap = {
    dust: /*#__PURE__*/ jsx_runtime_.jsx(WeatherIcon/* default */.Z, {
        weather: types/* Weather.DustStorms */.y.DustStorms
    }),
    rain: /*#__PURE__*/ jsx_runtime_.jsx(WeatherIcon/* default */.Z, {
        weather: types/* Weather.Rain */.y.Rain
    }),
    thunder: /*#__PURE__*/ jsx_runtime_.jsx(WeatherIcon/* default */.Z, {
        weather: types/* Weather.Thunder */.y.Thunder
    }),
    wind: /*#__PURE__*/ jsx_runtime_.jsx(WeatherIcon/* default */.Z, {
        weather: types/* Weather.Wind */.y.Wind
    }),
    night: "Night"
};
function cleanFragment(name, locale) {
    switch(locale){
        case "en":
            return (0,utils/* upperFirst */.jC)(name.replace(/^Forgotten Fragment of /, ""));
        case "de":
            return (0,utils/* upperFirst */.jC)(name.replace(/^Unbegutachteter Frontsplitter (der|des) /, ""));
        case "fr":
            return (0,utils/* upperFirst */.jC)(name.replace(/^Éclat oublié non identifié (de |d')/, ""));
        case "ja":
            return name.replace(/^未鑑定ロストシャード:/, "");
        case "cn":
            var ref;
            return ((ref = name.match(/未鉴定的(.*)失传碎晶/)) === null || ref === void 0 ? void 0 : ref[1]) ?? name;
        case "ko":
            return name.replace(/^미감정 로스트 샤드: /, "");
        default:
            return name;
    }
}
function parseActions(description, locale) {
    let actions;
    switch(locale){
        case "en":
            var ref;
            actions = (ref = description.match(/Potential memories contained: (.*)$/)) === null || ref === void 0 ? void 0 : ref[1].split(", ");
            break;
        case "de":
            var ref1;
            actions = (ref1 = description.match(/Kann folgende Verschollene Kommandos enthalten: (.*)$/)) === null || ref1 === void 0 ? void 0 : ref1[1].split(", ");
            break;
        case "fr":
            var ref2;
            actions = (ref2 = description.match(/Son identification peut octroyer (.*?)\./)) === null || ref2 === void 0 ? void 0 : ref2[1].split(/(?:, | ou )/);
            break;
        case "ja":
            var ref3;
            actions = (ref3 = description.match(/鑑定結果候補:(.*)$/)) === null || ref3 === void 0 ? void 0 : ref3[1].split("\uFF0F");
            break;
        case "cn":
            var ref4;
            actions = (ref4 = description.match(/鉴定结果预测：(.*)/)) === null || ref4 === void 0 ? void 0 : ref4[1].split("/");
            break;
        case "ko":
            var ref5;
            actions = (ref5 = description.match(/감정 결과 후보: (.*)/)) === null || ref5 === void 0 ? void 0 : ref5[1].split("/");
            break;
    }
    if (actions === undefined) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                whiteSpace: "pre-wrap"
            },
            children: description
        });
    } else {
        return actions.map((action, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: action
            }, index)
        );
    }
}
const DropsTable = ()=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)("bozja");
    const { 0: tab , 1: setTab  } = (0,external_react_.useState)(0);
    const locale = i18n.language;
    const handleChangeTab = (_, value)=>{
        setTab(value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                    variant: "fullWidth",
                    value: tab,
                    onChange: handleChangeTab,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "1. Southern Zone"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "2. Central Zone"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "3. Northern Zone"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: "Fragment"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: "Actions"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: "Count"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: "Monster"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: "Conditions"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                                children: bozja_namespaceObject.zm[`zone${tab + 1}`].map((datum)=>datum.loot
                                ).sort((a, b)=>a - b
                                ).filter((loot, index, array)=>loot !== array[index + 1]
                                ).map((loot)=>bozja_namespaceObject.zm[`zone${tab + 1}`].filter((datum)=>datum.loot === loot
                                    ).sort((a, b)=>{
                                        const aR = a.rank === "S" ? 6 : a.rank;
                                        const bR = b.rank === "S" ? 6 : b.rank;
                                        return aR === bR ? a.monster - b.monster : aR - bR;
                                    }).map((datum, index, array)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                            children: [
                                                index === 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                            rowSpan: array.length,
                                                            align: "center",
                                                            children: cleanFragment((0,translate/* default */.Z)(locale, bozja_namespaceObject.ev[loot], "name"), locale)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                            rowSpan: array.length,
                                                            children: loot !== 31135 && parseActions((0,translate/* default */.Z)(locale, bozja_namespaceObject.ev[loot], "description"), locale)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                                                    align: "center",
                                                    children: [
                                                        "\xd7",
                                                        datum.count.toLocaleString(locale)
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(bozja_RankIcon, {
                                                            rank: datum.rank
                                                        }),
                                                        formatMonster((0,translate/* default */.Z)(locale, datum, "name"), locale)
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    align: "center",
                                                    children: conditionMap[datum.condition]
                                                })
                                            ]
                                        }, index)
                                    )
                                )
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const bozja_DropsTable = (DropsTable);

;// CONCATENATED MODULE: ./pages/bozja.tsx








// const Map = dynamic(
//   async () => await import('../src/bozja/Map'),
//   { ssr: false }
// )
const Bozja = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("bozja");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Page/* default */.Z, {
        title: t("_title"),
        description: t("_description"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(bozja_UpcomingWeathers, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                variant: "outlined",
                sx: {
                    p: 2,
                    mb: 2,
                    textAlign: "center",
                    fontWeight: "bold"
                },
                children: "{ NO MAP RIGHT NOW }"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(bozja_DropsTable, {})
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale ?? "en", [
                "common",
                "bozja"
            ])
        }
    };
};
/* harmony default export */ const bozja = (Bozja);


/***/ }),

/***/ 8884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);




const Section = ({ title , sx , children  })=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "section",
        mb: 4,
        sx: sx,
        children: [
            title !== undefined && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                variant: "h2",
                gutterBottom: true,
                children: title
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);


/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 1307:
/***/ ((module) => {

module.exports = require("@mui/material/Tab");

/***/ }),

/***/ 9181:
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 5953:
/***/ ((module) => {

module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ 8544:
/***/ ((module) => {

module.exports = require("@mui/material/Tabs");

/***/ }),

/***/ 7229:
/***/ ((module) => {

module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 5791:
/***/ ((module) => {

module.exports = require("date-fns/locale/de");

/***/ }),

/***/ 4913:
/***/ ((module) => {

module.exports = require("date-fns/locale/fr");

/***/ }),

/***/ 3101:
/***/ ((module) => {

module.exports = require("date-fns/locale/ja");

/***/ }),

/***/ 129:
/***/ ((module) => {

module.exports = require("date-fns/locale/ko");

/***/ }),

/***/ 2608:
/***/ ((module) => {

module.exports = require("date-fns/locale/zh-CN");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("react-string-replace");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [906,122,39], () => (__webpack_exec__(3956)));
module.exports = __webpack_exports__;

})();