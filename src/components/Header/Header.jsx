import React, { useMemo, useState } from "react";
import S from "./Header.module.css";
import { TextField } from "@mui/material";
import { IoIosRocket, IoIosSearch } from "react-icons/io";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Article from "../Article/Article";
import Section from "../Section/Section";

const Header = () => {
  const [article, setArticle] = useState ([]);
  const [busca, setBusca] = useState('');
  
  const artigosFiltrados = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return article.filter((artigo)=> artigo.toLowerCase().includes(lowerBusca));
  }, [busca])

  {artigosFiltrados.map((artigo) => (
    <Article key={index}
    imagem={artigo.imageUrl}
    titulo={artigo.title}
    data={artigo.publishedAt}
    sumario={artigo.summary} />
  ))}

  return (
    <div className={S.header}>
      <div className={S.searchArea}>
        <TextField
          id="outlined-basic"
          placeholder="NASA"
          label="Search"
          variant="outlined"
          size="small"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <IoIosSearch size="25px" />

        <FormControl sx={{ m: 0, minWidth: 150 }} size="small">
          <InputLabel id="demo-select-small">Ordenar</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Ordenar"
          >
            <MenuItem value={1}>Mais antigas</MenuItem>
            <MenuItem value={2}>Mais novas</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={S.iconeArea}>
        <IoIosRocket size="60px" />
      </div>
      <div className={S.titulo}>
        <h1>Space Flight News</h1>
      </div>
      
    </div>
  );
};

export default Header;
