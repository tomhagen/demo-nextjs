import React, { Component, Fragment } from "react";

class Tbody extends Component {
  render() {
      let {item} = this.props;
    return (
      <Fragment>
        <tr >
          
          <td style={{borderRight:'1px solid green'}} scope="col">{item.date}</td>
          <td style={{color:'green'}} scope="col">{item.hourly[0].tempC}</td>
          <td style={{color:'green'}} scope="col">{item.hourly[0].humidity}</td>
          <td style={{color:'green', borderRight:'1px solid green'}} scope="col">{item.hourly[0].windspeedKmph}</td>
          <td style={{color:'blue'}} scope="col">{item.hourly[1].tempC}</td>
          <td style={{color:'blue'}} scope="col">{item.hourly[1].humidity}</td>   
          <td style={{color:'blue', borderRight:'1px solid blue'}} scope="col">{item.hourly[1].windspeedKmph}</td>     
          <td style={{color:'red'}} scope="col">{item.hourly[2].tempC}</td>
          <td style={{color:'red'}} scope="col">{item.hourly[2].humidity}</td>
          <td style={{color:'red', borderRight:'1px solid red'}} scope="col">{item.hourly[2].windspeedKmph}</td>      
          <td style={{color:'green'}} scope="col">{item.hourly[3].tempC}</td>
          <td style={{color:'green'}} scope="col">{item.hourly[3].humidity}</td>
          <td style={{color:'green', borderRight:'1px solid green'}} scope="col">{item.hourly[3].windspeedKmph}</td>  
          <td style={{color:'blue'}} scope="col">{item.hourly[4].tempC}</td>
          <td style={{color:'blue'}} scope="col">{item.hourly[4].humidity}</td>
          <td style={{color:'blue', borderRight:'1px solid blue'}} scope="col">{item.hourly[4].windspeedKmph}</td>  
          <td style={{color:'red'}} scope="col">{item.hourly[5].tempC}</td>
          <td style={{color:'red'}} scope="col">{item.hourly[5].humidity}</td>
          <td style={{color:'red', borderRight:'1px solid red'}} scope="col">{item.hourly[5].windspeedKmph}</td>  
          <td style={{color:'green'}} scope="col">{item.hourly[6].tempC}</td>
          <td style={{color:'green'}} scope="col">{item.hourly[6].humidity}</td>
          <td style={{color:'green', borderRight:'1px solid green'}} scope="col">{item.hourly[6].windspeedKmph}</td>  
          <td style={{color:'blue'}} scope="col">{item.hourly[7].tempC}</td>
          <td style={{color:'blue'}} scope="col">{item.hourly[7].humidity}</td>
          <td style={{color:'blue', borderRight:'1px solid blue'}} scope="col">{item.hourly[7].windspeedKmph}</td>  
        </tr>
      </Fragment>
    );
  }
}

export default Tbody;
