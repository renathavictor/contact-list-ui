webpackHotUpdate_N_E("pages/_app",{

/***/ "./context/contact/contactReducer.js":
/*!*******************************************!*\
  !*** ./context/contact/contactReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _media_renatha_Downloads_DEV_IFPB_contacts_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ \"./context/types.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_media_renatha_Downloads_DEV_IFPB_contacts_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar contactReducer = function contactReducer(state, action) {\n  console.log('state ', state);\n  console.log('action ', action);\n\n  switch (action.type) {\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_CONTACTS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        contacts: action.payload,\n        loading: false\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"ADD_CONTACT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        contacts: [action.payload.contacts],\n        loading: false\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"UPDATE_CONTACT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        contacts: state.contacts.map(function (contact) {\n          return contact._id === action.payload._id ? action.payload : contact;\n        }),\n        loading: false\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_CONTACT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        contacts: state.contacts.filter(function (contact) {\n          return contact._id !== action.payload;\n        }),\n        loading: false\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_CONTACTS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        contacts: null,\n        filtered: null,\n        error: null,\n        current: null\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"SET_CURRENT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        current: action.payload\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_CURRENT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        current: null\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"FILTER_CONTACTS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        filtered: state.contacts.filter(function (contact) {\n          var regex = new RegExp(\"\".concat(action.payload), 'gi');\n          return contact.name.match(regex) || contact.email.match(regex);\n        })\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_FILTER\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        filtered: null\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"CONTACT_ERROR\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9jb250YWN0L2NvbnRhY3RSZWR1Y2VyLmpzP2U5MmUiXSwibmFtZXMiOlsiY29udGFjdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiR0VUX0NPTlRBQ1RTIiwiY29udGFjdHMiLCJwYXlsb2FkIiwibG9hZGluZyIsIkFERF9DT05UQUNUIiwiVVBEQVRFX0NPTlRBQ1QiLCJtYXAiLCJjb250YWN0IiwiX2lkIiwiREVMRVRFX0NPTlRBQ1QiLCJmaWx0ZXIiLCJDTEVBUl9DT05UQUNUUyIsImZpbHRlcmVkIiwiZXJyb3IiLCJjdXJyZW50IiwiU0VUX0NVUlJFTlQiLCJDTEVBUl9DVVJSRU5UIiwiRklMVEVSX0NPTlRBQ1RTIiwicmVnZXgiLCJSZWdFeHAiLCJuYW1lIiwibWF0Y2giLCJlbWFpbCIsIkNMRUFSX0ZJTFRFUiIsIkNPTlRBQ1RfRVJST1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQWFBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSCxLQUF0QjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixNQUF2Qjs7QUFDQSxVQUFRQSxNQUFNLENBQUNHLElBQWY7QUFDRSxTQUFLQyxtREFBTDtBQUNFLDZDQUNLTCxLQURMO0FBRUVNLGdCQUFRLEVBQUVMLE1BQU0sQ0FBQ00sT0FGbkI7QUFHRUMsZUFBTyxFQUFFO0FBSFg7O0FBS0YsU0FBS0Msa0RBQUw7QUFDRSw2Q0FDS1QsS0FETDtBQUVFTSxnQkFBUSxFQUFFLENBQUNMLE1BQU0sQ0FBQ00sT0FBUCxDQUFlRCxRQUFoQixDQUZaO0FBR0VFLGVBQU8sRUFBRTtBQUhYOztBQUtGLFNBQUtFLHFEQUFMO0FBQ0UsNkNBQ0tWLEtBREw7QUFFRU0sZ0JBQVEsRUFBRU4sS0FBSyxDQUFDTSxRQUFOLENBQWVLLEdBQWYsQ0FBbUIsVUFBQUMsT0FBTztBQUFBLGlCQUNsQ0EsT0FBTyxDQUFDQyxHQUFSLEtBQWdCWixNQUFNLENBQUNNLE9BQVAsQ0FBZU0sR0FBL0IsR0FBcUNaLE1BQU0sQ0FBQ00sT0FBNUMsR0FBc0RLLE9BRHBCO0FBQUEsU0FBMUIsQ0FGWjtBQUtFSixlQUFPLEVBQUU7QUFMWDs7QUFPRixTQUFLTSxxREFBTDtBQUNFLDZDQUNLZCxLQURMO0FBRUVNLGdCQUFRLEVBQUVOLEtBQUssQ0FBQ00sUUFBTixDQUFlUyxNQUFmLENBQ1IsVUFBQUgsT0FBTztBQUFBLGlCQUFJQSxPQUFPLENBQUNDLEdBQVIsS0FBZ0JaLE1BQU0sQ0FBQ00sT0FBM0I7QUFBQSxTQURDLENBRlo7QUFLRUMsZUFBTyxFQUFFO0FBTFg7O0FBT0YsU0FBS1EscURBQUw7QUFDRSw2Q0FDS2hCLEtBREw7QUFFRU0sZ0JBQVEsRUFBRSxJQUZaO0FBR0VXLGdCQUFRLEVBQUUsSUFIWjtBQUlFQyxhQUFLLEVBQUUsSUFKVDtBQUtFQyxlQUFPLEVBQUU7QUFMWDs7QUFPRixTQUFLQyxrREFBTDtBQUNFLDZDQUNLcEIsS0FETDtBQUVFbUIsZUFBTyxFQUFFbEIsTUFBTSxDQUFDTTtBQUZsQjs7QUFJRixTQUFLYyxvREFBTDtBQUNFLDZDQUNLckIsS0FETDtBQUVFbUIsZUFBTyxFQUFFO0FBRlg7O0FBSUYsU0FBS0csc0RBQUw7QUFDRSw2Q0FDS3RCLEtBREw7QUFFRWlCLGdCQUFRLEVBQUVqQixLQUFLLENBQUNNLFFBQU4sQ0FBZVMsTUFBZixDQUFzQixVQUFBSCxPQUFPLEVBQUk7QUFDekMsY0FBTVcsS0FBSyxHQUFHLElBQUlDLE1BQUosV0FBY3ZCLE1BQU0sQ0FBQ00sT0FBckIsR0FBZ0MsSUFBaEMsQ0FBZDtBQUNBLGlCQUFPSyxPQUFPLENBQUNhLElBQVIsQ0FBYUMsS0FBYixDQUFtQkgsS0FBbkIsS0FBNkJYLE9BQU8sQ0FBQ2UsS0FBUixDQUFjRCxLQUFkLENBQW9CSCxLQUFwQixDQUFwQztBQUNELFNBSFM7QUFGWjs7QUFPRixTQUFLSyxtREFBTDtBQUNFLDZDQUNLNUIsS0FETDtBQUVFaUIsZ0JBQVEsRUFBRTtBQUZaOztBQUlGLFNBQUtZLG9EQUFMO0FBQ0UsNkNBQ0s3QixLQURMO0FBRUVrQixhQUFLLEVBQUVqQixNQUFNLENBQUNNO0FBRmhCOztBQUlGO0FBQ0UsYUFBT1AsS0FBUDtBQWxFSjtBQW9FRCxDQXZFRDs7QUF5RWVELDZFQUFmIiwiZmlsZSI6Ii4vY29udGV4dC9jb250YWN0L2NvbnRhY3RSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgR0VUX0NPTlRBQ1RTLFxuICBBRERfQ09OVEFDVCxcbiAgREVMRVRFX0NPTlRBQ1QsXG4gIFNFVF9DVVJSRU5ULFxuICBDTEVBUl9DVVJSRU5ULFxuICBVUERBVEVfQ09OVEFDVCxcbiAgRklMVEVSX0NPTlRBQ1RTLFxuICBDTEVBUl9GSUxURVIsXG4gIENPTlRBQ1RfRVJST1IsXG4gIENMRUFSX0NPTlRBQ1RTXG59IGZyb20gJy4uL3R5cGVzJ1xuXG5jb25zdCBjb250YWN0UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzdGF0ZSAnLCBzdGF0ZSlcbiAgY29uc29sZS5sb2coJ2FjdGlvbiAnLCBhY3Rpb24pXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFVF9DT05UQUNUUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb250YWN0czogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSBBRERfQ09OVEFDVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb250YWN0czogW2FjdGlvbi5wYXlsb2FkLmNvbnRhY3RzXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlIFVQREFURV9DT05UQUNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbnRhY3RzOiBzdGF0ZS5jb250YWN0cy5tYXAoY29udGFjdCA9PlxuICAgICAgICAgIGNvbnRhY3QuX2lkID09PSBhY3Rpb24ucGF5bG9hZC5faWQgPyBhY3Rpb24ucGF5bG9hZCA6IGNvbnRhY3RcbiAgICAgICAgKSxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlIERFTEVURV9DT05UQUNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbnRhY3RzOiBzdGF0ZS5jb250YWN0cy5maWx0ZXIoXG4gICAgICAgICAgY29udGFjdCA9PiBjb250YWN0Ll9pZCAhPT0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgKSxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlIENMRUFSX0NPTlRBQ1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbnRhY3RzOiBudWxsLFxuICAgICAgICBmaWx0ZXJlZDogbnVsbCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIGN1cnJlbnQ6IG51bGxcbiAgICAgIH1cbiAgICBjYXNlIFNFVF9DVVJSRU5UOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgY2FzZSBDTEVBUl9DVVJSRU5UOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnQ6IG51bGxcbiAgICAgIH1cbiAgICBjYXNlIEZJTFRFUl9DT05UQUNUUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJlZDogc3RhdGUuY29udGFjdHMuZmlsdGVyKGNvbnRhY3QgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgJHthY3Rpb24ucGF5bG9hZH1gLCAnZ2knKVxuICAgICAgICAgIHJldHVybiBjb250YWN0Lm5hbWUubWF0Y2gocmVnZXgpIHx8IGNvbnRhY3QuZW1haWwubWF0Y2gocmVnZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgY2FzZSBDTEVBUl9GSUxURVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyZWQ6IG51bGxcbiAgICAgIH1cbiAgICBjYXNlIENPTlRBQ1RfRVJST1I6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/contact/contactReducer.js\n");

/***/ })

})