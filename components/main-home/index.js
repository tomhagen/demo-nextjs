import React, { Component, Fragment } from "react";
import "./index.scss";
import Link from "next/link";
import Header from "../header";
import { connect } from "react-redux";
import Axios from "axios";
import { requestGetData } from "../../actions/data";

class MainHome extends Component {
//   componentDidMount() {
//     this.props.onGetData();
//   }
  render() {
    return (
      <Fragment>
        <section className="main-home">
          <Header />
          <div className="main-home-wrapper">
            <div className="wrapper__title wow fadeIn"  data-wow-delay="1.5s">
              the right ingredients for the right food
              <Link href="/lamborghini">
                <a>Lamborghini</a>
              </Link>
            </div>
            <div className="wrapper__icon">
              <img src="./static/bg-icon.png" />
            </div>
            <div className="wrapper__btn">
              <button type="button" className="btn btn-primary btn--black">
                BOOK A TABLE
              </button>
              <button type="button" className="btn btn-secondary btn--white">
                SEE THE MENU
              </button>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.news
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     onGetData: () => {
//       dispatch(requestGetData());
//     }
//   };
// };
export default connect(
  mapStateToProps,
  null
)(MainHome);
