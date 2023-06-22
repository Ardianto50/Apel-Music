import React from "react";
import { Link } from "react-router-dom";
import { useApiContext } from "../../../context/ApiProvider";

const KategoriCard = ({ id, image, nama }) => {
  const { URLs } = useApiContext();

  return (
    <Link to={"/course-menu/" + id}>
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
        <img src={URLs.IMG_URL + image} alt={nama} />
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
