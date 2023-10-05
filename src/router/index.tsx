import { lazy } from "react";
//* Setup router
import { createBrowserRouter } from "react-router-dom";
import BaseTemplate from "../templates/BaseTemplate/BaseTemplate";
import CreateProject from "../pages/CreateProject/CreateProject";

//* lazy(load)
const Home = lazy(() => import("../pages/home/home"));
const Login = lazy(() => import("../pages/login/login"));
const ProjectDetail = lazy(
  () => import("../pages/project-detail/project-detail"),
);
const Register = lazy(() => import("../pages/register/register"));

export const router = createBrowserRouter([
  {
    element: <BaseTemplate />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        index: true,
        path: "/project-management/:page",
        element: <Home />,
      },
      {
        path: "project-detail/:projectId",
        element: <ProjectDetail />,
      },
      {
        path: "/createproject",
        element: <CreateProject/>
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);
