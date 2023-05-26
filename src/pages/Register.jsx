import React from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "../assets/components/Navbar";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <Navbar />
      <div className="grid place-items-center h-screen w-full px-5 font-poppins">
        <div className="flex flex-col gap-3 w-[95%] sm:w-[80%] lg:w-[60%] xl:w-[40%] md:w-[70%]">
          <h1 className=" text-5xl my-[20px]">Selamat datang Musikers!</h1>
          <h2 className=" text-2xl mt-[20] mb-[40px] text-gray-500">
            Yuk daftar terlebih dahulu akun kamu
          </h2>
          <div className="my-[10px]">
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              type="text"
              label={"Masukkan Nama Lengkap"}
            />
          </div>
          <div className="my-[10px]">
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              type="text"
              label={"Masukkan Email"}
            />
          </div>
          <div className="my-[10px]">
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              type="password"
              label={"Masukkan Password"}
            />
          </div>
          <div className="my-[10px]">
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              type="password"
              label={"Konfirmasi Password"}
            />
          </div>
          <div className="flex align-middle place-items-center mt-[30px] mb-[20px]">
            <Button
              size="large"
              variant="contained"
              color="primary"
              className="rounded-lg"
              sx={{
                borderRadius: 2,
                minWidth: "8rem",
              }}
            >
              Daftar
            </Button>
            <div className="ml-[150px]">
              <span className="pr-[5px]">Sudah punya akun?</span>
              <Link to={"/login"} className="text-blue-500 hover:underline">
                Login di sini
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
