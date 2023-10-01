import { lazy } from "react";
//* Setup router
import { createBrowserRouter } from "react-router-dom";
import BaseTemplate from "../templates/BaseTemplate/BaseTemplate";
import Register from "../pages/register/register";

//* lazy(load)
const Home = lazy(() => import("../pages/home/home"));
const Login = lazy(() => import("../pages/login/login"));

export const router = createBrowserRouter([
  {
    element: <BaseTemplate />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register/>
      }
    ],
  },
]);
