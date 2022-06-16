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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Portfolio(param) {\n    var Projets = param.Projets;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"portfolio\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), show = ref2[0], setShow = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), selected = ref3[0], setSelected = ref3[1];\n    var handleClose = function() {\n        setShow(false);\n        setSelected(0);\n    };\n    var handleShow = function(id) {\n        setSelected(id);\n        setShow(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex flex-column\" : \"body_dark d-flex flex-column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: Projets.map(function(projet, id) {\n                    var _this1 = _this;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-transparent margin-start col-md-4 col-10 mb-4 mb-md-0 py-4 d-flex offset-1 offset-md-0 align-items-center text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: projet.image,\n                                    alt: \"Photo du projet\",\n                                    className: \"shadow-2-strong mb-4 card-img-top mx-auto\",\n                                    style: {\n                                        width: \"100%\",\n                                        height: \"auto\",\n                                        borderRadius: \"0.6rem\"\n                                    },\n                                    width: \"1000\",\n                                    height: \"1000\",\n                                    layout: \"raw\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 8\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"card-title mb-3 titre\",\n                                    children: projet.titre\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-flex flex-wrap justify-content-center gap-3 mb-3\",\n                                    children: projet.portfolio_joint.map(function(element) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"card-text mb-0 mb-md-2 tag\",\n                                            children: element.portfolio_tags.tag\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"card-text mb-4 short\",\n                                    children: projet.short\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"more orange\",\n                                    onClick: function() {\n                                        return handleShow(id);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"En savoir +\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 76\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 5\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                show: show,\n                onHide: handleClose,\n                size: \"lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Header, {\n                        closeButton: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Title, {\n                            children: Projets[selected].titre\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Body, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex flex-column w-100 align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: Projets[selected].image,\n                                    alt: \"Photo du projet\",\n                                    className: \"shadow-2-strong mb-4\",\n                                    style: {\n                                        width: \"90%\",\n                                        height: \"auto\"\n                                    },\n                                    width: \"1000\",\n                                    height: \"1000\",\n                                    layout: \"raw\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: Projets[selected].description\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                Projets[selected].lien ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: Projets[selected].lien,\n                                    className: \"more noir\",\n                                    target: \"blank\",\n                                    children: \"Lien vers le site\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 39\n                                }, this) : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Footer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleClose,\n                            className: \"more startnoir blanc\",\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 64,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 81,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n        lineNumber: 41,\n        columnNumber: 3\n    }, this);\n};\n_s(Portfolio, \"i3zP1FziWKDaMfvTodLDneXfbJs=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3J0Zm9saW8uanN4PzQ1NmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2VsZW1lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9lbGVtZW50cy9mb290ZXJcIjtcbmltcG9ydCB7UHJpc21hQ2xpZW50fSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpbyh7UHJvamV0c30pe1xuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKCdwb3J0Zm9saW8nKTtcbiAgICBjb25zdCBsb2NhbExpZ2h0TW9kZSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTElHSFRfTU9ERVwiKSkgOiAnJztcbiAgICBjb25zdCBbbGlnaHRtb2Rlb24sIHNldExpZ2h0bW9kZW9uXSA9IHVzZVN0YXRlKGxvY2FsTGlnaHRNb2RlKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRMaWdodG1vZGVvbighbGlnaHRtb2Rlb24pO1xuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTElHSFRfTU9ERVwiLCBsaWdodG1vZGVvbik7XG4gICAgICAgIH1cbiAgICAgIH0sIFtsaWdodG1vZGVvbl0pXG4gICBjb25zdCBsaWdodF9vcl9kYXJrID0ge1xuICAgICAgICBzdW46IGxpZ2h0bW9kZW9uID8gJyNERTY0MzknIDogJyNmZmYnLFxuICAgICAgICBtb29uOiBsaWdodG1vZGVvbiA/ICcjZmZmJyA6ICcjREU2NDM5JyxcbiAgICAgICAgbmF2VG9nZ2xlIDogbGlnaHRtb2Rlb24gPyAnJyA6ICduYXZiYXItZGFyaydcbiAgICB9XG4gICBcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgIHNldFNob3coZmFsc2UpO1xuICAgICAgc2V0U2VsZWN0ZWQoMClcbiAgICAgIH1cbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKGlkKSA9PiB7XG4gICAgICBzZXRTZWxlY3RlZChpZClcbiAgICAgIHNldFNob3codHJ1ZSk7XG4gICAgfVxuICByZXR1cm4oXG4gIDxkaXYgY2xhc3NOYW1lPXtsaWdodG1vZGVvbiA/IFwiYm9keV9saWdodCBkLWZsZXggZmxleC1jb2x1bW5cIiA6IFwiYm9keV9kYXJrIGQtZmxleCBmbGV4LWNvbHVtblwifT5cbiAgICA8SGVhZGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBsaWdodF9vcl9kYXJrPXtsaWdodF9vcl9kYXJrfSBsaWdodG1vZGVvbj17bGlnaHRtb2Rlb259IGN1cnJlbnRQYWdlPXtwYWdlfSBvbk5hdkNsaWNrPXtzZXRQYWdlfS8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICB7UHJvamV0cy5tYXAoKHByb2pldCwgaWQpID0+IHtyZXR1cm4oXG4gICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC10cmFuc3BhcmVudCBtYXJnaW4tc3RhcnQgY29sLW1kLTQgY29sLTEwIG1iLTQgbWItbWQtMCBweS00IGQtZmxleCBvZmZzZXQtMSBvZmZzZXQtbWQtMCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj4gICAgICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICA8SW1hZ2Ugc3JjPXtwcm9qZXQuaW1hZ2V9IGFsdD1cIlBob3RvIGR1IHByb2pldFwiIGNsYXNzTmFtZT1cInNoYWRvdy0yLXN0cm9uZyBtYi00IGNhcmQtaW1nLXRvcCBteC1hdXRvXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiYXV0b1wiLCBib3JkZXJSYWRpdXM6IFwiMC42cmVtXCJ9fSB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCIxMDAwXCIgbGF5b3V0PVwicmF3XCIvPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgbWItMyB0aXRyZVwiPntwcm9qZXQudGl0cmV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGdhcC0zIG1iLTNcIj5cbiAgICAgICAgICAgICAge3Byb2pldC5wb3J0Zm9saW9fam9pbnQubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IG1iLTAgbWItbWQtMiB0YWdcIj57ZWxlbWVudC5wb3J0Zm9saW9fdGFncy50YWd9PC9wPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBtYi00IHNob3J0XCI+e3Byb2pldC5zaG9ydH08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vcmUgb3JhbmdlXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdyhpZCl9PjxzcGFuPkVuIHNhdm9pciArPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgKX0pfTwvZGl2PlxuICAgICA8TW9kYWwgc2hvdz17c2hvd30gb25IaWRlPXtoYW5kbGVDbG9zZX0gc2l6ZT1cImxnXCI+XG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgPE1vZGFsLlRpdGxlPlxuICAgICAgICAgICAge1Byb2pldHNbc2VsZWN0ZWRdLnRpdHJlfVxuICAgICAgICAgIDwvTW9kYWwuVGl0bGU+XG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e1Byb2pldHNbc2VsZWN0ZWRdLmltYWdlfSBhbHQ9XCJQaG90byBkdSBwcm9qZXRcIiBjbGFzc05hbWU9XCJzaGFkb3ctMi1zdHJvbmcgbWItNFwiIHN0eWxlPXt7d2lkdGg6XCI5MCVcIiwgaGVpZ2h0OlwiYXV0b1wifX0gd2lkdGg9XCIxMDAwXCIgaGVpZ2h0PVwiMTAwMFwiIGxheW91dD1cInJhd1wiLz5cbiAgICAgICAgICAgIDxwPntQcm9qZXRzW3NlbGVjdGVkXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICB7UHJvamV0c1tzZWxlY3RlZF0ubGllbiA/IDxhIGhyZWY9e1Byb2pldHNbc2VsZWN0ZWRdLmxpZW59IGNsYXNzTmFtZT1cIm1vcmUgbm9pclwiIHRhcmdldD1cImJsYW5rXCI+TGllbiB2ZXJzIGxlIHNpdGU8L2E+IDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT1cIm1vcmUgc3RhcnRub2lyIGJsYW5jXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICA8L01vZGFsPlxuICAgIDxGb290ZXIvPlxuICA8L2Rpdj5cbik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xuICAgICAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgICAgIGNvbnN0IFByb2pldHMgPSBhd2FpdCBwcmlzbWEucG9ydGZvbGlvX3Byb2pldHMuZmluZE1hbnkoe1xuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIHBvcnRmb2xpb19qb2ludDoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3J0Zm9saW9fdGFnczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgUHJvamV0cyAgICAgICAgfSxcbiAgICAgICAgcmV2YWxpZGF0ZToyMDAwLFxuICAgICAgfVxufVxuLy8gaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xekh1QmVxRF8xUnRnU3pnUUlzRzBkYklPWmw5TE1ER1gvdmlldz91c3A9c2hhcmluZyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwiRm9vdGVyIiwiSW1hZ2UiLCJNb2RhbCIsIlBvcnRmb2xpbyIsIlByb2pldHMiLCJwYWdlIiwic2V0UGFnZSIsImxvY2FsTGlnaHRNb2RlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxpZ2h0bW9kZW9uIiwic2V0TGlnaHRtb2Rlb24iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEl0ZW0iLCJsaWdodF9vcl9kYXJrIiwic3VuIiwibW9vbiIsIm5hdlRvZ2dsZSIsInNob3ciLCJzZXRTaG93Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImN1cnJlbnRQYWdlIiwib25OYXZDbGljayIsIm1hcCIsInByb2pldCIsInNyYyIsImltYWdlIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImxheW91dCIsImgyIiwidGl0cmUiLCJwb3J0Zm9saW9fam9pbnQiLCJlbGVtZW50IiwicCIsInBvcnRmb2xpb190YWdzIiwidGFnIiwic2hvcnQiLCJidXR0b24iLCJzcGFuIiwib25IaWRlIiwic2l6ZSIsImNsb3NlQnV0dG9uIiwiVGl0bGUiLCJCb2R5IiwiZGVzY3JpcHRpb24iLCJsaWVuIiwiYSIsImhyZWYiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/portfolio.jsx\n");

/***/ })

});