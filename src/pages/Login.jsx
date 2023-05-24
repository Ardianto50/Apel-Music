import React from "react";
import { TextField } from "@mui/material";
import { ButtonComponent } from "../assets/components/Button";
import Navbar from "../assets/components/Navbar";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="grid place-items-center h-screen ">
        <div className="flex flex-col gap-3 lg:w-[700px] lg:h-[600px] md:w-[500px] md:h-[400px] sm:w-[100px]">
          <h1 className="font-sans text-5xl my-[20px] md:text-3xl sm:text-">
            Selamat datang Musikers!
          </h1>
          <h2 className="font-sans text-2xl mt-[20] mb-[40px] text-gray-500">
            Login dulu yuk
          </h2>
          <div className="my-[10px]">
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              type="text"
              label={"Masukan Email"}
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
          <button className="font-sans text-end my-[10px]" onClick={""}>
            Lupa kata sandi
          </button>
          <div className="mt-[30px] mb-[20px]">
            <ButtonComponent type="contained" text="Masuk" />
          </div>
          <div className="my-[20px]">
            <span className="pr-[5px] font-sans">Belum punya akun?</span>
            <Link to={"/register"} className="text-blue-500 hover:underline">
              Daftar di sini
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
