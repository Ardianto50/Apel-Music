import { Card, CardMedia } from "@mui/material";
import React from "react";

const CourseCard = ({ image, kategori, judul, harga }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image="/static/images" title={judul} />
    </Card>
  );
};

export default CourseCard;
