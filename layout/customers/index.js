import "./index.scss";

import React, { Component, Fragment } from "react";

class Cusomers extends Component {
  render() {
    return (
      <Fragment>
        <section className="customers">
          <div className="customer__container">
            <div className="customer__container__flex">
              <h3 className="customer__title">
                Trusted by over 5,000 of the world's most innovative companies
              </h3>
              <div className="customer__logos">
                <div className="customer__logos__item">
                  <img src="/static/img/hewllet.svg" />
                </div>
                <div className="customer__logos__item">
                  <img src="/static/img/red-hat.svg" />
                </div>
                <div className="customer__logos__item">
                  <img src="/static/img/infomatica.svg" />
                </div>
                <div className="customer__logos__item">
                  <img src="/static/img/wordstream.svg" />
                </div>
                <div className="customer__logos__item">
                  <img src="/static/img/applovin.svg" />
                </div>
              </div>
              <a href="#" className="customer__btn-learn-more">Learn More about our customers</a>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Cusomers;
