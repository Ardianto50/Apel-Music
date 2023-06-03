import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import EmailResetPassword from "../pages/EmailResetPassword";
import MenuCourse from "../pages/MenuCourse";
import DetailsCourse from "../pages/DetailsCourse";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<EmailResetPassword />} />
        <Route path="/course-menu/:categoryId" element={<MenuCourse />} />
        <Route path="/course-details/:courseId" element={<DetailsCourse />} />
      </Routes>
    </>
  );
};

export default AppRouter;
