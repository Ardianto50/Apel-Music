import React from "react";
import NavbarAfter from "../assets/components/after_login/NavbarAfter";
import { Grid } from "@mui/material";

export const Checkout = () => {
  return (
    <>
      <NavbarAfter />
      <Grid
        item
        container
        md={12}
        sx={{ position: "sticky", bottom: "0" }}
        bgcolor={"aqua"}
      >
        <Grid item md={6} paddingX={10}>
          Item
        </Grid>
        <Grid item container md={6} justifyContent={"end"} paddingX={10}>
          Item
        </Grid>
      </Grid>
    </>
  );
};
