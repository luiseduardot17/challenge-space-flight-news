import React from "react";
import S from "./Article.module.css";

const Article = ({ imagem, titulo, data, site, sumario }) => {
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
          <button className={S.btnMais}>Ver mais</button>
        </div>
      </div>

      <div className={S.artigo2}>
        <div className={S.container}>
          <h2>{titulo}</h2>
          <div className={S.data}>
            <h6>{data}</h6>
            <button disabled="disabled" className={S.site}>
              {site}
            </button>
          </div>
          <p>{sumario}</p>
          <button className={S.btnMais}>Ver mais</button>
        </div>
        <div>
          <img src={imagem} />
        </div>
      </div>
    </div>
  );
};

export default Article;
