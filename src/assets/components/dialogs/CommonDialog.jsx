import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

const CommonDialog = ({ title, open, onClose, onSubmit, children }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ width: "50vh" }}>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: "black" }}>
          Cancel
        </Button>
        <Button
          onClick={onSubmit}
          variant="contained"
          sx={{
            bgcolor: "#F2C94C",
            "&:hover": { bgcolor: "#FFCD38" },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialog;
