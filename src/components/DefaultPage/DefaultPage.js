import Banner from "components/Banner/Banner";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultPage = () => {
  return (
    <div>
      <Banner />

      <Outlet />
    </div>
  );
};

export default DefaultPage;
