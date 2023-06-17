import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../assets/components/Navbar";

export const Register = () => {
  const navigate = useNavigate();

  const onSubmitRegister = () => {
    navigate("/email-confirmed");
  };

  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          display: "flex",
          py: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          container
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Stack direction={"column"} paddingX={5} justifyContent={"center"}>
            <Typography variant="h3" fontFamily={"poppins"} color={"black"}>
              Selamat datang Musikers!
            </Typography>
            <Typography
              variant="h5"
              paddingTop={3}
              paddingBottom={5}
              fontFamily={"poppins"}
              sx={{ color: "grey" }}
            >
              Yuk daftar terlebih dahulu akun kamu
            </Typography>
            <TextField
              fullWidth
              required
              size="small"
              type="text"
              variant="outlined"
              label={"Masulkan Nama Lengkap"}
              sx={{ my: 2 }}
            />
            <TextField
              fullWidth
              required
              size="small"
              type="email"
              variant="outlined"
              label={"Masulkan Email"}
              sx={{ my: 2 }}
            />
            <TextField
              fullWidth
              required
              size="small"
              type="password"
              variant="outlined"
              label={"Masukan Password"}
              sx={{ my: 2 }}
            />
            <TextField
              fullWidth
              required
              size="small"
              type="password"
              variant="outlined"
              label={"Konfirmasi Password"}
              sx={{ my: 2 }}
            />
            <Stack
              direction={"row"}
              marginY={4}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item md={4}>
                <Button
                  onClick={onSubmitRegister}
                  variant="contained"
                  sx={{ width: 100 }}
                >
                  Daftar
                </Button>
              </Grid>
              <Grid item md={4} sx={{ display: { md: "flex", xs: "none" } }}>
                <Typography fontFamily={"poppins"}>
                  Sudah punya akun?
                  <Link
                    to={"/login"}
                    sx={{
                      fontFamily: "poppins",
                      cursor: "pointer",
                      textAlign: "end",
                    }}
                  >
                    Login disini
                  </Link>
                </Typography>
              </Grid>
              <Grid item md={4} bgcolor={"aqua"}></Grid>
            </Stack>
            <Typography
              textAlign={"center"}
              fontFamily={"poppins"}
              sx={{ display: { md: "none", xs: "flex" } }}
            >
              Sudah punya akun?
              <Link
                to={"/login"}
                sx={{
                  fontFamily: "poppins",
                  cursor: "pointer",
                  textAlign: "end",
                }}
              >
                Login disini
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
