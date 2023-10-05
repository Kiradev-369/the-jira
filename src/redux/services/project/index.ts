import axios from "axios";

const DOMAIN_PROJECT = "https://jiranew.cybersoft.edu.vn/api/ProjectCategory";
export const projectService = {
  getAllProjectCategory: () => {
    return axios({
      url: `${DOMAIN_PROJECT}/api/ProjectCategory`,
      method: "GET",
    });
  },
};
