import { Try } from "@mui/icons-material";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const baseUrl = process.env.REACT_APP_BACKEND_API_URL;

  const URLs = {
    BASE_URL: baseUrl,
    IMG_URL: baseUrl + "api/Image/",
    AUTH_URL: baseUrl + "api/Auth/",
  };

  // ================ AUTH SERVICE =======================

  const resetPassword = async (token, password, confirmPassword) => {
    const resetPayload = {
      password,
      confirmPassword,
    };

    const response = await axios.post(
      URLs.AUTH_URL + "ResetPassword/" + token,
      resetPayload
    );

    try {
      return response;
    } catch (err) {
      return err.response;
    }
  };

  const requestResetPassword = async (email) => {
    const resetPayload = {
      email,
    };

    const response = await axios.post(
      URLs.AUTH_URL + "RequestResetPassword",
      resetPayload
    );
    try {
      return response;
    } catch (err) {
      return err.response;
    }
  };

  const register = async (fullName, email, password, confirmPassword) => {
    const regisPayload = {
      fullName,
      email,
      password,
      confirmPassword,
    };

    const response = await axios.post(
      URLs.AUTH_URL + "Registration",
      regisPayload
    );
    try {
      // console.log(response, "response");
      return response;
    } catch (err) {
      return err.response;
    }
  };

  // START: Login function
  const login = async (email, password) => {
    const loginPayload = {
      email,
      password,
    };

    const response = await axios.post(URLs.AUTH_URL + "Login", loginPayload);
    try {
      // console.log(response, "response");
      if (response.status === 200) {
        const result = response.data;
        // Set local storage
        localStorage.setItem("jwt_token", result.jwtToken);
        localStorage.setItem("user_id", result.id);
        localStorage.setItem("user_name", result.name);
        localStorage.setItem("user_email", result.email);
        localStorage.setItem("user_role", result.role);
        // set header axios
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${result.jwtToken}`;
      }
      return response;
    } catch (err) {
      return err;
    }
  };
  // END: Login function

  //START: Logout
  const logout = () => {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_role");
    delete axios.defaults.headers.common["Authorization"];
    return true;
  };
  //END: Logout

  //START: Check Is Login function
  const isLoggedIn = () => {
    let jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      return true;
    }
    return false;
  };
  //END: Check is role Login function

  // START: Check is Admin/User function
  const isRoleAdmin = () => {
    return localStorage.getItem("user_role").toLowerCase() === "admin";
  };

  const isRoleUser = () => {
    return localStorage.getItem("user_role").toLowerCase() === "user";
  };
  // END: Check is role Admin/User function

  const AuthServices = {
    login,
    logout,
    isLoggedIn,
    isRoleAdmin,
    isRoleUser,
    register,
    requestResetPassword,
    resetPassword,
  };

  // ================ APP SERVICE =======================
  const getAllCourse = () => {
    
  }

  return (
    <ApiContext.Provider value={{ URLs, AuthServices }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;

export const useApiContext = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error("useApiContext must be used within the ApiProvider");
  }

  return context;
};
