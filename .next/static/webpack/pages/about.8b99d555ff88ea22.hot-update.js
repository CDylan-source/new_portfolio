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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction About() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"about\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), fade = ref2[0], setFade = ref2[1];\n    setTimeout(function() {\n        setFade(true);\n    }, 300);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex flex-column\" : \"body_dark d-flex flex-column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex flex-column \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-transparent col-8 mb-4 mb-md-0 p-4 d-flex align-items-center text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n                        in: fade,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"card-text\",\n                            style: {\n                                transitionDuration: \"800ms\",\n                                transitionDelay: \"400ms\"\n                            },\n                            children: \"Depuis toujours passionn\\xe9 par l\\u2019informatique et les nouvelles technologies, j\\u2019ai rejoint la formation de d\\xe9veloppeur web au sein de l\\u2019Access Code School en avril 2021.\"\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/about.jsx\",\n        lineNumber: 43,\n        columnNumber: 3\n    }, this);\n};\n_s(About, \"u7qjU9cMFOw72SlssU/ecrteEVc=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFpRDtBQUNWO0FBQ0E7QUFDQTs7QUFNeEIsU0FBU00sS0FBSyxHQUFHOztJQUU5QixJQUF3QkwsR0FBaUIsR0FBakJBLCtDQUFRLENBQUMsT0FBTyxDQUFDLEVBWDNDLElBV2EsR0FBYUEsR0FBaUIsR0FBOUIsRUFYYixPQVdzQixHQUFJQSxHQUFpQixHQUFyQjtJQUNwQixJQUFNUSxjQUFjLEdBQUcsS0FBNkIsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBRTtJQUMxRyxJQUFzQ1osSUFBd0IsR0FBeEJBLCtDQUFRLENBQUNRLGNBQWMsQ0FBQyxFQWJoRSxXQWFvQixHQUFvQlIsSUFBd0IsR0FBNUMsRUFicEIsY0Fhb0MsR0FBSUEsSUFBd0IsR0FBNUI7SUFJaEMsSUFBTWUsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBYUMsQ0FBQyxFQUFDO1FBQzVCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CSCxjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDLENBQUM7S0FDaEM7SUFFRFosZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBRyxJQUE2QixFQUFDO1lBQzdCVSxZQUFZLENBQUNPLE9BQU8sQ0FBQyxZQUFZLEVBQUVMLFdBQVcsQ0FBQyxDQUFDO1NBQ2pEO0tBQ0YsRUFBRTtRQUFDQSxXQUFXO0tBQUMsQ0FBQztJQUdwQixJQUFNTSxhQUFhLEdBQUc7UUFDakJDLEdBQUcsRUFBRVAsV0FBVyxHQUFHLFNBQVMsR0FBRyxNQUFNO1FBQ3JDUSxJQUFJLEVBQUVSLFdBQVcsR0FBRyxNQUFNLEdBQUcsU0FBUztRQUN0Q1MsU0FBUyxFQUFHVCxXQUFXLEdBQUcsRUFBRSxHQUFHLGFBQWE7S0FDL0M7SUFFRCxJQUF1QmIsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQW5DMUMsSUFtQ2MsR0FBYUEsSUFBZSxHQUE1QixFQW5DZCxPQW1DdUIsR0FBSUEsSUFBZSxHQUFuQjtJQUVuQnlCLFVBQVUsQ0FBQyxXQUFNO1FBQ2ZELE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDZCxFQUFFLEdBQUcsQ0FBQztJQUVULHFCQUNBLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBRWQsV0FBVyxHQUFHLCtCQUErQixHQUFHLDhCQUE4Qjs7MEJBQzVGLDhEQUFDWCx3REFBTTtnQkFBQzBCLE9BQU8sRUFBRWIsV0FBVztnQkFBRUksYUFBYSxFQUFFQSxhQUFhO2dCQUFFTixXQUFXLEVBQUVBLFdBQVc7Z0JBQUVnQixXQUFXLEVBQUV2QixJQUFJO2dCQUFFd0IsVUFBVSxFQUFFdkIsT0FBTzs7Ozs7b0JBQUc7MEJBQy9ILDhEQUFDbUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLCtCQUErQjswQkFDNUMsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxvRkFBb0Y7OEJBQ2pHLDRFQUFDdkIsaURBQUk7d0JBQUMyQixFQUFFLEVBQUVSLElBQUk7a0NBQ1osNEVBQUNTLEdBQUM7NEJBQUNMLFNBQVMsRUFBQyxXQUFXOzRCQUFDTSxLQUFLLEVBQUU7Z0NBQUNDLGtCQUFrQixFQUFDLE9BQU87Z0NBQUVDLGVBQWUsRUFBQyxPQUFPOzZCQUFDO3NDQUFFLDhMQUF1Szs7Ozs7Z0NBQUk7Ozs7OzRCQUM3UDs7Ozs7d0JBQ0g7Ozs7O29CQUNGOzBCQUNOLDhEQUFDaEMsd0RBQU07Ozs7b0JBQUU7Ozs7OztZQUNMLENBQ047Q0FDRDtHQTdDdUJFLEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hYm91dC5qc3g/NTNiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vZWxlbWVudHMvaGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2VsZW1lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcblxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgnYWJvdXQnKTtcbiAgY29uc3QgbG9jYWxMaWdodE1vZGUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxJR0hUX01PREVcIikpIDogJyc7XG4gIGNvbnN0IFtsaWdodG1vZGVvbiwgc2V0TGlnaHRtb2Rlb25dID0gdXNlU3RhdGUobG9jYWxMaWdodE1vZGUpO1xuXG4gXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRMaWdodG1vZGVvbighbGlnaHRtb2Rlb24pO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMSUdIVF9NT0RFXCIsIGxpZ2h0bW9kZW9uKTtcbiAgICAgICAgfVxuICAgICAgfSwgW2xpZ2h0bW9kZW9uXSlcblxuICAgIFxuICAgY29uc3QgbGlnaHRfb3JfZGFyayA9IHtcbiAgICAgICAgc3VuOiBsaWdodG1vZGVvbiA/ICcjREU2NDM5JyA6ICcjZmZmJyxcbiAgICAgICAgbW9vbjogbGlnaHRtb2Rlb24gPyAnI2ZmZicgOiAnI0RFNjQzOScsXG4gICAgICAgIG5hdlRvZ2dsZSA6IGxpZ2h0bW9kZW9uID8gJycgOiAnbmF2YmFyLWRhcmsnXG4gICAgfVxuXG4gICAgY29uc3RbZmFkZSwgc2V0RmFkZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEZhZGUodHJ1ZSlcbiAgICB9LCAzMDApXG5cbiAgcmV0dXJuKFxuICA8ZGl2IGNsYXNzTmFtZT17bGlnaHRtb2Rlb24gPyBcImJvZHlfbGlnaHQgZC1mbGV4IGZsZXgtY29sdW1uXCIgOiBcImJvZHlfZGFyayBkLWZsZXggZmxleC1jb2x1bW5cIn0+XG4gICAgPEhlYWRlciBvbkNsaWNrPXtoYW5kbGVDbGlja30gbGlnaHRfb3JfZGFyaz17bGlnaHRfb3JfZGFya30gbGlnaHRtb2Rlb249e2xpZ2h0bW9kZW9ufSBjdXJyZW50UGFnZT17cGFnZX0gb25OYXZDbGljaz17c2V0UGFnZX0vPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBmbGV4LWNvbHVtbiBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLXRyYW5zcGFyZW50IGNvbC04IG1iLTQgbWItbWQtMCBwLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8RmFkZSBpbj17ZmFkZX0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIgc3R5bGU9e3t0cmFuc2l0aW9uRHVyYXRpb246XCI4MDBtc1wiLCB0cmFuc2l0aW9uRGVsYXk6XCI0MDBtc1wifX0+RGVwdWlzIHRvdWpvdXJzIHBhc3Npb25uw6kgcGFyIGzigJlpbmZvcm1hdGlxdWUgZXQgbGVzIG5vdXZlbGxlcyB0ZWNobm9sb2dpZXMsIGrigJlhaSByZWpvaW50IGxhIGZvcm1hdGlvbiBkZSBkw6l2ZWxvcHBldXIgd2ViIGF1IHNlaW4gZGUgbOKAmUFjY2VzcyBDb2RlIFNjaG9vbCBlbiBhdnJpbCAyMDIxLjwvcD5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPEZvb3Rlci8+XG4gIDwvZGl2PlxuKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsIkZvb3RlciIsIkZhZGUiLCJBYm91dCIsInBhZ2UiLCJzZXRQYWdlIiwibG9jYWxMaWdodE1vZGUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGlnaHRtb2Rlb24iLCJzZXRMaWdodG1vZGVvbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0SXRlbSIsImxpZ2h0X29yX2RhcmsiLCJzdW4iLCJtb29uIiwibmF2VG9nZ2xlIiwiZmFkZSIsInNldEZhZGUiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImN1cnJlbnRQYWdlIiwib25OYXZDbGljayIsImluIiwicCIsInN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about.jsx\n");

/***/ })

});