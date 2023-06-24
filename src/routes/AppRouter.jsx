import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import AuthRoutes from "./AuthRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Logout from "../pages/Logout";
import { useEffect } from "react";
import { useApiContext } from "../context/ApiProvider";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import AdminPage from "../pages/Admin View/AdminPage";
import AdminInvoice from "../pages/Admin View/AdminInvoice";
import AdminPayment from "../pages/Admin View/AdminPayment";
import AdminUser from "../pages/Admin View/AdminUser";

const AuthElement = ({ children }) => {
  const navigate = useNavigate();
  const { AuthServices } = useApiContext();

  useEffect(() => {
    // Kalo sudah login arahkan lagi ke landing page
    if (AuthServices.isLoggedIn()) {
      navigate("/");
    }
  }, [navigate, AuthServices]);

  return <>{children}</>;
};

const authComp = (element) => {
  return <AuthElement>{element}</AuthElement>;
};

const ProtectElement = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const { AuthServices } = useApiContext();

  useEffect(() => {
    // Kalo belum login arahkan ke login page
    if (!AuthServices.isLoggedIn()) {
      navigate("/login");
    }
  }, [navigate, AuthServices]);

  return <>{children}</>;
};

const adminComp = (element) => {
  return <AdminElement>{element}</AdminElement>;
};

const AdminElement = ({ children }) => {
  const navigate = useNavigate();
  const { AuthServices } = useApiContext();

  useEffect(() => {
    // Kalo belum login atau bukan admin, maka akan diarahkan ke login page
    if (!AuthServices.isRoleAdmin()) {
      navigate("/login");
    }
  }, [navigate, AuthServices]);

  return <>{children}</>;
};

const protectedComp = (element) => {
  return <ProtectElement>{element}</ProtectElement>;
};

const AppRouter = () => {
  const { GlobalDialogUtil, AuthServices } = useApiContext();

  useState(() => {
    AuthServices.checkSession();
  }, [GlobalDialogUtil, AuthServices]);

  const handleCloseGlobalDialog = () => GlobalDialogUtil.setGlobalDialog(false);

  return (
    <>
      <Routes>
        {/* START: Auth Route */}
        <Route path="/login" element={authComp(<Login />)} />
        <Route path="/register" element={authComp(<Register />)} />
        <Route
          path="/reset-password"
          element={authComp(<EmailResetPassword />)}
        />
        <Route
          path="/new-password/:resetToken"
          element={authComp(<NewPassResetPassword />)}
        />
        {/* END: Auth Route */}

        {/* START: Public Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/course-menu/:categoryId" element={<MenuCourse />} />
        <Route path="/success-purchase" element={<SuccesPurchase />} />
        <Route path="/email-confirmed" element={<EmailConfirm />} />
        <Route path="/logout" element={<Logout />} />
        {/* END: Public Route */}

        {/* START: Protected Route */}
        <Route
          path="/course-details/:courseId"
          element={protectedComp(<DetailsCourse />)}
        />
        <Route path="/my-class" element={protectedComp(<MyClass />)} />
        <Route path="/checkout" element={protectedComp(<Checkout />)} />
        <Route path="/invoice" element={protectedComp(<MenuInvoices />)} />
        <Route
          path="/invoice/rincian-invoice/:invoiceId"
          element={protectedComp(<DetailsInvoice />)}
        />
        {/* END: Protected Route */}

        {/* START: Admin Route */}
        <Route path="/admin" element={adminComp(<AdminPage />)} />
        <Route path="/admin/invoices" element={adminComp(<AdminInvoice />)} />
        <Route
          path="/admin/payment-methods"
          element={adminComp(<AdminPayment />)}
        />
        <Route path="/admin/users" element={adminComp(<AdminUser />)} />
        {/* END: Admin Route */}
      </Routes>
      <Dialog
        open={GlobalDialogUtil.globalDialog}
        onClose={handleCloseGlobalDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Session Telah Berakhir"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Silahkan login kembali, untuk menikmati layanan kami.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseGlobalDialog} autoFocus>
            Oke
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppRouter;
