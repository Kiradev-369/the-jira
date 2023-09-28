import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function CyberbugsTemplate() {
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CyberbugsTemplate;
