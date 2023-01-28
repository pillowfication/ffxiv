"use strict";
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 5899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ChecklistContext": () => (/* binding */ ChecklistContext),
  "default": () => (/* binding */ ocean_fishing),
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
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./src/Link.tsx
var Link = __webpack_require__(7255);
// EXTERNAL MODULE: ./src/Page.tsx
var Page = __webpack_require__(6906);
// EXTERNAL MODULE: ./src/Section.tsx
var Section = __webpack_require__(8884);
// EXTERNAL MODULE: ./src/ocean-fishing/NavigationBar.tsx
var NavigationBar = __webpack_require__(7389);
// EXTERNAL MODULE: external "next-usequerystate"
var external_next_usequerystate_ = __webpack_require__(719);
// EXTERNAL MODULE: external "@mui/material/NoSsr"
var NoSsr_ = __webpack_require__(3534);
var NoSsr_default = /*#__PURE__*/__webpack_require__.n(NoSsr_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(8098);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(2651);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@mui/material/ListSubheader"
var ListSubheader_ = __webpack_require__(9685);
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
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
// EXTERNAL MODULE: ./src/ocean-fishing/OceanFishIcon.tsx + 3 modules
var OceanFishIcon = __webpack_require__(4994);
// EXTERNAL MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/index.ts + 2 modules
var ffxiv_ocean_fishing = __webpack_require__(1176);
// EXTERNAL MODULE: ./src/ocean-fishing/maps.ts
var maps = __webpack_require__(2076);
// EXTERNAL MODULE: ./src/ocean-fishing/utils.ts
var utils = __webpack_require__(3440);
// EXTERNAL MODULE: ./src/utils.ts
var src_utils = __webpack_require__(8473);
// EXTERNAL MODULE: ./src/translate.ts
var translate = __webpack_require__(9465);
;// CONCATENATED MODULE: ./src/ocean-fishing/UpcomingVoyagesTable.tsx

















const DATE_FORMAT = {
    month: "2-digit",
    day: "2-digit"
};
const UpcomingVoyagesTable = ({ now , numRows , filter , onSelectRoute  })=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("ocean-fishing");
    const upcomingVoyages = (0,ffxiv_ocean_fishing/* calculateVoyages */.Z)(now, Math.min(Math.max(numRows, 1), 50), filter);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
        component: (Paper_default()),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                colSpan: 3,
                                align: "center",
                                children: t("routeInfo.time")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                colSpan: 2,
                                align: "center",
                                children: t("routeInfo.route")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                align: "center",
                                children: t("routeInfo.objectives")
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                    children: (()=>{
                        if (upcomingVoyages.length === 0) {
                            return /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    colSpan: 6,
                                    align: "center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        sx: {
                                            p: 2,
                                            fontWeight: "bold"
                                        },
                                        children: "No voyages found. You should check the filters."
                                    })
                                })
                            });
                        }
                        let previousDate;
                        return upcomingVoyages.map(({ date , destTime  })=>{
                            const dateString = date.toLocaleDateString(locale, DATE_FORMAT);
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                hover: true,
                                onClick: onSelectRoute.bind(null, destTime),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "right",
                                        sx: {
                                            whiteSpace: "nowrap"
                                        },
                                        children: previousDate !== (previousDate = dateString) && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: dateString
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        sx: {
                                            whiteSpace: "nowrap"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: (0,src_utils/* toTimeString */.U9)(date, {
                                                padded: true,
                                                locale
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: (0,utils/* timeUntil */.LW)(now, date, {
                                                t,
                                                locale
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "right",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            children: (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, maps/* STOP_MAP */.tj[destTime[0]].placeName_sub, "name_noArticle", "name"))
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        children: maps/* TIME_MAP */.d4[destTime[1]]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                                        children: [
                                            maps/* ACHIEVEMENTS_MAP */.T$[destTime].map((achievement)=>/*#__PURE__*/ jsx_runtime_.jsx(OceanFishIcon/* default */.Z, {
                                                    type: "achievement",
                                                    id: achievement.id
                                                }, achievement.id)
                                            ),
                                            (0,ffxiv_ocean_fishing/* getStopTimes */.y)(destTime).map(utils/* getBlueFish */.XZ).map((blueFish)=>blueFish !== null && /*#__PURE__*/ jsx_runtime_.jsx(OceanFishIcon/* default */.Z, {
                                                    type: "fish",
                                                    id: blueFish.id
                                                }, blueFish.id)
                                            )
                                        ]
                                    })
                                ]
                            }, date.getTime());
                        });
                    })()
                })
            ]
        })
    });
};
/* harmony default export */ const ocean_fishing_UpcomingVoyagesTable = (UpcomingVoyagesTable);

// EXTERNAL MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/index.ts + 9 modules
var data = __webpack_require__(7576);
;// CONCATENATED MODULE: ./src/ocean-fishing/UpcomingVoyages.tsx



















// `filter` is one of
//  - `null` for no filter
//  - a key in maps.FILTER_MAP for some predefined filter
//  - 'uncaught' for a dynamic filter for uncaught fish
//  - comma separated list of DestTimes
function getFilter(filter, checklist) {
    if (filter === null) {
        return undefined;
    } else if (filter in maps/* FILTER_MAP */.by) {
        return maps/* FILTER_MAP */.by[filter];
    } else if (filter === "uncaught") {
        return [
            "BD",
            "BS",
            "BN",
            "ND",
            "NS",
            "NN",
            "RD",
            "RS",
            "RN",
            "TD",
            "TS",
            "TN"
        ].filter((destTime)=>(0,utils/* isUncaughtRoute */.Bb)(destTime, checklist ?? [])
        );
    } else {
        return filter.split(",").filter((destTime)=>destTime.length === 2 && "BNRT".includes(destTime[0]) && "DSN".includes(destTime[1])
        );
    }
}
const UpcomingVoyages = ({ now , onSelectRoute , checklist  })=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("ocean-fishing");
    const { 0: numRows1 , 1: setNumRows  } = (0,external_react_.useState)(10);
    const [filter1, setFilter] = (0,external_next_usequerystate_.useQueryState)("filter");
    const _filter = getFilter(filter1, checklist);
    const isCustomFilter = filter1 !== null && filter1 !== "uncaught" && maps/* FILTER_MAP */.by[filter1] === undefined;
    const locale = i18n.language;
    (0,external_react_.useEffect)(()=>{
        onSelectRoute((0,ffxiv_ocean_fishing/* calculateVoyages */.Z)(now, 1, _filter !== undefined && _filter.length > 0 ? _filter : undefined)[0].destTime);
    }, [
        filter1
    ]);
    const handleInputNumRows = (event)=>{
        setNumRows(Number(event.target.value));
    };
    const handleBlurNumRows = (event)=>{
        const numRows = Number(event.target.value);
        if (!isFinite(numRows)) {
            setNumRows(10);
        } else {
            setNumRows(Math.min(Math.max(Math.floor(numRows), 1), 50));
        }
    };
    const handleSelectFilter = (event)=>{
        const filter = event.target.value === "none" ? null : event.target.value;
        void setFilter(filter);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: t("upcomingVoyages"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    sm: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                        fullWidth: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            variant: "filled",
                            label: t("numberOfRows"),
                            type: "number",
                            value: numRows1,
                            onChange: handleInputNumRows,
                            onBlur: handleBlurNumRows
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    sm: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        fullWidth: true,
                        variant: "filled",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                children: t("filterRoute")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((NoSsr_default()), {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                    value: filter1 !== null ? isCustomFilter ? "custom" : filter1 : "none",
                                    onChange: handleSelectFilter,
                                    children: [
                                        isCustomFilter && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            value: "custom",
                                            disabled: true,
                                            children: [
                                                "Custom Filter: ",
                                                _filter != null && _filter.length > 0 ? _filter.join(", ") : "(none)"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "none",
                                            children: t("noFilter")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "uncaught",
                                            children: "Uncaught Fish"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
                                            disableSticky: true,
                                            sx: {
                                                pt: 2
                                            },
                                            children: t("blueFish")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "sothis",
                                            children: (0,translate/* default */.Z)(locale, data/* fishes.29788 */.n7[29788], "name")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "coral_manta",
                                            children: (0,translate/* default */.Z)(locale, data/* fishes.29789 */.n7[29789], "name")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "stonescale",
                                            children: (0,translate/* default */.Z)(locale, data/* fishes.29790 */.n7[29790], "name")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "elasmosaurus",
                                            children: (0,translate/* default */.Z)(locale, data/* fishes.29791 */.n7[29791], "name")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "hafgufa",
                                            children: (0,translate/* default */.Z)(locale, data/* fishes.32074 */.n7[32074], "name")
                                        }),
                                        ",",
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "seafaring_toad",
                                            children: (0,translate/* default */.Z)(locale, data/* fishes.32094 */.n7[32094], "name")
                                        }),
                                        ",",
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "placodus",
                                            children: (0,translate/* default */.Z)(locale, data/* fishes.32114 */.n7[32114], "name")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
                                            disableSticky: true,
                                            sx: {
                                                pt: 2
                                            },
                                            children: t("achievements")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "octopodes",
                                            children: (0,translate/* default */.Z)(locale, data/* achievements.2563 */.EF[2563], "name")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "sharks",
                                            children: (0,translate/* default */.Z)(locale, data/* achievements.2564 */.EF[2564], "name")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "jellyfish",
                                            children: (0,translate/* default */.Z)(locale, data/* achievements.2565 */.EF[2565], "name")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "seadragons",
                                            children: (0,translate/* default */.Z)(locale, data/* achievements.2566 */.EF[2566], "name")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "balloons",
                                            children: (0,translate/* default */.Z)(locale, data/* achievements.2754 */.EF[2754], "name")
                                        }),
                                        ",",
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "crabs",
                                            children: (0,translate/* default */.Z)(locale, data/* achievements.2755 */.EF[2755], "name")
                                        }),
                                        ",",
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "mantas",
                                            children: (0,translate/* default */.Z)(locale, data/* achievements.2756 */.EF[2756], "name")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
                                            disableSticky: true,
                                            sx: {
                                                pt: 2
                                            },
                                            children: (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.241.placeName_sub */.OL[241].placeName_sub, "name_noArticle", "name"))
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "R",
                                            children: (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.241.placeName_sub */.OL[241].placeName_sub, "name_noArticle", "name"))
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            dense: true,
                                            value: "RD",
                                            children: [
                                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.241.placeName_sub */.OL[241].placeName_sub, "name_noArticle", "name")),
                                                " - ",
                                                t("time.day")
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            dense: true,
                                            value: "RS",
                                            children: [
                                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.241.placeName_sub */.OL[241].placeName_sub, "name_noArticle", "name")),
                                                " - ",
                                                t("time.sunset")
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            dense: true,
                                            value: "RN",
                                            children: [
                                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.241.placeName_sub */.OL[241].placeName_sub, "name_noArticle", "name")),
                                                " - ",
                                                t("time.night")
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
                                            disableSticky: true,
                                            sx: {
                                                pt: 2
                                            },
                                            children: (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.243.placeName_sub */.OL[243].placeName_sub, "name_noArticle", "name"))
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "N",
                                            children: (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.243.placeName_sub */.OL[243].placeName_sub, "name_noArticle", "name"))
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            dense: true,
                                            value: "ND",
                                            children: [
                                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.243.placeName_sub */.OL[243].placeName_sub, "name_noArticle", "name")),
                                                " - ",
                                                t("time.day")
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            dense: true,
                                            value: "NS",
                                            children: [
                                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.243.placeName_sub */.OL[243].placeName_sub, "name_noArticle", "name")),
                                                " - ",
                                                t("time.sunset")
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            dense: true,
                                            value: "NN",
                                            children: [
                                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.243.placeName_sub */.OL[243].placeName_sub, "name_noArticle", "name")),
                                                " - ",
                                                t("time.night")
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
                                            disableSticky: true,
                                            sx: {
                                                pt: 2
                                            },
                                            children: (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.248.placeName_sub */.OL[248].placeName_sub, "name_noArticle", "name"))
                                        }),
                                        ",",
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "B",
                                            children: (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.248.placeName_sub */.OL[248].placeName_sub, "name_noArticle", "name"))
                                        }),
                                        ",",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            dense: true,
                                            value: "BD",
                                            children: [
                                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.248.placeName_sub */.OL[248].placeName_sub, "name_noArticle", "name")),
                                                " - ",
                                                t("time.day")
                                            ]
                                        }),
                                        ",",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            dense: true,
                                            value: "BS",
                                            children: [
                                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.248.placeName_sub */.OL[248].placeName_sub, "name_noArticle", "name")),
                                                " - ",
                                                t("time.sunset")
                                            ]
                                        }),
                                        ",",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            dense: true,
                                            value: "BN",
                                            children: [
                                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.248.placeName_sub */.OL[248].placeName_sub, "name_noArticle", "name")),
                                                " - ",
                                                t("time.night")
                                            ]
                                        }),
                                        ",",
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
                                            disableSticky: true,
                                            sx: {
                                                pt: 2
                                            },
                                            children: (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.250.placeName_sub */.OL[250].placeName_sub, "name_noArticle", "name"))
                                        }),
                                        ",",
                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            dense: true,
                                            value: "T",
                                            children: (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.250.placeName_sub */.OL[250].placeName_sub, "name_noArticle", "name"))
                                        }),
                                        ",",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            dense: true,
                                            value: "TD",
                                            children: [
                                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.250.placeName_sub */.OL[250].placeName_sub, "name_noArticle", "name")),
                                                " - ",
                                                t("time.day")
                                            ]
                                        }),
                                        ",",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            dense: true,
                                            value: "TS",
                                            children: [
                                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.250.placeName_sub */.OL[250].placeName_sub, "name_noArticle", "name")),
                                                " - ",
                                                t("time.sunset")
                                            ]
                                        }),
                                        ",",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                            dense: true,
                                            value: "TN",
                                            children: [
                                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, data/* fishingSpots.250.placeName_sub */.OL[250].placeName_sub, "name_noArticle", "name")),
                                                " - ",
                                                t("time.night")
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((NoSsr_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_UpcomingVoyagesTable, {
                            now: now,
                            numRows: numRows1,
                            filter: _filter,
                            onSelectRoute: onSelectRoute
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const ocean_fishing_UpcomingVoyages = (UpcomingVoyages);

// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(319);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
;// CONCATENATED MODULE: ./src/ocean-fishing/StopCardsContainer.tsx



const StopCardsContainer = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        container: true,
        spacing: 2,
        children: children
    });
};
/* harmony default export */ const ocean_fishing_StopCardsContainer = (StopCardsContainer);

// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
;// CONCATENATED MODULE: ./src/ocean-fishing/StopCard.tsx










const StopCard = ({ index , stopTime , children  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)();
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        item: true,
        xs: 12,
        md: 4,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
            variant: "outlined",
            sx: {
                height: 1.00
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                    title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "h6",
                        children: [
                            index + 1,
                            ".",
                            " ",
                            (0,translate/* default */.Z)(locale, maps/* STOP_MAP */.tj[stopTime[0]].placeName_sub, "name"),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                component: "span",
                                sx: {
                                    "& > svg": {
                                        top: "-20%"
                                    }
                                },
                                children: maps/* TIME_MAP */.d4[stopTime[1]]
                            })
                        ]
                    }),
                    disableTypography: true
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const ocean_fishing_StopCard = (StopCard);

// EXTERNAL MODULE: ./src/ocean-fishing/BaitGroup.tsx + 1 modules
var BaitGroup = __webpack_require__(2072);
;// CONCATENATED MODULE: ./src/ocean-fishing/BaitList.tsx





const BaitList = ({ baitGroups  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        component: "ul",
        sx: {
            listStyleType: "none",
            p: 0,
            m: 0
        },
        children: baitGroups.map((baitGroup, index)=>{
            if (baitGroup === "hr") {
                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        component: "hr",
                        sx: {
                            borderColor: "divider"
                        }
                    })
                }, index);
            } else {
                const { header , baitGroupProps  } = baitGroup;
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            gutterBottom: true,
                            children: header
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(BaitGroup/* default */.Z, {
                            ...baitGroupProps
                        })
                    ]
                }, index);
            }
        })
    });
};
/* harmony default export */ const ocean_fishing_BaitList = (BaitList);

;// CONCATENATED MODULE: ./src/ocean-fishing/RouteInformationIntuition.tsx










const RouteInformationIntuition = ({ stopTimes  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)("ocean-fishing");
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_StopCardsContainer, {
        children: stopTimes.map((stopTime, index)=>{
            const fishes = [
                maps/* SPECTRAL_FISH_MAP */.Kg[stopTime[0]],
                maps/* GREEN_FISH_MAP */.G8[stopTime[0]]
            ];
            const blueFish = (0,utils/* getBlueFish */.XZ)(stopTime);
            if (blueFish !== null) {
                fishes.push("hr", blueFish);
            }
            return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_StopCard, {
                index: index,
                stopTime: stopTime,
                children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                        baitGroups: fishes.map((fish)=>fish === "hr" ? "hr" : {
                                header: (0,translate/* default */.Z)(locale, fish, "name"),
                                baitGroupProps: (0,utils/* getBaitGroup */.S5)(fish)
                            }
                        )
                    })
                })
            }, stopTime);
        })
    });
};
/* harmony default export */ const ocean_fishing_RouteInformationIntuition = (RouteInformationIntuition);

;// CONCATENATED MODULE: ./src/ocean-fishing/RouteInformationTimeSensitive.tsx











function getTimeSensitiveFishes(stopTime) {
    const fishingSpot = maps/* STOP_MAP */.tj[stopTime[0]];
    const spectralFishingSpot = data/* fishingSpots */.OL[fishingSpot.id + 1];
    const time = stopTime[1];
    return spectralFishingSpot.fishes.filter((fish)=>{
        const { time: fishTime  } = fish.spreadsheetData;
        return fishTime !== null && fishTime.length < 3 && fishTime.includes(time);
    });
}
const RouteInformationTimeSensitive = ({ stopTimes  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)("ocean-fishing");
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_StopCardsContainer, {
        children: stopTimes.map((stopTime, index)=>{
            const fishes = [
                maps/* SPECTRAL_FISH_MAP */.Kg[stopTime[0]]
            ];
            const timeFishes = getTimeSensitiveFishes(stopTime);
            if (timeFishes.length > 0) {
                fishes.push("hr", ...timeFishes);
            }
            return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_StopCard, {
                index: index,
                stopTime: stopTime,
                children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                        baitGroups: fishes.map((fish)=>fish === "hr" ? "hr" : {
                                header: (0,translate/* default */.Z)(locale, fish, "name"),
                                baitGroupProps: (0,utils/* getBaitGroup */.S5)(fish)
                            }
                        )
                    })
                })
            }, stopTime);
        })
    });
};
/* harmony default export */ const ocean_fishing_RouteInformationTimeSensitive = (RouteInformationTimeSensitive);

;// CONCATENATED MODULE: ./src/ocean-fishing/RouteInformationPoints.tsx











const POINTS_THRESHOLD = 700;
function getPointsFishes(stopTime) {
    const fishingSpot = maps/* STOP_MAP */.tj[stopTime[0]];
    const spectralFishingSpot = data/* fishingSpots */.OL[fishingSpot.id + 1];
    const time = stopTime[1];
    // Find all fish that exceed the threshold, while keeping track of the highest value fish(es)
    let highestPointsFishes = [];
    const thresholdPointsFishes = spectralFishingSpot.fishes.filter((fish)=>{
        const { points , tripleHook , time: fishTime , intuition  } = fish.spreadsheetData;
        // Check to see if this fish is catchable
        if (fishTime !== null && !fishTime.includes(time)) {
            return false;
        // Ignore blue fish so that the highest non-blue fish will be found
        } else if (intuition !== null) {
            return false;
        // Not enough known data on this fish
        } else if (points === null || tripleHook === null) {
            return false;
        // Check what this fish is worth
        } else {
            const maxPoints = (Array.isArray(tripleHook) ? tripleHook[1] : tripleHook) * points;
            if (highestPointsFishes.length === 0) {
                highestPointsFishes.push({
                    fish,
                    points: maxPoints
                });
            } else if (maxPoints === highestPointsFishes[0].points) {
                highestPointsFishes.push({
                    fish,
                    points: maxPoints
                });
            } else if (maxPoints > highestPointsFishes[0].points) {
                highestPointsFishes = [
                    {
                        fish,
                        points: maxPoints
                    }
                ];
            }
            return maxPoints >= POINTS_THRESHOLD;
        }
    });
    // If any fish passed the threshold hold, return all those fish
    if (thresholdPointsFishes.length > 0) {
        return thresholdPointsFishes;
    // Otherwise, return whatever the best non-blue fish are
    } else {
        return highestPointsFishes.map(({ fish  })=>fish
        );
    }
}
const RouteInformationPoints = ({ stopTimes  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)("ocean-fishing");
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_StopCardsContainer, {
        children: stopTimes.map((stopTime, index1)=>/*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_StopCard, {
                index: index1,
                stopTime: stopTime,
                children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                        baitGroups: [
                            maps/* SPECTRAL_FISH_MAP */.Kg[stopTime[0]],
                            maps/* GREEN_FISH_MAP */.G8[stopTime[0]],
                            "hr",
                            ...getPointsFishes(stopTime),
                            (0,utils/* getBlueFish */.XZ)(stopTime)
                        ].filter((fish)=>fish !== null
                        ).map((fish, index)=>{
                            if (fish === "hr" || fish === null) {
                                return "hr";
                            } else {
                                const { points , tripleHook  } = fish.spreadsheetData;
                                const tripleHookString = tripleHook !== null ? Array.isArray(tripleHook) ? tripleHook.join("-") : tripleHook : "?";
                                const pointsString = tripleHook !== null && points !== null ? (Array.isArray(tripleHook) ? tripleHook[1] : tripleHook) * points : "?";
                                return {
                                    header: (0,translate/* default */.Z)(locale, fish, "name"),
                                    baitGroupProps: {
                                        ...(0,utils/* getBaitGroup */.S5)(fish),
                                        subtext: index === 0 ? "" : `TH: ×${tripleHookString} = ${pointsString}`,
                                        mainOnly: true
                                    }
                                };
                            }
                        })
                    })
                })
            }, stopTime)
        )
    });
};
/* harmony default export */ const ocean_fishing_RouteInformationPoints = (RouteInformationPoints);

// EXTERNAL MODULE: external "@mui/material/Tabs"
var Tabs_ = __webpack_require__(8544);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: ./src/ocean-fishing/FishTable.tsx
var FishTable = __webpack_require__(6119);
;// CONCATENATED MODULE: ./src/ocean-fishing/FishPanel.tsx






const FishPanel = ({ tab , index , stopTime  })=>{
    const fishingSpot = maps/* STOP_MAP */.tj[stopTime[0]];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        hidden: tab !== index,
        children: /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
            children: /*#__PURE__*/ jsx_runtime_.jsx(FishTable/* default */.Z, {
                fishingSpots: [
                    fishingSpot,
                    data/* fishingSpots */.OL[fishingSpot.id + 1]
                ],
                time: stopTime[1]
            })
        })
    });
};
/* harmony default export */ const ocean_fishing_FishPanel = (FishPanel);

;// CONCATENATED MODULE: ./src/ocean-fishing/RouteInformationAll.tsx









const RouteInformationAll = ({ stopTimes  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)("ocean-fishing");
    const { 0: tab , 1: setTab  } = (0,external_react_.useState)(0);
    const locale = i18n.language;
    (0,external_react_.useEffect)(()=>{
        setTab(0);
    }, [
        stopTimes.join(",")
    ]);
    const handleChangeTab = (_, value)=>{
        setTab(value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        variant: "outlined",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
                variant: "fullWidth",
                value: tab,
                onChange: handleChangeTab,
                children: stopTimes.map((stopTime, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                        label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                index + 1,
                                ". ",
                                (0,translate/* default */.Z)(locale, maps/* STOP_MAP */.tj[stopTime[0]].placeName_sub, "name"),
                                maps/* TIME_MAP */.d4[stopTime[1]]
                            ]
                        })
                    }, stopTime)
                )
            }),
            stopTimes.map((stopTime, index)=>/*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_FishPanel, {
                    tab: tab,
                    index: index,
                    stopTime: stopTime
                }, stopTime)
            )
        ]
    });
};
/* harmony default export */ const ocean_fishing_RouteInformationAll = (RouteInformationAll);

;// CONCATENATED MODULE: ./src/ocean-fishing/RouteInformation.tsx

















var FishFilter;
(function(FishFilter) {
    FishFilter["Intuition"] = "intuition";
    FishFilter["TimeSensitive"] = "time-sensitive";
    FishFilter["Points"] = "points";
    FishFilter["All"] = "all";
})(FishFilter || (FishFilter = {}));
const RouteInformation = ({ now , route  })=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("ocean-fishing");
    const { 0: fishFilter , 1: setFishFilter  } = (0,external_react_.useState)(null);
    const stopTimes = (0,ffxiv_ocean_fishing/* getStopTimes */.y)(route);
    const next = (0,ffxiv_ocean_fishing/* calculateVoyages */.Z)(now, 1, [
        route
    ])[0].date;
    const locale = i18n.language;
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (fishFilter !== null) {
            window.localStorage.setItem("ocean-fishing/route-information-filter", fishFilter);
        }
    }, [
        fishFilter
    ]);
    const handleSelectFishFilter = (event)=>{
        setFishFilter(event.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                alignItems: "flex-end",
                spacing: 2,
                mb: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            variant: "h3",
                            children: [
                                (0,utils/* upperFirst */.jC)((0,translate/* default */.Z)(locale, maps/* STOP_MAP */.tj[route[0]].placeName_sub, "name_noArticle", "name")),
                                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    component: "span",
                                    sx: {
                                        "& > svg": {
                                            top: "-20%",
                                            ml: 1,
                                            mr: 2
                                        }
                                    },
                                    children: maps/* TIME_MAP */.d4[route[1]]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    sx: {
                                        display: {
                                            sm: "block",
                                            md: "inline"
                                        }
                                    },
                                    children: (0,utils/* timeUntil */.LW)(now, next, {
                                        t,
                                        full: true,
                                        locale
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: "auto",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                            size: "small",
                            value: fishFilter ?? FishFilter.Intuition,
                            onChange: handleSelectFishFilter,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    value: FishFilter.Intuition,
                                    children: t("showIntuitionFish")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    value: FishFilter.TimeSensitive,
                                    children: t("showTimeFish")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    value: FishFilter.Points,
                                    children: t("showPointsFish")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    value: FishFilter.All,
                                    children: t("showAllFish")
                                })
                            ]
                        })
                    })
                ]
            }),
            (()=>{
                switch(fishFilter ?? FishFilter.Intuition){
                    case FishFilter.Intuition:
                        return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_RouteInformationIntuition, {
                            stopTimes: stopTimes
                        });
                    case FishFilter.TimeSensitive:
                        return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_RouteInformationTimeSensitive, {
                            stopTimes: stopTimes
                        });
                    case FishFilter.Points:
                        return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_RouteInformationPoints, {
                            stopTimes: stopTimes
                        });
                    case FishFilter.All:
                        return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_RouteInformationAll, {
                            stopTimes: stopTimes
                        });
                }
            })()
        ]
    });
};
/* harmony default export */ const ocean_fishing_RouteInformation = (RouteInformation);

// EXTERNAL MODULE: ./src/Highlight.tsx
var Highlight = __webpack_require__(7556);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/ocean-fishing/AchievementInformation.tsx












const contentBonusMap = {
    2563: data/* contentBonuses.13 */.ez[13],
    2564: data/* contentBonuses.14 */.ez[14],
    2565: data/* contentBonuses.15 */.ez[15],
    2566: data/* contentBonuses.16 */.ez[16],
    2754: data/* contentBonuses.20 */.ez[20],
    2755: data/* contentBonuses.21 */.ez[21],
    2756: data/* contentBonuses.22 */.ez[22]
};
const teamcraftUrlMap = {
    2563: "https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#octopus-travelers",
    2564: "https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#maritime-dragonslayers",
    2565: "https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#jelled-together",
    2566: "https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#maritime-dragonslayers",
    2754: "https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#balloon-catchers",
    2755: "https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#crab-boat-crew",
    2756: "https://guides.ffxivteamcraft.com/guide/ocean-fishing-bonus-achievements#sticking-it-to-the-manta"
};
const AchievementInformation = ({ achievement , children  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)("ocean-fishing");
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
            variant: "h3",
            children: [
                (0,translate/* default */.Z)(locale, data/* achievements */.EF[achievement], "name"),
                /*#__PURE__*/ jsx_runtime_.jsx(OceanFishIcon/* default */.Z, {
                    type: "achievement",
                    id: achievement,
                    sx: {
                        ml: 1,
                        mr: 2,
                        verticalAlign: "text-bottom"
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                    sx: {
                        display: {
                            sm: "block",
                            md: "inline"
                        }
                    },
                    children: [
                        (0,utils/* cleanRequirement */.jV)((0,translate/* default */.Z)(locale, contentBonusMap[achievement], "requirement")),
                        "\xa0",
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                            href: teamcraftUrlMap[achievement],
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_solid_svg_icons_.faArrowUpRightFromSquare
                            })
                        })
                    ]
                })
            ]
        }),
        children: children
    });
};
/* harmony default export */ const ocean_fishing_AchievementInformation = (AchievementInformation);

// EXTERNAL MODULE: ./src/ocean-fishing/Tug.tsx
var Tug = __webpack_require__(6182);
;// CONCATENATED MODULE: ./src/ocean-fishing/macros/octopodes.ffmacro
/* harmony default export */ const octopodes_ffmacro = ("/micon Cast\n/ac Cast\n<wait.3>\n/echo 3 - Not Mane! <se.1>\n<wait.2>\n/echo 5 - Mopbeard! <se.2>\n<wait.12>\n/echo 17 - Cyan? <se.3>\n<wait.3>\n/echo 20 - Not Jasperhead! <se.3>\n<wait.9>\n/echo 29 - Recast! <se.4>\n");
;// CONCATENATED MODULE: ./src/ocean-fishing/AchievementOctopodes.tsx














const AchievementOctopodes = ({ route  })=>{
    const stopTimes = (0,ffxiv_ocean_fishing/* getStopTimes */.y)(route);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_AchievementInformation, {
        achievement: 2563,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCardsContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_StopCard, {
                        index: 0,
                        stopTime: stopTimes[0],
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "No octopodes here. Collect some Angler\u2019s Art!"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "You may opt for no spectral here for an extended one in the next zone."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                        index: 1,
                        stopTime: stopTimes[1],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                    baitGroups: [
                                        {
                                            header: "IC\u2013DH at 17-28s",
                                            baitGroupProps: {
                                                ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29734 */.n7[29734]),
                                                subtext: utils/* subtextDH */.TW
                                            }
                                        },
                                        {
                                            header: "DH at <3s",
                                            baitGroupProps: {
                                                ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29766 */.n7[29766]),
                                                subtext: utils/* subtextDH */.TW
                                            }
                                        }
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "overline",
                                        children: "Non-spectral"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        paragraph: true,
                                        children: "Can blind DH the Cyan Octopodes at \u226520s, or at \u226512s with a SS\u2019d Jasperhead. Clouds/Fog weather will also remove Jasperheads."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "overline",
                                        children: "Spectral"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                        paragraph: true,
                                        children: [
                                            "Only the instant ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                                strength: 2
                                            }),
                                            " is Merman\u2019s Mane. Use IC\u2013DH if running out of time."
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                        index: 2,
                        stopTime: stopTimes[2],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                    baitGroups: [
                                        {
                                            header: "DH\u2013IC\u2013DH at \u22655s",
                                            baitGroupProps: {
                                                ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29773 */.n7[29773]),
                                                subtext: utils/* subtextDH */.TW
                                            }
                                        }
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "overline",
                                        children: "Spectral"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                        paragraph: true,
                                        children: [
                                            "The earlier ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                                strength: 2
                                            }),
                                            " is Coccosteus."
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                paragraph: true,
                children: "Sample octopodes macro"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Highlight/* default */.Z, {
                language: "plaintext",
                children: octopodes_ffmacro
            })
        ]
    });
};
/* harmony default export */ const ocean_fishing_AchievementOctopodes = (AchievementOctopodes);

;// CONCATENATED MODULE: ./src/ocean-fishing/AchievementSharks.tsx












const AchievementSharks = ({ route  })=>{
    const stopTimes = (0,ffxiv_ocean_fishing/* getStopTimes */.y)(route);
    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_AchievementInformation, {
        achievement: 2564,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCardsContainer, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                    index: 0,
                    stopTime: stopTimes[0],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                baitGroups: [
                                    {
                                        header: "IC; DH\u2013IC\u2013DH post-spectral",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.28942 */.n7[28942]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "IC\u2013DH",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29750 */.n7[29750]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "No buffs",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29751 */.n7[29751]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "DH\u2013IC\u2013DH",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29782 */.n7[29782]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    }
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Pre-spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "Save GP when possible; IC if capped."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Spectral"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    paragraph: true,
                                    children: [
                                        "Hook ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                            strength: 2
                                        }),
                                        " and ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                            strength: 3
                                        }),
                                        ". IC\u2013DH if you catch a Ghost Shark; ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                            strength: 3
                                        }),
                                        " is a blind DH\u2013IC\u2013DH."
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Post-spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "Spend all remaining GP with blind DH\u2013IC\u2013DH Tarnished Sharks."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_StopCard, {
                    index: 1,
                    stopTime: stopTimes[1],
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                paragraph: true,
                                children: "No sharks here. Collect some Angler\u2019s Art!"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                paragraph: true,
                                children: "Try for Coral Manta?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                paragraph: true,
                                children: "You may opt for no spectral here for an extended one in the next zone."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                    index: 2,
                    stopTime: stopTimes[2],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                baitGroups: [
                                    {
                                        header: "IC\u2013DH; DH\u2013IC\u2013DH post-spectral",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29735 */.n7[29735]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "No buffs",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29767 */.n7[29767]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "DH\u2013IC\u2013DH",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29770 */.n7[29770]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    }
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Pre-spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "Can blind DH Chrome Hammerheads at <20s."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Spectral"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    paragraph: true,
                                    children: [
                                        "Hook ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                            strength: 2
                                        }),
                                        " and ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                            strength: 3
                                        }),
                                        ". If you catch a Sweeper, can use IC if high on GP. ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                            strength: 3
                                        }),
                                        " is a blind DH."
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Post-spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "Can blind DH Chrome Hammerheads."
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const ocean_fishing_AchievementSharks = (AchievementSharks);

;// CONCATENATED MODULE: ./src/ocean-fishing/macros/jellyfish.ffmacro
/* harmony default export */ const jellyfish_ffmacro = ("/micon Cast\n/ac Cast\n<wait.5>\n/echo 5 - Recast <se.4>\n<wait.2>\n/echo 6 - Saucer! <se.3>\n");
;// CONCATENATED MODULE: ./src/ocean-fishing/AchievementJellyfish.tsx














const AchievementJellyfish = ({ route  })=>{
    const stopTimes = (0,ffxiv_ocean_fishing/* getStopTimes */.y)(route);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_AchievementInformation, {
        achievement: 2565,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCardsContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_StopCard, {
                        index: 0,
                        stopTime: stopTimes[0],
                        children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                paragraph: true,
                                children: "No jellyfish here. Collect some Angler\u2019s Art!"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                        index: 1,
                        stopTime: stopTimes[1],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                    baitGroups: [
                                        {
                                            header: "DH at <5s",
                                            baitGroupProps: {
                                                ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29739 */.n7[29739]),
                                                subtext: utils/* subtextDH */.TW
                                            }
                                        },
                                        {
                                            header: "IC\u2013DH at \u22654s",
                                            baitGroupProps: {
                                                ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29757 */.n7[29757]),
                                                subtext: utils/* subtextDH */.TW
                                            }
                                        }
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                        paragraph: true,
                                        children: [
                                            "Spectral current is ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                children: "bad"
                                            }),
                                            ". You may opt for no spectral here for an extended one in the next zone."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "overline",
                                        children: "Non-spectral"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                        paragraph: true,
                                        children: [
                                            "Blind DH all ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                                strength: 1
                                            }),
                                            " before 5s, and recast after 5s. IC is not necessary."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "overline",
                                        children: "Spectral"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        paragraph: true,
                                        children: "It is possible to blind DH Sea Nettles at \u22656s."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                        index: 2,
                        stopTime: stopTimes[2],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                    baitGroups: [
                                        {
                                            header: "DH\u2013IC\u2013DH at \u22656s",
                                            baitGroupProps: {
                                                ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29762 */.n7[29762]),
                                                subtext: utils/* subtextDH */.TW
                                            }
                                        }
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "overline",
                                        children: "Spectral"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        paragraph: true,
                                        children: "Nothing to say here."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                paragraph: true,
                children: "Sample jellyfish macro"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Highlight/* default */.Z, {
                language: "plaintext",
                children: jellyfish_ffmacro
            })
        ]
    });
};
/* harmony default export */ const ocean_fishing_AchievementJellyfish = (AchievementJellyfish);

;// CONCATENATED MODULE: ./src/ocean-fishing/macros/seadragons.ffmacro
/* harmony default export */ const seadragons_ffmacro = ("/micon Cast\n/ac Cast\n<wait.7>\n/echo 7 - Coral Seadragon! <se.2>\n<wait.2>\n/echo 9 - Shaggy? <se.1>\n<wait.3>\n/echo 12 - Shaggy! (Sunfly/Bomb Gone!) <se.2>\n<wait.5>\n/echo 17 - Recast! (Butterfly Appears!) <se.2>\n");
;// CONCATENATED MODULE: ./src/ocean-fishing/AchievementSeadragons.tsx













const AchievementSeadragons = ({ route  })=>{
    const stopTimes = (0,ffxiv_ocean_fishing/* getStopTimes */.y)(route);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_AchievementInformation, {
        achievement: 2566,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCardsContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                        index: 0,
                        stopTime: stopTimes[0],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                    baitGroups: [
                                        {
                                            header: "IC\u2013DH at 9-16s",
                                            baitGroupProps: {
                                                ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29740 */.n7[29740]),
                                                subtext: utils/* subtextDH */.TW
                                            }
                                        },
                                        {
                                            header: "No buffs",
                                            baitGroupProps: {
                                                ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29763 */.n7[29763]),
                                                subtext: utils/* subtextDH */.TW
                                            }
                                        }
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "overline",
                                        children: "Non-spectral"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        paragraph: true,
                                        children: "Clouds and Fog weather will remove Shaggy Seadragons."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        paragraph: true,
                                        children: "Note: with Ragworm, blind DH at 10-16s is possible."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "overline",
                                        children: "Spectral"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        paragraph: true,
                                        children: "Spectral is bad. Sit on IC if you have it going into spectral instead of catching Aetheric Seadragons."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_StopCard, {
                        index: 1,
                        stopTime: stopTimes[1],
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "No seadragons here. Collect some Angler\u2019s Art!"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "You may opt for no spectral here for an extended one in the next zone."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                        index: 2,
                        stopTime: stopTimes[2],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                    baitGroups: [
                                        {
                                            header: "DH\u2013IC\u2013DH at \u22657s",
                                            baitGroupProps: {
                                                ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29764 */.n7[29764]),
                                                subtext: utils/* subtextDH */.TW
                                            }
                                        }
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "overline",
                                        children: "Spectral"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        paragraph: true,
                                        children: "You can go for the safer IC\u2013DH instead."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                paragraph: true,
                children: "Sample seadragons macro"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Highlight/* default */.Z, {
                language: "plaintext",
                children: seadragons_ffmacro
            })
        ]
    });
};
/* harmony default export */ const ocean_fishing_AchievementSeadragons = (AchievementSeadragons);

;// CONCATENATED MODULE: ./src/ocean-fishing/AchievementBalloons.tsx












const AchievementBalloons = ({ route  })=>{
    const stopTimes = (0,ffxiv_ocean_fishing/* getStopTimes */.y)(route);
    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_AchievementInformation, {
        achievement: 2754,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCardsContainer, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                    index: 0,
                    stopTime: stopTimes[0],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                baitGroups: [
                                    {
                                        header: "IC\u2013DH at 5-11s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32057 */.n7[32057]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "DH at <3s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32066 */.n7[32066]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    }
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Non-spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "In general, IC\u2013DH when possible and don\u2019t rely heavily on spectrals."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Spectral"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    paragraph: true,
                                    children: [
                                        "Only the instant ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                            strength: 1
                                        }),
                                        " is Mythril Boxfish. Anomalocaris Saron appears at 5s."
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                    index: 1,
                    stopTime: stopTimes[1],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                baitGroups: [
                                    {
                                        header: "IC\u2013DH at 12-16s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29732 */.n7[29732]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "IC\u2013DH at \u22653s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29768 */.n7[29768]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    }
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "You may opt for no spectral here for an extended one in the next zone."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Non-spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "Lampfish is possibly a blind DH, but it is usually not worth trying."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Spectral"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    paragraph: true,
                                    children: [
                                        "Can blind DH Silencers at >3s. The instant ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                            strength: 1
                                        }),
                                        " are Aronnaxes."
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                    index: 2,
                    stopTime: stopTimes[2],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                baitGroups: [
                                    {
                                        header: "No buffs at 3-6s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32095 */.n7[32095]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "DH at \u226514s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32098 */.n7[32098]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "IC\u2013DH at <3s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32105 */.n7[32105]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "IC\u2013DH at 3-5s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32109 */.n7[32109]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    }
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Non-spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "Save GP when possible to blind DH Honeycomb Fish."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "Switch to Krill to go for both Garum Jugs and Pearl Bombfish."
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const ocean_fishing_AchievementBalloons = (AchievementBalloons);

;// CONCATENATED MODULE: ./src/ocean-fishing/AchievementCrabs.tsx











const AchievementCrabs = ({ route  })=>{
    const stopTimes = (0,ffxiv_ocean_fishing/* getStopTimes */.y)(route);
    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_AchievementInformation, {
        achievement: 2755,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCardsContainer, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                    index: 0,
                    stopTime: stopTimes[0],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                baitGroups: [
                                    {
                                        header: "IC\u2013DH at 6-12s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32055 */.n7[32055]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "IC\u2013DH at 2-3s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32065 */.n7[32065]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    }
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Non-spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "In general, IC\u2013DH when possible and don\u2019t rely heavily on spectrals. Tortoiseshell Crab can be a blind DH."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "Can blind DH Titanshell Crabs at <3s."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                    index: 1,
                    stopTime: stopTimes[1],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                baitGroups: [
                                    {
                                        header: "IC\u2013DH at 10-16s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29741 */.n7[29741]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "IC\u2013DH at 5-6s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.29777 */.n7[29777]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    }
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "You may opt for no spectral here for an extended one in the next zone."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "Bartholomew the Chopper is not generally safe to blind DH."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                    index: 2,
                    stopTime: stopTimes[2],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                baitGroups: [
                                    {
                                        header: "No buffs at 3-7s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32075 */.n7[32075]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "DH at \u226516s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32079 */.n7[32079]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "No Buffs at <3s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32085 */.n7[32085]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "IC\u2013DH at \u22655s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32090 */.n7[32090]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    }
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Non-spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "Save GP when possible to blind DH Bloodpolish Crabs."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "Can blind DH Exterminators at \u22655s."
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const ocean_fishing_AchievementCrabs = (AchievementCrabs);

;// CONCATENATED MODULE: ./src/ocean-fishing/AchievementMantas.tsx












const AchievementMantas = ({ route  })=>{
    const stopTimes = (0,ffxiv_ocean_fishing/* getStopTimes */.y)(route);
    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_AchievementInformation, {
        achievement: 2756,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCardsContainer, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                    index: 0,
                    stopTime: stopTimes[0],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                baitGroups: [
                                    {
                                        header: "DH; DH\u2013IC\u2013DH post-spectral at 11-21s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32058 */.n7[32058]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    },
                                    {
                                        header: "DH at <3s",
                                        baitGroupProps: {
                                            ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32070 */.n7[32070]),
                                            subtext: utils/* subtextDH */.TW
                                        }
                                    }
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Pre-spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "IC or blind DH if capped, but save GP for spectral current."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Spectral"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    paragraph: true,
                                    children: [
                                        "Only the instant ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                            strength: 3
                                        }),
                                        " is Jetborne Manta. Callichthyid appears at 4s."
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Post-spectral"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    paragraph: true,
                                    children: "Spend all remaining GP on mantas."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_StopCard, {
                    index: 1,
                    stopTime: stopTimes[1],
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                paragraph: true,
                                children: "No mantas here."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                paragraph: true,
                                children: "You may opt for no spectral here for an extended one in the next zone."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ocean_fishing_StopCard, {
                    index: 2,
                    stopTime: stopTimes[2],
                    children: [
                        stopTimes[2] === "BN" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                        baitGroups: [
                                            {
                                                header: "DH at \u22655s",
                                                baitGroupProps: {
                                                    ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32087 */.n7[32087]),
                                                    subtext: utils/* subtextDH */.TW
                                                }
                                            }
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "overline",
                                            children: "Spectral"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                            paragraph: true,
                                            children: [
                                                "Reel any ",
                                                /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                                    strength: 2
                                                }),
                                                ". Beatific Visions and Gory Tuna go away at 5s. Use IC\u2013DH if it\u2019s all you need, instead of hoping for more blind DHs."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        stopTimes[2] === "TD" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitList, {
                                        baitGroups: [
                                            {
                                                header: "DH at \u22655s",
                                                baitGroupProps: {
                                                    ...(0,utils/* getBaitGroup */.S5)(data/* fishes.32111 */.n7[32111]),
                                                    subtext: utils/* subtextDH */.TW
                                                }
                                            }
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "overline",
                                            children: "Spectral"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                            paragraph: true,
                                            children: [
                                                "Reel any ",
                                                /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                                    strength: 2
                                                }),
                                                ". Smooth Jaguars go away at 5s. Use IC\u2013DH if it\u2019s all you need, instead of hoping for more blind DHs."
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            paragraph: true,
                                            children: "Note: It is not worth mooching Rothlyt Mussels for Panoptes if you happen to catch one. Recast instead."
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const ocean_fishing_AchievementMantas = (AchievementMantas);

;// CONCATENATED MODULE: ./src/ocean-fishing/AchievementsInformation.tsx










const AchievementsInformation = ({ route  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: maps/* ACHIEVEMENTS_MAP */.T$[route].map((achievement)=>{
            switch(achievement.id){
                case 2563:
                    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_AchievementOctopodes, {
                        route: route
                    }, achievement.id);
                case 2564:
                    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_AchievementSharks, {
                        route: route
                    }, achievement.id);
                case 2565:
                    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_AchievementJellyfish, {
                        route: route
                    }, achievement.id);
                case 2566:
                    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_AchievementSeadragons, {
                        route: route
                    }, achievement.id);
                case 2754:
                    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_AchievementBalloons, {
                        route: route
                    }, achievement.id);
                case 2755:
                    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_AchievementCrabs, {
                        route: route
                    }, achievement.id);
                case 2756:
                    return /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_AchievementMantas, {
                        route: route
                    }, achievement.id);
                default:
                    return null;
            }
        })
    });
};
/* harmony default export */ const ocean_fishing_AchievementsInformation = (/*#__PURE__*/external_react_default().memo(AchievementsInformation));

;// CONCATENATED MODULE: ./pages/ocean-fishing/index.tsx












const ChecklistContext = /*#__PURE__*/ external_react_default().createContext({
    checklist: [],
    setChecklist: ()=>{}
});
const OceanFishing = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("ocean-fishing");
    const { 0: now1 , 1: setNow  } = (0,external_react_.useState)(new Date());
    const { 0: selectedRoute , 1: setSelectedRoute  } = (0,external_react_.useState)(null) // This is initialized when UpcomingVoyages is mounted
    ;
    const { 0: checklist , 1: setChecklist  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        let interval;
        (function loop() {
            const now = new Date();
            setNow(now);
            interval = setTimeout(loop, 60000 - now.getTime() % 60000);
        })();
        if (false) {}
        return ()=>{
            clearTimeout(interval);
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        checklist
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Page/* default */.Z, {
        title: t("_title"),
        description: t("_description"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavigationBar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ChecklistContext.Provider, {
                value: {
                    checklist: checklist ?? [],
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
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                paragraph: true,
                                sx: {
                                    display: "none"
                                },
                                children: [
                                    "I\u2019ve also made a Chrome Extension for adding ocean fishes to the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                                        href: "https://ff14fish.carbuncleplushy.com/",
                                        children: "Carbuncle Plushy FFX|V Fish Tracker App"
                                    }),
                                    " available on the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                                        href: "https://chrome.google.com/webstore/detail/add-ocean-fish-to-ff14-fi/oihefgmncbnicjmcdccjflagboaidenh",
                                        children: "Chrome Web Store"
                                    }),
                                    "."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_UpcomingVoyages, {
                        now: now1,
                        checklist: checklist,
                        onSelectRoute: setSelectedRoute
                    }),
                    selectedRoute !== null && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_RouteInformation, {
                                now: now1,
                                route: selectedRoute
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_AchievementsInformation, {
                                route: selectedRoute
                            })
                        ]
                    })
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
/* harmony default export */ const ocean_fishing = (OceanFishing);


/***/ }),

/***/ 2072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ocean_fishing_BaitGroup)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/icons-material/ChevronRight"
var ChevronRight_ = __webpack_require__(2818);
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_);
// EXTERNAL MODULE: ./src/ocean-fishing/OceanFishIcon.tsx + 3 modules
var OceanFishIcon = __webpack_require__(4994);
// EXTERNAL MODULE: ./src/ocean-fishing/Tug.tsx
var Tug = __webpack_require__(6182);
// EXTERNAL MODULE: ./src/ocean-fishing/StarBadge.tsx
var StarBadge = __webpack_require__(2124);
;// CONCATENATED MODULE: ./src/ocean-fishing/BaitChain.tsx








const BaitChain = (props)=>{
    const { baits , baitIsRequired =false , subtext , small =false  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            display: "inline",
            "& > *": {
                verticalAlign: "middle"
            }
        },
        children: baits.map((link, index)=>{
            if (link.bait !== undefined) {
                const { bait  } = link;
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            display: "inline-block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(OceanFishIcon/* default */.Z, {
                                type: "bait",
                                id: bait.id,
                                size: small ? 34 : 40,
                                badge: baitIsRequired && /*#__PURE__*/ jsx_runtime_.jsx(StarBadge/* default */.Z, {})
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((ChevronRight_default()), {
                            sx: {
                                mx: -0.5
                            }
                        })
                    ]
                }, bait.id);
            } else {
                const { fish , tug  } = link;
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            display: "inline-block",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(OceanFishIcon/* default */.Z, {
                                    type: "fish",
                                    id: fish.id,
                                    size: small ? 34 : 40,
                                    badge: tug !== null && /*#__PURE__*/ jsx_runtime_.jsx(Tug/* default */.Z, {
                                        size: "small",
                                        strength: tug
                                    })
                                }),
                                subtext !== undefined && index === baits.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    display: "inline",
                                    ml: 2,
                                    children: typeof subtext === "function" ? subtext(fish) : subtext
                                })
                            ]
                        }),
                        index < baits.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx((ChevronRight_default()), {
                            sx: {
                                mx: -0.5
                            }
                        })
                    ]
                }, fish.id);
            }
        })
    });
};
/* harmony default export */ const ocean_fishing_BaitChain = (BaitChain);

;// CONCATENATED MODULE: ./src/ocean-fishing/BaitGroup.tsx





const BaitGroup = (props)=>{
    const { baits: baits1 , baitIsRequired: baitIsRequired1 = false , intuitionFishes , subtext , mainOnly =false  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitChain, {
                baits: baits1,
                baitIsRequired: baitIsRequired1,
                subtext: subtext
            }),
            intuitionFishes !== undefined && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                component: "ul",
                sx: {
                    listStyleType: "none",
                    pl: 1
                },
                children: intuitionFishes.map(({ baits , baitIsRequired , count  }, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        component: "li",
                        sx: {
                            "& > *": {
                                verticalAlign: "middle"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                display: "inline",
                                children: [
                                    count,
                                    "\xd7\xa0"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_BaitChain, {
                                small: true,
                                baits: baits,
                                baitIsRequired: baitIsRequired,
                                subtext: mainOnly ? undefined : subtext
                            })
                        ]
                    }, index)
                )
            })
        ]
    });
};
/* harmony default export */ const ocean_fishing_BaitGroup = (BaitGroup);


/***/ }),

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_ocean_fishing_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5899);





const ChecklistCheckmark = ({ fishId: fishId1  })=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_ocean_fishing_index__WEBPACK_IMPORTED_MODULE_4__.ChecklistContext.Consumer, {
        children: ({ checklist , setChecklist  })=>{
            const checked = checklist.includes(fishId1);
            const toggleFish = (fishId)=>{
                if (checklist.includes(fishId)) {
                    const newChecklist = checklist.slice();
                    newChecklist.splice(newChecklist.findIndex((id)=>id === fishId
                    ), 1);
                    setChecklist(newChecklist);
                } else {
                    const newChecklist = checklist.slice();
                    newChecklist.push(fishId);
                    newChecklist.sort((a, b)=>a - b
                    );
                    setChecklist(newChecklist);
                }
            };
            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default()), {
                onClick: toggleFish.bind(null, fishId1),
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3___default()), {
                    sx: {
                        color: checked ? "success.main" : "inherit",
                        opacity: checked ? 1 : 0.33
                    }
                })
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChecklistCheckmark);


/***/ }),

/***/ 6119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _OceanFishIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4994);
/* harmony import */ var _TimeIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69);
/* harmony import */ var _Tug__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6182);
/* harmony import */ var _StarBadge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2124);
/* harmony import */ var _ChecklistCheckmark__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(42);
/* harmony import */ var _skywatcher_WeatherIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2203);
/* harmony import */ var _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7576);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3440);
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9465);





















const BAIT_IDS = [
    29714,
    29715,
    29716,
    29717,
    2587,
    2591,
    2603,
    2613,
    2619,
    27590,
    29722,
    29761,
    29718,
    32107
];
function getValidBaits(fishingSpots) {
    return BAIT_IDS.filter((baitId)=>{
        for (const fishingSpot of fishingSpots){
            for (const fish of fishingSpot.fishes){
                if (fish.biteTimes[baitId] != null) {
                    return true;
                }
            }
        }
        return false;
    });
}
function formatDH(doubleHook) {
    return Array.isArray(doubleHook) ? doubleHook.join("\u2011") : String(doubleHook);
}
const FishTable = ({ fishingSpots , time: time1  })=>{
    const { t , i18n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("ocean-fishing");
    const { 0: bait , 1: setBait  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all");
    const locale = i18n.language;
    const handleSelectBait = (event)=>{
        const baitId = event.target.value === "all" ? "all" : +event.target.value;
        setBait(baitId);
    };
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default()), {
        sx: {
            "& td": {
                p: 0.5
            }
        },
        children: fishingSpots.map((fishingSpot)=>{
            const isSpectral = /spectral/i.test(fishingSpot.placeName.name.en);
            return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_6___default()), {
                        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default()), {
                            children: [
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    colSpan: 3,
                                    align: "center",
                                    children: t("fish")
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    align: "center",
                                    children: t("fishInfo.bait")
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    align: "center",
                                    children: t("fishInfo.tug")
                                }),
                                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    align: "center",
                                    children: [
                                        t("fishInfo.biteTime"),
                                        ":\xa0",
                                        /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            variant: "standard",
                                            value: String(bait),
                                            onChange: handleSelectBait,
                                            sx: {
                                                "& .MuiInputBase-input": {
                                                    p: 0
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    value: "all",
                                                    children: t("fishInfo.allBaits")
                                                }),
                                                getValidBaits(fishingSpots).map((baitId)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                        value: baitId,
                                                        children: (0,_translate__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(locale, _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_18__/* .baits */ .OZ[baitId] || _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_18__/* .fishes */ .n7[baitId], "name")
                                                    }, baitId)
                                                )
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    align: "center",
                                    children: t("fishInfo.points")
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    align: "center",
                                    children: t("fishInfo.doubleHook")
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    align: "center",
                                    children: t(`fishInfo.${isSpectral ? "timeOfDay" : "weather"}`)
                                }),
                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    align: "center",
                                    children: t("fishInfo.category")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_7___default()), {
                        children: fishingSpot.fishes.map((fish1)=>{
                            var ref5, ref1, ref2, ref3;
                            const spreadsheetData = fish1.spreadsheetData;
                            const isUnavailable = time1 !== undefined && spreadsheetData.time !== null && !spreadsheetData.time.includes(time1);
                            return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default()), {
                                hover: true,
                                sx: {
                                    opacity: isUnavailable ? 0.5 : 1
                                },
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        align: "center",
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChecklistCheckmark__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                            fishId: fish1.id
                                        })
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OceanFishIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            type: "fish",
                                            id: fish1.id
                                        })
                                    }),
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        children: [
                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                children: (0,_translate__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(locale, fish1, "name")
                                            }),
                                            spreadsheetData.stars !== null && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                sx: {
                                                    mt: "-0.125em",
                                                    opacity: 0.5
                                                },
                                                children: "\u2605".repeat(spreadsheetData.stars)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        align: "center",
                                        sx: {
                                            whiteSpace: "nowrap",
                                            "& > *": {
                                                verticalAlign: "middle"
                                            }
                                        },
                                        children: [
                                            spreadsheetData.intuition !== null && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    spreadsheetData.intuition.map(({ fish , count  }, index)=>/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                                                            children: [
                                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                    display: "inline",
                                                                    children: index === 0 ? `${count}×` : `, ${count}×`
                                                                }),
                                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OceanFishIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                    type: "fish",
                                                                    id: fish.id
                                                                })
                                                            ]
                                                        }, fish.id)
                                                    ),
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/images/ocean-fishing/fishers-intuition.png"
                                                    })
                                                ]
                                            }),
                                            spreadsheetData.bait !== null && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OceanFishIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                type: "bait",
                                                id: spreadsheetData.bait.id,
                                                badge: (0,_utils__WEBPACK_IMPORTED_MODULE_19__/* .isBaitRequired */ .zf)(fish1, spreadsheetData.bait) && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StarBadge__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                                            }),
                                            spreadsheetData.bait !== null && spreadsheetData.mooch !== null && "or",
                                            spreadsheetData.mooch !== null && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OceanFishIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                type: "fish",
                                                id: spreadsheetData.mooch.id
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        align: "center",
                                        children: spreadsheetData.tug !== null && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tug__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            size: "large",
                                            strength: spreadsheetData.tug
                                        })
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        align: "center",
                                        children: fish1.biteTimes[bait] !== null && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            children: ((ref5 = fish1.biteTimes[bait]) === null || ref5 === void 0 ? void 0 : ref5[0]) === ((ref1 = fish1.biteTimes[bait]) === null || ref1 === void 0 ? void 0 : ref1[1]) ? (ref2 = fish1.biteTimes[bait]) === null || ref2 === void 0 ? void 0 : ref2[0] : (ref3 = fish1.biteTimes[bait]) === null || ref3 === void 0 ? void 0 : ref3.join("\u2011")
                                        })
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        align: "center",
                                        children: spreadsheetData.points !== null && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            children: spreadsheetData.points
                                        })
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        align: "center",
                                        sx: {
                                            whiteSpace: "nowrap"
                                        },
                                        children: spreadsheetData.doubleHook !== null && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            children: [
                                                formatDH(spreadsheetData.doubleHook),
                                                spreadsheetData.tripleHook !== null && /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        "\u2003(",
                                                        formatDH(spreadsheetData.tripleHook),
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        align: "center",
                                        sx: {
                                            whiteSpace: "nowrap"
                                        },
                                        children: (()=>{
                                            if (isSpectral) {
                                                var ref, ref4;
                                                return ((ref = spreadsheetData.time) === null || ref === void 0 ? void 0 : ref.length) === 3 ? "Any" : (ref4 = spreadsheetData.time) === null || ref4 === void 0 ? void 0 : ref4.map((time)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TimeIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                        time: time
                                                    }, time)
                                                );
                                            } else {
                                                if (spreadsheetData.weathers === null) return null;
                                                switch(spreadsheetData.weathers.type){
                                                    case "ALL":
                                                        return "Any";
                                                    case "OK":
                                                        return spreadsheetData.weathers.list.map((weather)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skywatcher_WeatherIcon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                                weather: weather
                                                            }, weather)
                                                        );
                                                    case "NOT OK":
                                                        return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                    component: "span",
                                                                    sx: {
                                                                        verticalAlign: "middle"
                                                                    },
                                                                    children: "Not\xa0"
                                                                }),
                                                                spreadsheetData.weathers.list.map((weather)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skywatcher_WeatherIcon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                                        weather: weather
                                                                    }, weather)
                                                                )
                                                            ]
                                                        });
                                                }
                                            }
                                        })()
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        align: "center",
                                        children: fish1.contentBonus !== null && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OceanFishIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            type: "content-bonus",
                                            id: fish1.contentBonus.id,
                                            size: 32
                                        })
                                    })
                                ]
                            }, fish1.id);
                        })
                    })
                ]
            }, fishingSpot.id);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FishTable);


/***/ }),

/***/ 4994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ocean_fishing_OceanFishIcon)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@mui/material/Popper"
var Popper_ = __webpack_require__(517);
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_);
// EXTERNAL MODULE: external "@mui/material/ClickAwayListener"
var ClickAwayListener_ = __webpack_require__(5371);
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(319);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
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
;// CONCATENATED MODULE: ./src/ocean-fishing/ItemIcon.tsx



const ItemIcon = ({ src  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            display: "inline-block",
            position: "relative",
            width: 152,
            height: 152,
            verticalAlign: "middle"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 152,
                    height: 152,
                    backgroundImage: 'url("/images/ocean-fishing/item-socket-lg.png")',
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                component: "img",
                src: src,
                sx: {
                    position: "absolute",
                    top: 6,
                    left: 12,
                    width: 128,
                    height: 128
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 152,
                    height: 152,
                    backgroundImage: 'url("/images/ocean-fishing/item-cover-lg.png")',
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat"
                }
            })
        ]
    });
};
/* harmony default export */ const ocean_fishing_ItemIcon = (/*#__PURE__*/external_react_default().memo(ItemIcon));

// EXTERNAL MODULE: ./src/ocean-fishing/TimeIcon.tsx
var TimeIcon = __webpack_require__(69);
// EXTERNAL MODULE: ./src/ocean-fishing/BaitGroup.tsx + 1 modules
var BaitGroup = __webpack_require__(2072);
// EXTERNAL MODULE: ./src/ocean-fishing/ChecklistCheckmark.tsx
var ChecklistCheckmark = __webpack_require__(42);
// EXTERNAL MODULE: ./src/Link.tsx
var Link = __webpack_require__(7255);
// EXTERNAL MODULE: ./src/skywatcher/WeatherIcon.tsx + 1 modules
var WeatherIcon = __webpack_require__(2203);
// EXTERNAL MODULE: ./src/ocean-fishing/utils.ts
var utils = __webpack_require__(3440);
// EXTERNAL MODULE: ./src/translate.ts
var translate = __webpack_require__(9465);
;// CONCATENATED MODULE: ./src/ocean-fishing/OceanFishPopper.tsx



















function getImgUrl(fish) {
    if (fish.lodestoneData !== null) {
        return `https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/${fish.lodestoneData.icon_lg.slice(0, 2)}/${fish.lodestoneData.icon_lg}.png`;
    } else {
        // Fallback to XIVAPI's icons
        return `https://xivapi.com/i/${`000000${fish.icon - fish.icon % 1000}`.slice(-6)}/${`000000${fish.icon}`.slice(-6)}.png`;
    }
}
const OceanFishPopper = ({ fish  })=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("ocean-fishing");
    const spreadsheetData = fish.spreadsheetData;
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        boxShadow: 8,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
            variant: "outlined",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                    avatar: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_ItemIcon, {
                        src: getImgUrl(fish)
                    }),
                    title: (0,translate/* default */.Z)(locale, fish, "name"),
                    titleTypographyProps: {
                        variant: "h6",
                        paragraph: true
                    },
                    subheader: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            fish.lodestoneData !== null && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                                    href: `https://na.finalfantasyxiv.com/lodestone/playguide/db/item/${fish.lodestoneData.item}/`,
                                    children: "Lodestone"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
                                    href: `https://ffxivteamcraft.com/db/${locale}/item/${fish.id}`,
                                    children: "Teamcraft"
                                })
                            })
                        ]
                    }),
                    action: /*#__PURE__*/ jsx_runtime_.jsx(ChecklistCheckmark/* default */.Z, {
                        fishId: fish.id
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(BaitGroup/* default */.Z, {
                        ...(0,utils/* getBaitGroup */.S5)(fish),
                        subtext: utils/* subtextBiteTime */.K
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Table_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableBody_default()), {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            variant: "head",
                                            children: t("fishInfo.rating")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: spreadsheetData.stars !== null ? "\u2605".repeat(spreadsheetData.stars) : "?"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            variant: "head",
                                            children: t("fishInfo.points")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: spreadsheetData.points !== null ? spreadsheetData.points : "?"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            variant: "head",
                                            children: t("fishInfo.doubleHook")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: spreadsheetData.doubleHook !== null ? Array.isArray(spreadsheetData.doubleHook) ? spreadsheetData.doubleHook.join("-") : spreadsheetData.doubleHook : "?"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            variant: "head",
                                            children: t("fishInfo.tripleHook")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: spreadsheetData.tripleHook !== null ? Array.isArray(spreadsheetData.tripleHook) ? spreadsheetData.tripleHook.join("-") : spreadsheetData.tripleHook : "?"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            variant: "head",
                                            children: t("fishInfo.weather")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: spreadsheetData.weathers !== null ? (()=>{
                                                switch(spreadsheetData.weathers.type){
                                                    case "ALL":
                                                        return "Any";
                                                    case "OK":
                                                        return spreadsheetData.weathers.list.map((weather)=>/*#__PURE__*/ jsx_runtime_.jsx(WeatherIcon/* default */.Z, {
                                                                weather: weather
                                                            }, weather)
                                                        );
                                                    case "NOT OK":
                                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    style: {
                                                                        verticalAlign: "middle"
                                                                    },
                                                                    children: "Not "
                                                                }),
                                                                spreadsheetData.weathers.list.map((weather)=>/*#__PURE__*/ jsx_runtime_.jsx(WeatherIcon/* default */.Z, {
                                                                        weather: weather
                                                                    }, weather)
                                                                )
                                                            ]
                                                        });
                                                }
                                            })() : "?"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            variant: "head",
                                            children: t("fishInfo.timeOfDay")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "center",
                                            children: spreadsheetData.time !== null ? spreadsheetData.time.length === 3 ? "Any" : spreadsheetData.time.map((time)=>/*#__PURE__*/ jsx_runtime_.jsx(TimeIcon/* default */.Z, {
                                                    time: time
                                                }, time)
                                            ) : "?"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const ocean_fishing_OceanFishPopper = (OceanFishPopper);

// EXTERNAL MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/index.ts + 9 modules
var data = __webpack_require__(7576);
;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/icons-map.json
const icons_map_namespaceObject = JSON.parse('[["fish_28937","fish_28938","fish_29723","fish_29719","fish_28942","fish_28939","fish_29734","fish_29721","fish_29784","fish_29744"],["fish_29766","fish_29749","fish_29750","fish_29754","fish_29752","fish_29753","fish_29751","fish_29782","fish_29756","fish_29788"],["fish_29722","fish_29739","fish_28941","fish_29724","fish_29740","fish_29725","fish_29726","fish_29727","fish_29785","fish_29745"],["fish_29757","fish_29758","fish_29759","fish_29779","fish_29761","fish_29760","fish_29763","fish_29755","fish_29765","fish_29789"],["fish_29736","fish_29737","fish_29738","fish_29718","fish_28940","fish_29741","fish_29720","fish_29743","fish_29786","fish_29747"],["fish_29748","fish_29776","fish_29777","fish_29778","fish_29773","fish_29771","fish_29781","fish_29764","fish_29783","fish_29791"],["fish_29728","fish_29729","fish_29730","fish_29731","fish_29735","fish_29733","fish_29742","fish_29732","fish_29787","fish_29746"],["fish_29775","fish_29767","fish_29768","fish_29769","fish_29770","fish_29762","fish_29772","fish_29780","fish_29774","fish_29790"],["fish_32055","fish_32056","fish_32057","fish_32058","fish_32059","fish_32060","fish_32061","fish_32062","fish_32063","fish_32064"],["fish_32065","fish_32066","fish_32067","fish_32068","fish_32069","fish_32070","fish_32071","fish_32072","fish_32073","fish_32074"],["fish_32075","fish_32076","fish_32077","fish_32078","fish_32079","fish_32080","fish_32081","fish_32082","fish_32083","fish_32084"],["fish_32085","fish_32086","fish_32087","fish_32088","fish_32089","fish_32090","fish_32091","fish_32092","fish_32093","fish_32094"],["fish_32095","fish_32096","fish_32097","fish_32098","fish_32099","fish_32100","fish_32101","fish_32102","fish_32103","fish_32104"],["fish_32105","fish_32106","fish_32107","fish_32108","fish_32109","fish_32110","fish_32111","fish_32112","fish_32113","fish_32114"],["bait_2587","bait_2591","bait_2603","bait_2613","bait_2619","bait_27590","bait_29714","bait_29715","bait_29716","bait_29717"],["achievement_2553","achievement_2554","achievement_2556","achievement_2555","achievement_2748","achievement_2751","achievement_2749","achievement_2752","achievement_2750","achievement_2753"],["achievement_2557","achievement_2558","achievement_2559","achievement_2757","achievement_2758","achievement_2560","achievement_2561","achievement_2562","achievement_2759","achievement_2563"],["achievement_2564","achievement_2565","achievement_2566","achievement_2754","achievement_2755","achievement_2756"],["content-bonus_17","content-bonus_18","content-bonus_19","content-bonus_1","content-bonus_2","content-bonus_3","content-bonus_4","content-bonus_5","content-bonus_6","content-bonus_7"],["content-bonus_23","content-bonus_24","content-bonus_8","content-bonus_25","content-bonus_26","content-bonus_31","content-bonus_32","content-bonus_33","content-bonus_9","content-bonus_27"],["content-bonus_28","content-bonus_10","content-bonus_29","content-bonus_30","content-bonus_34","content-bonus_35","content-bonus_36","content-bonus_37","content-bonus_38","content-bonus_39"],["content-bonus_11","content-bonus_12","content-bonus_13","content-bonus_14","content-bonus_15","content-bonus_16","content-bonus_20","content-bonus_21","content-bonus_22"]]');
;// CONCATENATED MODULE: ./src/ocean-fishing/OceanFishIcon.tsx











const ICON_ROWS = icons_map_namespaceObject.length;
const ICON_COLS = Math.max(...icons_map_namespaceObject.map((row1)=>row1.length
));
const BACKGROUND_POSITIONS = {};
for(let row = 0; row < ICON_ROWS; ++row){
    for(let col = 0; col < icons_map_namespaceObject[row].length; ++col){
        BACKGROUND_POSITIONS[icons_map_namespaceObject[row][col]] = `${col * -100}% ${row * -100}%`;
    }
}
const OceanFishIcon = ({ type , id , size =40 , badge , sx  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)();
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    const locale = i18n.language;
    const handleClick = (event)=>{
        if (type === "fish" && anchorEl === null) {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClickAway = ()=>{
        setAnchorEl(null);
    };
    let tooltip;
    switch(type){
        case "fish":
            tooltip = (0,translate/* default */.Z)(locale, data/* fishes */.n7[id], "name");
            break;
        case "bait":
            tooltip = (0,translate/* default */.Z)(locale, data/* baits */.OZ[id], "name");
            break;
        case "achievement":
            tooltip = (0,translate/* default */.Z)(locale, data/* achievements */.EF[id], "name");
            break;
        case "content-bonus":
            tooltip = (0,translate/* default */.Z)(locale, data/* contentBonuses */.ez[id], "objective");
            break;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: [
                    {
                        display: "inline-block",
                        position: "relative",
                        margin: 0.1,
                        verticalAlign: "middle"
                    },
                    ...Array.isArray(sx) ? sx : [
                        sx
                    ]
                ],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: tooltip,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            onClick: handleClick,
                            sx: {
                                width: size * 1.2,
                                height: size * 1.2
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        position: "absolute",
                                        top: size * 0.1,
                                        left: size * 0.1,
                                        width: size,
                                        height: size,
                                        backgroundImage: 'url("/images/ocean-fishing/icons.png")',
                                        backgroundSize: `${ICON_COLS * 100}% ${ICON_ROWS * 100}%`
                                    },
                                    style: {
                                        backgroundPosition: BACKGROUND_POSITIONS[`${type}_${id}`]
                                    }
                                }),
                                (type === "fish" || type === "bait") && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        position: "absolute",
                                        top: size * 0.05,
                                        left: 0,
                                        width: size * 1.2,
                                        height: size * 1.2,
                                        backgroundImage: 'url("/images/ocean-fishing/item-cover.png")',
                                        backgroundSize: "100% 100%"
                                    }
                                }),
                                type === "achievement" && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: size * 1.2,
                                        height: size * 1.2,
                                        backgroundImage: 'url("/images/ocean-fishing/achievement-cover.png")',
                                        backgroundSize: "100% 100%"
                                    }
                                })
                            ]
                        })
                    }),
                    badge !== undefined && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            position: "absolute",
                            top: -5,
                            left: "100%",
                            ml: "-10px"
                        },
                        children: badge
                    })
                ]
            }),
            type === "fish" && /*#__PURE__*/ jsx_runtime_.jsx((Popper_default()), {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                placement: "bottom-start",
                children: /*#__PURE__*/ jsx_runtime_.jsx((ClickAwayListener_default()), {
                    onClickAway: handleClickAway,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ocean_fishing_OceanFishPopper, {
                            fish: data/* fishes */.n7[id]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const ocean_fishing_OceanFishIcon = (/*#__PURE__*/external_react_default().memo(OceanFishIcon));


/***/ }),

/***/ 2124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__);





const ICON_SIZE = 20;
function round(n) {
    return Math.round(n * 100) / 100;
}
function ct(theta, rho) {
    return `${round(ICON_SIZE / 2 + rho * Math.cos(theta))} ${round(ICON_SIZE / 2 + rho * Math.sin(theta))}`;
}
const StarBadge = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("ocean-fishing");
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
        title: String(t("requiredBait")),
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
            component: "svg",
            width: ICON_SIZE,
            height: ICON_SIZE,
            sx: {
                position: "relative",
                top: 3,
                left: -8,
                "& *": {
                    stroke: (theme)=>theme.palette.mode === "dark" ? "#616161" : "#000000"
                    ,
                    fill: "#ffff00"
                }
            },
            children: (()=>{
                const r = 3;
                const R = 7;
                const points = [];
                for(let i = 0; i < 5; ++i){
                    const theta = i * (2 * Math.PI / 5) + Math.PI / 2;
                    points.push(ct(theta, r));
                    points.push(ct(theta + 2 * Math.PI / 10, R));
                }
                return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: `M ${points.join(" L ")} Z`
                });
            })()
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(StarBadge));


/***/ }),

/***/ 69:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__);





const ICON_SIZE = 32;
function round(n) {
    return Math.round(n * 100) / 100;
}
function ct(theta, rho) {
    return `${round(ICON_SIZE / 2 + rho * Math.cos(theta))} ${round(ICON_SIZE / 2 + rho * Math.sin(theta))}`;
}
const Icon = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("svg")(({ theme  })=>({
        display: "inline-block",
        position: "relative",
        top: "0.15em",
        verticalAlign: "sub",
        "& *": {
            stroke: theme.palette.mode === "dark" ? "#616161" : "#000000",
            fill: "#ffff00"
        }
    })
);
const TimeIcon = ({ time , sx  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("ocean-fishing");
    switch(time){
        case "D":
            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
                title: String(t("time.day")),
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Icon, {
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    sx: sx,
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                            cx: ICON_SIZE / 2,
                            cy: ICON_SIZE / 2,
                            r: ICON_SIZE / 4
                        }),
                        (()=>{
                            const delta = 0.22;
                            const r = 11;
                            const R = 15;
                            const rays = [];
                            for(let i = 0; i < 8; ++i){
                                const theta = i * Math.PI / 4 + Math.PI / 8;
                                rays.push(/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: `M ${ct(theta - delta, r)} L ${ct(theta, R)} L ${ct(theta + delta, r)} Z`
                                }, i));
                            }
                            return rays;
                        })()
                    ]
                })
            });
        case "S":
            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
                title: String(t("time.sunset")),
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Icon, {
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    sx: sx,
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M 29 22 A 10.4 10.4 0 1 0 10 22 Z"
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M 2 28 L 2 24 L 30 24 L 30 28 Z"
                        })
                    ]
                })
            });
        case "N":
            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
                title: String(t("time.night")),
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    sx: sx,
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M 14 3 A 12 12 0 1 1 3 18 A 9 9 0 1 0 14 3 Z"
                    })
                })
            });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(TimeIcon));


/***/ }),

/***/ 6182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__);





const Tug = ({ strength , size ="normal"  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("ocean-fishing");
    /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */ switch(strength){
        case 1:
            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
                title: t("tug.light"),
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {
                    component: "span",
                    sx: {
                        display: "inline-block",
                        width: "1.2em",
                        height: "1.2em",
                        borderRadius: "0.2em",
                        fontWeight: "bold",
                        fontSize: size === "small" ? "0.95em" : size === "large" ? "1.33em" : "1em",
                        lineHeight: "1.2em",
                        textAlign: "center",
                        backgroundColor: (theme)=>theme.palette.mode === "dark" ? "#078203" : "#aaffaa"
                    },
                    children: "!"
                })
            });
        case 2:
            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
                title: t("tug.medium"),
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {
                    component: "span",
                    sx: {
                        display: "inline-block",
                        width: "1.2em",
                        height: "1.2em",
                        borderRadius: "0.2em",
                        fontWeight: "bold",
                        fontSize: size === "small" ? "0.95em" : size === "large" ? "1.33em" : "1em",
                        lineHeight: "1.2em",
                        textAlign: "center",
                        backgroundColor: (theme)=>theme.palette.mode === "dark" ? "#195ecf" : "#aaaaff"
                    },
                    children: "!!"
                })
            });
        case 3:
            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
                title: t("tug.heavy"),
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {
                    component: "span",
                    sx: {
                        display: "inline-block",
                        width: "1.2em",
                        height: "1.2em",
                        borderRadius: "0.2em",
                        fontWeight: "bold",
                        fontSize: size === "small" ? "0.95em" : size === "large" ? "1.33em" : "1em",
                        lineHeight: "1.2em",
                        textAlign: "center",
                        backgroundColor: (theme)=>theme.palette.mode === "dark" ? "#9e0000" : "#ffaaaa"
                    },
                    children: "!!!"
                })
            });
    }
/* eslint-enable @typescript-eslint/no-unnecessary-type-assertion */ };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Tug));


/***/ }),

/***/ 7576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EF": () => (/* binding */ achievements),
  "OZ": () => (/* binding */ baits),
  "ez": () => (/* binding */ contentBonuses),
  "n7": () => (/* binding */ fishes),
  "OL": () => (/* binding */ fishingSpots)
});

// UNUSED EXPORTS: placeNames

;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/fishing-spots.json
const fishing_spots_namespaceObject = JSON.parse('{"0":{"id":0,"placeName_main":0,"placeName_sub":0,"placeName":950,"fishes":[],"order":0},"237":{"id":237,"placeName_main":3443,"placeName_sub":3444,"placeName":3448,"fishes":[28937,28938,29723,29719,28942,28939,29734,29721,29784,29744],"order":229},"238":{"id":238,"placeName_main":3443,"placeName_sub":3444,"placeName":3449,"fishes":[29766,29749,29750,29754,29752,29753,29751,29782,29756,29788],"order":230},"239":{"id":239,"placeName_main":3443,"placeName_sub":3445,"placeName":3450,"fishes":[29722,29739,28941,29724,29740,29725,29726,29727,29785,29745],"order":231},"240":{"id":240,"placeName_main":3443,"placeName_sub":3445,"placeName":3451,"fishes":[29757,29758,29759,29779,29761,29760,29763,29755,29765,29789],"order":232},"241":{"id":241,"placeName_main":3443,"placeName_sub":3447,"placeName":3454,"fishes":[29728,29729,29730,29731,29735,29733,29742,29732,29787,29746],"order":235},"242":{"id":242,"placeName_main":3443,"placeName_sub":3447,"placeName":3455,"fishes":[29775,29767,29768,29769,29770,29762,29772,29780,29774,29790],"order":236},"243":{"id":243,"placeName_main":3443,"placeName_sub":3446,"placeName":3452,"fishes":[29736,29737,29738,29718,28940,29741,29720,29743,29786,29747],"order":233},"244":{"id":244,"placeName_main":3443,"placeName_sub":3446,"placeName":3453,"fishes":[29748,29776,29777,29778,29773,29771,29781,29764,29783,29791],"order":234},"246":{"id":246,"placeName_main":3443,"placeName_sub":3641,"placeName":3621,"fishes":[32055,32056,32057,32058,32059,32060,32061,32062,32063,32064],"order":238},"247":{"id":247,"placeName_main":3443,"placeName_sub":3641,"placeName":3622,"fishes":[32065,32066,32067,32068,32069,32070,32071,32072,32073,32074],"order":239},"248":{"id":248,"placeName_main":3443,"placeName_sub":3642,"placeName":3623,"fishes":[32075,32076,32077,32078,32079,32080,32081,32082,32083,32084],"order":240},"249":{"id":249,"placeName_main":3443,"placeName_sub":3642,"placeName":3624,"fishes":[32085,32086,32087,32088,32089,32090,32091,32092,32093,32094],"order":241},"250":{"id":250,"placeName_main":3443,"placeName_sub":3643,"placeName":3625,"fishes":[32095,32096,32097,32098,32099,32100,32101,32102,32103,32104],"order":242},"251":{"id":251,"placeName_main":3443,"placeName_sub":3643,"placeName":3626,"fishes":[32105,32106,32107,32108,32109,32110,32111,32112,32113,32114],"order":243}}');
;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/place-names.json
const place_names_namespaceObject = JSON.parse('{"0":{"id":0,"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"name_noArticle":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""}},"950":{"id":950,"name":{"en":"Undiscovered Fishing Hole","de":"Unerforschter Angelplatz","fr":"Zone de pêche inconnue","ja":"未知の釣り場","cn":"未知钓场","ko":"미지의 낚시터"},"name_noArticle":{"en":"undiscovered fishing hole","de":"","fr":"Zone de pêche inconnue","ja":"","cn":"","ko":""}},"3443":{"id":3443,"name":{"en":"The High Seas","de":"Auf Hoher See","fr":"Pleine mer","ja":"オーシャンフィッシング","cn":"出海垂钓","ko":"먼바다 낚시"},"name_noArticle":{"en":"high seas","de":"","fr":"Pleine mer","ja":"","cn":"","ko":""}},"3444":{"id":3444,"name":{"en":"Galadion Bay","de":"Galadion-Bucht","fr":"Baie de Galadion","ja":"ガラディオン湾","cn":"加拉迪翁湾","ko":"갈라디온 만"},"name_noArticle":{"en":"Galadion Bay","de":"","fr":"Baie de Galadion","ja":"","cn":"","ko":""}},"3445":{"id":3445,"name":{"en":"The Southern Strait of Merlthor","de":"Merlthorstraße (Süd)","fr":"Détroit sud de Merlthor","ja":"メルトール海峡南","cn":"梅尔托尔海峡南","ko":"멜토르 해협 남쪽"},"name_noArticle":{"en":"southern Strait of Merlthor","de":"","fr":"Détroit sud de Merlthor","ja":"","cn":"","ko":""}},"3446":{"id":3446,"name":{"en":"The Northern Strait of Merlthor","de":"Merlthorstraße (Nord)","fr":"Détroit nord de Merlthor","ja":"メルトール海峡北","cn":"梅尔托尔海峡北","ko":"멜토르 해협 북쪽"},"name_noArticle":{"en":"northern Strait of Merlthor","de":"","fr":"Détroit nord de Merlthor","ja":"","cn":"","ko":""}},"3447":{"id":3447,"name":{"en":"Rhotano Sea","de":"Rhotano-See","fr":"Mer de Rhotano","ja":"ロータノ海","cn":"罗塔诺海","ko":"로타노 해"},"name_noArticle":{"en":"Rhotano Sea","de":"","fr":"Mer de Rhotano","ja":"","cn":"","ko":""}},"3448":{"id":3448,"name":{"en":"Outer Galadion Bay","de":"Galadion-Bucht - Hochsee","fr":"Large de la baie de Galadion","ja":"ガラディオン湾沖合","cn":"加拉迪翁湾外海","ko":"갈라디온 만 먼바다"},"name_noArticle":{"en":"outer Galadion Bay","de":"","fr":"Large de la baie de Galadion","ja":"","cn":"","ko":""}},"3449":{"id":3449,"name":{"en":"Galadion Spectral Current","de":"Galadion-Bucht - Phantomströmung","fr":"Courant spectral (large de la baie de Galadion)","ja":"ガラディオン湾沖合：幻海流","cn":"加拉迪翁湾外海幻海流","ko":"갈라디온 만 먼바다: 환해류"},"name_noArticle":{"en":"Galadion spectral current","de":"","fr":"Courant spectral (large de la baie de Galadion)","ja":"","cn":"","ko":""}},"3450":{"id":3450,"name":{"en":"The Southern Strait of Merlthor","de":"Südliche Straße von Merlthor","fr":"Détroit sud de Merlthor","ja":"メルトール海峡南","cn":"梅尔托尔海峡南","ko":"멜토르 해협 남쪽"},"name_noArticle":{"en":"southern Strait of Merlthor","de":"","fr":"Détroit sud de Merlthor","ja":"","cn":"","ko":""}},"3451":{"id":3451,"name":{"en":"Southern Merlthor Spectral Current","de":"Merlthorstraße (Süd) - Phantomströmung","fr":"Courant spectral (détroit sud de Merlthor)","ja":"メルトール海峡南：幻海流","cn":"梅尔托尔海峡南幻海流","ko":"멜토르 해협 남쪽: 환해류"},"name_noArticle":{"en":"southern Merlthor spectral current","de":"","fr":"Courant spectral (détroit sud de Merlthor)","ja":"","cn":"","ko":""}},"3452":{"id":3452,"name":{"en":"The Northern Strait of Merlthor","de":"Nördliche Straße von Merlthor","fr":"Détroit nord de Merlthor","ja":"メルトール海峡北","cn":"梅尔托尔海峡北","ko":"멜토르 해협 북쪽"},"name_noArticle":{"en":"northern Strait of Merlthor","de":"","fr":"Détroit nord de Merlthor","ja":"","cn":"","ko":""}},"3453":{"id":3453,"name":{"en":"Northern Merlthor Spectral Current","de":"Merlthorstraße (Nord) - Phantomströmung","fr":"Courant spectral (détroit nord de Merlthor)","ja":"メルトール海峡北：幻海流","cn":"梅尔托尔海峡北幻海流","ko":"멜토르 해협 북쪽: 환해류"},"name_noArticle":{"en":"northern Merlthor spectral current","de":"","fr":"Courant spectral (détroit nord de Merlthor)","ja":"","cn":"","ko":""}},"3454":{"id":3454,"name":{"en":"Open Rhotano Sea","de":"Rhotano-See - Hochsee","fr":"Large de la mer de Rhotano","ja":"ロータノ海沖合","cn":"罗塔诺海海面","ko":"로타노 해 먼바다"},"name_noArticle":{"en":"open Rhotano Sea","de":"","fr":"Large de la mer de Rhotano","ja":"","cn":"","ko":""}},"3455":{"id":3455,"name":{"en":"Rhotano Spectral Current","de":"Rhotano-See - Phantomströmung","fr":"Courant spectral (large de la mer de Rhotano)","ja":"ロータノ海沖合：幻海流","cn":"罗塔诺海海面幻海流","ko":"로타노 해 먼바다: 환해류"},"name_noArticle":{"en":"Rhotano spectral current","de":"","fr":"Courant spectral (large de la mer de Rhotano)","ja":"","cn":"","ko":""}},"3621":{"id":3621,"name":{"en":"Cieldalaes Margin","de":"Cieldaläen - Hochsee","fr":"Large des îles de Cieldalaes","ja":"シェルダレー諸島沖合","cn":"谢尔达莱群岛近海","ko":"시엘달레 제도 먼바다"},"name_noArticle":{"en":"Cieldalaes Margin","de":"","fr":"Large des îles de Cieldalaes","ja":"","cn":"","ko":""}},"3622":{"id":3622,"name":{"en":"Cieldalaes Spectral Current","de":"Cieldaläen - Phantomströmung","fr":"Courant spectral (large des îles de Cieldalaes)","ja":"シェルダレー諸島沖合：幻海流","cn":"谢尔达莱群岛近海幻海流","ko":"시엘달레 제도 먼바다: 환해류"},"name_noArticle":{"en":"Cieldalaes spectral current","de":"","fr":"Courant spectral (large des îles de Cieldalaes)","ja":"","cn":"","ko":""}},"3623":{"id":3623,"name":{"en":"Open Bloodbrine Sea","de":"Schwerblütiges Meer - Hochsee","fr":"Large de la mer Pourpre","ja":"緋汐海沖合","cn":"绯汐海近海","ko":"붉은물결 바다 먼바다"},"name_noArticle":{"en":"open Bloodbrine Sea","de":"","fr":"Large de la mer Pourpre","ja":"","cn":"","ko":""}},"3624":{"id":3624,"name":{"en":"Bloodbrine Spectral Current","de":"Schwerblütiges Meer - Phantomströmung","fr":"Courant spectral (large de la mer Pourpre)","ja":"緋汐海沖合：幻海流","cn":"绯汐海近海幻海流","ko":"붉은물결 바다 먼바다: 환해류"},"name_noArticle":{"en":"Bloodbrine spectral current","de":"","fr":"Courant spectral (large de la mer Pourpre)","ja":"","cn":"","ko":""}},"3625":{"id":3625,"name":{"en":"Outer Rothlyt Sound","de":"Rothlyt-Meerbusen - Hochsee","fr":"Large du golfe de Rothlyt","ja":"ロズリト湾沖合","cn":"罗斯利特湾近海","ko":"로들리트 만 먼바다"},"name_noArticle":{"en":"outer Rothlyt Sound","de":"","fr":"Large du golfe de Rothlyt","ja":"","cn":"","ko":""}},"3626":{"id":3626,"name":{"en":"Rothlyt Spectral Current","de":"Rothlyt-Meerbusen - Phantomströmung","fr":"Courant spectral (large du golfe de Rothlyt)","ja":"ロズリト湾沖合：幻海流","cn":"罗斯利特湾近海幻海流","ko":"로들리트 만 먼바다: 환해류"},"name_noArticle":{"en":"Rothlyt spectral current","de":"","fr":"Courant spectral (large du golfe de Rothlyt)","ja":"","cn":"","ko":""}},"3641":{"id":3641,"name":{"en":"The Cieldalaes","de":"Inseln der Cieldaläen","fr":"Îles de Cieldalaes","ja":"シェルダレー諸島","cn":"谢尔达莱群岛","ko":"시엘달레 제도"},"name_noArticle":{"en":"Cieldalaes","de":"","fr":"Îles de Cieldalaes","ja":"","cn":"","ko":""}},"3642":{"id":3642,"name":{"en":"The Bloodbrine Sea","de":"Schwerblütiges Meer","fr":"Mer Pourpre","ja":"緋汐海","cn":"绯汐海","ko":"붉은물결 바다"},"name_noArticle":{"en":"Bloodbrine Sea","de":"","fr":"Mer Pourpre","ja":"","cn":"","ko":""}},"3643":{"id":3643,"name":{"en":"The Rothlyt Sound","de":"Rothlyt-Meerbusen","fr":"Golfe de Rothlyt","ja":"ロズリト湾","cn":"罗斯利特湾","ko":"로들리트 만"},"name_noArticle":{"en":"Rothlyt Sound","de":"","fr":"Golfe de Rothlyt","ja":"","cn":"","ko":""}}}');
;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/fishes.json
const fishes_namespaceObject = JSON.parse('{"0":{"id":0,"icon":0,"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"description":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"contentBonus":null},"28937":{"id":28937,"icon":29003,"name":{"en":"Galadion Goby","de":"Galadion-Grundel","fr":"Gobie de Galadion","ja":"ガラディオンゴビー","cn":"加拉迪翁虾虎","ko":"갈라디온 망둥이"},"description":{"en":"Amateur anglers are advised to familiarize themselves with the difference between the Merlthor and Galadion gobies as early as possible, as devotees of both varieties tend to become rather heated when one is (understandably) mistaken for the other.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Diese Grundel-Art lebt in den tiefen Gewässern der Galadion-Bucht. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un gobie vivant dans la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"ガラディオン湾沖合に棲息するハゼの一種\\r\\n[魚拓額縁G1に設定可能]","cn":"一种栖息在加拉迪翁湾外海的虾虎。\\r\\n可以拓印在小型鱼拓画框上。","ko":"갈라디온 만 먼바다에 서식하는 망둥이의 일종.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"28938":{"id":28938,"icon":29034,"name":{"en":"Galadion Chovy","de":"Galadion-Sardelle","fr":"Anchois de Galadion","ja":"ガラディオンアンチョビ","cn":"加拉迪翁鳀鱼","ko":"갈라디온 멸치"},"description":{"en":"“What makes a Galadion chovy distinct from other Lominsan anchovies?” Depends on who\'s asking.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Diese Unterart der limsischen Sardellen lebt in den tiefen Gewässern der Galadion-Bucht. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un cousin de l\'anchois limséen vivant dans la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"ガラディオン湾沖合を回遊するロミンサンアンチョビの地域群\\r\\n[魚拓額縁G2に設定可能]","cn":"在加拉迪翁湾外海洄游的罗敏萨鳀鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"갈라디온 만 먼바다를 회유하는 로민사 멸치의 지역군.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"28939":{"id":28939,"icon":29009,"name":{"en":"Rosy Bream","de":"Rosenbrasse","fr":"Brème rosée","ja":"ローズブリーム","cn":"玫瑰鲷鱼","ko":"장미도미"},"description":{"en":"The sunset coloring of these inhabitants of Galadion Bay makes them just as appealing to other predators as to anglers, leaving them somewhat beleaguered as a rule.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Ein Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch aus den tiefen Gewässern der Galadion-Bucht. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une variante rose de la brème de Bianaq vivant dans la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"ガラディオン湾沖合を回遊する紅色の海水魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种在加拉迪翁湾外海洄游的红色海鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"갈라디온 만 먼바다를 회유하는 붉은 바닷물고기.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"28940":{"id":28940,"icon":29152,"name":{"en":"Tripod Fish","de":"Hochsee-Dreistachler","fr":"Poisson-trépied","ja":"トライポッド","cn":"三角刺鱼","ko":"삼각고기"},"description":{"en":"Many a seafarer has lain awake contemplating the cursed knowledge that, as its name implies, this fish can indeed stand on its fins. \\r\\n\\r\\n[Suitable for display in aquariums tier 2 and higher.]\\r\\n[Suitable for printing on medium canvases.]","de":"Ein Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch mit stacheligen Flossen aus der Straße von Merlthor. (Kann in Aquarien der Größe M oder größer gehalten werden. Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un poisson aux nageoires très solides vivant dans le détroit de Merlthor.\\r\\n[Peut être élevé dans un aquarium de taille moyenne ou supérieure]\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"メルトール海峡に棲息する硬い棘状のヒレを持つ海水魚\\r\\n[G2以上の水槽で飼育可能]\\r\\n[魚拓額縁G2に設定可能]","cn":"一种栖息在梅尔托尔海峡的海鱼，拥有坚硬的荆棘状鱼鳍。\\r\\n可以饲养在2级以上的水族箱。\\r\\n可以拓印在中型鱼拓画框上。","ko":"멜토르 해협에 서식하는, 비늘이 단단한 가시 모양인 바닷물고기.\\n[2등급 이상 수조에서 사육 가능]\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":20},"28941":{"id":28941,"icon":29016,"name":{"en":"Sunfly","de":"Sonnenschmetterling","fr":"Poisson-tournesol","ja":"サニーバタフライ","cn":"阳光蝴蝶鱼","ko":"해님나비어"},"description":{"en":"A brightly colored fish that swims merrily through the Strait of Merlthor...or did.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein farbenfroher Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch aus der Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un poisson étincelant vivant dans le détroit de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"メルトール海峡を回遊する鮮やかな体表の海水魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种在梅尔托尔海峡洄游的体表鲜艳的海鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"멜토르 해협을 회유하는 몸 색깔이 선명한 바닷물고기.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"28942":{"id":28942,"icon":29011,"name":{"en":"Tarnished Shark","de":"Matthai","fr":"Requin terni","ja":"ターニッシュシャーク","cn":"暗淡鲨","ko":"변색상어"},"description":{"en":"Like a long-neglected antique, perhaps this shark just needs some love to become the perfect addition to afternoon tea parties. Alas, no one has yet volunteered to be the first to find out.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Ein großer Hai aus der Galadion-Bucht. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un gros requin vivant dans la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"ガラディオン湾沖合に棲息する大型鮫\\r\\n[魚拓額縁G3に設定可能]","cn":"一种栖息在加拉迪翁湾外海的大型鲨鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"갈라디온 만 먼바다에 서식하는 대형 상어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":14},"29718":{"id":29718,"icon":29042,"name":{"en":"Tossed Dagger","de":"Wurfdolchfisch","fr":"Dague de Merlthor","ja":"スロウンダガー","cn":"海投刀","ko":"총총단검어"},"description":{"en":"Often seen skimming the waves, shimmering like a blade in flight.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Dieser Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch gleitet schnell über das Wasser der Straße von Merlthor.  (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Une variété d\'exocet, proche de la dague de Llymlaen, vivant dans les eaux du détroit de Merlthor. \\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"メルトール海峡付近の海面を滑空する海水魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种在梅尔托尔海峡附近的水面滑翔的海鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"멜토르 해협 부근의 해수면을 활공하는 바닷물고기.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29719":{"id":29719,"icon":29043,"name":{"en":"Jasperhead","de":"Jaspis","fr":"Tête-de-jaspe","ja":"ジャスパーヘッド","cn":"碧玉头","ko":"벽옥머리"},"description":{"en":"Sought for the gemlike objects that form in their stomachs, not in their heads, as the name might suggest.\\r\\n\\r\\n[Suitable for display in aquariums tier 2 and higher.]\\r\\n[Suitable for printing on medium canvases.]","de":"Dieser mittelgroße Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch lebt in den tiefen Gewässern der Galadion-Bucht. (Kann in Aquarien der Größe M oder größer gehalten werden. Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un poisson bossu vivant dans la baie de Galadion.\\r\\n[Peut être élevé dans un aquarium de taille moyenne ou supérieure]\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"ガラディオン湾沖合を回遊する中型の海水魚\\r\\n[G2以上の水槽で飼育可能]\\r\\n[魚拓額縁G2に設定可能]","cn":"一种在加拉迪翁湾外海洄游的中型海鱼。\\r\\n可以饲养在2级以上的水族箱。\\r\\n可以拓印在中型鱼拓画框上。","ko":"갈라디온 만 먼바다를 회유하는 중형 바닷물고기.\\n[2등급 이상 수조에서 사육 가능]\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29720":{"id":29720,"icon":29013,"name":{"en":"Merlthor Lobster","de":"Merlthor-Hummer","fr":"Homard de Merlthor","ja":"メルトールロブスター","cn":"梅尔托尔龙虾","ko":"멜토르 가재"},"description":{"en":"As ubiquitous as they are delicious. A staple of seafood cuisine across Eorzea.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Eine großer, rotbrauner Hummer aus der Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une espèce de homard qui réside dans les courants marins les plus froids du détroit de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"メルトール海峡に棲息する赤褐色の大型海老\\r\\n[魚拓額縁G2に設定可能]","cn":"一种栖息在梅尔托尔海峡的红褐色大型海虾。\\r\\n可以拓印在中型鱼拓画框上。","ko":"멜토르 해협에 서식하는 적갈색 대형 바닷가재.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29721":{"id":29721,"icon":29033,"name":{"en":"Heavenswimmer","de":"Himmelsfisch","fr":"Poisson-papillon élyséen","ja":"ヘヴンリーフィッシュ","cn":"天堂鱼","ko":"천상어"},"description":{"en":"Easily spotted from afar due to their bright coloration, although sightings in the oceans surrounding Eorzea are scarce due to their unusual migratory patterns.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein kleiner Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch aus der Galadion-Bucht. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un poisson de mer originaire des eaux méridionales que l\'on peut maintenant observer dans la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"ガラディオン湾沖合を回遊する小型の海水魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种在加拉迪翁湾外海洄游的小型海鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"갈라디온 만 먼바다를 회유하는 소형 바닷물고기.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29722":{"id":29722,"icon":29035,"name":{"en":"Ghoul Barracuda","de":"Ghoul-Barrakuda","fr":"Barracuda goule","ja":"グールバラクーダ","cn":"尸鬼梭鱼","ko":"구울 창꼬치어"},"description":{"en":"Despite its considerable size, this ocean-dweller chooses to feast on the flesh of the dead rather than expend effort pursuing live prey.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Ein mittelgroßer Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch aus der Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un poisson nécrophage vivant dans le détroit de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"メルトール海峡を回遊する大型の海水魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种在梅尔托尔海峡洄游的大型海鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"멜토르 해협을 회유하는 대형 바닷물고기.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29723":{"id":29723,"icon":29126,"name":{"en":"Leopard Eel","de":"Leopard-Aal","fr":"Anguille léopard","ja":"レオパードイール","cn":"猎豹鳗","ko":"범무늬장어"},"description":{"en":"As per its namesake, it occupies a position fairly close to the top of the food chain, but is still forced to flee from larger and more dangerous predators.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Eine große Seeschlange aus der Galadion-Bucht. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Une anguille bigarrée vivant dans la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"ガラディオン湾沖合に棲息する大型のウミヘビ\\r\\n[魚拓額縁G3に設定可能]","cn":"一种栖息在加拉迪翁湾外海的大型海蛇。\\r\\n可以拓印在大型鱼拓画框上。","ko":"갈라디온 만 먼바다에 서식하는 대형 바다뱀.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29724":{"id":29724,"icon":29046,"name":{"en":"Marine Bomb","de":"Hochseebomber","fr":"Bombe marine","ja":"マリンボム","cn":"海中爆弹","ko":"바다복"},"description":{"en":"Known more for its tendency to explode with rage in a figurative sense rather than a literal one, as its name might suggest.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein kleiner, mit Dornen bewehrter Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch aus der Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un cousin du poisson porc-épic vivant dans le détroit de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"メルトール海峡に棲息する棘を持つ小型の海水魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种栖息在梅尔托尔海峡的小型海鱼，身上有着棘刺。\\r\\n可以拓印在小型鱼拓画框上。","ko":"멜토르 해협에 서식하는 가시 달린 소형 바닷물고기.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":20},"29725":{"id":29725,"icon":29021,"name":{"en":"Momora Mora","de":"Momora Mora","fr":"Momora mora","ja":"モモラ・モラ","cn":"莫莫拉·莫拉","ko":"모모라 모라"},"description":{"en":"Unlike the Lalafell from whom its name derives, this ocean-drifter is far from diminutive.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Ein großer Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch aus der Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Une variété de poisson-lune géant observée dans les eaux du détroit de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"メルトール海峡周辺の海面で見かけられる巨大海水魚\\r\\n[魚拓額縁G3に設定可能]","cn":"在梅尔托尔海峡附近的海面上可以看到的巨大海鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"멜토르 해협 주변의 해수면에서 목격되는 거대 바닷물고기.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29726":{"id":29726,"icon":29167,"name":{"en":"Merlthor Butterfly","de":"Merlthor-Schmetterling","fr":"Poisson-papillon de Merlthor","ja":"メルトールバタフライ","cn":"梅尔托尔蝴蝶鱼","ko":"멜토르 나비어"},"description":{"en":"Highly sought by aquarium owners for its vivid coloration, this increasingly rare species is arguably worth its weight in gold.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein kleiner, farbenfroher Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch aus der Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un poisson-papillon rayé aux couleurs vives.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"メルトール海峡を回遊する鮮やかな模様の海水魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种在梅尔托尔海峡洄游的花纹鲜艳的海鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"멜토르 해협을 회유하는 무늬가 선명한 바닷물고기.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29727":{"id":29727,"icon":29022,"name":{"en":"Gladius","de":"Gladius","fr":"Gladius","ja":"グラディウス","cn":"步兵剑","ko":"글라디우스"},"description":{"en":"A fish named after a sword─or was the sword named after the fish?\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Ein großer Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch aus der Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un grand poisson au long rostre vivant dans le détroit de Merthor.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"メルトール海峡を止まらず回遊し続ける大型海水魚\\r\\n[魚拓額縁G3に設定可能]","cn":"一种在梅尔托尔海峡不停洄游的大型海鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"멜토르 해협을 끊임없이 회유하는 대형 바닷물고기.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29728":{"id":29728,"icon":29025,"name":{"en":"Rhotano Wahoo","de":"Rhotano-Makrele","fr":"Thazard de Rhotano","ja":"ロータノワフー","cn":"罗塔诺梭子鰆","ko":"로타노 줄삼치"},"description":{"en":"Though it seems harmless enough at first glance, this fish has been rendered all but inedible by its highly poisonous diet. The taste is said to be exquisite by those brave enough to try it, however.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Ein mittelgroßer Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch aus der Rhotano-See. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un thazard vivant dans la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"ロータノ海を回遊する中型海水魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种在罗塔诺海洄游的中型海鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"로타노 해를 회유하는 중형 바닷물고기.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29729":{"id":29729,"icon":29004,"name":{"en":"Rhotano Sardine","de":"Rhotano-Sardine","fr":"Sardine de Rhotano","ja":"ロータノサーディン","cn":"罗塔诺沙丁鱼","ko":"로타노 정어리"},"description":{"en":"Usually seen traveling in large schools, these rather plain fish possess the group mentality of a flock of sheep─that is, to follow whoever is in front and, lacking that, just keep moving forward until something with big teeth appears. Then all hells break loose.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein kleiner, silbriger Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch aus der Rhotano-See. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Une sardine vivant dans la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"ロータノ海に棲息する銀色の海水魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种栖息在罗塔诺海的银色海鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"로타노 해에 서식하는 은색 바닷물고기.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29730":{"id":29730,"icon":29048,"name":{"en":"Deep Plaice","de":"Tiefseescholle","fr":"Plie des profondeurs","ja":"ディープシー・プレイス","cn":"深海平鱼","ko":"심해 넙치"},"description":{"en":"The name provides a useful hint as to the areas of the ocean this creature usually inhabits.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Ein mittelgroßer Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch mit flachem Körperbau aus der Rhotano-See. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un poisson plat vivant dans la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"ロータノ海に棲息する平たい魚体の海水魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种栖息在罗塔诺海的扁平海鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"로타노 해에 서식하는 넓적한 바닷물고기.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29731":{"id":29731,"icon":29049,"name":{"en":"Crimson Monkfish","de":"Karmin-Anglerfisch","fr":"Baudroie abyssale pourpre","ja":"クリムゾンモンクフィッシュ","cn":"深红钓鮟鱇","ko":"진홍아귀"},"description":{"en":"An angler never forgets the first time they reel in one of these deep-sea demons, no matter how hard they try.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Ein großer Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch aus der Rhotano-See. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un poisson vivant dans les eaux profondes de la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"ロータノ海に棲息する誘引突起を持つ海水魚\\r\\n[魚拓額縁G3に設定可能]","cn":"一种栖息在罗塔诺海的海鱼，头上生有会发光的诱饵。\\r\\n可以拓印在大型鱼拓画框上。","ko":"로타노 해에 서식하는 유인용 돌기를 가진 바닷물고기.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29732":{"id":29732,"icon":29516,"name":{"en":"Lampfish","de":"Lampenfisch","fr":"Poisson-pierre","ja":"ランプフィッシュ","cn":"灯鱼","ko":"새알고기"},"description":{"en":"Sought more for its roe than its meat. Thankfully its lack of muscular mass in comparison to the size of its body makes for an easy catch.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein kleiner kugelförmiger Fisch aus der Rhotano-See. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Une variété de poisson vivant dans la mer de Rhotano et capable de pondre un très grand nombre d\'œufs.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"ロータノ海に棲息するコブ状の突起を持つ小型の魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种栖息在罗塔诺海的小型鱼，身上有一粒一粒的突起物。\\r\\n可以拓印在小型鱼拓画框上。","ko":"로타노 해에 서식하는 혹처럼 생긴 돌기가 있는 소형 물고기.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":20},"29733":{"id":29733,"icon":29045,"name":{"en":"Ogre Eel","de":"Oger-Aal","fr":"Anguille ogresse","ja":"オーガイール","cn":"魔鳗","ko":"오거장어"},"description":{"en":"Even when it finds itself dangling from an angler\'s line, its only thought is to consume as much flesh as possible, which causes many a fisher to cast it back into the sea in sheer panic.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Ein schmaler, aber sehr langer Fisch aus der Rhotano-See. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Une espèce d\'anguille endémique à la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"ロータノ海に棲息する細長い魚体の海水魚\\r\\n[魚拓額縁G3に設定可能]","cn":"一种栖息在罗塔诺海的细长海鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"로타노 해에 서식하는 가늘고 긴 바닷물고기.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29734":{"id":29734,"icon":29051,"name":{"en":"Cyan Octopus","de":"Zyan-Oktopus","fr":"Poulpe céruléen","ja":"シアンオクトパス","cn":"青色章鱼","ko":"푸른문어"},"description":{"en":"Hunted for the copious amounts of ink it produces, the vast majority of which is spilled upon its capture. As a result, anglers with bright blue hands are a common sight around Galadion Bay.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Ein bläulicher Kopffüßer aus der Galadion-Bucht. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une espèce de céphalopode qui peuple la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"ガラディオン湾沖合に潜む青色の頭足類\\r\\n[魚拓額縁G2に設定可能]","cn":"一种潜伏在加拉迪翁湾外海的蓝色头足类生物。\\r\\n可以拓印在中型鱼拓画框上。","ko":"갈라디온 만 먼바다에 숨어 있는 파란색 두족류.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":13},"29735":{"id":29735,"icon":29026,"name":{"en":"Chrome Hammerhead","de":"Chrom-Hammerhai","fr":"Requin-marteau de chrome","ja":"クロムハンマーヘッド","cn":"铬铁锤头鲨","ko":"크롬 망치상어"},"description":{"en":"Differentiated from similar species by its unique coloration, which gives it a certain metallic sheen.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Diese imposante Haiart lebt in der Rhotano-See und jagt oft in kleinen Gruppen. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un requin vivant en bancs dans la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"ロータノ海に群れを成して棲息する鮫\\r\\n[魚拓額縁G3に設定可能]","cn":"一种成群栖息在罗塔诺海的鲨鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"로타노 해에서 무리 지어 서식하는 상어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":14},"29736":{"id":29736,"icon":29310,"name":{"en":"Floefish","de":"Treibeisfisch","fr":"Poisson des banquises","ja":"ドリフトアイスフィッシュ","cn":"浮冰鱼","ko":"유빙어"},"description":{"en":"This small, almost entirely defenseless fish forms an important link in the food chain─one quite near to the bottom.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Dieser kleine Süßwasserfisch wurde aus Coerthas in die Straße von Merlthor getrieben. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un petit poisson ayant migré du Coerthas jusqu\'au détroit de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"クルザス地方からメルトール海峡に流れ着いた小型の魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种从库尔札斯地区漂流到梅尔托尔海峡的小型鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"커르다스 지방에서 멜토르 해협으로 흘러온 소형 물고기.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29737":{"id":29737,"icon":29027,"name":{"en":"Megasquid","de":"Megakalmar","fr":"Méga calmar","ja":"メガスキッド","cn":"巨乌贼","ko":"왕오징어"},"description":{"en":"One does not earn a name like “megasquid” by being small and unassuming, which this aquatic abomination certainly is not.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Dieser gewaltige Kalmar hat schon viele Boote in der Straße von Merlthor versenkt. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un calmar géant qui attaque les navires dans le détroit de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"メルトール海峡を通る商船の天敵とされる大型のイカ\\r\\n[魚拓額縁G3に設定可能]","cn":"一种大型乌贼，栖息在梅尔托尔海峡，是商船的天敌。\\r\\n可以拓印在大型鱼拓画框上。","ko":"멜토르 해협을 지나는 상선의 천적이라고 여겨지는 대형 오징어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29738":{"id":29738,"icon":29100,"name":{"en":"Oschon\'s Stone","de":"Tiefsee-Teufelsfisch","fr":"Pierre d\'Oschon","ja":"オシュオンズストーン","cn":"放浪神之石","ko":"오쉬온의 돌"},"description":{"en":"Seemingly living up to its namesake, this heavy and largely immobile wavekin spends most of its life on the ocean floor. It feeds by opening its mouth and waiting for curious prey to swim inside. \\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Dieser große Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch versteckt sich häufig zwischen den Steinen am Grund der Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un gros poisson possiblement d\'origine divine et vivant dans le détroit de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"メルトール海峡の海底にて、岩石に擬態する大型の海水魚\\r\\n[魚拓額縁G3に設定可能]","cn":"一种会拟态成岩石的大型海鱼，栖息在梅尔托尔海峡的海底。\\r\\n可以拓印在大型鱼拓画框上。","ko":"멜토르 해협의 바다 밑에서 암석으로 의태하는 대형 바닷물고기.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29739":{"id":29739,"icon":29755,"name":{"en":"La Noscean Jelly","de":"La-Noscea-Qualle","fr":"Méduse noscéenne","ja":"ラノシアンジェリー","cn":"拉诺西亚水母","ko":"라노시아 젤리"},"description":{"en":"It was named as part of a movement to expunge the word “fish” from “jellyfish,” for reasons pertaining to consistency and accuracy, although this has met with little success thus far.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Eine in der Straße von Merlthor weit verbreitete Quallenart. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Une méduse très répandue dans le détroit de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"メルトール海峡に広く分布するクラゲ\\r\\n[魚拓額縁G1に設定可能]","cn":"一种广泛分布在梅尔托尔海峡的水母。\\r\\n可以拓印在小型鱼拓画框上。","ko":"멜토르 해협에 널리 분포하는 해파리.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":15},"29740":{"id":29740,"icon":29053,"name":{"en":"Shaggy Seadragon","de":"Zotteliger Seedrache","fr":"Dragon de mer ébouriffé","ja":"シャギーシードラゴン","cn":"蓬松海龙","ko":"수풀해마"},"description":{"en":"Almost indistinguishable in appearance from the seaweed on which it feeds. It must take care not to overeat and thereby destroy its own hiding place from predators.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Diese kleinen Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fische verstecken sich gerne zwischen Algen am Meeresgrund. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un hippocampe vivant caché dans les algues.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"海藻に擬態する小型の海水魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种会拟态成海藻的小型海鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"해조로 의태하는 소형 바닷물고기.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":16},"29741":{"id":29741,"icon":29111,"name":{"en":"Net Crawler","de":"Spinnenkrabbe","fr":"Crabe-araignée géant","ja":"スパイダークラブ","cn":"蜘蛛蟹","ko":"긴다리거미게"},"description":{"en":"Unlike most crabs, the main source of edible meat is found in the legs. The torso is often discarded as it mostly consists of hard gristle and unappetizing...matter.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Über diese unheimliche Krabbenart mit ihren langen, spindeldürren Beinen erzählt man sich in La Noscea so manche Gruselgeschichte. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une variété de crabe aux pattes très longues, très répandue dans les eaux de la Noscea.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"ラノシア地方の童話にも登場する長い鋏脚が特徴の甲殻類\\r\\n[魚拓額縁G2に設定可能]","cn":"拉诺西亚地区的童话中出现的长脚甲壳类生物。\\r\\n可以拓印在中型鱼拓画框上。","ko":"라노시아 지방의 동화에도 등장하는, 긴 다리가 특징인 갑각류.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":21},"29742":{"id":29742,"icon":29811,"name":{"en":"Dark Nautilus","de":"Finster-Perlboot","fr":"Nautile sombre","ja":"ダークノーチラス","cn":"暗鹦鹉螺","ko":"어둑앵무조개"},"description":{"en":"Known for its ability to survive on aether alone, researchers are willing to part with huge sums of gil for live samples.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Dieser Kopffüßer lebt in den Tiefen der Rhotano-See. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une espèce de céphalopode endémique à la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"ロータノ海に棲息する有殻の頭足類\\r\\n[魚拓額縁G2に設定可能]","cn":"一种栖息在罗塔诺海的带壳头足类生物。\\r\\n可以拓印在中型鱼拓画框上。","ko":"로타노 해에 서식하는 껍데기 달린 두족류.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29743":{"id":29743,"icon":29019,"name":{"en":"Elder Dinichthys","de":"Tiefsee-Dunkleosteus","fr":"Dinichthys ancien","ja":"エルダー・ディニクティス","cn":"古老恐鱼","ko":"장로 디니크티스"},"description":{"en":"Swims about the Strait of Merlthor as though it owns the place─a claim which few of the other inhabitants are in any position to dispute.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Dieser große Panzerfisch steht in der Straße von Merlthor am oberen Ende der Nahrungskette. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un poisson fossile géant qui domine la chaîne alimentaire du détroit de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"メルトール海峡の生態系上位に位置する大型甲冑魚\\r\\n[魚拓額縁G3に設定可能]","cn":"一种栖息在梅尔托尔海峡的大型甲胄鱼，处于生态系统的最顶端。\\r\\n可以拓印在大型鱼拓画框上。","ko":"멜토르 해협 생태계의 상위권에 위치하는 대형 갑주어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29744":{"id":29744,"icon":29373,"name":{"en":"Drunkfish","de":"Trunkenbold","fr":"Psychrolutes aviné","ja":"ドランカードフィッシュ","cn":"醉鱼","ko":"만취어"},"description":{"en":"If you had a face like this, you\'d look sad, too.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Der Trunkenbold lebt vorwiegend am Meeresgrund und ist ein seltener Fisch aus den tiefen Gewässern der Galadion-Bucht. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un poisson des abysses à l\'allure étrange.\\r\\nRarissime, on l\'aperçoit parfois dans la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"海底に棲息する稀少な深海魚\\r\\nガラディオン湾沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种栖息在海底的稀有深海鱼。\\r\\n加拉迪翁湾外海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"해저에 서식하는 희귀한 심해어.\\n갈라디온 만 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29745":{"id":29745,"icon":29147,"name":{"en":"Little Leviathan","de":"Kleiner Leviathan","fr":"Mini-Léviathan","ja":"リトルリヴァイアサン","cn":"小利维亚桑","ko":"꼬마 리바이어선"},"description":{"en":"Even a greatly scaled-down (pun very much intended) version of the Lord of the Whorl is more than a match for all but the most experienced fishers.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Der kleine Leviathan ist ein Tiefseefisch mit langem elegant geschwungenem Körper. Er gilt als angriffslustiger Fisch und kommt in der südlichen Straße von Merlthor vor. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Cette espèce nouvellement découverte ressemble au Primordial dont elle tire son nom.\\r\\nRarissime, on l\'aperçoit parfois au sud du détroit de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"帯のような長い魚体を持つ獰猛な深海魚\\r\\nメルトール海峡南の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"一种身体长如衣带的凶猛深海鱼。\\r\\n梅尔托尔海峡南的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"몸이 허리띠처럼 긴, 사나운 심해어.\\n멜토르 해협 남쪽의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29746":{"id":29746,"icon":29077,"name":{"en":"Sabaton","de":"Eisenfuß","fr":"Sabaton des mers","ja":"シーサバトン","cn":"海铠靴","ko":"바다판금장화"},"description":{"en":"Strangely for a mollusk, its body is covered in hard scales in addition to the more common shell. Many predators will steer clear of them simply because they are a bother to eat.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Eine seltene Meeresschnecke, deren Haus aus besonders harten Schuppen besteht und die in der Rhotano-See heimisch ist. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un étrange mollusque dont la coquille est recouverte d\'écailles aussi dures que l\'acier.\\r\\nRarissime, on l\'aperçoit parfois dans la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"頑強な金属のウロコを形成した稀少な巻貝\\r\\nロータノ海沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种拥有坚硬金属鳞片的稀有贝壳。\\r\\n罗塔诺海海面的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"단단한 금속 비늘을 형성한 희귀한 고둥.\\n로타노 해 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29747":{"id":29747,"icon":29157,"name":{"en":"Shooting Star","de":"Meerschnuppe","fr":"Étoile filante des mers","ja":"海の流星","cn":"海流星","ko":"바다의 유성"},"description":{"en":"One\'s chances of seeing an actual shooting star are greater than that of being able to observe one of these rare wavekin in its natural habitat.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein seltener Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch, den die Sahagin verehren. Heimisch in der nördlichen Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un poisson marin aux écailles rouge vif, considéré comme précieux par les Sahuagins.\\r\\nRarissime, on l\'aperçoit parfois dans le détroit nord de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"サハギン族が珍重する紅色の海水魚\\r\\nメルトール海峡北の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种鱼人族视为珍贵物品的红色海鱼。\\r\\n梅尔托尔海峡北的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"사하긴족이 진귀하게 여기는 붉은색 바닷물고기.\\n멜토르 해협 북쪽의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29748":{"id":29748,"icon":29082,"name":{"en":"Hammerclaw","de":"Hammer-Hummer","fr":"Marteaupince","ja":"ハンマーロブスター","cn":"锤爪龙虾","ko":"망치가재"},"description":{"en":"While most wavekin object quite strongly to being caught on a hook, these crustaceans make life especially difficult for anglers in retaliation. If they are not pinching fingers, they are flailing wildly with their heavy claws, both of which most fishers should and do go to great lengths to avoid.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Eine große aber seltene Hummerart, deren Fleisch als äußerst köstlich gilt. Lebt in der nördlichen Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un homard carnivore dont les énormes pinces ressemblent à des marteaux.\\r\\nRarissime, on l\'aperçoit parfois dans le détroit nord de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"大型の鋏をハンマーに喩えられる肉食のロブスター\\r\\nメルトール海峡北の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种食肉龙虾，人们将其巨大的双钳比喻为锤子。\\r\\n梅尔托尔海峡北的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"커다란 집게발이 망치에 비유되는 육식 가재.\\n멜토르 해협 북쪽의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29749":{"id":29749,"icon":29069,"name":{"en":"Heavenskey","de":"Himmelspforte","fr":"Clef du paradis","ja":"キー・オブ・ヘヴン","cn":"天堂之钥","ko":"천국의 열쇠"},"description":{"en":"Due to being highly poisonous, it is believed to send those who eat of its flesh to the heavens. Compared to the seven hells, this may prove a more desirable destination.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein besonders großer Himmelsfisch, der vor allem in Phantomströmungen vorkommt. Gilt als selten und lebt in den tiefen Gewässern der Galadion-Bucht. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un poisson-papillon élyséen géant vivant dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large de la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"幻海流のなか現れる大型のヘヴンリーフィッシュ\\r\\nガラディオン湾沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"幻海流时出现的大型天堂鱼。\\r\\n加拉迪翁湾外海的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"환해류 때 나타나는 대형 천상어.\\n갈라디온 만 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29750":{"id":29750,"icon":29065,"name":{"en":"Ghost Shark","de":"Geisterhai","fr":"Requin-fantôme","ja":"ゴーストシャーク","cn":"幽灵鲨","ko":"망령상어"},"description":{"en":"According to certain sources, it is able to appear spontaneously from any body of water. Such stories, however, are probably best ignored.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Eine seltene Matthai-Art aus der Galadion-Bucht, die vor allem in Phantomströmungen vorkommt. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un requin terni géant vivant dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large de la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"幻海流のなか現れる大型のターニッシュシャーク\\r\\nガラディオン湾沖合の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"幻海流时出现的大型暗淡鲨。\\r\\n加拉迪翁湾外海的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"환해류 때 나타나는 대형 변색상어.\\n갈라디온 만 먼바다의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":14},"29751":{"id":29751,"icon":29759,"name":{"en":"Quicksilver Blade","de":"Quecksilberklinge","fr":"Lame vif-argent","ja":"クイックシルバーブレード","cn":"流银刃","ko":"수은 칼날"},"description":{"en":"While there may be larger and deadlier wavekin roaming the oceans, few can claim to be as hideous as this aberration of nature.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Die seltenen Quecksilberklingen kommen in der Galadion-Bucht vor und gelten als eine besonders angriffslustige Haiart. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un requin aussi redoutable qu\'insaisissable.\\r\\nRarissime, on l\'aperçoit parfois au large de la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"水銀の刃と呼ばれる獰猛な鮫\\r\\nガラディオン湾沖合の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"一种被称为水银之刃的凶猛鲨鱼。\\r\\n加拉迪翁湾外海的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"수은 칼날이라고 불리는 사나운 상어.\\n갈라디온 만 먼바다의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":14},"29752":{"id":29752,"icon":29073,"name":{"en":"Navigator\'s Print","de":"Llymlaens Mal","fr":"Empreinte de Llymlaen","ja":"リムレーンプリント","cn":"海神印","ko":"리믈렌의 발도장"},"description":{"en":"This denizen of the deep can proudly claim to take its name from a goddess, even if the tale behind it does involve being stepped on by said goddess.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Eine große Flunderart, die nach allgemeiner Auffassung von Llymlaen, der Göttin der Meere, erschaffen wurde. Seltener Fisch der Galadion-Bucht. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un flet géant qu\'on dit avoir été écrasé par Llymlaen la Navigatrice.\\r\\nRarissime, on l\'aperçoit parfois au large de la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"海神リムレーンに踏まれたとされる大型のフロウンダー\\r\\nガラディオン湾沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种大型的鲽鱼，传闻是海神利姆莱茵留下的足印。\\r\\n加拉迪翁湾外海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"해신 리믈렌에게 밟혔다고 전해지는 대형 도다리.\\n갈라디온 만 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29753":{"id":29753,"icon":29067,"name":{"en":"Casket Oyster","de":"Nagelauster","fr":"Huître cercueil","ja":"ネイルドオイスター","cn":"钉牡蛎","ko":"못굴"},"description":{"en":"While there are several theories surrounding the origin of its name, the general consensus is that it is as hard to open as a casket that has been nailed shut. However, it is nothing a brief spell in a pot of boiling water cannot solve.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Große, seltene Austernart, die in der Galadion-Bucht in Phantomströmungen treibt. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Une grosse huître vivant dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large de la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"幻海流に乗って泳ぐ大物のオイスター\\r\\nガラディオン湾沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"乘上幻海流四处漂游的巨大牡蛎。\\r\\n加拉迪翁湾外海的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"환해류를 타고 헤엄치는 커다란 굴.\\n갈라디온 만 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29754":{"id":29754,"icon":29070,"name":{"en":"Fishmonger","de":"Fischhändler","fr":"Poissonnière","ja":"フィッシュモンガー","cn":"巨食鮟鱇","ko":"어물전어"},"description":{"en":"Known for its habit of seeking out a variety of fish, though unlike its namesake, these are purely for its own consumption.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Große, gefräßige Großmaul-Seeteufel-Art, die allerlei kleinere Fische verspeist. Seltener Fisch der Galadion-Bucht. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Une baudroie très gloutonne qui considère tout poisson comme un encas potentiel.\\r\\nRarissime, on l\'aperçoit parfois au large de la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"多種多様な魚を食す大食いのグースフィッシュ\\r\\nガラディオン湾沖合の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"捕食各种各样鱼类的暴食拟鮟鱇。\\r\\n加拉迪翁湾外海的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"갖가지 물고기를 먹는 대식가 심해아귀.\\n갈라디온 만 먼바다의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29755":{"id":29755,"icon":29078,"name":{"en":"Mythril Sovereign","de":"Mithril-Souverän","fr":"Souverain de mithril","ja":"ミスリルソブリン","cn":"秘银君","ko":"미스릴 군주"},"description":{"en":"Known for its beautifully shimmering scales, which are in contrast to its rather lackluster meat.\\r\\n\\r\\n[Suitable for display in aquariums tier 2 and higher.]\\r\\n[Suitable for printing on medium canvases.]","de":"Seltener Urzeitfisch mit wunderschön glänzenden Schuppen. Kommt in der südlichen Straße von Merlthor vor. (Kann in Aquarien der Größe M oder größer gehalten werden. Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un poisson ancien aux écailles étincelantes comme le mithril.\\r\\nRarissime, on l\'aperçoit parfois dans le détroit sud de Merlthor.\\r\\n[Peut être élevé dans un aquarium de taille moyenne ou supérieure]\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"霊銀色に輝きを放つ稀少な古代魚\\r\\nメルトール海峡南の稀少魚\\r\\n[G2以上の水槽で飼育可能]\\r\\n[魚拓額縁G2に設定可能]","cn":"一种散发着秘银色光辉的稀有古代鱼。\\r\\n梅尔托尔海峡南的稀有鱼。\\r\\n可以饲养在2级以上的水族箱。\\r\\n可以拓印在中型鱼拓画框上。","ko":"미스릴빛으로 빛나는 희귀한 고대어.\\n멜토르 해협 남쪽의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29756":{"id":29756,"icon":28001,"name":{"en":"Nimble Dancer","de":"Wellentänzer","fr":"Danseuse agile","ja":"ニンブルダンサー","cn":"灵敏舞者","ko":"날렵한 무희"},"description":{"en":"Coveted by keepers of exotic fish for the mesmerizing manner in which its trailing fins catch the light.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Kleiner Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch, der bevorzugt in warmen Phantomströmungen zuhause ist. Seltener Fisch der Galadion-Bucht. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un petit poisson marin qui apprécie les courants spectraux chauds.\\r\\nRarissime, on l\'aperçoit parfois au large de la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"幻海流の温かい水流を好む小型の海水魚\\r\\nガラディオン湾沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种喜欢幻海流温暖水流的小型海鱼。\\r\\n加拉迪翁湾外海的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"환해류의 따뜻한 해류를 좋아하는 소형 바닷물고기.\\n갈라디온 만 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29757":{"id":29757,"icon":29434,"name":{"en":"Sea Nettle","de":"Seenessel","fr":"Ortie des mers","ja":"シーネトル","cn":"海荨麻","ko":"바다쐐기"},"description":{"en":"Not the most welcome of catches, as it tends to deliver a nasty sting to those whose hands wander too close.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Eine seltene Quallenart, deren Schirm silbern schillert.\\r\\nIn der südlichen Straße von Merlthor heimisch. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Une méduse à l\'ombrelle dorée.\\r\\nRarissime, on l\'aperçoit parfois dans le détroit sud de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"金茶色に輝く傘を持つ稀少なクラゲ\\r\\nメルトール海峡南の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种伞帽散发着金褐色光辉的水母。\\r\\n梅尔托尔海峡南的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"갓이 금갈색으로 빛나는 희귀한 해파리.\\n멜토르 해협 남쪽의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":15},"29758":{"id":29758,"icon":29095,"name":{"en":"Great Grandmarlin","de":"Königsmarlin","fr":"Grand marlin","ja":"グランドマーリン","cn":"巨大枪鱼","ko":"장수 청새치"},"description":{"en":"More often than not, this hulking yet deceptively quick wavekin escapes the angler\'s hook, usually by severing the line with its blade-like bill.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Ein großer Marlin, der sich bevorzugt in Phantomströmungen aufhält. Seltener Fisch der südlichen Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un marlin très âgé qui migre à travers les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois dans le détroit sud de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"幻海流を好んで回遊する長寿のマーリン\\r\\nメルトール海峡南の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"一种长寿的枪鱼，因为喜欢幻海流才在此洄游。\\r\\n梅尔托尔海峡南的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"환해류를 즐겨 회유하는 장수한 청새치.\\n멜토르 해협 남쪽의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29759":{"id":29759,"icon":29084,"name":{"en":"Shipwreck\'s Sail","de":"Treibholzgleiter","fr":"Voile de l\'épave","ja":"レックドクロス","cn":"海难船帆","ko":"난파선돛"},"description":{"en":"This wavekin is so broad and flat that it has been compared to the sail of a ship left to float on the tide. In actuality, it is waiting for sea birds to pick the parasites from its flanks.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Ein großer, seltener Momora Mora, der sich als Treibgut vor Fressfeinden tarnt und in der südlichen Straße von Merlthor heimisch ist. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un momora mora géant qui flotte à la surface de l\'eau telle une voile décrochée de son mât.\\r\\nRarissime, on l\'aperçoit parfois dans le détroit sud de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"海面を漂う姿を難破船の帆に喩えられる大型のモモラ・モラ\\r\\nメルトール海峡南の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"一种大型的莫莫拉·莫拉，漂浮在海面的样子有如海难船的船帆。\\r\\n梅尔托尔海峡南的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"해수면을 떠다니는 모습이 난파선의 돛에 비유되는 대형 모모라 모라.\\n멜토르 해협 남쪽의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29760":{"id":29760,"icon":29161,"name":{"en":"Azeyma\'s Sleeve","de":"Azeyma-Schleier","fr":"Étoffe d\'Azeyma","ja":"アーゼマの垂衣","cn":"太阳神面纱","ko":"아제마의 베일"},"description":{"en":"Many artist\'s impressions of Azeyma depict Her with flowing, bell-adorned sleeves, not unlike the elegant silhouette of this wavekin.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Kleiner Meeresbewohner, der in den Phantomströmungen der südlichen Straße von Merlthor lebt. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un poisson aux nageoires sublimes, vivant dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois dans le détroit sud de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"幻海流の水流に優美なヒレを揺らす海水魚\\r\\nメルトール海峡南の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种海鱼，优美的鱼鳍会随着幻海流的水波晃动。\\r\\n梅尔托尔海峡南的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"환해류의 해류에 지느러미가 아름답게 나부끼는 바닷물고기.\\n멜토르 해협 남쪽의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29761":{"id":29761,"icon":29089,"name":{"en":"Hi-aetherlouse","de":"Große Ätherlaus","fr":"Superpou d\'éther","ja":"ハイエーテルラウス","cn":"高级以太药虱","ko":"하이 에테르충"},"description":{"en":"An aetherially charged wavekin that has a habit of appearing when one least expects or wants it.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Schalentier, das sich vor allem in Phantomströmungen zuhause fühlt und dort zu beachtlicher Größe heranwächst. Lebt in der südlichen Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un pou d\'éther dopé à l\'énergie des courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois dans le détroit sud de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"幻海流の海中エーテルを好む甲殻類\\r\\nメルトール海峡南の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种非常喜欢幻海流以太的甲壳类生物。\\r\\n梅尔托尔海峡南的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"환해류의 바닷속 에테르를 좋아하는 갑각류.\\n멜토르 해협 남쪽의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29762":{"id":29762,"icon":29661,"name":{"en":"Floating Saucer","de":"Treibender Tellerfisch","fr":"Soucoupe flottante","ja":"フローティングソーサー","cn":"浮游碟鱼","ko":"부유접시"},"description":{"en":"Far less welcome at a mess hall table than an actual saucer, as these odd creatures taste rather like a sailor\'s subligar. Apparently.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Eine seltene Quallen-Art in der Rhotano-See, die der Legende nach aus einem antiken Porzellanteller entstand, der von einem Handelsschiff ins Meer gefallen war. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une méduse qui, selon la légende, descendrait d\'une assiette de porcelaine à laquelle on aurait insufflé la vie.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"商船から落ちた稀少な陶器が命を得たとされるクラゲ\\r\\nロータノ海沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"传闻是商船掉落海中的稀有陶器获得了生命后形成的水母。\\r\\n罗塔诺海海面的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"상선에서 떨어진 희귀한 도기가 생명을 얻었다고 전해지는 해파리.\\n로타노 해 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":15},"29763":{"id":29763,"icon":29074,"name":{"en":"Aetheric Seadragon","de":"Ätherischer Seedrache","fr":"Dragon de mer éthéré","ja":"エーテリックシードラゴン","cn":"以太海龙","ko":"에테르 해룡"},"description":{"en":"Framed in fabulous frond-like fins, this ferocious fish frequently frightens off foes who would fight for its feed.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Ein seltener Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch, der vor allem in den Phantomströmungen in der südlichen Straße von Merlthor zu finden ist. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un poisson d\'eau de mer qui vit dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit sud de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"幻海流に適応した稀少な海水魚\\r\\nメルトール海峡南の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"一种习惯了幻海流的稀有海鱼。\\r\\n梅尔托尔海峡南的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"환해류에 적응한 희귀한 바닷물고기.\\n멜토르 해협 남쪽의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":16},"29764":{"id":29764,"icon":29155,"name":{"en":"Coral Seadragon","de":"Korallenseedrache","fr":"Dragon de mer corallin","ja":"コーラルシードラゴン","cn":"珊瑚海龙","ko":"산호 해룡"},"description":{"en":"Dedicates its life to looking─and behaving─as much like coral as possible.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein seltener Salz<SoftHyphen/>was<SoftHyphen/>ser<SoftHyphen/>fisch, der ursprünglich in Korallenriffen zuhause war und nun in der nördlichen Straße von Merlthor anzutreffen ist. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un poisson d\'eau de mer qui vit caché dans les récifs coralliens.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit nord de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"サンゴに擬態する稀少な海水魚\\r\\nメルトール海峡北の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种会拟态成珊瑚的稀有海鱼。\\r\\n梅尔托尔海峡北的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"산호로 의태하는 희귀한 바닷물고기.\\n멜토르 해협 북쪽의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":16},"29765":{"id":29765,"icon":28002,"name":{"en":"Roguesaurus","de":"Schurkosaurus","fr":"Roguesaurus","ja":"ロガサウルス","cn":"无赖龙","ko":"불량배 사우루스"},"description":{"en":"Named after the river rather than the traditional Lominsan profession. Those unfortunate enough to encounter one will testify that to describe it as roguish would be an understatement, and that “murderous,” “man-eating,” and “malevolent” would all be more applicable adjectives.\\r\\n\\r\\n[Suitable for printing on extra large canvases.]","de":"Ein gigantisches, angriffslustiges Reptil, das in den Phantomströmungen der südlichen Straße von Merlthor lauert. (Kann als Fischdruck in Rahmen der Größe XL ausgestellt werden.)","fr":"Un reptile féroce qui vit dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit sud de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de très grande taille]","ja":"幻海流中に棲息する獰猛な甲鱗綱\\r\\nメルトール海峡南の稀少魚\\r\\n[魚拓額縁G4に設定可能]","cn":"一种栖息在幻海流中的凶猛甲鳞纲生物。\\r\\n梅尔托尔海峡南的稀有鱼。\\r\\n可以拓印在特大型鱼拓画框上。","ko":"환해류 속에 서식하는 사나운 갑린강.\\n멜토르 해협 남쪽의 희귀어.\\n[4등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29766":{"id":29766,"icon":29072,"name":{"en":"Merman\'s Mane","de":"Mama Haarlos","fr":"Crinière de triton","ja":"マーマンヘアー","cn":"人鱼发","ko":"인어터럭"},"description":{"en":"Though the existence of mermen is much debated, if any were to exist, they would no doubt object to the comparisons drawn between their long locks and the tentacles of this grotesque cephalopod.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Fischer bezeichnen diesen Kopffüßer, der überraschende Ähnlichkeit mit einem Menschenkopf aufweist, als „Mama Haarlos“. Es ist eine seltene Spezies, die vor allem in den Gewässern der Galadion-Bucht vorkommt. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un grand céphalopode que les marins se plaisent à comparer à la tête d\'un triton.\\r\\nRarissime, on l\'aperçoit parfois au large de la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"船乗りに人魚の頭部とあだ名される大型の頭足類\\r\\nガラディオン湾沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种大型头足类生物，船员们称之为人鱼的头发。\\r\\n加拉迪翁湾外海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"선원들이 \'인어의 머리\'라고 부르는 대형 두족류.\\n갈라디온 만 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":13},"29767":{"id":29767,"icon":29085,"name":{"en":"Sweeper","de":"Fluffy","fr":"Requin-balais","ja":"フラッフィー","cn":"清道夫","ko":"청소상어"},"description":{"en":"Its habit of moving its head from side to side while searching the seabed for food has earned it this unusual moniker.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Ein seltener Chrom-Hammerhai, der am Meeresgrund der Rhotano-See kleine Fische und Muscheln verspeist. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un cousin du requin-marteau de chrome qui se nourrit de petits poissons en fouillant le fond des mers.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"海底の小魚を捕食するクロムハンマーヘッドの亜種\\r\\nロータノ海沖合の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"铬铁锤头鲨的亚种，会在海底捕食小鱼。\\r\\n罗塔诺海海面的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"해저에 사는 작은 물고기를 잡아먹는 크롬 망치상어의 아종.\\n로타노 해 먼바다의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":14},"29768":{"id":29768,"icon":29156,"name":{"en":"Silencer","de":"Schweigefisch","fr":"Suppresseur","ja":"サイレンサー","cn":"沉寂者","ko":"침묵어"},"description":{"en":"While technically edible, it is not without side effects. Temporary loss of speech being the most noticeable, though there may be others that are harder to detect.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein seltener Kugelfisch aus der Rhotano-See, dessen mildes Gift einem buchstäblich die Stimme verschlägt. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Une variété de poisson globe qui vit dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"幻海流に適応したブローフィッシュ\\r\\nロータノ海沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"习惯了幻海流的海毒鲀。\\r\\n罗塔诺海海面的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"환해류에 적응한 복어.\\n로타노 해 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":20},"29769":{"id":29769,"icon":29088,"name":{"en":"Deep-sea Eel","de":"Tiefenaal","fr":"Anguille des profondeurs","ja":"ディープシーイール","cn":"深海鳗","ko":"심해 장어"},"description":{"en":"As may be inferred from the less-than-spectacular name, this eel resides in the sea. The deep part.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Eine seltene Aalart aus der Rhotano-See, die gewisse Merkmale ihrer uralten Vorfahren behalten hat. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Une anguille qui a conservé les attributs préhistoriques de ces ancêtres.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit sud de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"原始的な形態を残した稀少な古代魚\\r\\nロータノ海沖合の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"一种以原始形态留存至今的稀有古代鱼。\\r\\n罗塔诺海海面的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"원시적인 형태가 남아 있는 희귀한 고대어.\\n로타노 해 먼바다의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29770":{"id":29770,"icon":29092,"name":{"en":"Executioner","de":"Schiffshenker","fr":"Exécuteur","ja":"エクスキューショナー","cn":"处刑者","ko":"사형집행어"},"description":{"en":"Goes out of its way to make life as difficult as possible for those who enter its territory, including sawing holes in hulls and tearing through nets.\\r\\n\\r\\n[Suitable for printing on extra large canvases.]","de":"Ein extrem großer und angriffslustiger Titansägerochen, der in der Rhotano-See zuhause ist. (Kann als Fischdruck in Rahmen der Größe XL ausgestellt werden.)","fr":"Un poisson-scie titan encore plus féroce que les autres.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit sud de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de très grande taille]","ja":"極めて獰猛な大物タイタニックソー\\r\\nロータノ海沖合の稀少魚\\r\\n[魚拓額縁G4に設定可能]","cn":"极为凶猛的巨大锯鲛。\\r\\n罗塔诺海海面的稀有鱼。\\r\\n可以拓印在特大型鱼拓画框上。","ko":"지극히 사나운 커다란 침몰상어.\\n로타노 해 먼바다의 희귀어.\\n[4등급 어탁 액자에 탁본 가능]"},"contentBonus":14},"29771":{"id":29771,"icon":29813,"name":{"en":"Wild Urchin","de":"Riesenseeigel","fr":"Oursin féroce","ja":"ワイルドアーチン","cn":"狂野海胆","ko":"야생 성게"},"description":{"en":"A creamy center encased in horrendously sharp spines. Only those who acquire the knack of eating one without impaling themselves can acquire the decidedly acquired taste.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein seltener und außer<SoftHyphen/>ge<SoftHyphen/>wöhn<SoftHyphen/>lich großer Seeigel, der in den Phantomströmungen in der nördlichen Straße von Merlthor treibt. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un oursin énorme des courants spectraux qui embroche ses proies sur ses épines.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit nord de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"幻海流に乗って棘を突き刺してくる巨大なウニ\\r\\nメルトール海峡北の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种乘上了幻海流的巨大海胆，会用棘刺攻击附近的生物。\\r\\n梅尔托尔海峡北的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"환해류를 타고 가시를 꽂는 거대한 성게.\\n멜토르 해협 북쪽의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29772":{"id":29772,"icon":29546,"name":{"en":"True Barramundi","de":"Barramundi","fr":"Barramundi","ja":"バラマンディ","cn":"尖吻鲈","ko":"바라문디"},"description":{"en":"This slow-moving, ponderous wavekin manages to avoid the attention of predators by being so unremarkable as to hardly warrant attention in the first place.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Diese großen Jäger lauern in den Phantomströmungen der Rhotano-See. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un énorme poisson d\'eau de mer qui vit dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"幻海流中に棲息する大型の肉食魚\\r\\nロータノ海沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种栖息在幻海流中的大型食肉鱼。\\r\\n罗塔诺海海面的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"환해류 속에 서식하는 대형 육식어.\\n로타노 해 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29773":{"id":29773,"icon":29374,"name":{"en":"Mopbeard","de":"Tanzender Zupfbart","fr":"Barbe-trempée","ja":"モッピィビアード","cn":"幻纱披风","ko":"빗자루수염"},"description":{"en":"Lifting it above the waterline causes it to transform from an elegant oceanic beauty to something resembling...well, a mop.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Auf riesigen Membranen gleitet dieser Kopffüßer elegant durch die Phantomströmungen der nördlichen Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un poulpe qui se déplace élégamment dans l\'eau grâce à sa membrane ondulante.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit nord de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"巨大な皮膜で幻海流を優雅に泳ぐ頭足類\\r\\nメルトール海峡北の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"用巨大皮膜在幻海流中优雅游泳的头足类生物。\\r\\n梅尔托尔海峡北的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"거대한 피막으로 우아하게 환해류를 헤엄치는 두족류.\\n멜토르 해협 북쪽의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":13},"29774":{"id":29774,"icon":28003,"name":{"en":"Slipsnail","de":"Schlangenfisch","fr":"Limace de mer","ja":"スネイルフィッシュ","cn":"蜗牛鱼","ko":"달팽이고기"},"description":{"en":"While it may seem harmless enough, it has a nasty surprise in store for unwitting predators.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein seltener, schuppenloser Fisch, der sich allein durch Magie vor seinen Fressfeinden schützt und in der Rhotano-See zuhause ist. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un gastéropode dépourvu de coquille qui a recours à la magie pour se protéger des prédateurs.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"鱗を持たず魔力によって身を守る稀少な魚\\r\\nロータノ海沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"一种没有鳞片，只用魔力保护自己的稀有鱼。\\r\\n罗塔诺海海面的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"비늘이 없고 마력으로 몸을 지키는 희귀한 물고기.\\n로타노 해 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29775":{"id":29775,"icon":29816,"name":{"en":"Aronnax","de":"Aronnax","fr":"Aronnax","ja":"アロナクス","cn":"阿龙纳斯","ko":"아로낙스"},"description":{"en":"Its remarkable speed is matched only by its unfathomable clumsiness, the combination of which often leads it straight into the waiting nets of fishers.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Ein seltenes und überaus großes Finster-Perlboot, das mit den Phantomströmungen der Rhotano-See das Meer bereist. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un grand nautile sombre qui voyage de mer en mer en voguant dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"幻海流に乗り大海を旅する大型のダークノーチラス\\r\\nロータノ海沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"乘上幻海流，在大海中旅行的大型暗鹦鹉螺。\\r\\n罗塔诺海海面的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"환해류를 타고 대해를 여행하는 대형 어둑앵무조개.\\n로타노 해 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29776":{"id":29776,"icon":29093,"name":{"en":"Coccosteus","de":"Coccosteus","fr":"Coccosteus","ja":"コッコステウス","cn":"尾骨鱼","ko":"코코스테우스"},"description":{"en":"Revered by the Sahagin and reviled by practically everyone else. Its proclivity for biting fingers means that most who catch one end up wishing they hadn\'t.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Der seltene Coccosteus ist eine höher entwickelte Form des Tiefsee-Dunkleosteus und treibt für gewöhnlich in der nördlichen Straße von Merlthor. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un dinichthys ancien vénéré par les Sahuagins et qui vit dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit nord de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"幻海流中に棲息するエルダー・ディニクティスの上位種\\r\\nメルトール海峡北の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"是栖息在幻海流中的古老恐鱼的高级品种。\\r\\n梅尔托尔海峡北的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"환해류 속에 서식하는 장로 디니크티스의 상위종.\\n멜토르 해협 북쪽의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29777":{"id":29777,"icon":29075,"name":{"en":"Bartholomew the Chopper","de":"Hans der Klipper","fr":"Bartholomew l\'équarrisseur","ja":"ザ・チョッパー","cn":"剪碎手巴塞洛缪","ko":"재단게"},"description":{"en":"Suspected by some to be the reincarnation of an unhinged murderer, although it is also known to have a more amiable side. Well, about as amiable as one can expect from a wavekin that revels in killing.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Dieses angriffslustige wie seltene Schalentier ist in der nördlichen Straße von Merlthor beheimatet und  durchschneidet mit seinen Scheren selbst Ankerketten. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un crustacé capable de sectionner n\'importe quoi avec ses puissantes pinces.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit nord de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"力強い鋏で何もかもを切り刻む獰猛な甲殻類\\r\\nメルトール海峡北の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"会用强力的钳子将一切都剪碎的凶猛甲壳类生物。\\r\\n梅尔托尔海峡北的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"힘센 집게발로 무엇이는 잘라버리는 사나운 갑각류.\\n멜토르 해협 북쪽의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":21},"29778":{"id":29778,"icon":29066,"name":{"en":"Prowler","de":"Tigerkatzendorsch","fr":"Morue tigre-chat","ja":"タイガーキャットコッド","cn":"巡游者","ko":"호랑냥대구"},"description":{"en":"While the word “prowl” may suggest the slow, deliberate movement of one tracking its prey, this particular wavekin is simply slow by nature, mainly as a result of sheer indolence.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ein seltener Katzendorsch, der Phantomströmungen bevorzugt und vorwiegend in der nördlichen Straße von Merlthor zuhause ist. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Une morue tigre douce comme un agneau qui vit dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit nord de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"幻海流中に棲息する温厚なタイガーコッド\\r\\nメルトール海峡北の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"栖息在幻海流中的温厚虎纹鳕。\\r\\n梅尔托尔海峡北的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"환해류 속에 서식하는 온순한 호랑대구.\\n멜토르 해협 북쪽의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29779":{"id":29779,"icon":29086,"name":{"en":"Charlatan Survivor","de":"Scharlatanschere","fr":"Survivant charlatan","ja":"シャーラタンサバイバー","cn":"寄生幸存者","ko":"사기꾼 투구게"},"description":{"en":"At first glance, the charlatan survivor may appear to be a well-armored crustacean, but the outer shell is merely a purloined disguise concealing a much smaller creature beneath. Luckily, predatory wavekin are quite easily deceived and often choose to leave it alone in order to pursue less chitinous prey.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Ein seltener und gut getarnter Meeresbewohner der südlichen Straße von Merlthor, der sich besonders in Phantomströmungen wohlfühlt. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un parasite vivant dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois dans le détroit sud de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"幻海流中を漂う寄生生物\\r\\nメルトール海峡南の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"漂流在幻海流中的寄生生物。\\r\\n梅尔托尔海峡南的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"환해류를 떠다니는 기생생물.\\n멜토르 해협 남쪽의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29780":{"id":29780,"icon":29331,"name":{"en":"Prodigal Son","de":"Verlorener Sohn","fr":"Fils prodigue","ja":"プロディガルサン","cn":"浪子鱼","ko":"방탕아"},"description":{"en":"Rather than follow the standard migratory patterns of his brethren, this wandering wavekin swims to the beat of his own drum, and comes and goes as he pleases.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Seltener Blauglocken-Lachs, der offenbar kein Interesse daran hat, die Reise flussaufwärts zu beginnen. Vor allem in der Rhotano-See zu finden. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un saumon indigo qui a cessé de remonter le cours des rivières pour frayer.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer de Rhotano.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"河に遡上することを忘れたブルーサーモン\\r\\nロータノ海沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"变得只会随波逐流，忘记逆流而上的蓝铃鲑。\\r\\n罗塔诺海海面的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"강으로 거슬러 올라가는 일을 잊은 푸른연어.\\n로타노 해 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29781":{"id":29781,"icon":29162,"name":{"en":"Gugrusaurus","de":"Gugrusaurus","fr":"Gugrusaurus","ja":"ググリューサウルス","cn":"守领鳍龙","ko":"구그루사우루스"},"description":{"en":"Spends most of its life attempting to slaughter anything and everything that it catches sight of. Considering the ample opportunities to practice such skills, it has become rather good at it.\\r\\n\\r\\n[Suitable for printing on extra large canvases.]","de":"Ein seltenes und angriffslustiges Meeresreptil, das als besonders raffiniert gilt und in der nördlichen Straße von Merlthor heimisch ist. (Kann als Fischdruck in Rahmen der Größe XL ausgestellt werden.)","fr":"Un reptile remarquable pour la férocité avec laquelle il protège son territoire.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit nord de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de très grande taille]","ja":"縄張り意識の強い獰猛な甲鱗綱の魔物\\r\\nメルトール海峡北の稀少魚\\r\\n[魚拓額縁G4に設定可能]","cn":"领地意识极强的凶猛甲鳞纲魔物。\\r\\n梅尔托尔海峡北的稀有鱼。\\r\\n可以拓印在特大型鱼拓画框上。","ko":"영역 의식이 강한 사나운 갑린강 마물.\\n멜토르 해협 북쪽의 희귀어.\\n[4등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29782":{"id":29782,"icon":29731,"name":{"en":"Funnel Shark","de":"Trichterhai","fr":"Requin entonnoir","ja":"ファンネルシャーク","cn":"漏斗鲨","ko":"깔때기상어"},"description":{"en":"Its gaping maw draws in all manner of ocean life, along with a range of less-than-edible objects.\\r\\n\\r\\n[Suitable for display in aquariums tier 4 and higher.]\\r\\n[Suitable for printing on extra large canvases.]","de":"Der Trichterhai ist zwar selten aber mit Sicherheit der größte Bewohner der Galadion-Bucht. (Kann in Aquarien der Größe XL gehalten werden. Kann als Fischdruck in Rahmen der Größe XL ausgestellt werden.)","fr":"Un requin comptant parmi les plus grandes créatures de son territoire.\\r\\nRarissime, on l\'aperçoit parfois au large de la baie de Galadion.\\r\\n[Peut être élevé dans un aquarium de très grande taille ou supérieure]\\r\\n[Affichable dans un cadre à ichtyogramme de très grande taille]","ja":"ガラディオン湾でも最大級の巨体を誇る存在\\r\\nガラディオン湾沖合の稀少魚\\r\\n[G4以上の水槽で飼育可能]\\r\\n[魚拓額縁G4に設定可能]","cn":"加拉迪翁湾中最大个的巨型鱼。\\r\\n加拉迪翁湾外海的稀有鱼。\\r\\n可以饲养在4级以上的水族箱。\\r\\n可以拓印在特大型鱼拓画框上。","ko":"갈라디온 만에서도 가장 큰 덩치를 자랑하는 존재.\\n갈라디온 만 먼바다의 희귀어.\\n[4등급 이상 수조에서 사육 가능]\\n[4등급 어탁 액자에 탁본 가능]"},"contentBonus":14},"29783":{"id":29783,"icon":28004,"name":{"en":"The Fallen One","de":"Der Gefallene","fr":"Ange déchu","ja":"フォーレンワン","cn":"坠天鱼","ko":"타락어"},"description":{"en":"Believed by some to have descended from the heavens, and judging by the way it nervously flits about the ocean, it wishes it could return to whence it came. Few wavekin look less comfortable in their habitat than this unfortunate creature.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Ein Tiefseefisch, dessen Finnen pechschwarz sind und der in der nördlichen Straße von Merlthor lebt. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un poisson dont les nageoires rappellent les ailes d\'un ange.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit nord de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"翼に似た漆黒のヒレを有する海水魚\\r\\nメルトール海峡北の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种海鱼，拥有着形似翅膀的黑色鱼鳍。\\r\\n梅尔托尔海峡北的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"날개처럼 생긴 칠흑색 지느러미가 있는 바닷물고기.\\n멜토르 해협 북쪽의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29784":{"id":29784,"icon":28005,"name":{"en":"Spectral Megalodon","de":"Spektral-Megalodon","fr":"Mégalodon spectral","ja":"スペクトラルメガロドン","cn":"幻光巨齿鲨","ko":"유령 메갈로돈"},"description":{"en":"Due to the fact that most of its prey are petrified upon catching sight of this ominously glowing predator, it has rather an easy time finding a steady supply of food.\\r\\n\\r\\n[Suitable for display in aquariums tier 4 and higher.]\\r\\n[Suitable for printing on extra large canvases.]","de":"Hochkonzentrierter Äther aus der Phantomströmung hat diesen seltenen Megalodon der Galadion-Bucht stark verändert. (Kann in Aquarien der Größe XL gehalten werden. Kann als Fischdruck in Rahmen der Größe XL ausgestellt werden.)","fr":"Un mégalodon dont la constitution a été fortement altérée par les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large de la baie de Galadion.\\r\\n[Peut être élevé dans un aquarium de très grande taille ou supérieure]\\r\\n[Affichable dans un cadre à ichtyogramme de très grande taille]","ja":"幻海流の影響を強く受けたメガロドン\\r\\nガラディオン湾沖合の稀少魚\\r\\n[G4以上の水槽で飼育可能]\\r\\n[魚拓額縁G4に設定可能]","cn":"受幻海流强烈影响的巨齿鲨。\\r\\n加拉迪翁湾外海的稀有鱼。\\r\\n可以饲养在4级以上的水族箱。\\r\\n可以拓印在特大型鱼拓画框上。","ko":"환해류의 영향을 강하게 받은 메갈로돈.\\n갈라디온 만 먼바다의 희귀어.\\n[4등급 이상 수조에서 사육 가능]\\n[4등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29785":{"id":29785,"icon":28006,"name":{"en":"Spectral Discus","de":"Spektral-Diskusfisch","fr":"Discus spectral","ja":"スペクトラルディスカス","cn":"幻光盘丽鱼","ko":"유령 원반어"},"description":{"en":"This aetherially infused wavekin gathers rather a lot of unwanted attention, and it has no natural defenses to fend off curious predators.\\r\\n\\r\\n[Suitable for display in aquariums tier 2 and higher.]\\r\\n[Suitable for printing on medium canvases.]","de":"Hochkonzentrierter Äther aus der Phantomströmung hat diesen seltenen Diskusfisch der südlichen Straße von Merlthor stark verändert. (Kann in Aquarien der Größe M oder größer gehalten werden. Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un discus dont la constitution a été fortement altérée par les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois dans le détroit sud de Merlthor.\\r\\n[Peut être élevé dans un aquarium de taille moyenne ou supérieure]\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"幻海流の影響を強く受けたディスカス\\r\\nメルトール海峡南の稀少魚\\r\\n[G2以上の水槽で飼育可能]\\r\\n[魚拓額縁G2に設定可能]","cn":"受幻海流强烈影响的盘丽鱼。\\r\\n梅尔托尔海峡南的稀有鱼。\\r\\n可以饲养在2级以上的水族箱。\\r\\n可以拓印在中型鱼拓画框上。","ko":"환해류의 영향을 강하게 받은 원반어.\\n멜토르 해협 남쪽의 희귀어.\\n[2등급 이상 수조에서 사육 가능]\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29786":{"id":29786,"icon":28007,"name":{"en":"Spectral Sea Bo","de":"Spektral-Seebo","fr":"Hippocampe spectral","ja":"スペクトラルシーホース","cn":"幻光海马","ko":"유령 해마"},"description":{"en":"Its strange blue glow seems to have done wonders for its self-confidence, and it can be seen doing the underwater variation of strutting like a peacock...or whatever the chocobo equivalent of a peacock is.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Hochkonzentrierter Äther aus der Phantomströmung hat diesen seltenen Seebo der nördlichen Straße von Merlthor stark verändert. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un hippocampe dont la constitution a été fortement altérée par les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois vers le détroit nord de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"幻海流の影響を強く受けたシーホース\\r\\nメルトール海峡北の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"受幻海流强烈影响的海马。\\r\\n梅尔托尔海峡北的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"환해류의 영향을 강하게 받은 해마.\\n멜토르 해협 북쪽의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29787":{"id":29787,"icon":28008,"name":{"en":"Spectral Bass","de":"Spektralbarsch","fr":"Bar spectral","ja":"スペクトラルバス","cn":"幻光鲈","ko":"유령 농어"},"description":{"en":"This most ordinary of fish has become rather extraordinary thanks to being bathed in otherworldly aether, giving it a fetching blue tinge.\\r\\n\\r\\n[Suitable for display in aquariums tier 3 and higher.]\\r\\n[Suitable for printing on large canvases.]","de":"Hochkonzentrierter Äther aus der Phantomströmung hat diesen seltenen Barsch der Rhotano-See stark verändert. (Kann in Aquarien der Größe L oder größer gehalten werden. Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un bar dont la constitution a été fortement altérée par les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer de Rhotano.\\r\\n[Peut être élevé dans un aquarium de grande taille ou supérieure]\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"幻海流の影響を強く受けたバス\\r\\nロータノ海沖合の稀少魚\\r\\n[G3以上の水槽で飼育可能]\\r\\n[魚拓額縁G3に設定可能]","cn":"受幻海流强烈影响的鲈鱼。\\r\\n罗塔诺海海面的稀有鱼。\\r\\n可以饲养在3级以上的水族箱。\\r\\n可以拓印在大型鱼拓画框上。","ko":"환해류의 영향을 강하게 받은 농어.\\n로타노 해 먼바다의 희귀어.\\n[3등급 이상 수조에서 사육 가능]\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29788":{"id":29788,"icon":28009,"name":{"en":"Sothis","de":"Sotis","fr":"Sothis","ja":"ソティス","cn":"索蒂斯","ko":"소티스"},"description":{"en":"It is unclear how this species of turtle came to have a shell covered in glittering crystal, though it does give oceanic hunters pause for thought before they attempt to bite down on it. This could be considered a form of unnatural protection.\\r\\n\\r\\n[Suitable for printing on extra large canvases.]","de":"Ein legendäres, uraltes Reptil, das in der Galadion-Bucht lebt und auf dessen Rücken ein funkelnder Kristall wächst. (Kann als Fischdruck in Rahmen der Größe XL ausgestellt werden.)","fr":"Une tortue géante dont la carapace est recouverte de cristaux corrompus à la brillance ca<SoftHyphen/>rac<SoftHyphen/>té<SoftHyphen/>ris<SoftHyphen/>ti<SoftHyphen/>que.\\r\\nProie légendaire du large de la baie de Galadion.\\r\\n[Affichable dans un cadre à ichtyogramme de très grande taille]","ja":"偏属性クリスタルを宿した巨大な古代獣\\r\\nガラディオン湾沖合の伝説魚\\r\\n[魚拓額縁G4に設定可能]","cn":"寄宿着偏属性水晶的巨大古代兽。\\r\\n加拉迪翁湾外海的传说鱼。\\r\\n可以拓印在特大型鱼拓画框上。","ko":"편속성 크리스탈을 지닌 거대한 고대 야수.\\n갈라디온 만 먼바다의 전설어.\\n[4등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29789":{"id":29789,"icon":28010,"name":{"en":"Coral Manta","de":"Korallenmanta","fr":"Raie corallienne","ja":"コーラルマンタ","cn":"珊瑚蝠鲼","ko":"산호가오리"},"description":{"en":"Few creatures can claim to have an entire ecosystem on their back, although this appears to afford the host no practical benefits whatsoever.\\r\\n\\r\\n[Suitable for printing on extra large canvases.]","de":"Der Korallenmanta ist ein legendäres Exemplar seiner Gattung, das in der südlichen Straße von Merlthor lebt. Seine Ausmaße sind so enorm, dass ein Korallenriff auf seinem Rücken Platz findet. (Kann als Fischdruck in Rahmen der Größe XL ausgestellt werden.)","fr":"Une raie majestueuse portant sur son dos une forêt de coraux aux couleurs chatoyantes.\\r\\nProie légendaire du détroit sud de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de très grande taille]","ja":"鮮やかなサンゴ礁を宿した巨大マンタ\\r\\nメルトール海峡南の伝説魚\\r\\n[魚拓額縁G4に設定可能]","cn":"寄宿着鲜艳珊瑚礁的巨大蝠鲼。\\r\\n梅尔托尔海峡南的传说鱼。\\r\\n可以拓印在特大型鱼拓画框上。","ko":"알록달록한 산호초가 있는 거대 가오리.\\n멜토르 해협 남쪽의 전설어.\\n[4등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29790":{"id":29790,"icon":28011,"name":{"en":"Stonescale","de":"Felsenschuppe","fr":"Pierrécailles","ja":"ロックスケイル","cn":"石骨鱼","ko":"바위비늘"},"description":{"en":"The thick covering of rock-like substance does little to improve this shark\'s mobility. Being an apex predator means it has little need of excessive armor plating.\\r\\n\\r\\n[Suitable for display in aquariums tier 4 and higher.]\\r\\n[Suitable for printing on extra large canvases.]","de":"Eine legendäre Felsenflosse aus der Rhotano-See, deren Schuppen teilweise versteinert sind. (Kann in Aquarien der Größe XL oder größer gehalten werden. Kann als Fischdruck in Rahmen der Größe XL ausgestellt werden.)","fr":"Un rocquin très âgé entièrement recouvert d\'écailles dures comme de la pierre.\\r\\nProie légendaire du large de la mer de Rhotano.\\r\\n[Peut être élevé dans un aquarium de très grande taille ou supérieure]\\r\\n[Affichable dans un cadre à ichtyogramme de très grande taille]","ja":"全身の鱗が岩のように変質した老齢のロックフィン\\r\\nロータノ海沖合の伝説魚\\r\\n[G4以上の水槽で飼育可能]\\r\\n[魚拓額縁G4に設定可能]","cn":"全身的鳞片已经变质成为岩石的年迈石鳍鲨。\\r\\n罗塔诺海海面的传说鱼。\\r\\n可以饲养在4级以上的水族箱。\\r\\n可以拓印在特大型鱼拓画框上。","ko":"온몸의 비늘이 바위처럼 변질된 노령의 바위지느러미.\\n로타노 해 먼바다의 전설어.\\n[4등급 이상 수조에서 사육 가능]\\n[4등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"29791":{"id":29791,"icon":28012,"name":{"en":"Elasmosaurus","de":"Elasmosaurus","fr":"Elasmosaurus","ja":"エラスモサウルス","cn":"依拉丝莫龙","ko":"엘라스모사우루스"},"description":{"en":"In the harsh, unforgiving open sea, few creatures have proven a more valuable ally to mankind than the elasmosaurus. Though they are most often known to tow ships and carry out courageous acts of self-sacrifice, these gentle giants can also be lethally dangerous when angered.\\r\\n\\r\\n[Suitable for printing on extra large canvases.]","de":"Ein legendärer Wassersaurier aus der nördlichen Straße von Merlthor, der schon längst als ausgestorben galt. (Kann als Fischdruck in Rahmen der Größe XL ausgestellt werden.)","fr":"Un gigantesque dragon de mer qu\'on pensait disparu depuis des millénaires.\\r\\nProie légendaire du détroit nord de Merlthor.\\r\\n[Affichable dans un cadre à ichtyogramme de très grande taille]","ja":"絶滅したと考えられていた大型海竜\\r\\nメルトール海峡北の伝説魚\\r\\n[魚拓額縁G4に設定可能]","cn":"疑似已经灭绝了的大型海龙。\\r\\n梅尔托尔海峡北的传说鱼。\\r\\n可以拓印在特大型鱼拓画框上。","ko":"멸종한 줄 알았던 대형 해룡.\\n멜토르 해협 북쪽의 전설어.\\n[4등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32055":{"id":32055,"icon":29110,"name":{"en":"Tortoiseshell Crab","de":"Schildkrötkrabbe","fr":"Crabe-chélone","ja":"トータスシェルクラブ","cn":"龟甲蟹","ko":"거북등딱지게"},"description":{"en":"Somewhere out there is bound to be a crabshell tortoise.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Ist es eine Schildkröte? Ist es eine Krabbe? Nein, es ist eine Schildkrötkrabbe! (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un gros crustacé qui se pêche au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"シェルダレー諸島沖合で水揚げされる大ぶりな甲殻類\\r\\n[魚拓額縁G2に設定可能]","cn":"在谢尔达莱群岛近海捕获到的大型甲壳类。\\r\\n可以拓印在中型鱼拓画框上。","ko":"시엘달레 제도 먼바다에서 낚이는 커다란 갑각류.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":21},"32056":{"id":32056,"icon":29902,"name":{"en":"Lady\'s Cameo","de":"Kamee der Edvya","fr":"Bijou-princier","ja":"エドヴィアの指輪","cn":"艾德薇雅的戒指","ko":"에드비아의 반지"},"description":{"en":"Initially named after a famous piece of jewelry, it has since become a favorite among goldsmiths crafting pieces of their own.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Wäre dies tatsächlich ein Schmuckstein, dann wäre dieser Fang weitaus mehr wert. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un mollusque de petite taille qu\'on trouve au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"シェルダレー諸島沖合に棲息する小ぶりの巻貝\\r\\n[魚拓額縁G1に設定可能]","cn":"栖息在谢尔达莱群岛近海的小型卷贝。\\r\\n可以拓印在小型鱼拓画框上。","ko":"시엘달레 제도 먼바다에 서식하는 작은 고둥.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32057":{"id":32057,"icon":29118,"name":{"en":"Metallic Boxfish","de":"Schillerbox","fr":"Poisson-boîte","ja":"メタルボックス","cn":"金属箱","ko":"철상자복"},"description":{"en":"Although this wavekin only inflates to a box shape when threatened, having a fisher\'s hook through its lip seems to be enough to trigger this response. As a result, they are rarely seen in a deflated state.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Getrocknet eignet sich dieser Fisch als großartige Aufbewahrungsbox für all die Ausrüstung, die man nur noch aus nostalgischen Gründen bei sich trägt. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un poisson globe qui a la particularité de prendre une forme à cinq côtés lorsqu\'il gonfle.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"身体を箱のように膨らませる海水魚\\r\\n[魚拓額縁G1に設定可能]","cn":"能将身体膨胀成像箱子一样的海水鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"몸을 상자처럼 부풀리는 바닷물고기.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":20},"32058":{"id":32058,"icon":29130,"name":{"en":"Goobbue Ray","de":"Goobbue-Rochen","fr":"Raie-goobbue","ja":"グゥーブーレイ","cn":"古菩鳐","ko":"구부가오리"},"description":{"en":"While this wavekin has much in common with the goobbues from which it gained its name, perhaps most noticeable is the expression of gormless contentment permanently etched on its face.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Der Goobbue-Rochen wünscht sich innig, dass er nicht konsequent auf sein Äußeres reduziert werden würde. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Cette raie ressemble à un goobbue lorsqu\'on la voit du dessus.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"百獣綱の獣に喩えられる大型のエイ\\r\\n[魚拓額縁G3に設定可能]","cn":"用百兽纲中野兽的名字命名的大型鳐鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"백수강 짐승에 비유되는 대형 가오리.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":22},"32059":{"id":32059,"icon":29494,"name":{"en":"Watermoura","de":"Wassermoura","fr":"Wamoura de mer","ja":"シーワモーラ","cn":"海瓦魔蛾","ko":"바다와무라"},"description":{"en":"While it moves with undeniable grace, the effect is rather spoiled by its brutish appearance.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Dieser Fisch mag ja große Flossen haben, aber sieht er deswegen wirklich wie eine Wamoura aus? Fischerexperten sind sich nach wie vor uneinig. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Les nageoires de ce poisson donnent à sa silhouette des airs de wamoura.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"ヒレを広げた姿が昆虫の羽根に似た海水魚\\r\\n[魚拓額縁G2に設定可能]","cn":"张开的鱼鳍仿佛昆虫翅膀一样的海水鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"지느러미를 펼친 모습이 곤충의 날개와 닮은 바닷물고기.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32060":{"id":32060,"icon":29710,"name":{"en":"King Cobrafish","de":"Königskobrafisch","fr":"Poisson-cobra royal","ja":"キングコブラフィッシュ","cn":"眼镜王蛇鱼","ko":"왕독사고기"},"description":{"en":"As a general rule, fish named after snakes are best left well alone.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"In diesem Gewässer kennt man keinen Schmerz! (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un énorme poisson qu\'on trouve au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"シェルダレー諸島沖合に棲息する大柄な魚\\r\\n[魚拓額縁G3に設定可能]","cn":"栖息在谢尔达莱群岛近海的大型鯙科鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"시엘달레 제도 먼바다에 서식하는 커다란 곰치.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32061":{"id":32061,"icon":29142,"name":{"en":"Mamahi-mahi","de":"Mamahi-mahi","fr":"Mamahi-mahi","ja":"ママヒマヒ","cn":"真麻希鲯鳅","ko":"마마히마히"},"description":{"en":"Its decidedly maternal-sounding name alludes to its remarkable fecundity.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Eine unbestätigte Theorie besagt, dass dieser Fisch eigentlich ein Lalafell ist, der sich übermäßigem Fantasia-Konsum hingab. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un sous-genre rare du mahi-mahi qu\'on aperçoit parfois au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"シェルダレー諸島沖合に棲息するマヒマヒの稀少種\\r\\n[魚拓額縁G3に設定可能]","cn":"栖息在谢尔达莱群岛近海的麻希鲯鳅的稀有种类。\\r\\n可以拓印在大型鱼拓画框上。","ko":"시엘달레 제도 먼바다에 서식하는 희귀종 마히마히.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32062":{"id":32062,"icon":29038,"name":{"en":"Lavandin Remora","de":"Lavandula-Schiffshalter","fr":"Rémora lavandin","ja":"ラバンジンレモラ","cn":"混种薰衣草印鱼","ko":"라반딘 빨판어"},"description":{"en":"Often confused with the similarly named lavender remora, but considering that they both taste more or less the same, this is little cause for concern.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Klebt sich an jedes Schiff und verbeitet einen angenehmen Lavendelgeruch. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un rémora au corps encore plus plat que les autres espèces de son genre.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"長細い体躯が特徴の海水魚\\r\\n[魚拓額縁G2に設定可能]","cn":"有着细长身体的海水鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"가늘고 긴 몸이 특징인 바닷물고기.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32063":{"id":32063,"icon":28027,"name":{"en":"Spectral Butterfly","de":"Spektralschmetterling","fr":"Papillon spectral","ja":"スペクトラルバタフライ","cn":"幻光蝴蝶鱼","ko":"유령나비어"},"description":{"en":"Some believe their appearance to be an omen of considerable riches on the horizon. Considering that these wavekin fetch a pretty gil at market, perhaps there is some truth to it.\\r\\n\\r\\n[Suitable for display in aquariums tier 1 and higher.]\\r\\n[Suitable for printing on small canvases.]","de":"So zart wie ein Kichern unter Wasser. (Kann in Aquarien der Größe S oder größer gehalten werden. Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un papillon corail dont la constitution a été fortement altérée par les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large des îles de Cieldalaes.\\r\\n[Peut être élevé dans un aquarium de petite taille ou supérieure]\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"幻海流の影響を強く受けたコーラルバタフライ\\r\\nシェルダレー諸島沖合の稀少魚\\r\\n[G1以上の水槽で飼育可能]\\r\\n[魚拓額縁G1に設定可能]","cn":"受幻海流强烈影响的珊瑚蝶。\\r\\n谢尔达莱群岛近海的稀有鱼。\\r\\n可以饲养在1级以上的水族箱。\\r\\n可以拓印在小型鱼拓画框上。","ko":"환해류의 영향을 강하게 받은 산호나비어.\\n시엘달레 제도 먼바다의 희귀어.\\n[1등급 이상 수조에서 사육 가능]\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32064":{"id":32064,"icon":28021,"name":{"en":"Cieldalaes Geode","de":"Himmlische Geode","fr":"Géode-de-Cieldalaes","ja":"シェルダレージオード","cn":"谢尔达莱结晶","ko":"시엘달레 수정굴어"},"description":{"en":"The true beauty of this wavekin is on the inside, whereas on the outside, it looks like a coblyn in a bad mood.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Die Schönheit im Maul dieses Fisches können die meisten Betrachter genau ein einziges Mal bewundern. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"La gueule de cet animal sorti tout droit de la préhistoire recèle des cristaux comme les géodes inanimées.\\r\\nRarissime, on l\'aperçoit parfois au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"宝石のような口腔内が特徴の古代魚\\r\\nシェルダレー諸島沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"有着像宝石一样口腔的古代鱼。\\r\\n谢尔达莱群岛近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"보석 같은 입안이 특징인 고대어.\\n시엘달레 제도 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32065":{"id":32065,"icon":28023,"name":{"en":"Titanshell Crab","de":"Titanschalenkrebs","fr":"Crabe cuirassé","ja":"タイタンシェルクラブ","cn":"泰坦硬甲蟹","ko":"타이탄등딱지게"},"description":{"en":"Those wishing to sample the succulent meat inside must first contend with its near-impenetrable shell. Or alternatively, have the fishmonger do that part for them beforehand.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Harte Schale, außer<SoftHyphen/>ge<SoftHyphen/>wöhn<SoftHyphen/>lich köstlicher Kern! (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un crabe doté d\'une carapace plus épaisse et plus résistante que celle de ses congénères.\\r\\nRarissime, on l\'aperçoit parfois au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"厚い殻を持つ大型のトータスシェルクラブ\\r\\nシェルダレー諸島沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"有着厚实外壳的大型龟甲蟹。\\r\\n谢尔达莱群岛近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"껍데기가 두꺼운 대형 거북등딱지게.\\n시엘달레 제도 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":21},"32066":{"id":32066,"icon":28020,"name":{"en":"Mythril Boxfish","de":"Mythril-Kofferfisch","fr":"Coffret-de-mithril","ja":"ミスリルボックス","cn":"秘银箱","ko":"미스릴상자복"},"description":{"en":"Valued more for its boxlike remains than for its meat, which is astonishingly mediocre.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Du packst deinen Mythril-Kofferfisch mit einem Angelhaken<Indent/>... (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Les courants spectraux ont renforcé l\'armure d\'écailles déjà bien résistantes de ce poisson-boîte.\\r\\nRarissime, on l\'aperçoit parfois au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"幻海流のエーテルで硬質化したメタルボックス\\r\\nシェルダレー諸島沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"受幻海流以太的影响，外表变得坚硬的金属箱。\\r\\n谢尔达莱群岛近海的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"환해류의 에테르 때문에 껍질이 딱딱해진 철상자복.\\n시엘달레 제도 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":20},"32067":{"id":32067,"icon":29079,"name":{"en":"Mistbeard\'s Cup","de":"Rauschebarttasse","fr":"Nautile de Barbe-Brume","ja":"霧髭の盃","cn":"雾须酒杯","ko":"안개수염의 잔"},"description":{"en":"Judging by its volume, perhaps “Mistbeard\'s flagon” would have been a more apt name.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Wer nicht aus einem gigantischen Kopffüßer trinkt, ist auch kein richtiger Pirat. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Le roi des pirates se serait servi d\'un de ces nautiles comme d\'une coupe.\\r\\nRarissime, on l\'aperçoit parfois au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"海賊霧髭が酒盃にしたとされる大型の古代貝\\r\\nシェルダレー諸島沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"被认为是海盗王雾须用来当做酒杯的大型古代贝类。\\r\\n谢尔达莱群岛近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"해적 안개수염이 술잔으로 사용했다는 대형 고대 조개.\\n시엘달레 제도 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32068":{"id":32068,"icon":29658,"name":{"en":"Anomalocaris Saron","de":"Anomalocaris Saron","fr":"Anomalocaris saron","ja":"アノマロカリス・サロン","cn":"帚状奇虾","ko":"아노말로카리스 사론"},"description":{"en":"At a certain point in history, this wavekin simply stopped evolving. Its lackluster appearance would suggest that this is not due to having achieved unsurpassable perfection, but rather a lack of ambition on the part of the species as a whole.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Ein tentakeliger Alptraum aus uralten Zeiten. In seinem Haus zu Cieldalaes wartet Anomalocaris Saron träumend. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Cet animal ancestral assoiffé d\'éther recherche en permanence les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"エーテル流を追って泳ぐ古代生物\\r\\nシェルダレー諸島沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"追逐以太流遨游的古代生物。\\r\\n谢尔达莱群岛近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"에테르류를 따라 헤엄치는 고대 생물.\\n시엘달레 제도 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32069":{"id":32069,"icon":28024,"name":{"en":"Flaming Eel","de":"Flammenaal","fr":"Murène flamboyante","ja":"フレイミングイール","cn":"火烈鳗","ko":"불꽃장어"},"description":{"en":"Sought more for its oil than for its meat, which is─as one might expect─rather oily.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Mit diesem Namen ist der Flammenaal wirklich der heißeste Fisch im Ozean. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"La peau de cette murène fait penser à une traînée de flammes.\\r\\nRarissime, on l\'aperçoit parfois au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"炎紋状の模様を持つウツボの一種\\r\\nシェルダレー諸島沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"一种有着火焰纹样的鯙科鱼。\\r\\n谢尔达莱群岛近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"불꽃 무늬가 있는 곰치의 일종.\\n시엘달레 제도 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32070":{"id":32070,"icon":29663,"name":{"en":"Jetborne Manta","de":"Düsenmanta","fr":"Manta à réaction","ja":"ジェットフライマンタ","cn":"喷射蝠鲼","ko":"제트가오리"},"description":{"en":"Clever fishers will often latch onto one of these wavekin and use its extraordinary propulsion to pull their ships. Once it grows tired, they can repay its kindness by hauling it out of the water and eating it.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Mit Düsen ist alles besser. Auch dieser Manta. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Cette manta peut atteindre des vitesses ini<SoftHyphen/>ma<SoftHyphen/>gi<SoftHyphen/>na<SoftHyphen/>bles dans un courant spectral.\\r\\nRarissime, on l\'aperçoit parfois au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"エーテル流に乗り高速で泳ぐマンタ\\r\\nシェルダレー諸島沖合の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"乘着以太流高速遨游的蝠鲼。\\r\\n谢尔达莱群岛近海的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"에테르류를 타고 고속으로 헤엄치는 가오리.\\n시엘달레 제도 먼바다의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":22},"32071":{"id":32071,"icon":29195,"name":{"en":"Devil\'s Sting","de":"Teufelsstachel","fr":"Dard-du-démon","ja":"デビルスティンガー","cn":"恶魔刺","ko":"악마의 독침"},"description":{"en":"It is best to catch this vicious wavekin before it catches you.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Dieser Fisch vereint zwei überaus garstige Dinge<Indent/>- Teufel, die gemeinhin als extrem fies gelten, und Stacheln, die wirklich niemand gern im Fuß stecken hat. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un poisson des profondeurs que les courants spectraux font parfois remonter vers la surface.\\r\\nRarissime, on l\'aperçoit parfois au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"幻海流により浮上した大型の深海魚\\r\\nシェルダレー諸島沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"在幻海流的影响下浮上海面的大型深海鱼。\\r\\n谢尔达莱群岛近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"환해류를 타고 부상한 대형 심해어.\\n시엘달레 제도 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32072":{"id":32072,"icon":28475,"name":{"en":"Callichthyid","de":"Panzerwels","fr":"Callichthyidé","ja":"カリクティス","cn":"美鲶","ko":"칼리크티스"},"description":{"en":"Being extremely heavy and covered in armored plates, attempting to catch and eat this wavekin is often more trouble than it is worth. Many fishers will cut their lines upon realizing they have snagged one.\\r\\n\\r\\n[Suitable for printing on extra large canvases.]","de":"Kein Leopard, sondern ein Wels. Ein ziemlich strammer noch dazu. (Kann als Fischdruck in Rahmen der Größe XL ausgestellt werden.)","fr":"Les épaisses écailles de ce placoderme le protègent contre les plus violents chocs.\\r\\nRarissime, on l\'aperçoit parfois au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de très grande taille]","ja":"厚い鱗を装甲化させた巨大な甲冑魚\\r\\nシェルダレー諸島沖合の稀少魚\\r\\n[魚拓額縁G4に設定可能]","cn":"将厚实的鳞片化为装甲的巨大甲胄鱼。\\r\\n谢尔达莱群岛近海的稀有鱼。\\r\\n可以拓印在特大型鱼拓画框上。","ko":"두꺼운 비늘로 무장한 거대 갑주어.\\n시엘달레 제도 먼바다의 희귀어.\\n[4등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32073":{"id":32073,"icon":28017,"name":{"en":"Meandering Mora","de":"Treibfisch","fr":"Lune-flottante","ja":"フローティング・モラ","cn":"浮游翻车鱼","ko":"부유개복치"},"description":{"en":"Content to simply drift through life with barely a care in the world, this fish is so lazy that it feeds by opening its mouth on the off chance that something edible might find its way inside.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Warum sollte man sich mit Schwimmen verausgaben, wenn man auch einfach vor sich hin treiben kann? (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Ce poisson-lune gonfle son corps et se laisse porter par les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large des îles de Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"身を膨らませ幻海流中を漂うマンボウ\\r\\nシェルダレー諸島沖合の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"将身体膨胀起来漂浮在幻海流中的翻车鱼。\\r\\n谢尔达莱群岛近海的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"몸을 부풀려 환해류 속을 떠다니는 개복치.\\n시엘달레 제도 먼바다의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32074":{"id":32074,"icon":28030,"name":{"en":"Hafgufa","de":"Hafgufa","fr":"Hafgufa","ja":"ハーヴグーヴァ","cn":"哈弗古法","ko":"하프구바"},"description":{"en":"This man-eating wavekin is so vast and ferocious that catching it seems more like a task for hardened warriors than amateur fishers.\\r\\n\\r\\n[Suitable for printing on extra large canvases.]","de":"Je mehr Arme man hat, desto fester wird die Umarmung! (Kann als Fischdruck in Rahmen der Größe XL ausgestellt werden.)","fr":"Un calmar gigantesque et maître des profondeurs.\\r\\nProie légendaire du large des îles Cieldalaes.\\r\\n[Affichable dans un cadre à ichtyogramme de très grande taille]","ja":"伝説の巨大怪物の血族とされる大イカ\\r\\nシェルダレー諸島沖合の伝説魚\\r\\n[魚拓額縁G4に設定可能]","cn":"被认为是传说中大怪物的后代的大型乌贼。\\r\\n谢尔达莱群岛近海的传说鱼。\\r\\n可以拓印在特大型鱼拓画框上。","ko":"전설에 나오는 거대 괴물의 혈족이라 여겨지는 커다란 오징어.\\n시엘달레 제도 먼바다의 전설어.\\n[4등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32075":{"id":32075,"icon":29441,"name":{"en":"Thaliak Crab","de":"Thaliak-Krabbe","fr":"Crabe de la Thaliak","ja":"サリャクリバークラブ","cn":"沙利亚克河蟹","ko":"살리아크게"},"description":{"en":"Something of an anomaly among crabs as it spends its life moving back and forth between salt- and freshwater. Its flavor differs according to where it is caught.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Zu niemandes Überraschung lebt diese Krabbe tatsächlich im Thaliak-Fluss. Die meiste Zeit zumindest. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un crabe que l\'on trouve dans la Thaliak et les mers environnantes.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"サリャク河と近海を回遊する小ぶりの蟹\\r\\n[魚拓額縁G1に設定可能]","cn":"在沙利亚克河与近海之间洄游的小螃蟹。\\r\\n可以拓印在小型鱼拓画框上。","ko":"살리아크 강과 근해를 회유하는 자그마한 게.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":21},"32076":{"id":32076,"icon":29553,"name":{"en":"Star of the Destroyer","de":"Sternsplitter","fr":"Étoile-du-Destructeur","ja":"ラールガーの星屑","cn":"破坏神的星尘","ko":"랄거의 별조각"},"description":{"en":"Believed by some to be living fragments of Rhalgr\'s beacon, their gentle glow from beneath the waves is a welcome sight to many a sailor.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Egal, wie viele davon man sich an die Decke klebt, sie fangen nicht an, zu leuchten. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Une étoile de mer rappelant la comète du Destructeur.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"星型の体型が特徴的な海星綱の生物\\r\\n[魚拓額縁G1に設定可能]","cn":"星型体型的海星纲生物。\\r\\n可以拓印在小型鱼拓画框上。","ko":"별 모양으로 생긴 몸이 특징인 불가사리강 생물.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32077":{"id":32077,"icon":29135,"name":{"en":"True Scad","de":"Stöcker","fr":"Vrai chinchard","ja":"トゥルースキャッド","cn":"真鲹","ko":"참전갱이"},"description":{"en":"Let none doubt the trueness of this scad.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"„Stöcker am Stock“ ist eine köstliche, wenn auch nicht besonders kreative Delikatesse in und um Dravania. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un type de chinchard, mais difficile de démêler le vrai du faux.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"アジとされる海水魚\\r\\n[魚拓額縁G2に設定可能]","cn":"被认为是鲹鱼的海水鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"전갱이로 여겨지는 바닷물고기.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32078":{"id":32078,"icon":29174,"name":{"en":"Blooded Wrasse","de":"Blutlippenfisch","fr":"Labre à bosse ensanglantée","ja":"ブラッディハンプヘッド","cn":"渗血隆头鱼","ko":"피혹부리놀래기"},"description":{"en":"Fishers should not feel guilty for the bloodstains on the fish\'s head, as these are largely self-inflicted. They can instead feel guilty about the hook through the mouth, as well as the gutting and cleaning that comes shortly after.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Kein besonders hübscher Fisch, aber was hat man bei einem solchen Namen auch erwartet? (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un simple labre à bosse vivant dans la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"緋汐海沖合に棲息するハンプヘッド\\r\\n[魚拓額縁G3に設定可能]","cn":"栖息在绯汐海近海的隆头鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"붉은물결 바다 먼바다에 서식하는 혹부리놀래기.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32079":{"id":32079,"icon":28013,"name":{"en":"Bloodpolish Crab","de":"Blutzangenkrabbe","fr":"Crabe verni","ja":"ブラッディポリッシュ","cn":"染血抛光蟹","ko":"핏빛집게게"},"description":{"en":"These wavekin cover their claws in blood to make themselves presentable to potential mates. Though this may seem odd, perhaps it is best not to attempt to understand the inner workings of a crab\'s mind.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ist es ein Verbrechen, besonders viel Wert auf eine ordentliche Maniküre zu legen? (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Une petite espèce de crabe dont le bout des pinces est teinté de rouge.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"先端が赤く染まった鋏を持つ小型のカニ\\r\\n[魚拓額縁G1に設定可能]","cn":"蟹钳前端为红色的小型螃蟹。\\r\\n可以拓印在小型鱼拓画框上。","ko":"집게발 끝이 빨갛게 물든 소형 게.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":21},"32080":{"id":32080,"icon":29179,"name":{"en":"Blue Stitcher","de":"Blaue Nadel","fr":"Tisse-filet","ja":"ブルーニードル","cn":"蓝针","ko":"푸른바늘"},"description":{"en":"Considering its thin legs are often likened to needles, one cannot expect to get much meat from them. The torso, on the other hand, is a firm favorite among seafarers.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Etwas mit dieser Nadel zu nähen gilt als eine Mutprobe unter dravanischen Schneidern. Zumindest unter denen, die dumm genug sind, darauf hereinzufallen. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une araignée de mer gigantesque qui hante les eaux de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"緋汐海沖合に棲息する皆脚目の節足動物\\r\\n[魚拓額縁G2に設定可能]","cn":"栖息在绯汐海近海的皆足纲生物。\\r\\n可以拓印在中型鱼拓画框上。","ko":"붉은물결 바다 먼바다에 서식하는 바다거미목 절지동물.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32081":{"id":32081,"icon":29018,"name":{"en":"Bloodfresh Tuna","de":"Blutfrisch-Thunfisch","fr":"Thon sanguin","ja":"ブラッディトゥーナ","cn":"血红金枪鱼","ko":"핏빛참치"},"description":{"en":"Its blood red meat is the centerpiece of many expensive dishes, though some claim it is chosen more for its appearance than its taste.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Nichts schreit sich auf dem Markt besser als „Blutfrisch-Thunfisch!“. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un poisson qui passe son temps à sillonner les mers.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"赤く締まった身を持つ大型海水魚\\r\\n[魚拓額縁G3に設定可能]","cn":"有着红色紧致肉质的大型海水鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"살이 붉고 단단한 대형 바닷물고기.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32082":{"id":32082,"icon":28016,"name":{"en":"Sunken Mask","de":"Verschollene Maske","fr":"Masque trempé","ja":"サンクンマスク","cn":"落水面具","ko":"침몰가면"},"description":{"en":"Though inanimate objects are seldom a welcome sight on a fisher\'s line, the goblin owner of this mask would no doubt be prepared to pay a small fortune to have it returned.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Mit viel Willensstärke kann dieser Fang ebenso gegrillt und verzehrt werden wie jeder andere Fisch. Viel Erfolg. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un masque filtrant qu\'un Gobelin aura tristement perdu.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"ゴブリン族の持ち物と思われる防毒面\\r\\n[魚拓額縁G1に設定可能]","cn":"被认为是哥布林族所持有的防毒面具。\\r\\n可以拓印在小型鱼拓画框上。","ko":"고블린족의 물건이라고 여겨지는 방독면.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32083":{"id":32083,"icon":28028,"name":{"en":"Spectral Eel","de":"Spektralaal","fr":"Anguille spectrale","ja":"スペクトラルイール","cn":"幻光鳗","ko":"유령 장어"},"description":{"en":"Do not be fooled by its heavenly aura, for there is naught mystical about this wavekin. In fact, it should be battered over the head before it has the chance to bite someone.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Der Zungenbrecher unter den spektralen Meeres<SoftHyphen/>be<SoftHyphen/>wohnern. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une anguille dont la constitution a été fortement altérée par les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"幻海流の影響を強く受けたウツボ\\r\\n緋汐海沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"受幻海流强烈影响的鯙科鱼。\\r\\n绯汐海近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"환해류의 영향을 강하게 받은 곰치.\\n붉은물결 바다 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32084":{"id":32084,"icon":29746,"name":{"en":"Bareface","de":"Bargesicht","fr":"Face-d\'ours","ja":"ベアフェイス","cn":"素面","ko":"민낯문어"},"description":{"en":"Said to resemble an unmasked goblin, not that most people would know what that looks like...\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Wenn Goblins ohne Maske aussehen wie dieses Tier, wissen wir nun zumindest, wieso sie so viel Wert auf ihre Gesichtsbedeckung legen. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un céphalopode aux appendices par<SoftHyphen/>ti<SoftHyphen/>cu<SoftHyphen/>liè<SoftHyphen/>rement grands.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"つぶらな瞳が特徴的な頭足類\\r\\n緋汐海沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"以圆润的眼瞳为特征的头足类生物。\\r\\n绯汐海近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"동그란 눈이 특징인 두족류.\\n붉은물결 바다 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32085":{"id":32085,"icon":28025,"name":{"en":"Oracular Crab","de":"Kultkrabbe","fr":"Crabe oraculaire","ja":"オラクルクラブ","cn":"神谕蟹","ko":"제사장게"},"description":{"en":"While bloodpolish crabs are certainly frightening, this larger and more violent relative is nothing less than a nightmare come to life.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Angesichts des Opfertürmchens im Nest dieser Krabbe bezieht sich das „Kult“ in ihrem Namen wohl nicht auf ihren Musikgeschmack. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un crabe verni par<SoftHyphen/>ti<SoftHyphen/>cu<SoftHyphen/>liè<SoftHyphen/>rement agressif qui construit d\'étranges nids.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"獲物の血で鋏先を赤く染めた獰猛なカニ\\r\\n緋汐海沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"用猎物的血液染红了钳子的凶猛螃蟹。\\r\\n绯汐海近海的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"사냥감의 피로 집게 끝을 붉게 물들인 사나운 게.\\n붉은물결 바다 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":21},"32086":{"id":32086,"icon":29080,"name":{"en":"Dravanian Bream","de":"Dravanische Brasse","fr":"Brème de Dravania","ja":"ドラヴァニアンブリーム","cn":"龙堡鲷鱼","ko":"드라바니아 도미"},"description":{"en":"With all the hellish waterborne fiends and bizarre creatures that seem like the product of a fever dream, sometimes it makes a welcome change to meet a nice, normal fish.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Eine Brasse. Aus Dravania. Hat jemand große Poesie erwartet? (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une brème comme on en trouve à Dravania.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"ドラヴァニア水系で育ったブリーム\\r\\n緋汐海沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"在龙堡水系中成长的鲷鱼。\\r\\n绯汐海近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"드라바니아 수계에서 자란 도미.\\n붉은물결 바다 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32087":{"id":32087,"icon":28022,"name":{"en":"Skaldminni","de":"Bardenrochen","fr":"Skaldminni","ja":"スコルドミンニー","cn":"余韵","ko":"시인의 추억"},"description":{"en":"Though it is said that this wavekin is the instrument of a fabled bard given life, the awkward flopping sound it makes when landed is anything but musical.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Ein Rochen mit einer wunderschönen Singstimme, die leider nur sehr tief unter Wasser auch wirklich gut klingt. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une raie qu\'on dit être le luth rendu vivant d\'un illustre poète.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"偉大な詩家の楽器が生を得たというエイ類\\r\\n緋汐海沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"据说是伟大诗人的乐器获得了生命后变成的鳐鱼。\\r\\n绯汐海近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"위대한 시인의 악기가 생명을 얻었다고 전해지는 가오리류.\\n붉은물결 바다 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":22},"32088":{"id":32088,"icon":29817,"name":{"en":"Serrated Clam","de":"Sägemuschel","fr":"Palourde crantée","ja":"セレーテッドクラム","cn":"锯齿蛤蜊","ko":"톱니조개"},"description":{"en":"While this clam may look far more imposing than most, one must remind oneself that it is still only a clam, and only capable of causing a very limited amount of harm. Still, it is best to watch one\'s fingers, all the same.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Schnarcht nachts ganz fürchterlich. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Les deux valves de cette variété de palourde crochue sont encore plus dentées que la moyenne.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"幻海流中で突起をより鋭くさせたファングクラム\\r\\n緋汐海沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"在幻海流中将凸起打磨得更为锋利的利齿蛤蜊。\\r\\n绯汐海近海的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"환해류 속에서 돌기가 더욱 뾰족하진 송곳니조개.\\n붉은물결 바다 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32089":{"id":32089,"icon":29098,"name":{"en":"Beatific Vision","de":"Beseligende Vision","fr":"Vision-béatifique","ja":"ビティフィックビジョン","cn":"幸福愿景","ko":"지복직관어"},"description":{"en":"After too long at sea, even this horrendously ugly fish can seem almost like a visitation from a divine being. Almost.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Dieser Fisch hat schon dem ein oder anderen Angler zu einer höheren Berufung verholfen. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un poisson des abysses qui hypnotise ses proies en émettant une puissante lumière.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"幻海流により誘引突起の光を強めた深海魚\\r\\n緋汐海沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"在幻海流的影响下，头上的诱饵变得更亮的深海鱼。\\r\\n绯汐海近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"환해류 때문에 유인 돌기의 빛이 강해진 심해어.\\n붉은물결 바다 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32090":{"id":32090,"icon":29347,"name":{"en":"Exterminator","de":"Exterminator","fr":"Ravageur","ja":"エクスターミネーター","cn":"歼灭者","ko":"몰살게"},"description":{"en":"Experienced fishers will make sure this insatiable wavekin is well and truly dead before putting it anywhere near their other catches, otherwise it will devour them in a matter of moments.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Egal, wie oft man den Exterminator fängt, er kommt doch immer wieder. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un assassin qui extermine ses proies encore plus violemment que ses congénères.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"海に出て獰猛さを増したターミネーター\\r\\n緋汐海沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"进入了海中生存，变得更为凶猛的终结者。\\r\\n绯汐海近海的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"바다로 나와 더욱 사나워진 탐욕게.\\n붉은물결 바다 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":21},"32091":{"id":32091,"icon":29083,"name":{"en":"Gory Tuna","de":"Derber Thunfisch","fr":"Thon rubis","ja":"ゴーリィトゥーナ","cn":"血玉金枪鱼","ko":"유혈참치"},"description":{"en":"To survive amongst such vicious company, this fish needs to be tough, which some would say is reflected in the texture of its meat.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Dieser Fisch kann es mit fast allem aufnehmen<Indent/>- außer einem Angelhaken. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un thon sanguin géant vivant dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"幻海流のなか現れる大型のブラッディトゥーナ\\r\\n緋汐海沖合の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"幻海流时出现的大型染血金枪鱼。\\r\\n绯汐海近海的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"환해류 때 나타나는 대형 핏빛참치.\\n붉은물결 바다 먼바다의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32092":{"id":32092,"icon":29091,"name":{"en":"Ticinepomis","de":"Ticinepomis","fr":"Ticinepomis","ja":"ティキネポミス","cn":"八鳍腔棘鱼","ko":"티키네포미스"},"description":{"en":"This fish moves so slowly that most other wavekin barely even realize it is alive, and pay it little heed.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Eine Flosse kommt selten allein. In diesem Fall kommen sie zu acht. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un cœlacanthe énorme qui doit sa taille à l\'influence des courants spectraux qu\'il aime traverser.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"幻海流の影響で大型化したシーラカンス\\r\\n緋汐海沖合の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"受到幻海流的影响变得巨大化的腔棘鱼。\\r\\n绯汐海近海的稀少鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"환해류의 영향을 받아 더욱 커진 실러캔스.\\n붉은물결 바다 먼바다의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32093":{"id":32093,"icon":28026,"name":{"en":"Quartz Hammerhead","de":"Quarzhammerhai","fr":"Requin-marteau de quartz","ja":"クォーツハンマーヘッド","cn":"石英锤头鲨","ko":"수정 망치상어"},"description":{"en":"This shark possesses extraordinarily strong neck muscles, which it needs to stop itself being dragged down to the seabed by its weighty head.\\r\\n\\r\\n[Suitable for printing on extra large canvases.]","de":"Weil normale Hammerhaie noch nicht schaurig genug waren, kommt dieser mit zusätzlichen Kristallen daher. (Kann als Fischdruck in Rahmen der Größe XL ausgestellt werden.)","fr":"Un requin-marteau dont la tête a durci et est devenue semi-transparente comme le quartz.\\r\\nRarissime, on l\'aperçoit parfois au large de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de très grande taille]","ja":"紅色の水晶の如く硬質化した頭部を持つ鮫\\r\\n緋汐海沖合の稀少魚\\r\\n[魚拓額縁G4に設定可能]","cn":"拥有如红色水晶般硬质头部的鲨鱼。\\r\\n绯汐海近海的稀有鱼。\\r\\n可以拓印在特大型鱼拓画框上。","ko":"머리 부분이 단단해져 붉은 수정처럼 변한 상어.\\n붉은물결 바다 먼바다의 희귀어.\\n[4등급 어탁 액자에 탁본 가능]"},"contentBonus":14},"32094":{"id":32094,"icon":28032,"name":{"en":"Seafaring Toad","de":"Hochseetüchtiger Frosch","fr":"Crapaud de mer","ja":"オーシャントード","cn":"海洋蟾蜍","ko":"바다개구리"},"description":{"en":"The first sailors to spy one of these odd creatures at sea thought they had taken leave of their senses, or at the very least, had taken a wrong turn and somehow ended up in a pond.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Diesem Frosch einen winzigen Kapitänshut zu besorgen ist die einzig richtige Entscheidung. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un crapaud verdâtre, tout ce qu\'il y a de plus commun, si ce n\'est qu\'il vit dans la mer.\\r\\nProie légendaire du large de la mer Pourpre.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"河川に棲息するはずの黄緑色の両生類\\r\\n緋汐海沖合の伝説魚\\r\\n[魚拓額縁G1に設定可能]","cn":"本来应该栖息在河川的黄绿色两栖类生物。\\r\\n绯汐海近海的传说鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"하천에 서식할 것 같은 녹황색 양서류.\\n붉은물결 바다 먼바다의 전설어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32095":{"id":32095,"icon":29504,"name":{"en":"Crow Puffer","de":"Plusterkrähe","fr":"Tétrodon corvidé","ja":"パフィークロウ","cn":"暗鸦鲀","ko":"까마귀복"},"description":{"en":"Though it may be both feared and revered by its ocean-dwelling neighbors, even the most potent of natural defenses means little when dangling from a fisher\'s line.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Ganz wie echte Krähen sollte man die Plusterkrähe lieber nicht streicheln, außer man hätte gerne eine Hand voller Stacheln. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Gare aux fines épines de ce poisson.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"細かな棘で覆われた黒い体表を持つ海水魚\\r\\n[魚拓額縁G1に設定可能]","cn":"黑色体表上长满了细小棘刺的海水鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"자잘한 가시로 뒤덮인, 검은 바닷물고기.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":20},"32096":{"id":32096,"icon":29063,"name":{"en":"Rothlyt Kelp","de":"Rothlyt-Alge","fr":"Varech de Rothlyt","ja":"ロズリトケルプ","cn":"罗斯利特海带","ko":"로들리트 미역"},"description":{"en":"There are far easier ways to gather kelp than by reeling it in clump by clump, but most fishers will gladly accept such a “catch” rather than throw it back into the sea.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Kein Fisch, aber trotzdem sehr gesund. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Une algue commune qu\'on trouve un peu partout dans le golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"ロズリト湾全域に広く分布する大型海藻\\r\\n[魚拓額縁G1に設定可能]","cn":"广泛栖息在罗斯利特湾全域的大型海藻。\\r\\n可以拓印在小型鱼拓画框上。","ko":"로들리트 만 전역에 널리 분포하는 대형 해조.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32097":{"id":32097,"icon":29170,"name":{"en":"Living Lantern","de":"Lebende Laterne","fr":"Lanterne-de-mer","ja":"ホオズキクラゲ","cn":"鬼灯水母","ko":"꽈리해파리"},"description":{"en":"A living lantern has a number of uses, assuming one can keep it alive. After all, it only retains its lantern-like qualities while it is living, hence the name.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Funktioniert leider nur unter Wasser. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une méduse flottant au-dessus de la surface et rappelant les lanternes orientales.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"海中に浮かぶ姿を赤い果実に喩えられるクラゲ\\r\\n[魚拓額縁G2に設定可能]","cn":"漂浮在海中的样子被人比喻像是红色的果实。\\r\\n可以拓印在中型鱼拓画框上。","ko":"바닷속에 떠다니는 모습이 빨간 열매에 비유되는 해파리.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":15},"32098":{"id":32098,"icon":29582,"name":{"en":"Honeycomb Fish","de":"Wabenfisch","fr":"Mille-sourires","ja":"ハニカムフィッシュ","cn":"蜂巢鱼","ko":"벌집고기"},"description":{"en":"It is remarkable how much this fish resembles a bee\'s nest, given that it has probably never even seen one before.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Gieriges Maul statt süßem Honig. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Le corps de ce poisson est recouvert de sacs digestifs semblables à de petites bouches.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"蜂の巣状の柄を体表に持つ海水魚\\r\\n[魚拓額縁G1に設定可能]","cn":"体表有着蜂巢状图案的海水鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"몸에 벌집처럼 보이는 무늬가 있는 바닷물고기.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":20},"32099":{"id":32099,"icon":29047,"name":{"en":"Godsbed","de":"Götterwiege","fr":"Lit-divin","ja":"海神の寝台","cn":"海神的睡床","ko":"해신의 침대"},"description":{"en":"One should refrain from attempting to use this bivalve as a bed, since this tends to reduce its value in the eyes of potential buyers. If they find out about it, that is.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Funktioniert unter Umständen auch für Nicht-Götter. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un gigantesque bivalve du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"ロズリト湾沖合に棲息する巨大な二枚貝\\r\\n[魚拓額縁G3に設定可能]","cn":"栖息在罗斯利特湾近海的巨大贝类。\\r\\n可以拓印在大型鱼拓画框上。","ko":"로들리트 만 먼바다에 서식하는 거대한 조개.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32100":{"id":32100,"icon":29114,"name":{"en":"Lansquenet","de":"Landsknecht","fr":"Lansquenet","ja":"ランスケネット","cn":"雇佣兵","ko":"용병어"},"description":{"en":"Something of a mercenary among fish, it offers protection to smaller fish, though it seems to receive little in return. Perhaps it eats a few of them when the others are not looking?\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Eine Pike macht noch keinen Landsknecht. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Ce gros poisson aime voyager, et on en trouve dans toutes les mers d\'Éorzéa.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"エオルゼア近海を広く回遊する大型海水魚\\r\\n[魚拓額縁G2に設定可能]","cn":"广范围在艾欧泽亚近海洄游的大型海水鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"에오르제아 근해를 널리 회유하는 대형 바닷물고기.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32101":{"id":32101,"icon":29122,"name":{"en":"Thavnairian Shark","de":"Thavnair-Hai","fr":"Requin de Thavnair","ja":"サベネアンシャーク","cn":"萨维奈鲨鱼","ko":"사베네어 상어"},"description":{"en":"Although there are countless species of shark, the main concern among fishers is “How likely is it to eat me?”\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Ob dieser Hai auch den dem<SoftHyphen/>ent<SoftHyphen/>spre<SoftHyphen/>chenden Tanz beherrscht? (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Bien que “de Thavnair”, ce requin voyage parfois jusque dans le golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"サベネア島方面からロズリト湾へと回遊する鮫\\r\\n[魚拓額縁G2に設定可能]","cn":"在萨维奈岛与罗斯利特湾之间洄游的鲨鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"사베네어 섬 방면에서 로들리트 만으로 회유하는 상어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":14},"32102":{"id":32102,"icon":29257,"name":{"en":"Nephrite Eel","de":"Nephrit-Aal","fr":"Anguille de néphrite","ja":"ネフライトイール","cn":"翡翠软玉鳗","ko":"연옥장어"},"description":{"en":"Some experts believe that the young nephrite eel\'s coloration helps it to hide among seaweed, which protects it from larger predators and offers a place from which to ambush prey of its own.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Noch nicht ganz zu Jade gewordener Aal. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une jeune anguille de jade à la peau encore claire.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"体色の薄い成長過程のジェイドイール\\r\\n[魚拓額縁G2に設定可能]","cn":"成长途中体色还很浅的翡翠鳗。\\r\\n可以拓印在中型鱼拓画框上。","ko":"아직 성장 중이기에 색깔이 연한 옥장어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32103":{"id":32103,"icon":28029,"name":{"en":"Spectresaur","de":"Spektralsaurier","fr":"Spectrosaure","ja":"スペクトラルザウルス","cn":"幻光鱼龙","ko":"유령 사우루스"},"description":{"en":"Eyewitnesses claim it to be the spirit of a long-dead seabeast. In truth, it is very much alive, which is probably a lot worse than if it were a ghost.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Es gibt wohl kaum etwas Furchteinflößenderes als einen geisterhaften Dinosaurier. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un poisson préhistorique dont la constitution a été fortement altérée par les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"幻海流の影響を強く受けた古代竜\\r\\nロズリト湾沖合の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"受幻海流强烈影响的古代龙。\\r\\n罗斯利特湾近海的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"환해류의 영향을 강하게 받은 고대룡.\\n로들리트 만 먼바다의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32104":{"id":32104,"icon":28490,"name":{"en":"Ginkgo Fin","de":"Ginkgoflosse","fr":"Gingko marin","ja":"ギンコフィッシュ","cn":"银杏鱼","ko":"은행나무어"},"description":{"en":"This minute wavekin cunningly disguises itself as a ginkgo leaf. This would be even more cunning, however, if ginkgo trees actually existed anywhere near the open sea.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Diese kleinen Fische verwandeln ihre Gewässer in wahrhaftige Ginkgowälder. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Les bancs que forment ces petits poissons ressemblent à s\'y méprendre à des arbres feuillus.\\r\\nRarissime, on l\'aperçoit parfois au large du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"群泳して海中で木のように擬態する小型の魚\\r\\nロズリト湾沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"群游于海中，拟态成木头的小型鱼类。\\r\\n罗斯利特湾近海的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"바닷속에서 무리지어 헤엄치며 나무처럼 의태하는 소형 물고기.\\n로들리트 만 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32105":{"id":32105,"icon":29365,"name":{"en":"Garum Jug","de":"Garumkrug","fr":"Outre-de-garum","ja":"ガルームポット","cn":"鱼酱罐","ko":"젓갈통고기"},"description":{"en":"Those able to fight their way past the ink-like liquid emitted by this fish in defense will be rewarded with a tasty snack and a useful container.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Garum? Darum! (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Un petit poisson disposant d\'un sac où il stocke un liquide semblable à de la soupe... de poisson.\\r\\nRarissime, on l\'aperçoit parfois au large du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"魚醤状の体液を溜め込んだ小型魚\\r\\nロズリト湾沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"体内储存着鱼酱状体液的小型鱼。\\r\\n罗斯利特湾近海的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"젓갈 같은 체액을 축적한 소형 물고기.\\n로들리트 만 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":20},"32106":{"id":32106,"icon":29159,"name":{"en":"Smooth Jaguar","de":"Seepanther","fr":"Panthère de mer","ja":"シーパンサー","cn":"海猎豹","ko":"표범장어"},"description":{"en":"While there are many wavekin named after lions and tigers, the majestic jaguar is criminally underrepresented.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Geschmeidig wie eine Großkatze<Indent/>- eine Unterwasser-Großkatze! (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Une anguille léopard géante vivant dans les courants spectraux.\\r\\nRarissime, on l\'aperçoit parfois au large du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"幻海流のなか現れる大型のレオパードイール\\r\\nロズリト湾沖合の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"幻海流时出现的大型猎豹鳗。\\r\\n罗斯利特湾近海的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"환해류 때 나타나는 대형 범무늬장어.\\n로들리트 만 먼바다의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32107":{"id":32107,"icon":28019,"name":{"en":"Rothlyt Mussel","de":"Rothlyt-Muschel","fr":"Moule de Rothlyt","ja":"ロズリトムール","cn":"罗斯利特贝","ko":"로들리트 홍합"},"description":{"en":"Many fishmongers pride themselves on using every part of the creatures in which they deal. In the case of the mussel, however, there are only two parts to worry about: the shell and the...squishy thing inside.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Die beste Freundin der Rothlyt-Alge. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"Les courants spectraux ont donné à cette moule des proportions de mastodonte.\\r\\nRarissime, on l\'aperçoit parfois au large du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"幻海流の潮で大ぶりに成長した二枚貝\\r\\nロズリト湾沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"在幻海流的潮水中成长到很大个的贝类。\\r\\n罗斯利特湾近海的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"환해류 바닷물 덕에 크게 자란 조개.\\n로들리트 만 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32108":{"id":32108,"icon":29355,"name":{"en":"Levi Elver","de":"Leviaal","fr":"Lévicivelle","ja":"ジュヴナイル・リヴィ","cn":"利维幼鳗","ko":"리바치어선"},"description":{"en":"Of all the species of eel, levi elvers are said to most closely resemble Leviathan, although their much-reduced size does make them rather less imposing.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Definitiv das Essen und nicht der Jäger. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une civelle qu\'on pourrait imaginer ressembler à un jeune Léviathan.\\r\\nRarissime, on l\'aperçoit parfois au large du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"リヴァイアサンの稚魚と喩えられるウナギ\\r\\nロズリト湾沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"被比喻是利维亚桑幼鱼的鳗鱼。\\r\\n罗斯利特湾近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"리바이어선 치어에 비유되는 장어.\\n로들리트 만 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32109":{"id":32109,"icon":29087,"name":{"en":"Pearl Bombfish","de":"Perlenbomber","fr":"Châtaigne-perlière","ja":"パールボム","cn":"珍珠爆弹","ko":"진주복"},"description":{"en":"Although bombfish do not actually explode in the same way as their namesakes, they look as if they could were they so inclined, which is enough to deter many would-be predators.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Sieht hübsch aus, ist aber genauso gefährlich wie jede andere Art des Bombers. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Ce poisson porc-épic a des allures de grosse perle avec son ventre tout blanc.\\r\\nRarissime, on l\'aperçoit parfois au large du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"真珠色の体表を得たバルーンフィッシュ\\r\\nロズリト湾沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"获得了珍珠色外表的气泡鱼。\\r\\n罗斯利特湾近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"진주색 가시복.\\n로들리트 만 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":20},"32110":{"id":32110,"icon":29439,"name":{"en":"Trollfish","de":"Trollfisch","fr":"Poisson-troll","ja":"バシバシ","cn":"巨魔鱼","ko":"볏지느러미"},"description":{"en":"Catching one of these brutes would be doing a great service to the other wavekin who share their waters.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Eine Art, die sich für äußerst scharfsinnig und witzig hält. Andere Fische gehen ihnen aus dem Weg. (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Une espèce cousine de la rascasse à crête qu\'on trouve dans la Mer de nuages.\\r\\nRarissime, on l\'aperçoit parfois au large du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"雲海に棲息するバサバサの亜種\\r\\nロズリト湾沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"栖息在云海的百鳍鱼的亚种。\\r\\n罗斯利特湾近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"구름바다에 서식하는 백지느러미의 아종.\\n로들리트 만 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32111":{"id":32111,"icon":29340,"name":{"en":"Panoptes","de":"Panoptes","fr":"Panoptès","ja":"パノプテス","cn":"潘诺普忒斯","ko":"파놉테스"},"description":{"en":"The myriad dots that resemble eyes are said to confuse certain predators. This only works, however, if said predator actually cares whether it has been seen.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Welch schaurige Scheibe ... (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Cette raie intimide ses prédateurs grâce à ses taches semblables à des yeux.\\r\\nRarissime, on l\'aperçoit parfois au large du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"背面の白い斑点で敵を威嚇するエイ\\r\\nロズリト湾沖合の稀少魚\\r\\n[魚拓額縁G3に設定可能]","cn":"利用背面的白色斑点来威吓敌人的鳐鱼。\\r\\n罗斯利特湾近海的稀有鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"등에 있는 하얀 반점으로 적을 위협하는 가오리.\\n로들리트 만 먼바다의 희귀어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":22},"32112":{"id":32112,"icon":28472,"name":{"en":"Crepe Sole","de":"Königssohle","fr":"Sandale-du-sultan","ja":"ゴールデンソール","cn":"金鞋底","ko":"황금밑창"},"description":{"en":"The story goes that it was named after an item of footwear. Whether or not this is true, the fact remains that it looks like it has been stepped on.\\r\\n\\r\\n[Suitable for printing on small canvases.]","de":"Selbst etwas Banales wie eine Sohle wird am Fuße eines Königs zu etwas ganz Besonderem. (Kann als Fischdruck in Rahmen der Größe S ausgestellt werden.)","fr":"La sandale perdue d\'un sultan amoureux de voyage, ou juste un poisson qui y ressemble.\\r\\nRarissime, on l\'aperçoit parfois au large du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de petite taille]","ja":"王族が船から落とした靴が転じたとされる魚\\r\\nロズリト湾沖合の稀少魚\\r\\n[魚拓額縁G1に設定可能]","cn":"被认为是王族从船上丢下的鞋子变成的鱼。\\r\\n罗斯利特湾近海的稀有鱼。\\r\\n可以拓印在小型鱼拓画框上。","ko":"왕족이 배에서 떨어뜨린 신발이 변한 모습이라고 하는 물고기.\\n로들리트 만 먼바다의 희귀어.\\n[1등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32113":{"id":32113,"icon":28018,"name":{"en":"Knifejaw","de":"Messerkinn","fr":"Lardegueule","ja":"ナイフジョー","cn":"刀颚鱼","ko":"칼턱주가리"},"description":{"en":"Must be handled with extreme care after being reeled in. Many fishers keep a long blade nearby to give it a good stabbing before even attempting to handle it.\\r\\n\\r\\n[Suitable for printing on medium canvases.]","de":"Und der Haifisch, der hat Messer. Und die trägt er im Gesicht<Indent/>... (Kann als Fischdruck in Rahmen der Größe M ausgestellt werden.)","fr":"Un poisson carnivore capable de broyer même la roche.\\r\\nRarissime, on l\'aperçoit parfois au large du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de taille moyenne]","ja":"石をも砕く鋭い牙を持つ肉食魚\\r\\nロズリト湾沖合の稀少魚\\r\\n[魚拓額縁G2に設定可能]","cn":"拥有能够碎石般锋利牙齿的食肉鱼。\\r\\n罗斯利特湾近海的稀有鱼。\\r\\n可以拓印在中型鱼拓画框上。","ko":"예리한 엄니로 돌도 씹어 부수는 육식어.\\n로들리트 만 먼바다의 희귀어.\\n[2등급 어탁 액자에 탁본 가능]"},"contentBonus":null},"32114":{"id":32114,"icon":28031,"name":{"en":"Placodus","de":"Placodus","fr":"Placodus","ja":"プラコドゥス","cn":"盾齿龙","ko":"플라코두스"},"description":{"en":"While its teeth specialize in crushing shellfish, it will not think twice before doing the same to a fisher\'s hands.\\r\\n\\r\\n[Suitable for printing on large canvases.]","de":"Mit gigantischen Zähnen können auch gigantische Muschelmahlzeiten verschlungen werden. (Kann als Fischdruck in Rahmen der Größe L ausgestellt werden.)","fr":"Un poisson ancien et massif doté d\'énormes dents sur son palais.\\r\\nProie légendaire du large du golfe de Rothlyt.\\r\\n[Affichable dans un cadre à ichtyogramme de grande taille]","ja":"強力な口蓋歯を持つ大型古代生物\\r\\nロズリト湾沖合の伝説魚\\r\\n[魚拓額縁G3に設定可能]","cn":"拥有强大门牙的大型古代生物。\\r\\n罗斯利特湾近海的传说鱼。\\r\\n可以拓印在大型鱼拓画框上。","ko":"입천장에 강력한 이빨을 가진 대형 고대 생물.\\n로들리트 만 먼바다의 전설어.\\n[3등급 어탁 액자에 탁본 가능]"},"contentBonus":null}}');
;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/baits.json
const baits_namespaceObject = JSON.parse('{"0":{"id":0,"icon":0,"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""}},"2587":{"id":2587,"icon":27005,"name":{"en":"Pill Bug","de":"Pillendreher","fr":"Cloporte","ja":"ピルバグ","cn":"潮虫","ko":"쥐며느리"}},"2591":{"id":2591,"icon":27001,"name":{"en":"Rat Tail","de":"Rattenschwanz","fr":"Queue de rat","ja":"ラットの尾","cn":"沟鼠尾巴","ko":"쥐꼬리"}},"2603":{"id":2603,"icon":27021,"name":{"en":"Glowworm","de":"Glühwürmchen","fr":"Ver luisant","ja":"グロウワーム","cn":"火萤","ko":"발광충"}},"2613":{"id":2613,"icon":27053,"name":{"en":"Shrimp Cage Feeder","de":"Garnelenkäfig-Köder","fr":"Amorçoir à crevette","ja":"シュリンプフィーダー","cn":"小虾肉笼","ko":"새우 미끼통"}},"2619":{"id":2619,"icon":27065,"name":{"en":"Heavy Steel Jig","de":"Schwerer Eisenköder","fr":"Devon lesté","ja":"ヘヴィメタルジグ","cn":"重铁板钩","ko":"중형 금속 지그"}},"27590":{"id":27590,"icon":27041,"name":{"en":"Squid Strip","de":"Stückchen Tintenfisch","fr":"Chair de calmar","ja":"イカの切り身","cn":"乌贼丝","ko":"오징어 살"}},"29714":{"id":29714,"icon":27004,"name":{"en":"Ragworm","de":"Steinwurm","fr":"Teigne","ja":"イワイソメ","cn":"石沙蚕","ko":"바위털갯지렁이"}},"29715":{"id":29715,"icon":27023,"name":{"en":"Krill","de":"Krill","fr":"Krill","ja":"クリル","cn":"磷虾","ko":"크릴"}},"29716":{"id":29716,"icon":27015,"name":{"en":"Plump Worm","de":"Dickwurm","fr":"Ver charnu","ja":"ファットワーム","cn":"刺螠","ko":"굵은지렁이"}},"29717":{"id":29717,"icon":27051,"name":{"en":"Versatile Lure","de":"Universalköder","fr":"Leurre universel","ja":"万能ルアー","cn":"万能拟饵","ko":"만능 루어"}}}');
;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/content-bonuses.json
const content_bonuses_namespaceObject = JSON.parse('{"0":{"id":0,"icon":0,"objective":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"requirement":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"bonus":100,"order":0},"1":{"id":1,"icon":65901,"objective":{"en":"Small Fish in a Big Pond","de":"Silberfischer","fr":"Bonne pêche","ja":"千越し祝い","cn":"千鱼祝福","ko":"천 마리 기원"},"requirement":{"en":"Requirement: Score 2,500 points or higher.","de":"Bedingung: 2.500 Punkte erreicht.","fr":"Condition : obtenir 2 500 points ou plus.","ja":"達成条件：釣果ポイントを2500以上獲得する。","cn":"达成条件：获得的渔分超过2500。","ko":"달성 조건: 낚시 점수 2500점 이상 획득"},"bonus":110,"order":4},"2":{"id":2,"icon":65902,"objective":{"en":"Big Fish in a Small Pond","de":"Goldfischer","fr":"Pêche au gros","ja":"万越し祝い","cn":"万鱼贺喜","ko":"만 마리 기원"},"requirement":{"en":"Requirement: Score 5,000 points or higher.","de":"Bedingung: 5.000 Punkte erreicht.","fr":"Condition : obtenir 5 000 points ou plus.","ja":"達成条件：釣果ポイントを5000以上獲得する。","cn":"达成条件：获得的渔分超过5000。","ko":"달성 조건: 낚시 점수 5000점 이상 획득"},"bonus":120,"order":5},"3":{"id":3,"icon":65903,"objective":{"en":"A Rare Catch","de":"Seltener Fang","fr":"La prise du jour","ja":"珍魚","cn":"珍鱼","ko":"진귀한 물고기"},"requirement":{"en":"Requirement: Catch a ★★★★ fish.","de":"Bedingung: Einen ★★★★-Fisch gefangen.","fr":"Condition : pêcher une prise de rareté quatre étoiles (★★★★).","ja":"達成条件：★★★★の魚を釣り上げる。","cn":"达成条件：钓到一条★★★★鱼。","ko":"달성 조건: ★★★★ 물고기 낚기"},"bonus":110,"order":6},"4":{"id":4,"icon":65904,"objective":{"en":"Catch of a Lifetime","de":"Legendärer Fang","fr":"La prise d\'une vie","ja":"伝説魚","cn":"传说鱼","ko":"전설의 물고기"},"requirement":{"en":"Requirement: Catch a ★★★★★ fish.","de":"Bedingung: Einen ★★★★★-Fisch gefangen.","fr":"Condition : pêcher une prise de rareté cinq étoiles (★★★★★).","ja":"達成条件：★★★★★の魚を釣り上げる。","cn":"达成条件：钓到一条★★★★★鱼。","ko":"달성 조건: ★★★★★ 물고기 낚기"},"bonus":120,"order":7},"5":{"id":5,"icon":65905,"objective":{"en":"Give a Man a Fish","de":"Blitzfischer","fr":"De quoi manger","ja":"入食","cn":"瞬钓","ko":"줄줄이 낚시"},"requirement":{"en":"Requirement: Catch 15 or more fish when a spectral current is present.","de":"Bedingung: In der Phantomströmung 15 Fische gefangen.","fr":"Condition : pêcher 15 prises ou plus dans les courants spectraux.","ja":"達成条件：幻海流中に15匹以上魚を釣り上げる。","cn":"达成条件：在幻海流中钓到15条鱼。","ko":"달성 조건: 환해류 중에 15마리 이상 물고기 낚기"},"bonus":110,"order":8},"6":{"id":6,"icon":65906,"objective":{"en":"Teach a Man to Fish","de":"König der Fischer","fr":"De quoi festoyer","ja":"爆釣王","cn":"爆钓王","ko":"풍어왕"},"requirement":{"en":"Requirement: Catch 35 or more fish when a spectral current is present.","de":"Bedingung: In der Phantomströmung 35 Fische gefangen.","fr":"Condition : pêcher 35 prises ou plus dans les courants spectraux.","ja":"達成条件：幻海流中に35匹以上魚を釣り上げる。","cn":"达成条件：在幻海流中钓到35条鱼。","ko":"달성 조건: 환해류 중에 35마리 이상 물고기 낚기"},"bonus":120,"order":9},"7":{"id":7,"icon":65907,"objective":{"en":"Bream Team: Galadion Bay","de":"Reicher Fang: Galadion-Bucht","fr":"Une pêche d\'enfer<Indent/>: baie de Galadion","ja":"豊漁：ガラディオン湾","cn":"丰渔：加拉迪翁湾","ko":"풍어: 갈라디온 만"},"requirement":{"en":"Requirement: As a party, catch 10 or more different fish in Galadion Bay.","de":"Bedingung: In der Galadion-Bucht als Gruppe 10 Fischarten gefangen.","fr":"Condition : pêcher 10 prises différentes ou plus en équipe dans la baie de Galadion.","ja":"達成条件：ガラディオン湾にてパーティ合計で10種類以上、魚を釣り上げる。","cn":"达成条件：小队全体在加拉迪翁湾合计钓到10种以上的鱼类。","ko":"달성 조건: 갈라디온 만에서 파티 합계로 10종류 이상 물고기 낚기"},"bonus":110,"order":10},"8":{"id":8,"icon":65908,"objective":{"en":"Bream Team: Southern Strait of Merlthor","de":"Reicher Fang: Südliche Straße von Merlthor","fr":"Une pêche d\'enfer<Indent/>: détroit sud de Merlthor","ja":"豊漁：メルトール海峡南","cn":"丰渔：梅尔托尔海峡南","ko":"풍어: 멜토르 해협 남쪽"},"requirement":{"en":"Requirement: As a party, catch 10 or more different fish in the southern Strait of Merlthor.","de":"Bedingung: In der südlichen Straße von Merlthor als Gruppe 10 Fischarten gefangen.","fr":"Condition : pêcher 10 prises différentes ou plus en équipe au détroit sud de Merlthor.","ja":"達成条件：メルトール海峡南にてパーティ合計で10種類以上、魚を釣り上げる。","cn":"达成条件：小队全体在梅尔托尔海峡南合计钓到10种以上的鱼类。","ko":"달성 조건: 멜토르 해협 남쪽에서 파티 합계로 10종류 이상 물고기 낚기"},"bonus":110,"order":13},"9":{"id":9,"icon":65909,"objective":{"en":"Bream Team: Northern Strait of Merlthor","de":"Reicher Fang: Nördliche Straße von Merlthor","fr":"Une pêche d\'enfer<Indent/>: détroit nord de Merlthor","ja":"豊漁：メルトール海峡北","cn":"丰渔：梅尔托尔海峡北","ko":"풍어: 멜토르 해협 북쪽"},"requirement":{"en":"Requirement: As a party, catch 10 or more different fish in the northern Strait of Merlthor.","de":"Bedingung: In der nördlichen Straße von Merlthor als Gruppe 10 Fischarten gefangen.","fr":"Condition : pêcher 10 prises différentes ou plus en équipe au détroit nord de Merlthor.","ja":"達成条件：メルトール海峡北にてパーティ合計で10種類以上、魚を釣り上げる。","cn":"达成条件：小队全体在梅尔托尔海峡北合计钓到10种以上的鱼类。","ko":"달성 조건: 멜토르 해협 북쪽에서 파티 합계로 10종류 이상 물고기 낚기"},"bonus":110,"order":19},"10":{"id":10,"icon":65910,"objective":{"en":"Bream Team: Rhotano Sea","de":"Reicher Fang: Rhotano-See","fr":"Une pêche d\'enfer<Indent/>: mer de Rhotano","ja":"豊漁：ロータノ海","cn":"丰渔：罗塔诺海","ko":"풍어: 로타노 해"},"requirement":{"en":"Requirement: As a party, catch 10 or more different fish in the Rhotano Sea.","de":"Bedingung: In der Rhotano-See als Gruppe 10 Fischarten gefangen.","fr":"Condition : pêcher 10 prises différentes ou plus en équipe dans la mer de Rhotano.","ja":"達成条件：ロータノ海にてパーティ合計で10種類以上、魚を釣り上げる。","cn":"达成条件：小队全体在罗塔诺海合计钓到10种以上的鱼类。","ko":"달성 조건: 로타노 해에서 파티 합계로 10종류 이상 물고기 낚기"},"bonus":110,"order":22},"11":{"id":11,"icon":65911,"objective":{"en":"Fabled Fishers","de":"Legendäre Fangmannschaft","fr":"Pêcheurs légendaires","ja":"伝説の大漁旗","cn":"传说中的大渔旗","ko":"전설의 낚시꾼들"},"requirement":{"en":"Requirement: As a party, catch 3 or more ★★★★★ fish.","de":"Bedingung: Als Gruppe 4 ★★★★★-Fische gefangen.","fr":"Condition : pêcher au moins 3 prises de rareté cinq étoiles (★★★★★) en équipe.","ja":"達成条件：パーティで合計3匹以上の★★★★★の魚を釣り上げる。","cn":"达成条件：小队全体合计钓到3条以上★★★★★的鱼。","ko":"달성 조건: 파티 합계로 3마리 이상 ★★★★★ 물고기 낚기"},"bonus":150,"order":31},"12":{"id":12,"icon":65912,"objective":{"en":"Favored by Llymlaen","de":"Llymlaen-Gesegneter","fr":"Bénédiction de Llymlaen","ja":"リムレーンの愛し子","cn":"利姆莱茵的宠爱之子","ko":"리믈렌의 사랑스러운 아이"},"requirement":{"en":"Requirement: Cause a spectral current to occur.","de":"Bedingung: Phantomströmung selbst ausgelöst.","fr":"Condition : repérer un courant spectral.","ja":"達成条件：自身で幻海流を発生させる。","cn":"达成条件：由自己引发幻海流。","ko":"달성 조건: 자신이 환해류를 발생시킴"},"bonus":110,"order":32},"13":{"id":13,"icon":65913,"objective":{"en":"Octopus Travelers","de":"Oktopussreiter","fr":"Octo-opus","ja":"オクトパストラベラー","cn":"八爪旅人","ko":"문어 여행자"},"requirement":{"en":"Requirement: As a party, catch 150 or more octopodes.","de":"Bedingung: Als Gruppe 150 Oktopusse gefangen.","fr":"Condition : pêcher 150 pieuvres ou plus en équipe.","ja":"達成条件：パーティ合計で150匹以上、タコを釣り上げる。","cn":"达成条件：小队全体合计钓到150只以上的章鱼类。","ko":"달성 조건: 파티 합계로 150마리 이상 문어 낚기"},"bonus":120,"order":33},"14":{"id":14,"icon":65914,"objective":{"en":"Certifiable Shark Hunters","de":"Haijäger","fr":"Chasseurs de requins","ja":"シャークハンター","cn":"捕鲨人","ko":"상어 사냥꾼"},"requirement":{"en":"Requirement: As a party, catch 200 or more sharks.","de":"Bedingung: Als Gruppe 200 Haie gefangen.","fr":"Condition : pêcher 200 requins ou plus en équipe.","ja":"達成条件：パーティ合計で200匹以上、サメを釣り上げる。","cn":"达成条件：小队全体合计钓到200条以上的鲨鱼类。","ko":"달성 조건: 파티 합계로 200마리 이상 상어 낚기"},"bonus":130,"order":34},"15":{"id":15,"icon":65915,"objective":{"en":"Jelled Together","de":"Quallenfänger","fr":"Le bateau de la méduse","ja":"クラゲマニア","cn":"水母狂魔","ko":"해파리 애호가"},"requirement":{"en":"Requirement: As a party, catch 150 or more jellyfish.","de":"Bedingung: Als Gruppe 150 Quallen gefangen.","fr":"Condition : pêcher 150 méduses ou plus en équipe.","ja":"達成条件：パーティ合計で150匹以上、クラゲを釣り上げる。","cn":"达成条件：小队全体合计钓到150只以上的水母类。","ko":"달성 조건: 파티 합계로 150마리 이상 해파리 낚기"},"bonus":120,"order":35},"16":{"id":16,"icon":65916,"objective":{"en":"Maritime Dragonslayers","de":"Seepferdchenbändiger","fr":"Fièvre de cheval des mers","ja":"シードラゴンキラー","cn":"龙马惊神","ko":"해마 기수"},"requirement":{"en":"Requirement: As a party, catch 100 or more seahorses.","de":"Bedingung: Als Gruppe 100 Seepferdchen gefangen.","fr":"Condition : pêcher 100 hippocampes ou plus en équipe.","ja":"達成条件：パーティ合計で100匹以上、タツノオトシゴを釣り上げる。","cn":"达成条件：小队全体合计钓到100只以上的海龙或海马。","ko":"달성 조건: 파티 합계로 100마리 이상 해마 낚기"},"bonus":110,"order":36},"17":{"id":17,"icon":65923,"objective":{"en":"Ocean Fishing Amateur","de":"Hochseefischer-Anfänger","fr":"Débutant de la pêche en mer","ja":"初級海釣り師","cn":"初级海钓师","ko":"초급 바다낚시꾼"},"requirement":{"en":"Requirement: Complete one mission during an ocean fishing voyage.","de":"Bedingung: Eine Schiffsmission bei einer großen Fahrt abgeschlossen.","fr":"Condition : remplir un des trois objectifs personnels lors d\'un voyage.","ja":"達成条件：船上でのミッションを1つ達成する。","cn":"达成条件：完成1种船上任务。","ko":"달성 조건: 선상 과제 1개 달성"},"bonus":105,"order":1},"18":{"id":18,"icon":65924,"objective":{"en":"Ocean Fishing Enthusiast","de":"Hochseefischer-Enthusiast","fr":"Amateur de la pêche en mer","ja":"中級海釣り師","cn":"中级海钓师","ko":"중급 바다낚시꾼"},"requirement":{"en":"Requirement: Complete two missions during an ocean fishing voyage.","de":"Bedingung: Zwei Schiffsmissionen bei einer großen Fahrt abgeschlossen.","fr":"Condition : remplir deux des trois objectifs personnels lors d\'un voyage.","ja":"達成条件：船上でのミッションを2つ達成する。","cn":"达成条件：完成2种船上任务。","ko":"달성 조건: 선상 과제 2개 달성"},"bonus":110,"order":2},"19":{"id":19,"icon":65925,"objective":{"en":"Ocean Fishing Fanatic","de":"Hochseefischer-Fanatiker","fr":"Pro de la pêche en mer","ja":"上級海釣り師","cn":"上级海钓师","ko":"상급 바다낚시꾼"},"requirement":{"en":"Requirement: Complete three missions during an ocean fishing voyage.","de":"Bedingung: Drei Schiffsmissionen bei einer großen Fahrt abgeschlossen.","fr":"Condition : remplir tous les objectifs personnels lors d\'un voyage.","ja":"達成条件：船上でのミッションを3つ達成する。","cn":"达成条件：完成3种船上任务。","ko":"달성 조건: 선상 과제 3개 달성"},"bonus":120,"order":3},"20":{"id":20,"icon":65917,"objective":{"en":"Balloon Catchers","de":"Ballonfänger","fr":"Amateur du ballon rond","ja":"バルーンキャッチャー","cn":"气鲀四海","ko":"풍선잡이"},"requirement":{"en":"Requirement: As a party, catch 250 or more fugu.","de":"Bedingung: Als Gruppe 250 Kugelfische gefangen.","fr":"Condition : pêcher 250 fugus ou plus en équipe.","ja":"達成条件：パーティ合計で250匹以上、フグを釣り上げる。","cn":"达成条件：小队全体合计钓到250只以上的鲀类。","ko":"달성 조건: 파티 합계로 250마리 이상 복어 낚기"},"bonus":130,"order":37},"21":{"id":21,"icon":65918,"objective":{"en":"Crab Boat Crew","de":"Krabbenschiffsbesatzung","fr":"Pince-sans-rire","ja":"蟹工船","cn":"横路不通","ko":"게잡이배"},"requirement":{"en":"Requirement: As a party, catch 250 or more crabs.","de":"Bedingung: Als Gruppe 250 Krabben gefangen.","fr":"Condition : pêcher 250 crabes ou plus en équipe.","ja":"達成条件：パーティ合計で250匹以上、カニを釣り上げる。","cn":"达成条件：小队全体合计钓到250只以上的蟹类。","ko":"달성 조건: 파티 합계로 250마리 이상 게 낚기"},"bonus":130,"order":38},"22":{"id":22,"icon":65919,"objective":{"en":"Sticking it to the Manta","de":"Manta! Manta!","fr":"Raies arraisonnées","ja":"エイエイオー","cn":"只有我最鳐摆","ko":"가오가오리"},"requirement":{"en":"Requirement: As an individual, catch 25 or more mantas.","de":"Bedingung: 25 Mantas gefangen.","fr":"Condition : pêcher 25 raies ou plus.","ja":"達成条件：個人合計で25匹以上、エイを釣り上げる。","cn":"达成条件：个人合计钓到25只以上的鳐鱼。","ko":"달성 조건: 개인 합계로 25마리 이상 가오리 낚기"},"bonus":120,"order":39},"23":{"id":23,"icon":65907,"objective":{"en":"Bream Team: Galadion Bay","de":"Reicher Fang: Galadion-Bucht","fr":"Une pêche d\'enfer<Indent/>: baie de Galadion","ja":"豊漁：ガラディオン湾","cn":"丰渔：加拉迪翁湾","ko":"풍어: 갈라디온 만"},"requirement":{"en":"Requirement: As a party, catch 9 or more different fish in Galadion Bay. (Target number adjusted for party size.)","de":"Bedingung: In der Galadion-Bucht als Gruppe 9 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).\\n","fr":"Condition : pêcher 9 prises différentes ou plus en équipe dans la baie de Galadion. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：ガラディオン湾にてパーティ合計で9種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在加拉迪翁湾合计钓到9种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 갈라디온 만에서 파티 합계로 9종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":11},"24":{"id":24,"icon":65907,"objective":{"en":"Bream Team: Galadion Bay","de":"Reicher Fang: Galadion-Bucht","fr":"Une pêche d\'enfer<Indent/>: baie de Galadion","ja":"豊漁：ガラディオン湾","cn":"丰渔：加拉迪翁湾","ko":"풍어: 갈라디온 만"},"requirement":{"en":"Requirement: As a party, catch 8 or more different fish in Galadion Bay. (Target number adjusted for party size.)","de":"Bedingung: In der Galadion-Bucht als Gruppe 8 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).\\n","fr":"Condition : pêcher 8 prises différentes ou plus en équipe dans la baie de Galadion. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：ガラディオン湾にてパーティ合計で8種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在加拉迪翁湾合计钓到8种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 갈라디온 만에서 파티 합계로 8종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":12},"25":{"id":25,"icon":65908,"objective":{"en":"Bream Team: Southern Strait of Merlthor","de":"Reicher Fang: Südliche Straße von Merlthor","fr":"Une pêche d\'enfer<Indent/>: détroit sud de Merlthor","ja":"豊漁：メルトール海峡南","cn":"丰渔：梅尔托尔海峡南","ko":"풍어: 멜토르 해협 남쪽"},"requirement":{"en":"Requirement: As a party, catch 9 or more different fish in the southern Strait of Merlthor. (Target number adjusted for party size.)","de":"Bedingung: In der südlichen Straße von Merlthor als Gruppe 9 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).","fr":"Condition : pêcher 9 prises différentes ou plus en équipe au détroit sud de Merlthor. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：メルトール海峡南にてパーティ合計で9種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在梅尔托尔海峡南合计钓到9种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 멜토르 해협 남쪽에서 파티 합계로 9종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":14},"26":{"id":26,"icon":65908,"objective":{"en":"Bream Team: Southern Strait of Merlthor","de":"Reicher Fang: Südliche Straße von Merlthor","fr":"Une pêche d\'enfer<Indent/>: détroit sud de Merlthor","ja":"豊漁：メルトール海峡南","cn":"丰渔：梅尔托尔海峡南","ko":"풍어: 멜토르 해협 남쪽"},"requirement":{"en":"Requirement: As a party, catch 8 or more different fish in the southern Strait of Merlthor. (Target number adjusted for party size.)","de":"Bedingung: In der südlichen Straße von Merlthor als Gruppe 8 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).","fr":"Condition : pêcher 8 prises différentes ou plus en équipe au détroit sud de Merlthor. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：メルトール海峡南にてパーティ合計で8種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在梅尔托尔海峡南合计钓到8种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 멜토르 해협 남쪽에서 파티 합계로 8종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":15},"27":{"id":27,"icon":65909,"objective":{"en":"Bream Team: Northern Strait of Merlthor","de":"Reicher Fang: Nördliche Straße von Merlthor","fr":"Une pêche d\'enfer<Indent/>: détroit nord de Merlthor","ja":"豊漁：メルトール海峡北","cn":"丰渔：梅尔托尔海峡北","ko":"풍어: 멜토르 해협 북쪽"},"requirement":{"en":"Requirement: As a party, catch 9 or more different fish in the northern Strait of Merlthor. (Target number adjusted for party size.)","de":"Bedingung: In der nördlichen Straße von Merlthor als Gruppe 9 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).","fr":"Condition : pêcher 9 prises différentes ou plus en équipe au détroit nord de Merlthor. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：メルトール海峡北にてパーティ合計で9種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在梅尔托尔海峡北合计钓到9种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 멜토르 해협 북쪽에서 파티 합계로 9종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":20},"28":{"id":28,"icon":65909,"objective":{"en":"Bream Team: Northern Strait of Merlthor","de":"Reicher Fang: Nördliche Straße von Merlthor","fr":"Une pêche d\'enfer<Indent/>: détroit nord de Merlthor","ja":"豊漁：メルトール海峡北","cn":"丰渔：梅尔托尔海峡北","ko":"풍어: 멜토르 해협 북쪽"},"requirement":{"en":"Requirement: As a party, catch 8 or more different fish in the northern Strait of Merlthor. (Target number adjusted for party size.)","de":"Bedingung: In der nördlichen Straße von Merlthor als Gruppe 8 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).","fr":"Condition : pêcher 8 prises différentes ou plus en équipe au détroit nord de Merlthor. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：メルトール海峡北にてパーティ合計で8種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在梅尔托尔海峡北合计钓到8种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 멜토르 해협 북쪽에서 파티 합계로 8종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":21},"29":{"id":29,"icon":65910,"objective":{"en":"Bream Team: Rhotano Sea","de":"Reicher Fang: Rhotano-See","fr":"Une pêche d\'enfer<Indent/>: mer de Rhotano","ja":"豊漁：ロータノ海","cn":"丰渔：罗塔诺海","ko":"풍어: 로타노 해"},"requirement":{"en":"Requirement: As a party, catch 9 or more different fish in the Rhotano Sea. (Target number adjusted for party size.)","de":"Bedingung: In der Rhotano-See als Gruppe 9 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).","fr":"Condition : pêcher 9 prises différentes ou plus en équipe dans la mer de Rhotano. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：ロータノ海にてパーティ合計で9種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在罗塔诺海合计钓到9种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 로타노 해에서 파티 합계로 9종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":23},"30":{"id":30,"icon":65910,"objective":{"en":"Bream Team: Rhotano Sea","de":"Reicher Fang: Rhotano-See","fr":"Une pêche d\'enfer<Indent/>: mer de Rhotano","ja":"豊漁：ロータノ海","cn":"丰渔：罗塔诺海","ko":"풍어: 로타노 해"},"requirement":{"en":"Requirement: As a party, catch 8 or more different fish in the Rhotano Sea. (Target number adjusted for party size.)","de":"Bedingung: In der Rhotano-See als Gruppe 8 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).","fr":"Condition : pêcher 8 prises différentes ou plus en équipe dans la mer de Rhotano. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：ロータノ海にてパーティ合計で8種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在罗塔诺海合计钓到8种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 로타노 해에서 파티 합계로 8종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":24},"31":{"id":31,"icon":65920,"objective":{"en":"Bream Team: Cieldalaes","de":"Reicher Fang: Cieldaläen","fr":"Une pêche d\'enfer<Indent/>: îles Cieldalaes","ja":"豊漁：シェルダレー諸島","cn":"丰渔：谢尔达莱群岛","ko":"풍어: 시엘달레 제도"},"requirement":{"en":"Requirement: As a party, catch 10 or more different fish in the Cieldalaes.","de":"Bedingung: Auf den Cieldaläen als Gruppe 10 Fischarten gefangen.","fr":"Condition : pêcher 10 prises différentes ou plus en équipe au large des îles Cieldalaes.","ja":"達成条件：シェルダレー諸島にてパーティ合計で10種類以上、魚を釣り上げる。","cn":"达成条件：小队全体在谢尔达莱群岛合计钓到10种以上的鱼类。","ko":"달성 조건: 시엘달레 제도에서 파티 합계로 10종류 이상 물고기 낚기"},"bonus":110,"order":16},"32":{"id":32,"icon":65920,"objective":{"en":"Bream Team: Cieldalaes","de":"Reicher Fang: Cieldaläen","fr":"Une pêche d\'enfer<Indent/>: îles Cieldalaes","ja":"豊漁：シェルダレー諸島","cn":"丰渔：谢尔达莱群岛","ko":"풍어: 시엘달레 제도"},"requirement":{"en":"Requirement: As a party, catch 9 or more different fish in the Cieldalaes. (Target number adjusted for party size.)","de":"Bedingung: Auf den Cieldaläen als Gruppe 9 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).","fr":"Condition : pêcher 9 prises différentes ou plus en équipe au large des îles Cieldalaes. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：シェルダレー諸島にてパーティ合計で9種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在谢尔达莱群岛合计钓到9种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 시엘달레 제도에서 파티 합계로 9종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":17},"33":{"id":33,"icon":65920,"objective":{"en":"Bream Team: Cieldalaes","de":"Reicher Fang: Cieldaläen","fr":"Une pêche d\'enfer<Indent/>: îles Cieldalaes","ja":"豊漁：シェルダレー諸島","cn":"丰渔：谢尔达莱群岛","ko":"풍어: 시엘달레 제도"},"requirement":{"en":"Requirement: As a party, catch 8 or more different fish in the Cieldalaes. (Target number adjusted for party size.)","de":"Bedingung: Auf den Cieldaläen als Gruppe 8 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).","fr":"Condition : pêcher 8 prises différentes ou plus en équipe au large des îles Cieldalaes. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：シェルダレー諸島にてパーティ合計で8種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在谢尔达莱群岛合计钓到8种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 시엘달레 제도에서 파티 합계로 8종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":18},"34":{"id":34,"icon":65921,"objective":{"en":"Bream Team: Bloodbrine Sea","de":"Reicher Fang: Schwerblütiges Meer","fr":"Une pêche d\'enfer<Indent/>: mer Pourpre","ja":"豊漁：緋汐海","cn":"丰渔：绯汐海","ko":"풍어: 붉은물결 바다"},"requirement":{"en":"Requirement: As a party, catch 10 or more different fish in the Bloodbrine Sea.","de":"Bedingung: Im Schwerblütigen Meer als Gruppe 10 Fischarten gefangen.","fr":"Condition : pêcher 10 prises différentes ou plus en équipe dans la mer Pourpre.","ja":"達成条件：緋汐海にてパーティ合計で10種類以上、魚を釣り上げる。","cn":"达成条件：小队全体在绯汐海合计钓到10种以上的鱼类。","ko":"달성 조건: 붉은물결 바다에서 파티 합계로 10종류 이상 물고기 낚기"},"bonus":110,"order":25},"35":{"id":35,"icon":65921,"objective":{"en":"Bream Team: Bloodbrine Sea","de":"Reicher Fang: Schwerblütiges Meer","fr":"Une pêche d\'enfer<Indent/>: mer Pourpre","ja":"豊漁：緋汐海","cn":"丰渔：绯汐海","ko":"풍어: 붉은물결 바다"},"requirement":{"en":"Requirement: As a party, catch 9 or more different fish in the Bloodbrine Sea. (Target number adjusted for party size.)","de":"Bedingung: Im Schwerblütigen Meer als Gruppe 9 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).","fr":"Condition : pêcher 9 prises différentes ou plus en équipe dans la mer Pourpre. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：緋汐海にてパーティ合計で9種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在绯汐海合计钓到9种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 붉은물결 바다에서 파티 합계로 9종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":26},"36":{"id":36,"icon":65921,"objective":{"en":"Bream Team: Bloodbrine Sea","de":"Reicher Fang: Schwerblütiges Meer","fr":"Une pêche d\'enfer<Indent/>: mer Pourpre","ja":"豊漁：緋汐海","cn":"丰渔：绯汐海","ko":"풍어: 붉은물결 바다"},"requirement":{"en":"Requirement: As a party, catch 8 or more different fish in the Bloodbrine Sea. (Target number adjusted for party size.)","de":"Bedingung: Im Schwerblütigen Meer als Gruppe 8 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).","fr":"Condition : pêcher 8 prises différentes ou plus en équipe dans la mer Pourpre. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：緋汐海にてパーティ合計で8種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在绯汐海合计钓到8种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 붉은물결 바다에서 파티 합계로 8종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":27},"37":{"id":37,"icon":65922,"objective":{"en":"Bream Team: Rothlyt Sound","de":"Reicher Fang: Rothlyt-Meerbusen","fr":"Une pêche d\'enfer<Indent/>: golfe de Rothlyt","ja":"豊漁：ロズリト湾","cn":"丰渔：罗斯利特湾","ko":"풍어: 로들리트 만"},"requirement":{"en":"Requirement: As a party, catch 10 or more different fish in Rothlyt Sound.","de":"Bedingung: Im Rothlyt-Meerbusen als Gruppe 10 Fischarten gefangen.","fr":"Condition : pêcher 10 prises différentes ou plus en équipe dans le golfe de Rothlyt.","ja":"達成条件：ロズリト湾にてパーティ合計で10種類以上、魚を釣り上げる。","cn":"达成条件：小队全体在罗斯利特湾合计钓到10种以上的鱼类。","ko":"달성 조건: 로들리트 만에서 파티 합계로 10종류 이상 물고기 낚기"},"bonus":110,"order":28},"38":{"id":38,"icon":65922,"objective":{"en":"Bream Team: Rothlyt Sound","de":"Reicher Fang: Rothlyt-Meerbusen","fr":"Une pêche d\'enfer<Indent/>: golfe de Rothlyt","ja":"豊漁：ロズリト湾","cn":"丰渔：罗斯利特湾","ko":"풍어: 로들리트 만"},"requirement":{"en":"Requirement: As a party, catch 9 or more different fish in Rothlyt Sound. (Target number adjusted for party size.)","de":"Bedingung: Im Rothlyt-Meerbusen als Gruppe 9 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).","fr":"Condition : pêcher 9 prises différentes ou plus en équipe dans le golfe de Rothlyt. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：ロズリト湾にてパーティ合計で9種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在罗斯利特湾合计钓到9种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 로들리트 만에서 파티 합계로 9종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":29},"39":{"id":39,"icon":65922,"objective":{"en":"Bream Team: Rothlyt Sound","de":"Reicher Fang: Rothlyt-Meerbusen","fr":"Une pêche d\'enfer<Indent/>: golfe de Rothlyt","ja":"豊漁：ロズリト湾","cn":"丰渔：罗斯利特湾","ko":"풍어: 로들리트 만"},"requirement":{"en":"Requirement: As a party, catch 8 or more different fish in Rothlyt Sound. (Target number adjusted for party size.)","de":"Bedingung: Im Rothlyt-Meerbusen als Gruppe 8 Fischarten gefangen (erforderliche Anzahl hängt von Gruppengröße ab).","fr":"Condition : pêcher 8 prises différentes ou plus en équipe dans le golfe de Rothlyt. (Nombre requis ajusté au nombre de participants)","ja":"達成条件：ロズリト湾にてパーティ合計で8種類以上、魚を釣り上げる。(パーティ人数による補正発動中)","cn":"达成条件：小队全体在罗斯利特湾合计钓到8种以上的鱼类。（已根据小队人数进行调整）","ko":"달성 조건: 로들리트 만에서 파티 합계로 8종류 이상 물고기 낚기(파티원 수에 따라 보정됨)"},"bonus":110,"order":30}}');
;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/achievements.json
const achievements_namespaceObject = JSON.parse('{"0":{"id":0,"icon":0,"name":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"description":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":0},"2553":{"id":2553,"icon":1116,"name":{"en":"Denizens of Galadion","de":"Meisterfischer der Galadion-Bucht","fr":"Ichtyogrammiste de la baie de Galadion","ja":"ガラディオン湾沖合の魚拓王","cn":"加拉迪翁湾外海的鱼拓王","ko":"갈라디온 만 먼바다의 어탁왕"},"description":{"en":"Catch every type of fish in outer Galadion Bay when a spectral current is not present.","de":"In der Galadion-Bucht alle Fischarten gefangen, die außerhalb des Wetterphänomens der Phantomströmung gefangen werden können.","fr":"Pêcher un poisson de chaque espèce dans la baie de Galadion, sauf ceux apparaissant dans les courants spectraux.","ja":"ガラディオン湾沖合で天候が幻海流ではない時に釣れる魚を、全種類釣り上げる","cn":"钓上加拉迪翁湾外海幻海流期间以外的所有鱼类。","ko":"갈라디온 만 먼바다에서 환해류가 흐르지 않을 때 낚을 수 있는 모든 종류의 물고기 낚기"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":150},"2554":{"id":2554,"icon":1116,"name":{"en":"Denizens of South Merlthor","de":"Meisterfischer der südlichen Straße von Merlthor","fr":"Ichtyogrammiste du détroit sud de Merlthor","ja":"メルトール海峡南の魚拓王","cn":"梅尔托尔海峡南的鱼拓王","ko":"멜토르 해협 남쪽의 어탁왕"},"description":{"en":"Catch every type of fish in the southern Strait of Merlthor when a spectral current is not present.","de":"In der südlichen Straße von Merlthor alle Fischarten gefangen, die außerhalb des Wetterphänomens der Phantomströmung gefangen werden können.","fr":"Pêcher un poisson de chaque espèce dans le détroit sud de Merlthor, sauf ceux apparaissant dans les courants spectraux.","ja":"メルトール海峡南で天候が幻海流ではない時に釣れる魚を、全種類釣り上げる","cn":"钓上梅尔托尔海峡南幻海流期间以外的所有鱼类。","ko":"멜토르 해협 남쪽에서 환해류가 흐르지 않을 때 낚을 수 있는 모든 종류의 물고기 낚기"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":152},"2555":{"id":2555,"icon":1116,"name":{"en":"Denizens of the Rhotano","de":"Meisterfischer der Rhotano-See","fr":"Ichtyogrammiste de la mer de Rhotano","ja":"ロータノ海沖合の魚拓王","cn":"罗塔诺海海面的鱼拓王","ko":"로타노 해 먼바다의 어탁왕"},"description":{"en":"Catch every type of fish in the open Rhotano Sea when a spectral current is not present.","de":"In der Rhotano-See alle Fischarten gefangen, die außerhalb des Wetterphänomens der Phantomströmung gefangen werden können.","fr":"Pêcher un poisson de chaque espèce dans la mer de Rhotano, sauf ceux apparaissant dans les courants spectraux.","ja":"ロータノ海沖合で天候が幻海流ではない時に釣れる魚を、全種類釣り上げる","cn":"钓上罗塔诺海海面幻海流期间以外的所有鱼类。","ko":"로타노 해 먼바다에서 환해류가 흐르지 않을 때 낚을 수 있는 모든 종류의 물고기 낚기"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":156},"2556":{"id":2556,"icon":1116,"name":{"en":"Denizens of North Merlthor","de":"Meisterfischer der nördlichen Straße von Merlthor ","fr":"Ichtyogrammiste du détroit nord de Merlthor","ja":"メルトール海峡北の魚拓王","cn":"梅尔托尔海峡北的鱼拓王","ko":"멜토르 해협 북쪽의 어탁왕"},"description":{"en":"Catch every type of fish in the northern Strait of Merlthor when a spectral current is not present.","de":"In der nördlichen Straße von Merlthor alle Fischarten gefangen, die außerhalb des Wetterphänomens der Phantomströmung gefangen werden können.","fr":"Pêcher un poisson de chaque espèce dans le détroit nord de Merlthor, sauf ceux apparaissant dans les courants spectraux.","ja":"メルトール海峡北で天候が幻海流ではない時に釣れる魚を、全種類釣り上げる","cn":"钓上梅尔托尔海峡北幻海流期间以外的所有鱼类。","ko":"멜토르 해협 북쪽에서 환해류가 흐르지 않을 때 낚을 수 있는 모든 종류의 물고기 낚기"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":154},"2557":{"id":2557,"icon":1115,"name":{"en":"On a Boat I","de":"Fischer auf großer Fahrt I","fr":"Grand pêcheur I","ja":"世界を釣る者：ランク1","cn":"海钓爱好者1","ko":"세계를 낚는 자: 1단계"},"description":{"en":"Earn a cumulative total of 10,000 points while ocean fishing.","de":"10.000 Punkte im Inhalt „Auf großer Fahrt“ erreicht.","fr":"Cumuler 10 000 points à la pêche en mer.","ja":"オーシャンフィッシングで、釣果点を累計10,000ポイント記録する","cn":"在出海垂钓中累计获得10,000渔分。","ko":"먼바다 낚시에서 총 10,000점 기록"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":170},"2558":{"id":2558,"icon":1115,"name":{"en":"On a Boat II","de":"Fischer auf großer Fahrt II","fr":"Grand pêcheur II","ja":"世界を釣る者：ランク2","cn":"海钓爱好者2","ko":"세계를 낚는 자: 2단계"},"description":{"en":"Earn a cumulative total of 100,000 points while ocean fishing.","de":"100.000 Punkte im Inhalt „Auf großer Fahrt“ erreicht.","fr":"Cumuler 100 000 points à la pêche en mer.","ja":"オーシャンフィッシングで、釣果点を累計100,000ポイント記録する","cn":"在出海垂钓中累计获得100,000渔分。","ko":"먼바다 낚시에서 총 100,000점 기록"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":171},"2559":{"id":2559,"icon":1115,"name":{"en":"On a Boat III","de":"Fischer auf großer Fahrt III","fr":"Grand pêcheur III","ja":"世界を釣る者：ランク3","cn":"海钓爱好者3","ko":"세계를 낚는 자: 3단계"},"description":{"en":"Earn a cumulative total of 500,000 points while ocean fishing.","de":"500.000 Punkte im Inhalt „Auf großer Fahrt“ erreicht.","fr":"Cumuler 500 000 points à la pêche en mer.","ja":"オーシャンフィッシングで、釣果点を累計500,000ポイント記録する","cn":"在出海垂钓中累计获得500,000渔分。","ko":"먼바다 낚시에서 총 500,000점 기록"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":172},"2560":{"id":2560,"icon":1118,"name":{"en":"No More Fish in the Sea I","de":"Hochseefischer I","fr":"Ratisseur des océans I","ja":"オーシャンフィッシャー：ランク1","cn":"游钓大洋1","ko":"먼바다의 낚시꾼: 1단계"},"description":{"en":"Score at least 5,000 points during a single ocean fishing voyage.","de":"5.000 Punkte auf einer Fahrt im Inhalt „Auf großer Fahrt“ erreicht.","fr":"Atteindre un score de 5 000 points au cours d\'une expédition de pêche en mer.","ja":"オーシャンフィッシングで、1回の航海で5,000ポイント以上の合計釣果点を記録する","cn":"在1次出海垂钓中获得5,000以上渔分。","ko":"먼바다 낚시 항해 한 번에 5,000점 이상의 총점을 기록"},"reward":{"en":"The Major-General","de":"Haikrieger","fr":"Requin commandeur","ja":"コマンダー・シャーク","cn":"鲨鱼指挥官","ko":"지휘관 상어"},"order":200},"2561":{"id":2561,"icon":1118,"name":{"en":"No More Fish in the Sea II","de":"Hochseefischer II","fr":"Ratisseur des océans II","ja":"オーシャンフィッシャー：ランク2","cn":"游钓大洋2","ko":"먼바다의 낚시꾼: 2단계"},"description":{"en":"Score at least 10,000 points during a single ocean fishing voyage.","de":"10.000 Punkte auf einer Fahrt im Inhalt „Auf großer Fahrt“ erreicht.","fr":"Atteindre un score de 10 000 points au cours d\'une expédition de pêche en mer.","ja":"オーシャンフィッシングで、1回の航海で10,000ポイント以上の合計釣果点を記録する","cn":"在1次出海垂钓中获得10,000以上渔分。","ko":"먼바다 낚시 항해 한 번에 10,000점 이상의 총점을 기록"},"reward":{"en":"Hybodus Horn","de":"Hybodus-Horn","fr":"Cor hybodus","ja":"ヒボドゥスホルン","cn":"弓鲛角笛","ko":"히보두스 뿔피리"},"order":201},"2562":{"id":2562,"icon":1118,"name":{"en":"No More Fish in the Sea III","de":"Hochseefischer III","fr":"Ratisseur des océans III","ja":"オーシャンフィッシャー：ランク3","cn":"游钓大洋3","ko":"먼바다의 낚시꾼: 3단계"},"description":{"en":"Score at least 16,000 points during a single ocean fishing voyage.","de":"16.000 Punkte auf einer Fahrt im Inhalt „Auf großer Fahrt“ erreicht.","fr":"Atteindre un score de 16 000 points au cours d\'une expédition de pêche en mer.","ja":"オーシャンフィッシングで、1回の航海で16,000ポイント以上の合計釣果点を記録する","cn":"在1次出海垂钓中获得16,000以上渔分。","ko":"먼바다 낚시 항해 한 번에 16,000점 이상의 총점을 기록"},"reward":{"en":"Ocean Fisher","de":"Hochseefischer","fr":"Ambitieux accompli","ja":"Ocean Fisher","cn":"游钓大洋","ko":"먼바다 낚시꾼"},"order":202},"2563":{"id":2563,"icon":29023,"name":{"en":"What Did Octopodes Do to You?","de":"Oktopussreiter","fr":"Octo-opus","ja":"オクトパストラベラー","cn":"八爪旅人","ko":"문어 여행자"},"description":{"en":"Earn the “Octopus Travelers” bonus during an ocean fishing voyage.","de":"Im Inhalt „Auf großer Fahrt“ das Ziel „Oktopussreiter“ erfüllt.","fr":"Obtenir le bonus Octo-opus au cours d\'une expédition de pêche en mer.","ja":"オーシャンフィッシングにて、オクトパストラベラーを達成する","cn":"在出海垂钓中达成八爪旅人。","ko":"먼바다 낚시에서 \'문어 여행자\' 달성"},"reward":{"en":"Octopus Traveler","de":"Oktopusreisender","fr":"Poulpicide prééminent","ja":"Octopus Traveler","cn":"八爪旅人","ko":"문어 여행자"},"order":220},"2564":{"id":2564,"icon":29011,"name":{"en":"What Did Sharks Do to You?","de":"Haijäger","fr":"Chasseurs de requins","ja":"シャークハンター","cn":"捕鲨人","ko":"상어 사냥꾼"},"description":{"en":"Earn the “Certifiable Shark Hunters” bonus during an ocean fishing voyage.","de":"Im Inhalt „Auf großer Fahrt“ das Ziel „Haijäger“ erfüllt.","fr":"Obtenir le bonus Chasseurs de requins au cours d\'une expédition de pêche en mer.","ja":"オーシャンフィッシングにて、シャークハンターを達成する","cn":"在出海垂钓中达成捕鲨人。","ko":"먼바다 낚시에서 \'상어 사냥꾼\' 달성"},"reward":{"en":"Shark Hunter","de":"Haijäger","fr":"Savant ès squales","ja":"Shark Hunter","cn":"捕鲨人","ko":"상어 사냥꾼"},"order":221},"2565":{"id":2565,"icon":29755,"name":{"en":"What Did Jellyfish Do to You?","de":"Quallenfänger","fr":"Le bateau de la méduse","ja":"クラゲマニア","cn":"水母狂魔","ko":"해파리 애호가"},"description":{"en":"Earn the “Jelled Together” bonus during an ocean fishing voyage.","de":"Im Inhalt „Auf großer Fahrt“ das Ziel „Quallenfänger“ erfüllt.","fr":"Obtenir le bonus Le bateau de la méduse au cours d\'une expédition de pêche en mer.","ja":"オーシャンフィッシングにて、クラゲマニアを達成する","cn":"在出海垂钓中达成水母狂魔。","ko":"먼바다 낚시에서 \'해파리 애호가\' 달성"},"reward":{"en":"Jellyfish Fanatic","de":"Quallenfanatiker","fr":"Maître méduseur ","ja":"Jellyfish Fanatic","cn":"水母狂魔","ko":"해파리 애호가"},"order":222},"2566":{"id":2566,"icon":29040,"name":{"en":"What Did Seadragons Do to You?","de":"Seepferdchenbändiger","fr":"Fièvre de cheval des mers","ja":"シードラゴンキラー","cn":"龙马惊神","ko":"해마 기수"},"description":{"en":"Earn the “Maritime Dragonslayers” bonus during an ocean fishing voyage.","de":"Im Inhalt „Auf großer Fahrt“ das Ziel „Seepferdchenbändiger“ erfüllt.","fr":"Obtenir le bonus Fièvre de cheval des mers au cours d\'une expédition de pêche en mer.","ja":"オーシャンフィッシングにて、シードラゴンキラーを達成する","cn":"在出海垂钓中达成龙马惊神。","ko":"먼바다 낚시에서 \'해마 기수\' 달성"},"reward":{"en":"Sea Dragoon","de":"Meeres-Dragoon","fr":"Équarisseur équestre","ja":"Sea Dragoon","cn":"海龙骑士","ko":"해마 기수"},"order":223},"2748":{"id":2748,"icon":1116,"name":{"en":"Denizens of the Cieldalaes","de":"Meisterfischer der Cieldaläen","fr":"Ichtyogrammiste des îles de Cieldalaes","ja":"シェルダレー諸島沖合の魚拓王","cn":"谢尔达莱群岛近海的鱼拓王","ko":"시엘달레 제도 먼바다의 어탁왕"},"description":{"en":"Catch every type of fish in the Cieldalaes Margin when a spectral current is not present.","de":"In den Gewässern der Cieldaläen alle Fischarten gefangen, die außerhalb des Wetterphänomens der Phantomströmung gefangen werden können.","fr":"Pêcher un poisson de chaque espèce au large des îles de Cieldalaes, sauf ceux apparaissant dans les courants spectraux.","ja":"シェルダレー諸島沖合で天候が幻海流ではない時に釣れる魚を、全種類釣り上げる","cn":"钓上谢尔达莱群岛近海幻海流期间以外的所有鱼类。","ko":"시엘달레 제도 먼바다에서 환해류가 흐르지 않을 때 낚을 수 있는 모든 종류의 물고기 낚기"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":158},"2749":{"id":2749,"icon":1116,"name":{"en":"Denizens of the Bloodbrine","de":"Meisterfischer des Schwerblütigen Meeres","fr":"Ichtyogrammiste de la mer Pourpre","ja":"緋汐海沖合の魚拓王","cn":"绯汐海近海的鱼拓王","ko":"붉은물결 바다 먼바다의 어탁왕"},"description":{"en":"Catch every type of fish in the open Bloodbrine Sea when a spectral current is not present.","de":"Im Schwerblütigen Meer alle Fischarten gefangen, die außerhalb des Wetterphänomens der Phantomströmung gefangen werden können.","fr":"Pêcher un poisson de chaque espèce au large de la mer Pourpre, sauf ceux apparaissant dans les courants spectraux.","ja":"緋汐海沖合で天候が幻海流ではない時に釣れる魚を、全種類釣り上げる","cn":"钓上绯汐海近海幻海流期间以外的所有鱼类。","ko":"붉은물결 바다 먼바다에서 환해류가 흐르지 않을 때 낚을 수 있는 모든 종류의 물고기 낚기"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":160},"2750":{"id":2750,"icon":1116,"name":{"en":"Denizens of the Rothlyt Sound","de":"Meisterfischer des Rothlyt-Meerbusens","fr":"Ichtyogrammiste du golfe de Rothlyt","ja":"ロズリト湾沖合の魚拓王","cn":"罗斯利特湾近海的鱼拓王","ko":"로들리트 만 먼바다의 어탁왕"},"description":{"en":"Catch every type of fish in the outer Rothlyt Sound when a spectral current is not present.","de":"In den Gewässern des Rothlyt-Meerbusens alle Fischarten gefangen, die außerhalb des Wetterphänomens der Phantomströmung gefangen werden können.","fr":"Pêcher un poisson de chaque espèce au large du golfe de Rothlyt, sauf ceux apparaissant dans les courants spectraux.","ja":"ロズリト湾沖合で天候が幻海流ではない時に釣れる魚を、全種類釣り上げる","cn":"钓上罗斯利特湾近海幻海流期间以外的所有鱼类。","ko":"로들리트 만 먼바다에서 환해류가 흐르지 않을 때 낚을 수 있는 모든 종류의 물고기 낚기"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":162},"2751":{"id":2751,"icon":1116,"name":{"en":"Specters of the Cieldalaes","de":"Phantomfischer der Cieldaläen","fr":"Spectre des îles de Cieldalaes","ja":"シェルダレー諸島沖合の幻海王","cn":"谢尔达莱群岛近海的幻海王","ko":"시엘달레 제도 먼바다의 환해왕"},"description":{"en":"Catch every type of fish in the Cieldalaes Margin when a spectral current is present.","de":"In den Gewässern der Cieldaläen alle Fischarten gefangen, die während des Wetterphänomens der Phantomströmung gefangen werden können.","fr":"Pêcher un poisson de chaque espèce apparaissant dans les courants spectraux au large des îles de Cieldalaes.","ja":"シェルダレー諸島沖合で天候が幻海流の時に釣れる魚を、全種類釣り上げる","cn":"钓上谢尔达莱群岛近海幻海流期间的所有鱼类。","ko":"시엘달레 제도 먼바다에서 환해류가 흐를 때 낚을 수 있는 모든 종류의 물고기 낚기"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":159},"2752":{"id":2752,"icon":1116,"name":{"en":"Specters of the Bloodbrine","de":"Phantomfischer des Schwerblütigen Meeres","fr":"Spectre de la mer Pourpre","ja":"緋汐海沖合の幻海王","cn":"绯汐海近海的幻海王","ko":"붉은물결 바다 먼바다의 환해왕"},"description":{"en":"Catch every type of fish in the open Bloodbrine Sea when a spectral current is present.","de":"Im Schwerblütigen Meer alle Fischarten gefangen, die während des Wetterphänomens der Phantomströmung gefangen werden können.","fr":"Pêcher un poisson de chaque espèce apparaissant dans les courants spectraux au large de la mer Pourpre.","ja":"緋汐海沖合で天候が幻海流の時に釣れる魚を、全種類釣り上げる","cn":"钓上绯汐海近海幻海流期间的所有鱼类。","ko":"붉은물결 바다 먼바다에서 환해류가 흐를 때 낚을 수 있는 모든 종류의 물고기 낚기"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":161},"2753":{"id":2753,"icon":1116,"name":{"en":"Specters of the Rothlyt Sound","de":"Phantomfischer des Rothlyt-Meerbusens","fr":"Spectre du golfe de Rothlyt","ja":"ロズリト湾沖合の幻海王","cn":"罗斯利特湾近海的幻海王","ko":"로들리트 만 먼바다의 환해왕"},"description":{"en":"Catch every type of fish in the outer Rothlyt Sound when a spectral current is present.","de":"In den Gewässern des Rothlyt-Meerbusens alle Fischarten gefangen, die während des Wetterphänomens der Phantomströmung gefangen werden können.","fr":"Pêcher un poisson de chaque espèce apparaissant dans les courants spectraux au large du golfe de Rothlyt.","ja":"ロズリト湾沖合で天候が幻海流の時に釣れる魚を、全種類釣り上げる","cn":"钓上罗斯利特湾近海幻海流期间的所有鱼类。","ko":"로들리트 만 먼바다에서 환해류가 흐를 때 낚을 수 있는 모든 종류의 물고기 낚기"},"reward":{"en":"","de":"","fr":"","ja":"","cn":"","ko":""},"order":163},"2754":{"id":2754,"icon":29118,"name":{"en":"What Did Balloons Do to You?","de":"Ballonfänger","fr":"Amateur du ballon rond","ja":"バルーンキャッチャー","cn":"气鲀四海","ko":"풍선잡이"},"description":{"en":"Earn the “Balloon Catchers” bonus during an ocean fishing voyage.","de":"Den Bonus „Ballonfänger“ im Inhalt „Auf großer Fahrt“ erhalten.","fr":"Obtenir le bonus Amateur du ballon rond au cours d\'une expédition de pêche en mer.","ja":"オーシャンフィッシングにて、バルーンキャッチャーを達成する","cn":"在出海垂钓中达成气鲀四海。","ko":"먼바다 낚시에서 \'풍선잡이\' 달성"},"reward":{"en":"Balloon Catcher","de":"Ballonfänger","fr":"Fou du ballon","ja":"Balloon Catcher","cn":"小淘气","ko":"풍선잡이"},"order":224},"2755":{"id":2755,"icon":29110,"name":{"en":"What Did Crabs Do to You?","de":"Krabbenschiffsbesatzung","fr":"Pince-sans-rire","ja":"蟹工船","cn":"横路不通","ko":"게잡이배"},"description":{"en":"Earn the “Crab Boat Crew” bonus during an ocean fishing voyage.","de":"Den Bonus „Krabbenschiffsbesatzung“ im Inhalt „Auf großer Fahrt“ erhalten.","fr":"Obtenir le bonus Pince-sans-rire au cours d\'une expédition de pêche en mer.","ja":"オーシャンフィッシングにて、蟹工船を達成する","cn":"在出海垂钓中达成横路不通。","ko":"먼바다 낚시에서 \'게잡이배\' 달성"},"reward":{"en":"Deadliest Catcher","de":"Gefährlichster-Job-Kandidat","fr":"Péril de la haute mer","ja":"Deadliest Catcher","cn":"横刀","ko":"게잡이배 선원"},"order":225},"2756":{"id":2756,"icon":29130,"name":{"en":"What Did Mantas Do to You?","de":"Manta! Manta!","fr":"Raies arraisonnées","ja":"エイエイオー","cn":"只有我最鳐摆","ko":"가오가오리"},"description":{"en":"Earn the “Sticking it to the Manta” bonus during an ocean fishing voyage.","de":"Den Bonus „Manta! Manta!“ im Inhalt „Auf großer Fahrt“ erhalten.","fr":"Obtenir le bonus Raies arraisonnées au cours d\'une expédition de pêche en mer.","ja":"オーシャンフィッシングにて、エイエイオーを達成する","cn":"在出海垂钓中达成只有我最鳐摆。","ko":"먼바다 낚시에서 \'가오가오리\' 달성"},"reward":{"en":"Manta Maniac","de":"Manta-Maniac","fr":"Mentor des mantas","ja":"Manta Maniac","cn":"鳐不可急","ko":"가오리광"},"order":250},"2757":{"id":2757,"icon":1115,"name":{"en":"On a Boat IV","de":"Fischer auf großer Fahrt IV","fr":"Grand pêcheur IV","ja":"世界を釣る者：ランク4","cn":"海钓爱好者4","ko":"세계를 낚는 자: 4단계"},"description":{"en":"Earn a cumulative total of 1,000,000 points while ocean fishing.","de":"1.000.000 Punkte im Inhalt „Auf großer Fahrt“ erreicht.","fr":"Cumuler 1 000 000 de points à la pêche en mer.","ja":"オーシャンフィッシングで、釣果点を累計1,000,000ポイント記録する","cn":"在出海垂钓中累计获得1,000,000渔分。","ko":"먼바다 낚시에서 총 1,000,000점 기록"},"reward":{"en":"Much-coveted Mora","de":"Anhänglicher Momora Mora","fr":"Momo Ramora","ja":"モモラ・モラ！！！","cn":"莫莫拉·莫拉！！！","ko":"모모라 모라!!!"},"order":173},"2758":{"id":2758,"icon":1115,"name":{"en":"On a Boat V","de":"Fischer auf großer Fahrt V","fr":"Grand pêcheur V","ja":"世界を釣る者：ランク5","cn":"海钓爱好者5","ko":"세계를 낚는 자: 5단계"},"description":{"en":"Earn a cumulative total of 3,000,000 points while ocean fishing.","de":"3.000.000 Punkte im Inhalt „Auf großer Fahrt“ erreicht.","fr":"Cumuler 3 000 000 de points à la pêche en mer.","ja":"オーシャンフィッシングで、釣果点を累計3,000,000ポイント記録する","cn":"在出海垂钓中累计获得3,000,000渔分。","ko":"먼바다 낚시에서 총 3,000,000점 기록"},"reward":{"en":"World-class Troller","de":"Weltklassefischer","fr":"Ratisseur des mers","ja":"World Class Troller","cn":"世界级钓手","ko":"세계적인 낚시꾼"},"order":174},"2759":{"id":2759,"icon":1118,"name":{"en":"No More Fish in the Sea IV","de":"Hochseefischer IV","fr":"Ratisseur des océans IV","ja":"オーシャンフィッシャー：ランク4","cn":"游钓大洋4","ko":"먼바다의 낚시꾼: 4단계"},"description":{"en":"Score at least 20,000 points during a single ocean fishing voyage.","de":"20.000 Punkte auf einer Fahrt im Inhalt „Auf großer Fahrt“ erreicht.","fr":"Atteindre un score de 20 000 points au cours d\'une expédition de pêche en mer.","ja":"オーシャンフィッシングで、1回の航海で20,000ポイント以上の合計釣果点を記録する","cn":"在1次出海垂钓中获得20,000以上渔分。","ko":"먼바다 낚시 항해 한 번에 20,000점 이상의 총점을 기록"},"reward":{"en":"Master of the Sea","de":"der Meister der Meere","fr":"Maître des mers","ja":"Master of the Sea","cn":"海王","ko":"바다의 주인"},"order":203}}');
;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/bite-times.json
const bite_times_namespaceObject = JSON.parse('{"0":{"all":null,"bestBait":null},"28937":{"29714":[2,8],"29715":[2,9],"29716":[2,9],"29717":[5,10],"all":[2,9],"bestBait":29714},"28938":{"29714":[3,10],"29715":[3,11],"29716":[3,11],"29717":[6,13],"all":[3,11],"bestBait":29715},"28939":{"29714":[10,18],"29715":[4,14],"29716":[9,20],"29717":[11,18],"all":[4,20],"bestBait":29715},"28940":{"29714":[9,25],"29715":[5,19],"29716":[13,24],"29717":[14,23],"all":[5,25],"bestBait":29715},"28941":{"29714":[2,9],"29715":[2,10],"29716":[2,9],"29717":[5,12],"all":[2,10],"bestBait":29714},"28942":{"29714":[15,36],"29715":[14,36],"29716":[9,32],"29717":[13,36],"all":[9,36],"bestBait":29716},"29718":{"29714":[4,15],"29715":[9,18],"29716":[11,18],"29717":[9,16],"all":[4,18],"bestBait":29714},"29719":{"29714":[14,24],"29715":[6,19],"29716":[11,26],"29717":[14,24],"all":[6,26],"bestBait":29715},"29720":{"29714":[10,28],"29715":[11,27],"29716":[16,28],"29717":[17,27],"all":[10,28],"bestBait":29715},"29721":{"29714":[14,24],"29715":[14,25],"29716":[12,27],"29717":[15,25],"all":[12,27],"bestBait":29714},"29722":{"29714":[2,7],"29715":[2,9],"29716":[2,7],"29717":[4,10],"all":[2,9],"bestBait":29715},"29723":{"29714":[6,16],"29715":[4,16],"29716":[6,17],"29717":[10,19],"all":[4,17],"bestBait":29716},"29724":{"29714":[2,9],"29715":[2,10],"29716":[7,14],"29717":[8,13],"all":[2,14],"bestBait":29715},"29725":{"29714":[12,21],"29715":[11,22],"29716":[6,16],"29717":[12,21],"29722":[4,17],"all":[4,22],"bestBait":29716},"29726":{"29714":[9,27],"29715":[10,28],"29716":[12,28],"29717":[17,27],"all":[9,28],"bestBait":29717},"29727":{"29715":[7,12],"29722":[4,13],"all":[4,13],"bestBait":29715},"29728":{"29714":[3,10],"29715":[3,11],"29716":[3,11],"29717":[6,13],"all":[3,11],"bestBait":29715},"29729":{"29714":[3,11],"29715":[3,11],"29716":[3,11],"29717":[7,13],"all":[3,11],"bestBait":29714},"29730":{"29714":[3,12],"29715":[3,14],"29716":[3,14],"29717":[8,15],"all":[3,14],"bestBait":29715},"29731":{"29714":[11,18],"29715":[9,18],"29716":[4,14],"29717":[11,18],"all":[4,18],"bestBait":29716},"29732":{"29714":[8,15],"29715":[10,16],"29716":[9,16],"29717":[10,16],"all":[8,16],"bestBait":29714},"29733":{"29714":[10,19],"29715":[10,19],"29716":[5,16],"29717":[11,19],"all":[5,19],"bestBait":29716},"29734":{"29714":[13,28],"29715":[9,27],"29716":[10,28],"29717":[17,28],"all":[9,28],"bestBait":29715},"29735":{"29714":[16,33],"29715":[15,33],"29716":[7,30],"29717":[18,33],"all":[7,33],"bestBait":29716},"29736":{"29714":[2,9],"29715":[2,7],"29716":[2,7],"29717":[5,10],"all":[2,9],"bestBait":29714},"29737":{"29714":[3,11],"29715":[3,10],"29716":[3,11],"29717":[6,13],"all":[3,11],"bestBait":29716},"29738":{"29714":[4,25],"29715":[5,22],"29716":[5,22],"29717":[13,25],"29718":[8,25],"all":[4,25],"bestBait":29716},"29739":{"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[4,7],"all":[2,4],"bestBait":29714},"29740":{"29714":[6,16],"29715":[11,22],"29716":[9,21],"29717":[12,21],"all":[6,22],"bestBait":29714},"29741":{"29714":[11,22],"29715":[6,16],"29716":[12,21],"29717":[12,21],"all":[6,22],"bestBait":29715},"29742":{"29714":[11,26],"29715":[11,25],"29716":[11,26],"29717":[16,26],"all":[11,26],"bestBait":29715},"29743":{"29714":[10,14],"29718":[7,16],"all":[7,16],"bestBait":29714},"29744":{"29715":[9,28],"all":[9,28],"bestBait":29715},"29745":{"29716":[9,27],"all":[9,27],"bestBait":29716},"29746":{"29715":[9,19],"all":[9,19],"bestBait":29715},"29747":{"29714":[10,28],"all":[10,28],"bestBait":29714},"29748":{"2619":[3,6],"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[3,6],"all":[2,6],"bestBait":29715},"29749":{"2603":[2,2],"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[3,6],"all":[2,2],"bestBait":2603},"29750":{"2603":[4,7],"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[4,7],"all":[2,7],"bestBait":29716},"29751":{"29716":[3,6],"29717":[6,7],"all":[3,6],"bestBait":29716},"29752":{"2603":[2,4],"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[4,7],"all":[2,4],"bestBait":2603},"29753":{"29714":[4,10],"29717":[9,12],"all":[4,10],"bestBait":29714},"29754":{"2603":[3,7],"29714":[2,7],"29715":[2,7],"29716":[2,8],"29717":[6,10],"all":[2,8],"bestBait":29716},"29755":{"29715":[3,6],"29717":[7,8],"all":[3,6],"bestBait":29715},"29756":{"29714":[9,16],"29717":[13,18],"all":[9,16],"bestBait":29714},"29757":{"29714":[4,7],"29717":[6,9],"all":[4,7],"bestBait":29714},"29758":{"29714":[2,2],"29761":[2,2],"all":[2,2],"bestBait":29714},"29759":{"2613":[2,2],"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[3,5],"29761":[3,6],"all":[2,6],"bestBait":29716},"29760":{"2613":[2,5],"29714":[2,5],"29715":[2,5],"29716":[2,5],"29717":[5,8],"all":[2,5],"bestBait":29715},"29761":{"2613":[2,4],"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[4,7],"all":[2,4],"bestBait":29714},"29762":{"29715":[4,10],"29717":[8,11],"all":[4,10],"bestBait":29715},"29763":{"29761":[2,5],"all":[2,5],"bestBait":null},"29764":{"29714":[4,10],"29717":[8,12],"all":[4,10],"bestBait":29714},"29765":{"29761":[2,4],"all":[2,4],"bestBait":null},"29766":{"2603":[3,6],"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[3,5],"all":[2,6],"bestBait":29715},"29767":{"29714":[6,7],"29716":[3,6],"29717":[6,7],"all":[3,7],"bestBait":29716},"29768":{"2591":[4,7],"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[4,7],"all":[2,7],"bestBait":29714},"29769":{"2591":[2,9],"29714":[2,9],"29715":[2,9],"29716":[2,10],"29717":[6,11],"all":[2,10],"bestBait":2591},"29770":{"29716":[5,8],"29717":[8,10],"all":[5,8],"bestBait":29716},"29771":{"2619":[5,8],"29714":[2,5],"29715":[2,5],"29716":[2,5],"29717":[5,8],"all":[2,8],"bestBait":29714},"29772":{"2591":[2,5],"29714":[2,5],"29715":[2,5],"29716":[2,5],"29717":[5,8],"all":[2,5],"bestBait":2591},"29773":{"29715":[4,7],"29717":[9,9],"all":[4,7],"bestBait":29715},"29774":{"29714":[3,5],"29717":[7,8],"all":[3,5],"bestBait":29714},"29775":{"2591":[2,2],"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[3,5],"all":[2,2],"bestBait":2591},"29776":{"2619":[2,2],"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[3,5],"all":[2,2],"bestBait":29716},"29777":{"29714":[3,6],"29717":[7,8],"all":[3,6],"bestBait":29714},"29778":{"2619":[2,4],"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[4,7],"all":[2,4],"bestBait":29714},"29779":{"2613":[2,4],"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[4,7],"all":[2,4],"bestBait":29715},"29780":{"2591":[5,8],"29714":[2,5],"29715":[2,5],"29716":[2,5],"29717":[5,8],"all":[2,8],"bestBait":29715},"29781":{"2619":[2,7],"29714":[2,8],"29715":[2,9],"29716":[2,8],"29717":[6,10],"all":[2,9],"bestBait":29716},"29782":{"29716":[4,11],"29717":[8,12],"all":[4,11],"bestBait":29716},"29783":{"29715":[6,9],"29717":[9,10],"all":[6,9],"bestBait":29715},"29784":{"29714":[20,36],"29715":[12,34],"29716":[14,36],"29717":[21,36],"all":[12,36],"bestBait":29716},"29785":{"29714":[18,33],"29715":[14,36],"29716":[20,36],"29717":[22,36],"all":[14,36],"bestBait":29715},"29786":{"29714":[14,36],"29715":[18,34],"29716":[20,35],"29717":[24,38],"all":[14,36],"bestBait":29714},"29787":{"29714":[20,35],"29715":[20,35],"29716":[14,36],"29717":[22,36],"all":[14,36],"bestBait":29716},"29788":{"2603":[8,12],"all":[8,12],"bestBait":2603},"29789":{"2613":[8,11],"all":[8,11],"bestBait":2613},"29790":{"2591":[9,12],"all":[9,12],"bestBait":2591},"29791":{"2619":[8,12],"all":[8,12],"bestBait":2619},"32055":{"29714":[4,12],"29715":[3,12],"29716":[3,12],"29717":[7,14],"all":[3,12],"bestBait":29715},"32056":{"29714":[4,28],"29715":[5,22],"29716":[6,22],"29717":[13,25],"all":[4,28],"bestBait":29714},"32057":{"29714":[3,11],"29715":[3,10],"29716":[3,10],"29717":[6,13],"all":[3,11],"bestBait":29714},"32058":{"29714":[9,28],"29715":[10,27],"29716":[6,22],"29717":[15,27],"all":[6,28],"bestBait":29716},"32059":{"29714":[11,21],"29715":[6,17],"29716":[12,21],"29717":[12,21],"all":[6,21],"bestBait":29715},"32060":{"29714":[6,14],"29715":[6,12],"29716":[2,7],"29717":[7,12],"all":[2,14],"bestBait":29716},"32061":{"29714":[11,31],"29715":[11,29],"29716":[14,28],"29717":[17,29],"all":[11,31],"bestBait":29716},"32062":{"29714":[10,25],"29715":[11,24],"29716":[14,25],"29717":[15,24],"all":[10,25],"bestBait":29715},"32063":{"29714":[9,18],"29715":[9,18],"29716":[11,18],"29717":[12,19],"all":[9,18],"bestBait":29714},"32064":{"29715":[9,25],"all":[9,25],"bestBait":29715},"32065":{"27590":[3,6],"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[3,5],"all":[2,6],"bestBait":29715},"32066":{"27590":[3,6],"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[3,5],"all":[2,6],"bestBait":29714},"32067":{"27590":[2,4],"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[4,7],"all":[2,4],"bestBait":27590},"32068":{"27590":[2,5],"29714":[2,5],"29715":[2,5],"29716":[2,5],"29717":[5,8],"all":[2,5],"bestBait":27590},"32069":{"27590":[6,7],"29715":[5,8],"29717":[8,10],"all":[5,8],"bestBait":29717},"32070":{"27590":[3,6],"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[3,5],"all":[2,6],"bestBait":29716},"32071":{"27590":[7,9],"29715":[4,10],"29717":[8,11],"all":[4,10],"bestBait":29715},"32072":{"29716":[4,7],"29717":[7,8],"all":[4,7],"bestBait":29717},"32073":{"29716":[6,9],"29717":[8,9],"all":[6,9],"bestBait":29716},"32074":{"27590":[8,12],"all":[8,12],"bestBait":27590},"32075":{"29714":[2,7],"29715":[2,8],"29716":[2,7],"29717":[6,10],"all":[2,8],"bestBait":29714},"32076":{"29714":[4,13],"29715":[4,13],"29716":[4,13],"29717":[9,16],"all":[4,13],"bestBait":29714},"32077":{"29714":[3,10],"29715":[3,11],"29716":[4,11],"29717":[7,13],"all":[3,11],"bestBait":29715},"32078":{"29714":[8,16],"29715":[8,16],"29716":[5,11],"29717":[11,16],"all":[5,16],"bestBait":29716},"32079":{"29714":[7,26],"29715":[12,31],"29716":[15,31],"29717":[18,31],"all":[7,31],"bestBait":29714},"32080":{"29714":[7,10],"29715":[2,5],"29716":[7,10],"29717":[7,10],"all":[2,10],"bestBait":29715},"32081":{"29714":[12,20],"29715":[12,20],"29716":[12,19],"29717":[14,20],"all":[12,20],"bestBait":29716},"32082":{"29714":[11,21],"29715":[12,22],"29716":[14,22],"29717":[14,21],"all":[11,22],"bestBait":29717},"32083":{"29714":[13,21],"29715":[11,21],"29716":[13,20],"29717":[15,20],"all":[11,21],"bestBait":29715},"32084":{"29715":[6,14],"all":[6,14],"bestBait":29715},"32085":{"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[4,5],"all":[2,2],"bestBait":29714},"32086":{"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[4,7],"all":[2,4],"bestBait":29717},"32087":{"29715":[2,7],"29717":[6,9],"all":[2,7],"bestBait":29715},"32088":{"2587":[2,4],"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[5,7],"all":[2,4],"bestBait":2587},"32089":{"2587":[2,2],"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[6,7],"all":[2,2],"bestBait":2587},"32090":{"29714":[4,7],"29717":[8,9],"all":[4,7],"bestBait":29714},"32091":{"2587":[2,4],"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[5,7],"all":[2,4],"bestBait":29716},"32092":{"2587":[2,4],"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[4,7],"all":[2,4],"bestBait":2587},"32093":{"29716":[6,9],"29717":[9,10],"all":[6,9],"bestBait":29716},"32094":{"2587":[8,11],"all":[8,11],"bestBait":2587},"32095":{"29714":[2,5],"29715":[2,5],"29716":[2,5],"29717":[5,8],"all":[2,5],"bestBait":29714},"32096":{"29714":[3,10],"29715":[3,10],"29716":[3,10],"29717":[7,13],"all":[3,10],"bestBait":29714},"32097":{"29714":[3,10],"29715":[3,10],"29716":[3,10],"29717":[8,13],"all":[3,10],"bestBait":29715},"32098":{"29714":[4,22],"29715":[11,27],"29716":[9,27],"29717":[16,26],"all":[4,27],"bestBait":29714},"32099":{"29714":[12,27],"29715":[10,27],"29716":[4,22],"29717":[16,27],"all":[4,27],"bestBait":29716},"32100":{"29714":[9,24],"29715":[14,24],"29716":[4,19],"29717":[14,23],"all":[4,24],"bestBait":29716},"32101":{"29714":[10,16],"29715":[9,15],"29716":[10,16],"29717":[11,15],"all":[9,16],"bestBait":29715},"32102":{"29714":[11,23],"29715":[13,22],"29716":[12,23],"29717":[15,23],"all":[11,23],"bestBait":29715},"32103":{"29714":[14,24],"29715":[14,24],"29716":[11,24],"29717":[16,23],"all":[11,24],"bestBait":29716},"32104":{"29714":[8,17],"all":[8,17],"bestBait":29714},"32105":{"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[4,5],"all":[2,2],"bestBait":29715},"32106":{"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[4,7],"32107":[2,4],"all":[2,4],"bestBait":29716},"32107":{"29714":[2,4],"29715":[2,4],"29716":[2,4],"29717":[4,7],"all":[2,4],"bestBait":29714},"32108":{"29714":[2,2],"29715":[2,2],"29716":[2,2],"29717":[3,5],"32107":[2,2],"all":[2,2],"bestBait":29715},"32109":{"29715":[3,6],"29717":[7,8],"all":[3,6],"bestBait":29715},"32110":{"32107":[2,5],"all":[2,5],"bestBait":29714},"32111":{"29716":[2,7],"29717":[7,9],"32107":[6,10],"all":[2,10],"bestBait":29716},"32112":{"29714":[2,9],"29715":[2,8],"29716":[2,7],"29717":[6,10],"all":[2,9],"bestBait":29714},"32113":{"29715":[6,9],"29717":[9,10],"all":[6,9],"bestBait":29715},"32114":{"32107":[8,12],"all":[8,12],"bestBait":null}}');
;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/spreadsheet-data.json
const spreadsheet_data_namespaceObject = JSON.parse('{"Outer Galadion Bay":[{"name":"Galadion Goby","moochable":false,"bait":"Ragworm","points":10,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Galadion Chovy","moochable":false,"bait":"Krill","points":11,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Leopard Eel","moochable":false,"bait":"Plump Worm","points":14,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["Rain","Showers"]},"stars":1},{"name":"Jasperhead","moochable":false,"bait":"Krill","points":40,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["Clouds","Fog"]},"stars":2},{"name":"Tarnished Shark","moochable":false,"bait":"Plump Worm","points":34,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["Showers"]},"stars":2},{"name":"Rosy Bream","moochable":false,"bait":"Krill","points":34,"doubleHook":[3,4],"tripleHook":[5,7],"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":2},{"name":"Cyan Octopus","moochable":false,"bait":"Krill","points":59,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Heavenswimmer","moochable":false,"bait":"Ragworm","points":50,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Spectral Megalodon","moochable":false,"bait":"Plump Worm","points":100,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["ClearSkies"]},"stars":4},{"name":"Drunkfish","moochable":false,"bait":"Krill","points":253,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4,"intuition":[{"name":"Galadion Chovy","moochable":false,"count":3}]}],"Galadion Spectral Current":[{"name":"Merman\'s Mane","moochable":false,"bait":"Krill","points":94,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Heavenskey","moochable":false,"bait":"Ragworm","points":67,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Ghost Shark","moochable":false,"bait":"Plump Worm","points":78,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Fishmonger","moochable":false,"bait":"Plump Worm","points":78,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Navigator\'s Print","moochable":false,"bait":"Krill","points":71,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Casket Oyster","moochable":false,"bait":"Ragworm","points":222,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"D","weathers":{"type":"ALL"},"stars":4},{"name":"Quicksilver Blade","moochable":false,"bait":"Plump Worm","points":213,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"S","weathers":{"type":"ALL"},"stars":4},{"name":"Funnel Shark","moochable":false,"bait":"Plump Worm","points":213,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":3,"hookset":"Powerful","time":"S","weathers":{"type":"ALL"},"stars":4},{"name":"Nimble Dancer","moochable":false,"bait":"Ragworm","points":444,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"D","weathers":{"type":"ALL"},"stars":4},{"name":"Sothis","moochable":false,"bait":"Glowworm","points":500,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"N","weathers":{"type":"ALL"},"stars":5,"intuition":[{"name":"Heavenskey","moochable":false,"count":2},{"name":"Navigator\'s Print","moochable":false,"count":1}]}],"The Southern Strait of Merlthor":[{"name":"Ghoul Barracuda","moochable":true,"bait":"Krill","points":10,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["Wind","Gales"]},"stars":1},{"name":"La Noscean Jelly","moochable":false,"bait":"Ragworm","points":10,"doubleHook":[3,4],"tripleHook":[5,7],"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Sunfly","moochable":false,"bait":"Ragworm","points":10,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Marine Bomb","moochable":false,"bait":"Krill","points":27,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":2},{"name":"Shaggy Seadragon","moochable":false,"bait":"Ragworm","points":35,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"NOT OK","list":["Clouds","Fog"]},"stars":2},{"name":"Momora Mora","moochable":false,"bait":"Plump Worm","points":22,"doubleHook":2,"tripleHook":3,"mooch":"Ghoul Barracuda","tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":2},{"name":"Merlthor Butterfly","moochable":false,"bait":"Ragworm","points":51,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Gladius","moochable":false,"bait":null,"points":49,"doubleHook":2,"tripleHook":3,"mooch":"Ghoul Barracuda","tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Spectral Discus","moochable":false,"bait":"Krill","points":100,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Precision","time":"DSN","weathers":{"type":"NOT OK","list":["ClearSkies"]},"stars":4},{"name":"Little Leviathan","moochable":false,"bait":"Plump Worm","points":204,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4,"intuition":[{"name":"Gladius","moochable":false,"count":1}]}],"Southern Merlthor Spectral Current":[{"name":"Sea Nettle","moochable":false,"bait":"Ragworm","points":156,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":1,"hookset":"Precision","time":"S","weathers":{"type":"ALL"},"stars":4},{"name":"Great Grandmarlin","moochable":false,"bait":null,"points":127,"doubleHook":2,"tripleHook":3,"mooch":"Hi-aetherlouse","tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Shipwreck\'s Sail","moochable":false,"bait":"Plump Worm","points":59,"doubleHook":2,"tripleHook":3,"mooch":"Hi-aetherlouse","tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Charlatan Survivor","moochable":false,"bait":"Krill","points":69,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Hi-aetherlouse","moochable":true,"bait":"Ragworm","points":65,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Azeyma\'s Sleeve","moochable":false,"bait":"Krill","points":69,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Aetheric Seadragon","moochable":false,"bait":null,"points":245,"doubleHook":2,"tripleHook":3,"mooch":"Hi-aetherlouse","tug":2,"hookset":"Powerful","time":"N","weathers":{"type":"ALL"},"stars":4},{"name":"Mythril Sovereign","moochable":false,"bait":"Krill","points":196,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"D","weathers":{"type":"ALL"},"stars":4},{"name":"Roguesaurus","moochable":false,"bait":null,"points":345,"doubleHook":2,"tripleHook":3,"mooch":"Hi-aetherlouse","tug":3,"hookset":"Powerful","time":"S","weathers":{"type":"ALL"},"stars":4},{"name":"Coral Manta","moochable":false,"bait":"Shrimp Cage Feeder","points":500,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"N","weathers":{"type":"ALL"},"stars":5,"intuition":[{"name":"Great Grandmarlin","moochable":false,"count":2}]}],"The Northern Strait of Merlthor":[{"name":"Floefish","moochable":false,"bait":"Ragworm","points":13,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"NOT OK","list":["Snow","Blizzards"]},"stars":1},{"name":"Megasquid","moochable":false,"bait":"Plump Worm","points":11,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Oschon\'s Stone","moochable":false,"bait":"Plump Worm","points":11,"doubleHook":2,"tripleHook":3,"mooch":"Tossed Dagger","tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Tossed Dagger","moochable":true,"bait":"Ragworm","points":27,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":2},{"name":"Tripod Fish","moochable":false,"bait":"Krill","points":43,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"NOT OK","list":["Clouds","Fog"]},"stars":2},{"name":"Net Crawler","moochable":false,"bait":"Krill","points":36,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":2},{"name":"Merlthor Lobster","moochable":false,"bait":"Krill","points":45,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Elder Dinichthys","moochable":false,"bait":null,"points":52,"doubleHook":2,"tripleHook":3,"mooch":"Tossed Dagger","tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Spectral Sea Bo","moochable":false,"bait":"Ragworm","points":100,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Precision","time":"DSN","weathers":{"type":"NOT OK","list":["ClearSkies"]},"stars":4},{"name":"Shooting Star","moochable":false,"bait":"Ragworm","points":226,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4,"intuition":[{"name":"Elder Dinichthys","moochable":false,"count":1}]}],"Northern Merlthor Spectral Current":[{"name":"Hammerclaw","moochable":false,"bait":"Krill","points":69,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Coccosteus","moochable":false,"bait":"Plump Worm","points":79,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Bartholomew the Chopper","moochable":false,"bait":"Ragworm","points":221,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":1,"hookset":"Precision","time":"N","weathers":{"type":"ALL"},"stars":4},{"name":"Prowler","moochable":false,"bait":"Ragworm","points":79,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Mopbeard","moochable":false,"bait":"Krill","points":198,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":2,"hookset":"Powerful","time":"N","weathers":{"type":"ALL"},"stars":4},{"name":"Wild Urchin","moochable":false,"bait":"Ragworm","points":79,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Gugrusaurus","moochable":false,"bait":"Plump Worm","points":79,"doubleHook":[3,4],"tripleHook":[5,7],"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Coral Seadragon","moochable":false,"bait":"Ragworm","points":189,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":1,"hookset":"Precision","time":"S","weathers":{"type":"ALL"},"stars":4},{"name":"The Fallen One","moochable":false,"bait":"Krill","points":374,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"S","weathers":{"type":"ALL"},"stars":4},{"name":"Elasmosaurus","moochable":false,"bait":"Heavy Steel Jig","points":500,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"D","weathers":{"type":"ALL"},"stars":5,"intuition":[{"name":"Gugrusaurus","moochable":false,"count":3}]}],"Open Rhotano Sea":[{"name":"Rhotano Wahoo","moochable":false,"bait":"Krill","points":13,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["HeatWaves"]},"stars":1},{"name":"Rhotano Sardine","moochable":false,"bait":"Ragworm","points":10,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Deep Plaice","moochable":false,"bait":"Krill","points":15,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["DustStorms","HeatWaves"]},"stars":1},{"name":"Crimson Monkfish","moochable":false,"bait":"Plump Worm","points":32,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":2},{"name":"Chrome Hammerhead","moochable":false,"bait":"Plump Worm","points":32,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":2},{"name":"Ogre Eel","moochable":false,"bait":"Plump Worm","points":38,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["Clouds","Fog"]},"stars":2},{"name":"Dark Nautilus","moochable":false,"bait":"Krill","points":46,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Lampfish","moochable":false,"bait":"Ragworm","points":47,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Spectral Bass","moochable":false,"bait":"Plump Worm","points":100,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["ClearSkies"]},"stars":4},{"name":"Sabaton","moochable":false,"bait":"Krill","points":204,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4,"intuition":[{"name":"Crimson Monkfish","moochable":false,"count":2}]}],"Rhotano Spectral Current":[{"name":"Aronnax","moochable":false,"bait":"Krill","points":95,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Sweeper","moochable":false,"bait":"Plump Worm","points":216,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"D","weathers":{"type":"ALL"},"stars":4},{"name":"Silencer","moochable":false,"bait":"Ragworm","points":89,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Deep-sea Eel","moochable":false,"bait":"Plump Worm","points":81,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Executioner","moochable":false,"bait":"Plump Worm","points":216,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":3,"hookset":"Powerful","time":"D","weathers":{"type":"ALL"},"stars":4},{"name":"Floating Saucer","moochable":false,"bait":"Krill","points":222,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":1,"hookset":"Precision","time":"N","weathers":{"type":"ALL"},"stars":4},{"name":"True Barramundi","moochable":false,"bait":"Krill","points":95,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Prodigal Son","moochable":false,"bait":"Krill","points":95,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Slipsnail","moochable":false,"bait":"Ragworm","points":246,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"N","weathers":{"type":"ALL"},"stars":4},{"name":"Stonescale","moochable":false,"bait":"Rat Tail","points":500,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"S","weathers":{"type":"ALL"},"stars":5,"intuition":[{"name":"Deep-sea Eel","moochable":false,"count":1},{"name":"Silencer","moochable":false,"count":1}]}],"Cieldalaes Margin":[{"name":"Tortoiseshell Crab","moochable":false,"bait":"Krill","points":10,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Lady\'s Cameo","moochable":false,"bait":"Ragworm","points":15,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"NOT OK","list":["Thunder","Thunderstorms"]},"stars":1},{"name":"Metallic Boxfish","moochable":false,"bait":"Ragworm","points":9,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Goobbue Ray","moochable":false,"bait":"Plump Worm","points":33,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":2},{"name":"Watermoura","moochable":false,"bait":"Krill","points":41,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"NOT OK","list":["Thunderstorms"]},"stars":2},{"name":"King Cobrafish","moochable":false,"bait":"Plump Worm","points":39,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["Clouds","Fog"]},"stars":2},{"name":"Mamahi-mahi","moochable":false,"bait":"Plump Worm","points":58,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Lavandin Remora","moochable":false,"bait":"Krill","points":52,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Spectral Butterfly","moochable":false,"bait":"Ragworm","points":100,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Precision","time":"DSN","weathers":{"type":"NOT OK","list":["ClearSkies"]},"stars":4},{"name":"Cieldalaes Geode","moochable":false,"bait":"Krill","points":246,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4,"intuition":[{"name":"Metallic Boxfish","moochable":false,"count":3}]}],"Cieldalaes Spectral Current":[{"name":"Titanshell Crab","moochable":false,"bait":"Krill","points":84,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Mythril Boxfish","moochable":false,"bait":"Ragworm","points":64,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Mistbeard\'s Cup","moochable":false,"bait":"Krill","points":84,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Anomalocaris Saron","moochable":false,"bait":"Krill","points":84,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Flaming Eel","moochable":false,"bait":"Krill","points":198,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"S","weathers":{"type":"ALL"},"stars":4},{"name":"Jetborne Manta","moochable":false,"bait":"Plump Worm","points":75,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Devil\'s Sting","moochable":false,"bait":"Krill","points":201,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"D","weathers":{"type":"ALL"},"stars":4},{"name":"Callichthyid","moochable":false,"bait":"Plump Worm","points":178,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":3,"hookset":"Powerful","time":"D","weathers":{"type":"ALL"},"stars":4},{"name":"Meandering Mora","moochable":false,"bait":"Plump Worm","points":283,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"S","weathers":{"type":"ALL"},"stars":4},{"name":"Hafgufa","moochable":false,"bait":"Squid Strip","points":500,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"N","weathers":{"type":"ALL"},"stars":5,"intuition":[{"name":"Jetborne Manta","moochable":false,"count":2},{"name":"Mistbeard\'s Cup","moochable":false,"count":1}]}],"Open Bloodbrine Sea":[{"name":"Thaliak Crab","moochable":false,"bait":"Ragworm","points":9,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Star of the Destroyer","moochable":false,"bait":"Ragworm","points":14,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"NOT OK","list":["Rain","Showers"]},"stars":1},{"name":"True Scad","moochable":false,"bait":"Krill","points":8,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Blooded Wrasse","moochable":false,"bait":"Plump Worm","points":35,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["Showers"]},"stars":2},{"name":"Bloodpolish Crab","moochable":false,"bait":"Ragworm","points":28,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":2},{"name":"Blue Stitcher","moochable":false,"bait":"Krill","points":30,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"NOT OK","list":["Clouds","Fog"]},"stars":2},{"name":"Bloodfresh Tuna","moochable":false,"bait":"Plump Worm","points":43,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Sunken Mask","moochable":false,"bait":"Ragworm","points":49,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Spectral Eel","moochable":false,"bait":"Krill","points":100,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["ClearSkies"]},"stars":4},{"name":"Bareface","moochable":false,"bait":"Krill","points":326,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4,"intuition":[{"name":"Sunken Mask","moochable":false,"count":1}]}],"Bloodbrine Spectral Current":[{"name":"Oracular Crab","moochable":false,"bait":"Ragworm","points":102,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":1,"hookset":"Precision","time":"D","weathers":{"type":"ALL"},"stars":4},{"name":"Dravanian Bream","moochable":false,"bait":"Krill","points":77,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Skaldminni","moochable":false,"bait":"Krill","points":102,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":2,"hookset":"Powerful","time":"N","weathers":{"type":"ALL"},"stars":4},{"name":"Serrated Clam","moochable":false,"bait":"Ragworm","points":74,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Beatific Vision","moochable":false,"bait":"Krill","points":77,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Exterminator","moochable":false,"bait":"Ragworm","points":255,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":1,"hookset":"Precision","time":"D","weathers":{"type":"ALL"},"stars":4},{"name":"Gory Tuna","moochable":false,"bait":"Plump Worm","points":92,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Ticinepomis","moochable":false,"bait":"Plump Worm","points":92,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Quartz Hammerhead","moochable":false,"bait":"Plump Worm","points":460,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Seafaring Toad","moochable":false,"bait":"Pill Bug","points":500,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Precision","time":"D","weathers":{"type":"ALL"},"stars":5,"intuition":[{"name":"Beatific Vision","moochable":false,"count":3}]}],"Outer Rothlyt Sound":[{"name":"Crow Puffer","moochable":false,"bait":"Ragworm","points":10,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Rothlyt Kelp","moochable":false,"bait":"Ragworm","points":10,"doubleHook":[3,4],"tripleHook":[5,7],"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":1},{"name":"Living Lantern","moochable":false,"bait":"Krill","points":13,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["Thunder","Thunderstorms"]},"stars":1},{"name":"Honeycomb Fish","moochable":false,"bait":"Ragworm","points":29,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":2},{"name":"Godsbed","moochable":false,"bait":"Plump Worm","points":29,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["Clouds","Fog"]},"stars":2},{"name":"Lansquenet","moochable":false,"bait":"Plump Worm","points":36,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["Thunderstorms"]},"stars":2},{"name":"Thavnairian Shark","moochable":false,"bait":"Krill","points":44,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Nephrite Eel","moochable":false,"bait":"Krill","points":44,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":3},{"name":"Spectresaur","moochable":false,"bait":"Plump Worm","points":100,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Powerful","time":"DSN","weathers":{"type":"NOT OK","list":["ClearSkies"]},"stars":4},{"name":"Ginkgo Fin","moochable":false,"bait":"Ragworm","points":238,"doubleHook":1,"tripleHook":1,"mooch":null,"tug":3,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4,"intuition":[{"name":"Rothlyt Kelp","moochable":false,"count":3}]}],"Rothlyt Spectral Current":[{"name":"Garum Jug","moochable":false,"bait":"Krill","points":107,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":1,"hookset":"Precision","time":"DN","weathers":{"type":"ALL"},"stars":4},{"name":"Smooth Jaguar","moochable":false,"bait":"Plump Worm","points":70,"doubleHook":2,"tripleHook":3,"mooch":"Rothlyt Mussel","tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Rothlyt Mussel","moochable":true,"bait":"Ragworm","points":72,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Levi Elver","moochable":false,"bait":"Krill","points":75,"doubleHook":2,"tripleHook":3,"mooch":"Rothlyt Mussel","tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Pearl Bombfish","moochable":false,"bait":"Krill","points":237,"doubleHook":4,"tripleHook":7,"mooch":null,"tug":2,"hookset":"Powerful","time":"DN","weathers":{"type":"ALL"},"stars":4},{"name":"Trollfish","moochable":false,"bait":null,"points":202,"doubleHook":2,"tripleHook":3,"mooch":"Rothlyt Mussel","tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Panoptes","moochable":false,"bait":"Plump Worm","points":125,"doubleHook":4,"tripleHook":7,"mooch":"Rothlyt Mussel","tug":2,"hookset":"Powerful","time":"D","weathers":{"type":"ALL"},"stars":4},{"name":"Crepe Sole","moochable":false,"bait":"Ragworm","points":72,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":1,"hookset":"Precision","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Knifejaw","moochable":false,"bait":"Krill","points":465,"doubleHook":2,"tripleHook":3,"mooch":null,"tug":2,"hookset":"Powerful","time":"DSN","weathers":{"type":"ALL"},"stars":4},{"name":"Placodus","moochable":false,"bait":null,"points":500,"doubleHook":1,"tripleHook":1,"mooch":"Rothlyt Mussel","tug":3,"hookset":"Powerful","time":"S","weathers":{"type":"ALL"},"stars":5,"intuition":[{"name":"Trollfish","moochable":false,"count":1}]}]}');
;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/lodestone-data.json
const lodestone_data_namespaceObject = JSON.parse('{"0":null,"28937":{"item":"69e814a2ddd","icon_sm":"15b82f53d933a2d0e764724c4a88cd9062546da4","icon_md":"aeff64b812a10f3afaa36a10c4fd3fc0dd5882c2","icon_lg":"204bf1f6de947806d263acd900e5f860817b05fe"},"28938":{"item":"617d296a735","icon_sm":"689ff1edf920fcd16255c7c3e80632c6d3e3f10b","icon_md":"d0cae42eb94aeedd0ef7cc45cef50e864c6b4c9e","icon_lg":"efa4b410e7d8aceca4da493841152df84b802523"},"28939":{"item":"f84945f9f19","icon_sm":"de5b86512ce36dd6f74726ebcadf66db9e4ee638","icon_md":"16085232a77fbb30f4cf50275948c540c693c2cf","icon_lg":"e0627f08bfbb60a52a8bbbf0e57327e3e57bb8d9"},"28940":{"item":"f6bdd0e41c9","icon_sm":"038e24b60c6524807cecd5f489dae2f4c7652402","icon_md":"66fa85c054e2b1b2f9104e9c681a274616326ffd","icon_lg":"bb82143f30356665a0d9b7009a3313d8367685d5"},"28941":{"item":"1e249269a69","icon_sm":"20958648fdc2f2971fc52e3b6d749e3c1be6a0ad","icon_md":"f05536df8ad984ac3e91a84b9f1876d31b314883","icon_lg":"ec67bf90d34a6434a380ba330fd90fbdc2c7a7a8"},"28942":{"item":"f657657820d","icon_sm":"1a1af1901cd990981be90fed0f6d6db70d022f04","icon_md":"3b0d45c523ff75782312c896774c5d2d17c4f217","icon_lg":"1eb306d9cfc58c52a81037abe501807deb823803"},"29718":{"item":"5c85e5a77c2","icon_sm":"b357e9a2b848d4e20a6933b86b2bc16d7be6dc19","icon_md":"fc99c80089a3d499d84f706415ba49a89863f1d2","icon_lg":"6aef56e200553457778c107f83fba4234f931778"},"29719":{"item":"86591ebb3a9","icon_sm":"ed4a6664756a9b44b6e0f723ecc409fc76a84001","icon_md":"3244f60d04b78fcb7809f551c7762e4d5cfb7562","icon_lg":"f3e276939bd4ef6046bfc4b29faa592e168dc806"},"29720":{"item":"583213e8ae7","icon_sm":"846c802d6378e25777d60769d085db2a765971eb","icon_md":"bb1c61ed46d9cdc1cde7c03142123906c654bbdc","icon_lg":"016f9319a7e8717ed14dddeb45486ceaeeeed75f"},"29721":{"item":"0b957d4be5e","icon_sm":"a6f63aa70d0c169c7918730b0a87d9fc7d7a8f43","icon_md":"f600c285d05ec8eb4342b99663ee420741f6e124","icon_lg":"4632028d57fb29b60a9ccb8a9bc302fce9ee4659"},"29722":{"item":"5359dd914a0","icon_sm":"454d9ea9457ed3bf0a155698f474128584475bc9","icon_md":"e82b01c0f3f01929777a6197898be01227cbd535","icon_lg":"c658e831746f60dab85e83677b59b3083772daff"},"29723":{"item":"72d95e8cacb","icon_sm":"5fd61f402595bd47129660e265281eeef0def9d3","icon_md":"4313c2c7e487053f7a1503e5e175654dc8a38849","icon_lg":"03feca6b103077fca058fd39023e0dfbbb68137e"},"29724":{"item":"f0cea2dc00c","icon_sm":"4d27e8687a6c9e8e0e7cd5861f425e1e6b6acf0b","icon_md":"0e1304929b8515496c3f638eaa13eb0cadd9b713","icon_lg":"1132c69334641a26bd5ab85c39380345abe5b400"},"29725":{"item":"a179a332eee","icon_sm":"34095c45b7c44ceaf0a91c37a57832ed049a46a9","icon_md":"75e34bc64fc85419bb09ff12cda2d6708138ed7e","icon_lg":"8930388413667e59a9f3b50db03c41ffd498a711"},"29726":{"item":"c3689fddf2d","icon_sm":"3738bb79bb10ac781dc52ad3f298bb224a9512ea","icon_md":"94a1dc1c592c377973f2a59b4d85e03bc9747f4d","icon_lg":"131125c62d94baa826196af1d344a324ab8fa28a"},"29727":{"item":"4f4ed926cfb","icon_sm":"4a7fc1cf3f815efc8ae89189db1125bcaab95860","icon_md":"799acb20c4cad15035d644f84596aa083d4b4ad9","icon_lg":"e0429569ca033a7f6ceacef35143b36ceb038021"},"29728":{"item":"45401c6cb22","icon_sm":"f9fa3b33776de90985770dc2a93d05777f32be95","icon_md":"07baf66afdf543f7f6da72318b36d9fb360be8c6","icon_lg":"49441a66d8febd8d592179dcde5117f30e7c9e37"},"29729":{"item":"ca16b04e8e3","icon_sm":"79bd5bc84b03cad0b92199303dded45bcf2d369b","icon_md":"a450af0752915d68c84fd5724317dccd5f9ac508","icon_lg":"2ff037589bcbe73c102dbf123c7127d63abb518a"},"29730":{"item":"62d441454ad","icon_sm":"1b3663ae019956c08e601789379193282e3ca4a0","icon_md":"a689668a48da79f94e2504dc968f25f9b091c826","icon_lg":"136779ef821083f4e2c20658a4e9ee3fcffaf0db"},"29731":{"item":"6c53bab12c4","icon_sm":"8f46b013dab4d9c93cd332e5549cd9c088351c35","icon_md":"e0bc9c1e3afc387689b2b0cf9d75b7602499818d","icon_lg":"f16a1f1c61b7733e964235be048c6470d317cbd9"},"29732":{"item":"b8d65f1b85b","icon_sm":"15798186b1db4953c624e8f3514b91a751311c59","icon_md":"4ac9cc971def672b6a94dffaa3743d0b4d1b21ed","icon_lg":"3485b4acdbac72989b3011559492af1d71151a13"},"29733":{"item":"d7ada7fdb72","icon_sm":"a8130e5e72b096c147c866302924c373c49a4c02","icon_md":"f960bf8574ead05c9472f4d1a8e3e91eb105f397","icon_lg":"52e7e135ae8f50cd52456a5c744e8cfc02c0828c"},"29734":{"item":"08d67f578aa","icon_sm":"699a6b9e2d33346f20bb66e6efa77e1091d4a0fe","icon_md":"54e2345ddc874cd09d43b187b931a5c95c03cb53","icon_lg":"ed91724f490fe053be438254999c9bebf4b1a266"},"29735":{"item":"b847bddc985","icon_sm":"b0f0a08516133f1d594e176a14dcd64addcf54a5","icon_md":"79b047f895f0ecdffdf72f4ca4af562f5cc3b8b1","icon_lg":"409bd8a91c56ca7defba9e8cccbddf672ed2173b"},"29736":{"item":"93834132269","icon_sm":"f5ef963d67c7820f8871e68d50312e066971ef53","icon_md":"21b7f8dd0fc150930d1fb61e5f4ef6490419e199","icon_lg":"5f40ea6a1a7db24ea191177ee5b17fc8642079fb"},"29737":{"item":"aa355fbb90b","icon_sm":"27cf614868c5cc01c0f9e9ca972155015b2a09ca","icon_md":"d6921b0cb8f216670edd8908cb28075028f8b937","icon_lg":"88a814470df946d93ae9f6d544f52eb2d2d37f35"},"29738":{"item":"738f79f1e26","icon_sm":"050d47466ca2ffc0f5db876aac07b4038d9b625f","icon_md":"504ae37f6f9e9974c39425fb922f207ca8f9a155","icon_lg":"f0dd8cea6b94dd6d8325db20992bc90a0acb5151"},"29739":{"item":"10e3fd5e287","icon_sm":"df4fbb00fc8eeb1d7cb933abee95c238d535733c","icon_md":"a90a7ad4a9da0cc8d3b65c6e6a61edfc797fdcb0","icon_lg":"353ef6e8a41883f0a5ccfbca5f8f247aa7dfd724"},"29740":{"item":"5a11e9ffdee","icon_sm":"e99e91d95b43e2a31961d49c14d0906cb54e4fdc","icon_md":"54544690af8273bddfa6ef0a6224bcef2bffbc08","icon_lg":"3c4c70a71311fd95d8fa56196a4801563c338e92"},"29741":{"item":"e18cfa11ded","icon_sm":"9d5306d5d976e3aa2645752b01851e32fb72b330","icon_md":"bcc02267b7348529ea14e1500a3c8b1373d2eefc","icon_lg":"e15c3d7b1a582b1c43dd9d86069e0e297bbc3550"},"29742":{"item":"b91b4b95782","icon_sm":"20db7a4703ed3cf2595423ee36852312552c2d71","icon_md":"1990087d34a811bc8a633fb07de4f743b586711c","icon_lg":"80683295ee06176074a10deb943294569e6175c1"},"29743":{"item":"9732da22802","icon_sm":"f6cfe74087ba4290bd60a02b87b17c7f07b7fa7f","icon_md":"1fd073d548ce433c4155032a864bd3ba6dcf89af","icon_lg":"c40758593c6b55b4f67e3b4670d443f1442f4a8d"},"29744":{"item":"c5e7d8e8c02","icon_sm":"a89d27eb0a847b47d46c67e2691debc1aa98c5da","icon_md":"e66549e915220792d310148f7bee63cffd0addf2","icon_lg":"e754c378bec9b6afe80231d95ce1f52a0661da48"},"29745":{"item":"a26e8252170","icon_sm":"3763c2f8039e827890799cae8b7592ef26245028","icon_md":"3a6193473048a6d96deabce22d959f9974ac02f1","icon_lg":"fe4df45c20d455c9e8ed33f202532b9c70f77490"},"29746":{"item":"e9789b90ffc","icon_sm":"6099e6b93cefae79dfd4f5143f60c80fbc5c4be5","icon_md":"b555361fb64549b49da89b6472c228ca0a190135","icon_lg":"906c5a443d761cdcc44f1d82a41120e953445a86"},"29747":{"item":"ae35305d278","icon_sm":"3b2416b447666864310f3803f4c874a6b361f101","icon_md":"86f31dd2a1d8310c7916c1ea317033bf055e5a2d","icon_lg":"0a2e9d2db188617fe6ed7aaf0f44f1a29635f68f"},"29748":{"item":"71f4c40c4c6","icon_sm":"47af29c4ffe104c12537f461307b3b8a525b16a9","icon_md":"f1d4139c3864ffa0136433e1ffa312f6aff77fb4","icon_lg":"c15e0244e0128860291a34577372f75e8acd36eb"},"29749":{"item":"fa8810efbe4","icon_sm":"9b074fd8dac934b2c1a735f557fa88d867a22dc0","icon_md":"21afb483a2c5cbe14e721b5dad7e4b2acbc2278a","icon_lg":"ed7423c772f1af4753120794bc96045c6e795e5a"},"29750":{"item":"7a2970cc3c4","icon_sm":"1539cc201cc6bbdb44d0917c64d09f97ffa1bfb5","icon_md":"6069d6da2bd055a7ea480666ca9214bc879dd293","icon_lg":"796163f9ed0b7033e1924da3d7e46d64cdbd3242"},"29751":{"item":"df612eec2b2","icon_sm":"57fa9f85cee5348e3d7170cbf66ef5662a4f67ae","icon_md":"94e88897ae853caf46f0685d24facc414806745b","icon_lg":"9be485dcbc63764c37c70fb80becdfb0d146e68f"},"29752":{"item":"09be6ce21b9","icon_sm":"cbe9907bdc10318a54a40c90b7586642c6208124","icon_md":"b52ae2d832cd60613df425d650ae71eed1319922","icon_lg":"572f9fa9e5decfa3c5db5246a461f0e1244b2de5"},"29753":{"item":"3d10789ca49","icon_sm":"9bc7dbb53d014e9b09c5450fc0e521f3fd37dedf","icon_md":"0f0aaf97ae84b7faa9fbfa22d78d0480a49444c9","icon_lg":"566f52e10e0a4c2598fe5bfcb6b7affefac4d66e"},"29754":{"item":"c8d880f5820","icon_sm":"857be14d7fc7edfde55e2dbf64840fa654bb3764","icon_md":"4cb5a018db133cb5a3a4c4da9d9241548c8c61cd","icon_lg":"2454d2202f2fcb22d097224dfa9ef1c462cddd8f"},"29755":{"item":"f6c0d4459df","icon_sm":"1bea5a7b69e5b480c3c5902e8b9440b03c7340db","icon_md":"cb112e568d36c74d24c9626931202a814abfa404","icon_lg":"0c6bc9201b97fe9cc8ea744f1f9784a78114e11a"},"29756":{"item":"2f60f5bb2f9","icon_sm":"559cc96d55f29d19d76e4df9959c8e9180cddaba","icon_md":"2b0616ba67160343482fdafb39f426421eed6198","icon_lg":"ac9af93135f81a92abab479e915c8fc67faea171"},"29757":{"item":"cf65e5f8ef3","icon_sm":"477d82d0d7655736493b5908d47d81ecba9ff55d","icon_md":"45cddf2a8cca9350bd6fc33bb84f81fc21e234aa","icon_lg":"9d6f1a741119fbd90791bb80bfbb93a8473f3b5e"},"29758":{"item":"24c469ba69e","icon_sm":"9a07548a27569202adde534f291e92a3f7f478a3","icon_md":"d13fcce41572f8d7cd46738e1a5def9e10a55cc6","icon_lg":"046926b3650c60d01888fbe04cfd339a1e66cd8b"},"29759":{"item":"b5c6283f1cc","icon_sm":"95f3013ac1d36b8cb4d5daea4abe6903889ea313","icon_md":"75f01d4d7ecfd07f64c311ff04883206804b907e","icon_lg":"b9c08bdac26baf5daa11aecb7d3123485d7ce725"},"29760":{"item":"420b6ac6f70","icon_sm":"6acd1fe1b4546a989d3e1c26cfb27d3cfba12f91","icon_md":"8cbb0107fdc2b686258526bf2487e23a1d0dede9","icon_lg":"de715fc21fb6f9e09cb78c1455878866f24565b4"},"29761":{"item":"56cdcfff50f","icon_sm":"4774df63792698b4052705306bae68d7ff3b7a79","icon_md":"a745febf238ca13c303ee6c6ca7660d0567f61b1","icon_lg":"52711818515e8cc3a2e28d35cc0dc8c9b18566af"},"29762":{"item":"0c11582f1c3","icon_sm":"2f035556d2008e4d9008ee2596082640923efb7d","icon_md":"bc425046b229d48083e7e240b912bdc4da0650a3","icon_lg":"1551a0b4e8deee05d7f9ef3a3a9e13102980fd25"},"29763":{"item":"fc47aabd284","icon_sm":"bdbcf5b43196a53cc35629e23d05b3978b9c3322","icon_md":"57152d28df4483bda0739ac3e2f92a88d12560b3","icon_lg":"9907b5e36418b5abac548aa6463aef725afbeb3b"},"29764":{"item":"e0f7dfd1342","icon_sm":"a60fc9ff4266e435067b744e8aac3bad0888e316","icon_md":"d03e9bc7b33d3a6283eda5cc58fc2dc70b2b2aa0","icon_lg":"f8da9d14ff37f3ca3b7fd732c160fe9a3e8d42ef"},"29765":{"item":"c13ac2826b1","icon_sm":"f3b70b6b9c8256fbc64a30791726c73a2c176f8b","icon_md":"016487c14bcd5782e5307ca35e223694a610361e","icon_lg":"eb160355a746570937da2d6fd6c1a951f0209213"},"29766":{"item":"1fa394b75a6","icon_sm":"9adfdef5f178622c5bab36d2c3e9adc97fc09ebe","icon_md":"bfa4c765034130bea698bca31763a7b0467f4b1a","icon_lg":"19312bd1593c8e82779fc31839708926b21949c9"},"29767":{"item":"6f5f8fed8dd","icon_sm":"49a1fc6e489aa27f844d2bbf526301ab42c55ddb","icon_md":"4e43b903de7bdc511ec04f4091da9a9a54754bfa","icon_lg":"cecd8baca145eaa9f69f4ccdf93bb9a514bf556c"},"29768":{"item":"d5004d5e046","icon_sm":"867a605c7c071785f176cb5622d93b0c0de58df1","icon_md":"e5b14ddd96a0c593cdd78f2915b076a82fbc9fac","icon_lg":"058a4a0814a5cfd84a9c7cb9cf8a167fdc87ee87"},"29769":{"item":"b5fe8d62805","icon_sm":"65b2c2da7f1489fc566e33ccfed15621d45fe64b","icon_md":"1ec446698a00da99e8980eabc8860ed14eadba9d","icon_lg":"5257d5bf5745029eb298d458ff5ec9c735619615"},"29770":{"item":"a96426b203b","icon_sm":"db53e9752ff121cfc483347b91a5aac4975353b1","icon_md":"f259e35d11d43d675ff49d06e9d691537729c057","icon_lg":"55e9afeeda59a852141e22ef52a3efe78b45e13b"},"29771":{"item":"5877c44c968","icon_sm":"1b28e25c5fbad3dce229706780d8ca5fefd80f66","icon_md":"512700b799b2e18f5d6a67de4444f3319b0cadaf","icon_lg":"e13003a3cdc64578fdb80294f9bacd1b2bc8e6d0"},"29772":{"item":"860ed08d0a1","icon_sm":"314981205b232494f12c752456fe8c784a3af9fe","icon_md":"659686968fa5143f61ecfbe471a6add78be842ed","icon_lg":"aa3651ba0c7d2ee044c599ba409ba9377cb74f99"},"29773":{"item":"5ae0e4f3173","icon_sm":"6d051726cf1c85d17b063a3443703d1a7c412cce","icon_md":"41e9f9fe783e7fda86232281d3da1a2051d67fab","icon_lg":"a677f1a30657d7395c37340923454563dbd6efdb"},"29774":{"item":"58864c151ce","icon_sm":"3d1049797a6003d1d67df569bc98a20aa35e8e25","icon_md":"58d81cfdd26573e24a7029ce1c6d4707c7fe32dc","icon_lg":"1ee814ca20e40f25433f1e48a2a03605067e531c"},"29775":{"item":"552f523816a","icon_sm":"18ce1e28edade59f377f2987f36140016aaf0eaa","icon_md":"5d5a54af97b8c4e06ead56ae6b581dff64f2ff6b","icon_lg":"ea3cf2e44d7f2b0fc1ea5ca08312587403a1680b"},"29776":{"item":"5afeb5df3ba","icon_sm":"2d2a5aa72f3316185f084f6607aa87c5a9b45f37","icon_md":"bdcf43def92c3a95f5ffd07d358d5455438d70b2","icon_lg":"2e17a395d4e774dfb7f9f037d78c48baa504bf00"},"29777":{"item":"ab678a66e3f","icon_sm":"a63c8b4ad3d36693cf3710c22a6034e40d4be2b6","icon_md":"f3d31cfa43ebc077b174e9d9935380706d15d7f9","icon_lg":"b9348ba589daef50660c2dc6a250e5915fd0bc51"},"29778":{"item":"48d8871b4f4","icon_sm":"69bba11c8d2224eb798b881475186bdf1e53d1b4","icon_md":"3c19766f0d28bac076bb646e7ed9c3427697b8fc","icon_lg":"da0d5662ceab5c82ff1de29bdaf86f32e57b66b9"},"29779":{"item":"2136a596035","icon_sm":"0169feb7c7352183096b6536183328e3188def3c","icon_md":"e28ae683b9dbb72540c102d2e03a40205afc4840","icon_lg":"9d3adccf8951bdbd76613416223cd42544eb3c49"},"29780":{"item":"1266a16180f","icon_sm":"35147affa2421db95e881ab2d653b404ffec286f","icon_md":"52c02ccfd8f479478d581cb2a29d3565e1b477e1","icon_lg":"e6226efc93a0a53a1946cb0431bbc02bc3b590f4"},"29781":{"item":"5be5ecc89ac","icon_sm":"fa96266785a517448580ba0e6302f8d505649733","icon_md":"19e9413242f1f85b58b3e15e4829565eb483e86b","icon_lg":"55f4be798e967a0cc5b0008cece06419eac55de7"},"29782":{"item":"a8020243bd4","icon_sm":"b6e08d04239ab12464a548922e481b6be4988bc4","icon_md":"21af4c94315d91bb61b11514039b00d761d07cd1","icon_lg":"5a9dfec6dd9e6665e0fa4c45bd938f7273ee3288"},"29783":{"item":"76185dae292","icon_sm":"b7fb22f6d7f37ccda40cdd0274f399ae2ad9c4de","icon_md":"06f6360c7a8bed562a18cb2b3715e5a5d26e7206","icon_lg":"038380418500f10d10f4d238e40517c649580b3c"},"29784":{"item":"897db871a6f","icon_sm":"a983b89bec7fda61aee2371ab498535947e9cee4","icon_md":"6953ea76513191835b9cb2dadb9e450308ee24c8","icon_lg":"430a6d29775d283595e5746084b30d752af5e867"},"29785":{"item":"50aca4a9a6d","icon_sm":"2097a3ae851d95a654c4199f4e57b639c4045b01","icon_md":"8c3368edf9849b03d27b2c128aadff5a0c6f04ae","icon_lg":"8f44db531f02149c0b1a14e164826f316cbd13e2"},"29786":{"item":"a12f5cf962e","icon_sm":"ae70a7dfbc5d592736e843a0cbc465f6cf776436","icon_md":"cb916e485e209dfd7453aed97edd1c6ea3351042","icon_lg":"e58d7b12f7f7a6c26016f22a5bc3e173c667ce99"},"29787":{"item":"16f6eb257cb","icon_sm":"c201bad1603a8c3a5883ae79a61fef07c620d27f","icon_md":"3b46d465054f66242b5b189d5ed1ca9e3e9129da","icon_lg":"691b2eaaee0e963f7af2b45a29ef30b6740897d9"},"29788":{"item":"440799484ef","icon_sm":"93e2d422c41c6f62617c831f0606d76ff567d37c","icon_md":"bbaf197e8fb746047c4fe1f2cbea717b94d45298","icon_lg":"1cfe8312b1ed7b5c40578c90bfbae724ee6b18c2"},"29789":{"item":"580e9504772","icon_sm":"c4555dd81df851dc214691ed8845fd8323b9d6dc","icon_md":"b5b6e6eb122c9e237d0310e6351c0acd35c1d8f0","icon_lg":"4a982374903219ac7cf00c9c703051774fa88e2f"},"29790":{"item":"7284d60b92a","icon_sm":"9fe39357720d7f13b5113ef5b2ddc2f9d6c8dcb7","icon_md":"1831f8594b06715ed12d3fb11b4515aad672417c","icon_lg":"50e79418b69809e16e62a6078773881a3842a425"},"29791":{"item":"1d116040525","icon_sm":"bb30555365b81d70cab1fce6b2e3fdb389a182aa","icon_md":"db6b0ec08ee603a971a659be819c1ded25583487","icon_lg":"a19ac7fac4067dbd94de9b30eeb3faed25d85459"},"32055":{"item":"1c2591dbee5","icon_sm":"d61aed5a56ba71a46909eb40a89e7d9d0f36cd6e","icon_md":"d6cb41b2597ba63dae17d8b37de58c08a5251c78","icon_lg":"dbaad3b907e2f106cef233b3a61193b1b406d0a7"},"32056":{"item":"491a11310d5","icon_sm":"6dcbe7a57dfc09dbeee5fda0f9b5b70d144b49fc","icon_md":"ade6b9ed96824a73514437b3b5799733c7d4c9e8","icon_lg":"c65fc3409d93039933c9d9eaeed91f757239f767"},"32057":{"item":"d98bd5b7c0d","icon_sm":"d5c083e442d34d637bb5809e12aee5dc9336ba1e","icon_md":"5460f9933ed7d785a7fa54e5bf292d019af49a73","icon_lg":"6efee1434dac3a86a5343454467ade15324ca542"},"32058":{"item":"58e6deab7bd","icon_sm":"c24a0b3d07fe47f08d8343c71119343c0c57e7ca","icon_md":"0880d303466cbfa319f0b639f53f7073c456269e","icon_lg":"cc757a32c9e08197b5c3b398389c723627e2e0d3"},"32059":{"item":"40030dce233","icon_sm":"bd86e181a47fc2731fd950eb5f5f30aa86db978e","icon_md":"0219df3b5df53e1cc8a5cbfce50f83461a5bc3ac","icon_lg":"24d0dfa3319ed71d02121fd6dfd89cd2e686db44"},"32060":{"item":"064d4861da4","icon_sm":"90dd68071c04204c322ddf8a2b3d725a0e87f9c5","icon_md":"82dda76f85911df69df0655a7ced27f248dfe5f0","icon_lg":"b7b02d49d887ed5a075f73cb8838dc9a2f7d59e2"},"32061":{"item":"f2a7742b23e","icon_sm":"d5bfe71044fbf48b0ae26a6278c1237d9e614923","icon_md":"7bda87b77cad14c4ce978ab8703281ed1da8cd4a","icon_lg":"01b9c204b1f3f677cca19f87761978ae29df9a6d"},"32062":{"item":"cf06491e274","icon_sm":"49a1fc6e489aa27f844d2bbf526301ab42c55ddb","icon_md":"4e43b903de7bdc511ec04f4091da9a9a54754bfa","icon_lg":"cecd8baca145eaa9f69f4ccdf93bb9a514bf556c"},"32063":{"item":"a6199a61961","icon_sm":"6b5aa50477661691fabffed52f4da0264b97c510","icon_md":"e70a8de8ef2da40a00178092cc3505237b7855d8","icon_lg":"108f78a2ac31ec5740249b8f50bf8aa153550b3d"},"32064":{"item":"88023fe7e8d","icon_sm":"bcecabf107a1f42aaf5f182e0238154d28e8c061","icon_md":"008301e795bfb8a514a3817113f6cec3d0e8ade9","icon_lg":"473dbf2a77e4c59deaca812a6b43bb6c5258d420"},"32065":{"item":"1e9ed0ed6f9","icon_sm":"8c33e54ed53be59e050f192b03f414eec7010745","icon_md":"8743946f31d5d099c9077b64430e5847ccb4c201","icon_lg":"aaa2656d5b181e8c73e0d8e75f4a0b5a159c107d"},"32066":{"item":"5ca2e8fa47c","icon_sm":"15a357adaeb9462f55ae6b6ac25097e56cc0898d","icon_md":"31329de088b701a38913918085619de1fb18c80f","icon_lg":"19285c58c64053eb1adf8f34593f3ff30a6ad8c9"},"32067":{"item":"639f6a33503","icon_sm":"426595b233b464f5388bfbd5b9231876a15123a8","icon_md":"a96a7f51d32919c12e3aab92b9827b2e78264f3c","icon_lg":"c99ffa2cc7ba8ea654baf7c0d4ffb06730206bc4"},"32068":{"item":"2c94a2f506e","icon_sm":"3edbd3662f3a1c480b77f52e6898d6cb02f93b3d","icon_md":"5d9617e189e435ac845beeea0322431c7d6db67c","icon_lg":"a2af872ede93d6348d241b51d6d741540c0c63fb"},"32069":{"item":"fb0e68263de","icon_sm":"af1d3c23f801549ec3196e1d26cb775cbcdf1a74","icon_md":"b869579c67f046fcd072a75ecae1a80a18484cbb","icon_lg":"1e7a9746b8d7ab61e789573245dcd5330c98f9f7"},"32070":{"item":"5868f3e10b1","icon_sm":"8cbeaecc519d5047c1983fce0183b6f0dc1ae9f8","icon_md":"79c1baf7dcd5a4c42bbc6be3fc5b0fac6d235e84","icon_lg":"9ce9350c5aa27ca8a5ee681cc47f220ffa3badf7"},"32071":{"item":"4599d420c9f","icon_sm":"b44bd367733d2499fb7695deccd9e3ba1863a8d5","icon_md":"9f2989e9112d4125b630cd2dc5692154a5eaaba1","icon_lg":"b057dbab2c764cb943e32151fcfbf161b6e6bfd8"},"32072":{"item":"70bd42061eb","icon_sm":"bfa8b10d432d9431e8d379bb7594eccadf921717","icon_md":"5e668508844a3a64da3b8090443fe0e74a97102c","icon_lg":"63efd3010daf15c95fc05f5ee8aeba02a362a3b7"},"32073":{"item":"27e219429a0","icon_sm":"6eb4b6852e6344d9dbc4145b6953ccfa1900973f","icon_md":"d418f41da533c3af12e5d957fb03a8bc62c45fcb","icon_lg":"10b696b884ef68f60b8091e5e56f72a9140ced5d"},"32074":{"item":"8e19b857b40","icon_sm":"9e4c8975a3f95858e9ff2ebc27863cda72d05fe7","icon_md":"69dc7ebffd18c213f6e9233350b2b679d03bfdbf","icon_lg":"0493ae07dad59ba77ed7bf67f65e866595942e43"},"32075":{"item":"9d54c2531ba","icon_sm":"6441b8b211ec6e8437d44edf24425370b0bcd1be","icon_md":"0e04090bbe46f3227652061801b32ee646a29854","icon_lg":"cc36d14e932cc0caae5d96fbfdd1ea82bb77bd0f"},"32076":{"item":"91d8c2fd3ce","icon_sm":"8b28509afd8cb2500b3b3f78e5629540dc772d28","icon_md":"678fadaaf4c27e26ae3b2bcdd8aeaec4a291541a","icon_lg":"8c9f33ea4db18ae56d757b97a0a0fb8520853277"},"32077":{"item":"f64d36946c2","icon_sm":"efe444937abcbafc0d7d75d316611440d40bda7e","icon_md":"21bb1741aa360b3c04ffd865eb3b402e0e6d15f8","icon_lg":"7fe7d632008397b0a2aee57d6c25bda4791ee302"},"32078":{"item":"d9c8134fc9b","icon_sm":"8c757921731e47c935c0678220ee6c0793097ec3","icon_md":"675434f8b3a8109da251ad55b397f1cbfdf98002","icon_lg":"d45afe7c8d89c71e68112bb9ad33982517da5e38"},"32079":{"item":"76c957f7865","icon_sm":"cef2bb7fe46eaf87bc39b2e84f70b87f5f2daae1","icon_md":"8f275eef6f1136d9836d80e8b93fce25b51bcec1","icon_lg":"fcde8dee95ee252810e094a438c437485e2612a8"},"32080":{"item":"9f53683d108","icon_sm":"b144e6b62f690484074c6204cf4f45c44ea755eb","icon_md":"74c0eda8770b214bedef2d58404efd713b263b8b","icon_lg":"c8d9e0496286217af4b57ecc21464595aeaf3d5b"},"32081":{"item":"c30cfb2c6fe","icon_sm":"c19d3e39ce35a122f78aaa659f301ad88dcaec9a","icon_md":"ebaf846649d0bb642e753e2f6690ea5bf29f834e","icon_lg":"53decf79064560023b3fbd5589b6a6cb4cc46595"},"32082":{"item":"b2cba0eed4b","icon_sm":"fa61e99a83d79224a3b5df756073b28ae18045c1","icon_md":"5f9c702ed41764361c82882943f9516e6ff9577c","icon_lg":"97ccbf5bb6d4b86ebce90487b810b37a8e40a3c9"},"32083":{"item":"9d0e02a1242","icon_sm":"7d656ad4c226f37d8a5746f2cd779a019e80a2fa","icon_md":"c6c840e89d205462b46def9719da63b80ab1f77b","icon_lg":"deebd79da0252f3f220083f936530b6453402a69"},"32084":{"item":"9934b563e42","icon_sm":"e0cbb00043e9bfe9c469078bc4aab2a32ddb5847","icon_md":"3621362f75099d23d16a75950f814ea5d64f37e5","icon_lg":"2b0a0531119061eb918b1f192b3d5f9ea6b718d0"},"32085":{"item":"35375434173","icon_sm":"331e651700d820528ea6574a6ad35cde9d51c482","icon_md":"905a5e1e1c5b4733775b000532b4e8f5ff5cbd13","icon_lg":"063b0be03d7bfb5176d043e759afc0d26dbfaa3d"},"32086":{"item":"022f09a152c","icon_sm":"317cb272ff9907f4619a3dc4302d1105019b1ce7","icon_md":"cfb27d2a39432280d4382d461cc28d1518bf6e0a","icon_lg":"c7b491c9c9c56857c8675c125e4c5896f10430ed"},"32087":{"item":"46318d45695","icon_sm":"29fdd512668234ef6d9f51f3ee7a56a6664b8c6b","icon_md":"f4b017ed3e5cb19c248dcbc144d268f04f37108b","icon_lg":"b57dc1e1233aeb37b9d85b674b21ff00a5544302"},"32088":{"item":"bc2ad84fa5e","icon_sm":"807802e9e539f0b3b368525594e9c3db4caca93c","icon_md":"6e4535fe055ef20cee5b8933b0b092bf803811f2","icon_lg":"e0f961624efb5fe75f94845779292a1c4b5a6278"},"32089":{"item":"ceb23f0da2d","icon_sm":"61b9f3fb364b98d3f2766bab11eb70b8c5e15955","icon_md":"d82b534018d8173db1969ff66791eaffb366748c","icon_lg":"be6a93a40130960e1af0a95b9dd58bfedb273d6c"},"32090":{"item":"af7c600e967","icon_sm":"ed2d8baba8b64c01fcf04168509f7ec67f8725f6","icon_md":"1d1a88f5556499f88e60b908f90d3cb387c840a3","icon_lg":"566e96139a0915533cc86416362c1e5323058df1"},"32091":{"item":"202cfd1984f","icon_sm":"8800c89d7ae5ade71440daa6d65298a8d49b22da","icon_md":"97f6464f4f3b0f8d70ae48ccbb965c132fd9aa93","icon_lg":"26e1f7110cbb8ef98107436ba645a9ed20823a2a"},"32092":{"item":"b88cec3fe32","icon_sm":"db7c9e11bfb81733f291e3680f22ca85fd756887","icon_md":"ec2b7581947c90b38c2f5ac7ba98d0556308808f","icon_lg":"197b0f67ee7fa992b0ecb7e9308ec297ce9b056e"},"32093":{"item":"2f53c628947","icon_sm":"d282ac7b5f39daeed72e8a7b98841ae92091a1df","icon_md":"e80ad0b7c5bf0570284174fa74845f892ddd39d0","icon_lg":"44366783a85d943cc589b475a407683da2c4c05c"},"32094":{"item":"b04b72f56b8","icon_sm":"cfe7fbc9a5466470d36e54314a508ed1fd2c18ac","icon_md":"bc2838be74374856707f6b821fb589e676e57862","icon_lg":"2859d48beacfb222dcdad0afe0cd06fd4d9c771e"},"32095":{"item":"723c0a9efc3","icon_sm":"93efb7d1c2265c2991c4f545d8dbbb271cde6316","icon_md":"5dfeb739e8b07e0dd971b9c82a46660a4d24371c","icon_lg":"d058924c1faff472d60da0381a23b5c204d82e58"},"32096":{"item":"a46470bdd87","icon_sm":"57ff65dad71f0d2b56345be5dfef80bda76a3854","icon_md":"565333b2c8fd62ddfa0e7a03cfd685ebc8b7a968","icon_lg":"09b20e912cb07d0065ce24d3bb36994d29bee601"},"32097":{"item":"c350add3c8b","icon_sm":"f98f84ba8cf6adbb0d06d0f570bea24afc943eb4","icon_md":"bbc1cf30dd87232f9412ace3118b8f2f183a90a7","icon_lg":"ec771da1a809af61a306382a06498bc96e468b48"},"32098":{"item":"49516827778","icon_sm":"ed06bb50672116f256faccc5e91424c32cb94254","icon_md":"50b81d3d960f84eb250762eee788ef502e9502f2","icon_lg":"391ce430511f8916f8d42b9a56464f282a3c63a5"},"32099":{"item":"f2834c05405","icon_sm":"f14d7f49cd2fca38b02e70ef95335d7cbc546e95","icon_md":"deaecb8f80ca1d35344cc49997c48f3c55b44862","icon_lg":"06aafa1e87c70f7218e32b30238b5cda7bf7dc09"},"32100":{"item":"f12865a6731","icon_sm":"05b6fa4d21f4233eb45323f3da64c8538133bf3c","icon_md":"1c24ce226536a54828b2104a27a62a500d5052d8","icon_lg":"044ec75f28845ea4c90787b1c2f327728d257d6a"},"32101":{"item":"5447effacad","icon_sm":"3eba75c6affb3be04ba305f85bb8c16e1c5201a4","icon_md":"876dcda73382f5c3eb349106bead91158159fc66","icon_lg":"c2e0d4eadc17c4688dd0b9439b472d74b09f4e19"},"32102":{"item":"98fcc0e2987","icon_sm":"b8bc16610910e1394aa6a0df7f5915653d8fb7a1","icon_md":"698af481a775f3934e097a6089d62279a4126213","icon_lg":"ae2caa79bc8faa506eb60c65e1365f0133ee09e7"},"32103":{"item":"19a6ad6b439","icon_sm":"c3e3c26aa1afcd595d11870945494496f52d426b","icon_md":"0397bec4aea940bb174e1d051908415867602c2b","icon_lg":"3b217b1cbb42450d6fef9febab0547d2e7aa2e82"},"32104":{"item":"e5cd648f8c1","icon_sm":"06caf39799d318dc22c7b3d5cef338c258d139e0","icon_md":"b75599a5dcdf8f65679997e3ecc5eddf02d88972","icon_lg":"114219088ae5cc7eac834589ced8ea759ecbd400"},"32105":{"item":"0e6f1b83f2c","icon_sm":"0cc74c5f67f6a2e90058e00efec9811d6bcd9eab","icon_md":"38217d839cda80aa15b07d7c655db63e14fb6cc0","icon_lg":"6d37ca1f2234f4553b55dc9880163eb87dbf16fd"},"32106":{"item":"215c626628e","icon_sm":"be404a23afde14b92c7174c69339bb9b1893d075","icon_md":"41c774e1907fd72f89877d5afe230d024c0e692b","icon_lg":"dd3f0cdc1a5412936987c3e7e3edde934d0715d6"},"32107":{"item":"871562a2908","icon_sm":"dd7f42e71d5cbb9f49cabb14e3b73d4e6fe6672a","icon_md":"c2a2a504079c7a531c6ec6da95e1f039c6762269","icon_lg":"7fea6786aae3f8f0275c7c48850c5ae6363cc8ba"},"32108":{"item":"222f454366d","icon_sm":"cb143bd518d64f38e6b2a8f1180323d91d3abdeb","icon_md":"d272bf7b128be5dab485c2d27cd981743365cbcb","icon_lg":"a91e0a43af326f7cf790b9c5f5f7c40e9899601d"},"32109":{"item":"82441c782d7","icon_sm":"9ef603c27a52f68400d5208d021d790e3ef5f74a","icon_md":"ae065373f871466941f6a91aa5aecba7ec182673","icon_lg":"e608fad1f8fcf11d8e5c52d9e6706cba5f221afd"},"32110":{"item":"76afc8573c5","icon_sm":"4cdb46061402bc00c1794550786de431755c42bc","icon_md":"6c34c9e9c6d851ed32f713af8fe69c9438e5b2f4","icon_lg":"3f571fca826df80371d8b02e1f580db14b9028cd"},"32111":{"item":"10c5d0f9158","icon_sm":"c89bfa94eba2d55b17563fa8c40e840688d851b0","icon_md":"b293fbb69de0c3e12a1f38118858cd4419643d0b","icon_lg":"4d145308e3a1219be033db10ba8ef25cffa62aba"},"32112":{"item":"8af7d03a008","icon_sm":"cd5458cb6c18d4af905fde3cac6ebb02e38789fa","icon_md":"44e6b47cef8cdf49865736bcc0ccbc6099f94173","icon_lg":"ce61e50c95411ca7a160593b69357ad8cd8046b5"},"32113":{"item":"6cddf81f059","icon_sm":"0d4237b965b5e79b20de35a650bef9ecd0e5bd00","icon_md":"ee16ad863d6b8e1a70ecb877efb743601ed5f62d","icon_lg":"f7c2654dc8f061f445aec1e7b587a6a8088803fc"},"32114":{"item":"b95d654050a","icon_sm":"3a93d96adba3afd494b8f2002b09d5c020e8d659","icon_md":"8056edf885a1c1286df59f259869dcea51c60fe2","icon_lg":"29aad04438a1195cab730614c0553b1234c66364"}}');
// EXTERNAL MODULE: ./src/skywatcher/ffxiv-skywatcher/src/types.ts
var types = __webpack_require__(7456);
;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/index.ts










const baitMap = Object.values(baits_namespaceObject).reduce((acc, curr)=>{
    acc[curr.name.en] = curr;
    return acc;
}, {});
const fishMap = Object.values(fishes_namespaceObject).reduce((acc, curr)=>{
    acc[curr.name.en] = curr;
    return acc;
}, {});
const spreadsheetMap = Object.values(spreadsheet_data_namespaceObject).flatMap((x)=>x
).reduce((acc, curr)=>{
    acc[curr.name] = curr;
    return acc;
}, {});
function getMapped(map, name) {
    if (name === null) {
        return null;
    }
    if (map[name] === undefined) {
        throw new Error(`Could not find '${name}' in ${JSON.stringify(map)}`);
    }
    return map[name];
}
for (const fishingSpot of Object.values(fishing_spots_namespaceObject)){
    fishingSpot.placeName_main = place_names_namespaceObject[fishingSpot.placeName_main];
    fishingSpot.placeName_sub = place_names_namespaceObject[fishingSpot.placeName_sub];
    fishingSpot.placeName = place_names_namespaceObject[fishingSpot.placeName];
    fishingSpot.fishes = fishingSpot.fishes.map((fishId)=>fishes_namespaceObject[fishId]
    );
}
const fishingSpots = fishing_spots_namespaceObject;
const placeNames = (/* unused pure expression or super */ null && (_placeNames));
for (const fish of Object.values(fishes_namespaceObject)){
    fish.contentBonus = fish.contentBonus !== null ? content_bonuses_namespaceObject[fish.contentBonus] : null;
    // Attach bite times
    fish.biteTimes = bite_times_namespaceObject[fish.id];
    delete fish.biteTimes.bestBait;
    // Attach spreadsheet data
    if (fish.id === 0) {
        fish.spreadsheetData = {
            bait: null,
            points: null,
            doubleHook: null,
            tripleHook: null,
            mooch: null,
            tug: null,
            hookset: null,
            time: null,
            weathers: null,
            stars: null,
            intuition: null
        };
    } else {
        const spreadsheetData = getMapped(spreadsheetMap, fish.name.en);
        fish.spreadsheetData = {
            bait: getMapped(baitMap, spreadsheetData.bait),
            points: spreadsheetData.points,
            doubleHook: spreadsheetData.doubleHook,
            tripleHook: spreadsheetData.tripleHook,
            mooch: getMapped(fishMap, spreadsheetData.mooch),
            tug: spreadsheetData.tug,
            hookset: spreadsheetData.hookset,
            time: spreadsheetData.time !== null ? spreadsheetData.time.split("") : null,
            weathers: spreadsheetData.weathers !== null ? (()=>{
                switch(spreadsheetData.weathers.type){
                    case "ALL":
                        return spreadsheetData.weathers;
                    case "OK":
                    case "NOT OK":
                        return {
                            type: spreadsheetData.weathers.type,
                            list: spreadsheetData.weathers.list.map((weather)=>types/* Weather */.y[weather]
                            )
                        };
                }
            })() : null,
            stars: spreadsheetData.stars,
            intuition: spreadsheetData.intuition != null ? spreadsheetData.intuition.map(({ name , count  })=>({
                    fish: getMapped(fishMap, name),
                    count
                })
            ) : null
        };
    }
    // Attach Lodestone data
    fish.lodestoneData = lodestone_data_namespaceObject[fish.id];
}
const fishes = fishes_namespaceObject;
const baits = baits_namespaceObject;
const contentBonuses = content_bonuses_namespaceObject;
const achievements = achievements_namespaceObject;


/***/ }),

/***/ 1176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ calculateVoyages),
  "y": () => (/* reexport */ getStopTimes)
});

// EXTERNAL MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/data/index.ts + 9 modules
var data = __webpack_require__(7576);
;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/src/calculate-voyages.ts
const _9HR = 32400000;
const _45MIN = 2700000;
// Cycle repeats every 12 days starting at this epoch
const LULU_EPOCH = 1593270000000 + _9HR;
const DEST_CYCLE = [
    "B",
    "T",
    "N",
    "R"
];
const TIME_CYCLE = [
    "S",
    "S",
    "S",
    "S",
    "N",
    "N",
    "N",
    "N",
    "D",
    "D",
    "D",
    "D"
];
function fromEpoch(day, hour) {
    return new Date(LULU_EPOCH + day * 86400000 + hour * 3600000 - _9HR);
}
function _calculateVoyages(date, count, filter) {
    const adjustedDate = new Date(date.getTime() + _9HR - _45MIN) // Subtract 45 minutes to catch ongoing voyages
    ;
    let day = Math.floor((adjustedDate.getTime() - LULU_EPOCH) / 86400000);
    let hour = adjustedDate.getUTCHours();
    // Adjust hour to be odd
    hour += (hour & 1) === 0 ? 1 : 2;
    if (hour > 23) {
        day += 1;
        hour -= 24;
    }
    // Find the current voyage
    const voyageNumber = hour >> 1;
    let destIndex = ((day + voyageNumber) % DEST_CYCLE.length + DEST_CYCLE.length) % DEST_CYCLE.length;
    let timeIndex = ((day + voyageNumber) % TIME_CYCLE.length + TIME_CYCLE.length) % TIME_CYCLE.length;
    // Loop until however many voyages are found
    const upcomingVoyages = [];
    while(upcomingVoyages.length < count){
        const destTime = DEST_CYCLE[destIndex] + TIME_CYCLE[timeIndex];
        if (filter === undefined || filter.includes(destTime)) {
            upcomingVoyages.push({
                date: fromEpoch(day, hour),
                destTime
            });
        }
        if (hour === 23) {
            day += 1;
            hour = 1;
            destIndex = (destIndex + 2) % DEST_CYCLE.length;
            timeIndex = (timeIndex + 2) % TIME_CYCLE.length;
        } else {
            hour += 2;
            destIndex = (destIndex + 1) % DEST_CYCLE.length;
            timeIndex = (timeIndex + 1) % TIME_CYCLE.length;
        }
    }
    return upcomingVoyages;
}
// Record the pattern for faster calculations
const pattern = _calculateVoyages(new Date(_45MIN), 144).map(({ destTime  })=>destTime
);
function calculateVoyages(date, count, filter) {
    const startIndex = Math.floor((date.getTime() - _45MIN) / 7200000);
    const upcomingVoyages = [];
    for(let i = 0; upcomingVoyages.length < count && i < 100000; ++i){
        const destTime = pattern[(startIndex + i) % 144];
        if (filter === undefined || filter.includes(destTime)) {
            upcomingVoyages.push({
                date: new Date((startIndex + i + 1) * 7200000),
                destTime
            });
        }
    }
    return upcomingVoyages;
};

;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/src/get-stop-times.ts
const STOPS_SEQUENCE = {
    B: [
        "C",
        "N",
        "B"
    ],
    N: [
        "S",
        "G",
        "N"
    ],
    R: [
        "G",
        "S",
        "R"
    ],
    T: [
        "C",
        "R",
        "T"
    ]
};
const TIMES_SEQUENCE = {
    D: [
        "S",
        "N",
        "D"
    ],
    S: [
        "N",
        "D",
        "S"
    ],
    N: [
        "D",
        "S",
        "N"
    ]
};
function getStopTimes(destTime) {
    const stops = STOPS_SEQUENCE[destTime[0]];
    const times = TIMES_SEQUENCE[destTime[1]];
    return [
        stops[0] + times[0],
        stops[1] + times[1],
        stops[2] + times[2]
    ];
};

;// CONCATENATED MODULE: ./src/ocean-fishing/ffxiv-ocean-fishing/index.ts



if (false) {}


/***/ }),

/***/ 2076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G8": () => (/* binding */ GREEN_FISH_MAP),
/* harmony export */   "Kg": () => (/* binding */ SPECTRAL_FISH_MAP),
/* harmony export */   "T$": () => (/* binding */ ACHIEVEMENTS_MAP),
/* harmony export */   "UR": () => (/* binding */ BLUE_FISH_MAP),
/* harmony export */   "by": () => (/* binding */ FILTER_MAP),
/* harmony export */   "d4": () => (/* binding */ TIME_MAP),
/* harmony export */   "tj": () => (/* binding */ STOP_MAP)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TimeIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7576);



const STOP_MAP = {
    B: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishingSpots[248] */ .OL[248],
    C: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishingSpots[246] */ .OL[246],
    G: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishingSpots[237] */ .OL[237],
    N: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishingSpots[243] */ .OL[243],
    R: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishingSpots[241] */ .OL[241],
    S: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishingSpots[239] */ .OL[239],
    T: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishingSpots[250] */ .OL[250]
};
const TIME_MAP = {
    D: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        time: "D"
    }),
    N: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        time: "N"
    }),
    S: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        time: "S"
    })
};
const SPECTRAL_FISH_MAP = {
    B: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[32083] */ .n7[32083],
    C: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[32063] */ .n7[32063],
    G: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[29784] */ .n7[29784],
    N: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[29786] */ .n7[29786],
    R: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[29787] */ .n7[29787],
    S: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[29785] */ .n7[29785],
    T: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[32103] */ .n7[32103]
};
const GREEN_FISH_MAP = {
    B: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[32084] */ .n7[32084],
    C: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[32064] */ .n7[32064],
    G: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[29744] */ .n7[29744],
    N: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[29747] */ .n7[29747],
    R: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[29746] */ .n7[29746],
    S: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[29745] */ .n7[29745],
    T: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[32104] */ .n7[32104]
};
const BLUE_FISH_MAP = {
    B: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[32094] */ .n7[32094],
    C: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[32074] */ .n7[32074],
    G: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[29788] */ .n7[29788],
    N: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[29791] */ .n7[29791],
    R: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[29790] */ .n7[29790],
    S: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[29789] */ .n7[29789],
    T: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .fishes[32114] */ .n7[32114]
};
const ACHIEVEMENTS_MAP = {
    BD: [
        _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .achievements[2755] */ .EF[2755]
    ],
    BN: [
        _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .achievements[2756] */ .EF[2756]
    ],
    BS: [],
    ND: [],
    NN: [
        _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .achievements[2563] */ .EF[2563]
    ],
    NS: [
        _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .achievements[2566] */ .EF[2566]
    ],
    RD: [
        _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .achievements[2564] */ .EF[2564]
    ],
    RN: [
        _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .achievements[2565] */ .EF[2565]
    ],
    RS: [],
    TD: [
        _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .achievements[2754] */ .EF[2754],
        _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .achievements[2756] */ .EF[2756]
    ],
    TN: [
        _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_2__/* .achievements[2754] */ .EF[2754]
    ],
    TS: []
};
// This should be automated later...
const FILTER_MAP = {
    B: [
        "BD",
        "BN",
        "BS"
    ],
    N: [
        "ND",
        "NN",
        "NS"
    ],
    R: [
        "RD",
        "RN",
        "RS"
    ],
    T: [
        "TD",
        "TN",
        "TS"
    ],
    BD: [
        "BD"
    ],
    BN: [
        "BN"
    ],
    BS: [
        "BS"
    ],
    ND: [
        "ND"
    ],
    NN: [
        "NN"
    ],
    NS: [
        "NS"
    ],
    RD: [
        "RD"
    ],
    RN: [
        "RN"
    ],
    RS: [
        "RS"
    ],
    TD: [
        "TD"
    ],
    TN: [
        "TN"
    ],
    TS: [
        "TS"
    ],
    sothis: [
        "ND",
        "RS"
    ],
    coral_manta: [
        "NS",
        "RD"
    ],
    elasmosaurus: [
        "BS",
        "ND"
    ],
    stonescale: [
        "RS",
        "TN"
    ],
    hafgufa: [
        "BS",
        "TS"
    ],
    seafaring_toad: [
        "BD"
    ],
    placodus: [
        "TS"
    ],
    octopodes: [
        "NN"
    ],
    sharks: [
        "RD"
    ],
    jellyfish: [
        "RN"
    ],
    seadragons: [
        "NS"
    ],
    balloons: [
        "TD",
        "TN"
    ],
    crabs: [
        "BD"
    ],
    mantas: [
        "BN",
        "TD"
    ]
};


/***/ }),

/***/ 3440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bb": () => (/* binding */ isUncaughtRoute),
/* harmony export */   "Jc": () => (/* binding */ cleanObjective),
/* harmony export */   "K": () => (/* binding */ subtextBiteTime),
/* harmony export */   "LW": () => (/* binding */ timeUntil),
/* harmony export */   "S5": () => (/* binding */ getBaitGroup),
/* harmony export */   "TW": () => (/* binding */ subtextDH),
/* harmony export */   "XZ": () => (/* binding */ getBlueFish),
/* harmony export */   "jC": () => (/* binding */ upperFirst),
/* harmony export */   "jV": () => (/* binding */ cleanRequirement),
/* harmony export */   "zf": () => (/* binding */ isBaitRequired)
/* harmony export */ });
/* unused harmony export getBaitChain */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8473);
/* harmony import */ var _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7576);
/* harmony import */ var _ffxiv_ocean_fishing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1176);
/* harmony import */ var _maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2076);




function memoize(func, getKey) {
    const cache1 = {};
    const _func = (arg)=>{
        const key = getKey(arg);
        const cache = _func.cache;
        return cache[key] !== undefined ? cache[key] : cache[key] = func(arg);
    };
    _func.cache = cache1;
    return _func;
}
function timeUntil(now, then, options) {
    const diff = then.getTime() - now.getTime();
    if (diff < -900000) {
        return options.t("routeInfo.enRoute");
    } else if (diff < 0) {
        return options.t("routeInfo.boardingNow");
    } else {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .timeUntil */ .LW)(now, then, options);
    }
}
function getBlueFish(stopTime) {
    const blueFish = _maps__WEBPACK_IMPORTED_MODULE_3__/* .BLUE_FISH_MAP */ .UR[stopTime[0]];
    const spreadsheetData = blueFish.spreadsheetData;
    if (spreadsheetData.time !== null) {
        if (spreadsheetData.time.includes(stopTime[1])) {
            return blueFish;
        }
    }
    return null;
}
function isBaitRequired(fish, bait) {
    for (const otherBaitId of Object.keys(fish.biteTimes)){
        if (otherBaitId === "all" || +otherBaitId === bait.id || +otherBaitId === 29717) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}
const getBaitChain = memoize(function _getBaitChain(fish) {
    const { bait , mooch , tug  } = fish.spreadsheetData;
    if (bait === null && mooch === null) {
        return [
            {
                bait: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .baits[29717] */ .OZ[29717]
            },
            {
                fish,
                tug
            }
        ] // Versatile Lure as fallback
        ;
    } else {
        return bait !== null ? [
            {
                bait
            },
            {
                fish,
                tug
            }
        ] : [
            ..._getBaitChain(mooch),
            {
                fish,
                tug
            }
        ];
    }
}, (fish)=>String(fish.id)
);
const getBaitGroup = memoize((fish1)=>{
    const { intuition  } = fish1.spreadsheetData;
    const baitChain1 = getBaitChain(fish1);
    return {
        baits: baitChain1,
        baitIsRequired: isBaitRequired(fish1, baitChain1[0].bait),
        intuitionFishes: intuition !== null ? intuition.map(({ fish , count  })=>{
            const baitChain = getBaitChain(fish);
            return {
                baits: baitChain,
                baitIsRequired: isBaitRequired(fish, baitChain[0].bait),
                count
            };
        }) : undefined
    };
}, (fish)=>String(fish.id)
);
// See https://discord.com/channels/327124808217395200/679407580430467092/864238268514041917
getBaitGroup.cache = {
    // Stonescale
    29790: {
        baits: getBaitChain(_ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .fishes[29790] */ .n7[29790]),
        baitIsRequired: true,
        intuitionFishes: [
            {
                baits: [
                    {
                        bait: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .baits[2591] */ .OZ[2591]
                    },
                    {
                        fish: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .fishes[29769] */ .n7[29769],
                        tug: 2
                    }
                ],
                baitIsRequired: false,
                count: 1
            },
            {
                baits: [
                    {
                        bait: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .baits[29714] */ .OZ[29714]
                    },
                    {
                        fish: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .fishes[29768] */ .n7[29768],
                        tug: 1
                    }
                ],
                baitIsRequired: false,
                count: 1
            }
        ]
    },
    // Hafgufa
    32074: {
        baits: getBaitChain(_ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .fishes[32074] */ .n7[32074]),
        baitIsRequired: true,
        intuitionFishes: [
            {
                baits: [
                    {
                        bait: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .baits[29716] */ .OZ[29716]
                    },
                    {
                        fish: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .fishes[32070] */ .n7[32070],
                        tug: 3
                    }
                ],
                baitIsRequired: false,
                count: 2
            },
            {
                baits: [
                    {
                        bait: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .baits[27590] */ .OZ[27590]
                    },
                    {
                        fish: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .fishes[32067] */ .n7[32067],
                        tug: 2
                    }
                ],
                baitIsRequired: false,
                count: 1
            }
        ]
    },
    // Seafaring Toad
    32094: {
        baits: getBaitChain(_ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .fishes[32094] */ .n7[32094]),
        baitIsRequired: true,
        intuitionFishes: [
            {
                baits: [
                    {
                        bait: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .baits[2587] */ .OZ[2587]
                    },
                    {
                        fish: _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .fishes[32089] */ .n7[32089],
                        tug: 2
                    }
                ],
                baitIsRequired: false,
                count: 3
            }
        ]
    }
};
if (false) {}
function subtextDH(fish) {
    const doubleHook = fish.spreadsheetData.doubleHook;
    return doubleHook !== null ? `DH: ${Array.isArray(doubleHook) ? doubleHook.join("-") : doubleHook}` : "DH: ?";
}
function subtextBiteTime(fish) {
    const biteTimeAll = fish.biteTimes.all;
    return biteTimeAll !== null ? `${biteTimeAll[0] === biteTimeAll[1] ? biteTimeAll[0] : biteTimeAll.join("-")}s` : "?s";
}
function upperFirst(str) {
    return str.length === 0 ? "" : str[0].toUpperCase() + str.slice(1);
}
function cleanObjective(objective) {
    return objective.replace(/<[^<>]*?\/>/g, "");
}
function cleanRequirement(requirement) {
    return upperFirst(requirement.replace(/^(Requirement:|Bedingung:|Condition :|達成条件：|达成条件：|달성 조건: )/, "").trim());
}
function isUncaughtRoute(destTime, checklist) {
    for (const stopTime of (0,_ffxiv_ocean_fishing__WEBPACK_IMPORTED_MODULE_2__/* .getStopTimes */ .y)(destTime)){
        const nonSpectralFishingSpot = _maps__WEBPACK_IMPORTED_MODULE_3__/* .STOP_MAP */ .tj[stopTime[0]];
        for (const fish of nonSpectralFishingSpot.fishes){
            if (!checklist.includes(fish.id)) {
                return true;
            }
        }
        const spectralFishingSpot = _ffxiv_ocean_fishing_data__WEBPACK_IMPORTED_MODULE_1__/* .fishingSpots */ .OL[nonSpectralFishingSpot.id + 1];
        for (const fish2 of spectralFishingSpot.fishes){
            if (fish2.spreadsheetData.time !== null && !fish2.spreadsheetData.time.includes(stopTime[1])) {
                continue;
            }
            if (!checklist.includes(fish2.id)) {
                return true;
            }
        }
    }
    return false;
}


/***/ })

};
;