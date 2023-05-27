import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../assets/components/Navbar";

export const Login = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          display: "flex",
          pt: 10,
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
              Login dulu yuk
            </Typography>
            <TextField
              fullWidth
              size="small"
              type="email"
              variant="outlined"
              label={"Masulkan Email"}
              sx={{ my: 2 }}
            ></TextField>
            <TextField
              fullWidth
              size="small"
              type="password"
              variant="outlined"
              label={"Masukan Password"}
              sx={{ my: 2 }}
            ></TextField>
            <Link to={""} sx={{ cursor: "pointer", pb: 5 }}>
              <Typography
                color={"black"}
                fontFamily={"poppins"}
                textAlign={"end"}
                paddingY={3}
              >
                Lupa kata sandi
              </Typography>
            </Link>
            <Button variant="contained" sx={{ width: 100 }}>
              Masuk
            </Button>
            <Typography paddingTop={3} fontFamily={"poppins"}>
              Belum punya akun?
              <Link
                to={"/register"}
                sx={{
                  fontFamily: "poppins",
                  cursor: "pointer",
                  textAlign: "end",
                }}
              >
                Daftar disini
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};
