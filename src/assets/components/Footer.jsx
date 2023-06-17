import React from "react";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import SocialMedia from "./SocialMedia";
import style from "../css/components/Footer.css";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  const useStyle = style;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
        position: "relative",
        right: 0,
        bottom: 0,
        left: 0,
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        justifyContent: "center",
        width: "100%",
        gap: "5rem",
        background: "#F2C94C",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          gap: "1.25rem",
        }}
      >
        <Typography
          fontSize={"1.25rem"}
          lineHeight={"1.75rem"}
          fontWeight={700}
        >
          Tentang
        </Typography>
        <Typography textAlign={"justify"}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          gap: "1.25rem",
        }}
      >
        <Typography
          fontSize={"1.25rem"}
          lineHeight={"1.75rem"}
          fontWeight={700}
        >
          Produk
        </Typography>
        <Box
          sx={{
            display: "flex",
            paddingLeft: "2.5rem",
            gap: "6rem",
          }}
        >
          <div>
            <ul
              style={{
                display: "flex",
                listStyleType: "disc",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <li>Biola</li>
              <li>Gitar</li>
              <li>Drum</li>
            </ul>
          </div>
          <div>
            <ul
              style={{
                display: "flex",
                listStyleType: "disc",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <li>Menyanyi</li>
              <li>Piano</li>
              <li>Saxophone</li>
            </ul>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          gap: "1.25rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            gap: "1.25rem",
          }}
        >
          <Typography
            fontSize={"1.25rem"}
            lineHeight={"1.75rem"}
            fontWeight={700}
          >
            Alamat
          </Typography>
          <span style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit
            minus nostrum architecto dicta deserunt voluptatem asperiores.
          </span>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            gap: "1.25rem",
          }}
        >
          <Typography
            fontSize={"1.25rem"}
            lineHeight={"1.75rem"}
            fontWeight={700}
          >
            Kontak
          </Typography>
          <Box
            sx={{
              display: "flex",
              padding: "0.5rem",
              flexWrap: "wrap",
              justifyContent: { xs: "center", sm: "center", md: "left" },
              gap: "1.25rem",
            }}
          >
            <SocialMedia
              icon={<CallIcon fontSize="large" />}
              href={"https://www.facebook.com"}
            />
            <SocialMedia
              icon={<InstagramIcon fontSize="large" />}
              href={"https://www.facebook.com"}
            />
            <SocialMedia
              icon={<YouTubeIcon fontSize="large" />}
              href={"https://www.facebook.com"}
            />
            <SocialMedia
              icon={<TelegramIcon fontSize="large" />}
              href={"https://www.facebook.com"}
            />
            <SocialMedia
              icon={<EmailIcon fontSize="large" />}
              href={"https://www.facebook.com"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
