import React from "react";
import css from "./home.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

function Home() {
  return (
    <div className={css["body"]}>
      <div className={css["aside"]}>
        <a href="#">
          <i className="fa-brands fa-jira"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-handshake-angle"></i>
        </a>
      </div>
      <div className={css["sidebar"]}>
        <div className={css["sidebar-top"]}>
          <i className="fa-solid fa-house-flood-water" />
          <div className={css["sidebar-top-text"]}>
            <p>singularity 1.0</p>
            <span>Software project</span>
          </div>
        </div>
        <a href="#" className={css["sidebar-kanban-board"]}>
          <i className="fa-solid fa-clipboard" />
          <p>Kanban Board</p>
        </a>
        <a href="#" className={css["sidebar-kanban-board"]}>
          <i className="fa-solid fa-gear"></i>
          <p>Project settings</p>
        </a>
        <div className={css["dash"]}></div>
        <div className={css["page"]}>
          <i className="fa-solid fa-truck-fast" />
          <p>Releases</p>
        </div>
        <div className={css["page"]}>
          <i className="fa-solid fa-box-tissue" />
          <p>Issues and filters</p>
        </div>
        <div className={css["page"]}>
          <i className="fa-solid fa-file"></i>
          <p>Page</p>
        </div>
        <div className={css["page"]}>
          <i className="fa-solid fa-bug"></i>
          <p>Reports</p>
        </div>
        <div className={css["page"]}>
          <i className="fa-solid fa-box"></i>
          <p>Components</p>
        </div>
      </div>
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
      <div className={css["content"]}>
        <div className={css["card"]}>
          <div className={css["card-header"]}>
          Backlog <span>5</span>
          <div className={css["card-main"]}></div>
          </div>
        </div>
        <div className={css["card"]}>
          <div className={css["card-header"]}>
          Selected for development  <span>2</span>
          <div className={css["card-main"]}></div>
          </div>
        </div>
        <div className={css["card"]}>
          <div className={css["card-header"]}>
          In progress  <span>1</span>
          <div className={css["card-main"]}></div>
          </div>
        </div>
        <div className={css["card"]}>
          <div className={css["card-header"]}>
          Done  <span>1</span>
          <div className={css["card-main"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
