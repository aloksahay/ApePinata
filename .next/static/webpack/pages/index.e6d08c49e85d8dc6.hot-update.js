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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_WalletContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/WalletContext */ \"./context/WalletContext.tsx\");\n/* harmony import */ var _components_ApeBomb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ApeBomb */ \"./components/ApeBomb.tsx\");\n/* harmony import */ var _components_ApePinata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ApePinata */ \"./components/ApePinata.tsx\");\n/* harmony import */ var _components_TransactionHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TransactionHistory */ \"./components/TransactionHistory.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const { address, balance, connectWallet } = (0,_context_WalletContext__WEBPACK_IMPORTED_MODULE_1__.useWallet)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-black text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"p-4 border-b border-gray-800\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-extrabold bg-gradient-to-r from-[#0054fa] to-[#00a3ff] bg-clip-text text-transparent\",\n                                    children: \"Ape Things\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                    lineNumber: 15,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://x.com/0xQuit/\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    className: \"text-sm text-gray-400 hover:text-[#0054fa] transition-colors\",\n                                    children: \"FE for contracts deployed by @0xQuit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-4\",\n                            children: !address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: connectWallet,\n                                className: \"bg-gradient-to-r from-[#0054fa] to-[#00a3ff] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-colors\",\n                                children: \"Connect Wallet\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-300 text-sm\",\n                                        children: [\n                                            address.slice(0, 6),\n                                            \"...\",\n                                            address.slice(-4)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-400 text-sm\",\n                                        children: [\n                                            balance,\n                                            \" $APE\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto mt-20 px-4 pb-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-4xl mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 md:grid-cols-2 gap-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ApeBomb__WEBPACK_IMPORTED_MODULE_2__.ApeBomb, {}, void 0, false, {\n                                    fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ApePinata__WEBPACK_IMPORTED_MODULE_3__.ApePinata, {}, void 0, false, {\n                                    fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionHistory__WEBPACK_IMPORTED_MODULE_4__.TransactionHistory, {}, void 0, false, {\n                            fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 23\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alok/Projects/ApePinata/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"l2GkOWvr0phYugGP0ecTywDR60M=\", false, function() {\n    return [\n        _context_WalletContext__WEBPACK_IMPORTED_MODULE_1__.useWallet\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ0w7QUFDSTtBQUNrQjtBQUV0RCxTQUFTSTs7SUFDdEIsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsYUFBYSxFQUFFLEdBQUdQLGlFQUFTQTtJQUVyRCxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNDO2dCQUFPRCxXQUFVOzBCQUNoQiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFHRixXQUFVOzhDQUFxRzs7Ozs7OzhDQUduSCw4REFBQ0c7b0NBQ0NDLE1BQUs7b0NBQ0xDLFFBQU87b0NBQ1BDLEtBQUk7b0NBQ0pOLFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7OztzQ0FLSCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1osQ0FBQ0osd0JBQ0EsOERBQUNXO2dDQUNDQyxTQUFTVjtnQ0FDVEUsV0FBVTswQ0FDWDs7Ozs7cURBSUQsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1M7d0NBQUVULFdBQVU7OzRDQUNWSixRQUFRYyxLQUFLLENBQUMsR0FBRzs0Q0FBRzs0Q0FBSWQsUUFBUWMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7a0RBRTFDLDhEQUFDRDt3Q0FBRVQsV0FBVTs7NENBQ1ZIOzRDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFTckIsOERBQUNjO2dCQUFLWCxXQUFVOzBCQUNkLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1Isd0RBQU9BOzs7Ozs4Q0FDUiw4REFBQ0MsNERBQVNBOzs7Ozs7Ozs7Ozt3QkFHWEcseUJBQVcsOERBQUNGLDhFQUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekM7R0F6RHdCQzs7UUFDc0JKLDZEQUFTQTs7O0tBRC9CSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICcuLi9jb250ZXh0L1dhbGxldENvbnRleHQnXG5pbXBvcnQgeyBBcGVCb21iIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcGVCb21iJ1xuaW1wb3J0IHsgQXBlUGluYXRhIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcGVQaW5hdGEnXG5pbXBvcnQgeyBUcmFuc2FjdGlvbkhpc3RvcnkgfSBmcm9tICcuLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uSGlzdG9yeSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBhZGRyZXNzLCBiYWxhbmNlLCBjb25uZWN0V2FsbGV0IH0gPSB1c2VXYWxsZXQoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmxhY2sgdGV4dC13aGl0ZVwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicC00IGJvcmRlci1iIGJvcmRlci1ncmF5LTgwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZXh0cmFib2xkIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bIzAwNTRmYV0gdG8tWyMwMGEzZmZdIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgIEFwZSBUaGluZ3NcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8veC5jb20vMHhRdWl0L1wiIFxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LVsjMDA1NGZhXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZFIGZvciBjb250cmFjdHMgZGVwbG95ZWQgYnkgQDB4UXVpdFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIHshYWRkcmVzcyA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLVsjMDA1NGZhXSB0by1bIzAwYTNmZl0gdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1sZyBob3ZlcjpvcGFjaXR5LTkwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAge2FkZHJlc3Muc2xpY2UoMCwgNil9Li4ue2FkZHJlc3Muc2xpY2UoLTQpfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgIHtiYWxhbmNlfSAkQVBFXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIHsvKiBNYWluIENvbnRlbnQgKi99XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtdC0yMCBweC00IHBiLTIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICAgIDxBcGVCb21iIC8+XG4gICAgICAgICAgICA8QXBlUGluYXRhIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAge2FkZHJlc3MgJiYgPFRyYW5zYWN0aW9uSGlzdG9yeSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn0gIl0sIm5hbWVzIjpbInVzZVdhbGxldCIsIkFwZUJvbWIiLCJBcGVQaW5hdGEiLCJUcmFuc2FjdGlvbkhpc3RvcnkiLCJIb21lIiwiYWRkcmVzcyIsImJhbGFuY2UiLCJjb25uZWN0V2FsbGV0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaDEiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwic2xpY2UiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});