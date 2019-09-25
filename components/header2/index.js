import "./index.scss";
import Link from "next/link";

import React, { Component, Fragment } from "react";

class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: false
    };
  }
  handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    if (pageYOffset > 100) {
      this.setState({ scroll: true });
    } else {
      this.setState({ scroll: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <Fragment>
        <section className="header2">
          <div className="wrapper">
            <div className="header-box">
              <div className="nav-main">
                <div className="header-logo">
                  <Link href="/">
                    <a>
                      <img src="/static/logo.jpg" />
                    </a>
                  </Link>
                </div>
                <div
                  className={`header-main ${this.state.scroll ? "fixed" : ""}`}
                >
                  <ul className="main-menu">
                    <li className="nav__link">
                      <Link href="/">
                        <a className="nav__item">MODELS</a>
                      </Link>
                    </li>
                    <li className="nav__link">
                      <Link href="/">
                        <a className="nav__item">BRAND</a>
                      </Link>
                    </li>
                    <li className="nav__link">
                      <Link href="/">
                        <a className="nav__item">OWNERSHIP</a>
                      </Link>
                    </li>
                    <li className="nav__link">
                      <Link href="/">
                        <a className="nav__item">EXPERIENCE</a>
                      </Link>
                    </li>
                    <li className="nav__link">
                      <Link href="/">
                        <a className="nav__item">MOTOSPORT</a>
                      </Link>
                    </li>
                    <li className="nav__link">
                      <Link href="/">
                        <a className="nav__item">STORE</a>
                      </Link>
                    </li>
                  </ul>

                  <ul className="sub-menu">
                    <li className="nav__link">
                      <Link href="/">
                        <a className="nav__item">URUS</a>
                      </Link>
                    </li>
                    <li className="nav__link">
                      <Link href="/">
                        <a className="nav__item">HURACAN</a>
                      </Link>
                    </li>
                    <li className="nav__link">
                      <Link href="/">
                        <a className="nav__item">AVENTADOR</a>
                      </Link>
                    </li>
                    <li className="nav__link">
                      <Link href="/">
                        <a className="nav__item">FEW OFF</a>
                      </Link>
                    </li>
                    <li className="nav__link">
                      <Link href="/">
                        <a className="nav__item">CONCEPT</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="nav-sub">
                <i class="fa fa-cog"></i>
                <i class="fa fa-share-alt"></i>
                <i class="fa fa-search"></i>
                <i class="fa fa-language"></i>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Header2;
