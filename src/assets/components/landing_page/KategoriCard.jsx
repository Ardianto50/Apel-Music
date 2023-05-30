import React from "react";

const KategoriCard = ({ image, nama }) => {
  return (
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
  );
};

export default KategoriCard;
