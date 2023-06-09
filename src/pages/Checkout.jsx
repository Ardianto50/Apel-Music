import React from "react";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import Navbar from "../assets/components/Navbar";
import { ListClass } from "../assets/components/my_class/ListClass";
import Footer from "../assets/components/Footer";
import eno from "../assets/img/eno-netral.png";
import orgMainBiola from "../assets/img/orang-main-biola.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CheckoutList = ({ isCheck, img, category, name, schedule }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        width: "100%",
        maxWidth: "1920px",
        borderBottom: "1px solid #BDBDBD",
        paddingY: "1rem",
        paddingX: "1rem",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Checkbox checked={isCheck} />
        <ListClass {...{ img, category, name, schedule }} />
      </Box>
      <Button
        sx={{ color: "red" }}
        variant="text"
        startIcon={<DeleteForeverIcon color="red" />}
      >
        Delete
      </Button>
    </Box>
  );
};

export const Checkout = () => {
  const dummyData = [
    {
      isCheck: false,
      img: eno,
      category: "Drum",
      name: "Kursus Drummer Special Coach (Eno Netral)",
      schedule: "Senin, 25 Juli 2022",
    },
    {
      isCheck: false,
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
          paddingX: { xs: "0.5rem", sm: "0.5rem", md: "3rem", lg: "5rem" },
          paddingY: "3rem",
          minHeight: "80vh",
          marginX: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
            maxWidth: "1920px",
            borderBottom: "1px solid #BDBDBD",
            paddingY: "1rem",
            paddingX: "1rem",
          }}
        >
          <Checkbox />
          <Typography
            fontSize={"1.25rem"}
            lineHeight={"1.875rem"}
            fontWeight={400}
          >
            Pilih Semua
          </Typography>
        </Box>

        {/* List course */}
        {dummyData.map((data, i) => (
          <CheckoutList {...data} key={i} />
        ))}
        {/* End List course */}
      </Box>
      <Footer />
    </>
  );
};
