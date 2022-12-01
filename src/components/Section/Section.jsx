import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Article from "../Article/Article";
import S from "./Section.module.css";
import { ModalContext } from "../../context/ModalProvider";

const Section = () => {
  const [article, setArticle] = useState([]);
  const [limit, setLimit] = useState(10);
  const {bd, setBd} = useContext(ModalContext)

  async function handleReq() {
    const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}`;
    const response = await fetch(url);
    const json = await response.json();
    setArticle([...json]);
    setBd([...article]);
    
  }

  const addArticle = () => {
    setLimit(limit + 10);
  };

  useEffect(() => {
    handleReq();
  }, [limit]);

  return (
    <section>
      <div className={S.artigos}>
        {article.map((article, index) => {
          return (
            <Article
              key={index}
              imagem={article.imageUrl}
              titulo={article.title}
              data={article.publishedAt}
              site={article.newsSite}
              sumario={article.summary}
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
