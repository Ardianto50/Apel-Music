import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const AdCard = ({ header, text }) => {
  return (
    <Card
      className="h-52 lg:h-64 w-80 py-5 px-3 rounded-lg"
      sx={{
        borderRadius: 5,
      }}
    >
      <CardContent className="flex flex-col justify-evenly h-full gap-5 items-center">
        <Typography fontFamily={"poppins"} variant="h3" color={"#5D5FEF"}>
          {header}
        </Typography>
        <Typography fontFamily={"poppins"} fontWeight={600} variant="body1">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AdCard;
