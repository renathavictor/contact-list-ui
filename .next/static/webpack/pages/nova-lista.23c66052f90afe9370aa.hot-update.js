webpackHotUpdate_N_E("pages/nova-lista",{

/***/ "./components/NewList.js":
/*!*******************************!*\
  !*** ./components/NewList.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _media_renatha_Downloads_DEV_IFPB_contacts_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_alert_alertContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/alert/alertContext */ \"./context/alert/alertContext.js\");\n/* harmony import */ var _context_list_listContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/list/listContext */ \"./context/list/listContext.js\");\n/* harmony import */ var _context_contact_contactContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/contact/contactContext */ \"./context/contact/contactContext.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/media/renatha/Downloads/DEV/IFPB/contacts-ui/components/NewList.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_media_renatha_Downloads_DEV_IFPB_contacts_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar NewList = function NewList() {\n  _s();\n\n  var alertContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_alert_alertContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  var listContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_list_listContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  var contactContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_contact_contactContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  var setAlert = alertContext.setAlert;\n  var lists = listContext.lists,\n      current = listContext.current,\n      addList = listContext.addList,\n      setCurrent = listContext.setCurrent,\n      error = listContext.error,\n      getLists = listContext.getLists;\n  var addContact = contactContext.addContact;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    title: ''\n  }),\n      list = _useState[0],\n      setList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    name: '',\n    email: '',\n    phone: ''\n  }),\n      contact = _useState2[0],\n      setContact = _useState2[1];\n\n  var title = list.title;\n  var name = contact.name,\n      email = contact.email,\n      phone = contact.phone;\n\n  var onChange = function onChange(event) {\n    return setList(_objectSpread(_objectSpread({}, list), {}, Object(_media_renatha_Downloads_DEV_IFPB_contacts_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, event.target.value)));\n  };\n\n  var onChangeContact = function onChangeContact(event) {\n    return setContact(_objectSpread(_objectSpread({}, contact), {}, Object(_media_renatha_Downloads_DEV_IFPB_contacts_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, event.target.value)));\n  };\n\n  var onSubmit = function onSubmit(event) {\n    event.preventDefault();\n\n    if (title === '') {\n      setAlert('Preencha o nome da lista', 'danger');\n    } else {\n      addList(_objectSpread({}, list)); // if (!error) {\n      //   getLists()\n      // }\n    }\n  };\n\n  console.log('current ', current);\n\n  var onSubmitContact = function onSubmitContact(event) {\n    event.preventDefault();\n    console.log('submit contact ');\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !current ? __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onSubmit: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 20\n    }\n  }, __jsx(\"fieldset\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, \"Crie uma nova lista\"), __jsx(\"label\", {\n    htmlFor: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, \"Nome\", __jsx(\"input\", {\n    type: \"text\",\n    name: \"title\",\n    placeholder: \"Digite o nome da lista\",\n    value: title,\n    onChange: onChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      marginTop: '2.5rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 15\n    }\n  }, \"Adicione contato em vez disso\")), __jsx(\"button\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, \"Criar\")))) : __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onSubmit: onSubmitContact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, __jsx(\"fieldset\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, \"Adicionar contato na lista: \", current.title), __jsx(\"label\", {\n    htmlFor: \"name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }, \"Nome\", __jsx(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    placeholder: \"Digite o nome do contato\",\n    value: name,\n    onChange: onChangeContact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  })), __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, \"Email\", __jsx(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    placeholder: \"Digite o email do contato\",\n    value: email,\n    onChange: onChangeContact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  })), __jsx(\"label\", {\n    htmlFor: \"phone\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, \"Telefone\", __jsx(\"input\", {\n    type: \"text\",\n    name: \"phone\",\n    placeholder: \"Digite o telefone do contato\",\n    value: phone,\n    onChange: onChangeContact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      marginTop: '2.5rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 15\n    }\n  }, \"Adicione contato em vez disso\")), __jsx(\"button\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 13\n    }\n  }, \"Adicionar\")))));\n};\n\n_s(NewList, \"vUkqDWZew5Pc1+Xr0ilecbbp7Ks=\");\n\n_c = NewList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewList);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdMaXN0LmpzPzAxMWIiXSwibmFtZXMiOlsiTmV3TGlzdCIsImFsZXJ0Q29udGV4dCIsInVzZUNvbnRleHQiLCJBbGVydENvbnRleHQiLCJsaXN0Q29udGV4dCIsIkxpc3RDb250ZXh0IiwiY29udGFjdENvbnRleHQiLCJDb250YWN0Q29udGV4dCIsInNldEFsZXJ0IiwibGlzdHMiLCJjdXJyZW50IiwiYWRkTGlzdCIsInNldEN1cnJlbnQiLCJlcnJvciIsImdldExpc3RzIiwiYWRkQ29udGFjdCIsInVzZVN0YXRlIiwidGl0bGUiLCJsaXN0Iiwic2V0TGlzdCIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwiY29udGFjdCIsInNldENvbnRhY3QiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZUNvbnRhY3QiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0Q29udGFjdCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxZQUFZLEdBQUdDLHdEQUFVLENBQUNDLG1FQUFELENBQS9CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRix3REFBVSxDQUFDRyxpRUFBRCxDQUE5QjtBQUNBLE1BQU1DLGNBQWMsR0FBR0osd0RBQVUsQ0FBQ0ssdUVBQUQsQ0FBakM7QUFIb0IsTUFLWkMsUUFMWSxHQUtDUCxZQUxELENBS1pPLFFBTFk7QUFBQSxNQU1aQyxLQU5ZLEdBTThDTCxXQU45QyxDQU1aSyxLQU5ZO0FBQUEsTUFNTEMsT0FOSyxHQU04Q04sV0FOOUMsQ0FNTE0sT0FOSztBQUFBLE1BTUtD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QUFBQSxpQkFFRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxlQUFXLEVBQUMsOEJBSGQ7QUFJRSxTQUFLLEVBQUVQLEtBSlQ7QUFLRSxZQUFRLEVBQUVPLGVBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBdEJGLEVBZ0NFO0FBQUssU0FBSyxFQUFFO0FBQ1ZNLGFBQU8sRUFBRSxNQURDO0FBRVZDLG9CQUFjLEVBQUUsZUFGTjtBQUdWQyxlQUFTLEVBQUU7QUFIRCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREYsQ0FMRixFQVFFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixDQWhDRixDQUhBLENBNUJKLENBREY7QUE4RUQsQ0EzSEQ7O0dBQU1yQyxPOztLQUFBQSxPO0FBNkhTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmV3TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgQWxlcnRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYWxlcnQvYWxlcnRDb250ZXh0J1xuaW1wb3J0IExpc3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvbGlzdC9saXN0Q29udGV4dCdcbmltcG9ydCBDb250YWN0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L2NvbnRhY3QvY29udGFjdENvbnRleHQnXG5cbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nXG5cbmNvbnN0IE5ld0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGFsZXJ0Q29udGV4dCA9IHVzZUNvbnRleHQoQWxlcnRDb250ZXh0KVxuICBjb25zdCBsaXN0Q29udGV4dCA9IHVzZUNvbnRleHQoTGlzdENvbnRleHQpXG4gIGNvbnN0IGNvbnRhY3RDb250ZXh0ID0gdXNlQ29udGV4dChDb250YWN0Q29udGV4dClcblxuICBjb25zdCB7IHNldEFsZXJ0IH0gPSBhbGVydENvbnRleHRcbiAgY29uc3QgeyBsaXN0cywgY3VycmVudCAsIGFkZExpc3QsIHNldEN1cnJlbnQsIGVycm9yLCBnZXRMaXN0cyB9ID0gbGlzdENvbnRleHRcbiAgY29uc3QgeyBhZGRDb250YWN0IH0gPSBjb250YWN0Q29udGV4dFxuXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKHtcbiAgICB0aXRsZTogJydcbiAgfSlcbiAgY29uc3QgW2NvbnRhY3QsIHNldENvbnRhY3RdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwaG9uZTogJydcbiAgfSlcblxuICBjb25zdCB7IHRpdGxlIH0gPSBsaXN0XG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lIH0gPSBjb250YWN0XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBldmVudCA9PiBzZXRMaXN0KHsgLi4ubGlzdCwgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gIGNvbnN0IG9uQ2hhbmdlQ29udGFjdCA9IGV2ZW50ID0+IHNldENvbnRhY3QoeyAuLi5jb250YWN0LCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSlcblxuICBjb25zdCBvblN1Ym1pdCA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgc2V0QWxlcnQoJ1ByZWVuY2hhIG8gbm9tZSBkYSBsaXN0YScsICdkYW5nZXInKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRMaXN0KHtcbiAgICAgICAgLi4ubGlzdFxuICAgICAgfSlcbiAgICAgIC8vIGlmICghZXJyb3IpIHtcbiAgICAgIC8vICAgZ2V0TGlzdHMoKVxuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuICBcbiAgY29uc29sZS5sb2coJ2N1cnJlbnQgJywgY3VycmVudClcbiAgY29uc3Qgb25TdWJtaXRDb250YWN0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQgY29udGFjdCAnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyAhY3VycmVudCA/IDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH0gICAgICBcbiAgICAgID5cbiAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgIDxoMz5DcmllIHVtYSBub3ZhIGxpc3RhPC9oMz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+XG4gICAgICAgICAgICBOb21lXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIG5vbWUgZGEgbGlzdGFcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMi41cmVtJ1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xvZ2luJz5cbiAgICAgICAgICAgICAgPGE+QWRpY2lvbmUgY29udGF0byBlbSB2ZXogZGlzc288L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmlhcjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPC9Gb3JtPlxuICAgICAgOiA8Rm9ybVxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXRDb250YWN0fSAgICAgIFxuICAgICAgPlxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgPGgzPkFkaWNpb25hciBjb250YXRvIG5hIGxpc3RhOiB7Y3VycmVudC50aXRsZX08L2gzPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgICAgTm9tZVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIG5vbWUgZG8gY29udGF0b1wiXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250YWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cbiAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBlbWFpbCBkbyBjb250YXRvXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250YWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5cbiAgICAgICAgICAgIFRlbGVmb25lXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIHRlbGVmb25lIGRvIGNvbnRhdG9cIlxuICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRhY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzIuNXJlbSdcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9sb2dpbic+XG4gICAgICAgICAgICAgIDxhPkFkaWNpb25lIGNvbnRhdG8gZW0gdmV6IGRpc3NvPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRpY2lvbmFyPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L0Zvcm0+fVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0xpc3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NewList.js\n");

/***/ })

})