import { Box, Grid, List } from "@mui/material";
import React from "react";
import { ListClass } from "../assets/components/my_class/ListClass";
import Footer from "../assets/components/Footer";
import Navbar from "../assets/components/Navbar";
import eno from "../assets/img/eno-netral.png";
import orgMainBiola from "../assets/img/orang-main-biola.png";

export const MyClass = () => {
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

  return (
    <>
      <Navbar isLoggedIn={true} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: "1920px",
          paddingX: { xs: "1.5rem", sm: "1.5rem", md: "3rem", lg: "5rem" },
          paddingY: "3rem",
          minHeight: "80vh",
          marginX: "auto",
          marginBottom: "5rem",
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
