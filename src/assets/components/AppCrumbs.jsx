import { Breadcrumbs, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Fungsi untuk menormalisasi nama path dari route
const getRouteName = (path) => {
  if (path.length < 1) return "";
  let arr = path.split(/[^a-z0-9]|\s+|\r?\n|\r/gim);
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    finalArr.push(arr[i][0].toUpperCase() + arr[i].substring(1));
  }

  return finalArr.join(" ");
};

const AppCrumbs = () => {
  const location = useLocation();

  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let currentLink = "";
    console.log(location);
    const tempCrumbs = location.pathname
      .split("/")
      .filter((crumb) => crumb !== "")
      .map((crumb, i) => {
        currentLink += `/${crumb}`;
        return (
          <Link
            underline="hover"
            key={i}
            color="#5D5FEF"
            fontWeight={600}
            href={crumb}
          >
            {getRouteName(crumb)}
          </Link>
        );
      });

    tempCrumbs.unshift(
      <Link
        underline="hover"
        key={-1}
        color="##828282"
        fontWeight={600}
        href={"/"}
      >
        Beranda
      </Link>
    );

    setCrumbs(tempCrumbs);
  }, []);

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {crumbs}
    </Breadcrumbs>
  );
};

export default AppCrumbs;
