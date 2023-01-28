"use strict";
(() => {
var exports = {};
exports.id = 183;
exports.ids = [183];
exports.modules = {

/***/ 547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ wondrous_tails),
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
// EXTERNAL MODULE: ./src/Page.tsx
var Page = __webpack_require__(6906);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
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
var TableCell_ = __webpack_require__(8099);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./src/Section.tsx
var Section = __webpack_require__(8884);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: ./src/wondrous-tails/CalculatorCell.tsx




const CalculatorCell = ({ selected =false , onSelect  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        component: "td",
        onClick: onSelect,
        sx: {
            display: "inline-block",
            width: {
                xs: "5em",
                md: "7em"
            },
            height: {
                xs: "5em",
                md: "7em"
            },
            border: "1px solid black",
            cursor: "pointer",
            backgroundColor: selected ? (theme)=>(0,system_.alpha)(theme.palette.primary.main, 0.5)
             : "none",
            transition: "background-color 0.1s linear"
        }
    });
};
/* harmony default export */ const wondrous_tails_CalculatorCell = (CalculatorCell);

;// CONCATENATED MODULE: ./src/wondrous-tails/ffxiv-wondrous-tails/calculate-probabilities.ts
const LINES = [
    [
        0,
        1,
        2,
        3
    ],
    [
        4,
        5,
        6,
        7
    ],
    [
        8,
        9,
        10,
        11
    ],
    [
        12,
        13,
        14,
        15
    ],
    [
        0,
        4,
        8,
        12
    ],
    [
        1,
        5,
        9,
        13
    ],
    [
        2,
        6,
        10,
        14
    ],
    [
        3,
        7,
        11,
        15
    ],
    [
        0,
        5,
        10,
        15
    ],
    [
        3,
        6,
        9,
        12
    ]
];
function countLines(board) {
    let count = 0;
    for (const line of LINES){
        if (board[line[0]] && board[line[1]] && board[line[2]] && board[line[3]]) {
            ++count;
        }
    }
    return count;
}
function choose(set, count) {
    if (count >= set.length) {
        return [
            [
                ...set
            ]
        ];
    } else if (count === 0) {
        return [
            []
        ];
    } else {
        return [
            ...choose(set.slice(1), count - 1).map((x)=>[
                    set[0],
                    ...x
                ]
            ),
            ...choose(set.slice(1), count)
        ];
    }
}
function calculateProbabilities(board) {
    const emptyIndices = Array(16).fill(undefined).map((_, index)=>index
    ).filter((index)=>!board[index]
    );
    const possibleBoards = choose(emptyIndices, Math.max(emptyIndices.length - 7, 0)).map((empties)=>{
        const newBoard = board.slice();
        for (const index of empties){
            newBoard[index] = true;
        }
        return newBoard;
    });
    const buckets = [
        0,
        0,
        0,
        0
    ];
    for (const possibleBoard of possibleBoards){
        ++buckets[Math.min(countLines(possibleBoard), 3)];
    }
    return {
        lines1: buckets[1] + buckets[2] + buckets[3],
        lines2: buckets[2] + buckets[3],
        lines3: buckets[3],
        total: possibleBoards.length
    };
};

;// CONCATENATED MODULE: ./src/wondrous-tails/Calculator.tsx















const PROB_1_LINES = 6688 / 11440;
const PROB_2_LINES = 1208 / 11440;
const PROB_3_LINES = 24 / 11440;
function toPercent(val) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
        children: (val * 100).toFixed(1) + "%"
    });
}
function toDeviationPercent(val) {
    const string = (val >= 0 ? "+" : "") + (val * 100).toFixed(1) + "%";
    const color = val > 0 ? "green" : val < 0 ? "red" : undefined;
    return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
        style: {
            color
        },
        children: string
    });
}
const Calculator = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("wondrous-tails");
    const { 0: board , 1: setBoard  } = (0,external_react_.useState)(Array(16).fill(false));
    const { lines1 , lines2 , lines3 , total  } = calculateProbabilities(board);
    const filledCells = board.filter((x)=>x
    ).length;
    const toggleCell = (index)=>{
        const newBoard = board.slice();
        newBoard[index] = !board[index];
        setBoard(newBoard);
    };
    const handleClickReset = ()=>{
        setBoard(Array(16).fill(false));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 4,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    lg: "auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                        component: "table",
                        sx: {
                            display: "inline-block",
                            borderCollapse: "collapse",
                            borderSpacing: 0,
                            border: "1px solid black"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[0],
                                            onSelect: toggleCell.bind(null, 0)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[1],
                                            onSelect: toggleCell.bind(null, 1)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[2],
                                            onSelect: toggleCell.bind(null, 2)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[3],
                                            onSelect: toggleCell.bind(null, 3)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[4],
                                            onSelect: toggleCell.bind(null, 4)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[5],
                                            onSelect: toggleCell.bind(null, 5)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[6],
                                            onSelect: toggleCell.bind(null, 6)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[7],
                                            onSelect: toggleCell.bind(null, 7)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[8],
                                            onSelect: toggleCell.bind(null, 8)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[9],
                                            onSelect: toggleCell.bind(null, 9)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[10],
                                            onSelect: toggleCell.bind(null, 10)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[11],
                                            onSelect: toggleCell.bind(null, 11)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[12],
                                            onSelect: toggleCell.bind(null, 12)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[13],
                                            onSelect: toggleCell.bind(null, 13)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[14],
                                            onSelect: toggleCell.bind(null, 14)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_CalculatorCell, {
                                            selected: board[15],
                                            onSelect: toggleCell.bind(null, 15)
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    lg: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            variant: "h3",
                            paragraph: true,
                            children: [
                                filledCells,
                                " / 9"
                            ]
                        }),
                        filledCells <= 9 ? /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            paragraph: true,
                            children: t("selectStickers")
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            paragraph: true,
                            children: t("tooManyStickers")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                            sx: {
                                display: "inline-block",
                                mb: 2
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                                sx: {
                                    width: "auto"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    children: t("lines")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    children: t("chance")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    children: t("deviation")
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableBody_default()), {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        align: "center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            children: "1+"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        align: "right",
                                                        children: toPercent(lines1 / total)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        align: "right",
                                                        children: toDeviationPercent(lines1 / total - PROB_1_LINES)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        align: "center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            children: "2+"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        align: "right",
                                                        children: toPercent(lines2 / total)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        align: "right",
                                                        children: toDeviationPercent(lines2 / total - PROB_2_LINES)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        align: "center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            children: "3"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        align: "right",
                                                        children: toPercent(lines3 / total)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                        align: "right",
                                                        children: toDeviationPercent(lines3 / total - PROB_3_LINES)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "contained",
                            color: "secondary",
                            onClick: handleClickReset,
                            children: t("reset")
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const wondrous_tails_Calculator = (Calculator);

;// CONCATENATED MODULE: ./pages/wondrous-tails.tsx






const WondrousTails = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("wondrous-tails");
    return /*#__PURE__*/ jsx_runtime_.jsx(Page/* default */.Z, {
        title: t("_title"),
        description: t("_description"),
        children: /*#__PURE__*/ jsx_runtime_.jsx(wondrous_tails_Calculator, {})
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale ?? "en", [
                "common",
                "wondrous-tails"
            ])
        }
    };
};
/* harmony default export */ const wondrous_tails = (WondrousTails);


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

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

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

/***/ 5953:
/***/ ((module) => {

module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

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
var __webpack_exports__ = __webpack_require__.X(0, [906], () => (__webpack_exec__(547)));
module.exports = __webpack_exports__;

})();