"use strict";
(() => {
var exports = {};
exports.id = 434;
exports.ids = [434,479];
exports.modules = {

/***/ 2004:
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
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8099);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3103);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _src_Page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6906);
/* harmony import */ var _src_Section__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8884);
/* harmony import */ var _src_ocean_fishing_NavigationBar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7389);
/* harmony import */ var _src_ocean_fishing_OceanFishIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4994);
/* harmony import */ var _src_ocean_fishing_ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7576);
/* harmony import */ var _src_ocean_fishing_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3440);
/* harmony import */ var _src_translate__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9465);

























const CONTENT_BONUSES = Object.values(_src_ocean_fishing_ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_22__/* .contentBonuses */ .ez).sort((a, b)=>a.order - b.order
).filter((contentBonus)=>contentBonus.id !== 0 && !contentBonus.requirement.en.includes("Target number adjusted for party size")
);
function getOverrides(contentBonusId) {
    switch(contentBonusId){
        case 2:
            return [
                1
            ];
        case 6:
            return [
                5
            ];
        case 18:
            return [
                17
            ];
        case 19:
            return [
                17,
                18
            ];
        default:
            return [];
    }
}
function getOverriddenBy(contentBonusId) {
    switch(contentBonusId){
        case 1:
            return [
                2
            ];
        case 5:
            return [
                6
            ];
        case 17:
            return [
                18,
                19
            ];
        case 18:
            return [
                19
            ];
        default:
            return [];
    }
}
const CalculatorRow = ({ achievement , requiredPoints , totalBonus  })=>{
    const { i18n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("ocean-fishing");
    const locale = i18n.language;
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
                item: true,
                xs: 8,
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                    sx: {
                        textAlign: "justify",
                        textAlignLast: "justify",
                        "& > *": {
                            display: {
                                sx: "block",
                                sm: "inline-block"
                            }
                        }
                    },
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                            component: "div",
                            sx: {
                                textAlignLast: "left"
                            },
                            children: (0,_src_translate__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z)(locale, _src_ocean_fishing_ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_22__/* .achievements */ .EF[achievement], "reward")
                        }),
                        " ",
                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                            component: "div",
                            sx: {
                                fontSize: "1.25em",
                                textAlignLast: "right"
                            },
                            children: [
                                Math.ceil(requiredPoints / totalBonus * 100).toLocaleString(locale),
                                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    display: "inline",
                                    sx: {
                                        ml: 2
                                    },
                                    children: [
                                        "\xd7",
                                        totalBonus,
                                        "%"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
                item: true,
                xs: 4,
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                    sx: {
                        fontSize: "1.25em"
                    },
                    children: [
                        "=\xa0",
                        requiredPoints.toLocaleString(locale)
                    ]
                })
            })
        ]
    });
};
const Bonuses = ()=>{
    const { t , i18n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("ocean-fishing");
    const { 0: basePoints , 1: setBasePoints  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5000);
    const { 0: checked , 1: setChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        1: true,
        2: true,
        3: true,
        5: true,
        7: true,
        8: true,
        9: true,
        17: true,
        18: true,
        19: true
    });
    const locale = i18n.language;
    const filteredContentBonuses = CONTENT_BONUSES.filter((contentBonus)=>{
        if (!checked[contentBonus.id]) return false;
        for (const override of getOverriddenBy(contentBonus.id)){
            if (checked[override]) return false;
        }
        return true;
    });
    const totalBonus = filteredContentBonuses.reduce((acc, curr)=>acc + curr.bonus - 100
    , 0) + 100;
    const handleClickChecked = (contentBonusId)=>{
        const newChecked = {
            ...checked,
            [contentBonusId]: !checked[contentBonusId]
        };
        if (newChecked[contentBonusId]) {
            getOverrides(contentBonusId).forEach((contentBonus)=>{
                newChecked[contentBonus] = true;
            });
        } else {
            getOverriddenBy(contentBonusId).forEach((contentBonus)=>{
                newChecked[contentBonus] = false;
            });
        }
        setChecked(newChecked);
    };
    const handleInputBasePoints = (event)=>{
        setBasePoints(Math.max(0, Number(event.target.value)));
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_Page__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        title: [
            t("_title"),
            t("bonusesPage._title")
        ],
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_ocean_fishing_NavigationBar__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Section__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default()), {
                    component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default()),
                    children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_9___default()), {
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_10___default()), {
                                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    children: [
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            colSpan: 3,
                                            align: "center",
                                            children: t("bonusesPage.objective")
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            align: "center",
                                            children: t("bonusesPage.requirement")
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            align: "center",
                                            children: t("bonusesPage.bonus")
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_11___default()), {
                                children: CONTENT_BONUSES.map((contentBonus)=>/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        hover: true,
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16___default()), {
                                                    onClick: handleClickChecked.bind(null, contentBonus.id),
                                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                        sx: {
                                                            color: checked[contentBonus.id] ? "success.main" : "inherit",
                                                            opacity: checked[contentBonus.id] ? 1 : 0.33
                                                        }
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_ocean_fishing_OceanFishIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                    type: "content-bonus",
                                                    id: contentBonus.id
                                                })
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    children: (0,_src_ocean_fishing_utils__WEBPACK_IMPORTED_MODULE_23__/* .cleanObjective */ .Jc)((0,_src_translate__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z)(locale, contentBonus, "objective"))
                                                })
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    children: (0,_src_ocean_fishing_utils__WEBPACK_IMPORTED_MODULE_23__/* .cleanRequirement */ .jV)((0,_src_translate__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z)(locale, contentBonus, "requirement"))
                                                })
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    children: [
                                                        contentBonus.bonus - 100,
                                                        "%"
                                                    ]
                                                })
                                            })
                                        ]
                                    }, contentBonus.id)
                                )
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_Section__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                title: t("bonusesPage.calculator"),
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                        sx: {
                            textAlign: "center",
                            mb: 5,
                            "& > *": {
                                verticalAlign: "middle"
                            }
                        },
                        children: [
                            filteredContentBonuses.length > 0 ? filteredContentBonuses.map((contentBonus)=>/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    sx: {
                                        display: "inline-block",
                                        textAlign: "center",
                                        overflow: "visible"
                                    },
                                    children: [
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_ocean_fishing_OceanFishIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                            type: "content-bonus",
                                            id: contentBonus.id
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            variant: "body2",
                                            sx: {
                                                height: 0
                                            },
                                            children: [
                                                contentBonus.bonus - 100,
                                                "%"
                                            ]
                                        })
                                    ]
                                }, contentBonus.id)
                            ) : /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                component: "span",
                                children: [
                                    "No ",
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        component: "code",
                                        variant: "outlined",
                                        sx: {
                                            px: 0.5
                                        },
                                        children: "contentBonus"
                                    }),
                                    "es selected"
                                ]
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                component: "span",
                                sx: {
                                    fontSize: "1.25em"
                                },
                                children: [
                                    "\xa0=\xa0",
                                    totalBonus - 100,
                                    "%"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
                        container: true,
                        justifyContent: "center",
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
                            item: true,
                            xs: 12,
                            md: 8,
                            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
                                container: true,
                                spacing: 2,
                                alignItems: "flex-end",
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        item: true,
                                        xs: 8,
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            type: "number",
                                            variant: "standard",
                                            fullWidth: true,
                                            label: t("bonusesPage.basePoints"),
                                            InputProps: {
                                                endAdornment: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    position: "end",
                                                    children: [
                                                        "\xd7",
                                                        totalBonus,
                                                        "%"
                                                    ]
                                                })
                                            },
                                            value: basePoints,
                                            onChange: handleInputBasePoints
                                        })
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        item: true,
                                        xs: 4,
                                        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            sx: {
                                                fontSize: "1.25em"
                                            },
                                            children: [
                                                "= ",
                                                Math.floor(basePoints * totalBonus / 100).toLocaleString(locale)
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            m: 2
                                        })
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CalculatorRow, {
                                        achievement: 2560,
                                        requiredPoints: 5000,
                                        totalBonus: totalBonus
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CalculatorRow, {
                                        achievement: 2561,
                                        requiredPoints: 10000,
                                        totalBonus: totalBonus
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CalculatorRow, {
                                        achievement: 2562,
                                        requiredPoints: 16000,
                                        totalBonus: totalBonus
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CalculatorRow, {
                                        achievement: 2759,
                                        requiredPoints: 20000,
                                        totalBonus: totalBonus
                                    })
                                ]
                            })
                        })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bonuses);


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

/***/ 8455:
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

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,906,255,122,730,389,994], () => (__webpack_exec__(2004)));
module.exports = __webpack_exports__;

})();