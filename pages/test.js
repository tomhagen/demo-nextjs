import React, { Component, Fragment } from "react";
import Axios from "axios";
import Tbody from "../components/tbody";

class WeatherAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=bb11fe1292f747d5a6584956192509&q=Gia+Lai&date=2019-07-01&enddate=2019-07-31&tp=6&format=json&includelocation=yes&showlocaltime=yes"
    })
      .then(result => {
        this.setState({ data: result.data });
      })
      .catch(err => console.log(err));
  }

  renderWeatherApi = () => {
    const { data } = this.state;

    // this.state.data.data.weather.map((item, index) => {
    //   return item;
    // });
    return data.data
      ? data.data.weather.map((item, index) => {
          return <Tbody item={item} key={index} />;
        })
      : "";
  };
  render() {
    console.log(this.state.data.data);
    return (
      <Fragment>
        <div>
          <h1 style={{ fontSize: "4rem",fontWeight:'bold', margin: "auto" , color:'green'}}>
            GIA LAI HISTORICAL WEATHER DATA TABLE
          </h1>
        </div>
        <table class="table" style={{ fontSize: "5rem" }}>
          <thead>
            <tr>
              <th scope="col">Day</th>
              <th scope="col">Max Temp</th>
              <th scope="col">Min Temp</th>
              <th scope="col">Avg Temp</th>
              <th scope="col">Temp(0:00AM)</th>
              <th scope="col">Humidity(0:00AM)</th>
              <th scope="col">Temp(6:00AM)</th>
              <th scope="col">Humidity(6:00AM)</th>
              <th scope="col">Temp(12:00AM)</th>
              <th scope="col">Humidity(12:00AM)</th>
              <th scope="col">Temp(18:00AM)</th>
              <th scope="col">Humidity(18:00AM)</th>
              <th scope="col">UV Index</th>
            </tr>
          </thead>
          <tbody>{this.renderWeatherApi()}</tbody>
        </table>
      </Fragment>
    );
  }
}

export default WeatherAPI;
