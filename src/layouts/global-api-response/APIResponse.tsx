import { Alert, Snackbar } from "@mui/material";
import React from "react";

interface CloseModal {
  name: string;
  value: boolean;
}

interface Props {
  isOpen: boolean;
  isSuccess: boolean;
  handleClosePopup: (closeModal: CloseModal) => void;
  message: string;
  closeModal: CloseModal;
}

const Res: React.FC<Props> = ({
  closeModal,
  isOpen,
  isSuccess,
  handleClosePopup,
  message,
}) => {
  const handleClose = () => {
    setTimeout(() => handleClosePopup(closeModal), 6000);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isOpen}
        autoHideDuration={0}
        onClose={handleClose}
      >
        <Alert
          severity={isSuccess ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Res;
