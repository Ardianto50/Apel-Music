import {
  Alert,
  AlertTitle,
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../assets/components/Navbar";
import { useApiContext } from "../context/ApiProvider";
import CustomPassword from "../assets/components/inputs/CustomPassword";

export const Register = () => {
  const navigate = useNavigate();

  const [verifyEmail, setVerifyEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    FullName: [],
    Email: [],
    Password: [],
    ConfirmPassword: [],
  });

  const [nonFieldErrors, setNonFieldErrors] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { AuthServices } = useApiContext();

  const onSubmitRegister = () => {
    setIsLoading(true);
    setFieldErrors({
      FullName: [],
      Email: [],
      Password: [],
      ConfirmPassword: [],
    });
    setNonFieldErrors(false);

    AuthServices.register(fullName, email, password, confirmPassword)
      .then((res) => {
        // console.log("Sukaess");
        setVerifyEmail(true);
        clearInputFields();
      })
      .catch((err) => {
        // console.log(err);

        const status = err.response.status;
        if (status === 400) {
          const errors = err.response.data.errors;
          setFieldErrors({ ...fieldErrors, ...errors });
        }

        if (status > 400 && status < 500) {
          const errors = err.response.data;
          setNonFieldErrors(errors);
        }
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false); // Hide backdrop loading
        }, 1000);
      });
  };

  const clearInputFields = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
            {nonFieldErrors && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {nonFieldErrors}
              </Alert>
            )}
            {verifyEmail && (
              <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                Silahkan cek email anda, untuk melakukan verifikasi.
              </Alert>
            )}
            <TextField
              fullWidth
              required
              size="small"
              type="text"
              variant="outlined"
              label={"Masulkan Nama Lengkap"}
              sx={{ my: 2 }}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              error={fieldErrors.FullName.length !== 0}
              helperText={fieldErrors.FullName[0]}
            />
            <TextField
              fullWidth
              required
              size="small"
              type="email"
              variant="outlined"
              label={"Masulkan Email"}
              sx={{ my: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={fieldErrors.Email.length !== 0}
              helperText={fieldErrors.Email[0]}
            />
            <CustomPassword
              fullWidth
              required
              size="small"
              type="password"
              variant="outlined"
              label={"Masukan Password"}
              sx={{ my: 2 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={fieldErrors.Password.length !== 0}
              helperText={fieldErrors.Password[0]}
            />
            <CustomPassword
              fullWidth
              required
              size="small"
              type="password"
              variant="outlined"
              label={"Konfirmasi Password"}
              sx={{ my: 2 }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={fieldErrors.ConfirmPassword.length !== 0}
              helperText={fieldErrors.ConfirmPassword[0]}
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
          </Stack>
        </Grid>
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={() => setIsLoading(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
