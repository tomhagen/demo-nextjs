
import "../scss/style.scss";
import MainHome from "../components/main-home/index.js";
import React, { Component, Fragment } from 'react';
import Food from "../components/food";
import Ingredients from "../components/ingredients";
import Test from "../components/test";
import Loading from "../components/loading";
import Form from "../components/form";

class Index extends Component {
  render() {
    return (
      <Fragment>
   
        <Loading/>
        <MainHome />
        <Food/>
        <Ingredients/>
        <Test/> 
        <Form/>       
      </Fragment>
    );
  }
}

export default Index;






