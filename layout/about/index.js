import "./index.scss";
import React, { Component, Fragment } from "react";

class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="about">
          <div className="about__container">
            <div className="about__header">
              <h1 className="about__header__title">How We've Grown</h1>
            </div>
            <div className="about__timeline">
              <div className="about__timeline__milestone">
                <div className="milestone__year">2012</div>
                <div className="milestone__metrics">
                  <ul>
                    <li>
                      <p>
                        Woopra launches in San Francisco, where the company says
                        goodbye to channel-specific analytics and becomes
                        laser-focused on delivering the best real-time customer
                        analytics.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="about__timeline__milestone">
                <div className="milestone__year">2013</div>
                <div className="milestone__metrics">
                  <ul>
                    <li>
                      <p>
                        Woopra takes custom event tracking to the next level by
                        introducing Schema, a proprietary technology which
                        leverages a company’s custom events to create a bespoke
                        analytics experience – a first for the industry.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="about__timeline__milestone">
                <div className="milestone__year">2014</div>
                <div className="milestone__metrics">
                  <ul>
                    <li>
                      <p>
                        The next stage in Woopra’s evolution is here:
                        AppConnect. Companies can now centralize customer
                        activity data in Woopra by using AppConnect integrations
                        to sync with other tools. All this without a single line
                        of code.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="about__timeline__milestone">
                <div className="milestone__year">2015</div>
                <div className="milestone__metrics">
                  <ul>
                    <li>
                      <p>
                        Woopra adds two-dimensional Funnel Analytics to its
                        Customer Analytics offering, empowering users to
                        visualize and optimize every touchpoint in the customer
                        journey.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
