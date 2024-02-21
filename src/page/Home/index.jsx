import React from "react";
import { MenuLateral } from "../../componentes/MenuLateral";
import {HeaderLogado} from "../../componentes/Header"
import { Display } from "./style";
import ModalDasBoard from "../../componentes/ModalDeshboard";

function Home() {
  return (
   <>
   <HeaderLogado/>
   <Display>
   <MenuLateral/>
   <ModalDasBoard/>
   </Display>
   </>

  );
}

export default Home;
