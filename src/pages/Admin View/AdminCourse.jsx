import { createTheme } from "@mui/material";
import React from "react";
import theme from "../../custom_mui/theme";
import { ThemeProvider } from "@emotion/react";

const AdminCourse = () => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};

export default AdminCourse;
