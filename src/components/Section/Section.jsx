import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Article from "../Article/Article";
import S from "./Section.module.css";
import { ModalContext } from "../../context/ModalProvider";

const Section = () => {
  
  const {article, addArticle} = useContext(ModalContext)

  return (
    <section>
      <div className={S.artigos}>
        {article.map((article, index) => {
          return (
            <Article
              key={index}
              id={article.id}
              imagem={article.imageUrl}
              titulo={article.title}
              data={article.publishedAt}
              site={article.newsSite}
              sumario={article.summary}
              url={article.url}
            />
          );
        })}
      </div>
      <div className={S.containerBtn}>
        <Button variant="contained" className={S.btn} onClick={addArticle}>
          Carregar mais
        </Button>
      </div>
    </section>
  );
};

export default Section;
