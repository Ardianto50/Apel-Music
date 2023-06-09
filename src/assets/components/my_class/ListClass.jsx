import React from "react";
import eno from "../../img/eno-netral.png";
import { Box, Typography } from "@mui/material";

export const ListClass = ({ img, category, name, schedule }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: "2rem",
          margin: "0.5rem",
        }}
      >
        <Box
          component={"img"}
          src={img}
          width={{ xs: "100%", sm: "100%", md: "200px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "0.5rem",
            width: "100%",
          }}
        >
          <Typography
            color={"#828282"}
            fontWeight={400}
            fontSize={"1rem"}
            lineHeight={"1.5rem"}
          >
            {category}
          </Typography>
          <Typography
            fontWeight={600}
            fontSize={"1.5rem"}
            lineHeight={"2.25rem"}
            component={"a"}
            href="/course-details/courseIdfdskldf"
          >
            {name}
          </Typography>
          <Typography
            color={"#5D5FEF"}
            fontWeight={400}
            fontSize={"1.25rem"}
            lineHeight={"1.875rem"}
          >
            {schedule}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
