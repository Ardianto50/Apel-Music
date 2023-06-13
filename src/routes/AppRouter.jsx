import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { EmailResetPassword } from "../pages/EmailResetPassword";
import MenuCourse from "../pages/MenuCourse";
import DetailsCourse from "../pages/DetailsCourse";
import MenuInvoices from "../pages/MenuInvoices";
import DetailsInvoice from "../pages/DetailsInvoice";
import { MyClass } from "../pages/MyClass";
import { Checkout } from "../pages/Checkout";
import { SuccesPurchase } from "../pages/SuccesPurchase";
import { NewPassResetPassword } from "../pages/NewPassResetPassword";
import { EmailConfirm } from "../pages/EmailConfirm";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<EmailResetPassword />} />
        <Route path="/new-password" element={<NewPassResetPassword />} />
        <Route path="/course-menu/:categoryId" element={<MenuCourse />} />
        <Route path="/course-details/:courseId" element={<DetailsCourse />} />
        <Route path="/my-class" element={<MyClass />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success-purchase" element={<SuccesPurchase />} />
        <Route path="/email-confirmed" element={<EmailConfirm />} />
        <Route path="/invoice" element={<MenuInvoices />} />
        <Route path="/invoice/rincian-invoice" element={<DetailsInvoice />} />
      </Routes>
    </>
  );
};

export default AppRouter;
