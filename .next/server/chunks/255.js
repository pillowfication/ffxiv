"use strict";
exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 7255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export NextLinkComposed */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);







const Anchor = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)("a")({});
const NextLinkComposed = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function NextLinkComposed(props, ref) {
    const { to , linkAs , replace , scroll , shallow , prefetch , locale , ...other } = props;
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: to,
        prefetch: prefetch,
        as: linkAs,
        replace: replace,
        scroll: scroll,
        shallow: shallow,
        passHref: true,
        locale: locale,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Anchor, {
            ref: ref,
            ...other
        })
    });
});
const Link = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function Link(props, ref) {
    const { activeClassName ="active" , as , className: classNameProps , href , linkAs: linkAsProp , locale , noLinkStyle =false , prefetch , replace , role , scroll , shallow , ...other } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const pathname = typeof href === "string" ? href : href.pathname;
    const className = clsx__WEBPACK_IMPORTED_MODULE_2___default()(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName
    });
    const isExternal = typeof href === "string" && (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);
    if (isExternal) {
        if (noLinkStyle) {
            return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Anchor, {
                className: className,
                href: href,
                ref: ref,
                ...other
            });
        }
        return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: className,
            href: href,
            ref: ref,
            ...other
        });
    }
    const linkAs = linkAsProp ?? as;
    const nextjsProps = {
        to: href,
        linkAs,
        replace,
        scroll,
        shallow,
        prefetch,
        locale
    };
    if (noLinkStyle) {
        return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextLinkComposed, {
            className: className,
            ref: ref,
            ...nextjsProps,
            ...other
        });
    }
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {
        component: NextLinkComposed,
        className: className,
        ref: ref,
        ...nextjsProps,
        ...other
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ })

};
;