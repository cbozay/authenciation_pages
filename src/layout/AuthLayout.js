import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthHook from "../config/AuthHook";

const AuthLayout = () => {
  const isLoggedIn = AuthHook();

  if (isLoggedIn === null) return <h1>Loading...</h1>;
  else if (isLoggedIn === true) return <Navigate replace to="/" />;

  return <Outlet />;
};

export default AuthLayout;
