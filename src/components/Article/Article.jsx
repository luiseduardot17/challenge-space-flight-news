import React,{useContext, useState} from "react";
import Button from '@mui/material/Button';
import S from "./Article.module.css";
import ModalDetalhes from "../Modal/Modal";

const Article = ({ imagem, titulo, data, site, sumario, id }) => {

  const [open, setOpen] = useState(false);
  

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={S.article}>
      <div className={S.artigo1}>
        <div>
          <img src={imagem} />
        </div>
        <div className={S.container}>
          <h2>{titulo}</h2>
          <div className={S.data}>
            <h6>{data}</h6>
            <button disabled="disabled" className={S.site}>
              {site}
            </button>
          </div>
          <p>{sumario}</p>
          <Button variant="contained" className={S.btnMais} onClick={openModal} >Ver mais</Button>
          <ModalDetalhes open={open} handleClose={closeModal} id={id}/>
        </div>
      </div>
      
    </div>
    
  );
  
  
};

export default Article;
