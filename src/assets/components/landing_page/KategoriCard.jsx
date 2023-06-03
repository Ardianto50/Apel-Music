import React from "react";
import { Link } from "react-router-dom";

const KategoriCard = ({ image, nama, link }) => {
  return (
    <Link to={link}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "8rem",
          gap: "1.5rem",
          margin: "auto",
        }}
      >
        <img src={image} alt={nama} />
        <span
          style={{
            display: "block",
            fontSize: "1.25rem",
            lineHeight: "2rem",
            textAlign: "center",
          }}
        >
          {nama}
        </span>
      </div>
    </Link>
  );
};

export default KategoriCard;
