import "./index.scss";

import React, { Component, Fragment } from "react";

class Search extends Component {
  render() {
    return (
      <Fragment>
        <div className="wrapper-btn">
          <div className="search-box" style={{ fontSize: "2rem" }}>
            <input
              className="search-txt"
              type="text"
              name=""
              placeholder="Type to search"
            />
            <a className="search-btn" href="#">
              <i class="fa fa-search"></i>
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Search;
