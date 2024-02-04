import React, {useState} from "react";
import { Container, Botao, MenuCSS } from "./style";
import { CiShare1 } from "react-icons/ci";
import { ModalProduto } from "../Modal_cad_produto";
import { ModalPessoa } from "../Modal_cad_pessoa";

export function MenuLateral() {

  const [mostrarModalProduto, setMostrarModalProduto] = useState(false);
  const [mostrarModalPessoa, setMostrarModalPessoa] = useState(false);

  const abrirModalProduto = () => {
    setMostrarModalProduto(true);
    setMostrarModalPessoa(false);
  };

  const abrirModalPessoa = () => {
    setMostrarModalProduto(false);
    setMostrarModalPessoa(true);
  };


  return (
    <>
      <Container>
        <MenuCSS>
          <Botao  onClick={abrirModalProduto}>
            <div className="base">
              <div className="titulo">
                <span>Cadastrar produto </span>
              </div>
              <div className="icon">
                <CiShare1 id="icon" />
              </div>
            </div>
          </Botao>

          <Botao onClick={abrirModalPessoa}>
            <div className="base">
              <div className="titulo">
                <span>Cadastrar usuário </span>
              </div>
              <div className="icon">
                <CiShare1 id="icon" />
              </div>
            </div>
          </Botao>
        </MenuCSS>

        {mostrarModalProduto && <ModalProduto />}
      {mostrarModalPessoa && <ModalPessoa />}
      </Container>
    </>
  );
}