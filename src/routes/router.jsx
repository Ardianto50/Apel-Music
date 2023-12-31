import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import LandingPage from "../pages/LandingPage";
import { EmailConfirm } from "../pages/EmailConfirm";
import { EmailResetPassword } from "../pages/EmailResetPassword";
import { NewPassResetPassword } from "../pages/NewPassResetPassword";
import { SuccesPurchase } from "../pages/SuccesPurchase";
import { MyClass } from "../pages/MyClass";
import { Checkout } from "../pages/Checkout";
import AdminPage from "../pages/Admin View/AdminPage";
import AdminInvoice from "../pages/Admin View/AdminInvoice";
import AdminPayment from "../pages/Admin View/AdminPayment";
import AdminUser from "../pages/Admin View/Adminuser";

// NOTE: ini nggak dipake lagi
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reset-password",
    element: <EmailResetPassword />,
  },
  {
    path: "/reset-password/new-pass",
    element: <NewPassResetPassword />,
  },
  {
    path: "/email-confirm",
    element: <EmailConfirm />,
  },
  {
    path: "/purchase-complete",
    element: <SuccesPurchase />,
  },
  {
    path: "/my-class",
    element: <MyClass />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/admin/Invoices",
    element: <AdminInvoice />,
  },
  {
    path: "/admin/payment-methods",
    element: <AdminPayment />,
  },
  {
    path: "/admin/users",
    element: <AdminUser />,
  },
]);
