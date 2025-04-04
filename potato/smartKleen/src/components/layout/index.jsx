import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";

const Layout = () => {
  return (
    <Suspense
      fallback={
        <div style={{width:"100%", height:"100vh" , display:"flex", alignItems:"center", justifyContent:"center" }}>
            <ProgressSpinner
              style={{ width: "50px", height: "50px" }}
              strokeWidth="8"
              animationDuration=".5s"
            />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};

export default Layout;
