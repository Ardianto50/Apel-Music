import React from "react";
import Navbar from "../assets/components/Navbar";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";

export const NewPassResetPassword = () => {
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
          <TextField
            fullWidth
            required
            size="medium"
            variant="outlined"
            type="password"
            label={"Password Baru"}
          />
          <TextField
            fullWidth
            required
            size="medium"
            variant="outlined"
            type="text"
            label={"Konfirmasi Password Baru"}
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
              sx={{
                borderRadius: 2,
                minWidth: "10rem",
              }}
            >
              Kirim
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
