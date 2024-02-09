import React, {useState} from "react";
import { Container, Botao, MenuCSS } from "./style";
import { CiShare1 } from "react-icons/ci";
import { ModalProduto } from "../Modal_cad_produto";
import { ModalUsuario } from "../Modal_cad_usuario";

export function MenuLateral() {

  const [mostrarModalProduto, setMostrarModalProduto] = useState(false);
  const [mostrarModalUsuario, setMostrarModalUsuario] = useState(false);

  const abrirModalProduto = () => {
    setMostrarModalProduto(true);
    setMostrarModalUsuario(false);
  };

  const abrirModalPessoa = () => {
    setMostrarModalProduto(false);
    setMostrarModalUsuario(true);
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

          <Botao>
            <div className="base">
              <div className="titulo">
                <span>Cadastrar categoria </span>
              </div>
              <div className="icon">
                <CiShare1 id="icon" />
              </div>
            </div>
          </Botao>
        </MenuCSS>

        {mostrarModalProduto && <ModalProduto />}
      {mostrarModalUsuario && <ModalUsuario />}
      </Container>
    </>
  );
}