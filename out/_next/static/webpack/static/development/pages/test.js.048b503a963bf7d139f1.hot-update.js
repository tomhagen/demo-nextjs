webpackHotUpdate("static\\development\\pages\\test.js",{

/***/ "./components/tbody.js":
/*!*****************************!*\
  !*** ./components/tbody.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "D:\\WORK\\CODE\\FULL STACK JAVASCRIPT\\Website\\nextjs-demo\\nextjs\\components\\tbody.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var Tbody =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Tbody, _Component);

  function Tbody() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tbody);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Tbody).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tbody, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx("td", {
        style: {
          borderRight: '1px solid green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, item.date), __jsx("td", {
        style: {
          color: 'green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, item.hourly[0].tempC), __jsx("td", {
        style: {
          color: 'green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, item.hourly[0].humidity), __jsx("td", {
        style: {
          color: 'green',
          borderRight: '1px solid green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, item.hourly[0].windspeedKmph), __jsx("td", {
        style: {
          color: 'blue'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, item.hourly[1].tempC), __jsx("td", {
        style: {
          color: 'blue'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, item.hourly[1].humidity), __jsx("td", {
        style: {
          color: 'blue',
          borderRight: '1px solid blue'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, item.hourly[1].windspeedKmph), __jsx("td", {
        style: {
          color: 'red'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, item.hourly[2].tempC), __jsx("td", {
        style: {
          color: 'red'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, item.hourly[2].humidity), __jsx("td", {
        style: {
          color: 'red',
          borderRight: '1px solid red'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, item.hourly[2].windspeedKmph), __jsx("td", {
        style: {
          color: 'green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, item.hourly[3].tempC), __jsx("td", {
        style: {
          color: 'green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, item.hourly[3].humidity), __jsx("td", {
        style: {
          color: 'green',
          borderRight: '1px solid green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, item.hourly[3].windspeedKmph), __jsx("td", {
        style: {
          color: 'blue'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, item.hourly[4].tempC), __jsx("td", {
        style: {
          color: 'blue'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, item.hourly[4].humidity), __jsx("td", {
        style: {
          color: 'blue',
          borderRight: '1px solid blue'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, item.hourly[4].windspeedKmph), __jsx("td", {
        style: {
          color: 'red'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, item.hourly[5].tempC), __jsx("td", {
        style: {
          color: 'red'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, item.hourly[5].humidity), __jsx("td", {
        style: {
          color: 'red',
          borderRight: '1px solid red'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, item.hourly[5].windspeedKmph), __jsx("td", {
        style: {
          color: 'green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, item.hourly[6].tempC), __jsx("td", {
        style: {
          color: 'green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, item.hourly[6].humidity), __jsx("td", {
        style: {
          color: 'green',
          borderRight: '1px solid green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, item.hourly[6].windspeedKmph), __jsx("td", {
        style: {
          color: 'blue'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, item.hourly[7].tempC), __jsx("td", {
        style: {
          color: 'blue'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, item.hourly[7].humidity), __jsx("td", {
        style: {
          color: 'blue'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, item.hourly[7].windspeedKmph)));
    }
  }]);

  return Tbody;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tbody);

/***/ })

})
//# sourceMappingURL=test.js.048b503a963bf7d139f1.hot-update.js.map