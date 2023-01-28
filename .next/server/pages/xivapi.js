"use strict";
(() => {
var exports = {};
exports.id = 284;
exports.ids = [284];
exports.modules = {

/***/ 8781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ xivapi),
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
// EXTERNAL MODULE: external "next-usequerystate"
var external_next_usequerystate_ = __webpack_require__(719);
// EXTERNAL MODULE: external "@mui/material/NoSsr"
var NoSsr_ = __webpack_require__(3534);
var NoSsr_default = /*#__PURE__*/__webpack_require__.n(NoSsr_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./src/Page.tsx
var Page = __webpack_require__(6906);
// EXTERNAL MODULE: ./src/Section.tsx
var Section = __webpack_require__(8884);
;// CONCATENATED MODULE: ./src/fetch-xivapi.ts
const XIVAPI = "https://xivapi.com";
async function fetchXIVAPI(endpoint, qs) {
    const url = new URL(XIVAPI + endpoint);
    if (qs !== undefined) {
        for (const [key, value] of Object.entries(qs)){
            url.searchParams.append(key, value);
        }
    }
    const response = await fetch(url.toString());
    const json = await response.json();
    return json;
}; // export async function fetchAllPages (endpoint: string, qs?: Record<string, string>) {
 //   const results: any[] = []
 //   const _qs = Object.assign({}, qs)
 //
 //   for (let page = 1; ; ++page) {
 //     _qs.page = String(page)
 //     const json = await fetchXIVAPI(endpoint, _qs)
 //     if (json.Results) {
 //       results.push(...json.Results)
 //     }
 //     if (!json.Pagination || json.Pagination.Page === json.Pagination.PageTotal) {
 //       break
 //     }
 //   }
 //
 //   return results
 // }
 //
 // export async function getSearchResult (query: string, type: string, qs?: Record<string, string>) {
 //   const results = await fetchAllPages('/search', { string: query, columns: 'Name,UrlType,Url' })
 //   for (const result of results) {
 //     if (result.Name === query && result.UrlType === type) {
 //       return await fetchXIVAPI(result.Url, qs)
 //     }
 //   }
 //   throw new Error(`Could not find item: ${query} (${type})`)
 // }

// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
;// CONCATENATED MODULE: external "@mui/material/Pagination"
const Pagination_namespaceObject = require("@mui/material/Pagination");
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination_namespaceObject);
;// CONCATENATED MODULE: ./src/xivapi/Pagination.tsx



const XivPagination = ({ url , data , onChangeUrl  })=>{
    const handleChangePage = (_, page)=>{
        const parsedUrl = new URL(url, "https://xivapi.com");
        parsedUrl.searchParams.set("page", String(page));
        onChangeUrl(`${parsedUrl.pathname}?${parsedUrl.searchParams.toString()}`);
    };
    if ((data === null || data === void 0 ? void 0 : data.Pagination) == null) {
        return null;
    } else {
        const pagination = data.Pagination;
        return /*#__PURE__*/ jsx_runtime_.jsx((Pagination_default()), {
            count: pagination.PageTotal,
            defaultPage: pagination.Page,
            showFirstButton: true,
            showLastButton: true,
            siblingCount: 2,
            onChange: handleChangePage,
            sx: {
                display: "flex",
                justifyContent: "center",
                m: 1
            }
        });
    }
};
/* harmony default export */ const Pagination = (XivPagination);

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
;// CONCATENATED MODULE: external "@mui/icons-material/Link"
const icons_material_Link_namespaceObject = require("@mui/icons-material/Link");
var icons_material_Link_default = /*#__PURE__*/__webpack_require__.n(icons_material_Link_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Image"
const Image_namespaceObject = require("@mui/icons-material/Image");
var Image_default = /*#__PURE__*/__webpack_require__.n(Image_namespaceObject);
;// CONCATENATED MODULE: ./src/xivapi/render-json.tsx







const MAX_DEPTH = 3;
function isImageUrl(url) {
    return /^(\/|http).*\.(png|jpg)(\?.*)?$/.test(url);
}
const SpanKey = (0,styles_.styled)("span")(({ theme  })=>({
        fontWeight: "bold",
        color: theme.palette.mode === "dark" ? "#ff9691" : "#b75052"
    })
);
const SpanFunction = (0,styles_.styled)("span")(({ theme  })=>({
        color: theme.palette.mode === "dark" ? "#c5b6ff" : "#3e20b7"
    })
);
const SpanString = (0,styles_.styled)("span")(({ theme  })=>({
        color: theme.palette.mode === "dark" ? "#c9fdbc" : "#0b6300"
    })
);
const SpanNumber = (0,styles_.styled)("span")(({ theme  })=>({
        color: theme.palette.mode === "dark" ? "#c5b6ff" : "#3e20b7"
    })
);
const SpanKeyword = (0,styles_.styled)("span")(({ theme  })=>({
        fontWeight: "bold",
        color: theme.palette.mode === "dark" ? "#c5b6ff" : "#3e20b7"
    })
);
const renderKey = (key)=>{
    return key !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx(SpanKey, {
        children: `"${key}": `
    }) : undefined;
};
const JSONObject = ({ data , opt: { depth , objKey , comma =false , onChangeUrl , _isContent =false  }  })=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(depth <= MAX_DEPTH);
    const handleToggleOpen = ()=>{
        setOpen(!open);
    };
    if (!open) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    component: "span",
                    onClick: handleToggleOpen,
                    sx: {
                        display: "inline-block",
                        position: "relative",
                        width: "100%",
                        cursor: "pointer",
                        "&::before": {
                            content: '"-"',
                            position: "absolute",
                            left: "-1em",
                            fontWeight: "bold"
                        }
                    },
                    children: [
                        renderKey(objKey),
                        "{ ... }",
                        comma && ","
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
            ]
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    component: "span",
                    onClick: handleToggleOpen,
                    sx: {
                        display: "inline-block",
                        position: "relative",
                        width: "100%",
                        cursor: "pointer",
                        "&::before": {
                            content: '"+"',
                            position: "absolute",
                            left: "-1em",
                            fontWeight: "bold"
                        }
                    },
                    children: [
                        renderKey(objKey),
                        "{"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    component: "ul",
                    sx: {
                        listStyleType: "none",
                        m: 0,
                        p: 0,
                        pl: 4
                    },
                    children: Object.keys(data).map((key, index, array)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: renderJSON(data[key], {
                                depth: depth + 1,
                                objKey: key,
                                comma: index !== array.length - 1,
                                onChangeUrl,
                                _isContent
                            })
                        }, index)
                    )
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        "}",
                        comma && ","
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
            ]
        });
    }
};
const JSONArray = ({ data , opt: { depth , objKey , comma =false , onChangeUrl , _isContent =false  }  })=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(depth <= MAX_DEPTH);
    const handleToggleOpen = ()=>{
        setOpen(!open);
    };
    if (!open) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    component: "span",
                    onClick: handleToggleOpen,
                    sx: {
                        display: "inline-block",
                        position: "relative",
                        width: "100%",
                        cursor: "pointer",
                        "&::before": {
                            content: '"-"',
                            position: "absolute",
                            left: "-1em",
                            fontWeight: "bold"
                        }
                    },
                    children: [
                        renderKey(objKey),
                        "[ ... ]",
                        comma && ","
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
            ]
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    component: "span",
                    onClick: handleToggleOpen,
                    sx: {
                        display: "inline-block",
                        position: "relative",
                        width: "100%",
                        cursor: "pointer",
                        "&::before": {
                            content: '"+"',
                            position: "absolute",
                            left: "-1em",
                            fontWeight: "bold"
                        }
                    },
                    children: [
                        renderKey(objKey),
                        "["
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    component: "ul",
                    sx: {
                        listStyleType: "none",
                        m: 0,
                        p: 0,
                        pl: 4
                    },
                    children: data.map((datum, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: renderJSON(datum, {
                                depth: depth + 1,
                                comma: index !== data.length - 1,
                                onChangeUrl,
                                _isContent
                            })
                        }, index)
                    )
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        "]",
                        comma && ","
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
            ]
        });
    }
};
const JSONBasicType = ({ opt: { objKey , comma =false  } , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    renderKey(objKey),
                    children,
                    comma && ","
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
        ]
    });
};
const JSONString = ({ data , opt  })=>{
    const { objKey , comma =false , onChangeUrl , _isContent =false  } = opt;
    const { 0: openImg , 1: setOpenImg  } = (0,external_react_.useState)(false);
    const handleToggleOpenImg = ()=>{
        setOpenImg(!openImg);
    };
    if (_isContent || objKey === "Url") {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        renderKey(objKey),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Link_default()), {
                            component: SpanString,
                            onClick: onChangeUrl !== undefined ? ()=>onChangeUrl(_isContent ? `/${data}` : data)
                             : undefined,
                            sx: {
                                cursor: "pointer"
                            },
                            children: [
                                '"',
                                data,
                                '"',
                                !_isContent && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Link_default()), {
                                            fontSize: "small",
                                            sx: {
                                                verticalAlign: "text-bottom"
                                            }
                                        })
                                    ]
                                })
                            ]
                        }),
                        comma && ","
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
            ]
        });
    } else if (isImageUrl(data)) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        renderKey(objKey),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Link_default()), {
                            component: SpanString,
                            onClick: handleToggleOpenImg,
                            children: [
                                '"',
                                data,
                                '" ',
                                /*#__PURE__*/ jsx_runtime_.jsx((Image_default()), {
                                    fontSize: "small",
                                    sx: {
                                        verticalAlign: "text-bottom"
                                    }
                                })
                            ]
                        }),
                        comma && ","
                    ]
                }),
                openImg && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: data.startsWith("http") ? data : `https://xivapi.com${data}`
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(JSONBasicType, {
        opt: opt,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SpanString, {
            children: [
                '"',
                data,
                '"'
            ]
        })
    });
};
const JSONFunction = ({ data , opt  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(JSONBasicType, {
        opt: opt,
        children: /*#__PURE__*/ jsx_runtime_.jsx(SpanFunction, {
            children: String(data)
        })
    });
};
const JSONNumber = ({ data , opt  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(JSONBasicType, {
        opt: opt,
        children: /*#__PURE__*/ jsx_runtime_.jsx(SpanNumber, {
            children: data
        })
    });
};
const JSONUndefined = ({ opt  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(JSONBasicType, {
        opt: opt,
        children: /*#__PURE__*/ jsx_runtime_.jsx(SpanKeyword, {
            children: "undefined"
        })
    });
};
const JSONNull = ({ opt  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(JSONBasicType, {
        opt: opt,
        children: /*#__PURE__*/ jsx_runtime_.jsx(SpanKeyword, {
            children: "null"
        })
    });
};
function renderJSON(data, opt) {
    if (data === undefined) return /*#__PURE__*/ jsx_runtime_.jsx(JSONUndefined, {
        opt: opt
    });
    if (data === null) return /*#__PURE__*/ jsx_runtime_.jsx(JSONNull, {
        opt: opt
    });
    switch(typeof data){
        case "object":
            {
                return Array.isArray(data) ? /*#__PURE__*/ jsx_runtime_.jsx(JSONArray, {
                    data: data,
                    opt: opt
                }) : /*#__PURE__*/ jsx_runtime_.jsx(JSONObject, {
                    data: data,
                    opt: opt
                });
            }
        case "function":
            return /*#__PURE__*/ jsx_runtime_.jsx(JSONFunction, {
                data: data,
                opt: opt
            });
        case "string":
            return /*#__PURE__*/ jsx_runtime_.jsx(JSONString, {
                data: data,
                opt: opt
            });
        case "number":
            return /*#__PURE__*/ jsx_runtime_.jsx(JSONNumber, {
                data: data,
                opt: opt
            });
        default:
            console.log(typeof data, data);
            return /*#__PURE__*/ jsx_runtime_.jsx(JSONString, {
                data: "???",
                opt: opt
            });
    }
};

;// CONCATENATED MODULE: ./src/xivapi/Results.tsx






const CACHE = [];
function getCached(key) {
    return CACHE.find((item)=>item.key === key
    );
}
function addCached(key, value) {
    CACHE.push({
        key,
        value
    });
    if (CACHE.length > 100) {
        CACHE.shift();
    }
}
const Results = ({ url , onChangeUrl  })=>{
    const { 0: data , 1: setData  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const cached = getCached(url);
        if (cached !== undefined) {
            setData(cached.value);
        } else {
            // Use Suspense to avoid race thinggy
            setData(null);
            fetchXIVAPI(url).then((json)=>{
                addCached(url, json);
                setData(json);
            }).catch((err)=>{
                setData(err);
            });
        }
    }, [
        url
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                url: url,
                data: data,
                onChangeUrl: onChangeUrl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                variant: "outlined",
                sx: {
                    p: 2,
                    pl: 4,
                    fontFamily: "monospace"
                },
                children: data !== null ? renderJSON(data, {
                    depth: 0,
                    onChangeUrl,
                    _isContent: url === "/content" || url === "/Content"
                }) : "Loading..."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                url: url,
                data: data,
                onChangeUrl: onChangeUrl
            })
        ]
    });
};
/* harmony default export */ const xivapi_Results = (Results);

;// CONCATENATED MODULE: ./pages/xivapi.tsx













const Xivapi = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("xivapi");
    const [url, setUrl] = (0,external_next_usequerystate_.useQueryState)("url", {
        history: "push"
    });
    const { 0: inputUrl , 1: setInputUrl  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        if (url === null) {
            void setUrl("/content");
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (url !== null) {
            setInputUrl(url);
        }
    }, [
        url
    ]);
    const handleInputUrl = (event)=>{
        setInputUrl(event.target.value);
    };
    const handleKeyPress = (event)=>{
        if (event.key === "Enter") {
            void setUrl(inputUrl);
        }
    };
    const handleClickGo = ()=>{
        void setUrl(inputUrl);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Page/* default */.Z, {
        title: t("_title"),
        description: t("_description"),
        children: /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            variant: "filled",
                            fullWidth: true,
                            label: "URL",
                            InputProps: {
                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                    position: "start",
                                    children: "https://xivapi.com"
                                }),
                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "contained",
                                    color: "primary",
                                    onClick: handleClickGo,
                                    children: "Go"
                                })
                            },
                            value: inputUrl !== null ? inputUrl : "",
                            onChange: handleInputUrl,
                            onKeyPress: handleKeyPress
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((NoSsr_default()), {
                            children: url !== null && /*#__PURE__*/ jsx_runtime_.jsx(xivapi_Results, {
                                url: url,
                                onChangeUrl: (...args)=>{
                                    void setUrl(...args);
                                }
                            })
                        })
                    })
                ]
            })
        })
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale ?? "en", [
                "common",
                "xivapi"
            ])
        }
    };
};
/* harmony default export */ const xivapi = (Xivapi);


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

/***/ 3103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

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
var __webpack_exports__ = __webpack_require__.X(0, [906], () => (__webpack_exec__(8781)));
module.exports = __webpack_exports__;

})();