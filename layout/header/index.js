import "./index.scss";
import React, { Component, Fragment } from "react";

class WoopraHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScroll: false
    };
  }

  handleViewScroll = () => {
    const currentYOffset = window.pageYOffset;
    if (currentYOffset > 100) {
      this.setState({ isScroll: true });
    } else {
      this.setState({ isScroll: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleViewScroll);
  }
  render() {
    return (
      <Fragment>
        <header
          className={`woopra__header ${this.state.isScroll ? "scroll" : ""}`}
        >
          <div className="woopra__header__container">
            <label htmlFor="collapse" className="btn__collapse">
              <i className="fa fa-bars"></i>
            </label>
            <input
              type="checkbox"
              id="collapse"
              style={{ display: "none" }}
              className="inp__collapse"
            />
            <div className="woopra__nav__bg"></div>

            <a className="woopra__nav__brand__mobile">
              <img src="./static/img/logo-web.png" />
            </a>

            <ul className="woopra__nav__main">
              <li className="woopra__nav__brand">
                <img src="./static/img/logo-web.png" />
              </li>
              <a className="woopra__nav__btn__hiring" href="#">
                We're hiring
              </a>
              <li className="woopra__nav__primary">
                <ul className="woopra__nav__list">
                  <li className="woopra__nav__item">
                    <a href="#" className="woopra__nav__link hasDropdown">
                      platform
                      <ul className="woopra__submenu">
                        <li className="woopra__submenu__item">
                          <a href="#" className="woopra__submenu__link">
                            learn
                          </a>
                          <p className="woopra__submenu__link__content">
                            Seamless implementation with guides, APIs, SDKs and
                            docs.
                          </p>
                        </li>
                        <li className="woopra__submenu__item">
                          <a href="#" className="woopra__submenu__link">
                            company
                          </a>
                          <p className="woopra__submenu__link__content">
                            Seamless implementation with guides, APIs, SDKs and
                            docs.
                          </p>
                        </li>
                      </ul>
                      <div
                        className="woopra__submenu__mobile collapse"
                        id="collapse"
                      >
                        <ul className="woopra__submenu__mobile__main">
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              learn
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              company
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              working
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              wiilso
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              woopra
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className="woopra__nav__item">
                    <a href="#" className="woopra__nav__link">
                      customers
                    </a>
                  </li>
                  <li className="woopra__nav__item">
                    <a href="#" className="woopra__nav__link">
                      pricing
                    </a>
                  </li>
                  <li className="woopra__nav__item">
                    <a
                      href="#collapse2"
                      className="woopra__nav__link hasDropdown"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      resources
                      <ul className="woopra__submenu">
                        <li className="woopra__submenu__item">
                          <a href="#" className="woopra__submenu__link">
                            learn
                          </a>
                          <p className="woopra__submenu__link__content">
                            Seamless implementation with guides, APIs, SDKs and
                            docs.
                          </p>
                        </li>
                        <li className="woopra__submenu__item">
                          <a href="#" className="woopra__submenu__link">
                            company
                          </a>
                          <p className="woopra__submenu__link__content">
                            Seamless implementation with guides, APIs, SDKs and
                            docs.
                          </p>
                        </li>
                      </ul>
                      <div
                        className="woopra__submenu__mobile collapse"
                        id="collapse2"
                      >
                        <ul className="woopra__submenu__mobile__main">
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              learn
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              company
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              working
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              wiilso
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              woopra
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              woopra
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li className="woopra__nav__item">
                    <a href="#" className="woopra__nav__link hasDropdown">
                      company
                      <ul className="woopra__submenu">
                        <li className="woopra__submenu__item">
                          <a href="#" className="woopra__submenu__link">
                            learn
                          </a>
                          <p className="woopra__submenu__link__content">
                            Seamless implementation with guides, APIs, SDKs and
                            docs.
                          </p>
                        </li>
                        <li className="woopra__submenu__item">
                          <a href="#" className="woopra__submenu__link">
                            company
                          </a>
                          <p className="woopra__submenu__link__content">
                            Seamless implementation with guides, APIs, SDKs and
                            docs.
                          </p>
                        </li>
                      </ul>
                      <div
                        className="woopra__submenu__mobile collapse"
                        id="collapse"
                      >
                        <ul className="woopra__submenu__mobile__main">
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              learn
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              company
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              working
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              wiilso
                            </a>
                          </li>
                          <li className="woopra__submenu__mobile__item">
                            <a
                              href="#"
                              className="woopra__submenu__mobile__link"
                            >
                              woopra
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="woopra__nav__secondary">
                <a className="woopra__nav__btn__login" href="#">
                  log in
                </a>
                <a
                  className={`woopra__nav__btn__start ${
                    this.state.isScroll ? "changeColor" : ""
                  }`}
                  href="#"
                >
                  start for free
                </a>
              </li>
            </ul>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default WoopraHeader;
