webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContactLists.js":
/*!************************************!*\
  !*** ./components/ContactLists.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/renatha/Downloads/DEV/IFPB/contacts-ui/components/ContactLists.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import ListContext from '../context/list/listContext'\n\nvar ContainerList = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ContactLists__ContainerList\",\n  componentId: \"sc-8i5ggf-0\"\n})([\"display:flex;justify-content:space-around;margin-top:5rem;\"]);\nvar CardContact = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ContactLists__CardContact\",\n  componentId: \"sc-8i5ggf-1\"\n})([\"border-radius:3px;border:1px solid \", \";background-color:\", \";margin-bottom:1rem;padding:1rem 2rem;svg{margin-right:1rem;}\"], function (props) {\n  return props.theme.secundary;\n}, function (props) {\n  return props.theme.lightgrey;\n});\n_c = CardContact;\n\nvar ContactLists = function ContactLists(_ref) {\n  _s();\n\n  var list = _ref.list;\n  // const listContext = useContext(ListContext)\n  // const { lists, getLists, setCurrent } = listContext\n  console.log(list);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {// getLists()\n    // return () => {\n    //   cleanup\n    // }\n  }, []); // console.log('lists ', lists)\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, list.title), list && list.contacts.map(function (contact) {\n    return __jsx(CardContact, {\n      key: contact.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }\n    }, __jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__[\"VscAccount\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 16\n      }\n    }), contact.name), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }\n    }, __jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__[\"VscDeviceMobile\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 16\n      }\n    }), contact.phone), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }\n    }, __jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__[\"VscMail\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 16\n      }\n    }), contact.email), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }\n    }, __jsx(\"span\", {\n      style: {\n        marginRight: '1rem'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 15\n      }\n    }, __jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__[\"VscEdit\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }\n    }), \"Editar\"), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 15\n      }\n    }, __jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__[\"VscTrash\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    }))));\n  }));\n};\n\n_s(ContactLists, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c2 = ContactLists;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactLists);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CardContact\");\n$RefreshReg$(_c2, \"ContactLists\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0TGlzdHMuanM/MGRlNyJdLCJuYW1lcyI6WyJDb250YWluZXJMaXN0Iiwic3R5bGVkIiwiZGl2IiwiQ2FyZENvbnRhY3QiLCJwcm9wcyIsInRoZW1lIiwic2VjdW5kYXJ5IiwibGlnaHRncmV5IiwiQ29udGFjdExpc3RzIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ0aXRsZSIsImNvbnRhY3RzIiwibWFwIiwiY29udGFjdCIsImlkIiwibmFtZSIsInBob25lIiwiZW1haWwiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQW5CO0FBTUEsSUFBTUMsV0FBVyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1JQUVLLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBaEI7QUFBQSxDQUZWLEVBR0ssVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUFoQjtBQUFBLENBSFYsQ0FBakI7S0FBTUosVzs7QUFZTixJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2pDO0FBQ0E7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQUcseURBQVMsQ0FBQyxZQUFNLENBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQUxRLEVBS04sRUFMTSxDQUFULENBSmlDLENBVWpDOztBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUgsSUFBSSxDQUFDSSxLQUFYLENBREYsRUFHSUosSUFBSSxJQUFJQSxJQUFJLENBQUNLLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxPQUFPO0FBQUEsV0FDL0IsTUFBQyxXQUFEO0FBQWEsU0FBRyxFQUFFQSxPQUFPLENBQUNDLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUcsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUgsRUFBa0JELE9BQU8sQ0FBQ0UsSUFBMUIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRyxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBSCxFQUF1QkYsT0FBTyxDQUFDRyxLQUEvQixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFHLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFILEVBQWVILE9BQU8sQ0FBQ0ksS0FBdkIsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLFdBQUssRUFBRTtBQUFFQyxtQkFBVyxFQUFFO0FBQWYsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsV0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUpGLENBSkYsQ0FEK0I7QUFBQSxHQUF6QixDQUhaLENBREY7QUFzQkQsQ0FqQ0Q7O0dBQU1iLFk7O01BQUFBLFk7QUFtQ1NBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db250YWN0TGlzdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgVnNjQWNjb3VudCwgVnNjRGV2aWNlTW9iaWxlLCBWc2NNYWlsLFZzY0VkaXQsIFZzY1RyYXNoIH0gZnJvbSBcInJlYWN0LWljb25zL3ZzY1wiXG5cbi8vIGltcG9ydCBMaXN0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L2xpc3QvbGlzdENvbnRleHQnXG5cbmNvbnN0IENvbnRhaW5lckxpc3QgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbmBcblxuY29uc3QgQ2FyZENvbnRhY3QgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2VjdW5kYXJ5fTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saWdodGdyZXl9O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbmBcblxuY29uc3QgQ29udGFjdExpc3RzID0gKHsgbGlzdCB9KSA9PiB7XG4gIC8vIGNvbnN0IGxpc3RDb250ZXh0ID0gdXNlQ29udGV4dChMaXN0Q29udGV4dClcbiAgLy8gY29uc3QgeyBsaXN0cywgZ2V0TGlzdHMsIHNldEN1cnJlbnQgfSA9IGxpc3RDb250ZXh0XG4gIGNvbnNvbGUubG9nKGxpc3QpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZ2V0TGlzdHMoKVxuICAgIC8vIHJldHVybiAoKSA9PiB7XG4gICAgLy8gICBjbGVhbnVwXG4gICAgLy8gfVxuICB9LCBbXSlcbiAgLy8gY29uc29sZS5sb2coJ2xpc3RzICcsIGxpc3RzKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+eyBsaXN0LnRpdGxlIH08L2gzPlxuICAgICAge1xuICAgICAgICBsaXN0ICYmIGxpc3QuY29udGFjdHMubWFwKGNvbnRhY3QgPT4gKFxuICAgICAgICAgIDxDYXJkQ29udGFjdCBrZXk9e2NvbnRhY3QuaWR9PlxuICAgICAgICAgICAgPHA+PFZzY0FjY291bnQgLz57Y29udGFjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxwPjxWc2NEZXZpY2VNb2JpbGUgLz57Y29udGFjdC5waG9uZX08L3A+XG4gICAgICAgICAgICA8cD48VnNjTWFpbCAvPntjb250YWN0LmVtYWlsfTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzFyZW0nIH19PlxuICAgICAgICAgICAgICAgIDxWc2NFZGl0IC8+RWRpdGFyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPFZzY1RyYXNoIC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0NhcmRDb250YWN0PlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RMaXN0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContactLists.js\n");

/***/ })

})