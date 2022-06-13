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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Site; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Fade */ \"./node_modules/react-bootstrap/esm/Fade.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Site() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"home\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), fade = ref2[0], setFade = ref2[1];\n    setTimeout(function() {\n        setFade(true);\n    }, 300);\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light\" : \"body_dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-transparent col-8 mb-4 mb-md-0 py-4 d-flex align-items-center text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                in: fade,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"shadow-2-strong mb-5 card-img-top mx-auto\",\n                                    src: \"05.png\",\n                                    style: {\n                                        width: \"120px\",\n                                        transitionDuration: \"800ms\",\n                                        transitionDelay: \"200ms\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                in: fade,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"card-title mb-4\",\n                                    style: {\n                                        transitionDuration: \"800ms\",\n                                        transitionDelay: \"1s\"\n                                    },\n                                    children: \"Chapuis Dylan\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                in: fade,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"card-text mb-4\",\n                                    style: {\n                                        transitionDuration: \"800ms\",\n                                        transitionDelay: \"1.5s\"\n                                    },\n                                    children: \"D\\xe9veloppeur Web\"\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-unstyled mb-0 mt-5 row justify-content-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"https://github.com/CDylan-source\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"px-1 col-2\",\n                                            target: \"blank\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGithub\n                                            }, void 0, false, {\n                                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"https://www.linkedin.com/in/chapuis-dylan-373679210/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"px-1 col-2\",\n                                            target: \"blank\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faLinkedin\n                                            }, void 0, false, {\n                                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-center mt-5 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Bienvenue sur mon Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 73,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: \"mt-auto\"\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 76,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n        lineNumber: 44,\n        columnNumber: 3\n    }, this);\n};\n_s(Site, \"tF07upmB31wMZ5mt/XyiH3IvFog=\");\n_c = Site;\nvar _c;\n$RefreshReg$(_c, \"Site\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2VsZW1lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ZhZGUnO1xuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQge2ZhR2l0aHViLCBmYUxpbmtlZGlufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZWxlbWVudHMvZm9vdGVyXCI7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpdGUoKSB7XG5cbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoJ2hvbWUnKTtcbiAgY29uc3QgbG9jYWxMaWdodE1vZGUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxJR0hUX01PREVcIikpIDogJyc7XG4gIGNvbnN0IFtsaWdodG1vZGVvbiwgc2V0TGlnaHRtb2Rlb25dID0gdXNlU3RhdGUobG9jYWxMaWdodE1vZGUpO1xuICBjb25zdFtmYWRlLCBzZXRGYWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0RmFkZSh0cnVlKVxuICAgIH0sIDMwMClcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldExpZ2h0bW9kZW9uKCFsaWdodG1vZGVvbik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMSUdIVF9NT0RFXCIsIGxpZ2h0bW9kZW9uKTtcbiAgICAgICAgfVxuICAgICAgfSwgW2xpZ2h0bW9kZW9uXSlcblxuICAgIFxuICAgY29uc3QgbGlnaHRfb3JfZGFyayA9IHtcbiAgICAgICAgc3VuOiBsaWdodG1vZGVvbiA/ICcjREU2NDM5JyA6ICcjZmZmJyxcbiAgICAgICAgbW9vbjogbGlnaHRtb2Rlb24gPyAnI2ZmZicgOiAnI0RFNjQzOScsXG4gICAgICAgIG5hdlRvZ2dsZSA6IGxpZ2h0bW9kZW9uID8gJycgOiAnbmF2YmFyLWRhcmsnXG4gICAgfVxuXG5cbiAgcmV0dXJuKFxuICA8ZGl2IGNsYXNzTmFtZT17bGlnaHRtb2Rlb24gPyBcImJvZHlfbGlnaHRcIiA6IFwiYm9keV9kYXJrXCJ9PlxuICAgIDxIZWFkZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGxpZ2h0X29yX2Rhcms9e2xpZ2h0X29yX2Rhcmt9IGxpZ2h0bW9kZW9uPXtsaWdodG1vZGVvbn0gY3VycmVudFBhZ2U9e3BhZ2V9IG9uTmF2Q2xpY2s9e3NldFBhZ2V9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC10cmFuc3BhcmVudCBjb2wtOCBtYi00IG1iLW1kLTAgcHktNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8RmFkZSBpbj17ZmFkZX0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNoYWRvdy0yLXN0cm9uZyBtYi01IGNhcmQtaW1nLXRvcCBteC1hdXRvXCIgc3JjPVwiMDUucG5nXCIgc3R5bGU9e3t3aWR0aDpcIjEyMHB4XCIsIHRyYW5zaXRpb25EdXJhdGlvbjpcIjgwMG1zXCIsIHRyYW5zaXRpb25EZWxheTpcIjIwMG1zXCJ9fS8+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDxGYWRlIGluPXtmYWRlfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIG1iLTRcIiBzdHlsZT17e3RyYW5zaXRpb25EdXJhdGlvbjpcIjgwMG1zXCIsIHRyYW5zaXRpb25EZWxheTonMXMnfX0+Q2hhcHVpcyBEeWxhbjwvaDE+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDxGYWRlIGluPXtmYWRlfT5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRleHQgbWItNFwiIHN0eWxlPXt7dHJhbnNpdGlvbkR1cmF0aW9uOlwiODAwbXNcIiwgdHJhbnNpdGlvbkRlbGF5OlwiMS41c1wifX0+RMOpdmVsb3BwZXVyIFdlYjwvaDQ+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG1iLTAgbXQtNSByb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9DRHlsYW4tc291cmNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTEgY29sLTJcIiB0YXJnZXQ9e1wiYmxhbmtcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2l0aHVifS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vY2hhcHVpcy1keWxhbi0zNzM2NzkyMTAvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTEgY29sLTJcIiB0YXJnZXQ9e1wiYmxhbmtcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua2VkaW59Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC01IHRleHQtY2VudGVyXCI+XG4gICAgICA8aDI+QmllbnZlbnVlIHN1ciBtb24gUG9ydGZvbGlvPC9oMj5cbiAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyIGNsYXNzTmFtZT1cIm10LWF1dG9cIi8+XG4gIDwvZGl2PlxuKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIkZhZGUiLCJGb250QXdlc29tZUljb24iLCJmYUdpdGh1YiIsImZhTGlua2VkaW4iLCJMaW5rIiwiRm9vdGVyIiwiU2l0ZSIsInBhZ2UiLCJzZXRQYWdlIiwibG9jYWxMaWdodE1vZGUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGlnaHRtb2Rlb24iLCJzZXRMaWdodG1vZGVvbiIsImZhZGUiLCJzZXRGYWRlIiwic2V0VGltZW91dCIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0SXRlbSIsImxpZ2h0X29yX2RhcmsiLCJzdW4iLCJtb29uIiwibmF2VG9nZ2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImN1cnJlbnRQYWdlIiwib25OYXZDbGljayIsImluIiwiaW1nIiwic3JjIiwic3R5bGUiLCJ3aWR0aCIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25EZWxheSIsImgxIiwiaDQiLCJ1bCIsImhyZWYiLCJhIiwidGFyZ2V0IiwiaWNvbiIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});