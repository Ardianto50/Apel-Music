import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import AppleIcon from '@mui/icons-material/Apple';

const Navbar = () => {
    const [anchorNav, setAnchorNav] = useState(null);
    const [anchorUser, setAnchorUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorUser(null);
    };

    return (
        <AppBar position="static" className="py-3 font-poppins" sx={{ bgcolor: "#F2C94C", color: "#000000" }}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} paddingX={5}>
                <Toolbar>
                    <AppleIcon />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            textTransform: 'capitalize'
                        }}
                    >
                        MUSIC
                    </Typography>
                </Toolbar>
                <Stack direction={"row"}>
                    <h1>Test</h1>
                </Stack>
            </Stack>
        </AppBar>
    );
};

export default Navbar;
