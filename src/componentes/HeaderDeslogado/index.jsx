import React from "react";
import Logotipo from "../../imagens/logotipo.png"
import { HeaderCSS } from "../styleGlobal";

export function HeaderDeslogada() {

  return (
    <HeaderCSS>
      <div className="flex">
        <div className="logo">
          <a href="/">
            {" "}
            <img src={Logotipo} className="img" />
          </a>
        </div>
      </div>
    </HeaderCSS>
  );
}