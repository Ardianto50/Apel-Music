import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const AlertDialog = ({ open, handleClose, title, text, onSubmit }) => {
  return (
    <Dialog fullWidth={true} open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSubmit} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
