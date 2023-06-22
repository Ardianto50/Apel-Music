import React, { useEffect, useState } from "react";
import Navbar from "../assets/components/Navbar";
import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
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
import { useApiContext } from "../context/ApiProvider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MenuCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // sewaktu page dibuka, langsung scroll ke atas
  }, []);

  const { categoryId } = useParams();

  const [courses, setCourses] = useState([
    {
      id: "",
      imageName: "",
      name: "",
      price: 0,
      category: {
        id: "",
        tagName: "",
      },
    },
  ]);

  const [category, setCategory] = useState({
    id: "",
    tagName: "",
    name: "",
    image: "",
    bannerImage: "",
    categoryDescription: "",
  });

  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const { AppServices, URLs } = useApiContext();

  useEffect(() => {
    setCourses([]);
    setCategory({});
    let params = {
      PageSize: pageSize,
      CurrentPage: currentPage,
    };
    AppServices.getCourseByCategory(categoryId, params)
      .then((res) => {
        // console.log(res.data);
        let result = res.data;
        setCourses(result.items);
      })
      .catch((err) => {
        let response = err.response;
        if (response.status === 404) setCurrentPage(1);
      });

    AppServices.getCategoryDetail(categoryId)
      .then((res) => {
        let result = res.data;
        setCategory(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [AppServices, pageSize, currentPage, categoryId]);

  const goLeft = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goRight = () => {
    if (courses.length === pageSize) {
      setCurrentPage(currentPage + 1);
    }
  };

  // const [dummyClass, setDummyClass] = useState([
  //   {
  //     image: enoNetral,
  //     judul: "kursus Drummer Special Coach (Eno Netral)",
  //     kategori: "Drum",
  //     harga: 8_500_000,
  //   },
  //   {
  //     image: expertDrumClass,
  //     judul: "Expert Level Drummer Lessons",
  //     kategori: "Drum",
  //     harga: 5_450_000,
  //   },
  //   {
  //     image: progressiveDrumClass,
  //     judul: "From zero to Profesional Drumer (Complit Package)",
  //     kategori: "Drum",
  //     harga: 13_000_000,
  //   },
  //   {
  //     image: orangMainDrum,
  //     judul: "Drummer for kids (Level Basic/1)",
  //     kategori: "Drum",
  //     harga: 2_200_000,
  //   },
  // ]);

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
        src={URLs.IMG_URL + category.bannerImage}
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
            {category.name}
          </Typography>
          <Typography textAlign={"justify"}>
            {category.categoryDescription}
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
          {courses.map((course, i) => (
            <CourseCard
              key={i}
              secureId={course.id}
              judul={course.name}
              image={course.imageName}
              harga={course.price}
              kategori={course.category.tagName}
            />
          ))}
        </Box>
        <Box
          sx={{
            width: "200px",
            display: "flex",
            justifyContent: "space-evenly",
            height: "50px",
            margin: "auto",
          }}
        >
          <Button variant="outlined" onClick={goLeft}>
            <ChevronLeftIcon />
          </Button>
          <Button variant="outlined" onClick={goRight}>
            <ChevronRightIcon />
          </Button>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default MenuCourse;
