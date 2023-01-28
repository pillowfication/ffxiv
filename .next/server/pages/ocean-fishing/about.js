"use strict";
(() => {
var exports = {};
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 3590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6906);
/* harmony import */ var _src_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8884);
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7255);
/* harmony import */ var _src_Highlight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7556);
/* harmony import */ var _src_MathJax__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2994);
/* harmony import */ var _src_ocean_fishing_NavigationBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7389);













const About = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("ocean-fishing");
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_Page__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        title: [
            t("_title"),
            t("aboutPage._title")
        ],
        children: [
            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_11__/* .mathJaxRequire */ .Q)("cancel"),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_ocean_fishing_NavigationBar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_Section__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: t("aboutPage.data"),
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        paragraph: true,
                        children: [
                            "Data are taken from the ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .C, {
                                href: "https://docs.google.com/spreadsheets/d/1R0Nt8Ye7EAQtU8CXF1XRRj67iaFpUk1BXeDgt6abxsQ/edit#gid=149797934",
                                children: "Ocean Fishing Spreadsheet"
                            }),
                            " managed by Tyo\u2019to Tayuun. To report errors, please visit the ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .C, {
                                href: "https://discord.gg/AnFaDpN",
                                children: "Fisherman\u2019s Horizon Discord"
                            }),
                            " or message Lulu Pillow@Adamantoise or Pillowfication#0538."
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        paragraph: true,
                        children: [
                            "Bite times are periodically fetched from ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .C, {
                                href: "https://ffxivteamcraft.com/",
                                children: "Teamcraft"
                            }),
                            ". Teamcraft defines the minimum and maximum bite times to be the whiskers of a typical boxplot. This means"
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                        children: [
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                component: "li",
                                children: [
                                    "Compute quartiles using the type-7 algorithm detailed in ",
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .C, {
                                        href: "https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/quantile",
                                        children: "R\u2019s quantile method"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                component: "li",
                                children: [
                                    "Removing samples more than ",
                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_11__.$)("1.5 \\times \\text{IQR}"),
                                    " from the median."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        paragraph: true,
                        children: [
                            "The default bite times shown on the ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .C, {
                                href: "/ocean-fishing",
                                children: "Ocean Fishing page"
                            }),
                            " are the bite time ranges over all baits, excluding Versatile Lure. While this works fairly well, it can still be inaccurate, and most prescribed strategies will use player-tested timings."
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        paragraph: true,
                        children: [
                            "Bait percentages are also fetched from Teamcraft and are usually used as the suggested bait, unless the bait causes a drastic increase in bite times. Usually the best bait is the fish\u2019s desynthesis bait, and nonstandard ocean fishing baits are avoided, unless the goal is Fisher\u2019s Intuition. Specific cases were further detailed in the ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .C, {
                                href: "https://discord.com/channels/327124808217395200/679407580430467092/864238268514041917",
                                children: "Discord"
                            }),
                            "."
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        paragraph: true,
                        children: [
                            "All my data and the code I used are available on ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .C, {
                                href: "https://github.com/pillowfication/ffxiv/tree/master/src/ocean-fishing/ffxiv-ocean-fishing",
                                children: "GitHub"
                            }),
                            "."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_Section__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: t("aboutPage.algorithm"),
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        paragraph: true,
                        children: "Ocean Fishing voyages follow a specific pattern best seen using Japan Standard Time (JST). Voyages leave every 2 hours on odd hours (at 1:00, 3:00, \u2026, 23:00). The destination always cycles between the 4 destinations in the following order:"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6___default()), {
                        sx: {
                            mb: 2
                        },
                        children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_11__.$$)("\\cdots \\to \\text{Bloodbrine Sea} \\to \\text{Rothlyt Sound} \\to \\text{Northern Strait of Merlthor} \\to \\text{Rhotano Sea} \\to \\cdots")
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        paragraph: true,
                        children: "The 4 destinations will all be set to arrive at Day, then repeated to arrive at Sunset, then repeated to arrive at Night. There are 12 routes that I label as"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6___default()), {
                        sx: {
                            mb: 2
                        },
                        children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_11__.$$)(`
            \\begin{array}{r|ccc}
              & \\text{Day (D)} & \\text{Sunset (S)} & \\text{Night (N)} \\\\
              \\hline
              \\text{Bloodbrine Sea (B)} & \\text{BD} & \\text{BS} & \\text{BN} \\\\
              \\text{Rothlyt Sound (T)} & \\text{TD} & \\text{TS} & \\text{TN} \\\\
              \\text{Northern Strait of Merlthor (N)} & \\text{ND} & \\text{NS} & \\text{NN} \\\\
              \\text{Rhotano Sea (R)} & \\text{RD} & \\text{RS} & \\text{RN} \\\\
            \\end{array}
          `)
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        paragraph: true,
                        children: "and they follow the sequence"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6___default()), {
                        sx: {
                            mb: 2
                        },
                        children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_11__.$$)(`
            \\begin{array}{rcccccccccl}
              \\cdots & \\to & \\text{BD} & \\to & \\text{TD} & \\to & \\text{ND} & \\to & \\text{RD} \\\\
              & \\to & \\text{BS} & \\to & \\text{TS} & \\to & \\text{NS} & \\to & \\text{RS} \\\\
              & \\to & \\text{BN} & \\to & \\text{TN} & \\to & \\text{NN} & \\to & \\text{RN} & \\to & \\cdots \\\\
            \\end{array}
          `)
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        paragraph: true,
                        children: "However, the first voyage of every day (at 1:00 JST) will skip a route. So there might be the schedule"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6___default()), {
                        sx: {
                            mb: 2
                        },
                        children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_11__.$$)(`
            \\cdots
            \\begin{array}{c|c}
              \\text{19:00} & \\text{21:00} & \\text{23:00} & \\text{01:00} & \\text{03:00} & \\text{05:00} & \\text{07:00} \\\\
              \\text{NS} & \\text{RS} & \\text{BN} & \\begin{array}{c}\\cancel{\\text{TN}} \\\\ \\text{NN}\\end{array} & \\text{RN} & \\text{BD} & \\text{TD} \\\\
            \\end{array}
            \\cdots
          `)
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        paragraph: true,
                        children: "Since there are 12 routes and 12 voyages a day, the route that is skipped will cycle through all 12 routes in 12 days. The full pattern of routes is 144 routes long."
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Highlight__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        language: "javascript",
                        children: `
const PATTERN = [
  'BD', 'TD', 'ND', 'RD', 'BS', 'TS', 'NS', 'RS', 'BN', 'TN', 'NN', 'RN',
  'TD', 'ND', 'RD', 'BS', 'TS', 'NS', 'RS', 'BN', 'TN', 'NN', 'RN', 'BD',
  'ND', 'RD', 'BS', 'TS', 'NS', 'RS', 'BN', 'TN', 'NN', 'RN', 'BD', 'TD',
  'RD', 'BS', 'TS', 'NS', 'RS', 'BN', 'TN', 'NN', 'RN', 'BD', 'TD', 'ND',
  'BS', 'TS', 'NS', 'RS', 'BN', 'TN', 'NN', 'RN', 'BD', 'TD', 'ND', 'RD',
  'TS', 'NS', 'RS', 'BN', 'TN', 'NN', 'RN', 'BD', 'TD', 'ND', 'RD', 'BS',
  'NS', 'RS', 'BN', 'TN', 'NN', 'RN', 'BD', 'TD', 'ND', 'RD', 'BS', 'TS',
  'RS', 'BN', 'TN', 'NN', 'RN', 'BD', 'TD', 'ND', 'RD', 'BS', 'TS', 'NS',
  'BN', 'TN', 'NN', 'RN', 'BD', 'TD', 'ND', 'RD', 'BS', 'TS', 'NS', 'RS',
  'TN', 'NN', 'RN', 'BD', 'TD', 'ND', 'RD', 'BS', 'TS', 'NS', 'RS', 'BN',
  'NN', 'RN', 'BD', 'TD', 'ND', 'RD', 'BS', 'TS', 'NS', 'RS', 'BN', 'TN',
  'RN', 'BD', 'TD', 'ND', 'RD', 'BS', 'TS', 'NS', 'RS', 'BN', 'TN', 'NN'
]
          `.trim()
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                        paragraph: true,
                        children: [
                            "To figure out the route at a given time, we need to first establish some epoch as the first voyage and determine where in ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5___default()), {
                                component: "code",
                                variant: "outlined",
                                sx: {
                                    px: 0.5
                                },
                                children: "PATTERN"
                            }),
                            " that voyage lies. All other routes will be calculated relative to that epoch. Fortunately, JST is UTC+09:00, which means a voyage lands on the ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .C, {
                                href: "https://en.wikipedia.org/wiki/Unix_time",
                                children: "Unix epoch"
                            }),
                            ". As it turns out, this voyage is index 88 in ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5___default()), {
                                component: "code",
                                variant: "outlined",
                                sx: {
                                    px: 0.5
                                },
                                children: "PATTERN"
                            }),
                            ". Altogether,"
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Highlight__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        language: "typescript",
                        children: `
const TWO_HOURS = 2 * 60 * 60 * 1000
const OFFSET = 88

/**
 * Returns the route of the ongoing/most recent voyage.
 */
function getRoute (date: Date) {
  // Get the number of voyages since 00:00:00 UTC, 1 January 1970
  const voyageNumber = Math.floor(date.getTime() / TWO_HOURS)

  // Get where it lies in the pattern
  const route = PATTERN[(OFFSET + voyageNumber) % PATTERN.length]

  return route
}
          `.trim()
                    })
                ]
            })
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__.serverSideTranslations)(locale ?? "en", [
                "common",
                "ocean-fishing"
            ])
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 9580:
/***/ ((module) => {

module.exports = require("@mui/material/ButtonGroup");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 3534:
/***/ ((module) => {

module.exports = require("@mui/material/NoSsr");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

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

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 727:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 6847:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/hljs/javascript");

/***/ }),

/***/ 8911:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/hljs/latex");

/***/ }),

/***/ 2298:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/hljs/typescript");

/***/ }),

/***/ 7079:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/hljs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,906,255,730,389,954], () => (__webpack_exec__(3590)));
module.exports = __webpack_exports__;

})();