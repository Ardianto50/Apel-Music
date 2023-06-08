import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AppTableMobile from "./AppTableMobile";

const AppTable = ({ columnsLabel, rows }) => {
  return (
    <>
      {/* Table Section */}
      <TableContainer
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              backgroundColor: "#F2C94C",
            }}
          >
            {/* START Table Header */}
            <TableRow sx={{}}>
              {columnsLabel?.map((c, i) => (
                <TableCell
                  sx={{ fontWeight: 600, color: "#4F4F4F" }}
                  align="center"
                  key={i}
                >
                  {c}
                </TableCell>
              ))}
            </TableRow>
            {/* END Table Header */}
          </TableHead>
          <TableBody>
            {/* START Table Body */}
            {rows.map((row, key) => (
              <TableRow
                key={key}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: key % 2 === 0 ? "#FEFEFE" : "#FAF2D9",
                }}
              >
                {Object.values(row).map((field, i) => (
                  <TableCell
                    align="center"
                    key={i}
                    sx={{ fontSize: "1rem", fontWeight: 500 }}
                  >
                    {field}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {/* END Table Body */}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Jika screen nya mobile maka akan beralih ke table tampilan mobile */}
      <AppTableMobile columnsLabel={columnsLabel} rows={rows} />
    </>
  );
};

export default AppTable;
