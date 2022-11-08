import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthHook from "../config/AuthHook";

const ContentLayout = () => {
  const isLoggedIn = AuthHook();

  if (isLoggedIn === null) return <h1>Loading...</h1>;
  else if (isLoggedIn === false) return <Navigate to="/sign-in" />;

  return <Outlet />;
};

export default ContentLayout;
