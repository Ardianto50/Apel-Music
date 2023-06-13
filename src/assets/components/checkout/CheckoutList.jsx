import {
  Button,
  Checkbox,
  Divider,
  Grid,
  List,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import eno from "../../img/eno-netral.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const CheckoutList = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <List sx={{ width: "100%" }}>
      <Stack direction="column">
        <Stack direction="row" alignItems="center">
          <Checkbox {...label} defaultChecked />
          <Grid item marginX={4}>
            <img src={eno} alt="Image" style={{ maxHeight: "150px" }} />
          </Grid>
          <Grid item>
            <Typography variant="h7">Drum</Typography>
            <Typography variant="h4">
              Kursus Drummer Special Coach (Eno Netral)
            </Typography>
            <Typography variant="h7">Jadwal : Senin, 25 Juli 2022</Typography>
            <Typography variant="h5">IDR 8.500.00</Typography>
          </Grid>
          <Grid justifyContent={"end"}>
            <Button variant="text" sx={{ color: "red" }}>
              <DeleteForeverIcon sx={{ marginRight: 1 }} />
              Delete
            </Button>
          </Grid>
        </Stack>
      </Stack>
      <Divider sx={{ marginY: 2 }} />
    </List>
  );
};
