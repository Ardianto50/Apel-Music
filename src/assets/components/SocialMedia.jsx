import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = ({ icon, href }) => {
  return (
    <Link to={href} target="_blank">
      <div
        style={{
          display: "grid",
          placeItems: "center",
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "100%",
          background: "#5C5EEB",
          color: "#F2C94C",
        }}
      >
        {icon}
      </div>
    </Link>
  );
};

export default SocialMedia;
