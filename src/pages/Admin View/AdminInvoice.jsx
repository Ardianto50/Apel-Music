import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import * as React from "react";
import { rupiah } from "../../utility/formatIDR";
import { mainListItems } from "./listItems";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import AppTable from "../../assets/components/AppTable";
import { useState } from "react";
import { useEffect } from "react";
import { useApiContext } from "../../context/ApiProvider";
import { formatDate } from "../../utility/dateFormat";
// import Chart from "./Chart";
// import Deposits from "./Deposits";
// import Orders from "./Orders";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Apel Music
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AdminInvoice() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [add, setAdd] = React.useState(false);

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

  const { AdminServices, URLs } = useApiContext();

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
    AdminServices.getAdminInvoices(params)
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
  }, [AdminServices, pageSize, currentPage]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{ bgcolor: "#F2C94C" }}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Admin Dashboard
            </Typography>
            <IconButton color="inherit">
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Grid
                  item
                  container
                  justifyContent={"space-between"}
                  md={12}
                  marginY={3}
                >
                  <Typography variant="h4">Invoices</Typography>
                </Grid>

                {/* <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: " auto",
                  }}
                > */}
                <AppTable rows={invoiceRows} columnsLabel={columnsLabel} />
                {/* </Paper> */}
              </Grid>

              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  {/* <Orders /> */}
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
