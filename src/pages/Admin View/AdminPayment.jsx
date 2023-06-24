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
import { mainListItems } from "./listItems";
import { useEffect } from "react";
import axios, { Axios } from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { Group } from "@mui/icons-material";
import { useApiContext } from "../../context/ApiProvider";
import { useState } from "react";
import AppTable from "../../assets/components/AppTable";
import CommonDialog from "../../assets/components/dialogs/CommonDialog";
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

const PaymentList = ({ name, image }) => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"aqua"}
        marginY={1}
        paddingX={4}
      >
        <Stack alignItems={"center"} direction={"row"}>
          <img src={image} alt="" />
          <Typography variant="h6" paddingX={2}>
            {name}
          </Typography>
        </Stack>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#F2C94C",
              "&:hover": { bgcolor: "#FFCD38" },
            }}
          >
            Edit
          </Button>
        </Grid>
      </Stack>
    </>
  );
};

const DialogAdd = ({ open, onClose, onSave }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Payment Method</DialogTitle>
      <DialogContent sx={{ width: "50vh" }}>
        <Grid item marginY={2}>
          <TextField
            id="PaymentName"
            label="Payment Name"
            variant="outlined"
            fullWidth
            type="text"
          />
        </Grid>
        <Grid item marginY={2}>
          <TextField
            type="file"
            // onChange={handleImageChange}
            label="Select Image"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: "black" }}>
          Cancel
        </Button>
        <Button
          onClick={onSave}
          variant="contained"
          sx={{
            bgcolor: "#F2C94C",
            "&:hover": { bgcolor: "#FFCD38" },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default function AdminPayment() {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [data, setData] = React.useState([]);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [add, setAdd] = React.useState(false);

  const handleCloseAddPayment = () => {
    setAdd(false);
  };

  const columnTable = ["Image", "Name", "Active", "Action"];

  const [paymentRows, setPaymentRows] = useState([]);

  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const { AdminServices, URLs } = useApiContext();

  const [image, setImage] = useState(null);
  const [editImage, setEditImage] = useState(null);
  const [editedId, setEditedId] = useState("");
  const [paymentName, setPaymentName] = useState("");
  const [openAddPayment, setOpenAddPayment] = useState(false);
  const [openEditPayment, setOpenEditPayment] = useState(false);
  const [paymentActive, setPaymentActive] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({
    Name: [],
    Image: [],
  });

  const [nonFieldErrors, setNonFieldErrors] = useState(false);

  const convertPaymentToRow = (payment) => {
    return {
      Image: (
        <Box
          component={"img"}
          src={URLs.IMG_URL + payment?.image}
          sx={{
            height: { xs: "4rem", sm: "4rem", md: "3rem" },
            width: { xs: "4rem", sm: "4rem", md: "3rem" },
            borderRadius: "100%",
            margin: "auto",
          }}
        />
      ),
      Name: payment?.name,
      Status: (
        <Button
          variant="contained"
          color={payment?.inactive ? "error" : "success"}
          sx={{ width: "5rem" }}
        >
          {payment?.inactive ? "Inactive" : "Active"}
        </Button>
      ),
      Action: (
        <>
          <Button
            variant="contained"
            sx={{
              minWidth: "7rem",
            }}
            onClick={() => handleEdit(payment?.id)}
          >
            Edit
          </Button>
        </>
      ),
    };
  };

  // TODO: Rapihin lagi untuk semua validasi, termasuk yang dari user, sama tambahin add new course
  const prepareEditField = (paymentId) => {
    AdminServices.getPaymentDetail(paymentId)
      .then((res) => {
        let result = res?.data;
        setPaymentName(result?.name);
        setEditImage(URLs.IMG_URL + result?.image);
        setPaymentActive(!result?.inactive);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (paymentId) => {
    clearFields();
    setEditedId(paymentId);
    setOpenEditPayment(true);
    prepareEditField(paymentId);
  };

  const handleAdd = () => {
    setOpenAddPayment(true);
    clearFields();
  };

  const refreshPage = () => {
    AdminServices.getPaymentsAdmin()
      .then((res) => {
        let result = res?.data || [];
        let rows = result.map((payment) => convertPaymentToRow(payment));
        setPaymentRows(rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    refreshPage();
  }, [AdminServices, pageSize, currentPage]);

  const clearFields = () => {
    setEditedId("");
    setPaymentName("");
    setImage(null);
    setEditImage(null);
    setPaymentActive(false);
  };

  const clearErrorInfo = () => {
    setFieldErrors({
      Name: [],
      Image: [],
    });
    setNonFieldErrors(false);
  };

  const handleAddPayment = () => {
    clearErrorInfo();
    const payload = {
      name: paymentName,
      image,
    };
    AdminServices.addPayment(payload)
      .then((res) => {
        setOpenAddPayment(false);
        refreshPage();
      })
      .catch((err) => {
        console.log(err);
        const status = err.response?.status;
        if (status === 400) {
          const errors = err.response?.data?.errors;
          setFieldErrors({ ...fieldErrors, ...errors });
        }

        if (status > 400 && status < 500) {
          const errors = err?.response?.data;
          setNonFieldErrors(errors);
        }
      });
  };

  const handleEditPayment = () => {
    clearErrorInfo();
    const payload = {
      name: paymentName,
      image,
      inactive: !paymentActive,
    };
    AdminServices.editPayment(editedId, payload)
      .then((res) => {
        setOpenEditPayment(false);
        refreshPage();
        clearFields();
      })
      .catch((err) => {
        console.log(err);
        const status = err.response?.status;
        if (status === 400) {
          const errors = err.response?.data?.errors;
          setFieldErrors({ ...fieldErrors, ...errors });
        }

        if (status > 400 && status < 500) {
          const errors = err?.response?.data;
          setNonFieldErrors(errors);
        }
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{ bgcolor: "#F2C94C" }}>
          <Toolbar
            sx={{
              pr: "24px",
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
              <Grid sx={{ padding: "0.75rem" }} item xs={12} md={12} lg={12}>
                <Grid
                  item
                  container
                  justifyContent={"space-between"}
                  md={12}
                  marginY={3}
                >
                  <Typography variant="h4">
                    Payment Method Management
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleAdd}
                    sx={{
                      bgcolor: "#F2C94C",
                      "&:hover": { bgcolor: "#FFCD38" },
                    }}
                  >
                    Add Payment
                  </Button>
                  <DialogAdd
                    open={add}
                    onClose={handleCloseAddPayment}
                    onSave={handleCloseAddPayment}
                  />
                </Grid>
                <AppTable columnsLabel={columnTable} rows={paymentRows} />
              </Grid>

              {/* Recent Deposits */}
              {/* Recent Orders */}
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

      {/* START: Form Edit Payment */}
      <CommonDialog
        open={openEditPayment}
        onClose={() => setOpenEditPayment(false)}
        onSubmit={handleEditPayment}
        title={"Edit Payment "}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "0.75rem",
            gap: 5,
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            type="text"
            fullWidth
            value={paymentName}
            onChange={(e) => setPaymentName(e.target.value)}
          />
          <Box
            component={"img"}
            src={
              typeof editImage == "string" || editImage == null
                ? editImage
                : URL.createObjectURL(editImage)
            }
            sx={{
              height: "5rem",
              width: "5rem",
              minHeight: "4rem",
              border: "1px solid gray",
              borderRadius: "0.5rem",
            }}
          />
          <TextField
            variant="outlined"
            type="file"
            fullWidth
            onChange={(e) => setEditImage(e.currentTarget.files[0])}
          />
          <Box marginY={2}>
            <Switch
              checked={paymentActive}
              onClick={() => setPaymentActive(!paymentActive)}
              color="primary"
            />
            {paymentActive ? "Active" : "Inactive"}
          </Box>
        </Box>
      </CommonDialog>
      {/* END: Handle edit payment */}

      {/* START: Handle add payment */}
      <CommonDialog
        open={openAddPayment}
        onClose={() => setOpenAddPayment(false)}
        onSubmit={handleAddPayment}
        title={"Tambah payment method"}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "0.75rem",
            gap: 5,
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            type="text"
            fullWidth
            value={paymentName}
            onChange={(e) => setPaymentName(e.target.value)}
          />
          <Box
            component={"img"}
            src={image && URL.createObjectURL(image)}
            sx={{
              height: "5rem",
              width: "5rem",
              minHeight: "4rem",
              border: "1px solid gray",
              borderRadius: "0.5rem",
            }}
          />
          <TextField
            variant="outlined"
            type="file"
            fullWidth
            onChange={(e) => setImage(e.currentTarget.files[0])}
          />
        </Box>
      </CommonDialog>
      {/* START: Handle add payment */}
    </ThemeProvider>
  );
}
