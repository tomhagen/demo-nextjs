import "./index.scss";
import React, { Component, Fragment } from "react";

class Ingredients extends Component {
  render() {
    return (
      <Fragment>
        <section className="ingredients">
          <div className="container">
            <h2 className="ingredients__title">Fine ingredients</h2>
            <img src="static/bg-icon.png" />
            <p className="ingredients__desc">
              If you’ve been to one of our restaurants, you’ve seen – and tasted
              – what keeps our customers coming back for more. Perfect materials
              and freshly baked food, delicious Lambda cakes, muffins, and
              gourmet coffees make us hard to resist! Stop in today and check us
              out!
            </p>
            <div className="ingredients__img">
                <img src="/static/product1.png"/>
                <img src="/static/product2.png"/>
                <img src="/static/product3.png"/>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Ingredients;
