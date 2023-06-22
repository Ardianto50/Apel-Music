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
import { useApiContext } from "../../../context/ApiProvider";

const PaymentListItem = ({ id, image, name, choosen, setChoosen }) => {
  const [isChoosen, setIsChoosen] = useState(false);

  useEffect(() => {
    setIsChoosen(choosen === id);
  }, [choosen, id]);

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
            src={image}
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

const PaymentDialog = ({ open, handleClose, onSubmit, setPaymentId }) => {
  const [choosen, setChoosen] = useState("");

  useEffect(() => {
    setPaymentId(choosen);
  }, [choosen, setPaymentId]);

  const { AppServices, URLs } = useApiContext();

  const [methods, setMethods] = useState([
    {
      id: "",
      image: "",
      name: "",
    },
  ]);

  useEffect(() => {
    AppServices.getPaymentMethods()
      .then((res) => {
        setMethods(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [AppServices]);

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <Box sx={{ padding: "1rem", borderRadius: "1rem" }}>
          <DialogTitle>Pilih Metode Pembayaran</DialogTitle>
          <List sx={{ pt: 0 }}>
            {methods.map((payment, i) => (
              <PaymentListItem
                {...payment}
                image={URLs.IMG_URL + payment.image}
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
            <Button onClick={onSubmit} variant="contained" fullWidth>
              Bayar
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default PaymentDialog;
