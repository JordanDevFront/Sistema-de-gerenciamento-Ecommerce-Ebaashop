import React, {useState} from "react";
import {
  Modal,
  Container,
  ItemProd,
  List,
  Item,
  ModalContainer,
  Image,
  Dados,
  ListProdutos,
  Li,
} from "./style";
import { CiLogin, CiExport } from "react-icons/ci";

import perfil from "../../imagens/perfil.jpg";

function ModalDasBoard() {

    const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModalDeVendas = () => {
    setMostrarModal(true);
  };

  const fecharModalDeVendas = () =>{
    setMostrarModal(false);
  }
  return (
    <>
      <Container>
        <ItemProd>
          <List>
            <Item>
              <span>Pedido</span>
            </Item>
            <Item>
              <span>Forma de pagamento</span>
            </Item>
            <Item>
              <span>Status</span>
            </Item>
            <Item>
              <span>Valor Total</span>
            </Item>
            <Item>
              <span>UF</span>
            </Item>
            <Item>
              <span>Detalhe</span>
            </Item>
          </List>

          <List>
            <Item>
              <label>100</label>
            </Item>
            <Item>
              <label>Cartão de crédito</label>
            </Item>
            <Item>
              <label>Pago</label>
            </Item>
            <Item>
              <label>R$37.60</label>
            </Item>
            <Item>
              <label>São Paulo</label>
            </Item>
            <Item>
              <label>
                <CiLogin className="icon-font" onClick={abrirModalDeVendas} />
              </label>
            </Item>
          </List>
        </ItemProd>

        {mostrarModal && (
          <ModalContainer>
            <div className="container">
              <div className="btn-fechar" onClick={fecharModalDeVendas}>
                x
              </div>
            </div>
            <Modal>
              <Image>
                <img src={perfil} />
              </Image>

              <Dados>
                <ul>
                  <li>
                    <strong>Nome:</strong>
                    <span>Jordan Ribeiro Faustino</span>
                  </li>

                  <li>
                    <strong>CPF:</strong>
                    <span>447.403.478-30</span>
                  </li>
                  <li>
                    <strong>Celular:</strong>
                    <span>(11)95389-1321</span>
                  </li>
                  <li>
                    <strong>E-mail:</strong>
                    <span>jordanfaustino32@gmail.com</span>
                  </li>
                </ul>
              </Dados>

              <span className="line"></span>

              <Dados>
                <ul>
                  <li>
                    <strong>CEP:</strong>
                    <span>08081-000</span>
                  </li>

                  <li>
                    <strong>Endereço:</strong>
                    <span>Rua: Jesus de Nazaré, 21</span>
                  </li>
                  <li>
                    <strong>Bairro:</strong>
                    <span>JD Miranda</span>
                  </li>
                  <li>
                    <strong>Cidade:</strong>
                    <span>Itaquaquecetuba - São Paulo/SP</span>
                  </li>
                </ul>
              </Dados>
            </Modal>

            <h3>Identificação dos bens</h3>

            <ListProdutos>
              <Li>
                <span>Nome do produto</span>
                <br />
                <label>Caneta Bic Azul</label>
              </Li>

              <Li>
                <span>Qnt</span>
                <br />
                <label>5</label>
              </Li>

              <Li>
                <span>Valor unitário</span>
                <br />
                <label>R$1.90</label>
              </Li>
            </ListProdutos>

            <div className="line-vert"></div>

            <h4>Valor Total</h4>
            <span className="vl-total">R$9.50</span>

            <div className="btns">
              <div className="btn-display">
                <div className="exportar">
                  <a href="#" className="exportPDF">
                    <CiExport />
                  </a>
                </div>
                <div className="importar">
                  <input type="file" id="fileInput" class="inputfile" />
                  <label for="fileInput" className="custom-file-upload">
                    Escolher arquivo
                  </label>
                </div>

                <div className="enviar">
                  <a href="#" className="InputButton">
                    Enviar
                  </a>
                </div>
              </div>
            </div>
          </ModalContainer>
        )}
      </Container>
    </>
  );
}

export default ModalDasBoard;
