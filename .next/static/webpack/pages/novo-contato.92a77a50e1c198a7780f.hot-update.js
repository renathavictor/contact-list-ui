webpackHotUpdate_N_E("pages/novo-contato",{

/***/ "./components/NewContact.js":
/*!**********************************!*\
  !*** ./components/NewContact.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _media_renatha_Downloads_DEV_IFPB_contacts_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_alert_alertContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/alert/alertContext */ \"./context/alert/alertContext.js\");\n/* harmony import */ var _context_list_listContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/list/listContext */ \"./context/list/listContext.js\");\n/* harmony import */ var _context_contact_contactContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/contact/contactContext */ \"./context/contact/contactContext.js\");\n/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/auth/authContext */ \"./context/auth/authContext.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/media/renatha/Downloads/DEV/IFPB/contacts-ui/components/NewContact.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_media_renatha_Downloads_DEV_IFPB_contacts_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar NewContact = function NewContact() {\n  _s();\n\n  var authContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n  var alertContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_alert_alertContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  var listContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_list_listContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  var contactContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_contact_contactContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  var setAlert = alertContext.setAlert;\n  var lists = listContext.lists,\n      error = listContext.error,\n      clearCurrent = listContext.clearCurrent;\n  var addContact = contactContext.addContact;\n  var isAuthenticated = authContext.isAuthenticated,\n      loading = authContext.loading;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    name: '',\n    email: '',\n    phone: ''\n  }),\n      contact = _useState[0],\n      setContact = _useState[1];\n\n  var name = contact.name,\n      email = contact.email,\n      phone = contact.phone;\n\n  var onChangeContact = function onChangeContact(event) {\n    return setContact(_objectSpread(_objectSpread({}, contact), {}, Object(_media_renatha_Downloads_DEV_IFPB_contacts_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, event.target.value)));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!loading && !isAuthenticated) {\n      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');\n    }\n\n    return function () {\n      clearCurrent();\n    };\n  }, []);\n\n  var onSubmitContact = function onSubmitContact(event) {\n    event.preventDefault();\n\n    if (name === '') {\n      setAlert('O nome não pode ficar em branco', 'danger');\n    } else {\n      addContact(_objectSpread({\n        id: current.id\n      }, contact));\n\n      if (!error) {\n        setAlert('Adicionado com sucesso!', 'success');\n        setContact({\n          name: '',\n          email: '',\n          phone: ''\n        });\n      }\n    }\n  };\n\n  return isAuthenticated && __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onSubmit: onSubmitContact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(\"fieldset\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, \"Adicionar novo contato\"), \"adicionar select listas\", __jsx(\"label\", {\n    htmlFor: \"name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, \"Nome\", __jsx(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    placeholder: \"Digite o nome do contato\",\n    value: name,\n    onChange: onChangeContact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  })), __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, \"Email\", __jsx(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    placeholder: \"Digite o email do contato\",\n    value: email,\n    onChange: onChangeContact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  })), __jsx(\"label\", {\n    htmlFor: \"phone\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, \"Telefone\", __jsx(\"input\", {\n    type: \"text\",\n    name: \"phone\",\n    placeholder: \"Digite o telefone do contato\",\n    value: phone,\n    onChange: onChangeContact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      marginTop: '2.5rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/nova-lista\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, \"Crie uma nova lista\")), __jsx(\"button\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }, \"Adicionar\"))));\n};\n\n_s(NewContact, \"kF9muhhaNcBiUpk/TgL0vFajOLw=\");\n\n_c = NewContact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewContact);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewContact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdDb250YWN0LmpzP2I0M2YiXSwibmFtZXMiOlsiTmV3Q29udGFjdCIsImF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiYWxlcnRDb250ZXh0IiwiQWxlcnRDb250ZXh0IiwibGlzdENvbnRleHQiLCJMaXN0Q29udGV4dCIsImNvbnRhY3RDb250ZXh0IiwiQ29udGFjdENvbnRleHQiLCJzZXRBbGVydCIsImxpc3RzIiwiZXJyb3IiLCJjbGVhckN1cnJlbnQiLCJhZGRDb250YWN0IiwiaXNBdXRoZW50aWNhdGVkIiwibG9hZGluZyIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJjb250YWN0Iiwic2V0Q29udGFjdCIsIm9uQ2hhbmdlQ29udGFjdCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJwdXNoIiwib25TdWJtaXRDb250YWN0IiwicHJldmVudERlZmF1bHQiLCJpZCIsImN1cnJlbnQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkIsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE5QjtBQUNBLE1BQU1DLFlBQVksR0FBR0Ysd0RBQVUsQ0FBQ0csbUVBQUQsQ0FBL0I7QUFDQSxNQUFNQyxXQUFXLEdBQUdKLHdEQUFVLENBQUNLLGlFQUFELENBQTlCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHTix3REFBVSxDQUFDTyx1RUFBRCxDQUFqQztBQUp1QixNQU1mQyxRQU5lLEdBTUZOLFlBTkUsQ0FNZk0sUUFOZTtBQUFBLE1BT2ZDLEtBUGUsR0FPaUJMLFdB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QUE7QUFBQSxJQUZGLENBYkYsRUF1QkU7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLGVBQVcsRUFBQyw4QkFIZDtBQUlFLFNBQUssRUFBRUgsS0FKVDtBQUtFLFlBQVEsRUFBRUcsZUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0F2QkYsRUFpQ0U7QUFBSyxTQUFLLEVBQUU7QUFDVlcsYUFBTyxFQUFFLE1BREM7QUFFVkMsb0JBQWMsRUFBRSxlQUZOO0FBR1ZDLGVBQVMsRUFBRTtBQUhELEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQUxGLEVBUUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLENBakNGLENBSEYsQ0FERjtBQWtERCxDQXJHRDs7R0FBTXBDLFU7O0tBQUFBLFU7QUF1R1NBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OZXdDb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBBbGVydENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hbGVydC9hbGVydENvbnRleHQnXG5pbXBvcnQgTGlzdENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9saXN0L2xpc3RDb250ZXh0J1xuaW1wb3J0IENvbnRhY3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvY29udGFjdC9jb250YWN0Q29udGV4dCdcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQnXG5cbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nXG5cbmNvbnN0IE5ld0NvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgY29uc3QgYWxlcnRDb250ZXh0ID0gdXNlQ29udGV4dChBbGVydENvbnRleHQpXG4gIGNvbnN0IGxpc3RDb250ZXh0ID0gdXNlQ29udGV4dChMaXN0Q29udGV4dClcbiAgY29uc3QgY29udGFjdENvbnRleHQgPSB1c2VDb250ZXh0KENvbnRhY3RDb250ZXh0KVxuXG4gIGNvbnN0IHsgc2V0QWxlcnQgfSA9IGFsZXJ0Q29udGV4dFxuICBjb25zdCB7IGxpc3RzICwgZXJyb3IsIGNsZWFyQ3VycmVudCB9ID0gbGlzdENvbnRleHRcbiAgY29uc3QgeyBhZGRDb250YWN0IH0gPSBjb250YWN0Q29udGV4dFxuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCwgbG9hZGluZyB9ID0gYXV0aENvbnRleHRcblxuICBjb25zdCBbY29udGFjdCwgc2V0Q29udGFjdF0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBob25lOiAnJ1xuICB9KVxuXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lIH0gPSBjb250YWN0XG5cbiAgY29uc3Qgb25DaGFuZ2VDb250YWN0ID0gZXZlbnQgPT4gc2V0Q29udGFjdCh7IC4uLmNvbnRhY3QsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2FkaW5nICYmICFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckN1cnJlbnQoKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3Qgb25TdWJtaXRDb250YWN0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAobmFtZSA9PT0gJycpIHtcbiAgICAgIHNldEFsZXJ0KCdPIG5vbWUgbsOjbyBwb2RlIGZpY2FyIGVtIGJyYW5jbycsICdkYW5nZXInKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDb250YWN0KHtcbiAgICAgICAgaWQ6IGN1cnJlbnQuaWQsXG4gICAgICAgIC4uLmNvbnRhY3RcbiAgICAgIH0pXG4gICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgIHNldEFsZXJ0KCdBZGljaW9uYWRvIGNvbSBzdWNlc3NvIScsICdzdWNjZXNzJylcbiAgICAgICAgc2V0Q29udGFjdCh7XG4gICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgIHBob25lOiAnJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0F1dGhlbnRpY2F0ZWQgJiYgKFxuICAgIDxGb3JtXG4gICAgICBvblN1Ym1pdD17b25TdWJtaXRDb250YWN0fVxuICAgID5cbiAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgPGgzPkFkaWNpb25hciBub3ZvIGNvbnRhdG88L2gzPlxuICAgICAgICBhZGljaW9uYXIgc2VsZWN0IGxpc3Rhc1xuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICBOb21lXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIG5vbWUgZG8gY29udGF0b1wiXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRhY3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gZW1haWwgZG8gY29udGF0b1wiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250YWN0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5cbiAgICAgICAgICBUZWxlZm9uZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gdGVsZWZvbmUgZG8gY29udGF0b1wiXG4gICAgICAgICAgICB2YWx1ZT17cGhvbmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250YWN0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcyLjVyZW0nXG4gICAgICAgIH19PlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9ub3ZhLWxpc3RhJz5cbiAgICAgICAgICAgIDxhPkNyaWUgdW1hIG5vdmEgbGlzdGE8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkaWNpb25hcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9Gb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0NvbnRhY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NewContact.js\n");

/***/ })

})