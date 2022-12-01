import React, { createContext, useState } from 'react'

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {

    const [bd, setBd] = useState([]);

    function handleClick(e) {
        e.preventDefault();
        setBd([...bd, article]);
        };

    const contexto = {
        bd: bd,
        handleClick: handleClick,
    };

  return (
    <ModalContext.Provider value={contexto}>
      {children}
    </ModalContext.Provider>
  )
};

export default ModalProvider
