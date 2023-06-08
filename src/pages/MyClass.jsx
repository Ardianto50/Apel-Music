import { Grid, List } from "@mui/material";
import React from "react";
import NavbarAfter from "../assets/components/after_login/NavbarAfter";
import { ListClass } from "../assets/components/my_class/ListClass";
import Footer from "../assets/components/Footer";

export const MyClass = () => {
  return (
    <>
      <NavbarAfter />
      <Grid container justifyContent={"center"}>
        <Grid
          container
          md={10}
          paddingY={4}
          justifyContent={"center"}
          alignContent={"start"}
          minHeight={"34rem"}
        >
          <List sx={{ width: "100rem" }}>
            <ListClass />
            <ListClass />
            <ListClass />
          </List>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
