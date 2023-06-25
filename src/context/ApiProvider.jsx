import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const baseUrl = process.env.REACT_APP_BACKEND_API_URL + "api/";

  const [globalDialog, setGlobalDialog] = useState(false);
  const [globalDialogMsg, setGlobalDialogMsg] = useState("");

  const GlobalDialogUtil = {
    globalDialog,
    setGlobalDialog,
    globalDialogMsg,
  };

  const navigate = useNavigate();

  const URLs = {
    BASE_URL: baseUrl,
    IMG_URL: baseUrl + "Image/",
    AUTH_URL: baseUrl + "Auth/",
  };
  // ================ UTILITY===============
  const getAuthorization = () => {
    let token = "Bearer " + localStorage.getItem("jwt_token");
    return {
      Authorization: token,
    };
  };

  // ================ AUTH SERVICE =======================

  const checkSession = async () => {
    console.log("checkSession");
    if (localStorage.getItem("jwt_token")) {
      axios.defaults.headers.common = getAuthorization();
      axios.get(URLs.AUTH_URL + "CheckSession").catch((err) => {
        setGlobalDialog(true);
        setGlobalDialogMsg("Session anda telah berakhir");
        navigate("/logout");
      });
    }
  };

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
    if (isLoggedIn()) {
      return localStorage.getItem("user_role").toLowerCase() === "admin";
    }
    return false;
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
    checkSession,
  };

  // ================= APP SERVICE =======================

  const getMyClass = async (params) => {
    let PageSize = params?.PageSize || 5;
    let CurrentPage = params?.CurrentPage || 1;
    let Direction = params?.Direction || "ASC";
    let SortBy = params?.SortBy || "";
    let Keyword = params?.Keyword || "";
    const finalParam = {
      PageSize,
      CurrentPage,
      Direction,
      SortBy,
      Keyword,
    };
    axios.defaults.headers.common = getAuthorization();
    return await axios.get(URLs.BASE_URL + "Purchase/PurchasedCourse", {
      params: finalParam,
    });
  };

  const getInvoiceDetail = async (invoiceId) => {
    axios.defaults.headers.common = getAuthorization();
    return await axios.get(
      URLs.BASE_URL + "Purchase/Invoice/Detail/" + invoiceId
    );
  };

  const getUserInvoices = async (params) => {
    let PageSize = params?.PageSize || 5;
    let CurrentPage = params?.CurrentPage || 1;
    let Direction = params?.Direction || "DESC";
    let SortBy = params?.SortBy || "invoice_number";
    let Keyword = params?.Keyword || "";
    const finalParam = {
      PageSize,
      CurrentPage,
      Direction,
      SortBy,
      Keyword,
    };

    axios.defaults.headers.common = getAuthorization();

    return await axios.get(URLs.BASE_URL + "Purchase/Invoice/User", {
      params: finalParam,
    });
  };

  const directPurchase = async (params) => {
    axios.defaults.headers.common = getAuthorization();
    const payloads = {};
    if (params?.courseId) payloads["courseId"] = params?.courseId;

    if (params?.courseSchedule)
      payloads["courseSchedule"] = params?.courseSchedule;
    else payloads["courseSchedule"] = null;

    if (params?.paymentId) payloads["paymentMethodId"] = params?.paymentId;

    return await axios.post(URLs.BASE_URL + "Purchase/Direct", payloads);
  };

  const checkout = async (paymentMethodId, purchaseDate, shoppingCartIds) => {
    axios.defaults.headers.common = getAuthorization();
    return await axios.post(URLs.BASE_URL + "Purchase", {
      paymentMethodId,
      purchaseDate,
      shoppingCartIds,
    });
  };

  const getPaymentMethods = async () => {
    axios.defaults.headers.common = getAuthorization();
    return await axios.get(URLs.BASE_URL + "Payment/ForUser");
  };

  const addToCart = async (courseId, courseSchedule) => {
    axios.defaults.headers.common = getAuthorization();
    return await axios.post(URLs.BASE_URL + "ShoppingCart", {
      courseId,
      courseSchedule,
    });
  };

  const deleteCart = async (cartIds) => {
    axios.defaults.headers.common = getAuthorization();
    let obj = {
      Ids: cartIds,
    };
    return await axios.post(URLs.BASE_URL + "ShoppingCart/DeleteCart", obj);
  };

  const getCarts = async () => {
    axios.defaults.headers.common = getAuthorization();
    return await axios.get(URLs.BASE_URL + "ShoppingCart");
  };

  const getCategoryDetail = async (id) => {
    axios.defaults.headers.common = getAuthorization();
    return await axios.get(URLs.BASE_URL + "Category/FindById/" + id);
  };

  const getCourseByCategory = async (id) => {
    axios.defaults.headers.common = getAuthorization();
    return await axios.get(URLs.BASE_URL + "Course/GroupByCategory/" + id);
  };

  const getCourseDetail = async (id) => {
    axios.defaults.headers.common = getAuthorization();
    return await axios.get(URLs.BASE_URL + "Course/" + id);
  };

  const getSimiliarCourses = async (params, id, categoryId) => {
    let PageSize = params?.PageSize || 5;
    let CurrentPage = params?.CurrentPage || 1;
    let Direction = params?.Direction || "ASC";
    let SortBy = params?.SortBy || "";
    let Keyword = params?.Keyword || "";
    const finalParam = {
      PageSize,
      CurrentPage,
      Direction,
      SortBy,
      Keyword,
      exceptedCourseId: id,
    };

    axios.defaults.headers.common = getAuthorization();

    return await axios.get(
      URLs.BASE_URL + "Course/GroupByCategory/" + categoryId,
      {
        params: finalParam,
      }
    );
  };

  const getAllCategories = async () => {
    const response = await axios.get(URLs.BASE_URL + "Category/GetAll");
    try {
      return response;
    } catch (err) {
      return err.response;
    }
  };
  axios.defaults.headers.common = getAuthorization();
  const getAllCourses = async (params) => {
    let PageSize = params?.PageSize || 5;
    let CurrentPage = params?.CurrentPage || 1;
    let Direction = params?.Direction || "ASC";
    let SortBy = params?.SortBy || "";
    let Keyword = params?.Keyword || "";
    const finalParam = {
      PageSize,
      CurrentPage,
      Direction,
      SortBy,
      Keyword,
    };
    // console.log(axios.defaults.headers.common["Authorization"]);
    const response = await axios.get(URLs.BASE_URL + "Course", {
      params: finalParam,
    });
    try {
      return response;
    } catch (err) {
      return err.response;
    }
  };

  const AppServices = {
    getAllCourses,
    getAllCategories,
    getCategoryDetail,
    getCourseByCategory,
    getCourseDetail,
    getSimiliarCourses,
    addToCart,
    deleteCart,
    getCarts,
    checkout,
    directPurchase,
    getUserInvoices,
    getInvoiceDetail,
    getPaymentMethods,
    getMyClass,
  };

  // ========================== ADMIN SERVICES =========================

  const editPayment = async (paymentId, params) => {
    axios.defaults.headers.common = getAuthorization();

    const payload = new FormData();
    if (params?.name) payload.append("Name", params?.name);
    if (params?.image) payload.append("Image", params?.image);
    if (params?.inactive) payload.append("Inactive", params?.inactive);
    return await axios.put(URLs.BASE_URL + "Payment/" + paymentId, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const getPaymentDetail = async (paymentId) => {
    axios.defaults.headers.common = getAuthorization();
    return await axios.get(URLs.BASE_URL + "Payment/" + paymentId);
  };

  const getPaymentsAdmin = async () => {
    axios.defaults.headers.common = getAuthorization();
    return await axios.get(URLs.BASE_URL + "Payment/ForAdmin");
  };

  const addPayment = async (params) => {
    axios.defaults.headers.common = getAuthorization();

    const payload = new FormData();
    if (params?.name) payload.append("Name", params?.name);
    if (params?.image) payload.append("Image", params?.image);
    return await axios.post(URLs.BASE_URL + "Payment", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const getAdminInvoices = async (params) => {
    let PageSize = params?.PageSize || 5;
    let CurrentPage = params?.CurrentPage || 1;
    let Direction = params?.Direction || "DESC";
    let SortBy = params?.SortBy || "invoice_number";
    let Keyword = params?.Keyword || "";
    const finalParam = {
      PageSize,
      CurrentPage,
      Direction,
      SortBy,
      Keyword,
    };

    axios.defaults.headers.common = getAuthorization();

    return await axios.get(URLs.BASE_URL + "Purchase/Invoice/Admin", {
      params: finalParam,
    });
  };

  const editUserPassword = async (userId, params) => {
    axios.defaults.headers.common = getAuthorization();
    const payload = {};
    payload["password"] = params?.password;
    payload["confirmPassword"] = params?.confirmPassword;
    return await axios.put(
      URLs.AUTH_URL + "Admin/EditPassword/" + userId,
      payload
    );
  };

  const editUser = async (userId, params) => {
    axios.defaults.headers.common = getAuthorization();
    const payload = {};
    payload["fullName"] = params?.fullName;
    payload["inactive"] = params?.inactive;
    return await axios.put(URLs.AUTH_URL + "Admin/EditUser/" + userId, payload);
  };

  const getUserDetail = async (userId) => {
    axios.defaults.headers.common = getAuthorization();
    return await axios.get(URLs.AUTH_URL + "Admin/GetUser/" + userId);
  };

  const addUser = async (fullName, email, password, confirmPassword) => {
    const payload = {
      fullName,
      email,
      password,
      confirmPassword,
    };

    axios.defaults.headers.common = getAuthorization();
    return await axios.post(URLs.AUTH_URL + "Admin/AddUser", payload);
  };

  const getUsers = async (params) => {
    let PageSize = params?.PageSize || 5;
    let CurrentPage = params?.CurrentPage || 1;
    let Direction = params?.Direction;
    let SortBy = params?.SortBy || "";
    let Keyword = params?.Keyword || "";
    const finalParam = {
      PageSize,
      CurrentPage,
    };

    if (Direction) finalParam["Direction"] = Direction;
    if (SortBy) finalParam["SortBy"] = SortBy;
    if (Keyword) finalParam["Keyword"] = Keyword;

    axios.defaults.headers.common = getAuthorization();
    return await axios.get(URLs.AUTH_URL + "Admin", {
      params: finalParam,
    });
  };

  const AdminServices = {
    getUsers,
    addUser,
    getUserDetail,
    editUser,
    editUserPassword,
    getAdminInvoices,
    addPayment,
    getPaymentsAdmin,
    getPaymentDetail,
    editPayment,
  };

  return (
    <ApiContext.Provider
      value={{
        URLs,
        AuthServices,
        AppServices,
        AdminServices,
        GlobalDialogUtil,
        editUserPassword,
      }}
    >
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
