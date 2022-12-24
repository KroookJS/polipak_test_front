import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";

const MainLayout: React.FC = () => {
  return (
    <div className="App">
      <div className="navLink">
        <NavBar />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
