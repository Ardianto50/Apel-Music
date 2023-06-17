import { Button, Grid, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import success from "../assets/img/success.png";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

export const SuccesPurchase = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        md={12}
        bgcolor={"white"}
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
            Pembelian Berhasil
          </Typography>
          <Typography
            variant="h6"
            paddingX={1.1}
            marginY={2}
            fontStyle={"inherit"}
          >
            Yey! Kamu telah berhasil membeli kursus di Apel Music
          </Typography>
          <Grid flexDirection={"row"}>
            <Link to={"/"}>
              <Button
                variant="outlined"
                sx={{ marginY: { md: 5, xs: 2 }, marginX: 2, fontSize: 22 }}
              >
                <HomeRoundedIcon />
                Ke Beranda
              </Button>
            </Link>
            <Link to={"/invoice"}>
              <Button
                variant="contained"
                sx={{ marginY: { md: 5, xs: 2 }, marginX: 2, fontSize: 22 }}
              >
                <ArrowForwardRoundedIcon />
                Buka Invoice
              </Button>
            </Link>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};
