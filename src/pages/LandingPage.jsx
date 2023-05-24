import React from "react";
import Navbar from "../assets/components/Navbar";
import { Typography } from "@mui/material";
import AdCard from "../assets/components/landing_page/AdCard";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[90vh] w-full bg-concert-silhouette text-center text-white bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center gap-10 py-10 px-3">
        <Typography variant="h3" fontFamily={"poppins"} color={"white"}>
          Hi Musiker! Gabung yuk di Apel Music
        </Typography>
        <Typography variant="h4" fontFamily={"poppins"} color={"white"}>
          Banyak kelas keren yang bisa menunjang bakat bermusik kamu
        </Typography>
        <div className="w-full flex flex-wrap justify-center items-center gap-28">
          <AdCard
            header={"500+"}
            text={"Lebih dari kelas biasa yang bisa mengeluarkan bakat kalian"}
          />
          <AdCard
            header={"50+"}
            text={"Lulusan yang menjadi musisi ternama dengan skill memukau"}
          />
          <AdCard
            header={"10+"}
            text={"Coach spesial kolaborasi dengan musisi terkenal"}
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
