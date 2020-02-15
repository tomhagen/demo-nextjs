import React, { Component, Fragment } from "react";
import { Editor } from "@tinymce/tinymce-react";
import UploadImage from "../upload-img";
// import CKEditor from "ckeditor4-react";

class Form extends Component {
  handleEditorChange = e => {
    console.log("Content was updated:", e.target.getContent());
  };

  render() {
    return (
      <Fragment>
        <form
          style={{
            fontSize: "5rem",
            width: "60%",
            margin: "auto",
            paddingTop: "10%",
            paddingBottom: "10%"
          }}
        >
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          {/* <CKEditor
            data="<p>Hello from CKEditor 4!</p>"
        /> */}
          <Editor
            apiKey="2401yg30kqflbmjler8dg6nm3m9a025nwj1co8a65p5qjtqd"
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
              plugins: "link image code table",

              toolbar:
                "undo redo | bold italic | alignleft aligncenter alignright | code | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol link image",
              images_upload_url: 'upload.php'
            }}
            onChange={this.handleEditorChange}
          />
          {/* <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div> */}

          {/* <CKEditor data="<p>This is an example CKEditor 4 instance.</p>" /> */}
         
        </form>
        <UploadImage/>
      </Fragment>
    );
  }
}

export default Form;
