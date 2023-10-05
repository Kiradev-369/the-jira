// import React from "react";
import css from "./login.module.scss";
import { Layout, Button, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { withFormik } from "formik";

const { Sider, Content } = Layout;
// interface LoginProps {
//   values: any;
//   touched: any;
//   errors: any;
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
//   handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
// }
// function Login(props: LoginProps) {
//   const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
//     props;
//   return (
//     <Layout>
//       <Sider
//         width={window.innerWidth / 2}
//         style={{
//           height: window.innerHeight,
//           backgroundImage: "url(https://picsum.photos/2000)",
//           backgroundSize: "100%",
//         }}
//       ></Sider>
//       <Content>
//         <form
//           onSubmit={handleSubmit}
//           className="container"
//           style={{ height: window.innerHeight }}
//         >
//           <div
//             className="d-flex flex-column justify-content-center align-items-center"
//             style={{ height: window.innerHeight }}
//           >
//             <h3 className="text-center">Login</h3>
//             <div className="d-flex mt-3">
//               <Input
//                 onChange={handleChange}
//                 style={{ width: "100%", minWidth: 300 }}
//                 name="email"
//                 size="large"
//                 placeholder="email"
//                 prefix={<UserOutlined />}
//               />
//             </div>
//             <div className="text-danger">{errors.email}</div>
//             <div className="d-flex mt-3">
//               <Input
//                 onChange={handleChange}
//                 style={{ width: "100%", minWidth: 300 }}
//                 type="password"
//                 name="password"
//                 size="large"
//                 placeholder="password"
//                 prefix={<LockOutlined />}
//               />
//             </div>
//             <div className="text-danger">{errors.password}</div>
//             <Button
//               htmlType="submit"
//               size="large"
//               style={{
//                 width: 300,
//                 backgroundColor: "rgb(102,107,223)",
//                 color: "#fff",
//               }}
//               className="mt-5"
//             >
//               Login
//             </Button>
//             <div className="social mt-3 d-flex">
//               <Button
//                 className="mr-3"
//                 style={{ backgroundColor: "rgb(59,89,152)" }}
//                 type="primary"
//                 shape="circle"
//                 icon={<FacebookOutlined />}
//                 size={"large"}
//               />
//               <Button
//                 type="primary"
//                 shape="circle"
//                 icon={<TwitterOutlined />}
//                 size={"large"}
//               />
//             </div>
//           </div>
//         </form>
//       </Content>
//     </Layout>
//   );
// }
// const mapFormikToProps = withFormik({
//   mapPropsToValues: () => ({
//     email: "",
//     password: "",
//   }),
//   validationSchema: Yup.object().shape({
//     email: Yup.string()
//       .required("Email is required!")
//       .email("Email is invalid!"),
//     password: Yup.string()
//       .min(6, "Password must have at least 6 characters")
//       .max(32, "Password must have at most 32 characters"),
//   }),
//   handleSubmit: (values, { props }) => {
//     const action = {
//       type: USER_SIGNIN_API,
//       userLogin: {
//         email: values.email,
//         password: values.password,
//       },
//     };
//     props.dispatch(action);
//     console.log(values);
//     console.log("props", props);
//   },
//   displayName: "Login",
// })(Login);

// export default connect()(mapFormikToProps);

import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
  mergeClassName,
  saveLocalStorage,
  getLocalStorage,
  deleteKey,
} from "../../utils/index.js";
import { ACCESS_TOKEN, REQUEST_CARTS } from "../../const";
import { useNavigate } from "react-router-dom";
import "./login.module.scss";
import { NavLink } from "react-router-dom";
// import FacebookLogin from "../../components/FacebookLogin/FacebookLogin";
const schemaLogin = Yup.object({
  email: Yup.string().email().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters")
    .max(10, "Must be 10 characters or less"),
});

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: schemaLogin,

    onSubmit: async (values) => {
      try {
        console.log({ values });
        // call api login
        const resp = await axios.post(
          "https://jiranew.cybersoft.edu.vn/api/Users/signin",
          {
            password: values.password,
            email: values.email,
          },
        );
        console.log({ resp });

        // lưu vào storage
        saveLocalStorage(ACCESS_TOKEN, resp.data.content.accessToken);
        navigate("/profile");

        // public: ai cũng có thể gọi được hết.

        // private: cần phải xác định được danh tính bạn là ai thì mới được phép gọi những api đó.

        // tạo thẻ từ: chứa tất cả thông tin của các bạn.

        // accessToken: dựa vào đây để xem thử bạn có được phép gọi những api đó hay không.
        // redux. mỗi lần reload page => mất.
        // localStrogate. => không bị mất mỗi lần reload page.
      } catch (err) {
        console.log(err);
        setErrorMessage(
          "Registration failed. Email is already in use. Please use another email!!",
        );
      }
    },
  });

  return (
    <Layout>
      <Sider
        width={window.innerWidth / 2}
        style={{
          height: window.innerHeight,
          backgroundImage: "url(https://picsum.photos/2000)",
          backgroundSize: "100%",
        }}
      ></Sider>
      <Content>
        <form
          className="login-input container"
          style={{ height: window.innerHeight }}
          onSubmit={formik.handleSubmit}
        >
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: window.innerHeight }}
          >
            <h2 className="text-center">Login</h2>
            <div style={{ marginBottom: 10 }} className={css["d-flex"]}>
              <input
                style={{ width: "100%", minWidth: 300 }}
                className="w-25"
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* {...formik.getFieldProps("email")} */}
              {formik.errors.email && formik.touched.email && (
                <p>{formik.errors.email}</p>
              )}
            </div>
            <div className={css["d-flex"]}>
              <input
                style={{ width: "100%", minWidth: 300 }}
                className="w-25"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />{" "}
              <br />
              {/* {...formik.getFieldProps("password")} */}
              {formik.errors.password && formik.touched.password && (
                <p>{formik.errors.password}</p>
              )}
            </div>
            <div className={css["d-flex"]}>
              <button
                style={{
                  width: 300,
                  backgroundColor: "rgb(102,107,223)",
                  color: "#fff",
                  marginBottom: 5,
                }}
                className="btn btn-success btn-login"
                type="submit"
              >
                Login
              </button>
              <NavLink
                style={{ display: "flex", justifyContent: "end" }}
                className={"login-navlink"}
                to="/register"
              >
                Register now ?
              </NavLink>
            </div>
            {/* <FacebookLogin /> */}
            {errorMessage && (
              <p className="text-danger login-error d-block">{errorMessage}</p>
            )}
          </div>
        </form>
      </Content>
    </Layout>
  );
}

export default Login;
