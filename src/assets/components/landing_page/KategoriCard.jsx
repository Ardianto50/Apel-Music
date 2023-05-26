import React from "react";

const KategoriCard = ({ image, nama }) => {
  return (
    <div className="m-auto w-60 h-32 flex flex-col justify-center items-center gap-6">
      <img src={image} alt={nama} />
      <span className="text-2xl block text-center">{nama}</span>
    </div>
  );
};

export default KategoriCard;
