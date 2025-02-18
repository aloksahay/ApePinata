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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_WalletContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/WalletContext */ \"./context/WalletContext.tsx\");\n/* harmony import */ var _components_ApeBomb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ApeBomb */ \"./components/ApeBomb.tsx\");\n/* harmony import */ var _components_ApePinata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ApePinata */ \"./components/ApePinata.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const { address, balance, connectWallet } = (0,_context_WalletContext__WEBPACK_IMPORTED_MODULE_1__.useWallet)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-black text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"p-4 border-b border-gray-800\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-extrabold bg-gradient-to-r from-[#0054fa] to-[#00a3ff] bg-clip-text text-transparent\",\n                                    children: \"Ape Things\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://x.com/0xQuit/\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    className: \"text-sm text-gray-400 hover:text-[#0054fa] transition-colors flex items-center gap-1\",\n                                    children: [\n                                        \"ApeBomb and ApePinata by @0xQuit\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            viewBox: \"0 0 24 24\",\n                                            className: \"h-4 w-4 fill-current\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                                lineNumber: 25,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-4\",\n                            children: !address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: connectWallet,\n                                className: \"bg-gradient-to-r from-[#0054fa] to-[#00a3ff] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-colors\",\n                                children: \"Connect Wallet\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-300 text-sm\",\n                                        children: [\n                                            address.slice(0, 6),\n                                            \"...\",\n                                            address.slice(-4)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-400 text-sm\",\n                                        children: [\n                                            balance,\n                                            \" $APE\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto mt-20 px-4 pb-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-4xl mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ApeBomb__WEBPACK_IMPORTED_MODULE_2__.ApeBomb, {}, void 0, false, {\n                                fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ApePinata__WEBPACK_IMPORTED_MODULE_3__.ApePinata, {}, void 0, false, {\n                                fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"l2GkOWvr0phYugGP0ecTywDR60M=\", false, function() {\n    return [\n        _context_WalletContext__WEBPACK_IMPORTED_MODULE_1__.useWallet\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDTDtBQUNJO0FBRXBDLFNBQVNHOztJQUN0QixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUUsR0FBR04saUVBQVNBO0lBRXJELHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0M7Z0JBQU9ELFdBQVU7MEJBQ2hCLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQUdGLFdBQVU7OENBQXFHOzs7Ozs7OENBR25ILDhEQUFDRztvQ0FDQ0MsTUFBSztvQ0FDTEMsUUFBTztvQ0FDUEMsS0FBSTtvQ0FDSk4sV0FBVTs7d0NBQ1g7c0RBRUMsOERBQUNPOzRDQUFJQyxTQUFROzRDQUFZUixXQUFVO3NEQUNqQyw0RUFBQ1M7Z0RBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUtkLDhEQUFDWDs0QkFBSUMsV0FBVTtzQ0FDWixDQUFDSix3QkFDQSw4REFBQ2U7Z0NBQ0NDLFNBQVNkO2dDQUNURSxXQUFVOzBDQUNYOzs7OztxREFJRCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDYTt3Q0FBRWIsV0FBVTs7NENBQ1ZKLFFBQVFrQixLQUFLLENBQUMsR0FBRzs0Q0FBRzs0Q0FBSWxCLFFBQVFrQixLQUFLLENBQUMsQ0FBQzs7Ozs7OztrREFFMUMsOERBQUNEO3dDQUFFYixXQUFVOzs0Q0FDVkg7NENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVNyQiw4REFBQ2tCO2dCQUFLZixXQUFVOzBCQUNkLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDUCx3REFBT0E7Ozs7OzBDQUNSLDhEQUFDQyw0REFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QjtHQTFEd0JDOztRQUNzQkgsNkRBQVNBOzs7S0FEL0JHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJy4uL2NvbnRleHQvV2FsbGV0Q29udGV4dCdcbmltcG9ydCB7IEFwZUJvbWIgfSBmcm9tICcuLi9jb21wb25lbnRzL0FwZUJvbWInXG5pbXBvcnQgeyBBcGVQaW5hdGEgfSBmcm9tICcuLi9jb21wb25lbnRzL0FwZVBpbmF0YSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBhZGRyZXNzLCBiYWxhbmNlLCBjb25uZWN0V2FsbGV0IH0gPSB1c2VXYWxsZXQoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmxhY2sgdGV4dC13aGl0ZVwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicC00IGJvcmRlci1iIGJvcmRlci1ncmF5LTgwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZXh0cmFib2xkIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bIzAwNTRmYV0gdG8tWyMwMGEzZmZdIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgIEFwZSBUaGluZ3NcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8veC5jb20vMHhRdWl0L1wiIFxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LVsjMDA1NGZhXSB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFwZUJvbWIgYW5kIEFwZVBpbmF0YSBieSBAMHhRdWl0XG4gICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGNsYXNzTmFtZT1cImgtNCB3LTQgZmlsbC1jdXJyZW50XCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOC4yNDQgMi4yNWgzLjMwOGwtNy4yMjcgOC4yNiA4LjUwMiAxMS4yNEgxNi4xN2wtNS4yMTQtNi44MTdMNC45OSAyMS43NUgxLjY4bDcuNzMtOC44MzVMMS4yNTQgMi4yNUg4LjA4bDQuNzEzIDYuMjMxem0tMS4xNjEgMTcuNTJoMS44MzNMNy4wODQgNC4xMjZINS4xMTd6XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgeyFhZGRyZXNzID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y29ubmVjdFdhbGxldH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tWyMwMDU0ZmFdIHRvLVsjMDBhM2ZmXSB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLWxnIGhvdmVyOm9wYWNpdHktOTAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICB7YWRkcmVzcy5zbGljZSgwLCA2KX0uLi57YWRkcmVzcy5zbGljZSgtNCl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAge2JhbGFuY2V9ICRBUEVcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgey8qIE1haW4gQ29udGVudCAqL31cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG10LTIwIHB4LTQgcGItMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtOFwiPlxuICAgICAgICAgICAgPEFwZUJvbWIgLz5cbiAgICAgICAgICAgIDxBcGVQaW5hdGEgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn0gIl0sIm5hbWVzIjpbInVzZVdhbGxldCIsIkFwZUJvbWIiLCJBcGVQaW5hdGEiLCJIb21lIiwiYWRkcmVzcyIsImJhbGFuY2UiLCJjb25uZWN0V2FsbGV0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaDEiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInN2ZyIsInZpZXdCb3giLCJwYXRoIiwiZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwic2xpY2UiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});