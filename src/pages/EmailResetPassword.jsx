import React from "react";
import Navbar from "../assets/components/Navbar";
import { Button, TextField } from "@mui/material";
import { ButtonComponent } from "../assets/components/Button";
import { Link } from "react-router-dom";

const EmailResetPassword = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-screen w-full px-5 py-24 font-poppins">
        <div className="flex flex-col gap-3 w-[95%] sm:w-[80%] lg:w-[60%] xl:w-[40%] md:w-[70%]">
          <h1 className="text-5xl my-[20px]">Reset Password</h1>
          <h2 className="text-2xl mt-[20] mb-[40px] text-gray-500">
            Silahkan masukkan terlebih dahulu email anda
          </h2>
          <div className="my-[10  px]">
            <TextField
              fullWidth
              size="medium"
              variant="outlined"
              type="text"
              label={"Masukkan Email"}
            />
          </div>
          <div className="mt-[30px] mb-[20px] flex gap-5">
            <Button
              size="large"
              variant="outlined"
              color="primary"
              className="rounded-lg"
              sx={{
                borderRadius: 2,
                minWidth: "10rem",
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
              Konfirmasi
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailResetPassword;
