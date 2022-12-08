import React, { useMemo, useState } from "react";
import S from "./Header.module.css";
import { IoIosRocket} from "react-icons/io";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalProvider";
import search from "../../assets/search.svg"
import Article from "../Article/Article";

const Header = () => {
  const [busca, setBusca] = useState("");
  const { article } = useContext(ModalContext);

  // const artigosFiltrados = useMemo(() => {
  //   const lowerBusca = busca.toLowerCase();
  //   return article.filter((artigo) =>
  //     artigo.toLowerCase().includes(lowerBusca)
  //   );
  // }, [busca]);

  // {
  //   artigosFiltrados.map((artigo) => <Article titulo={titulo} />);
  // }
  console.log(busca);

  return (
    <div className={S.header}>
      <nav class="navbar navbar-expand-lg p-5">
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <button class="btn btn-warning me-2" type="submit">
            <img src={search} alt="icone de lupa" className={S.icone}/>
            </button>
          </form>
          <div class="dropdown">
            <button
              class="btn btn-warning dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ordenar
            </button>
            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" type="button">
                  Mais antigas
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Mais novas
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={S.divIcone}>
      <div className={S.iconeArea}>
        <IoIosRocket size="60px" />
      </div>
      </div>
      
      <div className={S.titulo}>
        <h1>Space Flight News</h1>
      </div>
    </div>
  );
};

export default Header;
