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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Site; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Fade */ \"./node_modules/react-bootstrap/esm/Fade.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Site() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"home\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), fade = ref2[0], setFade = ref2[1];\n    setTimeout(function() {\n        setFade(true);\n    }, 300);\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light\" : \"body_dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-transparent col-md-6 mb-4 mb-md-0 py-5 d-flex align-items-center text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                in: fade,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"shadow-2-strong mb-5 card-img-top mx-auto\",\n                                    src: \"05.png\",\n                                    style: {\n                                        width: \"100px\",\n                                        transitionDuration: \"800ms\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                in: fade,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"card-title mb-4\",\n                                    style: {\n                                        transitionDuration: \"800ms\",\n                                        transitionDelay: \"1s\"\n                                    },\n                                    children: \"Chapuis Dylan\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                in: fade,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"card-text mb-4\",\n                                    style: {\n                                        transitionDuration: \"800ms\",\n                                        transitionDelay: \"1.5s\"\n                                    },\n                                    children: \"D\\xe9veloppeur Web\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-unstyled mb-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#!\",\n                                        className: \"px-1\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                            icon: []\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#!\",\n                                        className: \"px-1\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fab fa-twitter text-white\"\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#!\",\n                                        className: \"px-1\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fab fa-linkedin-in text-white\"\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n        lineNumber: 42,\n        columnNumber: 3\n    }, this);\n};\n_s(Site, \"tF07upmB31wMZ5mt/XyiH3IvFog=\");\n_c = Site;\nvar _c;\n$RefreshReg$(_c, \"Site\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDWiw0RUFBQ3dCLElBQUU7b0NBQUNaLFNBQVMsRUFBQyxnQkFBZ0I7b0NBQUNPLEtBQUssRUFBRTt3Q0FBQ0Usa0JBQWtCLEVBQUMsT0FBTzt3Q0FBRUUsZUFBZSxFQUFDLE1BQU07cUNBQUM7OENBQUUsb0JBQWU7Ozs7O3dDQUFLOzs7OztvQ0FDM0c7MENBQ1AsOERBQUNFLElBQUU7Z0NBQUNiLFNBQVMsRUFBQyxvQkFBb0I7O2tEQUMxQiw4REFBQ2MsR0FBQzt3Q0FBQ0MsSUFBSSxFQUFDLElBQUk7d0NBQUNmLFNBQVMsRUFBQyxNQUFNO2tEQUUzQiw0RUFBQ3ZCLDJFQUFlOzRDQUFDdUMsSUFBSSxFQUFFLEVBQUU7Ozs7O2dEQUFJOzs7Ozs0Q0FDM0I7a0RBQ0osOERBQUNGLEdBQUM7d0NBQUNDLElBQUksRUFBQyxJQUFJO3dDQUFDZixTQUFTLEVBQUMsTUFBTTtrREFDM0IsNEVBQUNpQixHQUFDOzRDQUFDakIsU0FBUyxFQUFDLDJCQUEyQjs7Ozs7Z0RBQUs7Ozs7OzRDQUMzQztrREFDSiw4REFBQ2MsR0FBQzt3Q0FBQ0MsSUFBSSxFQUFDLElBQUk7d0NBQUNmLFNBQVMsRUFBQyxNQUFNO2tEQUMzQiw0RUFBQ2lCLEdBQUM7NENBQUNqQixTQUFTLEVBQUMsK0JBQStCOzs7OztnREFBSzs7Ozs7NENBQy9DOzs7Ozs7b0NBQ0Q7Ozs7Ozs0QkFDUDs7Ozs7d0JBQ0Y7Ozs7O29CQUNGOzs7Ozs7WUFDRixDQUNOO0NBQ0Q7R0EvRHVCdEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9lbGVtZW50cy9oZWFkZXJcIjtcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9GYWRlJztcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpdGUoKSB7XG5cbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoJ2hvbWUnKTtcbiAgY29uc3QgbG9jYWxMaWdodE1vZGUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxJR0hUX01PREVcIikpIDogJyc7XG4gIGNvbnN0IFtsaWdodG1vZGVvbiwgc2V0TGlnaHRtb2Rlb25dID0gdXNlU3RhdGUobG9jYWxMaWdodE1vZGUpO1xuICBjb25zdFtmYWRlLCBzZXRGYWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0RmFkZSh0cnVlKVxuICAgIH0sIDMwMClcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldExpZ2h0bW9kZW9uKCFsaWdodG1vZGVvbik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMSUdIVF9NT0RFXCIsIGxpZ2h0bW9kZW9uKTtcbiAgICAgICAgfVxuICAgICAgfSwgW2xpZ2h0bW9kZW9uXSlcblxuICAgIFxuICAgY29uc3QgbGlnaHRfb3JfZGFyayA9IHtcbiAgICAgICAgc3VuOiBsaWdodG1vZGVvbiA/ICcjREU2NDM5JyA6ICcjZmZmJyxcbiAgICAgICAgbW9vbjogbGlnaHRtb2Rlb24gPyAnI2ZmZicgOiAnI0RFNjQzOScsXG4gICAgICAgIG5hdlRvZ2dsZSA6IGxpZ2h0bW9kZW9uID8gJycgOiAnbmF2YmFyLWRhcmsnXG4gICAgfVxuXG5cbiAgcmV0dXJuKFxuICA8ZGl2IGNsYXNzTmFtZT17bGlnaHRtb2Rlb24gPyBcImJvZHlfbGlnaHRcIiA6IFwiYm9keV9kYXJrXCJ9PlxuICAgIDxIZWFkZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGxpZ2h0X29yX2Rhcms9e2xpZ2h0X29yX2Rhcmt9IGxpZ2h0bW9kZW9uPXtsaWdodG1vZGVvbn0gY3VycmVudFBhZ2U9e3BhZ2V9IG9uTmF2Q2xpY2s9e3NldFBhZ2V9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC10cmFuc3BhcmVudCBjb2wtbWQtNiBtYi00IG1iLW1kLTAgcHktNSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8RmFkZSBpbj17ZmFkZX0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNoYWRvdy0yLXN0cm9uZyBtYi01IGNhcmQtaW1nLXRvcCBteC1hdXRvXCIgc3JjPVwiMDUucG5nXCIgc3R5bGU9e3t3aWR0aDpcIjEwMHB4XCIsIHRyYW5zaXRpb25EdXJhdGlvbjpcIjgwMG1zXCJ9fS8+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDxGYWRlIGluPXtmYWRlfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIG1iLTRcIiBzdHlsZT17e3RyYW5zaXRpb25EdXJhdGlvbjpcIjgwMG1zXCIsIHRyYW5zaXRpb25EZWxheTonMXMnfX0+Q2hhcHVpcyBEeWxhbjwvaDE+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDxGYWRlIGluPXtmYWRlfT5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRleHQgbWItNFwiIHN0eWxlPXt7dHJhbnNpdGlvbkR1cmF0aW9uOlwiODAwbXNcIiwgdHJhbnNpdGlvbkRlbGF5OlwiMS41c1wifX0+RMOpdmVsb3BwZXVyIFdlYjwvaDQ+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzTmFtZT1cInB4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17W119IC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJweC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyIHRleHQtd2hpdGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJweC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbi1pbiB0ZXh0LXdoaXRlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIkZhZGUiLCJGb250QXdlc29tZUljb24iLCJTaXRlIiwicGFnZSIsInNldFBhZ2UiLCJsb2NhbExpZ2h0TW9kZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsaWdodG1vZGVvbiIsInNldExpZ2h0bW9kZW9uIiwiZmFkZSIsInNldEZhZGUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRJdGVtIiwibGlnaHRfb3JfZGFyayIsInN1biIsIm1vb24iLCJuYXZUb2dnbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY3VycmVudFBhZ2UiLCJvbk5hdkNsaWNrIiwiaW4iLCJpbWciLCJzcmMiLCJzdHlsZSIsIndpZHRoIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaDEiLCJ0cmFuc2l0aW9uRGVsYXkiLCJoNCIsInVsIiwiYSIsImhyZWYiLCJpY29uIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});