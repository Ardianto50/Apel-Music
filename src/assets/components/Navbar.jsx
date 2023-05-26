import { AppBar, Button, Container, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import AppleIcon from '@mui/icons-material/Apple';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Navbar = ({ isLoggedIn }) => {

    // TODO: Lanjut responsive login sama register
    return (
        <AppBar position="static" className="py-3 px-5 font-poppins" sx={{ bgcolor: "#F2C94C", color: "#000000" }}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} paddingX={5}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            textTransform: 'capitalize'
                        }}
                    >
                        <AppleIcon />
                        MUSIC
                    </Typography>
                </Toolbar>
                <Stack direction={"row"} gap={5}>
                    <Tooltip title="Registrasi" placement="bottom">
                        <Button href="/register" variant="text" sx={{ color: "black" }}>
                            <span className="inline xl:hidden lg:hidden md:hidden">
                                <AppRegistrationIcon />
                            </span>
                            <span className="hidden lg:inline md:inline">Daftar Sekarang</span>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Masuk" placement="bottom">
                        <Button color="primary" href="/login" variant="contained" className="flex justify-center items-center gap-3 p-2 rounded-md">
                            <span className="inline xl:hidden lg:hidden md:hidden">
                                <LoginIcon />
                            </span>
                            <span className="hidden lg:inline md:inline">Masuk</span>
                        </Button>
                    </Tooltip>
                </Stack>
            </Stack>
        </AppBar>
    );
};

export default Navbar;
