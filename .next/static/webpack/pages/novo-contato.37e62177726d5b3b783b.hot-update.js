webpackHotUpdate_N_E("pages/novo-contato",{

/***/ "./components/NewContact.js":
/*!**********************************!*\
  !*** ./components/NewContact.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _media_renatha_Downloads_DEV_IFPB_contacts_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_alert_alertContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/alert/alertContext */ \"./context/alert/alertContext.js\");\n/* harmony import */ var _context_list_listContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/list/listContext */ \"./context/list/listContext.js\");\n/* harmony import */ var _context_contact_contactContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/contact/contactContext */ \"./context/contact/contactContext.js\");\n/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/auth/authContext */ \"./context/auth/authContext.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/media/renatha/Downloads/DEV/IFPB/contacts-ui/components/NewContact.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_media_renatha_Downloads_DEV_IFPB_contacts_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar NewContact = function NewContact() {\n  _s();\n\n  var authContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n  var alertContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_alert_alertContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  var listContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_list_listContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  var contactContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_contact_contactContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  var setAlert = alertContext.setAlert;\n  var lists = listContext.lists,\n      error = listContext.error,\n      clearCurrent = listContext.clearCurrent;\n  var addContact = contactContext.addContact;\n  var isAuthenticated = authContext.isAuthenticated,\n      loading = authContext.loading;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    name: '',\n    email: '',\n    phone: '',\n    list: ''\n  }),\n      contact = _useState[0],\n      setContact = _useState[1];\n\n  var name = contact.name,\n      email = contact.email,\n      phone = contact.phone,\n      list = contact.list;\n\n  var onChangeContact = function onChangeContact(event) {\n    return setContact(_objectSpread(_objectSpread({}, contact), {}, Object(_media_renatha_Downloads_DEV_IFPB_contacts_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, event.target.value)));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!loading && !isAuthenticated) {\n      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');\n    }\n\n    return function () {\n      clearCurrent();\n    };\n  }, []);\n\n  var onSubmitContact = function onSubmitContact(event) {\n    event.preventDefault();\n\n    if (name === '') {\n      setAlert('O nome não pode ficar em branco', 'danger');\n    } else {\n      console.log('contact ----- ', contact);\n      addContact(_objectSpread({}, contact));\n\n      if (!error) {\n        setAlert('Adicionado com sucesso!', 'success');\n        setContact({\n          name: '',\n          email: '',\n          phone: '',\n          list: ''\n        });\n      }\n    }\n  };\n\n  var phoneMask = function phoneMask(userInput) {\n    var numbers = userInput.match(/\\d/g);\n    var numberLength = 0;\n\n    if (numbers) {\n      numberLength = numbers.join('').length;\n    }\n\n    if (numberLength > 10) {\n      return ['(', /[1-9]/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/];\n    } else {\n      return ['(', /[1-9]/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/];\n    }\n  };\n\n  return isAuthenticated && __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onSubmit: onSubmitContact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, __jsx(\"fieldset\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, \"Adicionar novo contato\"), __jsx(\"label\", {\n    htmlFor: \"list\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(\"select\", {\n    name: \"list\",\n    id: \"list\",\n    onChange: onChangeContact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, lists && lists.map(function (list) {\n    return __jsx(\"option\", {\n      value: list.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 15\n      }\n    }, list.title);\n  }))), __jsx(\"label\", {\n    htmlFor: \"name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, \"Nome\", __jsx(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    placeholder: \"Digite o nome do contato\",\n    value: name,\n    onChange: onChangeContact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  })), __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  }, \"Email\", __jsx(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    placeholder: \"Digite o email do contato\",\n    value: email,\n    onChange: onChangeContact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  })), __jsx(\"label\", {\n    htmlFor: \"phone\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }, \"Telefone\", __jsx(\"input\", {\n    type: \"text\",\n    name: \"phone\",\n    placeholder: \"Digite o telefone do contato\",\n    value: phone,\n    onChange: onChangeContact,\n    pattern: function pattern() {\n      return phoneMask(phone);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      marginTop: '2.5rem'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/nova-lista\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 13\n    }\n  }, \"Crie uma nova lista\")), __jsx(\"button\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 11\n    }\n  }, \"Adicionar\"))));\n};\n\n_s(NewContact, \"gHK3EcMoSVnrlvtAMwDjcUG2FZM=\");\n\n_c = NewContact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewContact);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewContact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdDb250YWN0LmpzP2I0M2YiXSwibmFtZXMiOlsiTmV3Q29udGFjdCIsImF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiYWxlcnRDb250ZXh0IiwiQWxlcnRDb250ZXh0IiwibGlzdENvbnRleHQiLCJMaXN0Q29udGV4dCIsImNvbnRhY3RDb250ZXh0IiwiQ29udGFjdENvbnRleHQiLCJzZXRBbGVydCIsImxpc3RzIiwiZXJyb3IiLCJjbGVhckN1cnJlbnQiLCJhZGRDb250YWN0IiwiaXNBdXRoZW50aWNhdGVkIiwibG9hZGluZyIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJsaXN0IiwiY29udGFjdCIsInNldENvbnRhY3QiLCJvbkNoYW5nZUNvbnRhY3QiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicHVzaCIsIm9uU3VibWl0Q29udGFjdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInBob25lTWFzayIsInVzZXJJbnB1dCIsIm51bWJlcnMiLCJtYXRjaCIsIm51bWJlckxlbmd0aCIsImpvaW4iLCJsZW5ndGgiLCJtYXAiLCJpZCIsInRpdGxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBOUI7QUFDQSxNQUFNQyxZQUFZLEdBQUdGLHdEQUFVLENBQUNHLG1FQUFELENBQS9CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSix3REFBVSxDQUFDSyxpRUFBRCxDQUE5QjtBQUNBLE1BQU1D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QUFBQSxpQkFSRixDQXpDRixDQUhGLENBREY7QUEwREQsQ0E1SEQ7O0dBQU0vQyxVOztLQUFBQSxVO0FBOEhTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmV3Q29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgQWxlcnRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYWxlcnQvYWxlcnRDb250ZXh0J1xuaW1wb3J0IExpc3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvbGlzdC9saXN0Q29udGV4dCdcbmltcG9ydCBDb250YWN0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L2NvbnRhY3QvY29udGFjdENvbnRleHQnXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0J1xuXG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJ1xuXG5jb25zdCBOZXdDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBhdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG4gIGNvbnN0IGFsZXJ0Q29udGV4dCA9IHVzZUNvbnRleHQoQWxlcnRDb250ZXh0KVxuICBjb25zdCBsaXN0Q29udGV4dCA9IHVzZUNvbnRleHQoTGlzdENvbnRleHQpXG4gIGNvbnN0IGNvbnRhY3RDb250ZXh0ID0gdXNlQ29udGV4dChDb250YWN0Q29udGV4dClcblxuICBjb25zdCB7IHNldEFsZXJ0IH0gPSBhbGVydENvbnRleHRcbiAgY29uc3QgeyBsaXN0cyAsIGVycm9yLCBjbGVhckN1cnJlbnQgfSA9IGxpc3RDb250ZXh0XG4gIGNvbnN0IHsgYWRkQ29udGFjdCB9ID0gY29udGFjdENvbnRleHRcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IGF1dGhDb250ZXh0XG5cbiAgY29uc3QgW2NvbnRhY3QsIHNldENvbnRhY3RdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwaG9uZTogJycsXG4gICAgbGlzdDogJydcbiAgfSlcblxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwaG9uZSwgbGlzdCB9ID0gY29udGFjdFxuXG4gIGNvbnN0IG9uQ2hhbmdlQ29udGFjdCA9IGV2ZW50ID0+IHNldENvbnRhY3QoeyAuLi5jb250YWN0LCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbG9hZGluZyAmJiAhaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJDdXJyZW50KClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uU3VibWl0Q29udGFjdCA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKG5hbWUgPT09ICcnKSB7XG4gICAgICBzZXRBbGVydCgnTyBub21lIG7Do28gcG9kZSBmaWNhciBlbSBicmFuY28nLCAnZGFuZ2VyJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2NvbnRhY3QgLS0tLS0gJywgY29udGFjdClcbiAgICAgIGFkZENvbnRhY3Qoe1xuICAgICAgICAuLi5jb250YWN0XG4gICAgICB9KVxuICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICBzZXRBbGVydCgnQWRpY2lvbmFkbyBjb20gc3VjZXNzbyEnLCAnc3VjY2VzcycpXG4gICAgICAgIHNldENvbnRhY3Qoe1xuICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgbGlzdDogJydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBwaG9uZU1hc2sgPSB1c2VySW5wdXQgPT4ge1xuICAgIGxldCBudW1iZXJzID0gdXNlcklucHV0Lm1hdGNoKC9cXGQvZylcbiAgICBsZXQgbnVtYmVyTGVuZ3RoID0gMFxuICAgIGlmIChudW1iZXJzKSB7XG4gICAgICBudW1iZXJMZW5ndGggPSBudW1iZXJzLmpvaW4oJycpLmxlbmd0aFxuICAgIH1cbiAgICBpZiAobnVtYmVyTGVuZ3RoID4gMTApIHtcbiAgICAgIHJldHVybiBbJygnLCAvWzEtOV0vLCAvXFxkLywgJyknLCAnICcsIC9cXGQvLCAvXFxkLywgL1xcZC8sIC9cXGQvLCAvXFxkLywgJy0nLCAvXFxkLywgL1xcZC8sIC9cXGQvLCAvXFxkL11cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFsnKCcsIC9bMS05XS8sIC9cXGQvLCAnKScsICcgJywgL1xcZC8sIC9cXGQvLCAvXFxkLywgL1xcZC8sICctJywgL1xcZC8sIC9cXGQvLCAvXFxkLywgL1xcZC9dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQXV0aGVudGljYXRlZCAmJiAoXG4gICAgPEZvcm1cbiAgICAgIG9uU3VibWl0PXtvblN1Ym1pdENvbnRhY3R9XG4gICAgPlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICA8aDM+QWRpY2lvbmFyIG5vdm8gY29udGF0bzwvaDM+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdsaXN0Jz5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJsaXN0XCIgaWQ9XCJsaXN0XCIgb25DaGFuZ2U9e29uQ2hhbmdlQ29udGFjdH0+XG4gICAgICAgICAgICB7IGxpc3RzICYmIGxpc3RzLm1hcChsaXN0ID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bGlzdC5pZH0+e2xpc3QudGl0bGV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgIE5vbWVcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gbm9tZSBkbyBjb250YXRvXCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29udGFjdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgICAgRW1haWxcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBlbWFpbCBkbyBjb250YXRvXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRhY3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlxuICAgICAgICAgIFRlbGVmb25lXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyB0ZWxlZm9uZSBkbyBjb250YXRvXCJcbiAgICAgICAgICAgIHZhbHVlPXtwaG9uZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRhY3R9XG4gICAgICAgICAgICBwYXR0ZXJuPXsoKSA9PiBwaG9uZU1hc2socGhvbmUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcyLjVyZW0nXG4gICAgICAgIH19PlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9ub3ZhLWxpc3RhJz5cbiAgICAgICAgICAgIDxhPkNyaWUgdW1hIG5vdmEgbGlzdGE8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkaWNpb25hcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9Gb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0NvbnRhY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NewContact.js\n");

/***/ })

})