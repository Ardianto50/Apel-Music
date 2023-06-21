import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { useApiContext } from "../context/ApiProvider";
import { Password } from "@mui/icons-material";
import CustomPassword from "../assets/components/inputs/CustomPassword";

export const NewPassResetPassword = () => {
  const navigate = useNavigate();

  const { resetToken } = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    Password: [],
    ConfirmPassword: [],
  });

  const [nonFieldErrors, setNonFieldErrors] = useState(false);

  const { AuthServices } = useApiContext();

  const onResetPasswordSubmit = () => {
    setIsLoading(true);
    setFieldErrors({ Password: [], ConfirmPassword: [] });
    setNonFieldErrors(false);

    AuthServices.resetPassword(resetToken, password, confirmPassword)
      .then((res) => {
        setTimeout(() => {
          navigate("/login");
        }, 1000);
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
            <Typography
              variant="h3"
              paddingBottom={8}
              fontFamily={"poppins"}
              color={"black"}
            >
              Reset Password
            </Typography>
          </Stack>
          {nonFieldErrors && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {nonFieldErrors}
            </Alert>
          )}
          <CustomPassword
            fullWidth
            required
            size="medium"
            variant="outlined"
            type="password"
            label={"Password Baru"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={fieldErrors.Password.length !== 0}
            helperText={fieldErrors.Password[0]}
          />
          <CustomPassword
            fullWidth
            required
            size="medium"
            variant="outlined"
            type="password"
            label={"Konfirmasi Password Baru"}
            sx={{ marginY: 4 }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={fieldErrors.ConfirmPassword.length !== 0}
            helperText={fieldErrors.ConfirmPassword[0]}
          />
          <Stack direction={"row"}>
            <Button
              size="large"
              variant="outlined"
              color="primary"
              href="/login"
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
              sx={{
                borderRadius: 2,
                minWidth: "10rem",
              }}
              onClick={onResetPasswordSubmit}
            >
              Kirim
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
