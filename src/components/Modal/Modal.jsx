import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import S from "./Modal.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 400,
  bgcolor: "#1E2022",
  border: "2px solid #D07017",
  boxShadow: 24,
  p: 4,
};

const muiButton = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#302e53",
};

const ModalDetalhes = ({ open, handleClose, idModal, imagemModal, tituloModal, dataModal, sumarioModal, urlModal }) => {
  

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={S.container}>
          <div>
            <img src={imagemModal} />
          </div>
          <div className={S.containerContent}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              align="justify"
            ><strong>{tituloModal}</strong>
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="p"
              component="h6"
              align="left"
              sx={{ mt: 2}}
            >
              {dataModal}
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="p"
              sx={{ mt: 2}}
              align="justify"
            >
              {sumarioModal}
            </Typography>
          </div>
        </div>
        
            <Button
              variant="contained"
              sx={muiButton}
              key={idModal}
              href={urlModal}
            >
              Ir para o site
            </Button>
          
        
      </Box>
    </Modal>
  );
};

export default ModalDetalhes;
