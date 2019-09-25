import "./index.scss";
import React, { Component, Fragment } from "react";

class Carousel extends Component {
  render() {
    return (
      <Fragment>
        <div
          id="carousel-indicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-indicators"
              data-slide-to={0}
              className="active"
             
            />
            <li data-target="#carousel-indicators" data-slide-to={1} />
            <li data-target="#carousel-indicators" data-slide-to={2} />
            <li data-target="#carousel-indicators" data-slide-to={3} />
          </ol>
          <div className="carousel-title">
              <h1>LAMBORGHINI</h1>
              <div className="title-model">
                <p>MODELS</p>
              </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active " data-interval="2000" >
              <img  src="/static/Huracan.jpg" className="d-block w-100" alt="Huracan" />
              
            </div>
            <div className="carousel-item " data-interval="2000">
              <img src="/static/Carousel1.jpg" className="d-block w-100" alt="Urus-Giallo" />
            </div>
            <div className="carousel-item " data-interval="2000">
              <img src="/static/Carousel2.jpg" className="d-block w-100" alt="Caoursel" />
            </div>
            <div className="carousel-item " data-interval="2000">
              <img src="/static/Carousel3.jpg" className="d-block w-100" alt="Carousel2" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel-indicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-indicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Carousel;
