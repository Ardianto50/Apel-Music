import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = ({ icon, href }) => {
  return (
    <Link to={href} target="_blank">
      <div className="grid place-items-center w-14 h-14 rounded-full bg-[#5C5EEB] text-[#F2C94C]">
        {icon}
      </div>
    </Link>
  );
};

export default SocialMedia;
