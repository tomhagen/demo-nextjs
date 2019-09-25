import React, { Component, Fragment } from "react";
import Axios from "axios";
import Loading from "../../components/loading";
import moment from "moment";

class PostDetail extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const { data } = await Axios.get(
      `http://localhost:8000/api/posts/slug?slug=${slug}`
    );

    return {
      post: data
    };
  }
  //  static async getInitialProps({query}) {
  //   const slug = query.slug;
  //   await Axios({
  //     method: "GET",
  //     url: `http://localhost:8000/api/posts/slug?slug=${slug}`
  //   })
  //     .then(res => {
  //       this.setState({
  //         detailNews: res.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  render() {
    return (
      <Fragment>
        <div style={{ fontSize: "4rem" }}>
          ddd title: {this.props.post.title}
          date:{" "}
          {moment(this.props.post.createdOn).format("MMMM Do YYYY, h:mm:ss a")}
          createdAt: {this.props.post.createdAt}
        </div>
      </Fragment>
    );
  }
}

export default PostDetail;
