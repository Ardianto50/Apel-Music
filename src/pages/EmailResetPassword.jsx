import React, { useState } from "react";
import Navbar from "../assets/components/Navbar";
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
import { useNavigate } from "react-router-dom";
import { useApiContext } from "../context/ApiProvider";

export const EmailResetPassword = () => {
  const navigate = useNavigate();

  const [verifyEmail, setVerifyEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    Email: [],
  });

  const [nonFieldErrors, setNonFieldErrors] = useState(false);

  const { AuthServices } = useApiContext();

  const onResetPassSubmit = () => {
    setIsLoading(true); // Show backdrop loadings
    setFieldErrors({ Email: [] }); // Membersihkan field error
    setNonFieldErrors(false);

    AuthServices.requestResetPassword(email)
      .then((res) => {
        setVerifyEmail(true);
        setFieldErrors({ Email: [] });
        setEmail("");
      })
      .catch((err) => {
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

  return (
    <>
      <Navbar />
      <Grid container justifyContent={"center"} paddingY={{ md: 25, xs: 10 }}>
        <Grid item container md={6} marginY={4} paddingX={4}>
          <Stack direction={"column"}>
            <Typography variant="h3" fontFamily={"poppins"} color={"black"}>
              Reset Password
            </Typography>
            <Typography
              variant="h5"
              paddingTop={3}
              paddingBottom={5}
              fontFamily={"poppins"}
              sx={{ color: "grey" }}
            >
              Silahkan masukan terlebih dahulu email anda
            </Typography>
          </Stack>
          {nonFieldErrors && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {nonFieldErrors}
            </Alert>
          )}
          {verifyEmail && (
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              Silahkan cek email anda.
            </Alert>
          )}
          <TextField
            required
            fullWidth
            size="medium"
            variant="outlined"
            type="text"
            label={"Masukkan Email"}
            sx={{ marginY: 4 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={fieldErrors.Email.length !== 0}
            helperText={fieldErrors.Email[0]}
          />
          <Stack direction={"row"}>
            <Button
              size="large"
              variant="outlined"
              color="primary"
              className="rounded-lg"
              sx={{
                borderRadius: 2,
                minWidth: "10rem",
                marginRight: 3,
              }}
            >
              Batal
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              className="rounded-lg"
              onClick={onResetPassSubmit}
              sx={{
                borderRadius: 2,
                minWidth: "10rem",
              }}
            >
              Konfirmasi
            </Button>
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
