import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import paymentGopay from "../../img/payment-gopay.png";
import paymentOvo from "../../img/payment-ovo.png";
import paymentDana from "../../img/payment-dana.png";
import paymentMandiri from "../../img/payment-mandiri.png";
import paymentBca from "../../img/payment-bca.png";
import paymentBni from "../../img/payment-bni.png";
import { v4 as uuid } from "uuid";
import { blue } from "@mui/material/colors";

const PaymentListItem = ({ id, logo, name, choosen, setChoosen }) => {
  const [isChoosen, setIsChoosen] = useState(false);

  useEffect(() => {
    setIsChoosen(choosen === id);
  }, [choosen]);

  return (
    <>
      <ListItem
        sx={{
          padding: "0.5rem",
          cursor: "pointer",
        }}
        style={{
          backgroundColor: `${isChoosen ? "#BDBDBD" : "#FFFFFF"}`,
          borderRadius: "1rem",
        }}
        disableGutters
        onClick={() => {
          setChoosen(id);
        }}
      >
        <ListItemAvatar>
          <Box
            component={"img"}
            src={logo}
            sx={{
              height: "2.5rem",
              width: "2.5rem",
              borderRadius: "100%",
            }}
          />
        </ListItemAvatar>
        <ListItemText primary={name} />
      </ListItem>
    </>
  );
};

const PaymentDialog = ({ open, handleClose }) => {
  const [choosen, setChoosen] = useState("");

  const paymentMethods = [
    {
      id: "760ed4cc-0f9a-4844-953b-102d675cdc76",
      logo: paymentGopay,
      name: "Gopay",
    },
    {
      id: "61cafab2-41e1-42c6-8fb7-75c11a6ab571",
      logo: paymentOvo,
      name: "OVO",
    },
    {
      id: "48ab0258-4831-40b7-ab1c-32819117c8b6",
      logo: paymentDana,
      name: "DANA",
    },
    {
      id: "73a00105-ac29-4fb8-ba37-fc5f414a56fc",
      logo: paymentMandiri,
      name: "Mandiri",
    },
    {
      id: "8ea6996a-89ae-439a-9947-3c2c5adf32ed",
      logo: paymentBca,
      name: "BCA",
    },
    {
      id: "ec6a89b1-0a22-4f3a-b034-ba071adadae6",
      logo: paymentBni,
      name: "BNI",
    },
  ];

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <Box sx={{ padding: "1rem", borderRadius: "1rem" }}>
          <DialogTitle>Pilih Metode Pembayaran</DialogTitle>
          <List sx={{ pt: 0 }}>
            {paymentMethods.map((payment, i) => (
              <PaymentListItem
                {...payment}
                key={i}
                choosen={choosen}
                setChoosen={setChoosen}
              />
            ))}
          </List>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "0.75rem",
            }}
          >
            <Button variant="outlined" fullWidth onClick={handleClose}>
              Batal
            </Button>
            <Button variant="contained" fullWidth>
              Bayar
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default PaymentDialog;
