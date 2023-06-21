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
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../assets/components/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { useApiContext } from "../context/ApiProvider";
import CustomPassword from "../assets/components/inputs/CustomPassword";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    Email: [],
    Password: [],
  });

  const [nonFieldErrors, setNonFieldErrors] = useState(false);

  const { AuthServices } = useApiContext();

  const onLoginSubmit = async () => {
    setIsLoading(true); // Show backdrop loadings
    setFieldErrors({ Email: [], Password: [] }); // Membersihkan field error
    AuthServices.login(email, password)
      .then((res) => {
        // console.log(res);
        setTimeout(() => {
          navigate("/");
        }, 1000);
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

  // Untuk ngecek field error
  // useEffect(() => {
  //   console.log(fieldErrors);
  // }, [fieldErrors]);

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
            marginBottom: "10rem",
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
            {nonFieldErrors && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {nonFieldErrors}
              </Alert>
            )}
            <TextField
              fullWidth
              size="small"
              type="email"
              variant="outlined"
              label={"Masulkan Email"}
              sx={{ my: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={fieldErrors.Email.length !== 0}
              helperText={fieldErrors.Email[0]}
            ></TextField>
            <CustomPassword
              fullWidth
              size="small"
              type="password"
              variant="outlined"
              label={"Masukan Password"}
              sx={{ my: 2 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={fieldErrors.Password.length !== 0}
              helperText={fieldErrors.Password[0]}
            ></CustomPassword>
            <Link to={"/reset-password"} sx={{ cursor: "pointer", pb: 5 }}>
              <Typography
                color={"black"}
                fontFamily={"poppins"}
                textAlign={"end"}
                paddingY={3}
              >
                Lupa kata sandi
              </Typography>
            </Link>
            <Button
              onClick={onLoginSubmit}
              variant="contained"
              sx={{ width: 100 }}
            >
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
