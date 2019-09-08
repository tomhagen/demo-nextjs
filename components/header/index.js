import React, { Component, Fragment } from "react";
import "./index.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowBg: false
    };
  }
  handleMenuScroll = () => {
    const currentPageYOffset = window.pageYOffset;
    if (currentPageYOffset > 100) {
      this.setState({
        isShowBg: true
      });
    } else {
      this.setState({
        isShowBg: false
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleMenuScroll);
  }
  render() {
    return (
      <Fragment>
        <header className={`header ${this.state.isShowBg ? "show": "hide"}`}>
          <div className="nav">
            <label htmlFor="collapse" className="btn__collapse">
              <i className="fa fa-bars"></i>
            </label>
            <input
              type="checkbox"
              id="collapse"
              style={{ display: "none" }}
              className="inp__collapse"
            />
            <div className="nav__bg"></div>
            <a className="nav__brand">
              <img src="./static/logo.png" />
            </a>
            <div className="nav__main">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Igredients
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Menu
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Reviews
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Reservations
                  </a>
                </li>
              </ul>

              <div className="nav__social">
                <a href="#" className="nav__twitter">
                  {" "}
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="nav__youtube">
                  {" "}
                  <i className="fa fa-youtube"></i>
                </a>
                <a href="#" className="nav__facebook">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
