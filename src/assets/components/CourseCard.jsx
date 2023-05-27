import React from "react";
import { Link } from "react-router-dom";
import { rupiah } from "../../utility/formatIDR";

const CourseCard = ({ image, kategori, judul, harga }) => {
  return (
    <Link to={"/"}>
      <div className="m-auto flex flex-col text-left gap-3 w-[360px] sm:w-[240px] lg:w-[360px] sm:min-h-[360px] min-h-[360px] lg:min-h-[350px] rounded-lg mb-10">
        <img src={image} alt="" className="h-60 lg:h-60 w-full rounded-lg" />
        <div className="w-full flex flex-col justify-center gap-2 p-3">
          <span className="text-gray-500">{kategori}</span>
          <span className="text-xl font-bold">{judul}</span>
        </div>
        <div className="w-full p-3 relative bottom-0 left-0">
          <span className="font-bold text-xl text-blue-500">
            {rupiah(harga)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
