import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

const isObject = (value) => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const TableCard = ({ labels, datas }) => {
  return (
    <React.Fragment>
      <Card
        sx={{
          width: "100%",
          margin: "auto",
          borderRadius: "16px",
        }}
      >
        <CardHeader sx={{ backgroundColor: "#F2C94C" }} />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingX: "2rem",
          }}
        >
          {Object.values(datas).map((field, i) => (
            <React.Fragment key={i}>
              {isObject(field) ? (
                // Jika field adalah komponen maka akan langsung dimasukkan ke dalam card
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  {field}
                </Box>
              ) : (
                // Jika field adalah string biasa maka akan dimasukkan kedalam typography
                <Box>
                  <Typography
                    sx={{
                      color: "#4F4F4F",
                      fontSize: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    {labels[i]} :
                  </Typography>
                  <Typography
                    sx={{
                      color: "#4F4F4F",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    {field}
                  </Typography>
                </Box>
              )}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

// TODO: Lanjut untuk card buat table versi mobile
const AppTableMobile = ({ columnsLabel, rows }) => {
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "flex", md: "none" },
        flexDirection: "column",
        gap: "3rem",
        width: "100%",
        maxWidth: "500px",
        marginX: "auto",
      }}
    >
      {rows.map((row, key) => (
        <TableCard datas={row} labels={columnsLabel} key={key} />
      ))}
    </Box>
  );
};

export default AppTableMobile;
