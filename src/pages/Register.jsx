import React from "react";
import { TextField } from "@mui/material";
import { Nav } from "../assets/components/Nav";
import { ButtonComponent } from "../assets/components/Button";

export const Register = () => {
  return (
    <div>
      <Nav />
      <div className="grid place-items-center h-screen ">
        <div className="flex flex-col gap-3 lg:w-[700px] lg:h-[600px] md:w-[500px] md:h-[400px] sm:w-[100px]">
          <h1 className="font-sans text-5xl my-[20px] md:text-3xl sm:text-">
            Selamat datang Musikers!
          </h1>
          <h2 className="font-sans text-2xl mt-[20] mb-[40px] text-gray-500">
            Yuk daftar terlebih dahulu akun kamu
          </h2>
          <div className="my-[10px]">
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              type="text"
              label={"Masukan Nama Lengkap"}
            />
          </div>
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
            <div className="bg-red-400">
              <ButtonComponent type="contained" text="Daftar" />
            </div>
            <div className="ml-[150px]">
              <span className="pr-[5px] font-sans">Sudah punya akun?</span>
              <span className="font-sans cursor-pointer text-blue-600">
                Login disini
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
