import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import Article from "../Article/Article";
import S from "./Modal.module.css";

const ModalDetalhes = () => {
  const [open, setOpen] = useState(false);

  const abrirModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={S.styleModal}>
        <Article />
        <Button>Ir para o site</Button>
      </Box>
    </Modal>
  );
};

export default Modal;
