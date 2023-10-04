import { axiosWithoutAuth, aixosWithAuth } from "./config.service";

export const getAllProjects = async () => {
  try {
    const resp = await aixosWithAuth("/Project/getAllProject");
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
