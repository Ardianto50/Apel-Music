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
  Stack,
  TextField,
} from "@mui/material";
import { Group } from "@mui/icons-material";
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

export default function AdminPayment() {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [data, setData] = React.useState([]);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [add, setAdd] = React.useState(false);

  const handleAddUsers = () => {
    setAdd(true);
  };

  const handleCloseAddUsers = () => {
    setAdd(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const Payment = [
    {
      Name: "Nama Payment1",
      Img: "https://localhost:7076/api/Image/GetImage/46a900bd-b3d2-44af-9bf7-212585d0e5c0.png",
    },
    {
      Name: "Nama Payment2",
      Img: "https://localhost:7076/api/Image/GetImage/1c1fc650-e489-4c46-ab27-98b7b891f4a1.png",
    },
    {
      Name: "Nama Payment2",
      Img: "https://localhost:7076/api/Image/GetImage/1c1fc650-e489-4c46-ab27-98b7b891f4a1.png",
    },
  ];

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7076/api/Payment/GetAllPayment"
        );
        setData(response.data);
        console.log("test");
      } catch {
        console.log(Error);
      }
    };

    fecthData();
  }, []);

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
              <Grid item xs={12} md={12} lg={12}>
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
                    onClick={handleAddUsers}
                    sx={{
                      bgcolor: "#F2C94C",
                      "&:hover": { bgcolor: "#FFCD38" },
                    }}
                  >
                    Add Payment
                  </Button>

                  <Dialog open={add} onClose={handleCloseAddUsers}>
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
                          onChange={handleImageChange}
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
                      <Button
                        onClick={handleCloseAddUsers}
                        sx={{ color: "black" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleCloseAddUsers}
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
                </Grid>

                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  {Payment.map((value, index) => (
                    <Box
                      key={index}
                      marginX={3}
                      height={"7vh"}
                      flexDirection="column"
                      alignItems={"center"}
                    >
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Stack alignItems={"center"} direction={"row"}>
                          <img src={value.Img} alt="" />
                          <Typography variant="h6" paddingX={2}>
                            {value.Name}
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
                    </Box>
                  ))}
                </Paper>
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
    </ThemeProvider>
  );
}
