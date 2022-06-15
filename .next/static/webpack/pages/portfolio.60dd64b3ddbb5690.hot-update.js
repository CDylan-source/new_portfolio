/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./pages/elements/.db/prisma.js":
/*!**************************************!*\
  !*** ./pages/elements/.db/prisma.js ***!
  \**************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/portfolio.jsx":
/*!*****************************!*\
  !*** ./pages/portfolio.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/footer */ \"./pages/elements/footer.jsx\");\n/* harmony import */ var _elements_db_prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/.db/prisma */ \"./pages/elements/.db/prisma.js\");\n/* harmony import */ var _elements_db_prisma__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elements_db_prisma__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Portfolio(param) {\n    var id = param.id;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"portfolio\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light d-flex flex-column\" : \"body_dark d-flex flex-column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex flex-column margin-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    children: id\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/portfolio.jsx\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, this);\n};\n_s(Portfolio, \"lnHPCuCuDgk0szXCbswXMuCAx70=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3J0Zm9saW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpRDtBQUNWO0FBQ0E7QUFDUTs7O0FBR2hDLFNBQVNNLFNBQVMsQ0FBQyxLQUFJLEVBQUM7UUFBTCxFQUFHLEdBQUgsS0FBSSxDQUFIQyxFQUFFOztJQUNqQyxJQUF3Qk4sR0FBcUIsR0FBckJBLCtDQUFRLENBQUMsV0FBVyxDQUFDLEVBUGpELElBT2UsR0FBYUEsR0FBcUIsR0FBbEMsRUFQZixPQU93QixHQUFJQSxHQUFxQixHQUF6QjtJQUNwQixJQUFNUyxjQUFjLEdBQUcsS0FBNkIsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBRTtJQUMxRyxJQUFzQ2IsSUFBd0IsR0FBeEJBLCtDQUFRLENBQUNTLGNBQWMsQ0FBQyxFQVRsRSxXQVNzQixHQUFvQlQsSUFBd0IsR0FBNUMsRUFUdEIsY0FTc0MsR0FBSUEsSUFBd0IsR0FBNUI7SUFDbEMsSUFBTWdCLFdBQVcsR0FBRyxTQUFkQSxXQUFXLENBQWFDLENBQUMsRUFBQztRQUM1QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUNuQkgsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQyxDQUFDO0tBQ2hDO0lBQ0RiLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUcsSUFBNkIsRUFBQztZQUM3QlcsWUFBWSxDQUFDTyxPQUFPLENBQUMsWUFBWSxFQUFFTCxXQUFXLENBQUMsQ0FBQztTQUNqRDtLQUNGLEVBQUU7UUFBQ0EsV0FBVztLQUFDLENBQUM7SUFDcEIsSUFBTU0sYUFBYSxHQUFHO1FBQ2pCQyxHQUFHLEVBQUVQLFdBQVcsR0FBRyxTQUFTLEdBQUcsTUFBTTtRQUNyQ1EsSUFBSSxFQUFFUixXQUFXLEdBQUcsTUFBTSxHQUFHLFNBQVM7UUFDdENTLFNBQVMsRUFBR1QsV0FBVyxHQUFHLEVBQUUsR0FBRyxhQUFhO0tBQy9DO0lBR0gscUJBQ0EsOERBQUNVLEtBQUc7UUFBQ0MsU0FBUyxFQUFFWCxXQUFXLEdBQUcsK0JBQStCLEdBQUcsOEJBQThCOzswQkFDNUYsOERBQUNaLHdEQUFNO2dCQUFDd0IsT0FBTyxFQUFFVixXQUFXO2dCQUFFSSxhQUFhLEVBQUVBLGFBQWE7Z0JBQUVOLFdBQVcsRUFBRUEsV0FBVztnQkFBRWEsV0FBVyxFQUFFcEIsSUFBSTtnQkFBRXFCLFVBQVUsRUFBRXBCLE9BQU87Ozs7O29CQUFHOzBCQUMvSCw4REFBQ2dCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywyQ0FBMkM7MEJBQ3RELDRFQUFDSSxLQUFHOzhCQUNDdkIsRUFBRTs7Ozs7d0JBQ0Q7Ozs7O29CQUVKOzBCQUNOLDhEQUFDSCx3REFBTTs7OztvQkFBRTs7Ozs7O1lBQ0wsQ0FDTjtDQUNEO0dBaEN1QkUsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BvcnRmb2xpby5qc3g/NDU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vZWxlbWVudHMvaGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2VsZW1lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi9lbGVtZW50cy8uZGIvcHJpc21hJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oe2lkfSl7XG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoJ3BvcnRmb2xpbycpO1xuICAgIGNvbnN0IGxvY2FsTGlnaHRNb2RlID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMSUdIVF9NT0RFXCIpKSA6ICcnO1xuICAgIGNvbnN0IFtsaWdodG1vZGVvbiwgc2V0TGlnaHRtb2Rlb25dID0gdXNlU3RhdGUobG9jYWxMaWdodE1vZGUpO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldExpZ2h0bW9kZW9uKCFsaWdodG1vZGVvbik7XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMSUdIVF9NT0RFXCIsIGxpZ2h0bW9kZW9uKTtcbiAgICAgICAgfVxuICAgICAgfSwgW2xpZ2h0bW9kZW9uXSlcbiAgIGNvbnN0IGxpZ2h0X29yX2RhcmsgPSB7XG4gICAgICAgIHN1bjogbGlnaHRtb2Rlb24gPyAnI0RFNjQzOScgOiAnI2ZmZicsXG4gICAgICAgIG1vb246IGxpZ2h0bW9kZW9uID8gJyNmZmYnIDogJyNERTY0MzknLFxuICAgICAgICBuYXZUb2dnbGUgOiBsaWdodG1vZGVvbiA/ICcnIDogJ25hdmJhci1kYXJrJ1xuICAgIH1cblxuXG4gIHJldHVybihcbiAgPGRpdiBjbGFzc05hbWU9e2xpZ2h0bW9kZW9uID8gXCJib2R5X2xpZ2h0IGQtZmxleCBmbGV4LWNvbHVtblwiIDogXCJib2R5X2RhcmsgZC1mbGV4IGZsZXgtY29sdW1uXCJ9PlxuICAgIDxIZWFkZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGxpZ2h0X29yX2Rhcms9e2xpZ2h0X29yX2Rhcmt9IGxpZ2h0bW9kZW9uPXtsaWdodG1vZGVvbn0gY3VycmVudFBhZ2U9e3BhZ2V9IG9uTmF2Q2xpY2s9e3NldFBhZ2V9Lz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggZmxleC1jb2x1bW4gbWFyZ2luLXN0YXJ0XCI+XG4gICAgICAgIDxwcmU+XG4gICAgICAgICAgICB7aWR9XG4gICAgICAgIDwvcHJlPlxuXG4gICAgPC9kaXY+XG4gICAgPEZvb3Rlci8+XG4gIDwvZGl2PlxuKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgICAgICBjb25zdCBhbGxQcm9qZXRzID0gYXdhaXQgcHJpc21hLnBvcnRmb2xpb190YWdzLmZpbmRNYW55KClcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamV0cyk7XG4gICAgICAgIGNvbnN0IGlkID0gYXdhaXQgYWxsUHJvamV0cy5qc29uKClcbiAgICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgaWRcbiAgICAgICAgfSxcbiAgICAgICAgcmV2YWxpZGF0ZToxMCxcbiAgICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwiRm9vdGVyIiwicHJpc21hIiwiUG9ydGZvbGlvIiwiaWQiLCJwYWdlIiwic2V0UGFnZSIsImxvY2FsTGlnaHRNb2RlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxpZ2h0bW9kZW9uIiwic2V0TGlnaHRtb2Rlb24iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEl0ZW0iLCJsaWdodF9vcl9kYXJrIiwic3VuIiwibW9vbiIsIm5hdlRvZ2dsZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjdXJyZW50UGFnZSIsIm9uTmF2Q2xpY2siLCJwcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/portfolio.jsx\n");

/***/ })

});