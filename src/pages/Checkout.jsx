import React from "react";
import { Box } from "@mui/material";
import Navbar from "../assets/components/Navbar";
import { ListClass } from "../assets/components/my_class/ListClass";
import Footer from "../assets/components/Footer";
import eno from "../assets/img/eno-netral.png";
import orgMainBiola from "../assets/img/orang-main-biola.png";

export const Checkout = () => {
  const dummyData = [
    {
      img: eno,
      category: "Drum",
      name: "Kursus Drummer Special Coach (Eno Netral)",
      schedule: "Senin, 25 Juli 2022",
    },
    {
      img: orgMainBiola,
      category: "Biola",
      name: "Biola Mid-Level Course",
      schedule: "Sabtu, 23 Juli 2022",
    },
  ];
  // TODO: Lanjut benerin checkout sama payment method
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: "1920px",
          paddingX: { xs: "0.5rem", sm: "0.5rem", md: "3rem", lg: "5rem" },
          paddingY: "3rem",
          minHeight: "80vh",
          marginX: "auto",
        }}
      >
        {dummyData.map((data, i) => (
          <Box
            sx={{
              width: "100%",
              borderBottom: "1px solid #BDBDBD",
              paddingY: "1rem",
            }}
            key={i}
          >
            <ListClass {...data} />
          </Box>
        ))}
      </Box>
      <Footer />
    </>
  );
};
