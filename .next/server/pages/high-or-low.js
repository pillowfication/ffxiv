"use strict";
(() => {
var exports = {};
exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 2487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ high_or_low),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./src/Page.tsx
var Page = __webpack_require__(6906);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./src/Section.tsx
var Section = __webpack_require__(8884);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
;// CONCATENATED MODULE: ./src/high-or-low/HighOrLowCard.tsx



const HighOrLowCard = ({ value , disabled =false , error , onInputDigit =()=>{}  })=>{
    const handleInputDigit = (event)=>{
        const key = event.key;
        if (key === "Backspace" || key === "Delete") {
            onInputDigit(null);
        } else {
            const digit = Number(key);
            if (digit >= 1 && digit <= 9) {
                onInputDigit(digit);
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
        type: "tel",
        variant: "outlined",
        disabled: disabled,
        error: error,
        InputProps: {
            sx: {
                width: {
                    xs: "4em",
                    md: "6em"
                },
                height: {
                    xs: "6em",
                    md: "9em"
                },
                borderRadius: "0.5em",
                m: {
                    xs: 1,
                    md: 2
                },
                backgroundColor: "background.paper"
            }
        },
        inputProps: {
            sx: {
                textAlign: "center",
                fontSize: "3em"
            }
        },
        onKeyDown: handleInputDigit,
        value: disabled ? "?" : value ?? ""
    });
};
/* harmony default export */ const high_or_low_HighOrLowCard = (HighOrLowCard);

;// CONCATENATED MODULE: ./src/high-or-low/ffxiv-high-or-low/index.ts
function choose2(arr) {
    if (arr.length === 2) {
        return [
            arr[0] + arr[1]
        ];
    }
    const slice = arr.slice(1);
    return [
        ...slice.map((x)=>x + arr[0]
        ),
        ...choose2(slice)
    ];
}
function calculateHighOrLow(tb1, tb2, me) {
    const hiddenCards = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ].filter((card)=>card !== tb1 && card !== tb2 && card !== me
    );
    const tbPossibles = hiddenCards.map((card)=>tb1 + tb2 + card
    );
    const mePossibles = choose2(hiddenCards).map((sum)=>me + sum
    );
    let high = 0;
    let low = 0;
    let same = 0;
    for (const me1 of mePossibles){
        for (const tb of tbPossibles){
            me1 > tb ? ++high : me1 < tb ? ++low : ++same;
        }
    }
    return {
        high,
        low,
        same
    };
}
/* harmony default export */ const ffxiv_high_or_low = (calculateHighOrLow);

;// CONCATENATED MODULE: ./src/high-or-low/Calculator.tsx









var CalculatorState;
(function(CalculatorState) {
    CalculatorState[CalculatorState["Incomplete"] = 0] = "Incomplete";
    CalculatorState[CalculatorState["Duplicate"] = 1] = "Duplicate";
    CalculatorState[CalculatorState["Complete"] = 2] = "Complete";
})(CalculatorState || (CalculatorState = {}));
function toPercent(p, q) {
    return Math.floor(p / q * 100);
}
const Calculator = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("high-or-low");
    const { 0: tb1 , 1: setTb1  } = (0,external_react_.useState)(null);
    const { 0: tb2 , 1: setTb2  } = (0,external_react_.useState)(null);
    const { 0: me , 1: setMe  } = (0,external_react_.useState)(null);
    let state;
    const tb1Error = tb1 !== null && (tb1 === tb2 || tb1 === me);
    const tb2Error = tb2 !== null && (tb2 === tb1 || tb2 === me);
    const meError = me !== null && (me === tb1 || me === tb2);
    let high = 0;
    let low = 0;
    let same = 0;
    if (tb1Error || tb2Error || meError) {
        state = CalculatorState.Duplicate;
    } else if (tb1 === null || tb2 === null || me === null) {
        state = CalculatorState.Incomplete;
    } else {
        state = CalculatorState.Complete;
        ({ high , low , same  } = ffxiv_high_or_low(tb1, tb2, me));
    }
    const handleClickReset = ()=>{
        setTb1(null);
        setTb2(null);
        setMe(null);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            sx: {
                textAlign: "center",
                whiteSpace: "nowrap",
                overflowX: "auto"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(high_or_low_HighOrLowCard, {
                    value: tb1,
                    error: tb1Error,
                    onInputDigit: setTb1
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(high_or_low_HighOrLowCard, {
                    value: tb2,
                    error: tb2Error,
                    onInputDigit: setTb2
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(high_or_low_HighOrLowCard, {
                    disabled: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx(high_or_low_HighOrLowCard, {
                    value: me,
                    error: meError,
                    onInputDigit: setMe
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(high_or_low_HighOrLowCard, {
                    disabled: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(high_or_low_HighOrLowCard, {
                    disabled: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                (()=>{
                    switch(state){
                        case CalculatorState.Incomplete:
                            return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                paragraph: true,
                                children: t("state.inputCards")
                            });
                        case CalculatorState.Duplicate:
                            return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                paragraph: true,
                                children: t("state.duplicateCards")
                            });
                        case CalculatorState.Complete:
                            {
                                const sum = high + low + same;
                                if (high > low) {
                                    return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        paragraph: true,
                                        children: t("state.high", {
                                            chance: toPercent(high, sum)
                                        })
                                    });
                                } else if (high < low) {
                                    return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        paragraph: true,
                                        children: t("state.low", {
                                            chance: toPercent(low, sum)
                                        })
                                    });
                                } else {
                                    return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        paragraph: true,
                                        children: t("state.same", {
                                            chance: toPercent(low, sum)
                                        })
                                    });
                                }
                            }
                    }
                })(),
                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    variant: "contained",
                    color: "secondary",
                    onClick: handleClickReset,
                    children: t("reset")
                })
            ]
        })
    });
};
/* harmony default export */ const high_or_low_Calculator = (Calculator);

// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
// EXTERNAL MODULE: ./src/MathJax.tsx
var MathJax = __webpack_require__(2994);
;// CONCATENATED MODULE: ./src/high-or-low/About.tsx







const About = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("high-or-low");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        title: t("about"),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                paragraph: true,
                children: [
                    "The deck contains 9 cards valued ",
                    (0,MathJax.$)("1"),
                    " through ",
                    (0,MathJax.$)("9"),
                    ". You and Tista-Bie are dealt 3 cards each, with 2 of hers and 1 of yours revealed. You guess if the sum of your 3 cards is higher or lower than the sum of her 3 cards. You win if you are correct."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                children: [
                    "There is a simple way to determine if your sum is more likely to be higher or lower. Calculate the ",
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: "scores"
                    }),
                    " of you and Tista-Bie according to the following formula:"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                sx: {
                    mb: 2
                },
                children: (0,MathJax.$$)(`
          \\begin{align}
            \\text{Your Score} & = (\\text{Your Card}) \\times 5 + 45, \\\\
            \\text{TB’s Score} & = (\\text{TB’s Cards}) \\times 7.
          \\end{align}
        `)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                paragraph: true,
                children: "Then make your guess based on if your score is higher or lower than Tista-Bie\u2019s score."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                paragraph: true,
                children: [
                    "For example, if your card is ",
                    (0,MathJax.$)("7"),
                    ", then your score is ",
                    (0,MathJax.$)("7 \\times 5 + 45 = 80"),
                    ".",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "If Tista-Bie\u2019s cards are ",
                    (0,MathJax.$)("4"),
                    " and ",
                    (0,MathJax.$)("8"),
                    ", then her score is ",
                    (0,MathJax.$)("(4 + 8) \\times 7 = 84"),
                    "."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                paragraph: true,
                children: [
                    "In this scenario, you should guess ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "Low"
                    }),
                    "."
                ]
            })
        ]
    });
};
/* harmony default export */ const high_or_low_About = (/*#__PURE__*/external_react_default().memo(About));

;// CONCATENATED MODULE: ./pages/high-or-low.tsx







const HighOrLow = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("high-or-low");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Page/* default */.Z, {
        title: t("_title"),
        description: t("_description"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(high_or_low_Calculator, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(high_or_low_About, {})
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale ?? "en", [
                "common",
                "high-or-low"
            ])
        }
    };
};
/* harmony default export */ const high_or_low = (HighOrLow);


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

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 3534:
/***/ ((module) => {

module.exports = require("@mui/material/NoSsr");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [906,954], () => (__webpack_exec__(2487)));
module.exports = __webpack_exports__;

})();