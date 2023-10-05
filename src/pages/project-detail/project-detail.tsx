import React from "react";
import css from "./project-detail.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

function ProjectDetail() {
  return (
    <div className="main">
      <div className="content">
        <div className={css["title-top"]}>
          Projects <span>/</span> singularity 1.0 <span>/</span>Kanban Board
        </div>
        <h2 className="title-bottom">Kanban board</h2>
        <div className={css["board-filters"]}>
          <div className={css["search"]}>
            <Button icon={<SearchOutlined />}>Search</Button>
          </div>
          <div className={css["member"]}>
            <img src="/src/assets/imgs/menber-1.jpg" />
            <img src="/src/assets/imgs/member-2.jpg" />
            <img src="/src/assets/imgs/member-3.jpg" />
          </div>
          <button>Only My Issues</button>
          <button>Recently Updated</button>
        </div>
        <div className={css["progress"]}>
          <div className={css["progress-card"]}>
            <div className={css["card-header"]}>
              Backlog <span>5</span>
              <div className={css["card-main"]}></div>
            </div>
          </div>
          <div className={css["progress-card"]}>
            <div className={css["card-header"]}>
              Selected for development <span>2</span>
              <div className={css["card-main"]}></div>
            </div>
          </div>
          <div className={css["progress-card"]}>
            <div className={css["card-header"]}>
              In progress <span>1</span>
              <div className={css["card-main"]}></div>
            </div>
          </div>
          <div className={css["progress-card"]}>
            <div className={css["card-header"]}>
              Done <span>1</span>
              <div className={css["card-main"]}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
