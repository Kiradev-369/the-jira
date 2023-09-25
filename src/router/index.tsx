import { lazy } from "react";
//* Setup router
import { createBrowserRouter } from "react-router-dom";
import LoginTemplate from "../templates/LoginTemplate/userLogin";
//* lazy(load)
const Home = lazy(() => import("../pages/home/home"));
const Login = lazy(() => import("../pages/login/login"));

export const router = createBrowserRouter([
  {
    element: <LoginTemplate />,
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
    ],
  },
]);
