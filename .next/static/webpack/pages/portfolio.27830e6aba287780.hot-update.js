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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Portfolio(param) {\n    var Projets = param.Projets;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"portfolio\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), show = ref2[0], setShow = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), selected = ref3[0], setSelected = ref3[1];\n    var handleClose = function() {\n        setShow(false);\n        setSelected(0);\n    };\n    var handleShow = function(id) {\n        setSelected(id);\n        setShow(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex flex-column\" : \"body_dark d-flex flex-column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container \",\n                children: Projets.map(function(projet, id) {\n                    var _this1 = _this;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-transparent margin-start col-md-4 col-10 mb-4 mb-md-0 py-4 d-flex offset-1 offset-md-0 align-items-center text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: projet.image,\n                                    alt: \"Photo du projet\",\n                                    className: \"shadow-2-strong mb-4 card-img-top mx-auto\",\n                                    style: {\n                                        width: \"100%\",\n                                        height: \"auto\",\n                                        borderRadius: \"0.6rem\"\n                                    },\n                                    width: \"1000\",\n                                    height: \"1000\",\n                                    layout: \"raw\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 8\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"card-title mb-3 titre\",\n                                    children: projet.titre\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-flex flex-wrap justify-content-center gap-3 mb-3\",\n                                    children: projet.portfolio_joint.map(function(element) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"card-text mb-0 mb-md-2 tag\",\n                                            children: element.portfolio_tags.tag\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"card-text mb-4 short\",\n                                    children: projet.short\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"more orange\",\n                                    onClick: function() {\n                                        return handleShow(id);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"En savoir +\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 76\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 5\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                show: show,\n                onHide: handleClose,\n                size: \"lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Header, {\n                        closeButton: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Title, {\n                            children: Projets[selected].titre\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Body, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex flex-column w-100 align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: Projets[selected].image,\n                                    alt: \"Photo du projet\",\n                                    className: \"shadow-2-strong mb-4\",\n                                    style: {\n                                        width: \"90%\",\n                                        height: \"auto\"\n                                    },\n                                    width: \"1000\",\n                                    height: \"1000\",\n                                    layout: \"raw\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: Projets[selected].description\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                Projets[selected].lien ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: Projets[selected].lien,\n                                    className: \"more noir\",\n                                    target: \"blank\",\n                                    children: \"Lien vers le site\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 39\n                                }, this) : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Footer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleClose,\n                            className: \"more startnoir blanc\",\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 63,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 80,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n        lineNumber: 41,\n        columnNumber: 3\n    }, this);\n};\n_s(Portfolio, \"i3zP1FziWKDaMfvTodLDneXfbJs=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3J0Zm9saW8uanN4PzQ1NmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2VsZW1lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9lbGVtZW50cy9mb290ZXJcIjtcbmltcG9ydCB7UHJpc21hQ2xpZW50fSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpbyh7UHJvamV0c30pe1xuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKCdwb3J0Zm9saW8nKTtcbiAgICBjb25zdCBsb2NhbExpZ2h0TW9kZSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTElHSFRfTU9ERVwiKSkgOiAnJztcbiAgICBjb25zdCBbbGlnaHRtb2Rlb24sIHNldExpZ2h0bW9kZW9uXSA9IHVzZVN0YXRlKGxvY2FsTGlnaHRNb2RlKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRMaWdodG1vZGVvbighbGlnaHRtb2Rlb24pO1xuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTElHSFRfTU9ERVwiLCBsaWdodG1vZGVvbik7XG4gICAgICAgIH1cbiAgICAgIH0sIFtsaWdodG1vZGVvbl0pXG4gICBjb25zdCBsaWdodF9vcl9kYXJrID0ge1xuICAgICAgICBzdW46IGxpZ2h0bW9kZW9uID8gJyNERTY0MzknIDogJyNmZmYnLFxuICAgICAgICBtb29uOiBsaWdodG1vZGVvbiA/ICcjZmZmJyA6ICcjREU2NDM5JyxcbiAgICAgICAgbmF2VG9nZ2xlIDogbGlnaHRtb2Rlb24gPyAnJyA6ICduYXZiYXItZGFyaydcbiAgICB9XG4gICBcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgIHNldFNob3coZmFsc2UpO1xuICAgICAgc2V0U2VsZWN0ZWQoMClcbiAgICAgIH1cbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKGlkKSA9PiB7XG4gICAgICBzZXRTZWxlY3RlZChpZClcbiAgICAgIHNldFNob3codHJ1ZSk7XG4gICAgfVxuICByZXR1cm4oXG4gIDxkaXYgY2xhc3NOYW1lPXtsaWdodG1vZGVvbiA/IFwiYm9keV9saWdodCBkLWZsZXggZmxleC1jb2x1bW5cIiA6IFwiYm9keV9kYXJrIGQtZmxleCBmbGV4LWNvbHVtblwifT5cbiAgICA8SGVhZGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBsaWdodF9vcl9kYXJrPXtsaWdodF9vcl9kYXJrfSBsaWdodG1vZGVvbj17bGlnaHRtb2Rlb259IGN1cnJlbnRQYWdlPXtwYWdlfSBvbk5hdkNsaWNrPXtzZXRQYWdlfS8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgXCI+XG4gICAge1Byb2pldHMubWFwKChwcm9qZXQsIGlkKSA9PiB7cmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtdHJhbnNwYXJlbnQgbWFyZ2luLXN0YXJ0IGNvbC1tZC00IGNvbC0xMCBtYi00IG1iLW1kLTAgcHktNCBkLWZsZXggb2Zmc2V0LTEgb2Zmc2V0LW1kLTAgYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+ICAgICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgPEltYWdlIHNyYz17cHJvamV0LmltYWdlfSBhbHQ9XCJQaG90byBkdSBwcm9qZXRcIiBjbGFzc05hbWU9XCJzaGFkb3ctMi1zdHJvbmcgbWItNCBjYXJkLWltZy10b3AgbXgtYXV0b1wiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcImF1dG9cIiwgYm9yZGVyUmFkaXVzOiBcIjAuNnJlbVwifX0gd2lkdGg9XCIxMDAwXCIgaGVpZ2h0PVwiMTAwMFwiIGxheW91dD1cInJhd1wiLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIG1iLTMgdGl0cmVcIj57cHJvamV0LnRpdHJlfTwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWNlbnRlciBnYXAtMyBtYi0zXCI+XG4gICAgICAgICAgICAgIHtwcm9qZXQucG9ydGZvbGlvX2pvaW50Lm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBtYi0wIG1iLW1kLTIgdGFnXCI+e2VsZW1lbnQucG9ydGZvbGlvX3RhZ3MudGFnfTwvcD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgbWItNCBzaG9ydFwiPntwcm9qZXQuc2hvcnR9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb3JlIG9yYW5nZVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3coaWQpfT48c3Bhbj5FbiBzYXZvaXIgKzwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApfSl9XG4gICAgPC9kaXY+XG4gICAgIDxNb2RhbCBzaG93PXtzaG93fSBvbkhpZGU9e2hhbmRsZUNsb3NlfSBzaXplPVwibGdcIj5cbiAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICA8TW9kYWwuVGl0bGU+XG4gICAgICAgICAgICB7UHJvamV0c1tzZWxlY3RlZF0udGl0cmV9XG4gICAgICAgICAgPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17UHJvamV0c1tzZWxlY3RlZF0uaW1hZ2V9IGFsdD1cIlBob3RvIGR1IHByb2pldFwiIGNsYXNzTmFtZT1cInNoYWRvdy0yLXN0cm9uZyBtYi00XCIgc3R5bGU9e3t3aWR0aDpcIjkwJVwiLCBoZWlnaHQ6XCJhdXRvXCJ9fSB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCIxMDAwXCIgbGF5b3V0PVwicmF3XCIvPlxuICAgICAgICAgICAgPHA+e1Byb2pldHNbc2VsZWN0ZWRdLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIHtQcm9qZXRzW3NlbGVjdGVkXS5saWVuID8gPGEgaHJlZj17UHJvamV0c1tzZWxlY3RlZF0ubGllbn0gY2xhc3NOYW1lPVwibW9yZSBub2lyXCIgdGFyZ2V0PVwiYmxhbmtcIj5MaWVuIHZlcnMgbGUgc2l0ZTwvYT4gOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPVwibW9yZSBzdGFydG5vaXIgYmxhbmNcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPEZvb3Rlci8+XG4gIDwvZGl2PlxuKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gICAgICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICAgICAgY29uc3QgUHJvamV0cyA9IGF3YWl0IHByaXNtYS5wb3J0Zm9saW9fcHJvamV0cy5maW5kTWFueSh7XG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgcG9ydGZvbGlvX2pvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRmb2xpb190YWdzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgcmV0dXJue1xuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICBQcm9qZXRzICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOjIwMDAsXG4gICAgICB9XG59XG4vLyBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF6SHVCZXFEXzFSdGdTemdRSXNHMGRiSU9abDlMTURHWC92aWV3P3VzcD1zaGFyaW5nIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJGb290ZXIiLCJJbWFnZSIsIk1vZGFsIiwiUG9ydGZvbGlvIiwiUHJvamV0cyIsInBhZ2UiLCJzZXRQYWdlIiwibG9jYWxMaWdodE1vZGUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGlnaHRtb2Rlb24iLCJzZXRMaWdodG1vZGVvbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0SXRlbSIsImxpZ2h0X29yX2RhcmsiLCJzdW4iLCJtb29uIiwibmF2VG9nZ2xlIiwic2hvdyIsInNldFNob3ciLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93IiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY3VycmVudFBhZ2UiLCJvbk5hdkNsaWNrIiwibWFwIiwicHJvamV0Iiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibGF5b3V0IiwiaDIiLCJ0aXRyZSIsInBvcnRmb2xpb19qb2ludCIsImVsZW1lbnQiLCJwIiwicG9ydGZvbGlvX3RhZ3MiLCJ0YWciLCJzaG9ydCIsImJ1dHRvbiIsInNwYW4iLCJvbkhpZGUiLCJzaXplIiwiY2xvc2VCdXR0b24iLCJUaXRsZSIsIkJvZHkiLCJkZXNjcmlwdGlvbiIsImxpZW4iLCJhIiwiaHJlZiIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/portfolio.jsx\n");

/***/ })

});