import React from "react";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import SocialMedia from "./SocialMedia";
import style from "../css/components/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="section-right">
        <span className="section-head">Tentang</span>
        <span style={{ textAlign: "justify" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </span>
      </div>
      <div className="section-right">
        <span className="section-head">Produk</span>
        <div className="category-list">
          <div>
            <ul className="category">
              <li>Biola</li>
              <li>Gitar</li>
              <li>Drum</li>
            </ul>
          </div>
          <div>
            <ul className="category">
              <li>Menyanyi</li>
              <li>Piano</li>
              <li>Saxophone</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-left">
        <div className="section-left-child">
          <span className="section-head">Alamat</span>
          <span style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit
            minus nostrum architecto dicta deserunt voluptatem asperiores.
          </span>
        </div>
        <div className="section-left-child">
          <span className="section-head">Kontak</span>
          <div className="contact">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
