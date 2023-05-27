import React from "react";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-24 w-full min-h-72 relative bottom-0 left-0 right-0 bg-[#F2C94C] font-poppins px-10 py-10">
      <div className="flex flex-col gap-5 w-full lg:w-1/4 h-full">
        <span className="text-xl font-bold">Tentang</span>
        <span className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit
          minus nostrum architecto dicta deserunt voluptatem asperiores. Ipsum
          itaque earum quam voluptatibus animi natus et alias vero modi ipsa,
          fugiat quod vel laborum quasi culpa nemo laboriosam, magnam debitis
          sint optio! Vel mollitia commodi eaque dolore aspernatur consequatur
          numquam pariatur.
        </span>
      </div>
      <div className="flex flex-col gap-5 w-full lg:w-1/4 h-full">
        <span className="text-xl font-bold">Produk</span>
        <div className="flex gap-24 pl-10">
          <div>
            <ul className="list-disc flex flex-col gap-3">
              <li>Biola</li>
              <li>Gitar</li>
              <li>Drum</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc flex flex-col gap-3">
              <li>Menyanyi</li>
              <li>Piano</li>
              <li>Saxophone</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full lg:w-1/3 h-full">
        <div className="flex flex-col gap-5 w-full h-full">
          <span className="text-xl font-bold">Alamat</span>
          <span className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit
            minus nostrum architecto dicta deserunt voluptatem asperiores.
          </span>
        </div>
        <div className="flex flex-col gap-5 w-full h-full">
          <span className="text-xl font-bold">Kontak</span>
          <div className="flex flex-wrap justify-center md:justify-normal gap-5 p-2">
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
