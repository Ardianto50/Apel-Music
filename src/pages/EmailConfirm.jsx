import { Button, Grid, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.png";
import success from "../assets/img/success.png";

export const EmailConfirm = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        bgcolor={"white"}
        md={12}
        sx={{ position: "sticky", top: 0 }}
      >
        <Stack
          direction={"row"}
          justifyContent={"start"}
          paddingX={{ md: 2, xs: "none" }}
        >
          <Toolbar>
            <img src={Logo} alt="Logo" style={{ height: "40px" }} />
          </Toolbar>
        </Stack>
      </Grid>
      <Grid item container md={12} justifyContent={"center"}>
        <Stack marginY={10} direction={"column"} textAlign={"center"}>
          <Grid
            container
            justifyContent={"center"}
            height={{ md: 500, xs: 250 }}
          >
            <img src={success} alt="" style={{ height: "100%" }} />
          </Grid>
          <Typography
            variant="h4"
            marginY={2}
            fontStyle={"inherit"}
            color={"blue"}
          >
            Konfirmasi Email Berhasil
          </Typography>
          <Typography variant="h6" marginY={2} fontStyle={"inherit"}>
            Silahkan Login terlebih dahulu untuk masuk ke aplikasi
          </Typography>
          <Grid>
            <Link to={"/login"}>
              <Button variant="contained" sx={{ marginY: 5, fontSize: 22 }}>
                Masuk Sekarang
              </Button>
            </Link>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};
