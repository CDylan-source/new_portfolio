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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Site; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elements_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/header */ \"./pages/elements/header.jsx\");\n/* harmony import */ var react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Fade */ \"./node_modules/react-bootstrap/esm/Fade.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Site() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"home\"), page = ref[0], setPage = ref[1];\n    var localLightMode =  true ? JSON.parse(localStorage.getItem(\"LIGHT_MODE\")) : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localLightMode), lightmodeon = ref1[0], setLightmodeon = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), fade = ref2[0], setFade = ref2[1];\n    var handleClick = function handleClick(e) {\n        e.preventDefault();\n        setLightmodeon(!lightmodeon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"LIGHT_MODE\", lightmodeon);\n        }\n    }, [\n        lightmodeon\n    ]);\n    var light_or_dark = {\n        sun: lightmodeon ? \"#DE6439\" : \"#fff\",\n        moon: lightmodeon ? \"#fff\" : \"#DE6439\",\n        navToggle: lightmodeon ? \"\" : \"navbar-dark\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: lightmodeon ? \"body_light\" : \"body_dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleClick,\n                light_or_dark: light_or_dark,\n                lightmodeon: lightmodeon,\n                currentPage: page,\n                onNavClick: setPage\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-transparent col-md-8 mb-4 mb-md-0 py-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Fade__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                in: true,\n                                timeout: \"800\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"shadow-2-strong mb-5 card-img-top mx-auto\",\n                                    src: \"05.png\",\n                                    style: {\n                                        width: \"100px\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 12\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 10\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"card-text\",\n                                children: \"Bonjour, je suis\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"card-title\",\n                                children: \"D\\xe9veloppeur Web\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"card-text\",\n                                children: \"Et vous souhaite la\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"card-text\",\n                                children: \"Bienvenue sur mon Portfolio\"\n                            }, void 0, false, {\n                                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/new_portfolio/new_portfolio/pages/index.jsx\",\n        lineNumber: 37,\n        columnNumber: 3\n    }, this);\n};\n_s(Site, \"tF07upmB31wMZ5mt/XyiH3IvFog=\");\n_c = Site;\nvar _c;\n$RefreshReg$(_c, \"Site\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9lbGVtZW50cy9oZWFkZXJcIjtcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9GYWRlJztcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2l0ZSgpIHtcblxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgnaG9tZScpO1xuICBjb25zdCBsb2NhbExpZ2h0TW9kZSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTElHSFRfTU9ERVwiKSkgOiAnJztcbiAgY29uc3QgW2xpZ2h0bW9kZW9uLCBzZXRMaWdodG1vZGVvbl0gPSB1c2VTdGF0ZShsb2NhbExpZ2h0TW9kZSk7XG4gIGNvbnN0W2ZhZGUsIHNldEZhZGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiBcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldExpZ2h0bW9kZW9uKCFsaWdodG1vZGVvbik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMSUdIVF9NT0RFXCIsIGxpZ2h0bW9kZW9uKTtcbiAgICAgICAgfVxuICAgICAgfSwgW2xpZ2h0bW9kZW9uXSlcblxuICAgIFxuICAgY29uc3QgbGlnaHRfb3JfZGFyayA9IHtcbiAgICAgICAgc3VuOiBsaWdodG1vZGVvbiA/ICcjREU2NDM5JyA6ICcjZmZmJyxcbiAgICAgICAgbW9vbjogbGlnaHRtb2Rlb24gPyAnI2ZmZicgOiAnI0RFNjQzOScsXG4gICAgICAgIG5hdlRvZ2dsZSA6IGxpZ2h0bW9kZW9uID8gJycgOiAnbmF2YmFyLWRhcmsnXG4gICAgfVxuXG4gIHJldHVybihcbiAgPGRpdiBjbGFzc05hbWU9e2xpZ2h0bW9kZW9uID8gXCJib2R5X2xpZ2h0XCIgOiBcImJvZHlfZGFya1wifT5cbiAgICA8SGVhZGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBsaWdodF9vcl9kYXJrPXtsaWdodF9vcl9kYXJrfSBsaWdodG1vZGVvbj17bGlnaHRtb2Rlb259IGN1cnJlbnRQYWdlPXtwYWdlfSBvbk5hdkNsaWNrPXtzZXRQYWdlfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtdHJhbnNwYXJlbnQgY29sLW1kLTggbWItNCBtYi1tZC0wIHB5LTVcIj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgPEZhZGUgaW49e3RydWV9IHRpbWVvdXQ9XCI4MDBcIj5cbiAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzaGFkb3ctMi1zdHJvbmcgbWItNSBjYXJkLWltZy10b3AgbXgtYXV0b1wiIHNyYz1cIjA1LnBuZ1wiIHN0eWxlPXt7d2lkdGg6XCIxMDBweFwifX0vPlxuICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPkJvbmpvdXIsIGplIHN1aXM8L2g0PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+RMOpdmVsb3BwZXVyIFdlYjwvaDE+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPkV0IHZvdXMgc291aGFpdGUgbGE8L2g0PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5CaWVudmVudWUgc3VyIG1vbiBQb3J0Zm9saW88L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJGYWRlIiwiU2l0ZSIsInBhZ2UiLCJzZXRQYWdlIiwibG9jYWxMaWdodE1vZGUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGlnaHRtb2Rlb24iLCJzZXRMaWdodG1vZGVvbiIsImZhZGUiLCJzZXRGYWRlIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRJdGVtIiwibGlnaHRfb3JfZGFyayIsInN1biIsIm1vb24iLCJuYXZUb2dnbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY3VycmVudFBhZ2UiLCJvbk5hdkNsaWNrIiwiaW4iLCJ0aW1lb3V0IiwiaW1nIiwic3JjIiwic3R5bGUiLCJ3aWR0aCIsImg0IiwiaDEiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});