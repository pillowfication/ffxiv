"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
// EXTERNAL MODULE: ./src/create-emotion-cache.tsx + 1 modules
var create_emotion_cache = __webpack_require__(8925);
// EXTERNAL MODULE: external "@mui/material/NoSsr"
var NoSsr_ = __webpack_require__(3534);
var NoSsr_default = /*#__PURE__*/__webpack_require__.n(NoSsr_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: external "@mui/material/Switch"
const Switch_namespaceObject = require("@mui/material/Switch");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
;// CONCATENATED MODULE: external "@mui/icons-material/Home"
const Home_namespaceObject = require("@mui/icons-material/Home");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/GitHub"
const GitHub_namespaceObject = require("@mui/icons-material/GitHub");
var GitHub_default = /*#__PURE__*/__webpack_require__.n(GitHub_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Translate"
const Translate_namespaceObject = require("@mui/icons-material/Translate");
var Translate_default = /*#__PURE__*/__webpack_require__.n(Translate_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ExpandMore"
const ExpandMore_namespaceObject = require("@mui/icons-material/ExpandMore");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/LightMode"
const LightMode_namespaceObject = require("@mui/icons-material/LightMode");
var LightMode_default = /*#__PURE__*/__webpack_require__.n(LightMode_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/DarkMode"
const DarkMode_namespaceObject = require("@mui/icons-material/DarkMode");
var DarkMode_default = /*#__PURE__*/__webpack_require__.n(DarkMode_namespaceObject);
// EXTERNAL MODULE: ./src/Link.tsx
var Link = __webpack_require__(7255);
;// CONCATENATED MODULE: ./src/Header.tsx






















const LANGUAGES = {
    en: "English",
    de: "Deutsch",
    fr: "Fran\xe7ais",
    ja: "\u65E5\u672C\u8A9E",
    cn: "\u4E2D\u6587",
    ko: "\uD55C\uAD6D\uC5B4"
};
function getLanguage(locale) {
    return LANGUAGES[locale] !== undefined ? LANGUAGES[locale] : locale.toUpperCase();
}
const Header = ({ theme , setTheme  })=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)("common");
    const router = (0,router_.useRouter)();
    const { 0: languageAnchorEl , 1: setLanguageAnchorEl  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    (0,external_react_.useEffect)(()=>{
        window.localStorage.setItem("theme", theme);
    }, [
        theme
    ]);
    const handleClickLanguage = (event)=>{
        setLanguageAnchorEl(event.currentTarget);
    };
    const handleSelectLanguage = (locale)=>{
        setLanguageAnchorEl(null);
        if (locale !== undefined) {
            const { pathname , asPath , query  } = router;
            router.push({
                pathname,
                query
            }, asPath, {
                locale: locale
            }).catch((err)=>{
                console.error(err);
            });
        }
    };
    const handleChangeTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
        position: "sticky",
        enableColorOnDark: true,
        sx: {
            backgroundImage: "none"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            maxWidth: "lg",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                disableGutters: true,
                variant: "dense",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: "Go home",
                        enterDelay: 300,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                            component: Link/* default */.C,
                            variant: "contained",
                            disableElevation: true,
                            href: "/",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Home_default()), {
                                    width: 0
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    sx: {
                                        ml: 1,
                                        textTransform: "none"
                                    },
                                    children: "Lulu\u2019s Tools"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            flexGrow: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: "Source code",
                        enterDelay: 300,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            component: Link/* default */.C,
                            variant: "contained",
                            color: "primary",
                            disableElevation: true,
                            href: "https://github.com/pillowfication/ffxiv",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((GitHub_default()), {
                                width: 0
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: "Change language",
                        enterDelay: 300,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                            variant: "contained",
                            color: "primary",
                            disableElevation: true,
                            onClick: handleClickLanguage,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Translate_default()), {
                                    fontSize: "small",
                                    width: 0
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    display: {
                                        xs: "none",
                                        md: "inline-block"
                                    },
                                    px: 1,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((NoSsr_default()), {
                                        children: getLanguage(i18n.language ?? "en")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {
                                    fontSize: "small",
                                    width: 0
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                        anchorEl: languageAnchorEl,
                        marginThreshold: 0,
                        open: Boolean(languageAnchorEl),
                        onClose: handleSelectLanguage.bind(null, undefined),
                        children: Object.keys(LANGUAGES).map((locale)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                onClick: handleSelectLanguage.bind(null, locale),
                                children: getLanguage(locale)
                            }, locale)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                        color: "default",
                        checked: theme === "dark",
                        onChange: handleChangeTheme
                    }),
                    theme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx((DarkMode_default()), {
                        fontSize: "small",
                        width: 0
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((LightMode_default()), {
                        fontSize: "small",
                        width: 0
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const src_Header = (Header);

;// CONCATENATED MODULE: ./src/Footer.tsx





const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        component: "footer",
        textAlign: "center",
        mt: 2,
        mb: 10,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.C, {
            href: "https://www.buymeacoffee.com/pillowfication",
            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "caption",
                children: "buymeacoffee.com/pillowfication"
            })
        })
    });
};
/* harmony default export */ const src_Footer = (Footer);

;// CONCATENATED MODULE: ./src/themes.ts

const lightTheme = (0,styles_.createTheme)({
    palette: {
        mode: "light",
        primary: {
            main: "#0f3d87"
        },
        secondary: {
            main: "#f4511e"
        },
        error: {
            main: "#d32f2f"
        }
    },
    typography: {
        fontSize: 16,
        fontFamily: '"Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        h1: {
            fontSize: "4rem"
        },
        h2: {
            fontSize: "2.5rem"
        },
        h3: {
            fontSize: "2rem"
        },
        h4: {
            fontSize: "1.85rem"
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        },
        MuiTable: {
            defaultProps: {
                size: "small"
            }
        },
        MuiTooltip: {
            defaultProps: {
                arrow: true,
                placement: "top",
                disableInteractive: true
            }
        }
    }
});
const darkTheme = (0,styles_.createTheme)({
    palette: {
        mode: "dark",
        primary: {
            main: "#0f3d87"
        },
        secondary: {
            main: "#f4511e"
        },
        error: {
            main: "#d32f2f"
        },
        background: {
            default: "#121a21",
            paper: "#0f1315"
        }
    },
    typography: {
        fontSize: 16,
        fontFamily: '"Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        h1: {
            fontSize: "4rem"
        },
        h2: {
            fontSize: "2.5rem"
        },
        h3: {
            fontSize: "2rem"
        },
        h4: {
            fontSize: "1.85rem"
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                color: "#5d9bff",
                underline: "hover"
            }
        },
        MuiTable: {
            defaultProps: {
                size: "small"
            }
        },
        MuiTooltip: {
            defaultProps: {
                arrow: true,
                placement: "top",
                disableInteractive: true
            }
        }
    }
});

// EXTERNAL MODULE: ./src/gtag.ts
var gtag = __webpack_require__(211);
;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
const fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(5800);
;// CONCATENATED MODULE: ./pages/_app.tsx

















fontawesome_svg_core_namespaceObject.config.autoAddCss = false;
const clientSideEmotionCache = (0,create_emotion_cache/* default */.Z)();
const App = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    const router = (0,router_.useRouter)();
    const { 0: theme , 1: setTheme  } = (0,external_react_.useState)("light");
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            gtag/* pageview */.LV(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Lulu\u2019s FFXIV Tools"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "minimum-scale=1, initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
                theme: theme === "dark" ? darkTheme : lightTheme,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {
                        enableColorScheme: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(src_Header, {
                        theme: theme,
                        setTheme: setTheme
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                        maxWidth: "lg",
                        component: "main",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(src_Footer, {})
                ]
            })
        ]
    });
};
App.getInitialProps = async (appContext)=>({
        ...await app["default"].getInitialProps(appContext)
    })
;
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(App));


/***/ }),

/***/ 8925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/create-emotion-cache.tsx

function createEmotionCache() {
    return cache_default()({
        key: "css",
        prepend: true
    });
};


/***/ }),

/***/ 211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LV": () => (/* binding */ pageview),
/* harmony export */   "vt": () => (/* binding */ GA_TRACKING_ID)
/* harmony export */ });
/* unused harmony export event */
const GA_TRACKING_ID = "G-5YCJ2BZZ4Q";
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action , category , label , value  })=>{
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};


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

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,586,255], () => (__webpack_exec__(9767)));
module.exports = __webpack_exports__;

})();