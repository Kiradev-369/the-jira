import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sideBar/sideBar";

function BaseTemplate() {
  return (
    <div>
      <SideBar />
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default BaseTemplate;
