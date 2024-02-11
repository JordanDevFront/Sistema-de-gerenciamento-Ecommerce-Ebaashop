import React, {useState, useEffect} from "react";
import Logotipo from "../../imagens/logotipo.png"
import { HeaderCSS } from "./style";
import { CiUser } from "react-icons/ci";

export function HeaderLogado() {

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const storedUsuario = localStorage.getItem("usuario");
    setUsuario(storedUsuario);
  }, []);


  return (
      <HeaderCSS>
        <div className="flex">
        <div className="logo"><a href="/Home"> <img src={Logotipo} className="img"/></a></div>
          <div className="user"><span>Olá, <strong>{usuario}</strong>! <label className="icon-user"><CiUser/></label></span></div>
        </div>
      </HeaderCSS>

  );
}