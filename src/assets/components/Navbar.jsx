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
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({ isLoggedIn }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Menu navbar untuk screen size md-xl
  const ComponentMenuPC = () => {
    return (
      <>
        {isLoggedIn ? (
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
                <Button href="/register" variant="text" sx={{ color: "black" }}>
                  <ShoppingCartIcon />
                </Button>
                <Button
                  href="/register"
                  variant="text"
                  sx={{ color: "black", fontWeight: 700 }}
                >
                  Kelasku
                </Button>
                <Button
                  href="/login"
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
                <Button href="/login" variant="text" sx={{ color: "black" }}>
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
        {isLoggedIn ? (
          <>
            <Link to={"/login"}>
              <MenuItem>Profil</MenuItem>
            </Link>
            <Link to={"/register"}>
              <MenuItem>Logout</MenuItem>
            </Link>
            <Link to={"/register"}>
              <MenuItem>Kelas ku</MenuItem>
            </Link>
            <Link to={"/register"}>
              <MenuItem>Pembelian</MenuItem>
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
          item
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
  );
};

export default Navbar;
