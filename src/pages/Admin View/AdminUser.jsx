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
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Switch,
} from "@mui/material";
import AppTable from "../../assets/components/AppTable";
import axios from "axios";
import { useState } from "react";
import { useApiContext } from "../../context/ApiProvider";
import CommonDialog from "../../assets/components/dialogs/CommonDialog";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
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

export default function AdminUser() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const { AdminServices, URLs } = useApiContext();

  const [users, setUsers] = useState([
    {
      id: "",
      fullName: "",
      email: "",
      inactive: "",
      createdAt: "",
      verifiedAt: null,
    },
  ]);

  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const [userRows, setUserRows] = useState([]);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [editedId, setEditedId] = useState("");
  const [eFullName, setEFullname] = useState("");
  const [eEmail, setEEmail] = useState("");
  const [ePassword, setEPassword] = useState("");
  const [eConfirmPassword, setEConfirmPassword] = useState("");
  const [eActive, setEActive] = useState(false);

  const [openAddForm, setOpenAddForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openChagePassword, setOpenChangePassword] = useState(false);

  const handleAddUsers = () => {
    setOpenAddForm(true);
  };

  const [fieldErrors, setFieldErrors] = useState({
    FullName: [],
    Email: [],
    Password: [],
    ConfirmPassword: [],
  });

  const [nonFieldErrors, setNonFieldErrors] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const convertUserToRow = (user) => {
    return {
      Name: user?.fullName,
      Email: user?.email,
      Status: (
        <Button
          variant="contained"
          color={user?.inactive ? "error" : "success"}
          sx={{ width: "5rem" }}
        >
          {user?.inactive ? "Inactive" : "Active"}
        </Button>
      ),
      Action: (
        <>
          <Button
            variant="contained"
            sx={{
              minWidth: "7rem",
            }}
            onClick={() => handleEdit(user?.id)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            sx={{
              minWidth: "4rem",
              marginLeft: "0.5rem",
            }}
            onClick={() => handleChangePassword(user?.id)}
          >
            New Pass
          </Button>
        </>
      ),
    };
  };

  const refreshPage = () => {
    let params = {
      PageSize: pageSize,
      CurrentPage: currentPage,
    };

    AdminServices.getUsers(params)
      .then((res) => {
        let result = res.data.items;
        let rows = [];
        if (result) {
          rows = result?.map((val) => convertUserToRow(val));
        }
        // TODO: lanjut bikin course add
        setUserRows(rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    let params = {
      PageSize: pageSize,
      CurrentPage: currentPage,
    };

    AdminServices.getUsers(params)
      .then((res) => {
        let result = res.data.items;
        let rows = [];
        if (result) {
          rows = result?.map((val) => convertUserToRow(val));
        }
        setUserRows(rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [AdminServices, pageSize, currentPage]);

  const handleEditUser = () => {
    clearErrorInfo();
    setIsLoading(false);

    const params = {
      fullName: eFullName,
      inactive: !eActive,
    };

    AdminServices.editUser(editedId, params)
      .then((res) => {
        let result = res?.data;
        refreshPage();
        setOpenEditForm(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // untuk set setiap field pada edit form dengan property dari user yang akan diedit
  const prepareEditField = (id) => {
    AdminServices.getUserDetail(id)
      .then((res) => {
        let result = res?.data;
        setEFullname(result?.fullName);
        setEEmail(result?.email);
        setEActive(result?.inactive == null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    clearEditFormFields();
    clearErrorInfo();
    setEditedId(id);
    setOpenEditForm(true);

    prepareEditField(id);
  };

  const handleChangePassword = (id) => {
    setEditedId(id);

    clearEditFormFields();
    clearErrorInfo();
    setOpenChangePassword(true);
    prepareEditField(id);
  };

  const handleChangePasswordUser = (id) => {
    clearErrorInfo();
    setIsLoading(false);

    const params = {
      password: ePassword,
      confirmPassword: eConfirmPassword,
    };

    AdminServices.editUserPassword(editedId, params)
      .then((res) => {
        let result = res?.data;
        setOpenChangePassword(false);
        refreshPage();
      })
      .catch((err) => {
        const status = err.response.status;
        if (status === 400) {
          const errors = err.response.data.errors;
          setFieldErrors({ ...fieldErrors, ...errors });
        }

        if (status > 400 && status < 500) {
          const errors = err?.response?.data;
          setNonFieldErrors(errors);
        }
      });
  };

  const handleAddUser = () => {
    clearErrorInfo();
    setIsLoading(false);

    AdminServices.addUser(fullName, email, password, confirmPassword)
      .then((res) => {
        setOpenAddForm(false);
        clearAddFormFields();
        setTimeout(() => {
          refreshPage();
        }, 2000);
      })
      .catch((err) => {
        // console.log(err);
        const status = err.response.status;
        if (status === 400) {
          const errors = err.response.data.errors;
          setFieldErrors({ ...fieldErrors, ...errors });
        }

        if (status > 400 && status < 500) {
          const errors = err?.response?.data;
          setNonFieldErrors(errors);
        }
      });
  };

  const clearAddFormFields = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const clearEditFormFields = () => {
    setEFullname("");
    setEEmail("");
    setEPassword("");
    setEConfirmPassword("");
  };

  const clearErrorInfo = () => {
    setFieldErrors({
      FullName: [],
      Email: [],
      Password: [],
      ConfirmPassword: [],
    });
    setNonFieldErrors(false);
  };

  const columnTable = ["Name", "Email", "Status", "Action"];

  const goLeft = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goRight = () => {
    if (userRows.length === pageSize) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={openDrawer}
          sx={{ bgcolor: "#F2C94C" }}
        >
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
                ...(openDrawer && { display: "none" }),
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
            <IconButton href="/" color="inherit">
              <HomeIcon />
            </IconButton>
            <IconButton href="/logout" color="inherit">
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={openDrawer}>
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
                  <Typography variant="h4">Users Management</Typography>
                  <Button
                    variant="contained"
                    onClick={handleAddUsers}
                    sx={{
                      bgcolor: "#F2C94C",
                      "&:hover": { bgcolor: "#FFCD38" },
                    }}
                  >
                    Add User
                  </Button>
                </Grid>

                {/* START: MAIN TABLE */}
                <AppTable rows={userRows} columnsLabel={columnTable} />
                {/* END: MAIN TABLE */}

                {/* START: PAGINATION */}
                <Box
                  sx={{
                    width: "200px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    height: "50px",
                    margin: "auto",
                    marginTop: "0.75rem",
                  }}
                >
                  <Button variant="outlined" onClick={goLeft}>
                    <ChevronLeftIcon />
                  </Button>
                  <Button variant="outlined" onClick={goRight}>
                    <ChevronRightIcon />
                  </Button>
                </Box>
                {/* END: PAGINATION */}
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
      {/* START: Add Form Dialog */}
      <CommonDialog
        open={openAddForm}
        onClose={() => setOpenAddForm(false)}
        onSubmit={handleAddUser}
        title={"Add User"}
      >
        <Grid item marginY={2}>
          <TextField
            id="Username"
            label="User Name"
            variant="outlined"
            type="text"
            fullWidth
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={fieldErrors.FullName.length !== 0}
            helperText={fieldErrors.FullName[0]}
          />
        </Grid>
        <Grid item marginY={2}>
          <TextField
            id="Email"
            label="Email"
            variant="outlined"
            type="text"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={fieldErrors.Email.length !== 0}
            helperText={fieldErrors.Email[0]}
          />
        </Grid>
        <Grid item marginY={2}>
          <TextField
            id="Password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={fieldErrors.Password.length !== 0}
            helperText={fieldErrors.Password[0]}
          />
        </Grid>
        <Grid item marginY={2}>
          <TextField
            id="ConfirmPassword"
            label="Confirm Password"
            variant="outlined"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={fieldErrors.ConfirmPassword.length !== 0}
            helperText={fieldErrors.ConfirmPassword[0]}
          />
        </Grid>
      </CommonDialog>
      {/* START: Add Form Dialog */}

      <CommonDialog
        open={openEditForm}
        onClose={() => setOpenEditForm(false)}
        onSubmit={handleEditUser}
        title={"Edit User : " + eEmail}
      >
        <Grid item marginY={2}>
          <TextField
            id="Username"
            label="User Name"
            variant="outlined"
            type="text"
            fullWidth
            value={eFullName}
            onChange={(e) => setEFullname(e.target.value)}
            error={fieldErrors.FullName.length !== 0}
            helperText={fieldErrors.FullName[0]}
          />
        </Grid>
        <Grid item marginY={2}>
          <Switch
            checked={eActive}
            onClick={() => setEActive(!eActive)}
            color="primary"
          />
          {eActive ? "Active" : "Inactive"}
        </Grid>
      </CommonDialog>
      <CommonDialog
        open={openChagePassword}
        onClose={() => setOpenChangePassword(false)}
        onSubmit={handleChangePasswordUser}
        title={"Change Password user : " + eEmail}
      >
        <Grid item marginY={2}>
          <TextField
            id="Password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={ePassword}
            onChange={(e) => setEPassword(e.target.value)}
            error={fieldErrors.Password.length !== 0}
            helperText={fieldErrors.Password[0]}
          />
        </Grid>
        <Grid item marginY={2}>
          <TextField
            id="ConfirmPassword"
            label="Confirm Password"
            variant="outlined"
            type="password"
            fullWidth
            value={eConfirmPassword}
            onChange={(e) => setEConfirmPassword(e.target.value)}
            error={fieldErrors.ConfirmPassword.length !== 0}
            helperText={fieldErrors.ConfirmPassword[0]}
          />
        </Grid>
      </CommonDialog>
    </>
  );
}
