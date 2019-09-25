import React, { Component, Fragment } from "react";
import Carousel from "../components/carousel";
import Header2 from "../components/header2";
import Loading from "../components/loading";
import Search from "../components/Search";

class Lamborghini extends Component {
  render() {
    return (
      <Fragment>
        <Loading/>
        <Header2/>
        <Carousel/>
        <Search/>
      </Fragment>
    );
  }
}

export default Lamborghini;
