"use strict";
(() => {
var exports = {};
exports.id = 428;
exports.ids = [428];
exports.modules = {

/***/ 3250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ chocobo_color),
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
// EXTERNAL MODULE: ./src/Page.tsx
var Page = __webpack_require__(6906);
// EXTERNAL MODULE: ./src/Section.tsx
var Section = __webpack_require__(8884);
// EXTERNAL MODULE: ./src/Link.tsx
var Link = __webpack_require__(7255);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(8098);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Autocomplete"
var Autocomplete_ = __webpack_require__(2311);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowDownward"
var ArrowDownward_ = __webpack_require__(2569);
var ArrowDownward_default = /*#__PURE__*/__webpack_require__.n(ArrowDownward_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: ./src/chocobo-color/ffxiv-chocobo-color/index.ts + 6 modules
var ffxiv_chocobo_color = __webpack_require__(1921);
;// CONCATENATED MODULE: ./src/chocobo-color/ShadeButton.tsx






const ShadeButton = ({ shade , color , selected =false , onClick  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)();
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
        title: (0,ffxiv_chocobo_color/* translate */.Iu)("shade", shade, locale),
        children: /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
            component: "span",
            onClick: onClick,
            sx: {
                display: "inline-block",
                width: "2.5em",
                height: "2.5em",
                backgroundColor: `rgb(${color.R},${color.G},${color.B})`,
                borderStyle: "solid",
                borderWidth: selected ? 3 : 1,
                borderColor: selected ? "primary.light" : "#00000055",
                borderRadius: "50%",
                m: 0.75,
                cursor: "pointer"
            }
        })
    });
};
/* harmony default export */ const chocobo_color_ShadeButton = (ShadeButton);

// EXTERNAL MODULE: ./src/chocobo-color/StainButton.tsx
var StainButton = __webpack_require__(9371);
// EXTERNAL MODULE: external "@mui/material/Alert"
var Alert_ = __webpack_require__(3765);
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowForward"
var ArrowForward_ = __webpack_require__(1883);
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_);
// EXTERNAL MODULE: ./src/chocobo-color/FruitIcon.tsx + 1 modules
var FruitIcon = __webpack_require__(5648);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
;// CONCATENATED MODULE: external "@mui/material/List"
const List_namespaceObject = require("@mui/material/List");
var List_default = /*#__PURE__*/__webpack_require__.n(List_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItem"
const ListItem_namespaceObject = require("@mui/material/ListItem");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemSecondaryAction"
const ListItemSecondaryAction_namespaceObject = require("@mui/material/ListItemSecondaryAction");
var ListItemSecondaryAction_default = /*#__PURE__*/__webpack_require__.n(ListItemSecondaryAction_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/Check"
var Check_ = __webpack_require__(6959);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);
// EXTERNAL MODULE: ./src/chocobo-color/ffxiv-chocobo-color/data/index.ts + 2 modules
var data = __webpack_require__(3905);
// EXTERNAL MODULE: ./src/translate.ts
var translate = __webpack_require__(9465);
;// CONCATENATED MODULE: ./src/chocobo-color/FruitsList.tsx













const FruitsList = ({ fruits: fruitIds  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)("chocobo-color");
    const { 0: checklist , 1: setChecklist  } = (0,external_react_.useState)({});
    const locale = i18n.language;
    (0,external_react_.useEffect)(()=>{
        setChecklist({});
    }, [
        fruitIds
    ]);
    const handleClickItem = (index)=>{
        setChecklist({
            ...checklist,
            [index]: !checklist[index]
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
            component: "ol",
            sx: {
                p: 0
            },
            children: fruitIds.map((fruit, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                    divider: true,
                    onClick: handleClickItem.bind(null, index),
                    sx: {
                        cursor: "pointer",
                        backgroundColor: checklist[index] ? (theme)=>(0,system_.alpha)(theme.palette.secondary.light, 0.5)
                         : "none"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                width: "2em",
                                textAlign: "center"
                            },
                            children: index + 1
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FruitIcon/* default */.Z, {
                            fruit: fruit,
                            size: 0.9,
                            sx: {
                                verticalAlign: "middle",
                                mr: 1
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            children: (0,translate/* default */.Z)(locale, data/* fruits */.DN[fruit], "name")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemSecondaryAction_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                sx: {
                                    color: checklist[index] ? "success.main" : "lightgray"
                                }
                            })
                        })
                    ]
                }, index)
            )
        })
    });
};
/* harmony default export */ const chocobo_color_FruitsList = (FruitsList);

;// CONCATENATED MODULE: ./src/chocobo-color/Solution.tsx













const Solution = ({ solution  })=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("chocobo-color");
    const locale = i18n.language;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 10,
                lg: 8,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    alignItems: "center",
                    justifyContent: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(StainButton/* default */.Z, {
                            inline: true,
                            stain: solution.fromStain
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            children: [
                                "\xa0",
                                (0,translate/* default */.Z)(locale, solution.fromStain, "name")
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((ArrowForward_default()), {
                            sx: {
                                mx: 1
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(StainButton/* default */.Z, {
                            inline: true,
                            stain: solution.toStain
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            children: [
                                "\xa0",
                                (0,translate/* default */.Z)(locale, solution.toStain, "name")
                            ]
                        })
                    ]
                })
            }),
            solution.fruits.length > (0,ffxiv_chocobo_color/* calculateFruits */.uX)(data/* stains.36 */.DX[36], solution.toStain).fruits.length && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 10,
                lg: 8,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Alert_default()), {
                    severity: "info",
                    children: "You might save fruits by resetting to Desert Yellow with a Han Lemon first."
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                item: true,
                xs: 12,
                md: 10,
                lg: 8,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        gutterBottom: true,
                        children: t("fruitsNeeded")
                    }),
                    solution.fruits.length > 0 ? [
                        ffxiv_chocobo_color/* Fruit.XelphatolApple */.PO.XelphatolApple,
                        ffxiv_chocobo_color/* Fruit.MamookPear */.PO.MamookPear,
                        ffxiv_chocobo_color/* Fruit.OGhomoroBerries */.PO.OGhomoroBerries,
                        ffxiv_chocobo_color/* Fruit.DomanPlum */.PO.DomanPlum,
                        ffxiv_chocobo_color/* Fruit.Valfruit */.PO.Valfruit,
                        ffxiv_chocobo_color/* Fruit.CieldalaesPineapple */.PO.CieldalaesPineapple
                    ].map((fruit)=>({
                            fruit,
                            count: solution.fruits.filter((solutionFruit)=>solutionFruit === fruit
                            ).length
                        })
                    ).filter(({ count  })=>count > 0
                    ).map(({ fruit , count  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "span",
                                    sx: {
                                        display: "inline-block",
                                        width: "2.5em",
                                        fontSize: "1.25em",
                                        textAlign: "right",
                                        verticalAlign: "middle"
                                    },
                                    children: [
                                        count,
                                        "\xd7"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(FruitIcon/* default */.Z, {
                                    fruit: fruit,
                                    sx: {
                                        verticalAlign: "middle",
                                        mx: 1
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "span",
                                    children: (0,translate/* default */.Z)(locale, data/* fruits */.DN[fruit], "name")
                                })
                            ]
                        }, fruit)
                    ) : /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                            children: t("noFruits")
                        })
                    })
                ]
            }),
            solution.fruits.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                item: true,
                xs: 12,
                md: 10,
                lg: 8,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        gutterBottom: true,
                        children: t("fruitsOrder")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(chocobo_color_FruitsList, {
                        fruits: solution.fruits
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const chocobo_color_Solution = (Solution);

;// CONCATENATED MODULE: ./src/chocobo-color/ChocoboCompanionPreview.tsx


const CHOCOBO_BOUNDS = {
    x: 11,
    y: 3,
    width: 135,
    height: 173
};
const SADDLE_BOUNDS = {
    x: 148,
    y: 0,
    width: 88,
    height: 121
};
const FEET_BOUNDS = {
    x: 151,
    y: 128,
    width: 81,
    height: 74
};
function addImageData(source, imageData, x, y) {
    for(let i = 0; i < imageData.width; ++i){
        for(let j = 0; j < imageData.height; ++j){
            const u = x + i;
            const v = y + j;
            const sD = source.data;
            const nD = imageData.data;
            const sI = (v * source.width + u) * 4;
            const nI = (j * imageData.width + i) * 4;
            const [sR, sG, sB, sA] = [
                sD[sI + 0] / 255,
                sD[sI + 1] / 255,
                sD[sI + 2] / 255,
                sD[sI + 3] / 255
            ];
            const [nR, nG, nB, nA] = [
                nD[nI + 0] / 255,
                nD[nI + 1] / 255,
                nD[nI + 2] / 255,
                nD[nI + 3] / 255
            ];
            const a = 1 - (1 - nA) * (1 - sA);
            sD[sI + 0] = (nR * nA / a + sR * sA * (1 - nA) / a) * 255;
            sD[sI + 1] = (nG * nA / a + sG * sA * (1 - nA) / a) * 255;
            sD[sI + 2] = (nB * nA / a + sB * sA * (1 - nA) / a) * 255;
            sD[sI + 3] = a * 255;
        }
    }
}
function drawChocobo(ctx, imageData, color) {
    const chocoboImageData = ctx.createImageData(136, 219);
    const stainedChocoboImageData = ctx.createImageData(imageData.chocobo);
    for(let i = 0; i < stainedChocoboImageData.data.length; i += 4){
        stainedChocoboImageData.data[i + 0] = imageData.chocobo.data[i + 0] / 255 * color.R;
        stainedChocoboImageData.data[i + 1] = imageData.chocobo.data[i + 1] / 255 * color.G;
        stainedChocoboImageData.data[i + 2] = imageData.chocobo.data[i + 2] / 255 * color.B;
        stainedChocoboImageData.data[i + 3] = imageData.chocobo.data[i + 3];
    }
    addImageData(chocoboImageData, stainedChocoboImageData, 1, 0);
    addImageData(chocoboImageData, imageData.saddle, 0, 3);
    addImageData(chocoboImageData, imageData.feet, 17, 145);
    return chocoboImageData;
}
const ChocoboCompanionPreview = ({ color  })=>{
    const canvasRef = (0,external_react_.useRef)(null);
    const { 0: imageData , 1: setImageData  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx !== null) {
            const image = new Image();
            image.addEventListener("load", ()=>{
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0, image.width, image.height);
                setImageData({
                    chocobo: ctx.getImageData(CHOCOBO_BOUNDS.x, CHOCOBO_BOUNDS.y, CHOCOBO_BOUNDS.width, CHOCOBO_BOUNDS.height),
                    saddle: ctx.getImageData(SADDLE_BOUNDS.x, SADDLE_BOUNDS.y, SADDLE_BOUNDS.width, SADDLE_BOUNDS.height),
                    feet: ctx.getImageData(FEET_BOUNDS.x, FEET_BOUNDS.y, FEET_BOUNDS.width, FEET_BOUNDS.height)
                });
            }, false);
            image.src = "/images/chocobo-color/chocobo-companion.png";
        } else {
            console.error("Something is very wrong!");
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (imageData !== null) {
            var ref;
            const ctx = canvasRef === null || canvasRef === void 0 ? void 0 : (ref = canvasRef.current) === null || ref === void 0 ? void 0 : ref.getContext("2d");
            if (ctx != null) {
                ctx.putImageData(drawChocobo(ctx, imageData, color), 0, 0);
            } else {
                console.error("Something is very wrong!");
            }
        }
    }, [
        imageData,
        color
    ]);
    if (imageData !== null) {
        return /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
            ref: canvasRef,
            width: 136,
            height: 219
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Loading..."
        });
    }
};
/* harmony default export */ const chocobo_color_ChocoboCompanionPreview = (ChocoboCompanionPreview);

;// CONCATENATED MODULE: ./src/chocobo-color/Calculator.tsx

















const SHADES_MAP = {
    2: {
        shade: ffxiv_chocobo_color/* Shade.White */.j0.White,
        color: new ffxiv_chocobo_color/* Color */.Il(255, 255, 255)
    },
    4: {
        shade: ffxiv_chocobo_color/* Shade.Red */.j0.Red,
        color: new ffxiv_chocobo_color/* Color */.Il(210, 28, 28)
    },
    5: {
        shade: ffxiv_chocobo_color/* Shade.Brown */.j0.Brown,
        color: new ffxiv_chocobo_color/* Color */.Il(170, 114, 54)
    },
    6: {
        shade: ffxiv_chocobo_color/* Shade.Yellow */.j0.Yellow,
        color: new ffxiv_chocobo_color/* Color */.Il(240, 220, 44)
    },
    7: {
        shade: ffxiv_chocobo_color/* Shade.Green */.j0.Green,
        color: new ffxiv_chocobo_color/* Color */.Il(150, 204, 60)
    },
    8: {
        shade: ffxiv_chocobo_color/* Shade.Blue */.j0.Blue,
        color: new ffxiv_chocobo_color/* Color */.Il(74, 130, 243)
    },
    9: {
        shade: ffxiv_chocobo_color/* Shade.Purple */.j0.Purple,
        color: new ffxiv_chocobo_color/* Color */.Il(166, 98, 228)
    }
};
const VALID_STAINS = Object.values(data/* stains */.DX).filter(ffxiv_chocobo_color/* isValidStain */.cl).sort((a, b)=>a.shade !== b.shade ? a.shade - b.shade : a.shadeIndex - b.shadeIndex
);
const Calculator = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("chocobo-color");
    const { 0: currentStain , 1: setCurrentStain  } = (0,external_react_.useState)(data/* stains.36 */.DX[36]) // Desert Yellow
    ;
    const { 0: targetStain , 1: setTargetStain  } = (0,external_react_.useState)(VALID_STAINS[0]);
    const { 0: solution1 , 1: setSolution  } = (0,external_react_.useState)(null);
    const locale = i18n.language;
    const handleInputCurrentStain = (_, stain)=>{
        if (stain !== null) {
            setCurrentStain(stain);
        }
    };
    const handleInputTargetStain = (_, stain)=>{
        if (stain !== null) {
            setTargetStain(stain);
        }
    };
    const handleSelectShade = (shadeId)=>{
        const stain1 = VALID_STAINS.find((stain)=>stain.shade === shadeId
        );
        if (stain1 !== undefined) {
            setTargetStain(stain1);
        }
    };
    const handleSelectStain = (stain)=>{
        setTargetStain(stain);
    };
    const handleClickCalculate = ()=>{
        const solution = (0,ffxiv_chocobo_color/* calculateFruits */.uX)(currentStain, targetStain);
        setSolution({
            fromStain: currentStain,
            toStain: targetStain,
            fruits: solution.fruits,
            resultantColor: solution.color
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: t("calculator"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            justifyContent: "center",
            spacing: 4,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 10,
                    lg: 8,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
                            options: VALID_STAINS,
                            groupBy: (option)=>(0,ffxiv_chocobo_color/* translate */.Iu)("shade", SHADES_MAP[option.shade].shade, locale)
                            ,
                            getOptionLabel: (option)=>(0,translate/* default */.Z)(locale, option, "name")
                            ,
                            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    ...params,
                                    variant: "filled",
                                    label: t("currentStain")
                                })
                            ,
                            value: currentStain,
                            onChange: handleInputCurrentStain
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            textAlign: "center",
                            m: 1,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowDownward_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
                            options: VALID_STAINS,
                            groupBy: (option)=>(0,ffxiv_chocobo_color/* translate */.Iu)("shade", SHADES_MAP[option.shade].shade, locale)
                            ,
                            getOptionLabel: (option)=>(0,translate/* default */.Z)(locale, option, "name")
                            ,
                            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    ...params,
                                    variant: "filled",
                                    label: t("targetStain")
                                })
                            ,
                            value: targetStain,
                            onChange: handleInputTargetStain
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            my: 2,
                            children: [
                                Object.entries(SHADES_MAP).sort((a, b)=>Number(a[0]) - Number(b[0])
                                ).map(([shadeId, val])=>/*#__PURE__*/ jsx_runtime_.jsx(chocobo_color_ShadeButton, {
                                        shade: val.shade,
                                        color: val.color,
                                        selected: targetStain.shade === Number(shadeId),
                                        onClick: handleSelectShade.bind(null, Number(shadeId))
                                    }, shadeId)
                                ),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                VALID_STAINS.filter((stain)=>stain.shade === targetStain.shade
                                ).map((stain)=>/*#__PURE__*/ jsx_runtime_.jsx(StainButton/* default */.Z, {
                                        stain: stain,
                                        selected: targetStain.id === stain.id,
                                        onClick: handleSelectStain.bind(null, stain)
                                    }, stain.id)
                                )
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            my: 4,
                            textAlign: "center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(chocobo_color_ChocoboCompanionPreview, {
                                color: targetStain.color
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "contained",
                            color: "primary",
                            fullWidth: true,
                            onClick: handleClickCalculate,
                            children: t("calculate")
                        })
                    ]
                }),
                solution1 !== null && /*#__PURE__*/ jsx_runtime_.jsx(chocobo_color_Solution, {
                    solution: solution1
                })
            ]
        })
    });
};
/* harmony default export */ const chocobo_color_Calculator = (Calculator);

;// CONCATENATED MODULE: ./pages/chocobo-color/index.tsx









const ChocoboColor = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("chocobo-color");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Page/* default */.Z, {
        title: t("_title"),
        description: t("_description"),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "This calculator works by getting your chocobo\u2019s color as close to the desired color as possible. In rare cases, this may still result in a different, nearby color to be chosen. Your chocobo\u2019s true color values may also slightly differ from the possible colors, leading to inaccuracies. Feeding fruits in an order other than what is recommended may also cause color values to cap out, resulting in a different color."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        paragraph: true,
                        children: [
                            "Sometimes things go wrong, and you should use a Han Lemon to reset and start over. See the ",
                            /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                                href: "/chocobo-color/about",
                                children: "About page"
                            }),
                            " for an in-depth explanation of the algorithm."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(chocobo_color_Calculator, {})
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale ?? "en", [
                "common",
                "chocobo-color"
            ])
        }
    };
};
/* harmony default export */ const chocobo_color = (ChocoboColor);


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

/***/ 2569:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowDownward");

/***/ }),

/***/ 1883:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForward");

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 3765:
/***/ ((module) => {

module.exports = require("@mui/material/Alert");

/***/ }),

/***/ 2311:
/***/ ((module) => {

module.exports = require("@mui/material/Autocomplete");

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

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,906,255,121], () => (__webpack_exec__(3250)));
module.exports = __webpack_exports__;

})();