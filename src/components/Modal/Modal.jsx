import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from '@mui/material/Typography';
import Article from "../Article/Article";
import S from "./Modal.module.css";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalDetalhes = ({ open, handleClose }) => {

  const [article, setArticle] = useState ([]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        titulo
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          sumario
        </Typography>
        <Button>Ir para o site</Button>
      </Box>
    </Modal>
  );
};

export default ModalDetalhes;
