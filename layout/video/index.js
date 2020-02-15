import "./index.scss";
import React, { Component, Fragment } from "react";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowVideo: false
    };
  }

  handleShowVideo = () => {
    this.setState({
      isShowVideo: !this.state.isShowVideo
    });
  };

  render() {
    return (
      <Fragment>
        <div className="video" onClick={this.handleShowVideo}>
          <div
            className={`video__container ${
              this.state.isShowVideo ? "show" : ""
            }`}
            onClick={this.handleShowVideo}
          >
            <iframe
              className="iframe__video"
              src="https://www.youtube.com/embed/o0TZgKbUL7s"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Video;
