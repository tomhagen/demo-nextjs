import React, { Component, Fragment } from "react";

class Tbody extends Component {
  render() {
      let {item} = this.props;
    return (
      <Fragment>
        <tr>
          
          <td scope="col">{item.date}</td>
          <td scope="col">{item.maxtempC}</td>
          <td scope="col">{item.mintempC}</td>
          <td scope="col">{item.avgtempC}</td>
          <td scope="col">{item.hourly[0].tempC}</td>
          <td scope="col">{item.hourly[0].humidity}</td>
          <td scope="col">{item.hourly[1].tempC}</td>
          <td scope="col">{item.hourly[1].humidity}</td>        
          <td scope="col">{item.hourly[2].tempC}</td>
          <td scope="col">{item.hourly[2].humidity}</td>      
          <td scope="col">{item.hourly[3].tempC}</td>
          <td scope="col">{item.hourly[3].humidity}</td>     
          <td scope="col">{item.uvIndex}</td>
        
        </tr>
      </Fragment>
    );
  }
}

export default Tbody;
