webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav */ \"./components/Nav.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/renatha/Downloads/DEV/IFPB/contacts-ui/components/Header.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeStart = function () {\n  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();\n};\n\nnext_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = function () {\n  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();\n};\n\nnext_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeError = function () {\n  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();\n};\n\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h1.withConfig({\n  displayName: \"Header__Logo\",\n  componentId: \"sc-12j78k5-0\"\n})([\"font-size:4rem;margin-left:2rem;position:relative;z-index:2;transform:skew(-7deg);a{padding:0.5rem 1rem;background:\", \";color:#FFF;text-transform:uppercase;text-decoration:none;}@media (max-width:1300px){margin:0;text-align:center;}\"], function (props) {\n  return props.theme.primary;\n});\n_c = Logo;\nvar StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header.withConfig({\n  displayName: \"Header__StyledHeader\",\n  componentId: \"sc-12j78k5-1\"\n})([\".bar{border-bottom:10px solid \", \";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:1300px){grid-template-columns:1fr;justify-content:center;}}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid \", \"}\"], function (props) {\n  return props.theme.black;\n}, function (props) {\n  return props.theme.lightgrey;\n});\n_c2 = StyledHeader;\n\nvar Header = function Header() {\n  return __jsx(StyledHeader, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"bar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(Logo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 24\n    }\n  }, \"Contact Keeper\"))), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  })), __jsx(\"div\", {\n    className: \"sub-bar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, \"Busca\")));\n};\n\n_c3 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Logo\");\n$RefreshReg$(_c2, \"StyledHeader\");\n$RefreshReg$(_c3, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJOUHJvZ3Jlc3MiLCJzdGFydCIsIm9uUm91dGVDaGFuZ2VDb21wbGV0ZSIsImRvbmUiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJMb2dvIiwic3R5bGVkIiwiaDEiLCJwcm9wcyIsInRoZW1lIiwicHJpbWFyeSIsIlN0eWxlZEhlYWRlciIsImhlYWRlciIsImJsYWNrIiwibGlnaHRncmV5IiwiSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQUEsa0RBQU0sQ0FBQ0Msa0JBQVAsR0FBNEIsWUFBTTtBQUNoQ0Msa0RBQVMsQ0FBQ0MsS0FBVjtBQUNELENBRkQ7O0FBR0FILGtEQUFNLENBQUNJLHFCQUFQLEdBQStCLFlBQU07QUFDbkNGLGtEQUFTLENBQUNHLElBQVY7QUFDRCxDQUZEOztBQUdBTCxrREFBTSxDQUFDTSxrQkFBUCxHQUE0QixZQUFNO0FBQ2hDSixrREFBUyxDQUFDRyxJQUFWO0FBQ0QsQ0FGRDs7QUFLQSxJQUFNRSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsaVBBUVEsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFoQjtBQUFBLENBUmIsQ0FBVjtLQUFNTCxJO0FBbUJOLElBQU1NLFlBQVksR0FBR0wseURBQU0sQ0FBQ00sTUFBVjtBQUFBO0FBQUE7QUFBQSx5U0FFYyxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLEtBQWhCO0FBQUEsQ0FGbkIsRUFlYSxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLFNBQWhCO0FBQUEsQ0FmbEIsQ0FBbEI7TUFBTUgsWTs7QUFtQk4sSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUNiLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQWYsQ0FERixDQURGLEVBSUUsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQVBGLENBRGE7QUFBQSxDQUFmOztNQUFNQSxNO0FBY1NBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2J1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xuICBOUHJvZ3Jlc3Muc3RhcnQoKVxufVxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IHtcbiAgTlByb2dyZXNzLmRvbmUoKVxufVxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IHtcbiAgTlByb2dyZXNzLmRvbmUoKVxufVxuXG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtOiBza2V3KC03ZGVnKTtcbiAgYSB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5fTtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYFxuXG5jb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICAuYmFyIHtcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmxhY2t9O1xuICAgIGRpc3BsYXk6IGdyaWQ7IFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIC5zdWItYmFyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGlnaHRncmV5fVxuICB9XG5gXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPFN0eWxlZEhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmFyJz5cbiAgICAgIDxMb2dvPlxuICAgICAgICA8TGluayBocmVmPScvJz48YT5Db250YWN0IEtlZXBlcjwvYT48L0xpbms+XG4gICAgICA8L0xvZ28+XG4gICAgICA8TmF2IC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J3N1Yi1iYXInPlxuICAgICAgPHA+QnVzY2E8L3A+XG4gICAgPC9kaXY+XG4gIDwvU3R5bGVkSGVhZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})