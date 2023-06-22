import React, { useEffect, useState } from "react";
import Navbar from "../assets/components/Navbar";
import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import Footer from "../assets/components/Footer";
import AppCrumbs from "../assets/components/AppCrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AppTable from "../assets/components/AppTable";
import { rupiah } from "../utility/formatIDR";
import AppTableMobile from "../assets/components/AppTableMobile";
import { useApiContext } from "../context/ApiProvider";
import { formatDate } from "../utility/dateFormat";

// MAIN COMPONENT
const MenuInvoices = () => {
  const data = [
    {
      No: 1,
      NoInvoice: "APM00003",
      TglBeli: "12 Juni 2022",
      JmlKursus: 2,
      TotalHarga: rupiah(11_500_000),
      Btn: (
        <>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "180px",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            Rincian
          </Button>
        </>
      ),
    },
    {
      No: 2,
      NoInvoice: "APM00002",
      TglBeli: "05 Februari 2022",
      JmlKursus: 1,
      TotalHarga: rupiah(4_000_000),
      Btn: (
        <>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "180px",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            Rincian
          </Button>
        </>
      ),
    },
    {
      No: 3,
      NoInvoice: "APM00001",
      TglBeli: "30 Agustus 2021",
      JmlKursus: 1,
      TotalHarga: rupiah(2_400_000),
      Btn: (
        <>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "180px",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            Rincian
          </Button>
        </>
      ),
    },
  ];

  const columnsLabel = [
    "No",
    "No. Invoice",
    "Tanggal Beli",
    "Jumlah Kursus",
    "Total Harga",
    "Action",
  ];

  const [invoices, setInvoices] = useState([
    {
      id: 0,
      invoiceNumber: "",
      userId: "",
      purchaseDate: "",
      quantity: 0,
      totalPrice: 0,
      paymentId: "",
      payment: {
        id: "",
        image: null,
        name: "",
        inactive: "",
      },
    },
  ]);

  const [invoiceRows, setInvoiceRows] = useState([
    {
      No: 0,
      NoInvoice: "",
      TglBeli: "",
      JmlKursus: 0,
      TotalHarga: rupiah(0),
      Btn: (
        <>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "180px",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: 500,
            }}
            href="/invoice/rincian-invoice/"
          >
            Rincian
          </Button>
        </>
      ),
    },
  ]);

  const { AppServices, URLs } = useApiContext();

  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const convertInvoiceToRows = (invoice) => {
    return {
      No: invoice?.id,
      NoInvoice: invoice?.invoiceNumber,
      TglBeli: formatDate(invoice?.purchaseDate),
      JmlKursus: invoice?.quantity,
      TotalHarga: rupiah(invoice?.totalPrice),
      Btn: (
        <>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "180px",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: 500,
            }}
            href={"/invoice/rincian-invoice/" + invoice?.id}
          >
            Rincian
          </Button>
        </>
      ),
    };
  };

  useEffect(() => {
    setInvoiceRows([]);
    setInvoices([]);
    let params = {
      PageSize: pageSize,
      CurrentPage: currentPage,
    };
    AppServices.getUserInvoices(params)
      .then((res) => {
        let result = res.data.items;
        if (result) {
          let rows = result.map((inv) => convertInvoiceToRows(inv));
          setInvoiceRows(rows);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [AppServices, pageSize, currentPage]);

  return (
    <>
      <Navbar isLoggedIn={true} />
      <Box
        sx={{
          padding: "0.75rem",
          maxWidth: "2000px",
          marginX: "auto",
          paddingX: { xs: "1.5rem", sm: "1.5rem", md: "3rem", lg: "5rem" },
          marginY: "2rem",
          marginBottom: "15rem",
          display: "flex",
          flexDirection: "column",
          gap: "2.25rem",
        }}
      >
        <AppCrumbs />
        <Typography
          sx={{
            color: "#4F4F4F",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Menu Invoice
        </Typography>
        {/* START Table */}
        <AppTable rows={invoiceRows} columnsLabel={columnsLabel} />
        {/* END Table */}
      </Box>
      <Footer />
    </>
  );
};

export default MenuInvoices;
