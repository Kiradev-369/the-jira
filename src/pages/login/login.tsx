import React from "react";
// import css from "./login.module.scss";
import { Layout, Button, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { USER_SIGNIN_API } from "../../const/cyberbugs/cyberbugs";


const { Sider, Content } = Layout;
interface LoginProps {
  values: any;
  touched: any;
  errors: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
function Login(props: LoginProps) {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
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
          onSubmit={handleSubmit}
          className="container"
          style={{ height: window.innerHeight }}
        >
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: window.innerHeight }}
          >
            <h3 className="text-center">Login</h3>
            <div className="d-flex mt-3">
              <Input
                onChange={handleChange}
                style={{ width: "100%", minWidth: 300 }}
                name="email"
                size="large"
                placeholder="email"
                prefix={<UserOutlined />}
              />
            </div>
            <div className="text-danger">{errors.email}</div>
            <div className="d-flex mt-3">
              <Input
                onChange={handleChange}
                style={{ width: "100%", minWidth: 300 }}
                type="password"
                name="password"
                size="large"
                placeholder="password"
                prefix={<LockOutlined />}
              />
            </div>
            <div className="text-danger">{errors.password}</div>
            <Button
              htmlType="submit"
              size="large"
              style={{
                width: 300,
                backgroundColor: "rgb(102,107,223)",
                color: "#fff",
              }}
              className="mt-5"
            >
              Login
            </Button>
            <div className="social mt-3 d-flex">
              <Button
                className="mr-3"
                style={{ backgroundColor: "rgb(59,89,152)" }}
                type="primary"
                shape="circle"
                icon={<FacebookOutlined />}
                size={"large"}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<TwitterOutlined />}
                size={"large"}
              />
            </div>
          </div>
        </form>
      </Content>
    </Layout>
  );
}
const mapFormikToProps = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid!"),
    password: Yup.string()
      .min(6, "Password must have at least 6 characters")
      .max(32, "Password must have at most 32 characters"),
  }),
  handleSubmit: (values, { props }) => {
    // const action = {
    //   type: USER_SIGNIN_API,
    //   userLogin: {
    //     email: values.email,
    //     password: values.password,
    //   },
    // };
    // props.dispatch(action);
    console.log(values);
    console.log("props",props);
  },
  displayName: "Login",
})(Login);


export default connect()(mapFormikToProps);
