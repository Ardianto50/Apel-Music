import React, { useState } from "react";
import Navbar from "../assets/components/Navbar";
import { Typography } from "@mui/material";
import AdCard from "../assets/components/landing_page/AdCard";
import Footer from "../assets/components/Footer";
import CourseCard from "../assets/components/CourseCard";
import enoNetral from "../assets/img/eno-netral.png";
import orangMainGitar from "../assets/img/orang-main-gitar.png";
import orangMainBiola from "../assets/img/orang-main-biola.png";
import orangMainDrum from "../assets/img/orang-main-drum.png";
import piano from "../assets/img/piano.png";
import saxophone from "../assets/img/saxophone.png";
import drum from "../assets/img/drum.png";
import orangMainPiano from "../assets/img/orang-main-piano.png";
import gitar from "../assets/img/gitar.png";
import biola from "../assets/img/biola.png";
import vokal from "../assets/img/vocal.png";
import orangMainSax from "../assets/img/orang-main-sax.png";
import KategoriCard from "../assets/components/landing_page/KategoriCard";
import mainUkulele from "../assets/img/mainUkulele.png";

const LandingPage = () => {
  const [dummyClass, setDummyClass] = useState([
    {
      image: enoNetral,
      judul: "kursus Drummer Special Coach (Eno Netral)",
      kategori: "Drum",
      harga: 8_500_000,
    },
    {
      image: orangMainGitar,
      judul: "[Beginner] Guitar class for kids",
      kategori: "Gitar",
      harga: 1_600_000,
    },
    {
      image: orangMainBiola,
      judul: "Biola Mid-Level Course",
      kategori: "Biola",
      harga: 3_000_000,
    },
    {
      image: orangMainDrum,
      judul: "Drummer for kids (Level Basic/1)",
      kategori: "Drum",
      harga: 2_200_000,
    },
    {
      image: piano,
      judul: "Kursus Piano: From Zero to Pro (Full Package)",
      kategori: "Piano",
      harga: 11_650_000,
    },
    {
      image: saxophone,
      judul: "Expert Level Saxophone",
      kategori: "Saxophone",
      harga: 7_350_000,
    },
  ]);

  const dummyCategory = [
    {
      image: drum,
      nama: "Drum",
    },
    {
      image: orangMainPiano,
      nama: "Piano",
    },
    {
      image: gitar,
      nama: "Gitar",
    },
    {
      image: gitar,
      nama: "Bass",
    },
    {
      image: biola,
      nama: "Biola",
    },
    {
      image: vokal,
      nama: "Menyanyi",
    },
    {
      image: orangMainSax,
      nama: "Flute",
    },
    {
      image: orangMainSax,
      nama: "Saxophone",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-[700px] w-full bg-concert-silhouette text-center text-white bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center gap-24 py-10 px-3">
        <h3 className="text-4xl text-white font-poppins font-semibold">
          Hi Musiker! Gabung yuk di Apel Music
        </h3>
        <h3 className="text-2xl text-white font-poppins">
          Banyak kelas keren yang bisa menunjang bakat bermusik kamu
        </h3>
        <div className="w-full flex flex-wrap justify-center items-center gap-28">
          <AdCard
            header={"500+"}
            text={"Lebih dari kelas biasa yang bisa mengeluarkan bakat kalian"}
          />
          <AdCard
            header={"50+"}
            text={"Lulusan yang menjadi musisi ternama dengan skill memukau"}
          />
          <AdCard
            header={"10+"}
            text={"Coach spesial kolaborasi dengan musisi terkenal"}
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center gap-5 p-5 text-center font-poppins my-24">
        <h4 className="text-3xl font-bold text-blue-500">
          Explore kelas favorit
        </h4>
        <div className="m-auto w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-5 my-16">
          {dummyClass.map((course) => (
            <CourseCard {...course} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col bg-gray-100 items-center py-20 gap-5 text-center font-poppins my-24">
        <h4 className="text-3xl font-bold text-blue-500">
          Pilih kelas impian kamu
        </h4>
        <div className="m-auto w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-24 py-5 my-16">
          {dummyCategory.map((c) => (
            <KategoriCard {...c} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center lg:flex-row lg:justify-normal items-center min-h-[500px] mb-36">
        <div className="px-5">
          <div className="h-[240px] w-[240px] md:h-[360px] md:w-[360px] lg:h-[480px] lg:w-[480px] rounded-full bg-[#F2C94C]">
            <img
              src={mainUkulele}
              className="h-2/3 w-2/3 relative top-[32%] left-[36%]"
              alt=""
            />
            <div className="relative top-[24%] left-[5%] h-1/5 w-1/5 rounded-full bg-[#F2C94C]"></div>
            <div className="relative top-[16%] left-[28%] h-[12%] w-[12%] rounded-full bg-[#F2C94C]"></div>
            <div className="relative top-[5%] left-[45%] h-[5%] w-[5%] rounded-full bg-[#F2C94C]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[80%] lg:w-[60%] lg:ml-3 mt-24 lg:mt-5 p-3">
          <span className="text-4xl font-bold text-[#5D5FEF]">
            Benefit ikut Apel Course
          </span>
          <span className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolor ea beatae accusamus neque impedit molestias, qui
            exercitationem earum quos, magnam quam quaerat ullam mollitia at?
            Voluptate corrupti delectus, modi atque, commodi numquam dolorem,
            maxime voluptatibus aliquam necessitatibus voluptates? Molestias ad
            repellat praesentium deserunt laborum est assumenda voluptatum
            placeat. Fugiat earum officia assumenda ab exercitationem at
            molestiae, accusantium recusandae consequatur aliquid et architecto
            aspernatur? Assumenda qui atque exercitationem praesentium soluta
            corporis optio velit deserunt magni asperiores ad totam maxime,
            dolores laudantium, incidunt porro doloremque! Aliquid sunt
            obcaecati ut, quod quasi molestias explicabo nemo atque natus
            blanditiis molestiae velit provident porro!
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
