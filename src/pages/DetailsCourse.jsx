import React, { useEffect, useState } from "react";
import Navbar from "../assets/components/Navbar";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuList,
  Select,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import enoNetral from "../assets/img/eno-netral.png";
import expertDrumClass from "../assets/img/expert-level-drum-class.png";
import progressiveDrumClass from "../assets/img/progressive-drum-class.png";
import orangMainDrum from "../assets/img/orang-main-drum.png";
import bannerImage from "../assets/img/banner-drum.png";
import { rupiah } from "../utility/formatIDR";
import MenuItem from "@mui/material/MenuItem";
import { blue } from "@mui/material/colors";
import CourseCard from "../assets/components/CourseCard";
import Footer from "../assets/components/Footer";
import { useApiContext } from "../context/ApiProvider";
import { formatDate } from "../utility/dateFormat";
import PaymentDialog from "../assets/components/dialogs/PaymentDialog";

const DetailsCourse = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // sewaktu page dibuka, langsung scroll ke atas
  }, []);

  const [courseSchedule, setCourseSchedule] = useState("");

  const [courses, setCourses] = useState([
    {
      id: "",
      imageName: "",
      name: "",
      price: 0,
      category: {
        id: "",
        tagName: "",
      },
    },
  ]);

  const [mainCourse, setMainCourse] = useState({
    id: "",
    name: "",
    categoryId: "",
    category: {
      tagName: "",
      name: "",
      image: "",
      bannerImage: "",
      categoryDescription: "",
      id: "",
    },
    image: "",
    description: "",
    price: 0,
    courseSchedules: [
      {
        courseId: "",
        courseDate: "",
        id: "",
        createdAt: null,
        updatedAt: null,
        inactive: null,
      },
    ],
  });

  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  // Untuk buka payment method pas direct purchase
  const [dialogOpen, setDialogOpen] = useState(false);

  // Payment id untuk direct purchase
  const [paymentId, setPaymentId] = useState("");

  // Loading untuk direct payment
  const [isLoading, setIsLoading] = useState(false);

  // Error lain lain
  const [nonFieldErrors, setNonFieldErrors] = useState(false);

  // Error yang berasal dari field inputan user
  const [fieldErrors, setFieldErrors] = useState({
    PaymentMethodId: [],
    CourseSchedule: [],
    CourseId: [],
  });

  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const { AppServices, URLs } = useApiContext();

  useEffect(() => {
    setCourses([]);
    AppServices.getCourseDetail(courseId)
      .then((res) => {
        let result = res.data;
        setMainCourse(result);
        // console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

    let params = {
      PageSize: pageSize,
      CurrentPage: currentPage,
    };

    // Get similiar course hanya dijalankan jika categoryId sudah ada
    if (mainCourse?.categoryId) {
      AppServices.getSimiliarCourses(params, courseId, mainCourse.categoryId)
        .then((res) => {
          let result = res.data;
          // console.log(result);
          setCourses(result.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [AppServices, pageSize, currentPage, courseId, mainCourse.categoryId]);

  const goLeft = () => {
    // Pindah ke halaman selanjutnya
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goRight = () => {
    // Pindah ke halaman sebelumnya
    if (courses.length === pageSize) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleAddToCart = () => {
    AppServices.addToCart(courseId, courseSchedule)
      .then((res) => {
        // console.log(res);
        navigate("/checkout");
      })
      .catch((err) => {
        let status = err.response.status;
        if (status === 400) {
          if (!courseSchedule) {
            setFieldErrors({
              ...fieldErrors,
              CourseSchedule: ["Jadwal wajib diisi"],
            });
          }
        }

        if (status > 400 && status < 500) {
          setNonFieldErrors(err?.response?.data);
          setOpenErrorDialog(true);
        }
      });
  };

  // submit untuk add to cart
  const handleSubmit = () => {
    // setIsLoading(true);
    // navigate("/success-purchase");

    const payloads = {
      paymentId,
      courseSchedule,
      courseId,
    };
    AppServices.directPurchase(payloads)
      .then((res) => {
        setTimeout(() => {
          navigate("/success-purchase");
        }, 500);
      })
      .catch((err) => {
        setDialogOpen(false); // menutu dialog opsi pembayaran
        const status = err.response.status;
        if (status === 400) {
          // const errors = err.response.data.errors;
          // jika courseSchedule kosong
          if (!courseSchedule) {
            setFieldErrors({
              ...fieldErrors,
              CourseSchedule: ["Jadwal wajib diisi"],
            });
          }
        }

        if (status > 400 && status < 500) {
          setNonFieldErrors(err?.response?.data);
          setOpenErrorDialog(true);
        }
      })
      .finally(() => {
        // setIsLoading(false);
      });
    console.log(paymentId);
  };

  useEffect(() => {
    console.log(paymentId);
  }, [paymentId]);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid #E4E4E4",
          padding: 0.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            gap: { xs: 6, sm: 6, md: 5 },
            maxWidth: "2000px",
            margin: "auto",
            paddingX: "50px",
            paddingY: "30px",
          }}
        >
          <Box
            component={"img"}
            src={mainCourse?.image && URLs.IMG_URL + mainCourse?.image}
            sx={{
              borderRadius: "1rem",
              width: "400px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2, sm: 2, md: 1 },
              justifyContent: "space-between",
              minHeight: "270px",
            }}
          >
            {/* Section (Category, Title, Price) */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <Typography
                fontSize={"1rem"}
                lineHeight={"1.5rem"}
                fontWeight={400}
                color={"#828282"}
              >
                {mainCourse.category.tagName}
              </Typography>
              <Typography
                fontSize={"1.5rem"}
                lineHeight={"2rem"}
                fontWeight={600}
              >
                {mainCourse.name}
              </Typography>
              <Typography
                fontSize={"1.5rem"}
                lineHeight={"2rem"}
                fontWeight={600}
                color={"#5D5FEF"}
              >
                {rupiah(mainCourse.price)}
              </Typography>
            </Box>
            {/* End Section (Category, Title, Price) */}

            {/* Section Select */}
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "250px" },
              }}
            >
              <FormControl
                fullWidth
                error={fieldErrors?.CourseSchedule?.length !== 0}
              >
                <InputLabel id="demo-simple-select-label">
                  Pilih Jadwal Kelas
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={courseSchedule}
                  label="Pilih Jadwal Kelas"
                  onChange={(e) => setCourseSchedule(e.target.value)}
                >
                  {mainCourse?.courseSchedules?.map((val, i) => (
                    <MenuItem key={i} value={val.courseDate}>
                      {formatDate(val.courseDate)}
                    </MenuItem>
                  ))}
                </Select>
                {fieldErrors?.CourseSchedule?.lenght !== 0 && (
                  <FormHelperText>
                    {fieldErrors?.CourseSchedule[0]}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            {/* End Section Select */}

            {/* Section Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column", md: "row" },
                width: "100%",
                gap: 2,
              }}
            >
              <Button
                sx={{
                  minWidth: "233.5px",
                  borderRadius: "0.5rem",
                  marginY: "0.25rem",
                  textAlign: "center",
                }}
                variant="outlined"
                onClick={handleAddToCart}
              >
                Masukkan ke keranjang
              </Button>
              <Button
                sx={{
                  minWidth: "233.5px",
                  borderRadius: "0.5rem",
                  marginY: "0.25rem",
                }}
                variant="contained"
                onClick={() => setDialogOpen(true)}
              >
                Beli Sekarang
              </Button>
            </Box>
            {/* End Section Buttons */}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: "2000px",
            margin: "auto",
            paddingX: "50px",
            paddingY: "30px",
            height: "100%",
          }}
        >
          <Typography fontSize={"1.5rem"} lineHeight={"2rem"} fontWeight={600}>
            Deskripsi
          </Typography>
          <Typography
            textAlign={"justify"}
            fontSize={"1rem"}
            lineHeight={"1.5rem"}
            fontWeight={400}
          >
            {mainCourse.description}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          padding: 5,
          textAlign: "center",
          marginY: 10,
        }}
      >
        <Typography
          variant="h5"
          fontSize={"1.5rem"}
          fontWeight={700}
          color={blue[500]}
        >
          Kelas lain yang mungkin kamu suka
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sm: "repeat(1, minmax(0, 1fr))",
              md: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
            gap: 8,
            paddingY: 5,
            marginY: 5,
            margin: "auto",
            maxWidth: "1200px",
          }}
        >
          {courses?.map((course, i) => (
            <CourseCard
              key={i}
              secureId={course.id}
              judul={course.name}
              image={course.imageName}
              harga={course.price}
              kategori={course.category.tagName}
            />
          ))}
        </Box>
      </Box>
      <Footer />

      {/* START: Dialog untuk menampilkan opsi pembayaran */}
      <PaymentDialog
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        onSubmit={handleSubmit}
        setPaymentId={setPaymentId}
      />
      {/* END: Dialog untuk menampilkan opsi pembayaran */}

      {/* START: Dialog untuk menampilkan error pada submision form */}
      <Dialog
        open={openErrorDialog}
        onClose={() => setOpenErrorDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Message"}</DialogTitle>
        <DialogContent>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <ul>
              <li>{nonFieldErrors}</li>
            </ul>
          </Alert>
        </DialogContent>
        <DialogActions onClick={() => setOpenErrorDialog(false)}>
          <Button autoFocus>Oke</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DetailsCourse;
