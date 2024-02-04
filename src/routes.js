// router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Cadastro from "./page/Cadastro_clientes";
import CadastroProduto from "./page/Cadastro_produto";
import HomeDeslogado from "./page/HomeDeslogado";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeDeslogado/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/CadastroCliente" element={<Cadastro/>}/>
        <Route path="/CadastroProduto" element={<CadastroProduto/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
