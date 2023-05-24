import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const AdCard = ({ header, text }) => {
  return (
    <Card className="h-48 lg:h-52 w-72 py-5 px-3">
      <CardContent className="flex flex-col gap-5 items-center">
        <Typography variant="h3" color={"#5D5FEF"}>
          {header}
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default AdCard;
