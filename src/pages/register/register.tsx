import React from "react";
import Swal from "sweetalert2";
import * as Y from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import css from "./register.module.scss";
import { signUp } from "../../services/user.service";
export type TParamsRegister = {
  email: string;
  passWord: string;
  name: string;
  phoneNumber: string;
};
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
const registerSchema = Y.object({
  email: Y.string().email("Email is not valid!").required("Email is required"),
  name: Y.string()
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  passWord: Y.string()
    .min(6, "Password must be greater than 6 characters")
    .max(20, "Password must be less than 20 characters")
    .required("Password is required"),
  phoneNumber: Y.string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number is not valid!"),
});
function Register(props: any) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      passWord: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: registerSchema,
    onSubmit: (value) => {
      console.log({ value });
      const data: TParamsRegister = {
        phoneNumber: value.phoneNumber,
        passWord: value.passWord,
        name: value.name,
        email: value.email,
      };
      console.log(data);
      signUp(data)
        .then((resp) => {
          console.log(resp);
          Swal.fire(
            "Good job!",
            "You have successfully registered!",
            "success",
          );
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Failure!",
            text: "Something went wrong!",
          });
        });
    },
  });

  return (
    <div>
      <div
        style={{
          height: "100vh",
        }}
      >
        <div className="row">
          <div className="col-6">
            <img
              className="img-fluid"
              src="https://picsum.photos/2000"
              alt="#"
            />
          </div>
          <div className="col-6 justify-content-center d-flex align-items-center">
            <form onSubmit={formik.handleSubmit}>
              <h1 className={css["form-heading"]}>Register</h1>
              <div className={css["inputbox"]}>
                <input
                  required
                  type="text"
                  {...formik.getFieldProps("email")}
                />
                <span>Email</span>
                {formik.touched.email && formik.errors.email && (
                  <p className={css["error"]}>{formik.errors.email}</p>
                )}
              </div>
              <div className={css["inputbox"]}>
                <input
                  required
                  type="password"
                  {...formik.getFieldProps("passWord")}
                />
                <span>Password</span>
                {formik.touched.passWord && formik.errors.passWord && (
                  <p className={css["error"]}>{formik.errors.passWord}</p>
                )}
              </div>
              <div className={css["inputbox"]}>
                <input
                  required
                  type="text"
                  {...formik.getFieldProps("phoneNumber")}
                />
                <span>Phone Number</span>
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <p className={css["error"]}>{formik.errors.phoneNumber}</p>
                )}
              </div>
              <div className={css["inputbox"]}>
                <input required type="text" {...formik.getFieldProps("name")} />
                <span>Name</span>
                {formik.touched.name && formik.errors.name && (
                  <p className={css["error"]}>{formik.errors.name}</p>
                )}
              </div>
              <div className={css["inputbox"]}>
                <button type="submit" className={css["button-89"]}>
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Register;
