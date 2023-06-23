import { Box, Grid, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ListClass } from "../assets/components/my_class/ListClass";
import Footer from "../assets/components/Footer";
import Navbar from "../assets/components/Navbar";
import eno from "../assets/img/eno-netral.png";
import orgMainBiola from "../assets/img/orang-main-biola.png";
import { useApiContext } from "../context/ApiProvider";
import { formatDate } from "../utility/dateFormat";

export const MyClass = () => {
  const { AppServices, URLs } = useApiContext();

  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const [courses, setCourses] = useState([
    {
      courseId: "",
      courseName: "",
      courseImage: "",
      courseSchedule: "",
      categoryId: "",
      categoryname: "",
      purchasePrice: 0,
    },
  ]);

  useEffect(() => {
    setCourses([]);

    let params = {
      PageSize: pageSize,
      CurrentPage: currentPage,
    };

    AppServices.getMyClass(params)
      .then((res) => {
        let result = res?.data;
        let items = result?.items;
        setCourses(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [AppServices, URLs, pageSize, currentPage]);

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
        {courses.map((course, i) => (
          <Box
            sx={{
              width: "100%",
              borderBottom: "1px solid #BDBDBD",
              paddingY: "1rem",
            }}
            key={i}
          >
            <ListClass
              key={i}
              id={course.courseId}
              name={course.courseName}
              category={course.categoryname}
              img={URLs.IMG_URL + course.courseImage}
              price={course.purchasePrice}
              schedule={formatDate(course.courseSchedule)}
            />
          </Box>
        ))}
      </Box>
      <Footer />
    </>
  );
};
