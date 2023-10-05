import React, { useEffect } from "react";
import css from "./home.module.scss";
import { getAllProjects } from "../../services/project.service";
import { useAppSelector } from "../../redux/config-store";
import { useDispatch } from "react-redux";
import { setListProject } from "../../redux/slices/project.slice";
import { NavLink, useParams, useNavigate } from "react-router-dom";
type Tparams = {
  page: string;
};
function Home() {
  const listProject = useAppSelector((state) => {
    return state.projectReducer.listProject;
  });
  console.log(listProject);
  const dispatch = useDispatch();
  const param = useParams<Tparams>();
  const navigate = useNavigate();
  if (!param.page) {
    navigate("/project-management/1");
  }
  useEffect(() => {
    (async () => {
      const resp = await getAllProjects();
      console.log(resp);
      dispatch(setListProject(resp.content));
      console.log(listProject);
    })();
  }, [param.page]);
  const renderPage = () => {
    let listPage: any = [];
    let totalPage = Math.ceil(listProject.length / 10);
    if (totalPage <= 7) {
      for (let i = 1; i <= totalPage; i++) {
        listPage.push(i);
      }
    } else {
      if (param.page == "1" || param.page == "2" || param.page == "3") {
        listPage = [1, 2, 3, 4, 5, "...", totalPage];
      } else if (
        param.page == String(totalPage) ||
        param.page == String(totalPage - 1) ||
        param.page == String(totalPage - 2)
      ) {
        listPage = [
          1,
          "...",
          totalPage - 4,
          totalPage - 3,
          totalPage - 2,
          totalPage - 1,
          totalPage,
        ];
      } else if (param.page == "4") {
        listPage = [1, 2, 3, 4, 5, 6, "...", totalPage];
      } else if (param.page == String(totalPage - 3)) {
        listPage = [
          1,
          "...",
          totalPage - 5,
          totalPage - 4,
          totalPage - 3,
          totalPage - 2,
          totalPage - 1,
          totalPage,
        ];
      } else {
        listPage = [
          1,
          "...",
          Number(param.page) - 2,
          Number(param.page) - 1,
          param.page,
          Number(param.page) + 1,
          Number(param.page) + 2,
          "...",
          totalPage,
        ];
      }
    }

    return listPage.map((page: any, index: any) => {
      if (page == "...") {
        return (
          <li key={index} className="page-item">
            <a href="#" className="page-link">
              {" "}
              {page}
            </a>
          </li>
        );
      } else {
        return (
          <li key={index} className="page-item">
            <NavLink className="page-link" to={`/project-management/${page}`}>
              {page}
            </NavLink>
          </li>
        );
      }
    });
  };
  const renderProject = () => {
    console.log(listProject);
    let newListProject = listProject.slice(
      Number(param.page) * 10 - 10,
      Number(param.page) * 10,
    );
    console.log(newListProject);
    return newListProject.map((project: any, index) => {
      return (
        <tr key={index}>
          <th scope="row">{project.id}</th>
          <td>{project.projectName}</td>
          <td>{project.categoryName}</td>
          <td>
            <span className={css["creator"]}>{project.creator.name}</span>
          </td>
          <td>
            <div className={css["member"]}>
              {project.members.map((member: any, index: number) => {
                return <img key={index} src={member.avatar} />;
              })}
              <span>
                <i className="fa fa-plus"></i>
              </span>
            </div>
          </td>
          <td>
            <button className="btn btn-primary mr-3">
              <i className="fa fa-edit"></i>
            </button>
            <button className="btn btn-danger">
              <i className="fa fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="main">
      <h2 className="mb-5">Project management</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              id <i className="fa fa-caret-down"></i>
            </th>
            <th scope="col">
              projectName <i className="fa fa-caret-down"></i>
            </th>
            <th scope="col">
              category <i className="fa fa-caret-down"></i>
            </th>
            <th scope="col">creator</th>
            <th scope="col">members</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope="row">1</th>
            <td>Anh hung ban phim</td>
            <td>Du an phan mem</td>
            <td>
              <span className={css["creator"]}>Khai</span>
            </td>
            <td>
              <div className={css["member"]}>
                <img src="/src/assets/imgs/menber-1.jpg" />
                <img src="/src/assets/imgs/member-2.jpg" />
                <img src="/src/assets/imgs/member-3.jpg" />
                <span>
                  <i className="fa fa-plus"></i>
                </span>
              </div>
            </td>
            <td>
              <button className="btn btn-primary mr-3">
                <i className="fa fa-edit"></i>
              </button>
              <button className="btn btn-danger">
                <i className="fa fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>khoi nghiep</td>
            <td>Du an web</td>
            <td>
              <span className={css["creator"]}>Nguyen Van A</span>
            </td>
            <td>
              <div className={css["member"]}>
                <img src="/src/assets/imgs/menber-1.jpg" />
                <img src="/src/assets/imgs/member-3.jpg" />
                <span>
                  <i className="fa fa-plus"></i>
                </span>
              </div>
            </td>
            <td>
              <button className="btn btn-primary mr-3">
                <i className="fa fa-edit"></i>
              </button>
              <button className="btn btn-danger">
                <i className="fa fa-trash-alt"></i>
              </button>
            </td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>tsuami</td>
            <td>Du an di dong</td>
            <td>
              <span className={css["creator"]}>Chau Khai Phong</span>
            </td>
            <td>
              <div className={css["member"]}>
                <img src="/src/assets/imgs/menber-1.jpg" />
                <span>
                  <i className="fa fa-plus"></i>
                </span>
              </div>
            </td>
            <td>
              <button className="btn btn-primary mr-3">
                <i className="fa fa-edit"></i>
              </button>
              <button className="btn btn-danger">
                <i className="fa fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Anh hung ban phim</td>
            <td>Du an phan mem</td>
            <td>
              <span className={css["creator"]}>Khai</span>
            </td>
            <td>
              <div className={css["member"]}>
                <span>
                  <i className="fa fa-plus"></i>
                </span>
              </div>
            </td>
            <td>
              <button className="btn btn-primary mr-3">
                <i className="fa fa-edit"></i>
              </button>
              <button className="btn btn-danger">
                <i className="fa fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Anh hung ban phim</td>
            <td>Du an phan mem</td>
            <td>
              <span className={css["creator"]}>Khai</span>
            </td>
            <td>
              <div className={css["member"]}>
                <span>
                  <i className="fa fa-plus"></i>
                </span>
              </div>
            </td>
            <td>
              <button className="btn btn-primary mr-3">
                <i className="fa fa-edit"></i>
              </button>
              <button className="btn btn-danger">
                <i className="fa fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Anh hung ban phim</td>
            <td>Du an phan mem</td>
            <td>
              <span className={css["creator"]}>Khai</span>
            </td>
            <td>
              <div className={css["member"]}>
                <span>
                  <i className="fa fa-plus"></i>
                </span>
              </div>
            </td>
            <td>
              <button className="btn btn-primary mr-3">
                <i className="fa fa-edit"></i>
              </button>
              <button className="btn btn-danger">
                <i className="fa fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Anh hung ban phim</td>
            <td>Du an phan mem</td>
            <td>
              <span className={css["creator"]}>Khai</span>
            </td>
            <td>
              <div className={css["member"]}>
                <span>
                  <i className="fa fa-plus"></i>
                </span>
              </div>
            </td>
            <td>
              <button className="btn btn-primary mr-3">
                <i className="fa fa-edit"></i>
              </button>
              <button className="btn btn-danger">
                <i className="fa fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Anh hung ban phim</td>
            <td>Du an phan mem</td>
            <td>
              <span className={css["creator"]}>Khai</span>
            </td>
            <td>
              <div className={css["member"]}>
                <span>
                  <i className="fa fa-plus"></i>
                </span>
              </div>
            </td>
            <td>
              <button className="btn btn-primary mr-3">
                <i className="fa fa-edit"></i>
              </button>
              <button className="btn btn-danger">
                <i className="fa fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Anh hung ban phim</td>
            <td>Du an phan mem</td>
            <td>
              <span className={css["creator"]}>Khai</span>
            </td>
            <td>
              <div className={css["member"]}>
                <span>
                  <i className="fa fa-plus"></i>
                </span>
              </div>
            </td>
            <td>
              <button className="btn btn-primary mr-3">
                <i className="fa fa-edit"></i>
              </button>
              <button className="btn btn-danger">
                <i className="fa fa-trash-alt"></i>
              </button>
            </td>
          </tr> */}
          {renderProject()}
        </tbody>
      </table>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-end"
      >
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {renderPage()}
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
