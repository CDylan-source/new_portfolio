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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Portfolio() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"portfolio\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex flex-column\" : \"body_dark d-flex flex-column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex flex-column margin-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-transparent mb-4 p-4 d-flex align-items-center text-center col-md-6 col-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Fade, {\n                            in: fade,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text fs-5\",\n                                style: {\n                                    transitionDuration: \"400ms\"\n                                },\n                                children: \"Depuis toujours passionn\\xe9 par l\\u2019informatique et les nouvelles technologies, j\\u2019ai rejoint la formation de d\\xe9veloppeur web au sein de l\\u2019Access Code School en avril 2021.\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-transparent mb-4 p-4 d-flex align-items-center text-center col-md-6 offset-md-6 col-8 offset-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Fade, {\n                            in: fade,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text fs-5\",\n                                style: {\n                                    transitionDuration: \"400ms\",\n                                    transitionDelay: \"500ms\"\n                                },\n                                children: \"\\xc7a a \\xe9t\\xe9 pour moi une r\\xe9elle r\\xe9v\\xe9lation, le plaisir de transformer l\\u2019abstrait en concret, le code en page web, m\\u2019a rappel\\xe9 ma premi\\xe8re passion, les math\\xe9matiques.\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-transparent mb-4 p-4 d-flex align-items-center text-center col-md-6 col-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Fade, {\n                            in: fade,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text fs-5\",\n                                style: {\n                                    transitionDuration: \"400ms\",\n                                    transitionDelay: \"900ms\"\n                                },\n                                children: \"Je me plais \\xe0 continuer d\\u2019apprendre et effectuer mes veilles technologiques. R\\xe9cemment, c\\u2019est sur React que mon d\\xe9volu s\\u2019est jet\\xe9, ce framework associ\\xe9 \\xe0 Nextjs est d\\u2019une impressionante efficacit\\xe9.\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, this);\n};\n_s(Portfolio, \"lnHPCuCuDgk0szXCbswXMuCAx70=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7NEJBQ0g7Ozs7OztvQkFDRjswQkFDTiw4REFBQzlCLHdEQUFNOzs7O29CQUFFOzs7Ozs7WUFDTCxDQUNOO0NBQ0Q7R0EzQ3VCQyxTQUFTO0FBQVRBLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvLmpzeD80NTZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9lbGVtZW50cy9oZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZWxlbWVudHMvZm9vdGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvKCl7XG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoJ3BvcnRmb2xpbycpO1xuICAgIGNvbnN0IGxvY2FsTGlnaHRNb2RlID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMSUdIVF9NT0RFXCIpKSA6ICcnO1xuICAgIGNvbnN0IFtsaWdodG1vZGVvbiwgc2V0TGlnaHRtb2Rlb25dID0gdXNlU3RhdGUobG9jYWxMaWdodE1vZGUpO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldExpZ2h0bW9kZW9uKCFsaWdodG1vZGVvbik7XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMSUdIVF9NT0RFXCIsIGxpZ2h0bW9kZW9uKTtcbiAgICAgICAgfVxuICAgICAgfSwgW2xpZ2h0bW9kZW9uXSlcbiAgIGNvbnN0IGxpZ2h0X29yX2RhcmsgPSB7XG4gICAgICAgIHN1bjogbGlnaHRtb2Rlb24gPyAnI0RFNjQzOScgOiAnI2ZmZicsXG4gICAgICAgIG1vb246IGxpZ2h0bW9kZW9uID8gJyNmZmYnIDogJyNERTY0MzknLFxuICAgICAgICBuYXZUb2dnbGUgOiBsaWdodG1vZGVvbiA/ICcnIDogJ25hdmJhci1kYXJrJ1xuICAgIH1cblxuXG4gIHJldHVybihcbiAgPGRpdiBjbGFzc05hbWU9e2xpZ2h0bW9kZW9uID8gXCJib2R5X2xpZ2h0IGQtZmxleCBmbGV4LWNvbHVtblwiIDogXCJib2R5X2RhcmsgZC1mbGV4IGZsZXgtY29sdW1uXCJ9PlxuICAgIDxIZWFkZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGxpZ2h0X29yX2Rhcms9e2xpZ2h0X29yX2Rhcmt9IGxpZ2h0bW9kZW9uPXtsaWdodG1vZGVvbn0gY3VycmVudFBhZ2U9e3BhZ2V9IG9uTmF2Q2xpY2s9e3NldFBhZ2V9Lz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggZmxleC1jb2x1bW4gbWFyZ2luLXN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC10cmFuc3BhcmVudCBtYi00IHAtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGNvbC1tZC02IGNvbC04XCI+XG4gICAgICAgIDxGYWRlIGluPXtmYWRlfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgZnMtNVwiIHN0eWxlPXt7dHJhbnNpdGlvbkR1cmF0aW9uOlwiNDAwbXNcIn19PkRlcHVpcyB0b3Vqb3VycyBwYXNzaW9ubsOpIHBhciBs4oCZaW5mb3JtYXRpcXVlIGV0IGxlcyBub3V2ZWxsZXMgdGVjaG5vbG9naWVzLCBq4oCZYWkgcmVqb2ludCBsYSBmb3JtYXRpb24gZGUgZMOpdmVsb3BwZXVyIHdlYiBhdSBzZWluIGRlIGzigJlBY2Nlc3MgQ29kZSBTY2hvb2wgZW4gYXZyaWwgMjAyMS48L3A+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtdHJhbnNwYXJlbnQgbWItNCBwLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBjb2wtbWQtNiBvZmZzZXQtbWQtNiBjb2wtOCBvZmZzZXQtNFwiPlxuICAgICAgICA8RmFkZSBpbj17ZmFkZX0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZzLTVcIiBzdHlsZT17e3RyYW5zaXRpb25EdXJhdGlvbjpcIjQwMG1zXCIsIHRyYW5zaXRpb25EZWxheTpcIjUwMG1zXCJ9fT7Dh2EgYSDDqXTDqSBwb3VyIG1vaSB1bmUgcsOpZWxsZSByw6l2w6lsYXRpb24sIGxlIHBsYWlzaXIgZGUgdHJhbnNmb3JtZXIgbOKAmWFic3RyYWl0IGVuIGNvbmNyZXQsIGxlIGNvZGUgZW4gcGFnZSB3ZWIsIG3igJlhIHJhcHBlbMOpIG1hIHByZW1pw6hyZSBwYXNzaW9uLCBsZXMgbWF0aMOpbWF0aXF1ZXMuPC9wPlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLXRyYW5zcGFyZW50IG1iLTQgcC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgY29sLW1kLTYgY29sLThcIj5cbiAgICAgICAgPEZhZGUgaW49e2ZhZGV9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmcy01XCIgc3R5bGU9e3t0cmFuc2l0aW9uRHVyYXRpb246XCI0MDBtc1wiLCB0cmFuc2l0aW9uRGVsYXk6XCI5MDBtc1wifX0+SmUgbWUgcGxhaXMgw6AgY29udGludWVyIGTigJlhcHByZW5kcmUgZXQgZWZmZWN0dWVyIG1lcyB2ZWlsbGVzIHRlY2hub2xvZ2lxdWVzLiBSw6ljZW1tZW50LCBj4oCZZXN0IHN1ciBSZWFjdCBxdWUgbW9uIGTDqXZvbHUgc+KAmWVzdCBqZXTDqSwgY2UgZnJhbWV3b3JrIGFzc29jacOpIMOgIE5leHRqcyBlc3QgZOKAmXVuZSBpbXByZXNzaW9uYW50ZSBlZmZpY2FjaXTDqS48L3A+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxGb290ZXIvPlxuICA8L2Rpdj5cbik7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsIkZvb3RlciIsIlBvcnRmb2xpbyIsInBhZ2UiLCJzZXRQYWdlIiwibG9jYWxMaWdodE1vZGUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGlnaHRtb2Rlb24iLCJzZXRMaWdodG1vZGVvbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0SXRlbSIsImxpZ2h0X29yX2RhcmsiLCJzdW4iLCJtb29uIiwibmF2VG9nZ2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImN1cnJlbnRQYWdlIiwib25OYXZDbGljayIsIkZhZGUiLCJpbiIsImZhZGUiLCJwIiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/portfolio.jsx\n");

/***/ })

});