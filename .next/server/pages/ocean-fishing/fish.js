"use strict";
(() => {
var exports = {};
exports.id = 18;
exports.ids = [18,479];
exports.modules = {

/***/ 9790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ fish),
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
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(5732);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./pages/ocean-fishing/index.tsx + 23 modules
var ocean_fishing = __webpack_require__(5899);
// EXTERNAL MODULE: ./src/Page.tsx
var Page = __webpack_require__(6906);
// EXTERNAL MODULE: ./src/Section.tsx
var Section = __webpack_require__(8884);
// EXTERNAL MODULE: ./src/Link.tsx
var Link = __webpack_require__(7255);
// EXTERNAL MODULE: ./src/ocean-fishing/NavigationBar.tsx
var NavigationBar = __webpack_require__(7389);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Alert"
var Alert_ = __webpack_require__(3765);
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);
;// CONCATENATED MODULE: ./src/ocean-fishing/ImportFishes.tsx











function sortFishes(fishes) {
    return fishes.sort((a, b)=>a - b
    ).filter((fish, index, array)=>fish !== array[index + 1]
    );
}
const ImportFishes = ({ checklist , setChecklist  })=>{
    const { 0: importData , 1: setImportData  } = (0,external_react_.useState)("");
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)(null);
    const handleInputImportData = (event)=>{
        setImportData(event.target.value);
    };
    const handleClickImport = ()=>{
        try {
            const data = JSON.parse(importData);
            if (Array.isArray(data)) {
                setChecklist(sortFishes(data));
                setMessage({
                    type: "success",
                    message: `Imported ${data.length} fishes.`
                });
            } else if (Array.isArray(data.completed)) {
                setChecklist(sortFishes(data.completed));
                setMessage({
                    type: "success",
                    message: `Imported ${data.completed.length} fishes.`
                });
            } else {
                setMessage({
                    type: "error",
                    message: "Could not parse data."
                });
            }
        } catch (_) {
            setMessage({
                type: "error",
                message: "Could not parse data."
            });
        }
    };
    const handleClickMerge = ()=>{
        try {
            const data = JSON.parse(importData);
            if (Array.isArray(data)) {
                setChecklist(sortFishes(checklist.concat(data)));
                setMessage({
                    type: "success",
                    message: `Imported ${data.length} fishes.`
                });
            } else if (Array.isArray(data.completed)) {
                setChecklist(sortFishes(checklist.concat(data.completed)));
                setMessage({
                    type: "success",
                    message: `Imported ${data.completed.length} fishes.`
                });
            } else {
                setMessage({
                    type: "error",
                    message: "Could not parse data."
                });
            }
        } catch (_) {
            setMessage({
                type: "error",
                message: "Could not parse data."
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            component: (Paper_default()),
            p: 2,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                    children: [
                        "Paste code from ",
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                            href: "https://lalachievements.com/",
                            children: "Lalachievements"
                        }),
                        " or ",
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                            href: "https://ff14fish.carbuncleplushy.com/",
                            children: "FFX|V Fish Tracker App"
                        }),
                        " below."
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    multiline: true,
                    fullWidth: true,
                    variant: "outlined",
                    rows: 4,
                    margin: "normal",
                    value: importData,
                    onChange: handleInputImportData
                }),
                message !== null && /*#__PURE__*/ jsx_runtime_.jsx((Alert_default()), {
                    variant: "outlined",
                    severity: message.type,
                    children: message.message
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                    direction: "row",
                    spacing: 1,
                    sx: {
                        mt: 1
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "contained",
                            onClick: handleClickImport,
                            children: "Import"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "contained",
                            onClick: handleClickMerge,
                            children: "Merge"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const ocean_fishing_ImportFishes = (ImportFishes);

// EXTERNAL MODULE: ./src/ocean-fishing/FishTable.tsx
var FishTable = __webpack_require__(6119);
// EXTERNAL MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/index.ts + 9 modules
var data = __webpack_require__(7576);
// EXTERNAL MODULE: ./src/translate.ts
var translate = __webpack_require__(9465);
;// CONCATENATED MODULE: ./pages/ocean-fishing/fish.tsx


















const Fish = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("ocean-fishing");
    const { 0: checklist , 1: setChecklist  } = (0,external_react_.useState)([]);
    const { 0: showImport , 1: setShowImport  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    (0,external_react_.useEffect)(()=>{
        window.localStorage.setItem("ocean-fishing/checklist", checklist.join(","));
    }, [
        checklist
    ]);
    const toggleShowImport = ()=>{
        setShowImport(!showImport);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Page/* default */.Z, {
        title: [
            t("_title"),
            t("fishPage._title")
        ],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavigationBar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing.ChecklistContext.Provider, {
                value: {
                    checklist,
                    setChecklist
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                paragraph: true,
                                children: [
                                    "Data are taken from the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                                        href: "https://docs.google.com/spreadsheets/d/1R0Nt8Ye7EAQtU8CXF1XRRj67iaFpUk1BXeDgt6abxsQ/edit#gid=149797934",
                                        children: "Ocean Fishing Spreadsheet"
                                    }),
                                    " managed by Tyo\u2019to Tayuun. Bite times are from ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                                        href: "https://ffxivteamcraft.com/",
                                        children: "Teamcraft"
                                    }),
                                    ". For questions/comments/corrections, please visit the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                                        href: "https://discord.gg/AnFaDpN",
                                        children: "Fisherman\u2019s Horizon Discord"
                                    }),
                                    " or message Lulu Pillow@Adamantoise or Pillowfication#0538."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "contained",
                                onClick: toggleShowImport,
                                children: "Import Fishes"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                        in: showImport,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_ImportFishes, {
                                checklist: checklist,
                                setChecklist: setChecklist
                            })
                        })
                    }),
                    Object.values(data/* fishingSpots */.OL).filter((fishingSpot)=>fishingSpot.id !== 0
                    ).sort((a, b)=>a.order - b.order
                    ).map((fishingSpot)=>/*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
                            title: (0,translate/* default */.Z)(i18n.language, fishingSpot.placeName, "name"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                                component: (Paper_default()),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(FishTable/* default */.Z, {
                                    fishingSpots: [
                                        fishingSpot
                                    ]
                                })
                            })
                        }, fishingSpot.id)
                    )
                ]
            })
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale ?? "en", [
                "common",
                "ocean-fishing"
            ])
        }
    };
};
/* harmony default export */ const fish = (Fish);


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

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 2818:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChevronRight");

/***/ }),

/***/ 3765:
/***/ ((module) => {

module.exports = require("@mui/material/Alert");

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

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 319:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 9361:
/***/ ((module) => {

module.exports = require("@mui/material/CardHeader");

/***/ }),

/***/ 5371:
/***/ ((module) => {

module.exports = require("@mui/material/ClickAwayListener");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("@mui/material/Collapse");

/***/ }),

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 9685:
/***/ ((module) => {

module.exports = require("@mui/material/ListSubheader");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 3534:
/***/ ((module) => {

module.exports = require("@mui/material/NoSsr");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 517:
/***/ ((module) => {

module.exports = require("@mui/material/Popper");

/***/ }),

/***/ 2651:
/***/ ((module) => {

module.exports = require("@mui/material/Select");

/***/ }),

/***/ 8742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

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

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7229:
/***/ ((module) => {

module.exports = require("@mui/material/Tooltip");

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

/***/ 719:
/***/ ((module) => {

module.exports = require("next-usequerystate");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,906,255,122,730,389,994], () => (__webpack_exec__(9790)));
module.exports = __webpack_exports__;

})();