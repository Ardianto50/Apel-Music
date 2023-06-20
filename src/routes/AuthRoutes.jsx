import React from "react";
import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useApiContext } from "../context/ApiProvider";

// NOTE: Untuk proteksi route yang mengarah ke halaman login dan registrasi
const AuthRoutes = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("jwt_token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Routes>{children}</Routes>
    </>
  );
};

export default AuthRoutes;
