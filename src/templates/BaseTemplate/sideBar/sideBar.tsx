import React from "react";
import css from "./sideBar.module.scss";

function SideBar() {
  return (
    <>
      <div className={css.aside}>
        <a className={css["aside-link"]} href="#">
          <i className="fa-brands fa-jira"></i>
        </a>
        <a className={css["aside-link"]} href="#">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
        <a className={css["aside-link"]} href="#">
          <i className="fa-solid fa-handshake-angle"></i>
        </a>
      </div>
      <div className={css["sidebar"]}>
        <div className={css["sidebar-logo"]}>
          <i className="fa-solid fa-house-flood-water" />
          <div className={css["sidebar-top-name"]}>
            <p>singularity 1.0</p>
            <span>Software project</span>
          </div>
        </div>
        <div className={css.pages}>
          <a href="#" className={css["page"]}>
            <div className={css["page-title"]}>
              <i className="fa-solid fa-clipboard" />
              <p>Kanban Board</p>
            </div>
          </a>
          <a href="/createproject" className={css["page"]}>
            <div className={css["page-title"]}>
              <i className="fa-solid fa-gear"></i>
              <p>Create Project</p>
            </div>
          </a>
          <div className={css["dash"]}></div>
        </div>
        <a className={css["page"]}>
          <div className={css["page-title"]}>
            <i className="fa-solid fa-truck-fast" />
            <p>Releases</p>
          </div>
        </a>
        <a className={css["page"]}>
          <div className={css["page-title"]}>
            <i className="fa-solid fa-box-tissue" />
            <p>Issues and filters</p>
          </div>
        </a>
        <a className={css["page"]}>
          <div className={css["page-title"]}>
            <i className="fa-solid fa-file"></i>
            <p>Page</p>
          </div>
        </a>
        <a className={css["page"]}>
          <div className={css["page-title"]}>
            <i className="fa-solid fa-bug"></i>
            <p>Reports</p>
          </div>
        </a>
        <a className={css["page"]}>
          <div className={css["page-title"]}>
            <i className="fa-solid fa-box"></i>
            <p>Components</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default SideBar;
