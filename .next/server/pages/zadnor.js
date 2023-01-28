"use strict";
(() => {
var exports = {};
exports.id = 745;
exports.ids = [745];
exports.modules = {

/***/ 7608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ zadnor),
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
;// CONCATENATED MODULE: ./src/zadnor/UpcomingWeathers.tsx




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
                place: types/* Place.Zadnor */.N.Zadnor,
                weatherRateIndex: 0
            }
        ],
        showLabels: true,
        showLocalTime: true,
        count: 14,
        hidePlaceName: true
    });
};
/* harmony default export */ const zadnor_UpcomingWeathers = (UpcomingWeathers);

;// CONCATENATED MODULE: ./pages/zadnor.tsx







// const Map = dynamic(
//   async () => await import('../src/zadnor/Map'),
//   { ssr: false }
// )
const Zadnor = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("zadnor");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Page/* default */.Z, {
        title: t("_title"),
        description: t("_description"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(zadnor_UpcomingWeathers, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                variant: "outlined",
                sx: {
                    p: 2,
                    mb: 2,
                    textAlign: "center",
                    fontWeight: "bold"
                },
                children: "{ NO MAP RIGHT NOW }"
            })
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale ?? "en", [
                "common",
                "zadnor"
            ])
        }
    };
};
/* harmony default export */ const zadnor = (Zadnor);


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

/***/ 9181:
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 8099:
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

/***/ 1085:
/***/ ((module) => {

module.exports = require("react-string-replace");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [906,122,39], () => (__webpack_exec__(7608)));
module.exports = __webpack_exports__;

})();