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







var _jsxFileName = "D:\\WORK\\CODE\\FULL STACK JAVASCRIPT\\Website\\nextjs-demo\\nextjs\\pages\\test.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


 // import Tbody2 from "../components/tbody2";

var WeatherAPI =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WeatherAPI, _Component);

  function WeatherAPI(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WeatherAPI);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WeatherAPI).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi", function () {
      var data = _this.state.data;
      return data.data ? data.data.weather.map(function (item, index) {
        return __jsx(_components_tbody__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        });
      }) : "";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi2", function () {
      var data2 = _this.state.data2;
      return data2.data ? data2.data.weather.map(function (item, index) {
        return __jsx(_components_tbody__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        });
      }) : "";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi3", function () {
      var data3 = _this.state.data3;
      return data3.data ? data3.data.weather.map(function (item, index) {
        return __jsx(_components_tbody__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        });
      }) : "";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi4", function () {
      var data4 = _this.state.data4;
      return data4.data ? data4.data.weather.map(function (item, index) {
        return __jsx(_components_tbody__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        });
      }) : "";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi5", function () {
      var data5 = _this.state.data5;
      return data5.data ? data5.data.weather.map(function (item, index) {
        return __jsx(_components_tbody__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        });
      }) : "";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi6", function () {
      var data6 = _this.state.data6;
      return data6.data ? data6.data.weather.map(function (item, index) {
        return __jsx(_components_tbody__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        });
      }) : "";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi7", function () {
      var data7 = _this.state.data7;
      return data7.data ? data7.data.weather.map(function (item, index) {
        return __jsx(_components_tbody__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        });
      }) : "";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi8", function () {
      var data8 = _this.state.data8;
      return data8.data ? data8.data.weather.map(function (item, index) {
        return __jsx(_components_tbody__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        });
      }) : "";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi9", function () {
      var data9 = _this.state.data9;
      return data9.data ? data9.data.weather.map(function (item, index) {
        return __jsx(_components_tbody__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        });
      }) : "";
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderWeatherApi10", function () {
      var data10 = _this.state.data10;
      return data10.data ? data10.data.weather.map(function (item, index) {
        return __jsx(_components_tbody__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        });
      }) : "";
    });

    _this.state = {
      data: {},
      // dữ liệu tháng 9/2018
      data2: {},
      // dữ liệu tháng 10/2018
      data3: {},
      // dữ liệu tháng 11/2018
      data4: {},
      // dữ liệu tháng 12/2018
      data5: {},
      // dữ liệu tháng 1/2019
      data6: {},
      // dữ liệu tháng 2/2019
      data7: {},
      // dữ liệu tháng 3/2019
      data8: {},
      // dữ liệu tháng 4/2019
      data9: {},
      // dữ liệu tháng 5/2019
      data10: {},
      // dữ liệu tháng 6/2019
      data11: {},
      // dữ liệu tháng 7/2019
      data12: {} // dữ liệu tháng 8/2019

    };
    return _this;
  } // -------------------- CALL API ------------------------


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
        url: "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2018-10-01&enddate=2018-10-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
      }).then(function (result) {
        _this2.setState({
          data2: result.data
        });
      })["catch"](function (err) {
        return console.log(err);
      }); // DỮ LIỆU THÁNG 11/2018

      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "GET",
        url: "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2018-11-01&enddate=2018-11-30&tp=3&format=json&includelocation=yes&showlocaltime=yes"
      }).then(function (result) {
        _this2.setState({
          data3: result.data
        });
      })["catch"](function (err) {
        return console.log(err);
      }); // DỮ LIỆU THÁNG 12/2018

      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "GET",
        url: "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2018-12-01&enddate=2018-12-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
      }).then(function (result) {
        _this2.setState({
          data4: result.data
        });
      })["catch"](function (err) {
        return console.log(err);
      }); // DỮ LIỆU THÁNG 1/2019

      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "GET",
        url: "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-01-01&enddate=2019-01-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
      }).then(function (result) {
        _this2.setState({
          data5: result.data
        });
      })["catch"](function (err) {
        return console.log(err);
      }); // DỮ LIỆU THÁNG 2/2019

      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "GET",
        url: "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-02-01&enddate=2019-02-28&tp=3&format=json&includelocation=yes&showlocaltime=yes"
      }).then(function (result) {
        _this2.setState({
          data6: result.data
        });
      })["catch"](function (err) {
        return console.log(err);
      }); // DỮ LIỆU THÁNG 3/2019

      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "GET",
        url: "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-03-01&enddate=2019-03-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
      }).then(function (result) {
        _this2.setState({
          data7: result.data
        });
      })["catch"](function (err) {
        return console.log(err);
      }); // DỮ LIỆU THÁNG 4/2019

      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "GET",
        url: "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-04-01&enddate=2019-04-30&tp=3&format=json&includelocation=yes&showlocaltime=yes"
      }).then(function (result) {
        _this2.setState({
          data8: result.data
        });
      })["catch"](function (err) {
        return console.log(err);
      }); // DỮ LIỆU THÁNG 5/2019

      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "GET",
        url: "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-05-01&enddate=2019-05-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
      }).then(function (result) {
        _this2.setState({
          data9: result.data
        });
      })["catch"](function (err) {
        return console.log(err);
      }); // DỮ LIỆU THÁNG 6/2019

      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "GET",
        url: "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-06-01&enddate=2019-06-30&tp=3&format=json&includelocation=yes&showlocaltime=yes"
      }).then(function (result) {
        _this2.setState({
          data10: result.data
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    } // -------------------------- RENDER DATA ------------------------
    // DỮ LIỆU THÁNG 9/2018

  }, {
    key: "render",
    // ------------ RENDER VIEW ------------------
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
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
          lineNumber: 254
        },
        __self: this
      }, "GIA LAI HISTORICAL WEATHER DATA TABLE")), __jsx("table", {
        "class": "table",
        style: {
          fontSize: "5rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, __jsx("thead", {
        style: {
          fontSize: "33px",
          background: "green",
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, __jsx("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
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
          lineNumber: 270
        },
        __self: this
      }, "Year/Month/Day"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "0:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "0:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: "1px solid green"
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, "0:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "3:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, "3:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: "1px solid blue"
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "3:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, "6:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, "6:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: "1px solid red"
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "6:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "9:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "9:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: "1px solid green"
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, "9:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "12:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, "12:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: "1px solid blue"
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, "12:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, "15:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "15:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: "1px solid red"
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "15:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "18:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, "18:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: "1px solid green"
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, "18:00AM(Wind)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, "21:00AM(Temperature)"), __jsx("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "21:00AM(Humidity)"), __jsx("th", {
        style: {
          borderRight: "1px solid blue"
        },
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, "21:00AM(Wind)"))), __jsx("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, this.renderWeatherApi(), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }), this.renderWeatherApi2(), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }), this.renderWeatherApi3(), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }), this.renderWeatherApi4(), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }), this.renderWeatherApi5(), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }), this.renderWeatherApi6(), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }), this.renderWeatherApi7(), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }), this.renderWeatherApi8(), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }), this.renderWeatherApi9(), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }), this.renderWeatherApi10())));
    }
  }]);

  return WeatherAPI;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WeatherAPI);

/***/ })

})
//# sourceMappingURL=test.js.9c0c50ae4936716f691e.hot-update.js.map