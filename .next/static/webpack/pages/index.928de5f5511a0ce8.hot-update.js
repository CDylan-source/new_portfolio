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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _lightmode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lightmode */ \"./pages/elements/lightmode.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction Header(param) {\n    var lightmodeon = param.lightmodeon, light_or_dark = param.light_or_dark, onClick = param.onClick, currentPage = param.currentPage, onNavClick = param.onNavClick;\n    var navClass = function navClass(page) {\n        var className = \"mx-auto\";\n        if (page === currentPage) {\n            className += \" active\";\n        }\n        return className;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mon portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charset: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"My portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"Portfolio, React, NextJs\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"Dylan Chapuis\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    lightmodeon ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"logo_light.svg\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 24\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"logo_dark.svg\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar, {\n                    expand: \"lg\",\n                    className: \"justify-content-between\",\n                    children: [\n                        lightmodeon ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"logo_light.svg\",\n                                alt: \"Le logo du site, un renard orange et noir\",\n                                className: \"ms-4\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 51\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 28\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"logo_dark.svg\",\n                                alt: \"Le logo du site, un renard orange et noir\",\n                                className: \"ms-4\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 40\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lightmode__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onClick: onClick,\n                            light_or_dark: light_or_dark\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\",\n                            className: \"me-4\".light_or_dark[nav]\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            className: \"justify-content-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {\n                                className: \"me-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        href: \"/\",\n                                        className: navClass(\"home\"),\n                                        onClick: onNavClick,\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        href: \"/about\",\n                                        className: navClass(\"about\"),\n                                        onClick: onNavClick,\n                                        children: \"\\xc0 propos\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        href: \"/portfolio\",\n                                        className: navClass(\"portfolio\"),\n                                        onClick: onNavClick,\n                                        children: \"Portfolio\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav.Link, {\n                                        href: \"/contact\",\n                                        className: navClass(\"contact\"),\n                                        onClick: onNavClick,\n                                        children: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/elements/header.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1csU0FBUyxFQUFDLE1BQU07O2tEQUNqQiw4REFBQ1gscURBQVE7d0NBQUNvQixJQUFJLEVBQUMsR0FBRzt3Q0FBQ1QsU0FBUyxFQUFFRixRQUFRLENBQUMsTUFBTSxDQUFDO3dDQUFFSCxPQUFPLEVBQUVFLFVBQVU7a0RBQUUsTUFBSTs7Ozs7NENBQVc7a0RBQ3BGLDhEQUFDUixxREFBUTt3Q0FBQ29CLElBQUksRUFBQyxRQUFRO3dDQUFDVCxTQUFTLEVBQUVGLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0NBQUVILE9BQU8sRUFBRUUsVUFBVTtrREFBRSxhQUFROzs7Ozs0Q0FBVztrREFDOUYsOERBQUNSLHFEQUFRO3dDQUFDb0IsSUFBSSxFQUFDLFlBQVk7d0NBQUNULFNBQVMsRUFBRUYsUUFBUSxDQUFDLFdBQVcsQ0FBQzt3Q0FBRUgsT0FBTyxFQUFFRSxVQUFVO2tEQUFFLFdBQVM7Ozs7OzRDQUFXO2tEQUN2Ryw4REFBQ1IscURBQVE7d0NBQUNvQixJQUFJLEVBQUMsVUFBVTt3Q0FBQ1QsU0FBUyxFQUFFRixRQUFRLENBQUMsU0FBUyxDQUFDO3dDQUFFSCxPQUFPLEVBQUVFLFVBQVU7a0RBQUUsU0FBTzs7Ozs7NENBQVc7Ozs7OztvQ0FDL0Y7Ozs7O2dDQUNROzs7Ozs7d0JBQ2I7Ozs7O29CQUNKOzs7Ozs7WUFDSSxDQUNsQjtDQUNGO0FBekN1QkwsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9lbGVtZW50cy9oZWFkZXIuanN4PzFlNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7TmF2YmFyLCBOYXZ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgTGlnaHRtb2RlIGZyb20gJy4vbGlnaHRtb2RlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHtsaWdodG1vZGVvbiwgbGlnaHRfb3JfZGFyaywgb25DbGljaywgY3VycmVudFBhZ2UsIG9uTmF2Q2xpY2t9KXtcblxuICAgIGNvbnN0IG5hdkNsYXNzID0gZnVuY3Rpb24ocGFnZSl7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBcIm14LWF1dG9cIlxuICAgICAgICBpZihwYWdlID09PSBjdXJyZW50UGFnZSl7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYWN0aXZlXCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lXG4gICAgfVxuICAgIFxuICBcbiByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1vbiBwb3J0Zm9saW88L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTXkgcG9ydGZvbGlvXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIlBvcnRmb2xpbywgUmVhY3QsIE5leHRKc1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiRHlsYW4gQ2hhcHVpc1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAge2xpZ2h0bW9kZW9uID8gPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJsb2dvX2xpZ2h0LnN2Z1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPiA6XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwibG9nb19kYXJrLnN2Z1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPn1cbiAgICA8L0hlYWQ+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8TmF2YmFyIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPSdqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XG4gICAgICAgICAgICB7bGlnaHRtb2Rlb24gPyA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+PGltZyBzcmM9XCJsb2dvX2xpZ2h0LnN2Z1wiIGFsdD1cIkxlIGxvZ28gZHUgc2l0ZSwgdW4gcmVuYXJkIG9yYW5nZSBldCBub2lyXCIgY2xhc3NOYW1lPSdtcy00Jy8+PC9OYXZiYXIuQnJhbmQ+IDpcbiAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+PGltZyBzcmM9XCJsb2dvX2Rhcmsuc3ZnXCIgYWx0PVwiTGUgbG9nbyBkdSBzaXRlLCB1biByZW5hcmQgb3JhbmdlIGV0IG5vaXJcIiBjbGFzc05hbWU9J21zLTQnLz48L05hdmJhci5CcmFuZD59XG4gICAgICAgICAgICAgICAgPExpZ2h0bW9kZSBvbkNsaWNrPXtvbkNsaWNrfSBsaWdodF9vcl9kYXJrPXtsaWdodF9vcl9kYXJrfT48L0xpZ2h0bW9kZT5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIGNsYXNzTmFtZT17J21lLTQnIC4gbGlnaHRfb3JfZGFya1tuYXZdfS8+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIiBjbGFzc05hbWU9J2p1c3RpZnktY29udGVudC1lbmQnPlxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT17bmF2Q2xhc3MoJ2hvbWUnKX0gb25DbGljaz17b25OYXZDbGlja30+SG9tZTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT17bmF2Q2xhc3MoJ2Fib3V0Jyl9IG9uQ2xpY2s9e29uTmF2Q2xpY2t9PsOAIHByb3BvczwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIiBjbGFzc05hbWU9e25hdkNsYXNzKCdwb3J0Zm9saW8nKX0gb25DbGljaz17b25OYXZDbGlja30+UG9ydGZvbGlvPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9e25hdkNsYXNzKCdjb250YWN0Jyl9IG9uQ2xpY2s9e29uTmF2Q2xpY2t9PkNvbnRhY3Q8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJOYXYiLCJMaWdodG1vZGUiLCJSZWFjdCIsIkhlYWRlciIsImxpZ2h0bW9kZW9uIiwibGlnaHRfb3JfZGFyayIsIm9uQ2xpY2siLCJjdXJyZW50UGFnZSIsIm9uTmF2Q2xpY2siLCJuYXZDbGFzcyIsInBhZ2UiLCJjbGFzc05hbWUiLCJGcmFnbWVudCIsInRpdGxlIiwibWV0YSIsImNoYXJzZXQiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsImhlYWRlciIsImV4cGFuZCIsIkJyYW5kIiwiaW1nIiwic3JjIiwiYWx0IiwiVG9nZ2xlIiwiYXJpYS1jb250cm9scyIsIm5hdiIsIkNvbGxhcHNlIiwiaWQiLCJMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/elements/header.jsx\n");

/***/ })

});