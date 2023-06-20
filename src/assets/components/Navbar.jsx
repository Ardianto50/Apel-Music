import AppleIcon from "@mui/icons-material/Apple";
import {
  AppBar,
  Button,
  Stack,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useApiContext } from "../../context/ApiProvider";
import { useEffect } from "react";
import AlertDialog from "./dialogs/AlertDialog";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [alreadyLogin, setAlreadyLogin] = useState(false);

  const { AuthServices } = useApiContext();

  useEffect(() => {
    const result = AuthServices.isLoggedIn();
    setAlreadyLogin(result);
  }, [AuthServices]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [confirmLogout, setConfirmLogout] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  const handleConfirm = () => {
    setConfirmLogout(true);
  };

  // Menu navbar untuk screen size md-xl
  const ComponentMenuPC = () => {
    return (
      <>
        {alreadyLogin ? (
          <>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {/* App Menu */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: 3,
                }}
              >
                <Button href="/checkout" variant="text" sx={{ color: "black" }}>
                  <ShoppingCartIcon />
                </Button>
                <Button
                  href="/my-class"
                  variant="text"
                  sx={{ color: "black", fontWeight: 700 }}
                >
                  Kelasku
                </Button>
                <Button
                  href="/invoice"
                  variant="text"
                  sx={{ color: "black", fontWeight: 700 }}
                >
                  Pembelian
                </Button>
              </Box>
              {/* End App Menu */}

              {/* Separator */}
              <Box
                sx={{
                  width: 1.5,
                  borderRadius: 1,
                  backgroundColor: "black",
                  height: 20,
                  marginLeft: 1.5,
                }}
              />
              {/* End Separator */}

              {/* Auth Menu */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: 0,
                }}
              >
                <Button href="/register" variant="text" sx={{ color: "black" }}>
                  <PersonIcon fontSize={"medium"} />
                </Button>
                <Button
                  onClick={handleConfirm}
                  variant="text"
                  sx={{ color: "black" }}
                >
                  <LogoutIcon fontSize={"medium"} />
                </Button>
              </Box>
              {/* End Auth Menu */}
            </Box>
          </>
        ) : (
          <>
            <Button href="/register" variant="text" sx={{ color: "black" }}>
              Daftar Sekarang
            </Button>
            <Button href="/login" variant="contained">
              Login
            </Button>
          </>
        )}
      </>
    );
  };

  // Menu navbar untuk screens size xs-sm
  const ComponentMenuMobile = () => {
    return (
      <>
        {alreadyLogin ? (
          <>
            <Link to={"/login"}>
              <MenuItem>Profil</MenuItem>
            </Link>
            <Link
              onClick={(e) => {
                e.preventDefault();
                handleConfirm();
              }}
            >
              <MenuItem>Logout</MenuItem>
            </Link>
            <Link to={"/my-class"}>
              <MenuItem>Kelas ku</MenuItem>
            </Link>
            <Link to={"/invoice"}>
              <MenuItem>Pembelian</MenuItem>
            </Link>
            <Link to={"/checkout"}>
              <MenuItem>Keranjang</MenuItem>
            </Link>
            <Link to={"/register"}>
              <MenuItem>Menu course</MenuItem>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <MenuItem>Login</MenuItem>
            </Link>
            <Link to={"/register"}>
              <MenuItem>Daftar Sekarang</MenuItem>
            </Link>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <AlertDialog
        open={confirmLogout}
        handleClose={() => setConfirmLogout(false)}
        title={"Logout"}
        text={""}
        onSubmit={handleLogout}
      />
      <AppBar
        position="relative"
        className="py-3 px-5 font-poppins"
        sx={{ bgcolor: "#F2C94C", color: "#000000" }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={"10px 20px"}
        >
          {/* Logo */}
          <Link to={"/"} style={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 3,
              }}
            >
              <AppleIcon
                sx={{
                  display: "flex",
                  alignItems: "end",
                  pt: 0.2,
                }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: "flex",
                  alignItems: "baseline",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                  textTransform: "capitalize",
                  lineHeight: "1rem",
                }}
              >
                MUSIC
              </Typography>
            </Box>
          </Link>
          {/* End Logo */}

          {/* Menu Navbar */}
          <Stack
            direction={"row"}
            gap={5}
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            <ComponentMenuPC />
          </Stack>
          <Box
            xs={6}
            sx={{
              display: { md: "none", xs: "flex" },
              justifyContent: "end",
            }}
          >
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Menu" onClick={handleClick}>
                <MenuRoundedIcon></MenuRoundedIcon>
              </Tooltip>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <ComponentMenuMobile />
              </Menu>
            </Box>
          </Box>
          {/* End Menu Navbar */}
        </Stack>
      </AppBar>
    </>
  );
};

export default Navbar;
