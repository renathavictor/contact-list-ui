webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Lists.js":
/*!*****************************!*\
  !*** ./components/Lists.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/auth/authContext */ \"./context/auth/authContext.js\");\n/* harmony import */ var _context_list_listContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/list/listContext */ \"./context/list/listContext.js\");\n/* harmony import */ var _ContactLists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContactLists */ \"./components/ContactLists.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/renatha/Downloads/DEV/IFPB/contacts-ui/components/Lists.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar ContainerList = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Lists__ContainerList\",\n  componentId: \"sc-3rgull-0\"\n})([\"ul{li{list-style:none;border:1px solid \", \";padding:1.5rem;border-radius:3px;display:flex;justify-content:space-between;margin-top:1rem;p:first-of-type{cursor:pointer;}svg{cursor:pointer;&:first-of-type{fill:\", \";}&:last-of-type{fill:\", \";}}}}display:grid;font-size:16px;margin-top:5rem;\"], function (props) {\n  return props.theme.lightgrey;\n}, function (props) {\n  return props.theme.grey;\n}, function (props) {\n  return props.theme.danger;\n});\n_c = ContainerList;\n\nvar Lists = function Lists() {\n  _s();\n\n  var authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  var listContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_list_listContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  var lists = listContext.lists,\n      getLists = listContext.getLists,\n      setCurrent = listContext.setCurrent;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      selectList = _useState[0],\n      setSelectList = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // authContext.loadUser()\n    getLists();\n  }, []);\n\n  var handleClickList = function handleClickList(e) {\n    console.log('clicou na lista', e.target.id);\n    var id = e.target.id;\n    var listFilter = lists.filter(function (list) {\n      return String(list.id) === id;\n    })[0];\n    listFilter && setSelectList(listFilter);\n  };\n\n  console.log('selectList ', selectList);\n  return __jsx(ContainerList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, lists && lists.map(function (list) {\n    return __jsx(\"li\", {\n      key: list.id,\n      className: \"list-title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }\n    }, __jsx(\"p\", {\n      onClick: handleClickList,\n      id: list.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 13\n      }\n    }, list.title), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 13\n      }\n    }, __jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__[\"VscEdit\"], {\n      style: {\n        marginRight: '1rem'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 16\n      }\n    }), __jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_2__[\"VscTrash\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 59\n      }\n    })));\n  })), selectList && __jsx(_ContactLists__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    list: selectList,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }));\n};\n\n_s(Lists, \"Q0biCy7fjQaIsaoArGtaLyppvGE=\");\n\n_c2 = Lists;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lists);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ContainerList\");\n$RefreshReg$(_c2, \"Lists\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0cy5qcz8xODhhIl0sIm5hbWVzIjpbIkNvbnRhaW5lckxpc3QiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwibGlnaHRncmV5IiwiZ3JleSIsImRhbmdlciIsIkxpc3RzIiwiYXV0aENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJsaXN0Q29udGV4dCIsIkxpc3RDb250ZXh0IiwibGlzdHMiLCJnZXRMaXN0cyIsInNldEN1cnJlbnQiLCJ1c2VTdGF0ZSIsInNlbGVjdExpc3QiLCJzZXRTZWxlY3RMaXN0IiwidXNlRWZmZWN0IiwiaGFuZGxlQ2xpY2tMaXN0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpZCIsImxpc3RGaWx0ZXIiLCJmaWx0ZXIiLCJsaXN0IiwiU3RyaW5nIiwibWFwIiwidGl0bGUiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3U0FJTyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQWhCO0FBQUEsQ0FKWixFQWdCRCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLElBQWhCO0FBQUEsQ0FoQkosRUFtQkQsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFoQjtBQUFBLENBbkJKLENBQW5CO0tBQU1QLGE7O0FBNkJOLElBQU1RLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUVBLE1BQU1DLFdBQVcsR0FBR0Ysd0RBQVUsQ0FBQ0csaUVBQUQsQ0FBOUI7QUFIa0IsTUFJVkMsS0FKVSxHQUlzQkYsV0FKdEIsQ0FJVkUsS0FKVTtBQUFBLE1BSUhDLFFBSkcsR0FJc0JILFdBSnRCLENBSUhHLFFBSkc7QUFBQSxNQUlPQyxVQUpQLEdBSXNCSixXQUp0QixDQUlPSSxVQUpQOztBQUFBLGtCQU1rQkMsc0RBQVEsQ0FBQyxJQUFELENBTjFCO0FBQUEsTUFNWEMsVUFOVztBQUFBLE1BTUNDLGFBTkQ7O0FBUWxCQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUVBTCxZQUFRO0FBQ1QsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxNQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLENBQUMsRUFBSTtBQUMzQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxFQUF4QztBQUNBLFFBQU1BLEVBQUUsR0FBR0osQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEVBQXBCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHYixLQUFLLENBQUNjLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsYUFBSUMsTUFBTSxDQUFDRCxJQUFJLENBQUNILEVBQU4sQ0FBTixLQUFvQkEsRUFBeEI7QUFBQSxLQUFqQixFQUE2QyxDQUE3QyxDQUFuQjtBQUNBQyxjQUFVLElBQUlSLGFBQWEsQ0FBQ1EsVUFBRCxDQUEzQjtBQUNELEdBTEQ7O0FBT0FKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJOLFVBQTNCO0FBQ0EsU0FDRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUosS0FBSyxJQUFJQSxLQUFLLENBQUNpQixHQUFOLENBQVUsVUFBQUYsSUFBSTtBQUFBLFdBQ3JCO0FBQUksU0FBRyxFQUFFQSxJQUFJLENBQUNILEVBQWQ7QUFBa0IsZUFBUyxFQUFDLFlBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGFBQU8sRUFBRUwsZUFBWjtBQUE2QixRQUFFLEVBQUVRLElBQUksQ0FBQ0gsRUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyQ0csSUFBSSxDQUFDRyxLQUFoRCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFHLE1BQUMsdURBQUQ7QUFBUyxXQUFLLEVBQUU7QUFBRUMsbUJBQVcsRUFBRTtBQUFmLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBSCxFQUE4QyxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBOUMsQ0FGRixDQURxQjtBQUFBLEdBQWQsQ0FEWCxDQURGLEVBU0lmLFVBQVUsSUFDVixNQUFDLHFEQUFEO0FBQWMsUUFBSSxFQUFFQSxVQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosQ0FERjtBQWVELENBckNEOztHQUFNVixLOztNQUFBQSxLO0FBdUNTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGlzdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFZzY1RyYXNoLCBWc2NFZGl0IH0gZnJvbSAncmVhY3QtaWNvbnMvdnNjJ1xuXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0J1xuaW1wb3J0IExpc3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvbGlzdC9saXN0Q29udGV4dCdcbmltcG9ydCBDb250YWN0TGlzdHMgZnJvbSAnLi9Db250YWN0TGlzdHMnXG5cbmNvbnN0IENvbnRhaW5lckxpc3QgPSBzdHlsZWQuZGl2YFxuICB1bCB7XG4gICAgbGkge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGlnaHRncmV5fTtcbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgcDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgc3ZnIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3JleX07XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZGFuZ2VyfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBkaXNwbGF5OiBncmlkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDVyZW07XG5gXG5cbmNvbnN0IExpc3RzID0gKCkgPT4ge1xuICBjb25zdCBhdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG5cbiAgY29uc3QgbGlzdENvbnRleHQgPSB1c2VDb250ZXh0KExpc3RDb250ZXh0KVxuICBjb25zdCB7IGxpc3RzLCBnZXRMaXN0cywgc2V0Q3VycmVudCB9ID0gbGlzdENvbnRleHRcblxuICBjb25zdCBbc2VsZWN0TGlzdCwgc2V0U2VsZWN0TGlzdF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gYXV0aENvbnRleHQubG9hZFVzZXIoKVxuXG4gICAgZ2V0TGlzdHMoKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVDbGlja0xpc3QgPSBlID0+IHtcbiAgICBjb25zb2xlLmxvZygnY2xpY291IG5hIGxpc3RhJywgZS50YXJnZXQuaWQpXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZFxuICAgIGNvbnN0IGxpc3RGaWx0ZXIgPSBsaXN0cy5maWx0ZXIobGlzdCA9PiBTdHJpbmcobGlzdC5pZCkgPT09IGlkKVswXVxuICAgIGxpc3RGaWx0ZXIgJiYgc2V0U2VsZWN0TGlzdChsaXN0RmlsdGVyKVxuICB9XG5cbiAgY29uc29sZS5sb2coJ3NlbGVjdExpc3QgJywgc2VsZWN0TGlzdClcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyTGlzdD5cbiAgICAgIDx1bD5cbiAgICAgIHsgbGlzdHMgJiYgbGlzdHMubWFwKGxpc3QgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2xpc3QuaWR9IGNsYXNzTmFtZT0nbGlzdC10aXRsZSc+XG4gICAgICAgICAgICA8cCBvbkNsaWNrPXtoYW5kbGVDbGlja0xpc3R9IGlkPXtsaXN0LmlkfT57bGlzdC50aXRsZX08L3A+XG4gICAgICAgICAgICA8cD48VnNjRWRpdCBzdHlsZT17eyBtYXJnaW5SaWdodDogJzFyZW0nIH19IC8+PFZzY1RyYXNoIC8+PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIHsgc2VsZWN0TGlzdCAmJlxuICAgICAgICA8Q29udGFjdExpc3RzIGxpc3Q9e3NlbGVjdExpc3R9IC8+XG4gICAgICB9XG4gICAgPC9Db250YWluZXJMaXN0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Lists.js\n");

/***/ })

})