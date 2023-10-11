import { axiosWithoutAuth, aixosWithAuth } from "./config.service";

export const projectCategory = async () => {
  try {
    const resp = await aixosWithAuth("/ProjectCategory");
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
