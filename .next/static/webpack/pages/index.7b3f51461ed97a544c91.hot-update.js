webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContactLists.js":
/*!************************************!*\
  !*** ./components/ContactLists.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/renatha/Downloads/DEV/IFPB/contacts-ui/components/ContactLists.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import ListContext from '../context/list/listContext'\n\nvar ContainerList = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ContactLists__ContainerList\",\n  componentId: \"sc-8i5ggf-0\"\n})([\"display:flex;justify-content:space-around;margin-top:5rem;\"]);\n\nvar ContactLists = function ContactLists(_ref) {\n  _s();\n\n  var list = _ref.list;\n  // const listContext = useContext(ListContext)\n  // const { lists, getLists, setCurrent } = listContext\n  console.log(list);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {// getLists()\n    // return () => {\n    //   cleanup\n    // }\n  }, []); // console.log('lists ', lists)\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, list.title), list && list.contacts.map(function (contact) {\n    return __jsx(\"span\", {\n      key: contact.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }\n    }, contact.name), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 13\n      }\n    }, contact.phone), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }\n    }, contact.email));\n  }));\n};\n\n_s(ContactLists, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = ContactLists;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactLists);\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactLists\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0TGlzdHMuanM/MGRlNyJdLCJuYW1lcyI6WyJDb250YWluZXJMaXN0Iiwic3R5bGVkIiwiZGl2IiwiQ29udGFjdExpc3RzIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ0aXRsZSIsImNvbnRhY3RzIiwibWFwIiwiY29udGFjdCIsImlkIiwibmFtZSIsInBob25lIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFuQjs7QUFNQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2pDO0FBQ0E7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQUcseURBQVMsQ0FBQyxZQUFNLENBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQUxRLEVBS04sRUFMTSxDQUFULENBSmlDLENBVWpDOztBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUgsSUFBSSxDQUFDSSxLQUFYLENBREYsRUFHSUosSUFBSSxJQUFJQSxJQUFJLENBQUNLLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxPQUFPO0FBQUEsV0FDL0I7QUFBTSxTQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUQsT0FBTyxDQUFDRSxJQUFaLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlGLE9BQU8sQ0FBQ0csS0FBWixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJSCxPQUFPLENBQUNJLEtBQVosQ0FIRixDQUQrQjtBQUFBLEdBQXpCLENBSFosQ0FERjtBQWNELENBekJEOztHQUFNWixZOztLQUFBQSxZO0FBMkJTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udGFjdExpc3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuLy8gaW1wb3J0IExpc3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvbGlzdC9saXN0Q29udGV4dCdcblxuY29uc3QgQ29udGFpbmVyTGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuYFxuXG5jb25zdCBDb250YWN0TGlzdHMgPSAoeyBsaXN0IH0pID0+IHtcbiAgLy8gY29uc3QgbGlzdENvbnRleHQgPSB1c2VDb250ZXh0KExpc3RDb250ZXh0KVxuICAvLyBjb25zdCB7IGxpc3RzLCBnZXRMaXN0cywgc2V0Q3VycmVudCB9ID0gbGlzdENvbnRleHRcbiAgY29uc29sZS5sb2cobGlzdClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBnZXRMaXN0cygpXG4gICAgLy8gcmV0dXJuICgpID0+IHtcbiAgICAvLyAgIGNsZWFudXBcbiAgICAvLyB9XG4gIH0sIFtdKVxuICAvLyBjb25zb2xlLmxvZygnbGlzdHMgJywgbGlzdHMpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz57IGxpc3QudGl0bGUgfTwvaDM+XG4gICAgICB7XG4gICAgICAgIGxpc3QgJiYgbGlzdC5jb250YWN0cy5tYXAoY29udGFjdCA9PiAoXG4gICAgICAgICAgPHNwYW4ga2V5PXtjb250YWN0LmlkfT5cbiAgICAgICAgICAgIDxwPntjb250YWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgPHA+e2NvbnRhY3QucGhvbmV9PC9wPlxuICAgICAgICAgICAgPHA+e2NvbnRhY3QuZW1haWx9PC9wPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0TGlzdHNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContactLists.js\n");

/***/ })

})