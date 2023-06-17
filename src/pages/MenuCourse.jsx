import React, { useEffect, useState } from "react";
import Navbar from "../assets/components/Navbar";
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import Footer from "../assets/components/Footer";
import CourseCard from "../assets/components/CourseCard";
import enoNetral from "../assets/img/eno-netral.png";
import expertDrumClass from "../assets/img/expert-level-drum-class.png";
import progressiveDrumClass from "../assets/img/progressive-drum-class.png";
import orangMainDrum from "../assets/img/orang-main-drum.png";
import bannerImage from "../assets/img/banner-drum.png";
import { blue, grey } from "@mui/material/colors";
import style from "../assets/css/pages/LandingPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const MenuCourse = () => {
  const { categoryId } = useParams();

  useEffect(() => {
    console.log(categoryId);
    // Code: request get dengan axios untuk menampilkan course dengan category yang dikirimkan
  }, []);

  const [dummyClass, setDummyClass] = useState([
    {
      image: enoNetral,
      judul: "kursus Drummer Special Coach (Eno Netral)",
      kategori: "Drum",
      harga: 8_500_000,
    },
    {
      image: expertDrumClass,
      judul: "Expert Level Drummer Lessons",
      kategori: "Drum",
      harga: 5_450_000,
    },
    {
      image: progressiveDrumClass,
      judul: "From zero to Profesional Drumer (Complit Package)",
      kategori: "Drum",
      harga: 13_000_000,
    },
    {
      image: orangMainDrum,
      judul: "Drummer for kids (Level Basic/1)",
      kategori: "Drum",
      harga: 2_200_000,
    },
  ]);

  return (
    <>
      <Navbar isLoggedIn={true} />
      <Box
        component={"img"}
        sx={{
          height: "auto",
          maxHeight: "400px",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={bannerImage}
      ></Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          justifyContent: {
            md: "center",
            lg: "normal",
          },
          alignItems: "center",
          minHeight: 400,
          paddingY: 3,
          borderBottom: "1px solid #E4E4E4",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            paddingX: 3,
            maxWidth: "2000px",
            margin: "auto",
          }}
        >
          <Typography fontSize={"1.5rem"} fontWeight={700} color={"black"}>
            Drummer Class
          </Typography>
          <Typography textAlign={"justify"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolor ea beatae accusamus neque impedit molestias, qui
            exercitationem earum quos, magnam quam quaerat ullam mollitia at?
            Voluptate corrupti delectus, modi atque, commodi numquam dolorem,
            maxime voluptatibus aliquam necessitatibus voluptates? Molestias ad
            repellat praesentium deserunt laborum est assumenda voluptatum
            placeat. Fugiat earum officia assumenda ab exercitationem at
            molestiae, accusantium recusandae consequatur aliquid et architecto
            aspernatur? Assumenda qui atque exercitationem praesentium soluta
            corporis optio velit deserunt magni asperiores ad totam maxime,
            dolores laudantium, incidunt porro doloremque! Aliquid sunt
            obcaecati ut, quod quasi molestias explicabo nemo atque natus
            blanditiis molestiae velit provident porro!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          padding: 5,
          textAlign: "center",
          marginY: 10,
        }}
      >
        <Typography
          variant="h5"
          fontSize={"1.5rem"}
          fontWeight={700}
          color={blue[500]}
        >
          Explore kelas favorit
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sm: "repeat(1, minmax(0, 1fr))",
              md: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
            gap: 8,
            paddingY: 5,
            marginY: 5,
            margin: "auto",
            maxWidth: "1200px",
          }}
        >
          {dummyClass.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default MenuCourse;
