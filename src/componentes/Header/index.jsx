import React from "react";
import Logotipo from "../../imagens/logotipo.png"
import { HeaderCSS } from "./style";

export function HeaderLogado() {


  return (
      <HeaderCSS>
        <img src={Logotipo} className="img"/>
      </HeaderCSS>

  );
}