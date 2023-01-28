"use strict";
(() => {
var exports = {};
exports.id = 632;
exports.ids = [632];
exports.modules = {

/***/ 4813:
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
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5732);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8099);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_Page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6906);
/* harmony import */ var _src_Section__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8884);
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7255);
/* harmony import */ var _src_Highlight__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7556);
/* harmony import */ var _src_MathJax__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2994);
/* harmony import */ var _src_chocobo_color_FruitIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5648);
/* harmony import */ var _src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9371);
/* harmony import */ var _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3905);
/* harmony import */ var _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1921);
/* harmony import */ var _src_translate__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(9465);


























// const MATRIX_SOLUTION = calculateFruitsMatrix(stains[1].color, stains[6].color).fruits
// const DISTANCE_SOLUTION = calculateFruitsDistance(stains[1].color, stains[6].color, 6).fruits
// console.log(MATRIX_SOLUTION)
// console.log(DISTANCE_SOLUTION)
const MATRIX_SOLUTION = [
    8161,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157,
    8161,
    8159,
    8157
];
const DISTANCE_SOLUTION = [
    8157,
    8157,
    8157,
    8157,
    8157,
    8157,
    8157,
    8157,
    8157,
    8157,
    8157,
    8157,
    8157,
    8157,
    8157,
    8157,
    8157,
    8159,
    8159,
    8159,
    8159,
    8159,
    8161,
    8159,
    8161,
    8159,
    8161,
    8159,
    8161,
    8159,
    8161,
    8159,
    8161,
    8159,
    8161,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8159,
    8161,
    8157,
    8161,
    8161,
    8161,
    8161,
    8161
];
const POSITIVE_COLOR = (theme)=>(0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.success.main, 0.2)
;
const NEGATIVE_COLOR = (theme)=>(0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.error.main, 0.2)
;
function formatDiff(val, locale = "en") {
    return val >= 0 ? "+" + val.toLocaleString(locale) : val.toLocaleString(locale);
}
const ClampedTable = ()=>{
    const { 0: showClamping , 1: setShowClamping  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClickToggleClamping = ()=>{
        setShowClamping(!showClamping);
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
        mb: 2,
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_15___default()), {
                variant: "contained",
                onClick: handleClickToggleClamping,
                children: [
                    showClamping ? "Hide" : "Show",
                    " Solutions"
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_8___default()), {
                in: showClamping,
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9___default()), {
                    sx: {
                        mb: 2
                    },
                    children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default()), {
                        component: (_mui_material_Table__WEBPACK_IMPORTED_MODULE_10___default()),
                        sx: {
                            width: "auto",
                            m: "auto",
                            "& td": {
                                py: 0
                            }
                        },
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11___default()), {
                                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                    children: [
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            colSpan: 5,
                                            align: "center",
                                            children: "Without clamping"
                                        }),
                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            colSpan: 5,
                                            align: "center",
                                            children: "With clamping"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12___default()), {
                                children: (()=>{
                                    const rows = [];
                                    const length = Math.max(MATRIX_SOLUTION.length, DISTANCE_SOLUTION.length);
                                    let currentColorMatrix = _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[1].color */ .DX[1].color;
                                    let currentColorDistance = _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[1].color */ .DX[1].color;
                                    rows.push(/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {}),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(`${currentColorMatrix.R}`)
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(`${currentColorMatrix.G}`)
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(`${currentColorMatrix.B}`)
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    color: currentColorMatrix
                                                })
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {}),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(`${currentColorDistance.R}`)
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(`${currentColorDistance.G}`)
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(`${currentColorDistance.B}`)
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    color: currentColorDistance
                                                })
                                            })
                                        ]
                                    }, -1));
                                    for(let index = 0; index < length; ++index){
                                        const matrixFruit = MATRIX_SOLUTION[index];
                                        const distanceFruit = DISTANCE_SOLUTION[index];
                                        if (matrixFruit !== undefined) {
                                            currentColorMatrix = currentColorMatrix.add(_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .fruitValues */ .$x[matrixFruit]);
                                        }
                                        if (distanceFruit !== undefined) {
                                            currentColorDistance = currentColorDistance.add(_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .fruitValues */ .$x[distanceFruit]);
                                        }
                                        rows.push(/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: matrixFruit !== undefined && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_FruitIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                        fruit: matrixFruit,
                                                        size: 0.8,
                                                        sx: {
                                                            verticalAlign: "middle"
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: matrixFruit !== undefined && (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(`${currentColorMatrix.R}`)
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: matrixFruit !== undefined && (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(`${currentColorMatrix.G}`)
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: matrixFruit !== undefined && (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(`${currentColorMatrix.B}`)
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    children: matrixFruit !== undefined && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                        color: currentColorMatrix
                                                    })
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: distanceFruit !== undefined && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_FruitIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                        fruit: distanceFruit,
                                                        size: 0.8,
                                                        sx: {
                                                            verticalAlign: "middle"
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: distanceFruit !== undefined && (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(`${currentColorDistance.R}`)
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: distanceFruit !== undefined && (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(`${currentColorDistance.G}`)
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: distanceFruit !== undefined && (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(`${currentColorDistance.B}`)
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    children: distanceFruit !== undefined && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                        color: currentColorDistance
                                                    })
                                                })
                                            ]
                                        }, index));
                                    }
                                    return rows;
                                })()
                            })
                        ]
                    })
                })
            })
        ]
    });
};
const About = ()=>{
    const { t , i18n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("chocobo-color");
    const locale = i18n.language;
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_Page__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        title: [
            t("_title"),
            t("aboutPage._title")
        ],
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_Section__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: "Your chocobo\u2019s plumage can be modified by feeding it 6 possible fruits. Each fruit changes the chocobo\u2019s RGB values according to the following table:"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9___default()), {
                        sx: {
                            mb: 2
                        },
                        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default()), {
                            component: (_mui_material_Table__WEBPACK_IMPORTED_MODULE_10___default()),
                            sx: {
                                width: "auto",
                                m: "auto"
                            },
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: "Fruit"
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\text{R}")
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\text{G}")
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\text{B}")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    children: [
                                        _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.XelphatolApple */ .PO.XelphatolApple,
                                        _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.MamookPear */ .PO.MamookPear,
                                        _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.OGhomoroBerries */ .PO.OGhomoroBerries,
                                        _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.DomanPlum */ .PO.DomanPlum,
                                        _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.Valfruit */ .PO.Valfruit,
                                        _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.CieldalaesPineapple */ .PO.CieldalaesPineapple
                                    ].map((fruit)=>{
                                        const { R , G , B  } = _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .fruitValues */ .$x[fruit];
                                        return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    children: [
                                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_FruitIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                            fruit: fruit,
                                                            sx: {
                                                                verticalAlign: "middle",
                                                                mr: 1
                                                            }
                                                        }),
                                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            component: "span",
                                                            sx: {
                                                                verticalAlign: "middle"
                                                            },
                                                            children: (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .fruits */ .DN[fruit], "name")
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: R > 0 ? POSITIVE_COLOR : R < 0 ? NEGATIVE_COLOR : "none"
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(formatDiff(R))
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: G > 0 ? POSITIVE_COLOR : G < 0 ? NEGATIVE_COLOR : "none"
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(formatDiff(G))
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: B > 0 ? POSITIVE_COLOR : B < 0 ? NEGATIVE_COLOR : "none"
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)(formatDiff(B))
                                                })
                                            ]
                                        }, fruit);
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: [
                            "RGB values can never exceed ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("250"),
                            " or go below ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("0"),
                            ". If eating a fruit will cause a value to go beyond the valid range, it will be clamped. The RGB values of possible colors are known, and the problem is how to determine what sequence of fruits will get from one color to another. Unfortunately, not all RGB values are possible since the fruits always change values in increments of ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("5"),
                            " (ignoring clamping). The goal is to reach certain RGB values such that the closest possible color is the desired color. Distance here is measured using the ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .C, {
                                href: "https://en.wikipedia.org/wiki/Euclidean_distance",
                                children: "Euclidean norm"
                            }),
                            " (assuming this is what FFXIV uses)."
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9___default()), {
                        sx: {
                            mb: 2
                        },
                        children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$$)("\\lVert \\text{Color} \\rVert = \\sqrt{\\text{Color.R}^2 + \\text{Color.G}^2 + \\text{Color.B}^2}")
                    })
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_Section__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                title: "Greedy Algorithm",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: "A simple algorithm is to keep picking the fruit that gets us closest to the desired color, stopping when no single fruit can get any closer."
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Highlight__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        language: "typescript",
                        sx: {
                            mb: 2
                        },
                        children: `
function calculate (startColor: Color, endColor: Color): Fruit[] {
  const solution: Fruit[] = []
  let currentColor = startColor
  let currentDistance = startColor.distanceTo(endColor)

  while (true) {
    // Find the best fruit
    const fruitsSorted = fruits.sort((fruitA, fruitB) =>
      currentColor.add(fruitA).distanceTo(endColor) -
      currentColor.add(fruitB).distanceTo(endColor)
    )
    const bestFruit = fruitsSorted[0]

    // If this fruit doesn't get us closer, stop
    if (currentColor.add(bestFruit).distanceTo(endColor) >= currentDistance) {
      return fruits

    // Otherwise, add it to the list and continue
    } else {
      fruits.push(bestFruit)
      currentColor = currentColor.add(bestFruit)
      currentDistance = currentColor.distanceTo(endColor)
    }
  }
}
          `.trim()
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: [
                            "This algorithm has several shortcomings, but performs decently well and serves as the basis to the actual algorithm used. The biggest issue is that the algorithm tends to stop early. Suppose the target color is ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\operatorname{RGB}(100, 100, 100)"),
                            ", and the current color is ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\operatorname{RGB}(105, 105, 105)"),
                            ". The current distance is ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\sqrt{75}"),
                            " and eating any fruit will cause this distance to jump up to ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\sqrt{100}"),
                            " or ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\sqrt{200}"),
                            ", so the algorithm terminates. But feeding the 3 fruits ",
                            (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .fruits */ .DN[_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.XelphatolApple */ .PO.XelphatolApple], "name"),
                            ", ",
                            (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .fruits */ .DN[_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.MamookPear */ .PO.MamookPear], "name"),
                            ", and ",
                            (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .fruits */ .DN[_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.OGhomoroBerries */ .PO.OGhomoroBerries], "name"),
                            " would land exactly on the target color."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_Section__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                title: "Matrix Algorithm",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: "The next algorithm to consider involves treating the problem as a sort of matrix equation. Using the variables"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9___default()), {
                        sx: {
                            mb: 2
                        },
                        children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$$)(`
            \\begin{align}
              X & = \\text{# of ${(0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .fruits */ .DN[_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.XelphatolApple */ .PO.XelphatolApple], "plural", "singular")}} \\\\
              M & = \\text{# of ${(0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .fruits */ .DN[_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.MamookPear */ .PO.MamookPear], "plural", "singular")}} \\\\
              O & = \\text{# of ${(0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .fruits */ .DN[_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.OGhomoroBerries */ .PO.OGhomoroBerries], "plural", "singular")}} \\\\
              D & = \\text{# of ${(0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .fruits */ .DN[_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.DomanPlum */ .PO.DomanPlum], "plural", "singular")}} \\\\
              V & = \\text{# of ${(0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .fruits */ .DN[_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.Valfruit */ .PO.Valfruit], "plural", "singular")}} \\\\
              C & = \\text{# of ${(0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .fruits */ .DN[_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.CieldalaesPineapple */ .PO.CieldalaesPineapple], "plural", "singular")}} \\\\
            \\end{align}
          `)
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: "and not requiring them to be integers, we must solve"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9___default()), {
                        sx: {
                            mb: 2
                        },
                        children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$$)(`
            \\begin{array}{ll}
              \\text{minimize}   & \\phantom{+}X +M +O +D +V +C, \\\\
              \\\\
              \\text{subject to} & +X -M -O -D +V +C = R / 5, \\\\
                                 & -X +M -O +D -V +C = G / 5, \\\\
                                 & -X -M +O +D +V -C = B / 5, \\\\
              \\\\
              \\text{and}        & X, M, O, D, V, C \\geq 0 \\\\
            \\end{array}
          `)
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: [
                            "where ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("R, G, B"),
                            " is the difference ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\text{DesiredColor} - \\text{CurrentColor}"),
                            ". This does not take into account clamping, which can be avoided almost always. It gives only the number of fruits required, which is then ordered to hopefully avoid clamping. I did this by repeatedly picking fruits that minimize the distance to ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\operatorname{RGB}(\\frac{256}{2}, \\frac{256}{2}, \\frac{256}{2})"),
                            " using the ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .C, {
                                href: "https://en.wikipedia.org/wiki/Uniform_norm",
                                children: "uniform norm"
                            }),
                            "."
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: [
                            "Since the ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("D, V, C"),
                            " fruits are \u201Copposites\u201D of the ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("X, M, O"),
                            " fruits, we can drop the ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("D, V, C"),
                            " variables by removing the nonnegativity constraints on ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("X, M, O"),
                            ". This transforms the problem into the standard linear equation"
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9___default()), {
                        sx: {
                            mb: 2
                        },
                        children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$$)(`
            \\begin{pmatrix}
              \\phantom{+}5 &            -5 &             -5 \\\\
                         -5 & \\phantom{+}5 &             -5 \\\\
                         -5 &            -5 &  \\phantom{+}5 \\\\
            \\end{pmatrix}
            \\begin{pmatrix}
              X \\\\ M \\\\ O
            \\end{pmatrix}
            =
            \\begin{pmatrix}
              R \\\\ G \\\\ B
            \\end{pmatrix}
          `)
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: [
                            "with a negative value of ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("X"),
                            " corresponding instead to a positive value of ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("D"),
                            ", etc. To turn the solutions into integers, I round them. (This doesn\u2019t always give the closest color, and that problem is the ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .C, {
                                href: "https://en.wikipedia.org/wiki/Lattice_problem#Closest_vector_problem_(CVP)",
                                children: "closest vector problem"
                            }),
                            ". The lattice is \u201Cnice\u201D enough though, and since I don\u2019t end up using this strategy, I don\u2019t bother optimizing it.) This algorithm can outperform the first algorithm in situations where the first algorithm would terminate early."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_Section__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                title: "Lookahead",
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: "To fix the issue of early termination in the first algorithm, some amount of lookahead is introduced. Instead of considering fruits one by one, the algorithm does the following:"
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                        children: [
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                component: "li",
                                children: [
                                    "Compute all possible fruit combinations up to a length of ",
                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("L")
                                ]
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                component: "li",
                                children: [
                                    "Let ",
                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("F"),
                                    " be the fruit combination that lands closest to the target color"
                                ]
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                component: "li",
                                children: [
                                    "If ",
                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("F"),
                                    " contains no fruits, then stop (no path gets closer)"
                                ]
                            }),
                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                component: "li",
                                children: [
                                    "Otherwise, add the first fruit in ",
                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("F"),
                                    " to the solution and repeat"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Highlight__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        language: "typescript",
                        sx: {
                            mb: 2
                        },
                        children: `
while (true) {
  // Find the best path
  const allPaths = computePaths(lookahead)
  const pathsSorted = allPaths.sort((pathA, pathB) =>
    currentColor.addPath(pathA).distanceTo(endColor) -
    currentColor.addPath(pathB).distanceTo(endColor)
  )

  // This assumes a stable sort so that the empty path is prioritized
  const bestPath = pathsSorted[0]

  // If no paths get us closer, stop
  if (bestPath.length === 0) {
    return fruits

  // Otherwise, add the first fruit in the path to the list and continue
  } else {
    const bestFruit = bestPath[0]
    fruits.push(bestFruit)
    currentColor = currentColor.add(bestFruit)
    currentDistance = currentColor.distanceTo(endColor)
  }
}
          `.trim()
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: [
                            "With a big enough lookahead, the algorithm is able to momentarily step further away from the target color in order to get closer later. The algorithm implemented on the ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .C, {
                                href: "/chocobo-color",
                                children: "Chocobo Color page"
                            }),
                            " is this algorithm with a lookahead of ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("L = 3"),
                            ", which specifically admits the strategy of eating 3 fruits to increase/reduce all values by 5. This performs very well."
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: [
                            "Lookahead also allows the algorithm to utilizing clamping, considering cases where the fruits no longer commute. For example, if the current color is ",
                            (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[1] */ .DX[1], "name"),
                            " ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                inline: true,
                                stain: _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[1] */ .DX[1]
                            }),
                            " and the target color is ",
                            (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[6] */ .DX[6], "name"),
                            " ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                inline: true,
                                stain: _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[6] */ .DX[6]
                            }),
                            ", then we need to decrease the RGB values as much as possible. Without any clamping, this can be done in 110 fruits. With clamping, it\u2019s possible to get as close with 97 fruits instead. It involves feeding a bunch of ",
                            (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .fruits */ .DN[_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.XelphatolApple */ .PO.XelphatolApple], "plural", "singular"),
                            " first to max out the RGB\u2019s red value so that subsequent ",
                            (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .fruits */ .DN[_src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.XelphatolApple */ .PO.XelphatolApple], "plural", "singular"),
                            " will lower the average RGB value quicker. Unfortunately, lookaheads with ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("L > 5"),
                            " quickly become infeasible, the benefits are small, and situations that can use it are rare."
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ClampedTable, {})
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_Section__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                title: "Optimality",
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: [
                            "Fortunately, a lookahead of ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("L = 3"),
                            " is enough to guarantee that the algorithm terminates with a color as close to the target color as possible (ignoring clamping). By feeding 2 fruits, any individual RGB value can be adjusted by ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\pm10"),
                            " while leaving the other two values unaffected. This means that the color the algorithm ends up at cannot have coordinates that differ from the target color\u2019s by more than ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("5"),
                            ". The same must be true of the optimal solution."
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: [
                            "Let the solution the algorithm returns be ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\operatorname{RGB(r, g, b)}"),
                            ". Focusing only on the red component, the optimal solution must have a red component of ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("r-5"),
                            ", ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("r"),
                            ", or ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("r+5"),
                            ". Now consider the 27 points:"
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9___default()), {
                        sx: {
                            mb: 2
                        },
                        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default()), {
                            component: (_mui_material_Table__WEBPACK_IMPORTED_MODULE_10___default()),
                            sx: {
                                width: "auto",
                                m: "auto"
                            },
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {}),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {}),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("r-5")
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("r")
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("r+5")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    children: [
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    rowSpan: 3,
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("g-5")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("b-5")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: POSITIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r-5, g-5, b-5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+0, g-5, b-5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: POSITIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+5, g-5, b-5)")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("b")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r-5, g-5, b+0)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+0, g-5, b+0)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+5, g-5, b+0)")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("b+5")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: POSITIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r-5, g-5, b+5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+0, g-5, b+5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: POSITIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+5, g-5, b+5)")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    rowSpan: 3,
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("g")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("b-5")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r-5, g+0, b-5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+0, g+0, b-5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+5, g+0, b-5)")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("b")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r-5, g+0, b+0)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: POSITIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+0, g+0, b+0)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+5, g+0, b+0)")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("b+5")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r-5, g+0, b+5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+0, g+0, b+5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+5, g+0, b+5)")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    rowSpan: 3,
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("g+5")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("b-5")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: POSITIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r-5, g+5, b-5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+0, g+5, b-5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: POSITIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+5, g+5, b-5)")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("b")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r-5, g+5, b+0)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+0, g+5, b+0)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+5, g+5, b+0)")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    component: "th",
                                                    scope: "row",
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("b+5")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r-5, g+5, b+5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+0, g+5, b+5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    sx: {
                                                        backgroundColor: NEGATIVE_COLOR
                                                    },
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+5, g+5, b+5)")
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: [
                            "One of these points is the optimal solution, and all the points marked as red are impossible to reach due to parity (see the Error section below). Starting at ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r, g, b)"),
                            ", we must show that the algorithm considers all the green points with a lookahead of ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("L = 3"),
                            ". By symmetry, there are only 3 cases that need to be checked."
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9___default()), {
                        sx: {
                            mb: 2
                        },
                        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default()), {
                            component: (_mui_material_Table__WEBPACK_IMPORTED_MODULE_10___default()),
                            sx: {
                                width: "auto",
                                m: "auto"
                            },
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: "Target color"
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: "Solution"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    children: [
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+0, g+0, b+0)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        children: "No fruits"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+5, g+5, b+5)")
                                                }),
                                                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: [
                                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_FruitIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                            fruit: _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.DomanPlum */ .PO.DomanPlum
                                                        }),
                                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_FruitIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                            fruit: _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.Valfruit */ .PO.Valfruit
                                                        }),
                                                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_FruitIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                            fruit: _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.CieldalaesPineapple */ .PO.CieldalaesPineapple
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(r+5, g+5, b-5)")
                                                }),
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                    align: "center",
                                                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_FruitIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                        fruit: _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.CieldalaesPineapple */ .PO.CieldalaesPineapple
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: "Thus the algorithm is optimal, in the sense that it returns the closest possible color without clamping."
                    })
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_Section__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                title: "Error",
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: [
                            "The algorithm can get us pretty close to the desired color, but it\u2019s not always possible to be exact. The two closest possible colors a chocobo can be are ",
                            (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[79] */ .DX[79], "name"),
                            " ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                inline: true,
                                stain: _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[79] */ .DX[79]
                            }),
                            " and ",
                            (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[81] */ .DX[81], "name"),
                            " ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                inline: true,
                                stain: _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[81] */ .DX[81]
                            }),
                            ". These two have a distance of ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("9.434"),
                            ", so if we can guarantee an error of less than ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("9.434 / 2 = 4.717"),
                            ", then the desired color will always be the closest color, but this is impossible to guarantee."
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: [
                            "Feeding a fruit will always change the parity of the RGB values, i.e. odd \u2192 even or even \u2192 odd. If the target color is ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\operatorname{RGB}(100, 100, 100)"),
                            " with all even values, and the current color is ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("\\operatorname{RGB}(100, 100, 105)"),
                            " with 1 odd value, no sequence of fruits can get closer (ignoring clamping). Thus the maximum error is bounded below by ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("5"),
                            ", and we cannot guarantee that the closest color is the desired color. The maximum error is actually ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("5\\sqrt{5}/2 \\approx 5.59"),
                            " given by the vector ",
                            (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(5, 2.5, 0)"),
                            "."
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: [
                            "A possible solution is to instead aim for some color that is near the desired color and far from other nearby colors, maximizing the likelihood that we end up at the desired color. The hope is that our final color ends up inside the ",
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_Link__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .C, {
                                href: "https://en.wikipedia.org/wiki/Voronoi_diagram",
                                children: "Voronoi cell"
                            }),
                            " of the desired color, so a sensible target would be the centroid of this region. In 2D, this may look like"
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                        component: "figure",
                        mb: 2,
                        textAlign: "center",
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/images/chocobo-color/voronoi-diagram.png"
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    variant: "caption",
                                    children: "The dots are colors we want to achieve, and the crosses are alternative targets."
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                        paragraph: true,
                        children: "This would allow more room for error, but I decided computing these targets would be too much work. It would also complicate recoloring chocobos. As long as the algorithm gets as close to the desired color as possible (ignoring clamping), it\u2019s sufficient. There are only two color combinations where the closest color does not lead to the desired color, and those have hardcoded solutions for now."
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9___default()), {
                        sx: {
                            mb: 2
                        },
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7___default()), {
                            component: (_mui_material_Table__WEBPACK_IMPORTED_MODULE_10___default()),
                            sx: {
                                width: "auto",
                                m: "auto"
                            },
                            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12___default()), {
                                children: [
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                component: "th",
                                                scope: "row",
                                                align: "center",
                                                children: "Current color"
                                            }),
                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: [
                                                    (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[37] */ .DX[37], "name"),
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(250, 198, 43)")
                                                ]
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    stain: _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[37] */ .DX[37]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: [
                                                    (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[57] */ .DX[57], "name"),
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(150, 189, 185)")
                                                ]
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    stain: _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[57] */ .DX[57]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                component: "th",
                                                scope: "row",
                                                align: "center",
                                                children: "Desired color"
                                            }),
                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: [
                                                    (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[79] */ .DX[79], "name"),
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(50, 44, 59)")
                                                ]
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    stain: _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[79] */ .DX[79]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: [
                                                    (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[79] */ .DX[79], "name"),
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(50, 44, 59)")
                                                ]
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    stain: _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[79] */ .DX[79]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                component: "th",
                                                scope: "row",
                                                align: "center",
                                                children: "\u201COptimal\u201D solution"
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(55, 43, 58)")
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    color: new _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Color */ .Il(55, 43, 58)
                                                })
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(55, 44, 60)")
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    color: new _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Color */ .Il(55, 44, 60)
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                component: "th",
                                                scope: "row",
                                                align: "center",
                                                children: "Resultant color"
                                            }),
                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: [
                                                    (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[81] */ .DX[81], "name"),
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(59, 42, 61)")
                                                ]
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    stain: _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[81] */ .DX[81]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: [
                                                    (0,_src_translate__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(locale, _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[81] */ .DX[81], "name"),
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(59, 42, 61)")
                                                ]
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    stain: _src_chocobo_color_ffxiv_chocobo_color_data__WEBPACK_IMPORTED_MODULE_23__/* .stains[81] */ .DX[81]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                component: "th",
                                                scope: "row",
                                                align: "center",
                                                children: "Adjusted solution"
                                            }),
                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: [
                                                    "Remove 1\xd7 ",
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_FruitIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                        fruit: _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.XelphatolApple */ .PO.XelphatolApple,
                                                        size: 0.8
                                                    }),
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(50, 48, 63)")
                                                ]
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    color: new _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Color */ .Il(50, 48, 63)
                                                })
                                            }),
                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: [
                                                    "Add 1\xd7 ",
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_FruitIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                        fruit: _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Fruit.MamookPear */ .PO.MamookPear,
                                                        size: 0.8
                                                    }),
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    (0,_src_MathJax__WEBPACK_IMPORTED_MODULE_20__.$)("(50, 49, 55)")
                                                ]
                                            }),
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                align: "center",
                                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_chocobo_color_StainButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    color: new _src_chocobo_color_ffxiv_chocobo_color__WEBPACK_IMPORTED_MODULE_24__/* .Color */ .Il(50, 49, 55)
                                                })
                                            })
                                        ]
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
                "chocobo-color"
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

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("@mui/material/Collapse");

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

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,906,255,730,954,121], () => (__webpack_exec__(4813)));
module.exports = __webpack_exports__;

})();