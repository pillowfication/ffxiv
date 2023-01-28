"use strict";
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 7556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7079);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6847);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_hljs_javascript__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_latex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8911);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_latex__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_hljs_latex__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_typescript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2298);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_typescript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_hljs_typescript__WEBPACK_IMPORTED_MODULE_8__);





 // eslint-disable-line



react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.Light.registerLanguage("javascript", (react_syntax_highlighter_dist_cjs_languages_hljs_javascript__WEBPACK_IMPORTED_MODULE_6___default()));
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.Light.registerLanguage("latex", (react_syntax_highlighter_dist_cjs_languages_hljs_latex__WEBPACK_IMPORTED_MODULE_7___default()));
react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.Light.registerLanguage("typescript", (react_syntax_highlighter_dist_cjs_languages_hljs_typescript__WEBPACK_IMPORTED_MODULE_8___default()));
const Highlight = ({ language , sx , children  })=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {
        component: react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.Light,
        variant: "outlined",
        language: language,
        style: theme.palette.mode === "dark" ? react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__.atomOneDark : react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__.github,
        sx: sx,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Highlight);


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


/***/ })

};
;