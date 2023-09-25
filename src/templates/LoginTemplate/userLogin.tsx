import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function LoginTemplate() {
  return (
    <div>
      <header>header</header> <br />
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
      <br />
      <footer>footer</footer>
    </div>
  );
}

export default LoginTemplate;
