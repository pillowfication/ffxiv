"use strict";
(() => {
var exports = {};
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 5898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mini_cactpot),
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
;// CONCATENATED MODULE: ./src/mini-cactpot/gists/cache.json
const cache_namespaceObject = JSON.parse('[{"v":1677.7854166666664,"c":[2,6]},{"v":1665.8127976190476,"c":[2,6]},{"v":1662.504761904762,"c":[2,6]},{"v":1365.0047619047618,"c":4},{"v":1359.5589285714286,"c":4},{"v":1364.3044642857142,"c":4},{"v":1454.5455357142855,"c":4},{"v":1527.0875,"c":[2,4,6]},{"v":1517.7214285714285,"c":[2,4,6]},{"v":1411.3541666666665,"c":4},{"v":1414.9401785714288,"c":4},{"v":1406.4190476190477,"c":4},{"v":1443.3062499999999,"c":[6,8]},{"v":1444.3172619047618,"c":[4,6,8]},{"v":1441.3663690476192,"c":4},{"v":1485.6839285714286,"c":4},{"v":1512.927976190476,"c":[0,2]},{"v":1518.466369047619,"c":[0,2]},{"v":1677.7854166666664,"c":[0,8]},{"v":1665.8127976190476,"c":[0,8]},{"v":1662.504761904762,"c":[0,8]},{"v":1365.0047619047618,"c":4},{"v":1359.5589285714286,"c":4},{"v":1364.3044642857142,"c":4},{"v":1454.5455357142855,"c":4},{"v":1527.0875,"c":[0,4,8]},{"v":1517.7214285714285,"c":[0,4,8]},{"v":1411.3541666666665,"c":4},{"v":1414.9401785714288,"c":4},{"v":1406.4190476190477,"c":4},{"v":1443.3062499999999,"c":[2,8]},{"v":1444.3172619047618,"c":[2,4,8]},{"v":1441.3663690476192,"c":4},{"v":1485.6839285714286,"c":4},{"v":1512.927976190476,"c":[0,6]},{"v":1518.466369047619,"c":[0,6]},{"v":1860.4401785714285,"c":[0,2,6,8]},{"v":1832.5413690476191,"c":[0,2,6,8]},{"v":1834.179761904762,"c":[0,2,6,8]},{"v":1171.9669642857143,"c":[0,2,6,8]},{"v":1176.2047619047619,"c":[0,2,6,8]},{"v":1234.6142857142856,"c":[0,2,6,8]},{"v":1427.3583333333333,"c":[0,2,6,8]},{"v":1544.7607142857144,"c":[0,2,6,8]},{"v":1509.197619047619,"c":[0,2,6,8]},{"v":1411.3541666666665,"c":4},{"v":1414.9401785714288,"c":4},{"v":1406.4190476190477,"c":4},{"v":1443.3062499999999,"c":[0,6]},{"v":1444.3172619047618,"c":[0,4,6]},{"v":1441.3663690476192,"c":4},{"v":1485.6839285714286,"c":4},{"v":1512.927976190476,"c":[2,8]},{"v":1518.466369047619,"c":[2,8]},{"v":1677.7854166666664,"c":[0,8]},{"v":1665.8127976190476,"c":[0,8]},{"v":1662.504761904762,"c":[0,8]},{"v":1365.0047619047618,"c":4},{"v":1359.5589285714286,"c":4},{"v":1364.3044642857142,"c":4},{"v":1454.5455357142855,"c":4},{"v":1527.0875,"c":[0,4,8]},{"v":1517.7214285714285,"c":[0,4,8]},{"v":1411.3541666666665,"c":4},{"v":1414.9401785714288,"c":4},{"v":1406.4190476190477,"c":4},{"v":1443.3062499999999,"c":[0,2]},{"v":1444.3172619047618,"c":[0,2,4]},{"v":1441.3663690476192,"c":4},{"v":1485.6839285714286,"c":4},{"v":1512.927976190476,"c":[6,8]},{"v":1518.466369047619,"c":[6,8]},{"v":1677.7854166666664,"c":[2,6]},{"v":1665.8127976190476,"c":[2,6]},{"v":1662.504761904762,"c":[2,6]},{"v":1365.0047619047618,"c":4},{"v":1359.5589285714286,"c":4},{"v":1364.3044642857142,"c":4},{"v":1454.5455357142855,"c":4},{"v":1527.0875,"c":[2,4,6]},{"v":1517.7214285714285,"c":[2,4,6]}]');
;// CONCATENATED MODULE: ./src/mini-cactpot/calculate-mini-cactpot.ts

// const CACHE = []
const PAYOUTS = {
    6: 10000,
    7: 36,
    8: 720,
    9: 360,
    10: 80,
    11: 252,
    12: 108,
    13: 72,
    14: 54,
    15: 180,
    16: 72,
    17: 180,
    18: 119,
    19: 36,
    20: 306,
    21: 1080,
    22: 144,
    23: 1800,
    24: 3600
};
const LINES = [
    [
        6,
        7,
        8
    ],
    [
        3,
        4,
        5
    ],
    [
        0,
        1,
        2
    ],
    [
        0,
        4,
        8
    ],
    [
        0,
        3,
        6
    ],
    [
        1,
        4,
        7
    ],
    [
        2,
        5,
        8
    ],
    [
        2,
        4,
        6
    ]
];
function memoize(func, createKey) {
    const cache = {};
    return function(...args) {
        const key = createKey.apply(null, args);
        if (cache[key] !== undefined) {
            return cache[key];
        } else {
            return cache[key] = func.apply(null, args);
        }
    };
}
const calcHiddenSums = memoize((hidden, count)=>{
    if (count === 0) {
        return [
            0
        ];
    } else if (count === 1) {
        return [
            ...hidden
        ];
    } else if (count === hidden.length) {
        let sum = 0;
        for (const digit of hidden){
            sum += digit;
        }
        return [
            sum
        ];
    } else {
        const lastIndex = hidden.length - 1;
        const lastDigit = hidden[lastIndex];
        return [
            ...calcHiddenSums(hidden.slice(0, lastIndex), count - 1).map((sum)=>sum + lastDigit
            ),
            ...calcHiddenSums(hidden.slice(0, lastIndex), count)
        ];
    }
}, (hidden, count)=>`${hidden.join(",")}|${count}`
);
const calcLineEV = memoize((grid, lineIndex, hidden)=>{
    let revealed = 0;
    let revealedSum = 0;
    for (const i of LINES[lineIndex]){
        if (grid[i] !== null) {
            ++revealed;
            revealedSum += grid[i];
        }
    }
    const hiddenSums = calcHiddenSums(hidden, 3 - revealed);
    return hiddenSums.reduce((ev, hiddenSum)=>ev + PAYOUTS[revealedSum + hiddenSum]
    , 0) / hiddenSums.length;
}, (grid, lineIndex, hidden)=>`${grid.join(",")}|${lineIndex}|${hidden.join(",")}`
);
const calcCellEV = memoize((grid, cell, hidden)=>{
    let ev = 0;
    for(let i = 0; i < hidden.length; ++i){
        const digit = hidden[i];
        const copyGrid = grid.slice();
        const copyHidden = hidden.slice();
        copyGrid[cell] = digit;
        copyHidden.splice(i, 1);
        ev += calcGridEV(copyGrid, copyHidden);
    }
    return ev / hidden.length;
}, (grid, cell, hidden)=>`${grid.join(",")}|${cell}|${hidden.join(",")}`
);
const calcGridEV = memoize((grid, hidden)=>{
    let revealed = 0;
    for (const cell of grid){
        if (cell !== null) {
            ++revealed;
        }
    }
    if (revealed < 4) {
        let maxCellEV = -Infinity;
        for(let i = 0; i < 9; ++i){
            if (grid[i] === null) {
                maxCellEV = Math.max(maxCellEV, calcCellEV(grid, i, hidden));
            }
        }
        return maxCellEV;
    } else {
        let maxLineEV = -Infinity;
        for(let i = 0; i < LINES.length; ++i){
            maxLineEV = Math.max(maxLineEV, calcLineEV(grid, i, hidden));
        }
        return maxLineEV;
    }
}, (grid, hidden)=>`${grid.join(",")}|${hidden.join(",")}`
);
function validateGrid(grid) {
    let enteredCount = 0;
    const seenValues = {};
    const duplicateCells = [];
    for(let i = 0; i < 9; ++i){
        const value = grid[i];
        if (value !== null) {
            ++enteredCount;
            const seenAt = seenValues[value];
            if (seenAt != null) {
                duplicateCells.push(seenAt);
                duplicateCells.push(i);
                seenValues[value] = true;
            } else if (seenAt !== undefined) {
                duplicateCells.push(i);
            } else {
                seenValues[value] = i;
            }
        }
    }
    if (enteredCount === 0) {
        return {
            type: "EMPTY"
        };
    }
    if (enteredCount > 4) {
        const enteredCells = [];
        grid.forEach((_, cellIndex)=>{
            if (grid[cellIndex] !== null) {
                enteredCells.push(cellIndex);
            }
        });
        return {
            type: "TOO MANY",
            cells: enteredCells
        };
    }
    if (duplicateCells.length > 0) {
        return {
            type: "DUPLICATES",
            cells: duplicateCells
        };
    }
    return null;
}
function getSuggestion(grid) {
    const hidden = [];
    for(let i = 1; i <= 9; ++i){
        if (!grid.includes(i)) {
            hidden.push(i);
        }
    }
    const revealed = 9 - hidden.length;
    if (revealed === 1) {
        const index = grid.findIndex((digit)=>digit !== null
        );
        const cached = cache_namespaceObject[index * 9 + grid[index] - 1];
        return {
            type: "CELL",
            maxCellEV: cached.v,
            maxCellLocations: Array.isArray(cached.c) ? cached.c : [
                cached.c
            ]
        };
    }
    if (revealed < 4) {
        let maxCellEV = -Infinity;
        let maxCellLocations = [];
        for(let i = 0; i < 9; ++i){
            if (grid[i] === null) {
                const cellEV = calcCellEV(grid, i, hidden);
                if (cellEV > maxCellEV) {
                    maxCellEV = cellEV;
                    maxCellLocations = [
                        i
                    ];
                } else if (cellEV === maxCellEV) {
                    maxCellLocations.push(i);
                }
            }
        }
        return {
            type: "CELL",
            maxCellEV,
            maxCellLocations
        };
    } else {
        let maxLineEV = -Infinity;
        let maxLineIds = [];
        for(let i = 0; i < LINES.length; ++i){
            const lineEV = calcLineEV(grid, i, hidden);
            if (lineEV > maxLineEV) {
                maxLineEV = lineEV;
                maxLineIds = [
                    i
                ];
            } else if (lineEV === maxLineEV) {
                maxLineIds.push(i);
            }
        }
        return {
            type: "LINE",
            maxLineEV,
            maxLineIds
        };
    }
}

// EXTERNAL MODULE: ./src/Section.tsx
var Section = __webpack_require__(8884);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(8098);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
;// CONCATENATED MODULE: ./src/mini-cactpot/CalculatorCell.tsx





const CalculatorCell = ({ value , suggested =false , error =false , onInputDigit  })=>{
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
    return /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
        component: (TextField_default()),
        type: "tel",
        variant: "outlined",
        error: error,
        InputProps: {
            sx: {
                width: {
                    xs: "5em",
                    md: "7.5em"
                },
                height: {
                    xs: "5em",
                    md: "7.5em"
                },
                borderRadius: 0,
                backgroundColor: suggested ? (theme)=>(0,system_.alpha)(theme.palette.primary.main, 0.2)
                 : error ? (theme)=>(0,system_.alpha)(theme.palette.error.main, 0.2)
                 : "none"
            }
        },
        inputProps: {
            sx: {
                textAlign: "center",
                fontSize: {
                    xs: "2em",
                    md: "4em"
                }
            }
        },
        onKeyDown: handleInputDigit,
        value: value !== null ? value : ""
    });
};
/* harmony default export */ const mini_cactpot_CalculatorCell = (CalculatorCell);

// EXTERNAL MODULE: external "@mui/icons-material/ArrowForward"
var ArrowForward_ = __webpack_require__(1883);
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_);
;// CONCATENATED MODULE: ./src/mini-cactpot/CalculatorLineIndicator.tsx



const CalculatorLineIndicator = ({ rotate , suggested =false  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((ArrowForward_default()), {
        color: suggested ? "primary" : "disabled",
        sx: {
            m: 1,
            fontSize: "2em",
            transform: `rotate(${rotate}deg)`
        }
    });
};
/* harmony default export */ const mini_cactpot_CalculatorLineIndicator = (CalculatorLineIndicator);

;// CONCATENATED MODULE: ./src/mini-cactpot/Calculator.tsx












const Calculator = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("mini-cactpot");
    const { 0: grid , 1: setGrid  } = (0,external_react_.useState)(Array(9).fill(null));
    const locale = i18n.language;
    const handleInputDigit = (cellIndex, digit)=>{
        const newGrid = grid.slice();
        newGrid[cellIndex] = digit;
        setGrid(newGrid);
    };
    const handleClickReset = ()=>{
        setGrid(Array(9).fill(null));
    };
    const errorCells = {};
    const suggestedCells = {};
    const error = validateGrid(grid);
    let suggestion;
    if (error !== null) {
        switch(error.type){
            case "TOO MANY":
            case "DUPLICATES":
                if (error.cells !== undefined) {
                    for (const cellIndex of error.cells){
                        errorCells[cellIndex] = true;
                    }
                }
                break;
        }
    } else {
        suggestion = getSuggestion(grid);
        switch(suggestion.type){
            case "CELL":
                for (const cellIndex of suggestion.maxCellLocations){
                    suggestedCells[cellIndex] = true;
                }
                break;
            case "LINE":
                for (const lineId of suggestion.maxLineIds){
                    for (const cellIndex of LINES[lineId]){
                        suggestedCells[cellIndex] = true;
                    }
                }
        }
    }
    function isLineSuggested(lineId) {
        return suggestion !== undefined && suggestion.type === "LINE" && suggestion.maxLineIds.includes(lineId);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 4,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    lg: "auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            component: "table",
                            sx: {
                                textAlign: "center",
                                whiteSpace: "nowrap"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorLineIndicator, {
                                                    rotate: 45,
                                                    suggested: isLineSuggested(3)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorLineIndicator, {
                                                    rotate: 90,
                                                    suggested: isLineSuggested(4)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorLineIndicator, {
                                                    rotate: 90,
                                                    suggested: isLineSuggested(5)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorLineIndicator, {
                                                    rotate: 90,
                                                    suggested: isLineSuggested(6)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorLineIndicator, {
                                                    rotate: 135,
                                                    suggested: isLineSuggested(7)
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorLineIndicator, {
                                                    rotate: 0,
                                                    suggested: isLineSuggested(2)
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                rowSpan: 3,
                                                colSpan: 3,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorCell, {
                                                        value: grid[0],
                                                        suggested: suggestedCells[0],
                                                        error: errorCells[0],
                                                        onInputDigit: handleInputDigit.bind(null, 0)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorCell, {
                                                        value: grid[1],
                                                        suggested: suggestedCells[1],
                                                        error: errorCells[1],
                                                        onInputDigit: handleInputDigit.bind(null, 1)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorCell, {
                                                        value: grid[2],
                                                        suggested: suggestedCells[2],
                                                        error: errorCells[2],
                                                        onInputDigit: handleInputDigit.bind(null, 2)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorCell, {
                                                        value: grid[3],
                                                        suggested: suggestedCells[3],
                                                        error: errorCells[3],
                                                        onInputDigit: handleInputDigit.bind(null, 3)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorCell, {
                                                        value: grid[4],
                                                        suggested: suggestedCells[4],
                                                        error: errorCells[4],
                                                        onInputDigit: handleInputDigit.bind(null, 4)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorCell, {
                                                        value: grid[5],
                                                        suggested: suggestedCells[5],
                                                        error: errorCells[5],
                                                        onInputDigit: handleInputDigit.bind(null, 5)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorCell, {
                                                        value: grid[6],
                                                        suggested: suggestedCells[6],
                                                        error: errorCells[6],
                                                        onInputDigit: handleInputDigit.bind(null, 6)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorCell, {
                                                        value: grid[7],
                                                        suggested: suggestedCells[7],
                                                        error: errorCells[7],
                                                        onInputDigit: handleInputDigit.bind(null, 7)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorCell, {
                                                        value: grid[8],
                                                        suggested: suggestedCells[8],
                                                        error: errorCells[8],
                                                        onInputDigit: handleInputDigit.bind(null, 8)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorLineIndicator, {
                                                rotate: 0,
                                                suggested: isLineSuggested(1)
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_CalculatorLineIndicator, {
                                                rotate: 0,
                                                suggested: isLineSuggested(0)
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    lg: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            (()=>{
                                if (error !== null) {
                                    switch(error.type){
                                        case "EMPTY":
                                            return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                paragraph: true,
                                                children: t("state.selectFirstCell")
                                            });
                                        case "TOO MANY":
                                            return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                paragraph: true,
                                                children: t("state.tooManyDigits")
                                            });
                                        case "DUPLICATES":
                                            return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                paragraph: true,
                                                children: t("state.repeatedDigits")
                                            });
                                    }
                                } else {
                                    switch(suggestion.type){
                                        case "CELL":
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                        children: [
                                                            t("expectedValue"),
                                                            ": ",
                                                            Math.floor(suggestion.maxCellEV).toLocaleString(locale)
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        paragraph: true,
                                                        children: t("state.selectHighlightedCell")
                                                    })
                                                ]
                                            });
                                        case "LINE":
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                        children: [
                                                            t("expectedValue"),
                                                            ": ",
                                                            Math.floor(suggestion.maxLineEV).toLocaleString(locale)
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        paragraph: true,
                                                        children: t("state.selectHighlightedLine")
                                                    })
                                                ]
                                            });
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
                })
            ]
        })
    });
};
/* harmony default export */ const mini_cactpot_Calculator = (Calculator);

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
// EXTERNAL MODULE: ./src/Link.tsx
var Link = __webpack_require__(7255);
// EXTERNAL MODULE: ./src/MathJax.tsx
var MathJax = __webpack_require__(2994);
;// CONCATENATED MODULE: ./src/mini-cactpot/MiniGrid.tsx





const SELECTED_COLOR = (theme)=>(0,system_.alpha)(theme.palette.primary.main, 0.5)
;
const MiniGrid = ({ state  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
        component: "table",
        square: true,
        sx: {
            display: "inline-block",
            borderCollapse: "collapse",
            m: 2,
            "& td": {
                width: "2.5em",
                height: "2.5em",
                border: "1px solid black"
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            component: "td",
                            sx: {
                                backgroundColor: state.charAt(0) === "X" ? SELECTED_COLOR : "none"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            component: "td",
                            sx: {
                                backgroundColor: state.charAt(1) === "X" ? SELECTED_COLOR : "none"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            component: "td",
                            sx: {
                                backgroundColor: state.charAt(2) === "X" ? SELECTED_COLOR : "none"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            component: "td",
                            sx: {
                                backgroundColor: state.charAt(3) === "X" ? SELECTED_COLOR : "none"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            component: "td",
                            sx: {
                                backgroundColor: state.charAt(4) === "X" ? SELECTED_COLOR : "none"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            component: "td",
                            sx: {
                                backgroundColor: state.charAt(5) === "X" ? SELECTED_COLOR : "none"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            component: "td",
                            sx: {
                                backgroundColor: state.charAt(6) === "X" ? SELECTED_COLOR : "none"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            component: "td",
                            sx: {
                                backgroundColor: state.charAt(7) === "X" ? SELECTED_COLOR : "none"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            component: "td",
                            sx: {
                                backgroundColor: state.charAt(8) === "X" ? SELECTED_COLOR : "none"
                            }
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const mini_cactpot_MiniGrid = (/*#__PURE__*/external_react_default().memo(MiniGrid));

;// CONCATENATED MODULE: ./src/mini-cactpot/About.tsx

















const About = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("mini-cactpot");
    const locale = i18n.language;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        title: t("about"),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                paragraph: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                        href: "https://na.finalfantasyxiv.com/lodestone/playguide/contentsguide/goldsaucer/cactpot/",
                        children: "Mini Cactpot"
                    }),
                    " is a scratchcard lottery where each of the numbers ",
                    (0,MathJax.$)("1"),
                    " through ",
                    (0,MathJax.$)("9"),
                    " are hidden in a ",
                    (0,MathJax.$)("3 \\times 3"),
                    " grid. One cell is initially revealed, and after selecting 3 more to uncover one at a time, you may select any row, column, or diagonal. The sum of your selected line determines how much MGP you win."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                sx: {
                    mb: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                    component: (Table_default()),
                    sx: {
                        width: "auto",
                        m: "auto"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        children: "Sum"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        children: "MGP"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        children: "Sum"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        children: "MGP"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                            children: [
                                [
                                    6,
                                    16
                                ],
                                [
                                    7,
                                    17
                                ],
                                [
                                    8,
                                    18
                                ],
                                [
                                    9,
                                    19
                                ],
                                [
                                    10,
                                    20
                                ],
                                [
                                    11,
                                    21
                                ],
                                [
                                    12,
                                    22
                                ],
                                [
                                    13,
                                    23
                                ],
                                [
                                    14,
                                    24
                                ],
                                [
                                    15,
                                    undefined
                                ]
                            ].map((row, index1)=>{
                                /*#__PURE__*/ return jsx_runtime_.jsx((TableRow_default()), {
                                    children: row.map((col, index)=>{
                                        /*#__PURE__*/ return (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    align: "center",
                                                    children: col === null || col === void 0 ? void 0 : col.toLocaleString(locale)
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    align: "right",
                                                    children: col !== undefined && PAYOUTS[col].toLocaleString(locale)
                                                })
                                            ]
                                        }, index);
                                    })
                                }, index1);
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                paragraph: true,
                children: "This calculator works by computing the expected value of selecting any line or cell. A strategy that doesn\u2019t involve heavy computation is to first reveal a \u201CY\u201D shape on the board."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                component: "figure",
                textAlign: "center",
                mb: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_MiniGrid, {
                        state: "X-X-X--X-"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_MiniGrid, {
                        state: "X---XXX--"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_MiniGrid, {
                        state: "-X--X-X-X"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_MiniGrid, {
                        state: "--XXX---X"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "caption",
                            children: "Create any of these shapes. At least one of these is always possible."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                paragraph: true,
                children: "Next, select a line as follows:"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        component: "li",
                        children: [
                            "If a line can be the ",
                            (0,MathJax.$)("\\operatorname{1-2-3}"),
                            " line, select it."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        component: "li",
                        children: [
                            "If a line can be the ",
                            (0,MathJax.$)("\\operatorname{7-8-9}"),
                            " line, select it."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        component: "li",
                        children: "Select whatever line can have the biggest sum (not payout)."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                paragraph: true,
                children: [
                    "This strategy gives an expected value of ",
                    1259..toLocaleString(locale),
                    ", whereas perfect play gives ",
                    1484..toLocaleString(locale),
                    ". Note that in steps 1 and 2, if a ",
                    (0,MathJax.$)("\\operatorname{1-2-3}"),
                    " or ",
                    (0,MathJax.$)("\\operatorname{7-8-9}"),
                    " line exists, you will always select it without ambiguity. In step 3, you may have to guess which lines may have a large sum."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                paragraph: true,
                children: "A very similar strategy is to make a Tetris \u201CT\u201D shape, but this performs slightly worse on average."
            })
        ]
    });
};
/* harmony default export */ const mini_cactpot_About = (About);

;// CONCATENATED MODULE: ./pages/mini-cactpot.tsx







const MiniCactpot = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("mini-cactpot");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Page/* default */.Z, {
        title: t("_title"),
        description: t("_description"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_Calculator, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(mini_cactpot_About, {})
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale ?? "en", [
                "common",
                "mini-cactpot"
            ])
        }
    };
};
/* harmony default export */ const mini_cactpot = (MiniCactpot);


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

/***/ 1883:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForward");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

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

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,906,255,954], () => (__webpack_exec__(5898)));
module.exports = __webpack_exports__;

})();