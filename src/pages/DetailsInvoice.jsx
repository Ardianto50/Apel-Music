import React, { useEffect, useState } from "react";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import { Box, Typography } from "@mui/material";
import AppCrumbs from "../assets/components/AppCrumbs";
import AppTable from "../assets/components/AppTable";
import { rupiah } from "../utility/formatIDR";
import { useParams } from "react-router-dom";
import { useApiContext } from "../context/ApiProvider";
import { formatDate } from "../utility/dateFormat";

const DetailsInvoice = () => {
  const { invoiceId } = useParams();

  const datas = [
    {
      no: 1,
      nama_course: "Kursus Drummer Special Coach (Eno Netral)",
      kategori: "Drum",
      jadwal: "Senin, 25 Juli 2022",
      harga: rupiah(8_500_000),
    },
    {
      no: 2,
      nama_course: "Biola Mid-Level Course",
      kategori: "Biola",
      jadwal: "Sabtu, 23 Juli 2022",
      harga: rupiah(3_000_000),
    },
  ];

  const converCourseToRow = (num, course) => {
    return {
      no: num || 0,
      nama_course: course?.courseName,
      kategori: course?.categoryName,
      jadwal: formatDate(course?.courseSchedule),
      harga: rupiah(course?.purchasePrice),
    };
  };

  const { AppServices, URLs } = useApiContext();

  const [courses, setCourses] = useState([
    {
      courseId: "",
      courseName: "",
      courseSchedule: "",
      categoryId: "",
      categoryName: "",
      purchasePrice: 0,
    },
  ]);
  const [courseRows, setCourseRows] = useState([
    {
      no: 0,
      nama_course: "",
      kategori: "",
      jadwal: "",
      harga: 0,
    },
  ]);

  const [noInvoice, setNoInvoice] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const columnsLabel = ["No", "Nama Course", "Kategori", "Jadwal", "Harga"];

  useEffect(() => {
    setCourseRows([]);
    setCourses([]);
    AppServices.getInvoiceDetail(invoiceId)
      .then((res) => {
        let result = res.data;
        setNoInvoice(result.invoiceNumber);
        setPurchaseDate(result.purchaseDate);
        setTotalPrice(result.totalPrice);
        let courses = result?.courses;
        console.log(result);
        if (courses) {
          let rows = courses.map((course, i) =>
            converCourseToRow(i + 1, course)
          );
          setCourseRows(rows);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [AppServices, invoiceId]);

  return (
    <>
      <Navbar isLoggedIn={true} />
      <Box
        sx={{
          padding: "0.75rem",
          maxWidth: "2000px",
          marginX: "auto",
          paddingX: { xs: "1.5rem", sm: "1.5rem", md: "3rem", lg: "5rem" },
          marginY: "2rem",
          marginBottom: "15rem",
          display: "flex",
          flexDirection: "column",
          gap: "2.25rem",
        }}
      >
        <AppCrumbs />
        <Typography
          sx={{
            color: "#4F4F4F",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Menu Invoice
        </Typography>

        {/* Start Bagian rincian */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          {/* START No Invoice: APM00003 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "419px",
            }}
          >
            <Typography
              fontWeight={500}
              fontSize={"1.125rem"}
              color={"#4F4F4F"}
            >
              No. Invoice:
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={"1.125rem"}
              color={"#4F4F4F"}
            >
              {noInvoice}
            </Typography>
          </Box>
          {/* END No Invoice: APM0003 */}

          {/* START Tanggal Beli */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "419px",
            }}
          >
            <Typography
              fontWeight={500}
              fontSize={"1.125rem"}
              color={"#4F4F4F"}
            >
              Tanggal Beli:
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={"1.125rem"}
              color={"#4F4F4F"}
            >
              {purchaseDate}
            </Typography>
          </Box>
          {/* END Tanggal Beli */}

          {/* START Total Harga */}
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "flex-start",
                sm: "flex-start",
                md: "flex-end",
              },
              width: "100%",
            }}
          >
            <Typography
              fontWeight={700}
              fontSize={"1.125rem"}
              color={"#4F4F4F"}
              marginRight={"1.125rem"}
            >
              Total Harga
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={"1.125rem"}
              color={"#4F4F4F"}
            >
              {rupiah(totalPrice)}
            </Typography>
          </Box>
          {/* END Total harga */}
        </Box>
        {/* End Bagian Rincian */}
        {/* START Table */}
        <AppTable rows={courseRows} columnsLabel={columnsLabel} />
        {/* END Table */}
      </Box>
      <Footer />
    </>
  );
};

export default DetailsInvoice;
