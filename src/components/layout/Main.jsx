import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/https://softtech.com.bd/ppc-management/">Link</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Main;
