import { Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import eno from "../../img/eno-netral.png";

export const ListClass = () => {
  return (
    <>
      <Grid
        container
        direction={{ md: "row", xs: "column" }}
        justifyContent={{ md: "start", xs: "center" }}
        md={12}
        marginY={1}
      >
        <Grid item container md={2} justifyContent={"center"}>
          <img src={eno} alt="Logo" style={{ height: 150 }} />
        </Grid>
        <Stack paddingX={3} maxHeight={150} justifyContent={"center"}>
          <Grid item>
            <Typography variant={"xs" ? "h7" : "h6"}>Drum</Typography>
          </Grid>
          <Grid item>
            <Typography variant={"xs" ? "h5" : "h4"}>
              Kursus Drummer Special Coach (Eno Netral)
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"xs" ? "h6" : "h5"}>
              Jadwal : Senin, 25 Juli 2022
            </Typography>
          </Grid>
        </Stack>
      </Grid>
      <Divider />
    </>
  );
};
