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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Site; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Fade */ \"./node_modules/react-bootstrap/esm/Fade.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Site() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"home\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), fade = ref2[0], setFade = ref2[1];\n    setTimeout(function() {\n        setFade(true);\n    }, 300);\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex flex-column\" : \"body_dark d-flex flex-column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-transparent col-8 mb-4 mb-md-0 py-4 d-flex align-items-center text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                in: fade,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"shadow-2-strong mb-5 card-img-top mx-auto\",\n                                    src: \"05.png\",\n                                    style: {\n                                        width: \"120px\",\n                                        transitionDuration: \"800ms\",\n                                        transitionDelay: \"200ms\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                in: fade,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"card-title mb-4\",\n                                    style: {\n                                        transitionDuration: \"800ms\",\n                                        transitionDelay: \"1s\"\n                                    },\n                                    children: \"Chapuis Dylan\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                in: fade,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"card-text mb-4\",\n                                    style: {\n                                        transitionDuration: \"800ms\",\n                                        transitionDelay: \"1.5s\"\n                                    },\n                                    children: \"D\\xe9veloppeur Web\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-unstyled mb-0 mt-5 row justify-content-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"https://github.com/CDylan-source\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"px-1 col-2\",\n                                            target: \"blank\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGithub\n                                            }, void 0, false, {\n                                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"https://www.linkedin.com/in/chapuis-dylan-373679210/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"px-1 col-2\",\n                                            target: \"blank\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faLinkedin\n                                            }, void 0, false, {\n                                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-center my-2 my-sm-2 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Bienvenue sur mon Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 73,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 76,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n        lineNumber: 44,\n        columnNumber: 3\n    }, this);\n};\n_s(Site, \"tF07upmB31wMZ5mt/XyiH3IvFog=\");\n_c = Site;\nvar _c;\n$RefreshReg$(_c, \"Site\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4RzswQ0FDUCw4REFBQ3RDLDREQUFJO2dDQUFDZ0MsRUFBRSxFQUFFaEIsSUFBSTswQ0FDWiw0RUFBQ3dCLElBQUU7b0NBQUNaLFNBQVMsRUFBQyxnQkFBZ0I7b0NBQUNPLEtBQUssRUFBRTt3Q0FBQ0Usa0JBQWtCLEVBQUMsT0FBTzt3Q0FBRUMsZUFBZSxFQUFDLE1BQU07cUNBQUM7OENBQUUsb0JBQWU7Ozs7O3dDQUFLOzs7OztvQ0FDM0c7MENBQ1AsOERBQUNHLElBQUU7Z0NBQUNiLFNBQVMsRUFBQyxvREFBb0Q7O2tEQUMxRCw4REFBQ3hCLGtEQUFJO3dDQUFDc0MsSUFBSSxFQUFDLGtDQUFrQztrREFDM0MsNEVBQUNDLEdBQUM7NENBQUNmLFNBQVMsRUFBQyxZQUFZOzRDQUFDZ0IsTUFBTSxFQUFFLE9BQU87c0RBQ3JDLDRFQUFDM0MsMkVBQWU7Z0RBQUM0QyxJQUFJLEVBQUUzQyx3RUFBUTs7Ozs7b0RBQUc7Ozs7O2dEQUNsQzs7Ozs7NENBQ0M7a0RBQ1AsOERBQUNFLGtEQUFJO3dDQUFDc0MsSUFBSSxFQUFDLHNEQUFzRDtrREFDL0QsNEVBQUNDLEdBQUM7NENBQUNmLFNBQVMsRUFBQyxZQUFZOzRDQUFDZ0IsTUFBTSxFQUFFLE9BQU87c0RBQ3JDLDRFQUFDM0MsMkVBQWU7Z0RBQUM0QyxJQUFJLEVBQUUxQywwRUFBVTs7Ozs7b0RBQUc7Ozs7O2dEQUNwQzs7Ozs7NENBQ0M7Ozs7OztvQ0FDUjs7Ozs7OzRCQUNIOzs7Ozt3QkFDRjs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUN3QixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsa0VBQWtFOzBCQUMvRSw0RUFBQ2tCLElBQUU7OEJBQUMsNkJBQTJCOzs7Ozt3QkFBSzs7Ozs7b0JBQ2hDOzBCQUNOLDhEQUFDekMsd0RBQU07Ozs7b0JBQUU7Ozs7OztZQUNMLENBQ047Q0FDRDtHQW5FdUJDLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vZWxlbWVudHMvaGVhZGVyXCI7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1ib290c3RyYXAvRmFkZSc7XG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7ZmFHaXRodWIsIGZhTGlua2VkaW59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9lbGVtZW50cy9mb290ZXJcIjtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2l0ZSgpIHtcblxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgnaG9tZScpO1xuICBjb25zdCBsb2NhbExpZ2h0TW9kZSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTElHSFRfTU9ERVwiKSkgOiAnJztcbiAgY29uc3QgW2xpZ2h0bW9kZW9uLCBzZXRMaWdodG1vZGVvbl0gPSB1c2VTdGF0ZShsb2NhbExpZ2h0TW9kZSk7XG4gIGNvbnN0W2ZhZGUsIHNldEZhZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRGYWRlKHRydWUpXG4gICAgfSwgMzAwKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TGlnaHRtb2Rlb24oIWxpZ2h0bW9kZW9uKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkxJR0hUX01PREVcIiwgbGlnaHRtb2Rlb24pO1xuICAgICAgICB9XG4gICAgICB9LCBbbGlnaHRtb2Rlb25dKVxuXG4gICAgXG4gICBjb25zdCBsaWdodF9vcl9kYXJrID0ge1xuICAgICAgICBzdW46IGxpZ2h0bW9kZW9uID8gJyNERTY0MzknIDogJyNmZmYnLFxuICAgICAgICBtb29uOiBsaWdodG1vZGVvbiA/ICcjZmZmJyA6ICcjREU2NDM5JyxcbiAgICAgICAgbmF2VG9nZ2xlIDogbGlnaHRtb2Rlb24gPyAnJyA6ICduYXZiYXItZGFyaydcbiAgICB9XG5cblxuICByZXR1cm4oXG4gIDxkaXYgY2xhc3NOYW1lPXtsaWdodG1vZGVvbiA/IFwiYm9keV9saWdodCBkLWZsZXggZmxleC1jb2x1bW5cIiA6IFwiYm9keV9kYXJrIGQtZmxleCBmbGV4LWNvbHVtblwifT5cbiAgICA8SGVhZGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBsaWdodF9vcl9kYXJrPXtsaWdodF9vcl9kYXJrfSBsaWdodG1vZGVvbj17bGlnaHRtb2Rlb259IGN1cnJlbnRQYWdlPXtwYWdlfSBvbk5hdkNsaWNrPXtzZXRQYWdlfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtdHJhbnNwYXJlbnQgY29sLTggbWItNCBtYi1tZC0wIHB5LTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPEZhZGUgaW49e2ZhZGV9PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzaGFkb3ctMi1zdHJvbmcgbWItNSBjYXJkLWltZy10b3AgbXgtYXV0b1wiIHNyYz1cIjA1LnBuZ1wiIHN0eWxlPXt7d2lkdGg6XCIxMjBweFwiLCB0cmFuc2l0aW9uRHVyYXRpb246XCI4MDBtc1wiLCB0cmFuc2l0aW9uRGVsYXk6XCIyMDBtc1wifX0vPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICA8RmFkZSBpbj17ZmFkZX0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBtYi00XCIgc3R5bGU9e3t0cmFuc2l0aW9uRHVyYXRpb246XCI4MDBtc1wiLCB0cmFuc2l0aW9uRGVsYXk6JzFzJ319PkNoYXB1aXMgRHlsYW48L2gxPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICA8RmFkZSBpbj17ZmFkZX0+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IG1iLTRcIiBzdHlsZT17e3RyYW5zaXRpb25EdXJhdGlvbjpcIjgwMG1zXCIsIHRyYW5zaXRpb25EZWxheTpcIjEuNXNcIn19PkTDqXZlbG9wcGV1ciBXZWI8L2g0PlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBtYi0wIG10LTUgcm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQ0R5bGFuLXNvdXJjZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC0xIGNvbC0yXCIgdGFyZ2V0PXtcImJsYW5rXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0vPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2NoYXB1aXMtZHlsYW4tMzczNjc5MjEwL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC0xIGNvbC0yXCIgdGFyZ2V0PXtcImJsYW5rXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpbmtlZGlufS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXktMiBteS1zbS0yIHRleHQtY2VudGVyXCI+XG4gICAgICA8aDI+QmllbnZlbnVlIHN1ciBtb24gUG9ydGZvbGlvPC9oMj5cbiAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyLz5cbiAgPC9kaXY+XG4pO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiRmFkZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhR2l0aHViIiwiZmFMaW5rZWRpbiIsIkxpbmsiLCJGb290ZXIiLCJTaXRlIiwicGFnZSIsInNldFBhZ2UiLCJsb2NhbExpZ2h0TW9kZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsaWdodG1vZGVvbiIsInNldExpZ2h0bW9kZW9uIiwiZmFkZSIsInNldEZhZGUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRJdGVtIiwibGlnaHRfb3JfZGFyayIsInN1biIsIm1vb24iLCJuYXZUb2dnbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY3VycmVudFBhZ2UiLCJvbk5hdkNsaWNrIiwiaW4iLCJpbWciLCJzcmMiLCJzdHlsZSIsIndpZHRoIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiaDEiLCJoNCIsInVsIiwiaHJlZiIsImEiLCJ0YXJnZXQiLCJpY29uIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});