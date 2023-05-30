import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const AdCard = ({ header, text }) => {
  return (
    <Card
      sx={{
        borderRadius: "0.5rem",
        height: {
          md: "13rem",
          lg: "16rem",
        },
        width: "20rem",
        paddingY: "1.25rem",
        paddingX: "0.75rem",
        margin: "auto",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100%",
          gap: "1.25rem",
        }}
      >
        <Typography fontWeight={600} variant="h3" color={"#5D5FEF"}>
          {header}
        </Typography>
        <Typography fontWeight={600} variant="body1">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AdCard;
