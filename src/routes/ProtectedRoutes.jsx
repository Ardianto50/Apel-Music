import React from "react";
import { useEffect } from "react";
import { Navigate, Routes, useNavigate } from "react-router-dom";
import { useApiContext } from "../context/ApiProvider";

const ProtectedRoutes = ({ children }) => {
  const { AuthServices } = useApiContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!AuthServices.isLoggedIn()) {
      navigate("/login");
    }
  }, [navigate, AuthServices]);

  return (
    <>
      <Routes>{children}</Routes>
    </>
  );
};

export default ProtectedRoutes;
