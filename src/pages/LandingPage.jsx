import React, { useState } from "react";
import Navbar from "../assets/components/Navbar";
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import AdCard from "../assets/components/landing_page/AdCard";
import Footer from "../assets/components/Footer";
import CourseCard from "../assets/components/CourseCard";
import enoNetral from "../assets/img/eno-netral.png";
import orangMainGitar from "../assets/img/orang-main-gitar.png";
import orangMainBiola from "../assets/img/orang-main-biola.png";
import orangMainDrum from "../assets/img/orang-main-drum.png";
import piano from "../assets/img/piano.png";
import saxophone from "../assets/img/saxophone.png";
import drum from "../assets/img/drum.png";
import orangMainPiano from "../assets/img/orang-main-piano.png";
import gitar from "../assets/img/gitar.png";
import biola from "../assets/img/biola.png";
import vokal from "../assets/img/vocal.png";
import orangMainSax from "../assets/img/orang-main-sax.png";
import KategoriCard from "../assets/components/landing_page/KategoriCard";
import mainUkulele from "../assets/img/mainUkulele.png";
import bannerImage from "../assets/img/party-silhouette.jpg";
import { blue, grey } from "@mui/material/colors";
import style from "../assets/css/pages/LandingPage.css";
import { v4 as uuidv4 } from "uuid";

const LandingPage = () => {
  const [dummyClass, setDummyClass] = useState([
    {
      image: enoNetral,
      judul: "kursus Drummer Special Coach (Eno Netral)",
      kategori: "Drum",
      harga: 8_500_000,
    },
    {
      image: orangMainGitar,
      judul: "[Beginner] Guitar class for kids",
      kategori: "Gitar",
      harga: 1_600_000,
    },
    {
      image: orangMainBiola,
      judul: "Biola Mid-Level Course",
      kategori: "Biola",
      harga: 3_000_000,
    },
    {
      image: orangMainDrum,
      judul: "Drummer for kids (Level Basic/1)",
      kategori: "Drum",
      harga: 2_200_000,
    },
    {
      image: piano,
      judul: "Kursus Piano: From Zero to Pro (Full Package)",
      kategori: "Piano",
      harga: 11_650_000,
    },
    {
      image: saxophone,
      judul: "Expert Level Saxophone",
      kategori: "Saxophone",
      harga: 7_350_000,
    },
  ]);

  const dummyCategory = [
    {
      image: drum,
      nama: "Drum",
      link: "/course-menu/drum",
    },
    {
      image: orangMainPiano,
      nama: "Piano",
      link: "/course-menu/piano",
    },
    {
      image: gitar,
      nama: "Gitar",
      link: "/course-menu/gitar",
    },
    {
      image: gitar,
      nama: "Bass",
      link: "/course-menu/bass",
    },
    {
      image: biola,
      nama: "Biola",
      link: "/course-menu/biola",
    },
    {
      image: vokal,
      nama: "Menyanyi",
      link: "/course-menu/vokal",
    },
    {
      image: orangMainSax,
      nama: "Flute",
      link: "/course-menu/flute",
    },
    {
      image: orangMainSax,
      nama: "Saxophone",
      link: "/course-menu/saxophone",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar isLoggedIn={false} />
      {/* End Navbar */}

      {/* Banner */}
      <CardMedia width={"full"} image={bannerImage}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            minHeight: 514,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 5,
          }}
        >
          <Typography
            fontSize={"2rem"}
            lineHeight={"3rem"}
            fontWeight={600}
            color={"white"}
          >
            Hi Musiker! Gabung yuk di Apel Music
          </Typography>
          <Typography
            fontSize={"1.5rem"}
            lineHeight={"2.25rem"}
            color={"white"}
          >
            Banyak kelas keren yang bisa menunjang bakat bermusik kamu
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
              flexWrap: {
                sm: "nowrap",
                md: "wrap",
              },
              gap: {
                xs: 5,
                sm: 5,
                lg: 10,
              },
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <AdCard
              header={"500+"}
              text={
                "Lebih dari kelas biasa yang bisa mengeluarkan bakat kalian"
              }
            />
            <AdCard
              header={"50+"}
              text={"Lulusan yang menjadi musisi ternama dengan skill memukau"}
            />
            <AdCard
              header={"10+"}
              text={"Coach spesial kolaborasi dengan musisi terkenal"}
            />
          </Box>
        </Box>
      </CardMedia>
      {/* End Banner */}

      {/* Course List */}
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
        <Typography variant="h5" fontWeight={700} color={blue[500]}>
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
            <CourseCard key={i} {...course} secureId={uuidv4()} />
          ))}
        </Box>
      </Box>
      {/* End Course List */}

      {/* Category List */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: grey[100],
          alignItems: "center",
          paddingY: 20,
          gap: 10,
          textAlign: "center",
          marginY: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "1.875rem",
            },
            lineHeight: "2.25rem",
            fontWeight: 700,
            color: blue[500],
          }}
        >
          Pilih kelas impian kamu
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(3, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
            },
            textAlign: "center",
            gap: 10,
            padding: 5,
            maxWidth: "1200px",
          }}
        >
          {dummyCategory.map((c, i) => (
            <KategoriCard key={i} {...c} />
          ))}
        </Box>
      </Box>
      {/* End Category List */}

      {/* Benefit */}
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
          minHeight: 500,
          marginBottom: 36,
        }}
      >
        <Box sx={{ paddingX: 5 }}>
          <div className="first-circle">
            <img src={mainUkulele} className="ukulele-img" alt="" />
            <div className="second-circle"></div>
            <div className="third-circle"></div>
            <div className="fourth-circle"></div>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: {
              md: "80%",
              lg: "60%",
            },
            marginLeft: { lg: "0.75rem" },
            marginTop: { xs: 22, sm: 22, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              fontWeight: 700,
              color: "#5D5FEF",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
              },
              marginX: 3,
            }}
          >
            Benefit ikut Apel Course
          </Typography>
          <Typography textAlign={"justify"} maxWidth={1200} marginX={3}>
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
      {/* End Benefit */}

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </>
  );
};

export default LandingPage;
