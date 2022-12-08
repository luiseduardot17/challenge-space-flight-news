import React, { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [article, setArticle] = useState([]);

  const [limit, setLimit] = useState(10);

  async function handleReq() {
    const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}`;
    const response = await fetch(url);
    const json = await response.json();
    setArticle([...json]);
  }

  const addArticle = () => {
    setLimit(limit + 10);
  };

  useEffect(() => {
    handleReq();
  }, [limit]);

  const contexto = {
    article: article,
    handleReq: handleReq,
    addArticle: addArticle,
  };

  return (
    <ModalContext.Provider value={contexto}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
