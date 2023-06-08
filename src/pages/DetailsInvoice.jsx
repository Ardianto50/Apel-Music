import React from "react";
import Navbar from "../assets/components/Navbar";

const DetailsInvoice = () => {
  const datas = [
    {
      no: 1,
      nama_course: "Kursus Drummer Special Coach (Eno Netral)",
      kategori: "Drum",
      jadwal: "Senin, 25 Juli 2022",
      harga: 8_500_000,
    },
    {
      no: 2,
      nama_course: "Biola Mid-Level Course",
      kategori: "Drum",
      jadwal: "Senin, 25 Juli 2022",
      harga: 8_500_000,
    },
  ];

  return (
    <>
      <Navbar />
      {/* <Footer /> */}
    </>
  );
};

export default DetailsInvoice;
