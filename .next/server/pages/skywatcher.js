"use strict";
(() => {
var exports = {};
exports.id = 432;
exports.ids = [432];
exports.modules = {

/***/ 3917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ skywatcher),
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
// EXTERNAL MODULE: external "@mui/material/NoSsr"
var NoSsr_ = __webpack_require__(3534);
var NoSsr_default = /*#__PURE__*/__webpack_require__.n(NoSsr_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./src/Page.tsx
var Page = __webpack_require__(6906);
// EXTERNAL MODULE: ./src/Section.tsx
var Section = __webpack_require__(8884);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
;// CONCATENATED MODULE: external "@mui/material/FormControlLabel"
const FormControlLabel_namespaceObject = require("@mui/material/FormControlLabel");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
;// CONCATENATED MODULE: external "@mui/material/Checkbox"
const Checkbox_namespaceObject = require("@mui/material/Checkbox");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(2651);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: ./src/skywatcher/UpcomingWeatherTable.tsx + 1 modules
var UpcomingWeatherTable = __webpack_require__(1039);
// EXTERNAL MODULE: ./src/skywatcher/ffxiv-skywatcher/index.ts + 6 modules
var ffxiv_skywatcher = __webpack_require__(8407);
;// CONCATENATED MODULE: ./src/skywatcher/UpcomingWeather.tsx
















const REGIONS = (0,ffxiv_skywatcher/* getRegions */.JL)();
const UpcomingWeather = ({ now  })=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("skywatcher");
    const { 0: filter , 1: setFilter  } = (0,external_react_.useState)(null);
    const { 0: showLabels , 1: setShowLabels  } = (0,external_react_.useState)(true);
    const { 0: showLocalTime , 1: setShowLocalTime  } = (0,external_react_.useState)(false);
    const { 0: showAllPlaces , 1: setShowAllPlaces  } = (0,external_react_.useState)(false);
    const locale = i18n.language;
    const handleSelectFilter = (event)=>{
        setFilter(event.target.value === "none" ? null : event.target.value);
    };
    const handleToggleLabels = ()=>{
        setShowLabels(!showLabels);
    };
    const handleToggleLocalTime = ()=>{
        setShowLocalTime(!showLocalTime);
    };
    const handleToggleShowAllPlaces = ()=>{
        setShowAllPlaces(!showAllPlaces);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        title: t("upcomingWeather"),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                mb: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        variant: "filled",
                        fullWidth: true,
                        margin: "dense",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                children: t("selectRegion")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((NoSsr_default()), {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                    onChange: handleSelectFilter,
                                    value: filter ?? "none",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "none",
                                            children: t("showAllRegions")
                                        }),
                                        REGIONS.map((region)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                value: region,
                                                children: (0,ffxiv_skywatcher/* translatePlace */.xh)(region, locale)
                                            }, region)
                                        )
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                        control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                            color: "primary",
                            checked: showLabels,
                            onChange: handleToggleLabels
                        }),
                        label: t("showLabels")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                        control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                            color: "primary",
                            checked: showLocalTime,
                            onChange: handleToggleLocalTime
                        }),
                        label: t("showLocalTimes")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        enterDelay: 200,
                        title: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "caption",
                            children: "Include places with only 1 possible weather"
                        }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                color: "primary",
                                checked: showAllPlaces,
                                onChange: handleToggleShowAllPlaces
                            }),
                            label: t("showAllPlaces")
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((NoSsr_default()), {
                children: (filter !== null ? [
                    filter
                ] : REGIONS).map((region)=>{
                    const places = (0,ffxiv_skywatcher/* getPlaces */.fQ)(region).flatMap((place)=>(0,ffxiv_skywatcher/* getWeatherRates */.RR)(place).map((_, index)=>({
                                place,
                                weatherRateIndex: index
                            })
                        )
                    );
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h3",
                                gutterBottom: true,
                                children: (0,ffxiv_skywatcher/* translatePlace */.xh)(region, locale)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(UpcomingWeatherTable/* default */.Z, {
                                now: now,
                                places: showAllPlaces ? places : places.filter(({ place , weatherRateIndex  })=>(0,ffxiv_skywatcher/* getPossibleWeathers */.RW)(place, weatherRateIndex).length > 1
                                ),
                                showLabels: showLabels,
                                showLocalTime: showLocalTime
                            })
                        ]
                    }, region);
                })
            })
        ]
    });
};
/* harmony default export */ const skywatcher_UpcomingWeather = (UpcomingWeather);

// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(8098);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
;// CONCATENATED MODULE: external "@mui/material/FormGroup"
const FormGroup_namespaceObject = require("@mui/material/FormGroup");
var FormGroup_default = /*#__PURE__*/__webpack_require__.n(FormGroup_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/FormLabel"
const FormLabel_namespaceObject = require("@mui/material/FormLabel");
var FormLabel_default = /*#__PURE__*/__webpack_require__.n(FormLabel_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Alert"
var Alert_ = __webpack_require__(3765);
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);
// EXTERNAL MODULE: external "@mui/material/Autocomplete"
var Autocomplete_ = __webpack_require__(2311);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowDownward"
var ArrowDownward_ = __webpack_require__(2569);
var ArrowDownward_default = /*#__PURE__*/__webpack_require__.n(ArrowDownward_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
// EXTERNAL MODULE: external "@mui/material/Table"
var Table_ = __webpack_require__(9181);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);
// EXTERNAL MODULE: external "@mui/material/TableBody"
var TableBody_ = __webpack_require__(8823);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);
// EXTERNAL MODULE: external "@mui/material/TableRow"
var TableRow_ = __webpack_require__(4848);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(5612);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowForward"
var ArrowForward_ = __webpack_require__(1883);
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_);
// EXTERNAL MODULE: ./src/skywatcher/WeatherIcon.tsx + 1 modules
var WeatherIcon = __webpack_require__(2203);
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(8473);
// EXTERNAL MODULE: ./src/skywatcher/soft-hyphens.ts
var soft_hyphens = __webpack_require__(6627);
;// CONCATENATED MODULE: ./src/skywatcher/ForecasterTable.tsx















const DATE_FORMAT = {
    month: "2-digit",
    day: "2-digit"
};
function displayBell(seed) {
    switch(seed % 3){
        case 0:
            return "00:00";
        case 1:
            return "08:00";
        case 2:
            return "16:00";
        default:
            return "??:??";
    }
}
const Forecaster = ({ now , forecast  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)("ocean-fishing");
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
        component: (Paper_default()),
        sx: {
            mb: 2
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Table_default()), {
            children: /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                children: (()=>{
                    let previousDate;
                    return forecast.map(({ prevWeather , currWeather , seed , date  }, index)=>{
                        const dateString = date.toLocaleDateString(locale, DATE_FORMAT);
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                            hover: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    align: "right",
                                    sx: {
                                        width: 100
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        children: previousDate !== (previousDate = dateString) && dateString
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    align: "right",
                                    sx: {
                                        width: 150
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        children: (0,utils/* toTimeString */.U9)(date, {
                                            padded: true,
                                            locale
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        children: (0,utils/* timeUntil */.LW)(now, date, {
                                            locale
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    align: "right",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        children: displayBell(seed - 1)
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                                    align: "center",
                                    sx: {
                                        width: 100,
                                        verticalAlign: "top"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(WeatherIcon/* default */.Z, {
                                            weather: prevWeather
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            component: "div",
                                            variant: "caption",
                                            sx: {
                                                lineHeight: "110%"
                                            },
                                            children: (0,soft_hyphens/* default */.Z)((0,ffxiv_skywatcher/* translateWeather */.NI)(prevWeather, locale))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    align: "center",
                                    sx: {
                                        width: 0
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowForward_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    align: "right",
                                    sx: {
                                        width: 0
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        children: displayBell(seed)
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                                    align: "center",
                                    sx: {
                                        width: 100,
                                        verticalAlign: "top"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(WeatherIcon/* default */.Z, {
                                            weather: currWeather
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            component: "div",
                                            variant: "caption",
                                            sx: {
                                                lineHeight: "110%"
                                            },
                                            children: (0,soft_hyphens/* default */.Z)((0,ffxiv_skywatcher/* translateWeather */.NI)(currWeather, locale))
                                        })
                                    ]
                                })
                            ]
                        }, index);
                    });
                })()
            })
        })
    });
};
/* harmony default export */ const ForecasterTable = (Forecaster);

;// CONCATENATED MODULE: ./src/skywatcher/Forecaster.tsx





















const PLACE_OPTIONS = [];
for (const region of (0,ffxiv_skywatcher/* getRegions */.JL)()){
    for (const place of (0,ffxiv_skywatcher/* getPlaces */.fQ)(region)){
        for(let index = 0; index < (0,ffxiv_skywatcher/* getWeatherRates */.RR)(place).length; ++index){
            PLACE_OPTIONS.push({
                region,
                place,
                weatherRateIndex: index
            });
        }
    }
}
function removeTags(markdown) {
    return markdown.replace(/<\/?.+?>/g, "");
}
const Forecaster_Forecaster = ({ now  })=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("skywatcher");
    const { 0: placeOption1 , 1: setPlaceOption  } = (0,external_react_.useState)(null);
    const { 0: transitionWeather , 1: setTransitionWeather  } = (0,external_react_.useState)(null);
    const { 0: targetWeather , 1: setTargetWeather  } = (0,external_react_.useState)(null);
    const { 0: times , 1: setTimes  } = (0,external_react_.useState)({
        0: true,
        8: true,
        16: true
    });
    const possibleWeathers = placeOption1 !== null ? (0,ffxiv_skywatcher/* getPossibleWeathers */.RW)(placeOption1.place, placeOption1.weatherRateIndex) : null;
    const hasTime = times[0] || times[8] || times[16];
    const forecast = placeOption1 !== null && hasTime ? (0,ffxiv_skywatcher/* forecastWeathers */.EZ)(placeOption1.place, placeOption1.weatherRateIndex, (prevWeather, currWeather, seed)=>{
        if (transitionWeather !== null && transitionWeather !== prevWeather) return false;
        if (targetWeather !== null && targetWeather !== currWeather) return false;
        if (!times[0] && seed % 3 === 0) return false;
        if (!times[8] && seed % 3 === 1) return false;
        if (!times[16] && seed % 3 === 2) return false;
        return true;
    }, (0,ffxiv_skywatcher/* getSeed */.Th)(now)) : null;
    const locale = i18n.language;
    const handleSelectPlace = (_, placeOption)=>{
        setPlaceOption(placeOption);
        setTransitionWeather(null);
        setTargetWeather(null);
    };
    const handleSelectTransitionWeather = (event)=>{
        setTransitionWeather(event.target.value === "none" ? null : +event.target.value);
    };
    const handleSelectTargetWeather = (event)=>{
        setTargetWeather(event.target.value === "none" ? null : +event.target.value);
    };
    const handleSelectTimes = (timeSlot)=>{
        setTimes({
            ...times,
            [timeSlot]: !times[timeSlot]
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: t("forecaster"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
                        options: PLACE_OPTIONS,
                        groupBy: ({ region: region1  })=>(0,ffxiv_skywatcher/* translatePlace */.xh)(region1, locale)
                        ,
                        getOptionLabel: ({ place , weatherRateIndex  })=>removeTags((0,ffxiv_skywatcher/* translatePlace */.xh)(place, locale)) + (weatherRateIndex > 0 ? ` (alt. ${weatherRateIndex})` : "")
                        ,
                        renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                ...params,
                                variant: "standard",
                                label: t("place"),
                                placeholder: t("selectPlace"),
                                InputLabelProps: {
                                    shrink: true
                                }
                            })
                        ,
                        value: placeOption1,
                        onChange: handleSelectPlace
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 4,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            variant: "standard",
                            fullWidth: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                    children: t("transitionWeather")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                    value: transitionWeather !== null ? transitionWeather : "none",
                                    disabled: placeOption1 === null,
                                    onChange: handleSelectTransitionWeather,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "none",
                                            children: t(possibleWeathers !== null ? "anyWeather" : "selectPlaceFirst")
                                        }),
                                        possibleWeathers === null || possibleWeathers === void 0 ? void 0 : possibleWeathers.map((weather)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                value: String(weather),
                                                children: (0,ffxiv_skywatcher/* translateWeather */.NI)(weather, locale)
                                            }, weather)
                                        )
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            textAlign: "center",
                            p: 1,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowDownward_default()), {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                            variant: "standard",
                            fullWidth: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                    children: t("targetWeather")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                    value: targetWeather !== null ? targetWeather : "none",
                                    disabled: placeOption1 === null,
                                    onChange: handleSelectTargetWeather,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: "none",
                                            children: t(possibleWeathers !== null ? "anyWeather" : "selectPlaceFirst")
                                        }),
                                        possibleWeathers === null || possibleWeathers === void 0 ? void 0 : possibleWeathers.map((weather)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                value: weather,
                                                children: (0,ffxiv_skywatcher/* translateWeather */.NI)(weather, locale)
                                            }, weather)
                                        )
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 4,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        component: "fieldset",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((FormLabel_default()), {
                                component: "legend",
                                children: t("selectTimes")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormGroup_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                            checked: times[0],
                                            onChange: handleSelectTimes.bind(null, 0)
                                        }),
                                        label: "00:00"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                            checked: times[8],
                                            onChange: handleSelectTimes.bind(null, 8)
                                        }),
                                        label: "08:00"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                            checked: times[16],
                                            onChange: handleSelectTimes.bind(null, 16)
                                        }),
                                        label: "16:00"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                placeOption1 !== null && !hasTime && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Alert_default()), {
                        variant: "outlined",
                        severity: "error",
                        children: t("noTimeSelected")
                    })
                }),
                forecast !== null && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((NoSsr_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ForecasterTable, {
                            now: now,
                            forecast: forecast
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const skywatcher_Forecaster = (Forecaster_Forecaster);

// EXTERNAL MODULE: external "@mui/material/TableHead"
var TableHead_ = __webpack_require__(5953);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);
// EXTERNAL MODULE: ./src/Link.tsx
var Link = __webpack_require__(7255);
// EXTERNAL MODULE: ./src/Highlight.tsx
var Highlight = __webpack_require__(7556);
// EXTERNAL MODULE: ./src/skywatcher/ffxiv-skywatcher/src/translate-weather.ts
var translate_weather = __webpack_require__(5679);
// EXTERNAL MODULE: ./src/skywatcher/ffxiv-skywatcher/src/types.ts
var types = __webpack_require__(7456);
;// CONCATENATED MODULE: ./src/skywatcher/Algorithm.tsx
















const Algorithm = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("skywatcher");
    const locale = i18n.language;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        title: t("algorithm"),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                paragraph: true,
                children: [
                    "The weather in Eorzea can be predicted. First, the number of Eorzean hours and days since the ",
                    /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                        href: "https://en.wikipedia.org/wiki/Unix_time",
                        children: "Unix epoch"
                    }),
                    " is calculated."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Highlight/* default */.Z, {
                language: "javascript",
                children: `
// Get seconds since Jan 1st 1970
const unixSeconds = Date.now() / 1000

// Get Eorzean hours/days since (1 Eorzean hour = 175 seconds)
const eorzeanHours = Math.floor(unixSeconds / 175)
const eorzeanDays = Math.floor(eorzeanHours / 24)
        `.trim()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                paragraph: true,
                children: "Next, compute which of the 3 time chunks the hour falls in."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Highlight/* default */.Z, {
                language: "javascript",
                children: `
let timeChunk = (eorzeanHours % 24) - (eorzeanHours % 8)

// Adjust time chunk so that
//   16:00 is 00,
//   00:00 is 08,
//   08:00 is 16
timeChunk = (timeChunk + 8) % 24
        `.trim()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                paragraph: true,
                children: "The number of Eorzean days and the time chunk form the seed that is hashed."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Highlight/* default */.Z, {
                language: "javascript",
                children: `
const seed = eorzeanDays * 100 + timeChunk

// Do a little hashing
const step1 = (seed << 11) ^ seed
const step2 = (step1 >>> 8) ^ step1

// Return a number between 0-99 inclusive
const weatherChance = step2 % 100
        `.trim()
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                paragraph: true,
                children: [
                    "With ",
                    /*#__PURE__*/ jsx_runtime_.jsx("code", {
                        children: "weatherChance"
                    }),
                    " computed as a number from 0 to 99, each zone can determine its weather. For example, the weather in Eureka Anemos is Gales if ",
                    /*#__PURE__*/ jsx_runtime_.jsx("code", {
                        children: "weatherChance"
                    }),
                    " is between 30 and 59. Its full table of weathers is"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                sx: {
                    display: "inline-block",
                    mb: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            component: "code",
                                            children: "weatherChance"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: "Weather"
                                        })
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
                                                children: "00-29"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                                            align: "center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(WeatherIcon/* default */.Z, {
                                                    weather: types/* Weather.FairSkies */.y.FairSkies
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    component: "div",
                                                    variant: "caption",
                                                    sx: {
                                                        lineHeight: "110%"
                                                    },
                                                    children: (0,translate_weather/* default */.Z)(types/* Weather.FairSkies */.y.FairSkies, locale)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "30-59"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                                            align: "center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(WeatherIcon/* default */.Z, {
                                                    weather: types/* Weather.Gales */.y.Gales
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    component: "div",
                                                    variant: "caption",
                                                    sx: {
                                                        lineHeight: "110%"
                                                    },
                                                    children: (0,translate_weather/* default */.Z)(types/* Weather.Gales */.y.Gales, locale)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "60-89"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                                            align: "center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(WeatherIcon/* default */.Z, {
                                                    weather: types/* Weather.Showers */.y.Showers
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    component: "div",
                                                    variant: "caption",
                                                    sx: {
                                                        lineHeight: "110%"
                                                    },
                                                    children: (0,translate_weather/* default */.Z)(types/* Weather.Showers */.y.Showers, locale)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                children: "90-99"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                                            align: "center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(WeatherIcon/* default */.Z, {
                                                    weather: types/* Weather.Snow */.y.Snow
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    component: "div",
                                                    variant: "caption",
                                                    sx: {
                                                        lineHeight: "110%"
                                                    },
                                                    children: (0,translate_weather/* default */.Z)(types/* Weather.Snow */.y.Snow, locale)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const skywatcher_Algorithm = (/*#__PURE__*/external_react_default().memo(Algorithm));

;// CONCATENATED MODULE: ./pages/skywatcher.tsx












const Skywatcher = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("skywatcher");
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Page/* default */.Z, {
        title: t("_title"),
        description: t("_description"),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        paragraph: true,
                        children: [
                            "The time in Eorzea is ",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((NoSsr_default()), {
                                    children: (0,utils/* formatTimeUtc */.Qs)(new Date(now1.getTime() * (1440 / 70)))
                                })
                            }),
                            "."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                component: "li",
                                children: "Some places have multiple possible weather rates depending on certain conditions. For example, Amh Araeng will always be Everlasting Light until a certain point in the MSQ."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                component: "li",
                                children: "Certain special weathers such as Tension will replace the predicted weather depending on certain conditions."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                component: "li",
                                children: [
                                    "The weathers associated with The ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: "Endeavor"
                                    }),
                                    " have no apparent correlation with the weathers experienced during the voyage."
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(skywatcher_Forecaster, {
                now: now1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(skywatcher_UpcomingWeather, {
                now: now1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(skywatcher_Algorithm, {})
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale ?? "en", [
                "common",
                "skywatcher"
            ])
        }
    };
};
/* harmony default export */ const skywatcher = (Skywatcher);


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

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

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

/***/ 2651:
/***/ ((module) => {

module.exports = require("@mui/material/Select");

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

/***/ 8455:
/***/ ((module) => {

module.exports = require("react-string-replace");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,906,255,122,730,39], () => (__webpack_exec__(3917)));
module.exports = __webpack_exports__;

})();