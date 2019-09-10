import React, { Component, Fragment } from "react";

class Lamborghini extends Component {
  render() {
    return (
      <Fragment>
        <video width="100%" height="100%" autoPlay>
          <source src="/static/finalweb.mp4" type="video/mp4" />
        </video>
      </Fragment>
    );
  }
}

export default Lamborghini;
