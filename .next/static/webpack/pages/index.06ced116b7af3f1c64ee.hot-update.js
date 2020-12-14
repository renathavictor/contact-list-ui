webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContactLists.js":
/*!************************************!*\
  !*** ./components/ContactLists.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/renatha/Downloads/DEV/IFPB/contacts-ui/components/ContactLists.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import ListContext from '../context/list/listContext'\n\nvar ContainerList = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ContactLists__ContainerList\",\n  componentId: \"sc-8i5ggf-0\"\n})([\"display:flex;justify-content:space-around;margin-top:5rem;\"]);\nvar CardContact = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ContactLists__CardContact\",\n  componentId: \"sc-8i5ggf-1\"\n})([\"border-radius:3px;border:1px solid \", \";background-color:\", \";margin-bottom:1rem;padding:1rem 2rem;svg{margin-right:1rem;}\"], function (props) {\n  return props.theme.secundary;\n}, function (props) {\n  return props.theme.lightgrey;\n});\n_c = CardContact;\n\nvar ContactLists = function ContactLists(_ref) {\n  _s();\n\n  var list = _ref.list;\n  // const listContext = useContext(ListContext)\n  // const { lists, getLists, setCurrent } = listContext\n  console.log(list);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {// getLists()\n    // return () => {\n    //   cleanup\n    // }\n  }, []); // console.log('lists ', lists)\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, list.title), list && list.contacts.map(function (contact) {\n    return __jsx(CardContact, {\n      key: contact.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }\n    }, __jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__[\"VscAccount\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 16\n      }\n    }), contact.name), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }\n    }, __jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__[\"VscDeviceMobile\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 16\n      }\n    }), contact.phone), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }\n    }, __jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__[\"VscMail\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 16\n      }\n    }), contact.email), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }\n    }, __jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__[\"VscEdit\"], {\n      style: {\n        marginRight: '1rem'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 16\n      }\n    }), __jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__[\"VscTrash\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 59\n      }\n    })));\n  }));\n};\n\n_s(ContactLists, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c2 = ContactLists;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactLists);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CardContact\");\n$RefreshReg$(_c2, \"ContactLists\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0TGlzdHMuanM/MGRlNyJdLCJuYW1lcyI6WyJDb250YWluZXJMaXN0Iiwic3R5bGVkIiwiZGl2IiwiQ2FyZENvbnRhY3QiLCJwcm9wcyIsInRoZW1lIiwic2VjdW5kYXJ5IiwibGlnaHRncmV5IiwiQ29udGFjdExpc3RzIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ0aXRsZSIsImNvbnRhY3RzIiwibWFwIiwiY29udGFjdCIsImlkIiwibmFtZSIsInBob25lIiwiZW1haWwiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQW5CO0FBTUEsSUFBTUMsV0FBVyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1JQUVLLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBaEI7QUFBQSxDQUZWLEVBR0ssVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUFoQjtBQUFBLENBSFYsQ0FBakI7S0FBTUosVzs7QUFZTixJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2pDO0FBQ0E7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQUcseURBQVMsQ0FBQyxZQUFNLENBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQUxRLEVBS04sRUFMTSxDQUFULENBSmlDLENBVWpDOztBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUgsSUFBSSxDQUFDSSxLQUFYLENBREYsRUFHSUosSUFBSSxJQUFJQSxJQUFJLENBQUNLLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxPQUFPO0FBQUEsV0FDL0IsTUFBQyxXQUFEO0FBQWEsU0FBRyxFQUFFQSxPQUFPLENBQUNDLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUcsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUgsRUFBa0JELE9BQU8sQ0FBQ0UsSUFBMUIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRyxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBSCxFQUF1QkYsT0FBTyxDQUFDRyxLQUEvQixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFHLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFILEVBQWVILE9BQU8sQ0FBQ0ksS0FBdkIsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRyxNQUFDLHVEQUFEO0FBQVMsV0FBSyxFQUFFO0FBQUVDLG1CQUFXLEVBQUU7QUFBZixPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUgsRUFBOEMsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTlDLENBSkYsQ0FEK0I7QUFBQSxHQUF6QixDQUhaLENBREY7QUFlRCxDQTFCRDs7R0FBTWIsWTs7TUFBQUEsWTtBQTRCU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RMaXN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBWc2NBY2NvdW50LCBWc2NEZXZpY2VNb2JpbGUsIFZzY01haWwsVnNjRWRpdCwgVnNjVHJhc2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvdnNjXCJcblxuLy8gaW1wb3J0IExpc3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvbGlzdC9saXN0Q29udGV4dCdcblxuY29uc3QgQ29udGFpbmVyTGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuYFxuXG5jb25zdCBDYXJkQ29udGFjdCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWN1bmRhcnl9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpZ2h0Z3JleX07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuYFxuXG5jb25zdCBDb250YWN0TGlzdHMgPSAoeyBsaXN0IH0pID0+IHtcbiAgLy8gY29uc3QgbGlzdENvbnRleHQgPSB1c2VDb250ZXh0KExpc3RDb250ZXh0KVxuICAvLyBjb25zdCB7IGxpc3RzLCBnZXRMaXN0cywgc2V0Q3VycmVudCB9ID0gbGlzdENvbnRleHRcbiAgY29uc29sZS5sb2cobGlzdClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBnZXRMaXN0cygpXG4gICAgLy8gcmV0dXJuICgpID0+IHtcbiAgICAvLyAgIGNsZWFudXBcbiAgICAvLyB9XG4gIH0sIFtdKVxuICAvLyBjb25zb2xlLmxvZygnbGlzdHMgJywgbGlzdHMpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz57IGxpc3QudGl0bGUgfTwvaDM+XG4gICAgICB7XG4gICAgICAgIGxpc3QgJiYgbGlzdC5jb250YWN0cy5tYXAoY29udGFjdCA9PiAoXG4gICAgICAgICAgPENhcmRDb250YWN0IGtleT17Y29udGFjdC5pZH0+XG4gICAgICAgICAgICA8cD48VnNjQWNjb3VudCAvPntjb250YWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgPHA+PFZzY0RldmljZU1vYmlsZSAvPntjb250YWN0LnBob25lfTwvcD5cbiAgICAgICAgICAgIDxwPjxWc2NNYWlsIC8+e2NvbnRhY3QuZW1haWx9PC9wPlxuICAgICAgICAgICAgPHA+PFZzY0VkaXQgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxcmVtJyB9fSAvPjxWc2NUcmFzaCAvPjwvcD5cbiAgICAgICAgICA8L0NhcmRDb250YWN0PlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RMaXN0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContactLists.js\n");

/***/ })

})