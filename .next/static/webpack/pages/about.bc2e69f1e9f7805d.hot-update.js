"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./pages/about.jsx":
/*!*************************!*\
  !*** ./pages/about.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction About() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex flex-column\" : \"body_dark d-flex flex-column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-transparent col-8 mb-4 mb-md-0 py-4 d-flex align-items-center text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Fade, {}, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n        lineNumber: 37,\n        columnNumber: 3\n    }, this);\n};\n_s(About, \"nMXhywd1ZVlPIQ5xynrFZ9lmTP8=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFpRDtBQUNWO0FBQ0E7QUFDQTs7QUFNeEIsU0FBU00sS0FBSyxHQUFHOztJQUU5QixJQUF3QkwsR0FBaUIsR0FBakJBLCtDQUFRLENBQUMsT0FBTyxDQUFDLEVBWDNDLElBV2EsR0FBYUEsR0FBaUIsR0FBOUIsRUFYYixPQVdzQixHQUFJQSxHQUFpQixHQUFyQjtJQUNwQixJQUFNUSxjQUFjLEdBQUcsS0FBNkIsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBRTtJQUMxRyxJQUFzQ1osSUFBd0IsR0FBeEJBLCtDQUFRLENBQUNRLGNBQWMsQ0FBQyxFQWJoRSxXQWFvQixHQUFvQlIsSUFBd0IsR0FBNUMsRUFicEIsY0Fhb0MsR0FBSUEsSUFBd0IsR0FBNUI7SUFJaEMsSUFBTWUsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBYUMsQ0FBQyxFQUFDO1FBQzVCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CSCxjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDLENBQUM7S0FDaEM7SUFFRFosZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBRyxJQUE2QixFQUFDO1lBQzdCVSxZQUFZLENBQUNPLE9BQU8sQ0FBQyxZQUFZLEVBQUVMLFdBQVcsQ0FBQyxDQUFDO1NBQ2pEO0tBQ0YsRUFBRTtRQUFDQSxXQUFXO0tBQUMsQ0FBQztJQUdwQixJQUFNTSxhQUFhLEdBQUc7UUFDakJDLEdBQUcsRUFBRVAsV0FBVyxHQUFHLFNBQVMsR0FBRyxNQUFNO1FBQ3JDUSxJQUFJLEVBQUVSLFdBQVcsR0FBRyxNQUFNLEdBQUcsU0FBUztRQUN0Q1MsU0FBUyxFQUFHVCxXQUFXLEdBQUcsRUFBRSxHQUFHLGFBQWE7S0FDL0M7SUFFSCxxQkFDQSw4REFBQ1UsS0FBRztRQUFDQyxTQUFTLEVBQUVYLFdBQVcsR0FBRywrQkFBK0IsR0FBRyw4QkFBOEI7OzBCQUM1Riw4REFBQ1gsd0RBQU07Z0JBQUN1QixPQUFPLEVBQUVWLFdBQVc7Z0JBQUVJLGFBQWEsRUFBRUEsYUFBYTtnQkFBRU4sV0FBVyxFQUFFQSxXQUFXO2dCQUFFYSxXQUFXLEVBQUVwQixJQUFJO2dCQUFFcUIsVUFBVSxFQUFFcEIsT0FBTzs7Ozs7b0JBQUc7MEJBQy9ILDhEQUFDZ0IsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7MEJBQzFCLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMscUZBQXFGOzhCQUNoRyw0RUFBQ3BCLGlEQUFJOzs7OzRCQUVFOzs7Ozt3QkFDTDs7Ozs7b0JBQ0E7MEJBQ04sOERBQUNELHdEQUFNOzs7O29CQUFFOzs7Ozs7WUFDTCxDQUNOO0NBQ0Q7R0F2Q3VCRSxLQUFLO0FBQUxBLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanN4PzUzYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2VsZW1lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9lbGVtZW50cy9mb290ZXJcIjtcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG5cbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoJ2Fib3V0Jyk7XG4gIGNvbnN0IGxvY2FsTGlnaHRNb2RlID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMSUdIVF9NT0RFXCIpKSA6ICcnO1xuICBjb25zdCBbbGlnaHRtb2Rlb24sIHNldExpZ2h0bW9kZW9uXSA9IHVzZVN0YXRlKGxvY2FsTGlnaHRNb2RlKTtcblxuIFxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TGlnaHRtb2Rlb24oIWxpZ2h0bW9kZW9uKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTElHSFRfTU9ERVwiLCBsaWdodG1vZGVvbik7XG4gICAgICAgIH1cbiAgICAgIH0sIFtsaWdodG1vZGVvbl0pXG5cbiAgICBcbiAgIGNvbnN0IGxpZ2h0X29yX2RhcmsgPSB7XG4gICAgICAgIHN1bjogbGlnaHRtb2Rlb24gPyAnI0RFNjQzOScgOiAnI2ZmZicsXG4gICAgICAgIG1vb246IGxpZ2h0bW9kZW9uID8gJyNmZmYnIDogJyNERTY0MzknLFxuICAgICAgICBuYXZUb2dnbGUgOiBsaWdodG1vZGVvbiA/ICcnIDogJ25hdmJhci1kYXJrJ1xuICAgIH1cblxuICByZXR1cm4oXG4gIDxkaXYgY2xhc3NOYW1lPXtsaWdodG1vZGVvbiA/IFwiYm9keV9saWdodCBkLWZsZXggZmxleC1jb2x1bW5cIiA6IFwiYm9keV9kYXJrIGQtZmxleCBmbGV4LWNvbHVtblwifT5cbiAgICA8SGVhZGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBsaWdodF9vcl9kYXJrPXtsaWdodF9vcl9kYXJrfSBsaWdodG1vZGVvbj17bGlnaHRtb2Rlb259IGN1cnJlbnRQYWdlPXtwYWdlfSBvbk5hdkNsaWNrPXtzZXRQYWdlfS8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC10cmFuc3BhcmVudCBjb2wtOCBtYi00IG1iLW1kLTAgcHktNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxGYWRlPlxuXG4gICAgICAgIDwvRmFkZT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyLz5cbiAgPC9kaXY+XG4pO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwiRm9vdGVyIiwiRmFkZSIsIkFib3V0IiwicGFnZSIsInNldFBhZ2UiLCJsb2NhbExpZ2h0TW9kZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsaWdodG1vZGVvbiIsInNldExpZ2h0bW9kZW9uIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRJdGVtIiwibGlnaHRfb3JfZGFyayIsInN1biIsIm1vb24iLCJuYXZUb2dnbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY3VycmVudFBhZ2UiLCJvbk5hdkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about.jsx\n");

/***/ })

});