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
    },
    {
      image: orangMainPiano,
      nama: "Piano",
    },
    {
      image: gitar,
      nama: "Gitar",
    },
    {
      image: gitar,
      nama: "Bass",
    },
    {
      image: biola,
      nama: "Biola",
    },
    {
      image: vokal,
      nama: "Menyanyi",
    },
    {
      image: orangMainSax,
      nama: "Flute",
    },
    {
      image: orangMainSax,
      nama: "Saxophone",
    },
  ];

  return (
    <>
      <Navbar />
      <CardMedia width={"full"} minHeight={514} image={bannerImage}>
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
          }}
        >
          {dummyClass.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </Box>
      </Box>
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
          }}
        >
          {dummyCategory.map((c, i) => (
            <KategoriCard key={i} {...c} />
          ))}
        </Box>
      </Box>

      <div className="w-full flex flex-col justify-center lg:flex-row lg:justify-normal items-center min-h-[500px] mb-36">
        <div className="px-5">
          <div className="h-[240px] w-[240px] md:h-[360px] md:w-[360px] lg:h-[480px] lg:w-[480px] rounded-full bg-[#F2C94C]">
            <img
              src={mainUkulele}
              className="h-2/3 w-2/3 relative top-[32%] left-[36%]"
              alt=""
            />
            <div className="relative top-[24%] left-[5%] h-1/5 w-1/5 rounded-full bg-[#F2C94C]"></div>
            <div className="relative top-[16%] left-[28%] h-[12%] w-[12%] rounded-full bg-[#F2C94C]"></div>
            <div className="relative top-[5%] left-[45%] h-[5%] w-[5%] rounded-full bg-[#F2C94C]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[80%] lg:w-[60%] lg:ml-3 mt-24 lg:mt-5 p-3">
          <span className="text-4xl font-bold text-[#5D5FEF]">
            Benefit ikut Apel Course
          </span>
          <span className="text-justify">
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
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
