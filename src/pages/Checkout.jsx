import {
  Checkbox,
  Divider,
  Grid,
  List,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import NavbarAfter from "../assets/components/after_login/NavbarAfter";
import { CheckoutList } from "../assets/components/checkout/CheckoutList";

export const Checkout = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <NavbarAfter />
      <Grid container md={12} justifyContent={"center"} height={"45rem"}>
        <Grid item container marginY={5} md={10}>
          <List sx={{ width: "100%", maxHeight: "20%" }}>
            <Stack direction="row" alignItems="center">
              <Checkbox {...label} defaultChecked />
              <Typography marginX={4} variant="h5">
                Pilih Semua
              </Typography>
            </Stack>
            <Divider sx={{ marginY: 2 }} />
          </List>
          <List sx={{ width: "100%" }}>
            <CheckoutList />
            <CheckoutList />
            <CheckoutList />
          </List>
        </Grid>
      </Grid>
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
