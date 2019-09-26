import React, { Component, Fragment } from "react";
import Axios from "axios";
import Tbody from "../components/tbody";
// import Tbody2 from "../components/tbody2";

class WeatherAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}, // dữ liệu tháng 9/2018
      data2: {}, // dữ liệu tháng 10/2018
      data3: {}, // dữ liệu tháng 11/2018
      data4: {}, // dữ liệu tháng 12/2018
      data5: {}, // dữ liệu tháng 1/2019
      data6: {}, // dữ liệu tháng 2/2019
      data7: {}, // dữ liệu tháng 3/2019
      data8: {}, // dữ liệu tháng 4/2019
      data9: {}, // dữ liệu tháng 5/2019
      data10: {}, // dữ liệu tháng 6/2019
      data11: {}, // dữ liệu tháng 7/2019
      data12: {}, // dữ liệu tháng 8/2019
      data13: {} // dữ liệu tháng 9/2019
    };
  }

  // -------------------- CALL API ------------------------
  componentDidMount() {
    // DỮ LIỆU THÁNG 9/2018
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2018-09-01&enddate=2018-09-30&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data: result.data });
      })
      .catch(err => console.log(err));

    // DỮ LIỆU THÁNG 10/2018
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2018-10-01&enddate=2018-10-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data2: result.data });
      })
      .catch(err => console.log(err));

    // DỮ LIỆU THÁNG 11/2018
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2018-11-01&enddate=2018-11-30&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data3: result.data });
      })
      .catch(err => console.log(err));

    // DỮ LIỆU THÁNG 12/2018
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2018-12-01&enddate=2018-12-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data4: result.data });
      })
      .catch(err => console.log(err));

    // DỮ LIỆU THÁNG 1/2019
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-01-01&enddate=2019-01-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data5: result.data });
      })
      .catch(err => console.log(err));

    // DỮ LIỆU THÁNG 2/2019
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-02-01&enddate=2019-02-28&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data6: result.data });
      })
      .catch(err => console.log(err));

    // DỮ LIỆU THÁNG 3/2019
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-03-01&enddate=2019-03-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data7: result.data });
      })
      .catch(err => console.log(err));

    // DỮ LIỆU THÁNG 4/2019
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-04-01&enddate=2019-04-30&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data8: result.data });
      })
      .catch(err => console.log(err));

    // DỮ LIỆU THÁNG 5/2019
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-05-01&enddate=2019-05-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data9: result.data });
      })
      .catch(err => console.log(err));

    // DỮ LIỆU THÁNG 6/2019
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-06-01&enddate=2019-06-30&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data10: result.data });
      })
      .catch(err => console.log(err));

    // DỮ LIỆU THÁNG 7/2019
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-07-01&enddate=2019-07-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data11: result.data });
      })
      .catch(err => console.log(err));

    // DỮ LIỆU THÁNG 8/2019
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-08-01&enddate=2019-08-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data12: result.data });
      })
      .catch(err => console.log(err));

    // DỮ LIỆU THÁNG 9/2019
    Axios({
      method: "GET",
      url:
        "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-09-01&enddate=2019-09-31&tp=3&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data13: result.data });
      })
      .catch(err => console.log(err));
  }

  // -------------------------- RENDER DATA ------------------------
  // DỮ LIỆU THÁNG 9/2018
  renderWeatherApi = () => {
    const { data } = this.state;

    return data.data
      ? data.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };

  // DỮ LIỆU THÁNG 10/2018
  renderWeatherApi2 = () => {
    const { data2 } = this.state;

    return data2.data
      ? data2.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };

  // DỮ LIỆU THÁNG 11/2018
  renderWeatherApi3 = () => {
    const { data3 } = this.state;

    return data3.data
      ? data3.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };

  // DỮ LIỆU THÁNG 12/2018
  renderWeatherApi4 = () => {
    const { data4 } = this.state;

    return data4.data
      ? data4.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };

  // DỮ LIỆU THÁNG 1/2019
  renderWeatherApi5 = () => {
    const { data5 } = this.state;

    return data5.data
      ? data5.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };

  // DỮ LIỆU THÁNG 2/2019
  renderWeatherApi6 = () => {
    const { data6 } = this.state;

    return data6.data
      ? data6.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };

  // DỮ LIỆU THÁNG 3/2019
  renderWeatherApi7 = () => {
    const { data7 } = this.state;

    return data7.data
      ? data7.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };

  // DỮ LIỆU THÁNG 4/2019
  renderWeatherApi8 = () => {
    const { data8 } = this.state;

    return data8.data
      ? data8.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };

  // DỮ LIỆU THÁNG 5/2019
  renderWeatherApi9 = () => {
    const { data9 } = this.state;

    return data9.data
      ? data9.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };

  // DỮ LIỆU THÁNG 6/2019
  renderWeatherApi10 = () => {
    const { data10 } = this.state;

    return data10.data
      ? data10.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };

  // DỮ LIỆU THÁNG 7/2019
  renderWeatherApi11 = () => {
    const { data11 } = this.state;

    return data11.data
      ? data11.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };

  // DỮ LIỆU THÁNG 8/2019
  renderWeatherApi12 = () => {
    const { data12 } = this.state;

    return data12.data
      ? data12.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };

  // DỮ LIỆU THÁNG 9/2019
  renderWeatherApi13 = () => {
    const { data13 } = this.state;

    return data13.data
      ? data13.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };
  // ------------ RENDER VIEW ------------------
  render() {
    return (
      <Fragment>
        <div>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              margin: "auto",
              color: "green"
            }}
          >
            GIA LAI HISTORICAL WEATHER DATA TABLE
          </h1>
        </div>
        <table class="table" style={{ fontSize: "5rem" }}>
          <thead
            style={{ fontSize: "33px", background: "green", color: "white" }}
          >
            <tr>
              <th
                style={{ borderRight: "1px solid green", width: "100px" }}
                scope="col"
              >
                Year/Month/Day
              </th>
              <th scope="col">0:00AM(Temperature)</th>
              <th scope="col">0:00AM(Humidity)</th>
              <th style={{ borderRight: "1px solid green" }} scope="col">
                0:00AM(Wind)
              </th>
              <th scope="col">3:00AM(Temperature)</th>
              <th scope="col">3:00AM(Humidity)</th>
              <th style={{ borderRight: "1px solid blue" }} scope="col">
                3:00AM(Wind)
              </th>
              <th scope="col">6:00AM(Temperature)</th>
              <th scope="col">6:00AM(Humidity)</th>
              <th style={{ borderRight: "1px solid red" }} scope="col">
                6:00AM(Wind)
              </th>
              <th scope="col">9:00AM(Temperature)</th>
              <th scope="col">9:00AM(Humidity)</th>
              <th style={{ borderRight: "1px solid green" }} scope="col">
                9:00AM(Wind)
              </th>
              <th scope="col">12:00AM(Temperature)</th>
              <th scope="col">12:00AM(Humidity)</th>
              <th style={{ borderRight: "1px solid blue" }} scope="col">
                12:00AM(Wind)
              </th>
              <th scope="col">15:00AM(Temperature)</th>
              <th scope="col">15:00AM(Humidity)</th>
              <th style={{ borderRight: "1px solid red" }} scope="col">
                15:00AM(Wind)
              </th>
              <th scope="col">18:00AM(Temperature)</th>
              <th scope="col">18:00AM(Humidity)</th>
              <th style={{ borderRight: "1px solid green" }} scope="col">
                18:00AM(Wind)
              </th>
              <th scope="col">21:00AM(Temperature)</th>
              <th scope="col">21:00AM(Humidity)</th>
              <th style={{ borderRight: "1px solid blue" }} scope="col">
                21:00AM(Wind)
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderWeatherApi()}
            <br />
            <p style={{borderBottom:'2px solid red'}}></p>
            {this.renderWeatherApi2()}
            <br />
            <p style={{borderBottom:'2px solid red'}}></p>
            {this.renderWeatherApi3()}
            <br />
            <p style={{borderBottom:'2px solid red'}}></p>
            {this.renderWeatherApi4()}
            <br />
            <p style={{borderBottom:'2px solid red'}}></p>
            {this.renderWeatherApi5()}
            <br />
            <p style={{borderBottom:'2px solid red'}}></p>
            {this.renderWeatherApi6()}
            <br />
            <p style={{borderBottom:'2px solid red'}}></p>
            {this.renderWeatherApi7()}
            <br />
            <p style={{borderBottom:'2px solid red'}}></p>
            {this.renderWeatherApi8()}
            <br />
            <p style={{borderBottom:'2px solid red'}}></p>
            {this.renderWeatherApi9()}
            <br />
            <p style={{borderBottom:'2px solid red'}}></p>
            {this.renderWeatherApi10()}
            <br />
            <p style={{borderBottom:'2px solid red'}}></p>
            {this.renderWeatherApi11()}
            <br />
            <p style={{borderBottom:'2px solid red'}}></p>
            {this.renderWeatherApi12()}
            <br />
            <p style={{borderBottom:'2px solid red'}}></p>
            {this.renderWeatherApi13()}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default WeatherAPI;
