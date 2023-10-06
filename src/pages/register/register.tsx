import React from "react";
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
const registerSchema = Y.object({
  email: Y.string().email().required("Email bat buoc phai nhap vao"),
  name: Y.string()
    .min(5, "Name phai lon hon 5 ki tu")
    .max(20, "Name phai nho hon 20 ki tu")
    .required("Bat buoc phai nhap vao name"),
  passWord: Y.string()
    .min(5, "Password phai lon hon 5 ki tu")
    .max(20, "Password phai nho hon 20 ki tu")
    .required("Bat buoc phai nhap vao password"),
  phoneNumber: Y.string().required("Bat buoc phai nhap vao phone number"),
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
      signUp(data)
        .then((resp) => {
          console.log(resp);
          alert("OK");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
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
                <button className={css["button-89"]}>Sign up</button>
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
