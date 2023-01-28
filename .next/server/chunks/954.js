"use strict";
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 2994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "Q": () => (/* binding */ mathJaxRequire)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3534);
/* harmony import */ var _mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_2__);



let calledRender = false;
function queueRenderMath() {
    if (!calledRender) {
        calledRender = true;
        setTimeout(()=>{
            if (typeof MathJax !== "undefined") {
                MathJax.Hub.Queue([
                    "Typeset",
                    MathJax.Hub
                ]);
            }
            calledRender = false;
        }, 0);
    }
}
const MathJaxComponent = ({ math , displayMode =false  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(queueRenderMath, [
        math,
        displayMode
    ]);
    return displayMode ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: `\\[${math}\\]`
    }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: `\\(${math}\\)`
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MathJaxComponent)));
const $ = (math)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MathJaxComponent, {
            math: math
        })
    })
;
const $$ = (math)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MathJaxComponent, {
            math: math,
            displayMode: true
        })
    })
;
const mathJaxRequire = (module)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_NoSsr__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                display: "none"
            },
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MathJaxComponent, {
                math: `\\require{${module}}`
            })
        })
    })
;


/***/ })

};
;