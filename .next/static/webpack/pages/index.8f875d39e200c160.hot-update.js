"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Site; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Fade */ \"./node_modules/react-bootstrap/esm/Fade.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Site() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"home\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), fade = ref2[0], setFade = ref2[1];\n    setTimeout(function() {\n        setFade(true);\n    }, 300);\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex \" : \"body_dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-transparent col-8 mb-4 mb-md-0 py-4 d-flex align-items-center text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                in: fade,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"shadow-2-strong mb-5 card-img-top mx-auto\",\n                                    src: \"05.png\",\n                                    style: {\n                                        width: \"120px\",\n                                        transitionDuration: \"800ms\",\n                                        transitionDelay: \"200ms\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                in: fade,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"card-title mb-4\",\n                                    style: {\n                                        transitionDuration: \"800ms\",\n                                        transitionDelay: \"1s\"\n                                    },\n                                    children: \"Chapuis Dylan\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                in: fade,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"card-text mb-4\",\n                                    style: {\n                                        transitionDuration: \"800ms\",\n                                        transitionDelay: \"1.5s\"\n                                    },\n                                    children: \"D\\xe9veloppeur Web\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-unstyled mb-0 mt-5 row justify-content-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"https://github.com/CDylan-source\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"px-1 col-2\",\n                                            target: \"blank\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGithub\n                                            }, void 0, false, {\n                                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"https://www.linkedin.com/in/chapuis-dylan-373679210/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"px-1 col-2\",\n                                            target: \"blank\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faLinkedin\n                                            }, void 0, false, {\n                                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-center mt-5 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Bienvenue sur mon Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 73,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 76,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n        lineNumber: 44,\n        columnNumber: 3\n    }, this);\n};\n_s(Site, \"tF07upmB31wMZ5mt/XyiH3IvFog=\");\n_c = Site;\nvar _c;\n$RefreshReg$(_c, \"Site\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEc7MENBQ1AsOERBQUN0Qyw0REFBSTtnQ0FBQ2dDLEVBQUUsRUFBRWhCLElBQUk7MENBQ1osNEVBQUN3QixJQUFFO29DQUFDWixTQUFTLEVBQUMsZ0JBQWdCO29DQUFDTyxLQUFLLEVBQUU7d0NBQUNFLGtCQUFrQixFQUFDLE9BQU87d0NBQUVDLGVBQWUsRUFBQyxNQUFNO3FDQUFDOzhDQUFFLG9CQUFlOzs7Ozt3Q0FBSzs7Ozs7b0NBQzNHOzBDQUNQLDhEQUFDRyxJQUFFO2dDQUFDYixTQUFTLEVBQUMsb0RBQW9EOztrREFDMUQsOERBQUN4QixrREFBSTt3Q0FBQ3NDLElBQUksRUFBQyxrQ0FBa0M7a0RBQzNDLDRFQUFDQyxHQUFDOzRDQUFDZixTQUFTLEVBQUMsWUFBWTs0Q0FBQ2dCLE1BQU0sRUFBRSxPQUFPO3NEQUNyQyw0RUFBQzNDLDJFQUFlO2dEQUFDNEMsSUFBSSxFQUFFM0Msd0VBQVE7Ozs7O29EQUFHOzs7OztnREFDbEM7Ozs7OzRDQUNDO2tEQUNQLDhEQUFDRSxrREFBSTt3Q0FBQ3NDLElBQUksRUFBQyxzREFBc0Q7a0RBQy9ELDRFQUFDQyxHQUFDOzRDQUFDZixTQUFTLEVBQUMsWUFBWTs0Q0FBQ2dCLE1BQU0sRUFBRSxPQUFPO3NEQUNyQyw0RUFBQzNDLDJFQUFlO2dEQUFDNEMsSUFBSSxFQUFFMUMsMEVBQVU7Ozs7O29EQUFHOzs7OztnREFDcEM7Ozs7OzRDQUNDOzs7Ozs7b0NBQ1I7Ozs7Ozs0QkFDSDs7Ozs7d0JBQ0Y7Ozs7O29CQUNGOzBCQUNOLDhEQUFDd0IsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDBEQUEwRDswQkFDdkUsNEVBQUNrQixJQUFFOzhCQUFDLDZCQUEyQjs7Ozs7d0JBQUs7Ozs7O29CQUNoQzswQkFDTiw4REFBQ3pDLHdEQUFNOzs7O29CQUFFOzs7Ozs7WUFDTCxDQUNOO0NBQ0Q7R0FuRXVCQyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2VsZW1lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ZhZGUnO1xuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQge2ZhR2l0aHViLCBmYUxpbmtlZGlufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZWxlbWVudHMvZm9vdGVyXCI7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpdGUoKSB7XG5cbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoJ2hvbWUnKTtcbiAgY29uc3QgbG9jYWxMaWdodE1vZGUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxJR0hUX01PREVcIikpIDogJyc7XG4gIGNvbnN0IFtsaWdodG1vZGVvbiwgc2V0TGlnaHRtb2Rlb25dID0gdXNlU3RhdGUobG9jYWxMaWdodE1vZGUpO1xuICBjb25zdFtmYWRlLCBzZXRGYWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0RmFkZSh0cnVlKVxuICAgIH0sIDMwMClcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldExpZ2h0bW9kZW9uKCFsaWdodG1vZGVvbik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMSUdIVF9NT0RFXCIsIGxpZ2h0bW9kZW9uKTtcbiAgICAgICAgfVxuICAgICAgfSwgW2xpZ2h0bW9kZW9uXSlcblxuICAgIFxuICAgY29uc3QgbGlnaHRfb3JfZGFyayA9IHtcbiAgICAgICAgc3VuOiBsaWdodG1vZGVvbiA/ICcjREU2NDM5JyA6ICcjZmZmJyxcbiAgICAgICAgbW9vbjogbGlnaHRtb2Rlb24gPyAnI2ZmZicgOiAnI0RFNjQzOScsXG4gICAgICAgIG5hdlRvZ2dsZSA6IGxpZ2h0bW9kZW9uID8gJycgOiAnbmF2YmFyLWRhcmsnXG4gICAgfVxuXG5cbiAgcmV0dXJuKFxuICA8ZGl2IGNsYXNzTmFtZT17bGlnaHRtb2Rlb24gPyBcImJvZHlfbGlnaHQgZC1mbGV4IFwiIDogXCJib2R5X2RhcmtcIn0+XG4gICAgPEhlYWRlciBvbkNsaWNrPXtoYW5kbGVDbGlja30gbGlnaHRfb3JfZGFyaz17bGlnaHRfb3JfZGFya30gbGlnaHRtb2Rlb249e2xpZ2h0bW9kZW9ufSBjdXJyZW50UGFnZT17cGFnZX0gb25OYXZDbGljaz17c2V0UGFnZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLXRyYW5zcGFyZW50IGNvbC04IG1iLTQgbWItbWQtMCBweS00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxGYWRlIGluPXtmYWRlfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2hhZG93LTItc3Ryb25nIG1iLTUgY2FyZC1pbWctdG9wIG14LWF1dG9cIiBzcmM9XCIwNS5wbmdcIiBzdHlsZT17e3dpZHRoOlwiMTIwcHhcIiwgdHJhbnNpdGlvbkR1cmF0aW9uOlwiODAwbXNcIiwgdHJhbnNpdGlvbkRlbGF5OlwiMjAwbXNcIn19Lz5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPEZhZGUgaW49e2ZhZGV9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgbWItNFwiIHN0eWxlPXt7dHJhbnNpdGlvbkR1cmF0aW9uOlwiODAwbXNcIiwgdHJhbnNpdGlvbkRlbGF5Oicxcyd9fT5DaGFwdWlzIER5bGFuPC9oMT5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPEZhZGUgaW49e2ZhZGV9PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBtYi00XCIgc3R5bGU9e3t0cmFuc2l0aW9uRHVyYXRpb246XCI4MDBtc1wiLCB0cmFuc2l0aW9uRGVsYXk6XCIxLjVzXCJ9fT5Ew6l2ZWxvcHBldXIgV2ViPC9oND5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgbWItMCBtdC01IHJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NEeWxhbi1zb3VyY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtMSBjb2wtMlwiIHRhcmdldD17XCJibGFua1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jaGFwdWlzLWR5bGFuLTM3MzY3OTIxMC9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtMSBjb2wtMlwiIHRhcmdldD17XCJibGFua1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rZWRpbn0vPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTUgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxoMj5CaWVudmVudWUgc3VyIG1vbiBQb3J0Zm9saW88L2gyPlxuICAgIDwvZGl2PlxuICAgIDxGb290ZXIvPlxuICA8L2Rpdj5cbik7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJGYWRlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFHaXRodWIiLCJmYUxpbmtlZGluIiwiTGluayIsIkZvb3RlciIsIlNpdGUiLCJwYWdlIiwic2V0UGFnZSIsImxvY2FsTGlnaHRNb2RlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxpZ2h0bW9kZW9uIiwic2V0TGlnaHRtb2Rlb24iLCJmYWRlIiwic2V0RmFkZSIsInNldFRpbWVvdXQiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEl0ZW0iLCJsaWdodF9vcl9kYXJrIiwic3VuIiwibW9vbiIsIm5hdlRvZ2dsZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjdXJyZW50UGFnZSIsIm9uTmF2Q2xpY2siLCJpbiIsImltZyIsInNyYyIsInN0eWxlIiwid2lkdGgiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJoMSIsImg0IiwidWwiLCJocmVmIiwiYSIsInRhcmdldCIsImljb24iLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});