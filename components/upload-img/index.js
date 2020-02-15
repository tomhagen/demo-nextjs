import "./index.scss";
import React, { Component, Fragment } from "react";

class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: ""
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log("handle uploading-", this.state.file);
  };

  handleImageChange = event => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };
  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <Fragment>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="file"
            class="fileInput"
            onChange={this.handleImageChange}
          />
          <button class="submitButton" type="submit">
            Upload Image
          </button>
        </form>
        <p style={{fontSize:'2rem'}}>{this.state.file.name}</p>
        <div class="imgPreview">{$imagePreview}</div>
      </Fragment>
    );
  }
}

export default UploadImage;
