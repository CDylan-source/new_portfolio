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

/***/ "./pages/elements/header.jsx":
/*!***********************************!*\
  !*** ./pages/elements/header.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _lightmode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lightmode */ \"./pages/elements/lightmode.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction Header(param) {\n    var lightmodeon = param.lightmodeon, light_or_dark = param.light_or_dark, onClick = param.onClick, currentPage = param.currentPage, onNavClick = param.onNavClick;\n    var navClass = function navClass(page) {\n        var className = \"mx-auto\";\n        if (page === currentPage) {\n            className += \" active\";\n        }\n        return className;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mon portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charset: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"My portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"Portfolio, React, NextJs\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"Dylan Chapuis\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    lightmodeon ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"logo_light.svg\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 24\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"logo_dark.svg\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar, {\n                    expand: \"lg\",\n                    className: \"justify-content-between\",\n                    children: [\n                        lightmodeon ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"logo_light.svg\",\n                                alt: \"Le logo du site, un renard orange et noir\",\n                                className: \"ms-4\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 51\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 28\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"logo_dark.svg\",\n                                alt: \"Le logo du site, un renard orange et noir\",\n                                className: \"ms-4\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 40\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lightmode__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onClick: onClick,\n                            light_or_dark: light_or_dark\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\",\n                            className: \"me-4\"\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            className: \"justify-content-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {\n                                className: \"me-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        href: \"/\",\n                                        className: navClass(\"home\"),\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        href: \"/about\",\n                                        className: navClass(\"home\"),\n                                        children: \"\\xc0 propos\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        href: \"/portfolio\",\n                                        className: navClass(\"home\"),\n                                        children: \"Portfolio\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        href: \"/Contact\",\n                                        className: navClass(\"home\"),\n                                        children: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNYLHFEQUFRO3dDQUFDb0IsSUFBSSxFQUFDLEdBQUc7d0NBQUNULFNBQVMsRUFBRUYsUUFBUSxDQUFDLE1BQU0sQ0FBQztrREFBRSxNQUFJOzs7Ozs0Q0FBVztrREFDL0QsOERBQUNULHFEQUFRO3dDQUFDb0IsSUFBSSxFQUFDLFFBQVE7d0NBQUNULFNBQVMsRUFBRUYsUUFBUSxDQUFDLE1BQU0sQ0FBQztrREFBRSxhQUFROzs7Ozs0Q0FBVztrREFDeEUsOERBQUNULHFEQUFRO3dDQUFDb0IsSUFBSSxFQUFDLFlBQVk7d0NBQUNULFNBQVMsRUFBRUYsUUFBUSxDQUFDLE1BQU0sQ0FBQztrREFBRSxXQUFTOzs7Ozs0Q0FBVztrREFDN0UsOERBQUNULHFEQUFRO3dDQUFDb0IsSUFBSSxFQUFDLFVBQVU7d0NBQUNULFNBQVMsRUFBRUYsUUFBUSxDQUFDLE1BQU0sQ0FBQztrREFBRSxTQUFPOzs7Ozs0Q0FBVzs7Ozs7O29DQUN2RTs7Ozs7Z0NBQ1E7Ozs7Ozt3QkFDYjs7Ozs7b0JBQ0o7Ozs7OztZQUNJLENBQ2xCO0NBQ0Y7QUF6Q3VCTixLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VsZW1lbnRzL2hlYWRlci5qc3g/MWU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IHtOYXZiYXIsIE5hdn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBMaWdodG1vZGUgZnJvbSAnLi9saWdodG1vZGUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoe2xpZ2h0bW9kZW9uLCBsaWdodF9vcl9kYXJrLCBvbkNsaWNrLCBjdXJyZW50UGFnZSwgb25OYXZDbGlja30pe1xuXG4gICAgY29uc3QgbmF2Q2xhc3MgPSBmdW5jdGlvbihwYWdlKXtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwibXgtYXV0b1wiXG4gICAgICAgIGlmKHBhZ2UgPT09IGN1cnJlbnRQYWdlKXtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc05hbWVcbiAgICB9XG4gICAgXG4gIFxuIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TW9uIHBvcnRmb2xpbzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJNeSBwb3J0Zm9saW9cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiUG9ydGZvbGlvLCBSZWFjdCwgTmV4dEpzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJEeWxhbiBDaGFwdWlzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICB7bGlnaHRtb2Rlb24gPyA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cImxvZ29fbGlnaHQuc3ZnXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+IDpcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJsb2dvX2Rhcmsuc3ZnXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+fVxuICAgIDwvSGVhZD5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxOYXZiYXIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9J2p1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cbiAgICAgICAgICAgIHtsaWdodG1vZGVvbiA/IDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj48aW1nIHNyYz1cImxvZ29fbGlnaHQuc3ZnXCIgYWx0PVwiTGUgbG9nbyBkdSBzaXRlLCB1biByZW5hcmQgb3JhbmdlIGV0IG5vaXJcIiBjbGFzc05hbWU9J21zLTQnLz48L05hdmJhci5CcmFuZD4gOlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj48aW1nIHNyYz1cImxvZ29fZGFyay5zdmdcIiBhbHQ9XCJMZSBsb2dvIGR1IHNpdGUsIHVuIHJlbmFyZCBvcmFuZ2UgZXQgbm9pclwiIGNsYXNzTmFtZT0nbXMtNCcvPjwvTmF2YmFyLkJyYW5kPn1cbiAgICAgICAgICAgICAgICA8TGlnaHRtb2RlIG9uQ2xpY2s9e29uQ2xpY2t9IGxpZ2h0X29yX2Rhcms9e2xpZ2h0X29yX2Rhcmt9PjwvTGlnaHRtb2RlPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgY2xhc3NOYW1lPSdtZS00Jy8+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIiBjbGFzc05hbWU9J2p1c3RpZnktY29udGVudC1lbmQnPlxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT17bmF2Q2xhc3MoJ2hvbWUnKX0+SG9tZTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT17bmF2Q2xhc3MoJ2hvbWUnKX0+w4AgcHJvcG9zPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3BvcnRmb2xpb1wiIGNsYXNzTmFtZT17bmF2Q2xhc3MoJ2hvbWUnKX0+UG9ydGZvbGlvPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL0NvbnRhY3RcIiBjbGFzc05hbWU9e25hdkNsYXNzKCdob21lJyl9PkNvbnRhY3Q8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJOYXYiLCJMaWdodG1vZGUiLCJSZWFjdCIsIkhlYWRlciIsImxpZ2h0bW9kZW9uIiwibGlnaHRfb3JfZGFyayIsIm9uQ2xpY2siLCJjdXJyZW50UGFnZSIsIm9uTmF2Q2xpY2siLCJuYXZDbGFzcyIsInBhZ2UiLCJjbGFzc05hbWUiLCJGcmFnbWVudCIsInRpdGxlIiwibWV0YSIsImNoYXJzZXQiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsImhlYWRlciIsImV4cGFuZCIsIkJyYW5kIiwiaW1nIiwic3JjIiwiYWx0IiwiVG9nZ2xlIiwiYXJpYS1jb250cm9scyIsIkNvbGxhcHNlIiwiaWQiLCJMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/elements/header.jsx\n");

/***/ })

});