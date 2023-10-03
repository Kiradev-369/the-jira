import React from "react";
import css from "./home.module.scss";

function ProjectDetail() {
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
          <tr>
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
          </tr>
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
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
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

export default ProjectDetail;
