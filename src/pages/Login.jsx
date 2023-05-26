import React from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "../assets/components/Navbar";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <Navbar />
      <div className="grid place-items-center h-screen w-full px-5 font-poppins">
        <div className="flex flex-col gap-3 w-[95%] sm:w-[80%] lg:w-[60%] xl:w-[40%] md:w-[70%]">
          <h1 className=" text-5xl my-[20px]">Selamat datang Musikers!</h1>
          <h2 className=" text-2xl mt-[20] mb-[40px] text-gray-500">
            Login dulu yuk
          </h2>
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
              label={"Masukan Password"}
            />
          </div>
          <div className="w-full text-right">
            <Link
              to={"/reset-password"}
              className="text-blue-500 hover:underline"
            >
              Lupa kata sandi
            </Link>
          </div>
          <div className="mt-[30px] mb-[20px]">
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
              Masuk
            </Button>
          </div>
          <div className="my-[20px]">
            <span className="pr-[5px] ">Belum punya akun?</span>
            <Link to={"/register"} className="text-blue-500 hover:underline">
              Daftar di sini
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
