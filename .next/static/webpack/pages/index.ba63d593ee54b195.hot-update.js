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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n\n\n\nvar _s = $RefreshSig$();\nfunction HomePage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), lightmodeon = ref[0], setLightmodeon = ref[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        background: lightmodeon ? \"src1\" : \"src2\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            background: \"black\",\n            height: \"100vh\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            onClick: handleClick,\n            light_or_dark: light_or_dark\n        }, void 0, false, {\n            fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n            lineNumber: 27,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, this);\n};\n_s(HomePage, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBc0M7QUFDQzs7QUFLeEIsU0FBU0csUUFBUSxHQUFHOztJQUVqQyxJQUFzQ0YsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVJ2RCxXQVFvQixHQUFvQkEsR0FBZSxHQUFuQyxFQVJwQixjQVFvQyxHQUFJQSxHQUFlLEdBQW5CO0lBRWhDLElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFXLENBQWFDLENBQUMsRUFBQztRQUM1QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUNuQkgsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQyxDQUFDO0tBQ2hDO0lBSUYsSUFBTUssYUFBYSxHQUFHO1FBQ2pCQyxHQUFHLEVBQUVOLFdBQVcsR0FBRyxTQUFTLEdBQUcsTUFBTTtRQUNyQ08sSUFBSSxFQUFFUCxXQUFXLEdBQUcsTUFBTSxHQUFHLFNBQVM7UUFDdENRLFVBQVUsRUFBRVIsV0FBVyxHQUFHLE1BQU0sR0FBRyxNQUFNO0tBRTVDO0lBRUgscUJBQ0EsOERBQUNTLEtBQUc7UUFBQ0MsS0FBSyxFQUFFO1lBQUNGLFVBQVUsRUFBRSxPQUFPO1lBQUVHLE1BQU0sRUFBRSxPQUFPO1NBQUM7a0JBQ2hELDRFQUFDYix3REFBTTtZQUFDYyxPQUFPLEVBQUVWLFdBQVc7WUFBRUcsYUFBYSxFQUFFQSxhQUFhOzs7OztnQkFBSTs7Ozs7WUFDMUQsQ0FDTjtDQUNEO0dBdkJ1Qk4sUUFBUTtBQUFSQSxLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vZWxlbWVudHMvaGVhZGVyXCI7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXG4gIGNvbnN0IFtsaWdodG1vZGVvbiwgc2V0TGlnaHRtb2Rlb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TGlnaHRtb2Rlb24oIWxpZ2h0bW9kZW9uKTtcbiAgICB9XG5cbiAgICBcbiAgICBcbiAgIGNvbnN0IGxpZ2h0X29yX2RhcmsgPSB7XG4gICAgICAgIHN1bjogbGlnaHRtb2Rlb24gPyAnI0RFNjQzOScgOiAnI2ZmZicsXG4gICAgICAgIG1vb246IGxpZ2h0bW9kZW9uID8gJyNmZmYnIDogJyNERTY0MzknLFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodG1vZGVvbiA/IFwic3JjMVwiIDogXCJzcmMyXCJcbiAgICAgICAgXG4gICAgfVxuXG4gIHJldHVybihcbiAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6ICdibGFjaycsIGhlaWdodDogJzEwMHZoJ319PlxuICAgIDxIZWFkZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGxpZ2h0X29yX2Rhcms9e2xpZ2h0X29yX2Rhcmt9IC8+XG4gIDwvZGl2PlxuKTtcbn1cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIkhvbWVQYWdlIiwibGlnaHRtb2Rlb24iLCJzZXRMaWdodG1vZGVvbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGlnaHRfb3JfZGFyayIsInN1biIsIm1vb24iLCJiYWNrZ3JvdW5kIiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});