import React, { useState } from "react";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import Navbar from "../assets/components/Navbar";
import { ListClass } from "../assets/components/my_class/ListClass";
import Footer from "../assets/components/Footer";
import eno from "../assets/img/eno-netral.png";
import orgMainBiola from "../assets/img/orang-main-biola.png";
import orgMainDrum from "../assets/img/expert-level-drum-class.png";
import saxophone from "../assets/img/saxophone.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { rupiah } from "../utility/formatIDR";
import PaymentDialog from "../assets/components/dialogs/PaymentDialog";

const CheckoutList = ({ isCheck, img, category, name, schedule }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        width: "100%",
        maxWidth: "1920px",
        borderBottom: "1px solid #BDBDBD",
        paddingY: "1rem",
        paddingX: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          width: "100%",
        }}
      >
        <Checkbox
          sx={{ placeSelf: { xs: "start", sm: "start", md: "center" } }}
          checked={isCheck}
        />
        <ListClass {...{ img, category, name, schedule }} />
      </Box>
      <Button
        sx={{ color: "red" }}
        variant="text"
        startIcon={<DeleteForeverIcon color="red" />}
      >
        Delete
      </Button>
    </Box>
  );
};

export const Checkout = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const dummyData = [
    {
      isCheck: true,
      img: eno,
      category: "Drum",
      name: "Kursus Drummer Special Coach (Eno Netral)",
      schedule: "Senin, 25 Juli 2022",
    },
    {
      isCheck: true,
      img: orgMainBiola,
      category: "Biola",
      name: "Biola Mid-Level Course",
      schedule: "Sabtu, 23 Juli 2022",
    },
    {
      isCheck: false,
      img: orgMainDrum,
      category: "Drum",
      name: "Expert Level Drummer Lessons",
      schedule: "Sabtu, 23 Juli 2022",
    },
    {
      isCheck: false,
      img: saxophone,
      category: "Saxophone",
      name: "Expert Level Saxophone",
      schedule: "Sabtu, 23 Juli 2022",
    },
  ];

  const handlePayment = () => {
    setDialogOpen(true);
  };

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
          paddingX: { xs: "0.5rem", sm: "0.5rem", md: "3rem", lg: "5rem" },
          paddingY: "3rem",
          minHeight: "80vh",
          marginX: "auto",
          marginBottom: "5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
            maxWidth: "1920px",
            borderBottom: "1px solid #BDBDBD",
            paddingY: "1rem",
            paddingX: "1rem",
          }}
        >
          <Checkbox />
          <Typography
            fontSize={"1.25rem"}
            lineHeight={"1.875rem"}
            fontWeight={400}
          >
            Pilih Semua
          </Typography>
        </Box>

        {/* List course */}
        {dummyData.map((data, i) => (
          <CheckoutList {...data} key={i} />
        ))}
        {/* End List course */}
      </Box>

      {/* Start: Total Pembayaran dan Pembayaran */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: "0.5rem",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingX: "2rem",
          paddingY: "1rem",
          borderTop: "1px solid #BDBDBD",
          minHeight: "104px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
            paddingX: "2rem",
          }}
        >
          <Typography fontSize={"1.125rem"} fontWeight={400}>
            Total Biaya
          </Typography>
          <Typography
            fontSize={"1.5rem"}
            lineHeight={"2.25rem"}
            color={"#5D5FEF"}
          >
            {rupiah(11_500_000)}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            paddingX: "2rem",
            paddingY: "0.5rem",
            borderRadius: "0.5rem",
            width: { xs: "100%", sm: "100%", md: "210px" },
          }}
          onClick={handlePayment}
        >
          Bayar Sekarang
        </Button>
      </Box>
      {/* End: Total Pembayaran dan Pembayaran */}
      <PaymentDialog
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
      />
    </>
  );
};
