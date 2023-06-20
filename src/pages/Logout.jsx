import React from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useApiContext } from "../context/ApiProvider";
import { useState } from "react";

const Logout = () => {
  const { AuthServices } = useApiContext();
  const [result, setResult] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let response = AuthServices.logout();
    console.log(response);
    setResult(response);
  }, [AuthServices]);

  useEffect(() => {
    if (result) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, [result, navigate]);

  return (
    <>
      <Navigate to={"/"} />
    </>
  );
};

export default Logout;
