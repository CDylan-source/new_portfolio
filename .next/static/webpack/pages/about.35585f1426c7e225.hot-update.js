"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./pages/about.jsx":
/*!*************************!*\
  !*** ./pages/about.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _elements_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/button */ \"./pages/elements/button.jsx\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction About() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), fade = ref2[0], setFade = ref2[1];\n    setTimeout(function() {\n        setFade(true);\n    }, 300);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex flex-column\" : \"body_dark d-flex flex-column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex flex-column margin-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-transparent mb-4 p-4 d-flex align-items-center text-center col-md-6 col-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Fade, {\n                            in: fade,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text fs-5\",\n                                style: {\n                                    transitionDuration: \"500ms\",\n                                    transitionDelay: \"400ms\"\n                                },\n                                children: \"Depuis toujours passionn\\xe9 par l\\u2019informatique et les nouvelles technologies, j\\u2019ai rejoint la formation de d\\xe9veloppeur web au sein de l\\u2019Access Code School en avril 2021.\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-transparent mb-4 p-4 d-flex align-items-center text-center col-md-6 offset-md-6 col-8 offset-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Fade, {\n                            in: fade,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text fs-5\",\n                                style: {\n                                    transitionDuration: \"500ms\",\n                                    transitionDelay: \"900ms\"\n                                },\n                                children: \"\\xc7a a \\xe9t\\xe9 pour moi une r\\xe9elle r\\xe9v\\xe9lation, le plaisir de transformer l\\u2019abstrait en concret, le code en page web, m\\u2019a rappel\\xe9 ma premi\\xe8re passion, les math\\xe9matiques.\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-transparent mb-4 p-4 d-flex align-items-center text-center col-md-6 col-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Fade, {\n                            in: fade,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text fs-5\",\n                                style: {\n                                    transitionDuration: \"500ms\",\n                                    transitionDelay: \"1400ms\"\n                                },\n                                children: \"Je me plais \\xe0 continuer d\\u2019apprendre et effectuer mes veilles technologiques. R\\xe9cemment, c\\u2019est sur React que mon d\\xe9volu s\\u2019est jet\\xe9, ce framework associ\\xe9 \\xe0 Nextjs est d\\u2019une impressionante efficacit\\xe9.\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                href: \"\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 64,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n        lineNumber: 44,\n        columnNumber: 3\n    }, this);\n};\n_s(About, \"u7qjU9cMFOw72SlssU/ecrteEVc=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQ0MsU0FBUyxFQUFDLHFGQUFxRjtrQ0FDbEcsNEVBQUN4QixpREFBSTs0QkFBQzRCLEVBQUUsRUFBRVIsSUFBSTtzQ0FDWiw0RUFBQ1MsR0FBQztnQ0FBQ0wsU0FBUyxFQUFDLGdCQUFnQjtnQ0FBQ00sS0FBSyxFQUFFO29DQUFDQyxrQkFBa0IsRUFBQyxPQUFPO29DQUFFQyxlQUFlLEVBQUMsUUFBUTtpQ0FBQzswQ0FBRSxnUEFBcU07Ozs7O29DQUFJOzs7OztnQ0FDalM7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUMvQix3REFBTTtnQkFBQ2dDLElBQUksRUFBQyxFQUFFOzBCQUFDLFdBQVM7Ozs7O29CQUFTOzBCQUNsQyw4REFBQ2xDLHdEQUFNOzs7O29CQUFFOzs7Ozs7WUFDTCxDQUNOO0NBQ0Q7R0F4RHVCRyxLQUFLO0FBQUxBLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanN4PzUzYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2VsZW1lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9lbGVtZW50cy9mb290ZXJcIjtcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2VsZW1lbnRzL2J1dHRvblwiO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKCdhYm91dCcpO1xuICBjb25zdCBsb2NhbExpZ2h0TW9kZSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTElHSFRfTU9ERVwiKSkgOiAnJztcbiAgY29uc3QgW2xpZ2h0bW9kZW9uLCBzZXRMaWdodG1vZGVvbl0gPSB1c2VTdGF0ZShsb2NhbExpZ2h0TW9kZSk7XG5cbiBcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldExpZ2h0bW9kZW9uKCFsaWdodG1vZGVvbik7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkxJR0hUX01PREVcIiwgbGlnaHRtb2Rlb24pO1xuICAgICAgICB9XG4gICAgICB9LCBbbGlnaHRtb2Rlb25dKVxuXG4gICAgXG4gICBjb25zdCBsaWdodF9vcl9kYXJrID0ge1xuICAgICAgICBzdW46IGxpZ2h0bW9kZW9uID8gJyNERTY0MzknIDogJyNmZmYnLFxuICAgICAgICBtb29uOiBsaWdodG1vZGVvbiA/ICcjZmZmJyA6ICcjREU2NDM5JyxcbiAgICAgICAgbmF2VG9nZ2xlIDogbGlnaHRtb2Rlb24gPyAnJyA6ICduYXZiYXItZGFyaydcbiAgICB9XG5cbiAgICBjb25zdFtmYWRlLCBzZXRGYWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0RmFkZSh0cnVlKVxuICAgIH0sIDMwMClcblxuICByZXR1cm4oXG4gIDxkaXYgY2xhc3NOYW1lPXtsaWdodG1vZGVvbiA/IFwiYm9keV9saWdodCBkLWZsZXggZmxleC1jb2x1bW5cIiA6IFwiYm9keV9kYXJrIGQtZmxleCBmbGV4LWNvbHVtblwifT5cbiAgICA8SGVhZGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBsaWdodF9vcl9kYXJrPXtsaWdodF9vcl9kYXJrfSBsaWdodG1vZGVvbj17bGlnaHRtb2Rlb259IGN1cnJlbnRQYWdlPXtwYWdlfSBvbk5hdkNsaWNrPXtzZXRQYWdlfS8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGZsZXgtY29sdW1uIG1hcmdpbi1zdGFydFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtdHJhbnNwYXJlbnQgbWItNCBwLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBjb2wtbWQtNiBjb2wtOFwiPlxuICAgICAgICA8RmFkZSBpbj17ZmFkZX0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZzLTVcIiBzdHlsZT17e3RyYW5zaXRpb25EdXJhdGlvbjpcIjUwMG1zXCIsIHRyYW5zaXRpb25EZWxheTpcIjQwMG1zXCJ9fT5EZXB1aXMgdG91am91cnMgcGFzc2lvbm7DqSBwYXIgbOKAmWluZm9ybWF0aXF1ZSBldCBsZXMgbm91dmVsbGVzIHRlY2hub2xvZ2llcywgauKAmWFpIHJlam9pbnQgbGEgZm9ybWF0aW9uIGRlIGTDqXZlbG9wcGV1ciB3ZWIgYXUgc2VpbiBkZSBs4oCZQWNjZXNzIENvZGUgU2Nob29sIGVuIGF2cmlsIDIwMjEuPC9wPlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLXRyYW5zcGFyZW50IG1iLTQgcC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgY29sLW1kLTYgb2Zmc2V0LW1kLTYgY29sLTggb2Zmc2V0LTRcIj5cbiAgICAgICAgPEZhZGUgaW49e2ZhZGV9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmcy01XCIgc3R5bGU9e3t0cmFuc2l0aW9uRHVyYXRpb246XCI1MDBtc1wiLCB0cmFuc2l0aW9uRGVsYXk6XCI5MDBtc1wifX0+w4dhIGEgw6l0w6kgcG91ciBtb2kgdW5lIHLDqWVsbGUgcsOpdsOpbGF0aW9uLCBsZSBwbGFpc2lyIGRlIHRyYW5zZm9ybWVyIGzigJlhYnN0cmFpdCBlbiBjb25jcmV0LCBsZSBjb2RlIGVuIHBhZ2Ugd2ViLCBt4oCZYSByYXBwZWzDqSBtYSBwcmVtacOocmUgcGFzc2lvbiwgbGVzIG1hdGjDqW1hdGlxdWVzLjwvcD5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC10cmFuc3BhcmVudCBtYi00IHAtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGNvbC1tZC02IGNvbC04XCI+XG4gICAgICAgIDxGYWRlIGluPXtmYWRlfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgZnMtNVwiIHN0eWxlPXt7dHJhbnNpdGlvbkR1cmF0aW9uOlwiNTAwbXNcIiwgdHJhbnNpdGlvbkRlbGF5OlwiMTQwMG1zXCJ9fT5KZSBtZSBwbGFpcyDDoCBjb250aW51ZXIgZOKAmWFwcHJlbmRyZSBldCBlZmZlY3R1ZXIgbWVzIHZlaWxsZXMgdGVjaG5vbG9naXF1ZXMuIFLDqWNlbW1lbnQsIGPigJllc3Qgc3VyIFJlYWN0IHF1ZSBtb24gZMOpdm9sdSBz4oCZZXN0IGpldMOpLCBjZSBmcmFtZXdvcmsgYXNzb2Npw6kgw6AgTmV4dGpzIGVzdCBk4oCZdW5lIGltcHJlc3Npb25hbnRlIGVmZmljYWNpdMOpLjwvcD5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPEJ1dHRvbiBocmVmPScnPlBvcnRmb2xpbzwvQnV0dG9uPlxuICAgIDxGb290ZXIvPlxuICA8L2Rpdj5cbik7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJGb290ZXIiLCJGYWRlIiwiQnV0dG9uIiwiQWJvdXQiLCJwYWdlIiwic2V0UGFnZSIsImxvY2FsTGlnaHRNb2RlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxpZ2h0bW9kZW9uIiwic2V0TGlnaHRtb2Rlb24iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEl0ZW0iLCJsaWdodF9vcl9kYXJrIiwic3VuIiwibW9vbiIsIm5hdlRvZ2dsZSIsImZhZGUiLCJzZXRGYWRlIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjdXJyZW50UGFnZSIsIm9uTmF2Q2xpY2siLCJpbiIsInAiLCJzdHlsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25EZWxheSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.jsx\n");

/***/ })

});