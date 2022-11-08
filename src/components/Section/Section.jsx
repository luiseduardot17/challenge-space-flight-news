import React, { useEffect, useState } from 'react'
import Article from '../Article/Article';
import S from './Section.module.css';

const Section = () => {
    const [article, setArticle] = useState ([]);
    const [limit, setLimit] = useState(2);


    async function handleReq() {
        const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}`;

        const response = await fetch(url);
        const json = await response.json();
        setArticle([...article,...json]);
        console.log(json);
    }

    const addArticle = () => {
        setLimit(limit + 1);
    }

    useEffect(() => {
        handleReq();
    }, [limit]);


    return (
    <section>
        <div className={S.artigos}>
        {article.map((article, index) => {
        return (
            <Article key={index}
            imagem={article.imageUrl}
            titulo={article.title}
            data={article.publishedAt}
            site={article.newsSite}
            sumario={article.summary}
            />
        );
      })}
        </div>
      <div>
        <button className={S.btn} onClick={addArticle}>Carregar mais</button>
      </div>
    </section>
    
  )
}

export default Section
