
import "../scss/style.scss";
import MainHome from "../components/main-home/index.js";
import React, { Component, Fragment } from 'react';
import Food from "../components/food";

class Index extends Component {
  render() {
    return (
      <Fragment>
        
        <MainHome />
        <Food/>
      </Fragment>
    );
  }
}

export default Index;






