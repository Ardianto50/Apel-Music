import React from "react";
import Navbar from "../assets/components/Navbar";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const EmailResetPassword = () => {
  const navigate = useNavigate();

  const onResetPassSubmit = () => {
    navigate("/new-password");
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
          <TextField
            required
            fullWidth
            size="medium"
            variant="outlined"
            type="text"
            label={"Masukkan Email"}
            sx={{ marginY: 4 }}
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
    </>
  );
};
