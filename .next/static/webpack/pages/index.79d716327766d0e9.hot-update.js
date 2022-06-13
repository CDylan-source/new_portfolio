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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Site; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Fade */ \"./node_modules/react-bootstrap/esm/Fade.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Site() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"home\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light\" : \"body_dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-transparent col-md-8 mb-4 mb-md-0 py-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                timeout: \"800\",\n                                in: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"shadow-2-strong mb-5 card-img-top mx-auto\",\n                                    src: \"05.png\",\n                                    style: {\n                                        width: \"100px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 12\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 10\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"card-text\",\n                                children: \"Bonjour, je suis\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"card-title\",\n                                children: \"D\\xe9veloppeur Web\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"card-text\",\n                                children: \"Et vous souhaite la\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"card-text\",\n                                children: \"Bienvenue sur mon Portfolio\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, this);\n};\n_s(Site, \"rBT2XSsgfhhi7AtBRgFvtjh11fY=\");\n_c = Site;\nvar _c;\n$RefreshReg$(_c, \"Site\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlEO0FBQ1Y7QUFDQzs7QUFLekIsU0FBU0ssSUFBSSxHQUFHOztJQUU3QixJQUF3QkgsR0FBZ0IsR0FBaEJBLCtDQUFRLENBQUMsTUFBTSxDQUFDLEVBVDFDLElBU2EsR0FBYUEsR0FBZ0IsR0FBN0IsRUFUYixPQVNzQixHQUFJQSxHQUFnQixHQUFwQjtJQUNwQixJQUFNTSxjQUFjLEdBQUcsS0FBNkIsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBRTtJQUMxRyxJQUFzQ1YsSUFBd0IsR0FBeEJBLCtDQUFRLENBQUNNLGNBQWMsQ0FBQyxFQVhoRSxXQVdvQixHQUFvQk4sSUFBd0IsR0FBNUMsRUFYcEIsY0FXb0MsR0FBSUEsSUFBd0IsR0FBNUI7SUFJaEMsSUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBYUMsQ0FBQyxFQUFDO1FBQzVCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CSCxjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDLENBQUM7S0FFaEM7SUFFRFosZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBRyxJQUE2QixFQUFDO1lBQzdCVSxZQUFZLENBQUNPLE9BQU8sQ0FBQyxZQUFZLEVBQUVMLFdBQVcsQ0FBQyxDQUFDO1NBQ2pEO0tBQ0YsRUFBRTtRQUFDQSxXQUFXO0tBQUMsQ0FBQztJQUdwQixJQUFNTSxhQUFhLEdBQUc7UUFDakJDLEdBQUcsRUFBRVAsV0FBVyxHQUFHLFNBQVMsR0FBRyxNQUFNO1FBQ3JDUSxJQUFJLEVBQUVSLFdBQVcsR0FBRyxNQUFNLEdBQUcsU0FBUztRQUN0Q1MsU0FBUyxFQUFHVCxXQUFXLEdBQUcsRUFBRSxHQUFHLGFBQWE7S0FDL0M7SUFFSCxxQkFDQSw4REFBQ1UsS0FBRztRQUFDQyxTQUFTLEVBQUVYLFdBQVcsR0FBRyxZQUFZLEdBQUcsV0FBVzs7MEJBQ3RELDhEQUFDVix3REFBTTtnQkFBQ3NCLE9BQU8sRUFBRVYsV0FBVztnQkFBRUksYUFBYSxFQUFFQSxhQUFhO2dCQUFFTixXQUFXLEVBQUVBLFdBQVc7Z0JBQUVhLFdBQVcsRUFBRXBCLElBQUk7Z0JBQUVxQixVQUFVLEVBQUVwQixPQUFPOzs7OztvQkFBSTswQkFDaEksOERBQUNnQixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsNERBQTREOzBCQUN6RSw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGtEQUFrRDs4QkFDaEUsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxXQUFXOzswQ0FDeEIsOERBQUNwQiw0REFBSTtnQ0FBQ3dCLE9BQU8sRUFBQyxLQUFLO2dDQUFDQyxFQUFFLEVBQUUsSUFBSTswQ0FDMUIsNEVBQUNDLEtBQUc7b0NBQUNOLFNBQVMsRUFBQywyQ0FBMkM7b0NBQUNPLEdBQUcsRUFBQyxRQUFRO29DQUFDQyxLQUFLLEVBQUU7d0NBQUNDLEtBQUssRUFBQyxPQUFPO3FDQUFDOzs7Ozt3Q0FBRzs7Ozs7b0NBQzVGOzBDQUVOLDhEQUFDQyxJQUFFO2dDQUFDVixTQUFTLEVBQUMsV0FBVzswQ0FBQyxrQkFBZ0I7Ozs7O29DQUFLOzBDQUMvQyw4REFBQ1csSUFBRTtnQ0FBQ1gsU0FBUyxFQUFDLFlBQVk7MENBQUMsb0JBQWU7Ozs7O29DQUFLOzBDQUMvQyw4REFBQ1UsSUFBRTtnQ0FBQ1YsU0FBUyxFQUFDLFdBQVc7MENBQUMscUJBQW1COzs7OztvQ0FBSzswQ0FDbEQsOERBQUNZLElBQUU7Z0NBQUNaLFNBQVMsRUFBQyxXQUFXOzBDQUFDLDZCQUEyQjs7Ozs7b0NBQUs7Ozs7Ozs0QkFDdEQ7Ozs7O3dCQUNGOzs7OztvQkFDRjs7Ozs7O1lBQ0YsQ0FDTjtDQUNEO0dBOUN1Qm5CLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vZWxlbWVudHMvaGVhZGVyXCI7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1ib290c3RyYXAvRmFkZSc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpdGUoKSB7XG5cbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoJ2hvbWUnKTtcbiAgY29uc3QgbG9jYWxMaWdodE1vZGUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxJR0hUX01PREVcIikpIDogJyc7XG4gIGNvbnN0IFtsaWdodG1vZGVvbiwgc2V0TGlnaHRtb2Rlb25dID0gdXNlU3RhdGUobG9jYWxMaWdodE1vZGUpO1xuXG4gXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRMaWdodG1vZGVvbighbGlnaHRtb2Rlb24pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTElHSFRfTU9ERVwiLCBsaWdodG1vZGVvbik7XG4gICAgICAgIH1cbiAgICAgIH0sIFtsaWdodG1vZGVvbl0pXG5cbiAgICBcbiAgIGNvbnN0IGxpZ2h0X29yX2RhcmsgPSB7XG4gICAgICAgIHN1bjogbGlnaHRtb2Rlb24gPyAnI0RFNjQzOScgOiAnI2ZmZicsXG4gICAgICAgIG1vb246IGxpZ2h0bW9kZW9uID8gJyNmZmYnIDogJyNERTY0MzknLFxuICAgICAgICBuYXZUb2dnbGUgOiBsaWdodG1vZGVvbiA/ICcnIDogJ25hdmJhci1kYXJrJ1xuICAgIH1cblxuICByZXR1cm4oXG4gIDxkaXYgY2xhc3NOYW1lPXtsaWdodG1vZGVvbiA/IFwiYm9keV9saWdodFwiIDogXCJib2R5X2RhcmtcIn0+XG4gICAgPEhlYWRlciBvbkNsaWNrPXtoYW5kbGVDbGlja30gbGlnaHRfb3JfZGFyaz17bGlnaHRfb3JfZGFya30gbGlnaHRtb2Rlb249e2xpZ2h0bW9kZW9ufSBjdXJyZW50UGFnZT17cGFnZX0gb25OYXZDbGljaz17c2V0UGFnZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLXRyYW5zcGFyZW50IGNvbC1tZC04IG1iLTQgbWItbWQtMCBweS01XCI+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgIDxGYWRlIHRpbWVvdXQ9XCI4MDBcIiBpbj17dHJ1ZX0+XG4gICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2hhZG93LTItc3Ryb25nIG1iLTUgY2FyZC1pbWctdG9wIG14LWF1dG9cIiBzcmM9XCIwNS5wbmdcIiBzdHlsZT17e3dpZHRoOlwiMTAwcHhcIn19Lz5cbiAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgIFxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5Cb25qb3VyLCBqZSBzdWlzPC9oND5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkTDqXZlbG9wcGV1ciBXZWI8L2gxPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5FdCB2b3VzIHNvdWhhaXRlIGxhPC9oND5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+QmllbnZlbnVlIHN1ciBtb24gUG9ydGZvbGlvPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiRmFkZSIsIlNpdGUiLCJwYWdlIiwic2V0UGFnZSIsImxvY2FsTGlnaHRNb2RlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxpZ2h0bW9kZW9uIiwic2V0TGlnaHRtb2Rlb24iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEl0ZW0iLCJsaWdodF9vcl9kYXJrIiwic3VuIiwibW9vbiIsIm5hdlRvZ2dsZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjdXJyZW50UGFnZSIsIm9uTmF2Q2xpY2siLCJ0aW1lb3V0IiwiaW4iLCJpbWciLCJzcmMiLCJzdHlsZSIsIndpZHRoIiwiaDQiLCJoMSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});