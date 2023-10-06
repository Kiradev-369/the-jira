import React, { useRef } from "react";
import css from "./CreateProject.module.scss";
import { Editor } from "@tinymce/tinymce-react";

function CreateProject() {
  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className={css["main"]}>
      <h3>Create Project</h3>
      <form className="content">
        <div className="form-group">
          <p>Name</p>
          <input className="form-control" name="projectName" />
        </div>
        <div className="form-group">
          <p>Description</p>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)} 
            initialValue="<p></p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
        <div className="form-group">
          <select style={{fontSize: 17}} name="categoryId" className="form-controlkd">
            <option value="">Software</option>
            <option value="">App</option>
            <option value="">Web</option>
          </select>
        </div>
        <button style={{fontSize: 17}} className="btn btn-info" type="submit">
          Create Project
        </button>
      </form>
    </div>
  );
}

export default CreateProject;
