import "./index.scss";
import React, { Component, Fragment } from "react";

class Food extends Component {
  render() {
    return (
      <Fragment>
        <section className="food">
          <div className="container">
            <div className="wrapper">
              <div className="text__container">
                <h2 className="text__container__title">Just the right food</h2>
                <img src="static/icon.png" className="text__container__icon" />
                <p className="text__container__desc">
                  If you’ve been to one of our restaurants, you’ve seen – and
                  tasted – what keeps our customers coming back for more.
                  Perfect materials and freshly baked food, delicious Lambda
                  cakes, muffins, and gourmet coffees make us hard to resist!
                  Stop in today and check us out!
                </p>
                <img src="static/signature.png" className="text__container__signature" />
              </div>
              <div className="img__container">
                <img src="static/food.png" />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Food;
