import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isAdminLoggedIn");

  if (!isLoggedIn) {
    alert("You are not authorized");

    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;