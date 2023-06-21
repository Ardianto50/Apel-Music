import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CustomPassword = ({ InputProps, iconEnd, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <TextField
        {...props}
        type={isVisible ? "text" : "password"}
        InputProps={{
          ...InputProps,
          endAdornment: (
            <InputAdornment
              sx={{ cursor: "pointer" }}
              onClick={handleVisible}
              position="end"
            >
              {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default CustomPassword;
