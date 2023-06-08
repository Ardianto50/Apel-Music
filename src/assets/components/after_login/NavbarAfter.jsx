import AppleIcon from "@mui/icons-material/Apple";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import {
  AppBar,
  Box,
  Grid,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { React, useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
            <AppleIcon />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: "flex",
                textAlign: "center",
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
          alignItems={"center"}
          sx={{ display: { md: "flex", xs: "none" } }}
        >
          <ShoppingCartRoundedIcon />
          <Typography
            variant="h6"
            fontFamily={"sans-serif"}
            noWrap
            sx={{ cursor: "pointer" }}
          >
            Kelasku
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"sans-serif"}
            noWrap
            sx={{ cursor: "pointer" }}
          >
            Pembelian
          </Typography>
          <Typography variant="h6" noWrap>
            |
          </Typography>
          <PersonRoundedIcon />
          <LogoutRoundedIcon />
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
              id="positioned-menu"
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
              <Link to={""}>
                <MenuItem>
                  <PersonRoundedIcon sx={{ marginRight: 4 }} />
                  Profile
                </MenuItem>
              </Link>
              <Link to={""}>
                <MenuItem>
                  <ShoppingCartRoundedIcon sx={{ marginRight: 4 }} />
                  Keranjang
                </MenuItem>
              </Link>
              <Link to={""}>
                <MenuItem>
                  <SchoolRoundedIcon sx={{ marginRight: 4 }} />
                  Kelasku
                </MenuItem>
              </Link>
              <Link to={""}>
                <MenuItem>
                  <DescriptionRoundedIcon sx={{ marginRight: 4 }} />
                  Pembelian
                </MenuItem>
              </Link>
              <Link to={""}>
                <MenuItem>
                  <LogoutRoundedIcon sx={{ marginRight: 4 }} />
                  Log out
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Grid>
      </Stack>
    </AppBar>
  );
};

export default NavbarAfter;
