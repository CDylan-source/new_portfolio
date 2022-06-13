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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction About() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), fade = ref2[0], setFade = ref2[1];\n    setTimeout(function() {\n        setFade(true);\n    }, 300);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex flex-column\" : \"body_dark d-flex flex-column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex flex-column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-transparent mb-4 mb-md-0 p-4 d-flex align-items-center text-center col-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n                            in: fade,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text\",\n                                style: {\n                                    transitionDuration: \"800ms\",\n                                    transitionDelay: \"400ms\"\n                                },\n                                children: \"Depuis toujours passionn\\xe9 par l\\u2019informatique et les nouvelles technologies, j\\u2019ai rejoint la formation de d\\xe9veloppeur web au sein de l\\u2019Access Code School en avril 2021.\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-transparent mb-4 mb-md-0 p-4 d-flex align-items-center text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n                            in: fade,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text\",\n                                style: {\n                                    transitionDuration: \"800ms\",\n                                    transitionDelay: \"1200ms\"\n                                },\n                                children: \"Depuis toujours passionn\\xe9 par l\\u2019informatique et les nouvelles technologies, j\\u2019ai rejoint la formation de d\\xe9veloppeur web au sein de l\\u2019Access Code School en avril 2021.\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-transparent mb-4 mb-md-0 p-4 d-flex align-items-center text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n                            in: fade,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text\",\n                                style: {\n                                    transitionDuration: \"800ms\",\n                                    transitionDelay: \"2000ms\"\n                                },\n                                children: \"Depuis toujours passionn\\xe9 par l\\u2019informatique et les nouvelles technologies, j\\u2019ai rejoint la formation de d\\xe9veloppeur web au sein de l\\u2019Access Code School en avril 2021.\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n        lineNumber: 43,\n        columnNumber: 3\n    }, this);\n};\n_s(About, \"u7qjU9cMFOw72SlssU/ecrteEVc=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsOEVBQThFO2tDQUMzRiw0RUFBQ3ZCLGlEQUFJOzRCQUFDMkIsRUFBRSxFQUFFUixJQUFJO3NDQUNaLDRFQUFDUyxHQUFDO2dDQUFDTCxTQUFTLEVBQUMsV0FBVztnQ0FBQ00sS0FBSyxFQUFFO29DQUFDQyxrQkFBa0IsRUFBQyxPQUFPO29DQUFFQyxlQUFlLEVBQUMsUUFBUTtpQ0FBQzswQ0FBRSw4TEFBdUs7Ozs7O29DQUFJOzs7OztnQ0FDOVA7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNoQyx3REFBTTs7OztvQkFBRTs7Ozs7O1lBQ0wsQ0FDTjtDQUNEO0dBdkR1QkUsS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fib3V0LmpzeD81M2I0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9lbGVtZW50cy9oZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZWxlbWVudHMvZm9vdGVyXCI7XG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKCdhYm91dCcpO1xuICBjb25zdCBsb2NhbExpZ2h0TW9kZSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTElHSFRfTU9ERVwiKSkgOiAnJztcbiAgY29uc3QgW2xpZ2h0bW9kZW9uLCBzZXRMaWdodG1vZGVvbl0gPSB1c2VTdGF0ZShsb2NhbExpZ2h0TW9kZSk7XG5cbiBcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldExpZ2h0bW9kZW9uKCFsaWdodG1vZGVvbik7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkxJR0hUX01PREVcIiwgbGlnaHRtb2Rlb24pO1xuICAgICAgICB9XG4gICAgICB9LCBbbGlnaHRtb2Rlb25dKVxuXG4gICAgXG4gICBjb25zdCBsaWdodF9vcl9kYXJrID0ge1xuICAgICAgICBzdW46IGxpZ2h0bW9kZW9uID8gJyNERTY0MzknIDogJyNmZmYnLFxuICAgICAgICBtb29uOiBsaWdodG1vZGVvbiA/ICcjZmZmJyA6ICcjREU2NDM5JyxcbiAgICAgICAgbmF2VG9nZ2xlIDogbGlnaHRtb2Rlb24gPyAnJyA6ICduYXZiYXItZGFyaydcbiAgICB9XG5cbiAgICBjb25zdFtmYWRlLCBzZXRGYWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0RmFkZSh0cnVlKVxuICAgIH0sIDMwMClcblxuICByZXR1cm4oXG4gIDxkaXYgY2xhc3NOYW1lPXtsaWdodG1vZGVvbiA/IFwiYm9keV9saWdodCBkLWZsZXggZmxleC1jb2x1bW5cIiA6IFwiYm9keV9kYXJrIGQtZmxleCBmbGV4LWNvbHVtblwifT5cbiAgICA8SGVhZGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBsaWdodF9vcl9kYXJrPXtsaWdodF9vcl9kYXJrfSBsaWdodG1vZGVvbj17bGlnaHRtb2Rlb259IGN1cnJlbnRQYWdlPXtwYWdlfSBvbk5hdkNsaWNrPXtzZXRQYWdlfS8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC10cmFuc3BhcmVudCBtYi00IG1iLW1kLTAgcC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgY29sLTZcIj5cbiAgICAgICAgPEZhZGUgaW49e2ZhZGV9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIHN0eWxlPXt7dHJhbnNpdGlvbkR1cmF0aW9uOlwiODAwbXNcIiwgdHJhbnNpdGlvbkRlbGF5OlwiNDAwbXNcIn19PkRlcHVpcyB0b3Vqb3VycyBwYXNzaW9ubsOpIHBhciBs4oCZaW5mb3JtYXRpcXVlIGV0IGxlcyBub3V2ZWxsZXMgdGVjaG5vbG9naWVzLCBq4oCZYWkgcmVqb2ludCBsYSBmb3JtYXRpb24gZGUgZMOpdmVsb3BwZXVyIHdlYiBhdSBzZWluIGRlIGzigJlBY2Nlc3MgQ29kZSBTY2hvb2wgZW4gYXZyaWwgMjAyMS48L3A+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtdHJhbnNwYXJlbnQgbWItNCBtYi1tZC0wIHAtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxGYWRlIGluPXtmYWRlfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiBzdHlsZT17e3RyYW5zaXRpb25EdXJhdGlvbjpcIjgwMG1zXCIsIHRyYW5zaXRpb25EZWxheTpcIjEyMDBtc1wifX0+RGVwdWlzIHRvdWpvdXJzIHBhc3Npb25uw6kgcGFyIGzigJlpbmZvcm1hdGlxdWUgZXQgbGVzIG5vdXZlbGxlcyB0ZWNobm9sb2dpZXMsIGrigJlhaSByZWpvaW50IGxhIGZvcm1hdGlvbiBkZSBkw6l2ZWxvcHBldXIgd2ViIGF1IHNlaW4gZGUgbOKAmUFjY2VzcyBDb2RlIFNjaG9vbCBlbiBhdnJpbCAyMDIxLjwvcD5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC10cmFuc3BhcmVudCBtYi00IG1iLW1kLTAgcC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPEZhZGUgaW49e2ZhZGV9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIHN0eWxlPXt7dHJhbnNpdGlvbkR1cmF0aW9uOlwiODAwbXNcIiwgdHJhbnNpdGlvbkRlbGF5OlwiMjAwMG1zXCJ9fT5EZXB1aXMgdG91am91cnMgcGFzc2lvbm7DqSBwYXIgbOKAmWluZm9ybWF0aXF1ZSBldCBsZXMgbm91dmVsbGVzIHRlY2hub2xvZ2llcywgauKAmWFpIHJlam9pbnQgbGEgZm9ybWF0aW9uIGRlIGTDqXZlbG9wcGV1ciB3ZWIgYXUgc2VpbiBkZSBs4oCZQWNjZXNzIENvZGUgU2Nob29sIGVuIGF2cmlsIDIwMjEuPC9wPlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyLz5cbiAgPC9kaXY+XG4pO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwiRm9vdGVyIiwiRmFkZSIsIkFib3V0IiwicGFnZSIsInNldFBhZ2UiLCJsb2NhbExpZ2h0TW9kZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsaWdodG1vZGVvbiIsInNldExpZ2h0bW9kZW9uIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRJdGVtIiwibGlnaHRfb3JfZGFyayIsInN1biIsIm1vb24iLCJuYXZUb2dnbGUiLCJmYWRlIiwic2V0RmFkZSIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY3VycmVudFBhZ2UiLCJvbk5hdkNsaWNrIiwiaW4iLCJwIiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.jsx\n");

/***/ })

});