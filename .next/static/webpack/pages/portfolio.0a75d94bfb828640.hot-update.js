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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Portfolio(param) {\n    var Projets = param.Projets;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"portfolio\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), show = ref2[0], setShow = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), selected = ref3[0], setSelected = ref3[1];\n    var handleClose = function() {\n        setShow(false);\n        setSelected(0);\n    };\n    var handleShow = function(id) {\n        setSelected(id);\n        setShow(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex flex-column\" : \"body_dark d-flex flex-column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"customcontainer d-flex flex-wrap gap-5 justify-content-center mb-4\",\n                children: Projets.map(function(projet, id) {\n                    var _this1 = _this;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-transparent margin-start col-md-3 col-10 mb-md-0 py-4 d-flex align-items-center text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: projet.image,\n                                    alt: \"Photo du projet\",\n                                    className: \"shadow-2-strong mb-4 card-img-top mx-auto\",\n                                    style: {\n                                        width: \"100%\",\n                                        height: \"auto\",\n                                        borderRadius: \"0.6rem\"\n                                    },\n                                    width: \"1000\",\n                                    height: \"1000\",\n                                    layout: \"raw\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 8\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"card-title mb-3 titre\",\n                                    children: projet.titre\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-flex flex-wrap justify-content-center gap-3 mb-3\",\n                                    children: projet.portfolio_joint.map(function(element) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"card-text mb-0 mb-md-2 tag\",\n                                            children: element.portfolio_tags.tag\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"card-text mb-4 short\",\n                                    children: projet.short\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"more orange\",\n                                    onClick: function() {\n                                        return handleShow(id);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"En savoir +\"\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 76\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 5\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                show: show,\n                onHide: handleClose,\n                size: \"lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Header, {\n                        closeButton: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Title, {\n                            children: Projets[selected].titre\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Body, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex flex-column w-100 align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: Projets[selected].image,\n                                    alt: \"Photo du projet\",\n                                    className: \"shadow-2-strong mb-4\",\n                                    style: {\n                                        width: \"90%\",\n                                        height: \"auto\"\n                                    },\n                                    width: \"1000\",\n                                    height: \"1000\",\n                                    layout: \"raw\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: Projets[selected].description\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                Projets[selected].lien ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: Projets[selected].lien,\n                                    className: \"more noir\",\n                                    target: \"blank\",\n                                    children: \"Lien vers le site\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 39\n                                }, this) : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Footer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleClose,\n                            className: \"more startnoir blanc\",\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 63,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 80,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n        lineNumber: 41,\n        columnNumber: 3\n    }, this);\n};\n_s(Portfolio, \"i3zP1FziWKDaMfvTodLDneXfbJs=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BvcnRmb2xpby5qc3g/NDU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vZWxlbWVudHMvaGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2VsZW1lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IHtQcmlzbWFDbGllbnR9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvKHtQcm9qZXRzfSl7XG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoJ3BvcnRmb2xpbycpO1xuICAgIGNvbnN0IGxvY2FsTGlnaHRNb2RlID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMSUdIVF9NT0RFXCIpKSA6ICcnO1xuICAgIGNvbnN0IFtsaWdodG1vZGVvbiwgc2V0TGlnaHRtb2Rlb25dID0gdXNlU3RhdGUobG9jYWxMaWdodE1vZGUpO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldExpZ2h0bW9kZW9uKCFsaWdodG1vZGVvbik7XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMSUdIVF9NT0RFXCIsIGxpZ2h0bW9kZW9uKTtcbiAgICAgICAgfVxuICAgICAgfSwgW2xpZ2h0bW9kZW9uXSlcbiAgIGNvbnN0IGxpZ2h0X29yX2RhcmsgPSB7XG4gICAgICAgIHN1bjogbGlnaHRtb2Rlb24gPyAnI0RFNjQzOScgOiAnI2ZmZicsXG4gICAgICAgIG1vb246IGxpZ2h0bW9kZW9uID8gJyNmZmYnIDogJyNERTY0MzknLFxuICAgICAgICBuYXZUb2dnbGUgOiBsaWdodG1vZGVvbiA/ICcnIDogJ25hdmJhci1kYXJrJ1xuICAgIH1cbiAgIFxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgc2V0U2hvdyhmYWxzZSk7XG4gICAgICBzZXRTZWxlY3RlZCgwKVxuICAgICAgfVxuICAgIGNvbnN0IGhhbmRsZVNob3cgPSAoaWQpID0+IHtcbiAgICAgIHNldFNlbGVjdGVkKGlkKVxuICAgICAgc2V0U2hvdyh0cnVlKTtcbiAgICB9XG4gIHJldHVybihcbiAgPGRpdiBjbGFzc05hbWU9e2xpZ2h0bW9kZW9uID8gXCJib2R5X2xpZ2h0IGQtZmxleCBmbGV4LWNvbHVtblwiIDogXCJib2R5X2RhcmsgZC1mbGV4IGZsZXgtY29sdW1uXCJ9PlxuICAgIDxIZWFkZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGxpZ2h0X29yX2Rhcms9e2xpZ2h0X29yX2Rhcmt9IGxpZ2h0bW9kZW9uPXtsaWdodG1vZGVvbn0gY3VycmVudFBhZ2U9e3BhZ2V9IG9uTmF2Q2xpY2s9e3NldFBhZ2V9Lz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWNvbnRhaW5lciBkLWZsZXggZmxleC13cmFwIGdhcC01IGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItNFwiPlxuICAgIHtQcm9qZXRzLm1hcCgocHJvamV0LCBpZCkgPT4ge3JldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLXRyYW5zcGFyZW50IG1hcmdpbi1zdGFydCBjb2wtbWQtMyBjb2wtMTAgbWItbWQtMCBweS00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj4gICAgICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICA8SW1hZ2Ugc3JjPXtwcm9qZXQuaW1hZ2V9IGFsdD1cIlBob3RvIGR1IHByb2pldFwiIGNsYXNzTmFtZT1cInNoYWRvdy0yLXN0cm9uZyBtYi00IGNhcmQtaW1nLXRvcCBteC1hdXRvXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiYXV0b1wiLCBib3JkZXJSYWRpdXM6IFwiMC42cmVtXCJ9fSB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCIxMDAwXCIgbGF5b3V0PVwicmF3XCIvPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgbWItMyB0aXRyZVwiPntwcm9qZXQudGl0cmV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGdhcC0zIG1iLTNcIj5cbiAgICAgICAgICAgICAge3Byb2pldC5wb3J0Zm9saW9fam9pbnQubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IG1iLTAgbWItbWQtMiB0YWdcIj57ZWxlbWVudC5wb3J0Zm9saW9fdGFncy50YWd9PC9wPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBtYi00IHNob3J0XCI+e3Byb2pldC5zaG9ydH08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vcmUgb3JhbmdlXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdyhpZCl9PjxzcGFuPkVuIHNhdm9pciArPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICl9KX1cbiAgICA8L2Rpdj5cbiAgICAgPE1vZGFsIHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9IHNpemU9XCJsZ1wiPlxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgIDxNb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIHtQcm9qZXRzW3NlbGVjdGVkXS50aXRyZX1cbiAgICAgICAgICA8L01vZGFsLlRpdGxlPlxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtQcm9qZXRzW3NlbGVjdGVkXS5pbWFnZX0gYWx0PVwiUGhvdG8gZHUgcHJvamV0XCIgY2xhc3NOYW1lPVwic2hhZG93LTItc3Ryb25nIG1iLTRcIiBzdHlsZT17e3dpZHRoOlwiOTAlXCIsIGhlaWdodDpcImF1dG9cIn19IHdpZHRoPVwiMTAwMFwiIGhlaWdodD1cIjEwMDBcIiBsYXlvdXQ9XCJyYXdcIi8+XG4gICAgICAgICAgICA8cD57UHJvamV0c1tzZWxlY3RlZF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAge1Byb2pldHNbc2VsZWN0ZWRdLmxpZW4gPyA8YSBocmVmPXtQcm9qZXRzW3NlbGVjdGVkXS5saWVufSBjbGFzc05hbWU9XCJtb3JlIG5vaXJcIiB0YXJnZXQ9XCJibGFua1wiPkxpZW4gdmVycyBsZSBzaXRlPC9hPiA6IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjbGFzc05hbWU9XCJtb3JlIHN0YXJ0bm9pciBibGFuY1wiPkNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Rm9vdGVyLz5cbiAgPC9kaXY+XG4pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcbiAgICAgICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgICAgICBjb25zdCBQcm9qZXRzID0gYXdhaXQgcHJpc21hLnBvcnRmb2xpb19wcm9qZXRzLmZpbmRNYW55KHtcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBwb3J0Zm9saW9fam9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9ydGZvbGlvX3RhZ3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICByZXR1cm57XG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIFByb2pldHMgICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6MjAwMCxcbiAgICAgIH1cbn1cbi8vIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpIdUJlcURfMVJ0Z1N6Z1FJc0cwZGJJT1psOUxNREdYL3ZpZXc/dXNwPXNoYXJpbmciXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsIkZvb3RlciIsIkltYWdlIiwiTW9kYWwiLCJQb3J0Zm9saW8iLCJQcm9qZXRzIiwicGFnZSIsInNldFBhZ2UiLCJsb2NhbExpZ2h0TW9kZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsaWdodG1vZGVvbiIsInNldExpZ2h0bW9kZW9uIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRJdGVtIiwibGlnaHRfb3JfZGFyayIsInN1biIsIm1vb24iLCJuYXZUb2dnbGUiLCJzaG93Iiwic2V0U2hvdyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjdXJyZW50UGFnZSIsIm9uTmF2Q2xpY2siLCJtYXAiLCJwcm9qZXQiLCJzcmMiLCJpbWFnZSIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJsYXlvdXQiLCJoMiIsInRpdHJlIiwicG9ydGZvbGlvX2pvaW50IiwiZWxlbWVudCIsInAiLCJwb3J0Zm9saW9fdGFncyIsInRhZyIsInNob3J0IiwiYnV0dG9uIiwic3BhbiIsIm9uSGlkZSIsInNpemUiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwiQm9keSIsImRlc2NyaXB0aW9uIiwibGllbiIsImEiLCJocmVmIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/portfolio.jsx\n");

/***/ })

});