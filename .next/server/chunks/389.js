"use strict";
exports.id = 389;
exports.ids = [389];
exports.modules = {

/***/ 7389:
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
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9580);
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7255);










const NavigationBar = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("ocean-fishing");
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
        component: "nav",
        sx: {
            textAlign: "center",
            mb: 2
        },
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_5___default()), {
            variant: "contained",
            children: [
                {
                    url: "/",
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faHome,
                    name: "_title"
                },
                {
                    url: "/about",
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faQuestionCircle,
                    name: "aboutPage._title"
                },
                {
                    url: "/fish",
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faFish,
                    name: "fishPage._title"
                },
                {
                    url: "/bonuses",
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faStar,
                    name: "bonusesPage._title"
                }
            ].map(({ url , icon , name  })=>/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                    component: _src_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .C,
                    href: `/ocean-fishing${url}`,
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sx: {
                                display: "inline-block",
                                mr: {
                                    xs: 0,
                                    sm: 1
                                },
                                fontSize: {
                                    xs: "1.5em",
                                    sm: "1em"
                                }
                            },
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
                                icon: icon
                            })
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                display: {
                                    xs: "none",
                                    sm: "inline"
                                },
                                textTransform: "none"
                            },
                            children: t(name)
                        })
                    ]
                }, url)
            )
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(NavigationBar));


/***/ })

};
;