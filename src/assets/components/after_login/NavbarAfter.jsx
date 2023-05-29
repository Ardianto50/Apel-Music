import AppleIcon from "@mui/icons-material/Apple";
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Grid,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const NavbarAfter = () => {
  //   const [anchorNav, setAnchorNav] = useState(null);
  //   const [anchorUser, setAnchorUser] = useState(null);

  //   const handleOpenNavMenu = (event) => {
  //     setAnchorNav(event.currentTarget);
  //   };

  //   const handleOpenUserMenu = (event) => {
  //     setAnchorUser(event.currentTarget);
  //   };

  //   const handleCloseNavMenu = () => {
  //     setAnchorNav(null);
  //   };

  //   const handleCloseUserMenu = () => {
  //     setAnchorUser(null);
  //   };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      className="py-3 px-5 font-poppins"
      sx={{ bgcolor: "#F2C94C", color: "#000000" }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingX={5}
      >
        <Toolbar>
          <Link to={"/"} style={{ display: "flex" }}>
            <AppleIcon sx={{ display: "flex", alignItems: "end", pt: 0.2 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: "flex",
                alignItems: "baseline",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                textTransform: "capitalize",
              }}
            >
              MUSIC
            </Typography>
          </Link>
        </Toolbar>
        <Stack
          direction={"row"}
          gap={5}
          sx={{ display: { md: "flex", xs: "none" } }}
        >
          <Button href="/register" variant="text" sx={{ color: "black" }}>
            DAFTAR SEKARANG
          </Button>
          <Button href="/login" variant="contained">
            Login
          </Button>
        </Stack>
        <Grid
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
              <Link to={"/login"}>
                <MenuItem>Login</MenuItem>
              </Link>
              <Link to={"/register"}>
                <MenuItem>Daftar Sekarang</MenuItem>
              </Link>
            </Menu>
          </Box>
        </Grid>
      </Stack>
    </AppBar>
  );
};

export default NavbarAfter;
