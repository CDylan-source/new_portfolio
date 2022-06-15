"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./pages/portfolio.jsx":
/*!*****************************!*\
  !*** ./pages/portfolio.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Portfolio(param) {\n    var Projets = param.Projets;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"portfolio\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex flex-column\" : \"body_dark d-flex flex-column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-transparent margin-start col-8 mb-4 mb-md-0 py-4 d-flex align-items-center text-center\",\n                children: [\n                    \"       \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: Projets[0].image,\n                                alt: \"Photo du projet\",\n                                className: \"shadow-2-strong mb-5 card-img-top mx-auto\",\n                                style: {\n                                    width: \"220px\",\n                                    height: \"auto\",\n                                    transitionDuration: \"400ms\"\n                                },\n                                width: \"1000\",\n                                height: \"1000\",\n                                layout: \"raw\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 8\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"card-title mb-4\",\n                                style: {\n                                    transitionDuration: \"400ms\",\n                                    transitionDelay: \"500ms\"\n                                },\n                                children: \"Chapuis Dylan\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"card-text mb-4\",\n                                style: {\n                                    transitionDuration: \"400ms\",\n                                    transitionDelay: \".9s\"\n                                },\n                                children: \"D\\xe9veloppeur Web\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-unstyled mb-0 mt-5 row justify-content-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"https://github.com/CDylan-source\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"px-1 col-2\",\n                                        target: \"blank\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 126\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, this);\n};\n_s(Portfolio, \"lnHPCuCuDgk0szXCbswXMuCAx70=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZixTQUFTLEVBQUMsb0RBQW9EOzBDQUMxRCw0RUFBQ3RCLGtEQUFJO29DQUFDc0MsSUFBSSxFQUFDLGtDQUFrQzs4Q0FDM0MsNEVBQUNDLEdBQUM7d0NBQUNqQixTQUFTLEVBQUMsWUFBWTt3Q0FBQ2tCLE1BQU0sRUFBRSxPQUFPOzs7Ozs0Q0FDckM7Ozs7O3dDQUNDOzs7OztvQ0FDUjs7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Y7MEJBQ1IsOERBQUN6Qyx3REFBTTs7OztvQkFBRTs7Ozs7O1lBQ0wsQ0FDTjtDQUNEO0dBdEN1QkcsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BvcnRmb2xpby5qc3g/NDU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vZWxlbWVudHMvaGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2VsZW1lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IHtQcmlzbWFDbGllbnR9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oe1Byb2pldHN9KXtcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgncG9ydGZvbGlvJyk7XG4gICAgY29uc3QgbG9jYWxMaWdodE1vZGUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxJR0hUX01PREVcIikpIDogJyc7XG4gICAgY29uc3QgW2xpZ2h0bW9kZW9uLCBzZXRMaWdodG1vZGVvbl0gPSB1c2VTdGF0ZShsb2NhbExpZ2h0TW9kZSk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TGlnaHRtb2Rlb24oIWxpZ2h0bW9kZW9uKTtcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkxJR0hUX01PREVcIiwgbGlnaHRtb2Rlb24pO1xuICAgICAgICB9XG4gICAgICB9LCBbbGlnaHRtb2Rlb25dKVxuICAgY29uc3QgbGlnaHRfb3JfZGFyayA9IHtcbiAgICAgICAgc3VuOiBsaWdodG1vZGVvbiA/ICcjREU2NDM5JyA6ICcjZmZmJyxcbiAgICAgICAgbW9vbjogbGlnaHRtb2Rlb24gPyAnI2ZmZicgOiAnI0RFNjQzOScsXG4gICAgICAgIG5hdlRvZ2dsZSA6IGxpZ2h0bW9kZW9uID8gJycgOiAnbmF2YmFyLWRhcmsnXG4gICAgfVxuICAgIFxuXG4gIHJldHVybihcbiAgPGRpdiBjbGFzc05hbWU9e2xpZ2h0bW9kZW9uID8gXCJib2R5X2xpZ2h0IGQtZmxleCBmbGV4LWNvbHVtblwiIDogXCJib2R5X2RhcmsgZC1mbGV4IGZsZXgtY29sdW1uXCJ9PlxuICAgIDxIZWFkZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGxpZ2h0X29yX2Rhcms9e2xpZ2h0X29yX2Rhcmt9IGxpZ2h0bW9kZW9uPXtsaWdodG1vZGVvbn0gY3VycmVudFBhZ2U9e3BhZ2V9IG9uTmF2Q2xpY2s9e3NldFBhZ2V9Lz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC10cmFuc3BhcmVudCBtYXJnaW4tc3RhcnQgY29sLTggbWItNCBtYi1tZC0wIHB5LTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgIDxJbWFnZSBzcmM9e1Byb2pldHNbMF0uaW1hZ2V9IGFsdD1cIlBob3RvIGR1IHByb2pldFwiIGNsYXNzTmFtZT1cInNoYWRvdy0yLXN0cm9uZyBtYi01IGNhcmQtaW1nLXRvcCBteC1hdXRvXCIgc3R5bGU9e3t3aWR0aDpcIjIyMHB4XCIsIGhlaWdodDpcImF1dG9cIiwgdHJhbnNpdGlvbkR1cmF0aW9uOlwiNDAwbXNcIn19IHdpZHRoPVwiMTAwMFwiIGhlaWdodD1cIjEwMDBcIiBsYXlvdXQ9XCJyYXdcIi8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBtYi00XCIgc3R5bGU9e3t0cmFuc2l0aW9uRHVyYXRpb246XCI0MDBtc1wiLCB0cmFuc2l0aW9uRGVsYXk6JzUwMG1zJ319PkNoYXB1aXMgRHlsYW48L2gxPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBtYi00XCIgc3R5bGU9e3t0cmFuc2l0aW9uRHVyYXRpb246XCI0MDBtc1wiLCB0cmFuc2l0aW9uRGVsYXk6XCIuOXNcIn19PkTDqXZlbG9wcGV1ciBXZWI8L2g0PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG1iLTAgbXQtNSByb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9DRHlsYW4tc291cmNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTEgY29sLTJcIiB0YXJnZXQ9e1wiYmxhbmtcIn0+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPEZvb3Rlci8+XG4gIDwvZGl2PlxuKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gICAgICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICAgICAgY29uc3QgUHJvamV0cyA9IGF3YWl0IHByaXNtYS5wb3J0Zm9saW9fcHJvamV0cy5maW5kTWFueSh7XG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgcG9ydGZvbGlvX2pvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRmb2xpb190YWdzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgcmV0dXJue1xuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICBQcm9qZXRzICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOjIwMDAsXG4gICAgICB9XG59XG4vLyBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6SHVCZXFEXzFSdGdTemdRSXNHMGRiSU9abDlMTURHWC92aWV3P3VzcD1zaGFyaW5nIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJGb290ZXIiLCJMaW5rIiwiSW1hZ2UiLCJQb3J0Zm9saW8iLCJQcm9qZXRzIiwicGFnZSIsInNldFBhZ2UiLCJsb2NhbExpZ2h0TW9kZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsaWdodG1vZGVvbiIsInNldExpZ2h0bW9kZW9uIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRJdGVtIiwibGlnaHRfb3JfZGFyayIsInN1biIsIm1vb24iLCJuYXZUb2dnbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY3VycmVudFBhZ2UiLCJvbk5hdkNsaWNrIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwibGF5b3V0IiwiaDEiLCJ0cmFuc2l0aW9uRGVsYXkiLCJoNCIsInVsIiwiaHJlZiIsImEiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/portfolio.jsx\n");

/***/ })

});