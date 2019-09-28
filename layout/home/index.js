import "./index.scss";

import React, { Component, Fragment } from "react";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <section className="homepage">
          <div className="home__container hasGradient">
            <video className="home-video" autoPlay muted loop>
              <source src="/static/img/main_sequence_4.mp4" type="video/mp4" />
            </video>
            <div className="home__content">
              <div className="home__content__wrapper">
                <div className="home__content__container">
                  <h1 className="content__title">
                    End-to-End Customer Journey Analytics
                  </h1>
                  <p className="content__subtitle">
                    No hours sank into aggregating and cleaning data. No complex
                    SQL queries required. Just the answers teams need to make
                    smarter decisions, fast. Now, that's data-driven.
                  </p>
                  <div className="content__signup">
                    <a href="#" className="content__btn-signup">
                      GET STARTED FOR FREE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomePage;
