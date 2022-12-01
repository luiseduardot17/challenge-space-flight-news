import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import S from "./Modal.module.css";
import { ModalContext } from "../../context/ModalProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const muiButton = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#302e53",
};


const ModalDetalhes = ({ open, handleClose}) => {

  const {bd} = useContext(ModalContext)

  return (
    <Modal
      open={open}
      onClose={handleClose}
      // id={id}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={S.container}>
          <div>
            <img src={bd.imagem} />
          </div>
          <div className={S.containerContent}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              align="center"
            >
              {bd.titulo}
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h6"
              align="left"
            >
              {bd.data}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              align="center"
            >
              {bd.sumario}
            </Typography>
          </div>
        </div>

        <Button variant="contained" sx={muiButton} href={bd.url}>
          Ir para o site
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalDetalhes;
