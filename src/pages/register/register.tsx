import React from "react";
import css from "./register.module.scss";

function Register() {
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
            <form>
              <h1 className={css["form-heading"]}>Register</h1>
              <div className={css["inputbox"]}>
                <input type="text" />
                <span>Email</span>
              </div>
              <div className={css["inputbox"]}>
                <input type="password" />
                <span>Password</span>
              </div>
              <div className={css["inputbox"]}>
                <input type="text" />
                <span>Phone Number</span>
              </div>
              <div className={css["inputbox"]}>
                <input type="text" />
                <span>Name</span>
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
