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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _lightmode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lightmode */ \"./pages/elements/lightmode.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var _s1 = $RefreshSig$();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), lightmodeon = ref[0], setLightmodeon = ref[1];\n    var handleClick = function handleClick(e) {\n        _s1();\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n            return setLightmodeon(!lightmodeon);\n        }, []);\n    };\n    _s1(handleClick, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mon portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charset: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"My portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"Portfolio, React, NextJs\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"Dylan Chapuis\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    light_or_dark ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"logo_light.svg\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 26\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"logo_dark.svg\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar, {\n                    expand: \"lg\",\n                    className: \"justify-content-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"logo_dark.svg\",\n                                alt: \"Le logo du site, un renard orange et noir\",\n                                className: \"ms-4\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 40\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lightmode__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onClick: handleClick,\n                            light_or_dark: light_or_dark\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\",\n                            className: \"me-4\"\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            className: \"justify-content-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {\n                                className: \"me-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        href: \"/\",\n                                        className: \"mx-auto\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        href: \"/about\",\n                                        className: \"mx-auto\",\n                                        children: \"\\xc0 propos\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        href: \"/portfolio\",\n                                        className: \"mx-auto\",\n                                        children: \"Portfolio\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        href: \"/Contact\",\n                                        className: \"mx-auto\",\n                                        children: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n};\n_s(Header, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBVztrREFDdEQsOERBQUMxQixxREFBUTt3Q0FBQ3NCLElBQUksRUFBQyxRQUFRO3dDQUFDSSxTQUFTLEVBQUMsU0FBUztrREFBQyxhQUFROzs7Ozs0Q0FBVztrREFDL0QsOERBQUMxQixxREFBUTt3Q0FBQ3NCLElBQUksRUFBQyxZQUFZO3dDQUFDSSxTQUFTLEVBQUMsU0FBUztrREFBQyxXQUFTOzs7Ozs0Q0FBVztrREFDcEUsOERBQUMxQixxREFBUTt3Q0FBQ3NCLElBQUksRUFBQyxVQUFVO3dDQUFDSSxTQUFTLEVBQUMsU0FBUztrREFBQyxTQUFPOzs7Ozs0Q0FBVzs7Ozs7O29DQUM5RDs7Ozs7Z0NBQ1E7Ozs7Ozt3QkFDYjs7Ozs7b0JBQ0o7Ozs7OztZQUNJLENBQ2xCO0NBQ0Y7R0FsRHVCckIsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VsZW1lbnRzL2hlYWRlci5qc3g/MWU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IHtOYXZiYXIsIE5hdn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBMaWdodG1vZGUgZnJvbSAnLi9saWdodG1vZGUnO1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpe1xuXG4gICAgY29uc3QgW2xpZ2h0bW9kZW9uLCBzZXRMaWdodG1vZGVvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRMaWdodG1vZGVvbighbGlnaHRtb2Rlb24pO1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4gc2V0TGlnaHRtb2Rlb24oIWxpZ2h0bW9kZW9uKSwgW10pXG4gICAgfVxuXG4gICAgXG4gICAgXG4gICBjb25zdCBsaWdodF9vcl9kYXJrID0ge1xuICAgICAgICBzdW46IGxpZ2h0bW9kZW9uID8gJyNERTY0MzknIDogJyNmZmYnLFxuICAgICAgICBtb29uOiBsaWdodG1vZGVvbiA/ICcjZmZmJyA6ICcjREU2NDM5JyxcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICBcbiByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1vbiBwb3J0Zm9saW88L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTXkgcG9ydGZvbGlvXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIlBvcnRmb2xpbywgUmVhY3QsIE5leHRKc1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiRHlsYW4gQ2hhcHVpc1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAge2xpZ2h0X29yX2RhcmsgPyA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cImxvZ29fbGlnaHQuc3ZnXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+IDpcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJsb2dvX2Rhcmsuc3ZnXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+fVxuXG4gICAgPC9IZWFkPlxuICAgIFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPE5hdmJhciBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZT0nanVzdGlmeS1jb250ZW50LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj48aW1nIHNyYz1cImxvZ29fZGFyay5zdmdcIiBhbHQ9XCJMZSBsb2dvIGR1IHNpdGUsIHVuIHJlbmFyZCBvcmFuZ2UgZXQgbm9pclwiIGNsYXNzTmFtZT0nbXMtNCcvPjwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxMaWdodG1vZGUgb25DbGljaz17aGFuZGxlQ2xpY2t9IGxpZ2h0X29yX2Rhcms9e2xpZ2h0X29yX2Rhcmt9PjwvTGlnaHRtb2RlPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgY2xhc3NOYW1lPSdtZS00Jy8+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIiBjbGFzc05hbWU9J2p1c3RpZnktY29udGVudC1lbmQnPlxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT0nbXgtYXV0byc+SG9tZTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT0nbXgtYXV0byc+w4AgcHJvcG9zPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3BvcnRmb2xpb1wiIGNsYXNzTmFtZT0nbXgtYXV0byc+UG9ydGZvbGlvPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL0NvbnRhY3RcIiBjbGFzc05hbWU9J214LWF1dG8nPkNvbnRhY3Q8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJOYXYiLCJMaWdodG1vZGUiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwibGlnaHRtb2Rlb24iLCJzZXRMaWdodG1vZGVvbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGlnaHRfb3JfZGFyayIsInN1biIsIm1vb24iLCJGcmFnbWVudCIsInRpdGxlIiwibWV0YSIsImNoYXJzZXQiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsImhlYWRlciIsImV4cGFuZCIsImNsYXNzTmFtZSIsIkJyYW5kIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsIlRvZ2dsZSIsImFyaWEtY29udHJvbHMiLCJDb2xsYXBzZSIsImlkIiwiTGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/elements/header.jsx\n");

/***/ })

});