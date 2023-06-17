import React, { useEffect, useState } from "react";
import Navbar from "../assets/components/Navbar";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuList,
  Select,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import enoNetral from "../assets/img/eno-netral.png";
import expertDrumClass from "../assets/img/expert-level-drum-class.png";
import progressiveDrumClass from "../assets/img/progressive-drum-class.png";
import orangMainDrum from "../assets/img/orang-main-drum.png";
import bannerImage from "../assets/img/banner-drum.png";
import { rupiah } from "../utility/formatIDR";
import MenuItem from "@mui/material/MenuItem";
import { blue } from "@mui/material/colors";
import CourseCard from "../assets/components/CourseCard";
import Footer from "../assets/components/Footer";

const DetailsCourse = () => {
  const { courseId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0); // sewaktu page dibuka, langsung scroll ke atas
  }, []);

  const [jadwal, setJadwal] = useState("");
  const [optionsJadwal, setOptionJadwal] = useState([]);

  const [dummyClass, setDummyClass] = useState([
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
        sx={{
          width: "100%",
          borderBottom: "1px solid #E4E4E4",
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            gap: { xs: 6, sm: 6, md: 5 },
            maxWidth: "2000px",
            margin: "auto",
            paddingX: "50px",
            paddingY: "30px",
          }}
        >
          <Box
            component={"img"}
            src={enoNetral}
            sx={{
              borderRadius: "1rem",
              width: "400px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2, sm: 2, md: 1 },
              justifyContent: "space-between",
              minHeight: "270px",
            }}
          >
            {/* Section (Category, Title, Price) */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <Typography
                fontSize={"1rem"}
                lineHeight={"1.5rem"}
                fontWeight={400}
                color={"#828282"}
              >
                Drum
              </Typography>
              <Typography
                fontSize={"1.5rem"}
                lineHeight={"2rem"}
                fontWeight={600}
              >
                Kursus Drummer Special Coach (Eno Netral)
              </Typography>
              <Typography
                fontSize={"1.5rem"}
                lineHeight={"2rem"}
                fontWeight={600}
                color={"#5D5FEF"}
              >
                {rupiah(8_500_000)}
              </Typography>
            </Box>
            {/* End Section (Category, Title, Price) */}

            {/* Section Select */}
            <Box sx={{ maxWidth: "250px", width: { xs: "100%", sm: "100%" } }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Pilih Jadwal Kelas
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={jadwal}
                  label="Pilih Jadwal Kelas"
                  onChange={(e) => setJadwal(e.target.value)}
                >
                  <MenuItem value={10}>Senin, 25 Juli 2022</MenuItem>
                  <MenuItem value={20}>Selasa, 26 Juli 2022</MenuItem>
                  <MenuItem value={30}>Rabu, 27 Juli 2022</MenuItem>
                  <MenuItem value={30}>Kamis, 28 Juli 2022</MenuItem>
                  <MenuItem value={30}>Jumat, 29 Juli 2022</MenuItem>
                  <MenuItem value={30}>Sabtu, 30 Juli 2022</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* End Section Select */}

            {/* Section Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Button
                sx={{
                  width: "233.5px",
                  borderRadius: "0.5rem",
                  marginY: "0.25rem",
                  textAlign: "center",
                }}
                variant="outlined"
                component={"a"}
                href={"/checkout"}
              >
                Masukkan ke keranjang
              </Button>
              <Button
                sx={{
                  width: "233.5px",
                  borderRadius: "0.5rem",
                  marginY: "0.25rem",
                }}
                variant="contained"
              >
                Beli Sekarang
              </Button>
            </Box>
            {/* End Section Buttons */}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: "2000px",
            margin: "auto",
            paddingX: "50px",
            paddingY: "30px",
            height: "100%",
          }}
        >
          <Typography fontSize={"1.5rem"} lineHeight={"2rem"} fontWeight={600}>
            Deskripsi
          </Typography>
          <Typography fontSize={"1rem"} lineHeight={"1.5rem"} fontWeight={400}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography fontSize={"1rem"} lineHeight={"1.5rem"} fontWeight={400}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
          Kelas lain yang mungkin kamu suka
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

export default DetailsCourse;
