import React, { useEffect, useRef, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Typography,
} from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import { useApiContext } from "../context/ApiProvider";
import { formatDate } from "../utility/dateFormat";

const CheckoutList = ({
  id,
  img,
  category,
  name,
  schedule,
  price,
  onCheck,
  isChecked,
  onDelete,
}) => {
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
          checked={isChecked}
          onClick={() => {
            onCheck(id, isChecked);
          }}
          sx={{ placeSelf: { xs: "start", sm: "start", md: "center" } }}
        />
        <ListClass {...{ img, category, name, schedule, price }} />
      </Box>
      <Button
        sx={{ color: "red" }}
        variant="text"
        startIcon={<DeleteForeverIcon color="red" />}
        onClick={() => {
          onDelete([id]);
          console.log(id);
        }}
      >
        Delete
      </Button>
    </Box>
  );
};

export const Checkout = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const [carts, setCarts] = useState([
    {
      id: "",
      userId: "",
      courseId: "",
      courseSchedule: "",
      course: {
        id: "",
        name: "",
        price: 0,
        imageName: "",
        category: {
          id: "",
          name: "",
        },
      },
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [checkedItems, setCheckedItems] = useState([]);

  const [checkAll, setCheckAll] = useState();

  const [paymentId, setPaymentId] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let temp = 0;
    checkedItems.forEach((val) => {
      let obj = carts.find((x) => x.id === val);
      temp += obj.course.price;
    });
    setTotalPrice(temp);

    // Ketika semua di check maka checkAll akan otomatis true
    if (checkedItems.length === carts.length) {
      setCheckAll(true);
      checkAllRef.current.click();
    }
  }, [carts, checkedItems]);

  const handleCheck = (id, isChecked) => {
    if (!isChecked) {
      setCheckedItems([...checkedItems, id]);
    } else {
      let temp = checkedItems.filter((x) => x !== id);
      setCheckedItems(temp);
    }
  };

  const isChecked = (id) => {
    let val = checkedItems.findIndex((x) => x === id);
    return val > -1;
  };

  const checkAllRef = useRef(null);

  const handleCheckAll = () => {
    if (carts.length !== checkedItems.length) {
      // Kalo belum ter cek semua, baru bisa dicek semua, tapi kalo sudah, uncek semua
      let checkedIds = carts.map((c) => c.id);
      setCheckedItems(checkedIds);
    } else {
      setCheckedItems([]);
    }
  };

  useEffect(() => {
    console.log(checkAll, "checkAll");
  }, [checkAll]);

  const { AppServices, URLs } = useApiContext();

  const [renderCarts, setRenderCarts] = useState(true);

  useEffect(() => {
    AppServices.getCarts()
      .then((res) => {
        // console.log(res.data);
        let result = res.data;
        setCarts(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [AppServices, renderCarts]);

  const handlePayment = () => {
    setDialogOpen(true);
  };

  const onSubmit = () => {
    setIsLoading(true);
    // navigate("/success-purchase");
    let purchaseDate = new Date().toISOString();
    AppServices.checkout(paymentId, purchaseDate, checkedItems)
      .then((res) => {
        navigate("/success-purchase");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    console.log(paymentId);
  };

  const handleDelete = (ids) => {
    AppServices.deleteCart(ids)
      .then((res) => {
        console.log(res);
        setRenderCarts(!renderCarts);
      })
      .catch((err) => {
        console.log(err);
      });
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
          <Checkbox
            ref={checkAllRef}
            onChange={(e) => {
              handleCheckAll();
            }}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography
            fontSize={"1.25rem"}
            lineHeight={"1.875rem"}
            fontWeight={400}
          >
            Pilih Semua
          </Typography>
        </Box>

        {/* List course */}
        {carts.map((data, i) => (
          <CheckoutList
            id={data.id}
            img={data.course.imageName && URLs.IMG_URL + data.course.imageName}
            category={data.course.category.name}
            name={data.course.name}
            price={data.course.price}
            schedule={formatDate(data.courseSchedule)}
            onCheck={handleCheck}
            isChecked={isChecked(data.id)}
            onDelete={handleDelete}
            key={i}
          />
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
            {rupiah(totalPrice)}
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
        onSubmit={onSubmit}
        setPaymentId={setPaymentId}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={() => setIsLoading(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
