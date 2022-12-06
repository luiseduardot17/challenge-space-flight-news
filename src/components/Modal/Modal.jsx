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

const ModalDetalhes = ({ open, handleClose, id }) => {
  const { article, limit } = useContext(ModalContext);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      id={article.id}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} id={article.id} limit={1}>
        <div className={S.container}>
          <div>
            <img src={article.imageUrl} />
          </div>
          <div className={S.containerContent}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              align="center"
            ></Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h6"
              align="left"
            >
              {article.publishedAt}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              align="center"
            >
              {article.summary}
            </Typography>
          </div>
        </div>
        {article.map((article, id) => {
          return (
            <Button
              variant="contained"
              sx={muiButton}
              key={id}
              href={article.url}
            >
              Ir para o site
            </Button>
          );
        })}
      </Box>
    </Modal>
  );
};

export default ModalDetalhes;
