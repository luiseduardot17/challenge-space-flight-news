import React from "react";
import S from "./Article.module.css";

const Article = ({ imagem, titulo, data, site, sumario }) => {
  return (
    <div className={S.article}>
      <div>
        <img src={imagem} />
      </div>
      <div className={S.container}>
        <h2>{titulo}</h2>
        <div className={S.data}>
          <h6>{data}</h6>
          <button disabled="disabled">{site}</button>
        </div>
        <p>{sumario}</p>
      </div>
    </div>
  );
};

export default Article;
