webpackHotUpdate("static\\development\\pages\\test.js",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_tbody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tbody */ "./components/tbody.js");
/* harmony import */ var _components_tbody2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/tbody2 */ "./components/tbody2.js");
/* harmony import */ var _components_tbody3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/tbody3 */ "./components/tbody3.js");







var _jsxFileName = "D:\\WORK\\CODE\\FULL STACK JAVASCRIPT\\Website\\nextjs-demo\\nextjs\\pages\\test.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var WeatherAPI =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WeatherAPI, _Component);

  function WeatherAPI(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WeatherAPI);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WeatherAPI).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi", function () {
      var data = _this.state.data; // this.state.data.data.weather.map((item, index) => {
      //   return item;
      // });

      return data.data ? data.data.weather.map(function (item, index) {
        return __jsx(_components_tbody__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        });
      }) : "";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi2", function () {
      var data2 = _this.state.data2; // this.state.data.data.weather.map((item, index) => {
      //   return item;
      // });

      return data2.data ? data2.data.weather.map(function (item, index) {
        return __jsx(_components_tbody__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        });
      }) : "";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi3", function () {
      var data3 = _this.state.data3; // this.state.data.data.weather.map((item, index) => {
      //   return item;
      // });

      return data3.data ? data3.data.weather.map(function (item, index) {
        return __jsx(_components_tbody3__WEBPACK_IMPORTED_MODULE_11__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        });
      }) : "";
    });

    _this.state = {
      data: {},
      data2: {},
      data3: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WeatherAPI, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // DỮ LIỆU THÁNG 9/2018
      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "GET",
        url: "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2018-09-01&enddate=2018-09-30&tp=3&format=json&includelocation=yes&showlocaltime=yes"
      }).then(function (result) {
        _this2.setState({
          data: result.data
        });
      })["catch"](function (err) {
        return console.log(err);
      }); // DỮ LIỆU THÁNG 10/2018

      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "GET",
        url: "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-08-01&enddate=2019-08-31&tp=6&format=json&includelocation=yes&showlocaltime=yes"
      }).then(function (result) {
        _this2.setState({
          data2: result.data
        });
      })["catch"](function (err) {
        return console.log(err);
      }); // DỮ LIỆU THÁNG 6

      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "GET",
        url: "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2018-09-01&enddate=2018-09-30&tp=3&format=json&includelocation=yes&showlocaltime=yes"
      }).then(function (result) {
        _this2.setState({
          data3: result.data
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    } // DỮ LIỆU THÁNG 9/2018

  }, {
    key: "render",
    value: function render() {
      console.log(this.state.data.data);
      console.log(this.state.data3.data);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("h1", {
        style: {
          fontSize: "4rem",
          fontWeight: "bold",
          margin: "auto",
          color: "green"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "GIA LAI HISTORICAL WEATHER DATA TABLE")), __jsx("table", {
        "class": "table",
        style: {
          fontSize: "5rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("thead", {
        style: {
          fontSize: "33px",
          background: 'green',
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("th", {
        style: {
          borderRight: "1px solid green",
          width: "100px"
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Year/Month/Day"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "0:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "0:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: '1px solid green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "0:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "3:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "3:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: '1px solid blue'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "3:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "6:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "6:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: '1px solid red'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "6:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "9:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "9:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: '1px solid green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "9:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "12:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "12:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: '1px solid blue'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "12:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "15:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "15:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: '1px solid red'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "15:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "18:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "18:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: '1px solid green'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "18:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "21:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "21:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: '1px solid blue'
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "21:00AM(Wind)"))), __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, this.renderWeatherApi(), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), this.renderWeatherApi2(), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }))));
    }
  }]);

  return WeatherAPI;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WeatherAPI);

/***/ })

})
//# sourceMappingURL=test.js.68c58265b1a0e42162b6.hot-update.js.map