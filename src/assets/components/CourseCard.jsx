import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { rupiah } from "../../utility/formatIDR";
import { useApiContext } from "../../context/ApiProvider";

const CourseCard = ({ secureId, image, kategori, judul, harga }) => {
  const { URLs } = useApiContext();


  return (
    <Link to={"/course-details/" + secureId}>
      <Card
        sx={{
          maxWidth: 350,
          height: 400,
          boxShadow: "none",
          margin: "auto",
          borderRadius: "16px",
        }}
      >
        <CardMedia
          sx={{ height: { xs: 230, sm: 230, md: 240 }, borderRadius: "16px" }}
          image={URLs.IMG_URL + image}
          title={judul}
        />
        <CardContent>
          <Typography
            fontWeight={400}
            align="left"
            variant="body2"
            color="text.secondary"
          >
            {kategori}
          </Typography>
          <Typography
            fontWeight={600}
            align="left"
            gutterBottom
            variant="h6"
            component="div"
          >
            {judul}
          </Typography>
        </CardContent>
        <CardActions sx={{ position: "relative", bottom: 0, left: 0 }}>
          <Typography variant="h6" color={"#5D5FEF"} fontWeight={600}>
            {rupiah(harga)}
          </Typography>
        </CardActions>
      </Card>
    </Link>
  );
};

export default CourseCard;
