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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Portfolio(param) {\n    var Projets = param.Projets;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"portfolio\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    Projets[0].portfolio_joint.forEach(function(element) {\n        console.log(element.portfolio_tags.tag);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex flex-column\" : \"body_dark d-flex flex-column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-transparent margin-start col-md-4 col-8 mb-4 mb-md-0 py-4 d-flex offset-2 offset-md-0 align-items-center text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: Projets[0].image,\n                                alt: \"Photo du projet\",\n                                className: \"shadow-2-strong mb-4 card-img-top mx-auto\",\n                                style: {\n                                    width: \"100%\",\n                                    height: \"auto\",\n                                    transitionDuration: \"400ms\",\n                                    borderRadius: \"0.6rem\"\n                                },\n                                width: \"1000\",\n                                height: \"1000\",\n                                layout: \"raw\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 8\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"card-title mb-3\",\n                                style: {\n                                    transitionDuration: \"400ms\",\n                                    transitionDelay: \"500ms\",\n                                    fontSize: \"2rem\"\n                                },\n                                children: Projets[0].titre\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex flex-wrap justify-content-center gap-3 mb-3\",\n                                children: Projets[0].portfolio_joint.map(function(element) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"card-text mb-1 mb-md-1 tag\",\n                                        style: {\n                                            transitionDuration: \"400ms\",\n                                            transitionDelay: \".9s\"\n                                        },\n                                        children: element.portfolio_tags.tag\n                                    }, void 0, false, {\n                                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text mb-1 mb-md-2\",\n                                children: Projets[0].short\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, this);\n};\n_s(Portfolio, \"lnHPCuCuDgk0szXCbswXMuCAx70=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVJLGVBQWUsRUFBQyxPQUFPO29DQUFFQyxRQUFRLEVBQUUsTUFBTTtpQ0FBQzswQ0FBR3pDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzBDLEtBQUs7Ozs7O29DQUFNOzBDQUN2SSw4REFBQ2pCLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxvREFBb0Q7MENBQ2hFMUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDa0IsZUFBZSxDQUFDeUIsR0FBRyxDQUFDLFNBQUN2QixPQUFPLEVBQUs7b0NBQzNDLHFCQUNFLDhEQUFDd0IsR0FBQzt3Q0FBQ2xCLFNBQVMsRUFBQyw0QkFBNEI7d0NBQUNPLEtBQUssRUFBRTs0Q0FBQ0csa0JBQWtCLEVBQUMsT0FBTzs0Q0FBRUksZUFBZSxFQUFDLEtBQUs7eUNBQUM7a0RBQUdwQixPQUFPLENBQUNHLGNBQWMsQ0FBQ0MsR0FBRzs7Ozs7NkNBQUssQ0FDckk7aUNBQ0EsQ0FDRjs7Ozs7b0NBQ0M7MENBQ04sOERBQUNvQixHQUFDO2dDQUFDbEIsU0FBUyxFQUFDLHdCQUF3QjswQ0FBRTFCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzZDLEtBQUs7Ozs7O29DQUFLOzs7Ozs7NEJBQzFEOzs7Ozt3QkFDRjs7Ozs7b0JBQ0E7MEJBQ1IsOERBQUNqRCx3REFBTTs7OztvQkFBRTs7Ozs7O1lBQ0wsQ0FDTjtDQUNEO0dBN0N1QkcsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BvcnRmb2xpby5qc3g/NDU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vZWxlbWVudHMvaGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2VsZW1lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IHtQcmlzbWFDbGllbnR9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oe1Byb2pldHN9KXtcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgncG9ydGZvbGlvJyk7XG4gICAgY29uc3QgbG9jYWxMaWdodE1vZGUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxJR0hUX01PREVcIikpIDogJyc7XG4gICAgY29uc3QgW2xpZ2h0bW9kZW9uLCBzZXRMaWdodG1vZGVvbl0gPSB1c2VTdGF0ZShsb2NhbExpZ2h0TW9kZSk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TGlnaHRtb2Rlb24oIWxpZ2h0bW9kZW9uKTtcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkxJR0hUX01PREVcIiwgbGlnaHRtb2Rlb24pO1xuICAgICAgICB9XG4gICAgICB9LCBbbGlnaHRtb2Rlb25dKVxuICAgY29uc3QgbGlnaHRfb3JfZGFyayA9IHtcbiAgICAgICAgc3VuOiBsaWdodG1vZGVvbiA/ICcjREU2NDM5JyA6ICcjZmZmJyxcbiAgICAgICAgbW9vbjogbGlnaHRtb2Rlb24gPyAnI2ZmZicgOiAnI0RFNjQzOScsXG4gICAgICAgIG5hdlRvZ2dsZSA6IGxpZ2h0bW9kZW9uID8gJycgOiAnbmF2YmFyLWRhcmsnXG4gICAgfVxuICAgIFByb2pldHNbMF0ucG9ydGZvbGlvX2pvaW50LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50LnBvcnRmb2xpb190YWdzLnRhZylcbiAgICB9KTtcblxuICByZXR1cm4oXG4gIDxkaXYgY2xhc3NOYW1lPXtsaWdodG1vZGVvbiA/IFwiYm9keV9saWdodCBkLWZsZXggZmxleC1jb2x1bW5cIiA6IFwiYm9keV9kYXJrIGQtZmxleCBmbGV4LWNvbHVtblwifT5cbiAgICA8SGVhZGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBsaWdodF9vcl9kYXJrPXtsaWdodF9vcl9kYXJrfSBsaWdodG1vZGVvbj17bGlnaHRtb2Rlb259IGN1cnJlbnRQYWdlPXtwYWdlfSBvbk5hdkNsaWNrPXtzZXRQYWdlfS8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC10cmFuc3BhcmVudCBtYXJnaW4tc3RhcnQgY29sLW1kLTQgY29sLTggbWItNCBtYi1tZC0wIHB5LTQgZC1mbGV4IG9mZnNldC0yIG9mZnNldC1tZC0wIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPiAgICAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgIDxJbWFnZSBzcmM9e1Byb2pldHNbMF0uaW1hZ2V9IGFsdD1cIlBob3RvIGR1IHByb2pldFwiIGNsYXNzTmFtZT1cInNoYWRvdy0yLXN0cm9uZyBtYi00IGNhcmQtaW1nLXRvcCBteC1hdXRvXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiYXV0b1wiLCB0cmFuc2l0aW9uRHVyYXRpb246XCI0MDBtc1wiLCBib3JkZXJSYWRpdXM6IFwiMC42cmVtXCJ9fSB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCIxMDAwXCIgbGF5b3V0PVwicmF3XCIvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgbWItM1wiIHN0eWxlPXt7dHJhbnNpdGlvbkR1cmF0aW9uOlwiNDAwbXNcIiwgdHJhbnNpdGlvbkRlbGF5Oic1MDBtcycsIGZvbnRTaXplOiBcIjJyZW1cIn19PntQcm9qZXRzWzBdLnRpdHJlfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWNlbnRlciBnYXAtMyBtYi0zXCI+XG4gICAgICAgICAgICAgIHtQcm9qZXRzWzBdLnBvcnRmb2xpb19qb2ludC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgbWItMSBtYi1tZC0xIHRhZ1wiIHN0eWxlPXt7dHJhbnNpdGlvbkR1cmF0aW9uOlwiNDAwbXNcIiwgdHJhbnNpdGlvbkRlbGF5OlwiLjlzXCJ9fT57ZWxlbWVudC5wb3J0Zm9saW9fdGFncy50YWd9PC9wPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBtYi0xIG1iLW1kLTJcIj57UHJvamV0c1swXS5zaG9ydH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyLz5cbiAgPC9kaXY+XG4pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcbiAgICAgICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgICAgICBjb25zdCBQcm9qZXRzID0gYXdhaXQgcHJpc21hLnBvcnRmb2xpb19wcm9qZXRzLmZpbmRNYW55KHtcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBwb3J0Zm9saW9fam9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9ydGZvbGlvX3RhZ3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICByZXR1cm57XG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIFByb2pldHMgICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6MjAwMCxcbiAgICAgIH1cbn1cbi8vIGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXpIdUJlcURfMVJ0Z1N6Z1FJc0cwZGJJT1psOUxNREdYL3ZpZXc/dXNwPXNoYXJpbmciXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsIkZvb3RlciIsIkxpbmsiLCJJbWFnZSIsIlBvcnRmb2xpbyIsIlByb2pldHMiLCJwYWdlIiwic2V0UGFnZSIsImxvY2FsTGlnaHRNb2RlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxpZ2h0bW9kZW9uIiwic2V0TGlnaHRtb2Rlb24iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEl0ZW0iLCJsaWdodF9vcl9kYXJrIiwic3VuIiwibW9vbiIsIm5hdlRvZ2dsZSIsInBvcnRmb2xpb19qb2ludCIsImZvckVhY2giLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsInBvcnRmb2xpb190YWdzIiwidGFnIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImN1cnJlbnRQYWdlIiwib25OYXZDbGljayIsInNyYyIsImltYWdlIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImJvcmRlclJhZGl1cyIsImxheW91dCIsImgxIiwidHJhbnNpdGlvbkRlbGF5IiwiZm9udFNpemUiLCJ0aXRyZSIsIm1hcCIsInAiLCJzaG9ydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/portfolio.jsx\n");

/***/ })

});