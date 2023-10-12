import React, { useRef, useEffect, useState } from "react";
import css from "./CreateProject.module.scss";
import { Editor } from "@tinymce/tinymce-react";
import { useSelector, useDispatch } from "react-redux";
import { projectCategory } from "../../services/projectCaregory.service";
import { setCategoryProject } from "../../redux/slices/ProjectCategory.slice";
import Swal from "sweetalert2";

function CreateProject() {
  const editorRef = useRef<any>(null);
  const [projectData, setProjectData] = useState({
    projectName: "",
    description: "",
    categoryId: "",
  });

  const arrProjectCategory = useSelector(
    (state: any) => state.projectCategoryReducer.projectCategory,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const resp = await projectCategory();
      dispatch(setCategoryProject(resp.content));
    })();
  }, []);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Gửi dữ liệu dự án lên máy chủ để tạo dự án mới
    try {
      const response = await fetch(
        "https://jiranew.cybersoft.edu.vn/api/Project/createProject",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectData),
        },
      );

      if (response.ok) {
        const data = await response.json();
        // Xử lý phản hồi từ máy chủ (có thể hiển thị thông báo hoặc điều hướng đến trang khác)
        Swal.fire(
          "Good job!",
          "You created the project successfully!",
          "success",
        );
      } else {
        console.log(response);
        console.error("Lỗi khi tạo dự án");
        Swal.fire({
          icon: "error",
          title: "Failure!",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
      Swal.fire({
        icon: "error",
        title: "Failure!",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className={css["main"]}>
      <h3>Create Project</h3>
      <form className="content" onSubmit={handleSubmit}>
        <div className="form-group">
          <p>Name</p>
          <input
            className="form-control"
            name="projectName"
            value={projectData.projectName}
            onChange={handleInputChange}
          />
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
          <select
            style={{ fontSize: 17 }}
            name="categoryId"
            className="form-control"
            value={projectData.categoryId}
            onChange={handleInputChange}
          >
            {arrProjectCategory.map((category: any) => {
              console.log(category);
              return (
                <option key={category.id} value={category.id}>
                  {category.projectCategoryName}
                </option>
              );
            })}
          </select>
        </div>
        <button style={{ fontSize: 17 }} className="btn btn-info" type="submit">
          Create Project
        </button>
      </form>
    </div>
  );
}

export default CreateProject;
