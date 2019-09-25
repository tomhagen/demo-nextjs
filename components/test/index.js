import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { requestGetData, actGetData } from "../../actions/data";
import Axios from "axios";
import NextLink from "next/link";

class index extends Component {
  componentDidMount() {
    this.props.onGetData();
  }

  renderContent = () => {
    // console.log(this.props.data);

    return this.props.data.map((news, index) => {
      return (
        <p>
          <NextLink href={`/posts/[slug]`} as={`/posts/${news.slug}`}>
            <a>{news.title}</a>
          </NextLink>
        </p>
      );
    });
  };
  render() {
    console.log("render");
    return (
      <Fragment>
        <div className="test" style={{ fontSize: "2rem" }}>
          {this.renderContent()}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.news
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetData: () => {
      dispatch(requestGetData());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
