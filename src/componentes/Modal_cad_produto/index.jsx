import React, {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { ModalCSS, Formulario, Cols, Col, Input, Btn } from "../styleGlobal"
import { BsCheck2, BsX } from "react-icons/bs";

export function ModalProduto() {
    //pronto
    const [nome_prod, setNome_prod] = useState("");
    const [descricao, setDescricao] = useState("");
    const [classificacao, setClassificacao] = useState("");
    const [id_categoria, setId_categoria] = useState(null);
    const [preco, setPreco] = useState("");
    const [qnt, setQnt] = useState(null);
    const [desconto, setDesconto] = useState("");
    const [preco_desconto, setPreco_desconto] = useState("");
    const [qnt_parcelas, setQnt_parcelas] = useState(null);
    const [valor_parcela, setValor_parcela] = useState("");
    const [frete, setFrete] = useState(null);
    const [valor_frete, setValor_frete] = useState("");

    async function Enviar() {
      try {
        const response = await axios.post(
          "http://localhost:8080/resgister/product/",
          {
            nome_prod,
            descricao,
            classificacao,
            id_categoria,
            preco,
            qnt,
            desconto,
            preco_desconto,
            qnt_parcelas,
            valor_parcela,
            frete,
            valor_frete,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
    
        if (response.status === 401) {
          console.log("erro ao cadastrar!")
        } else {
          Swal.fire({
            icon: "success",
            title: "Dados Enviado!",
            text: "response.data.message",
          }).then(() => {
            window.location = "/CadastroProduto";
          });
        }
      } catch (error) {
        console.error("Erro durante o cadastro:", error.message);
        Swal.fire({
          icon: "error",
          title: "Erro!",
          text: "Erro durante o cadastro!",
        });
      }
    }


    return (
      <>
        <ModalCSS>
          <div className="flex">
            <div className="titulo-modal">
              <span>Cadastro de Produtos</span>
            </div>
            <div className="barra-fechar">
              <span>X</span>
            </div>
          </div>
  
          <Formulario>
            <Cols>
              <Col>
                <label>Nome do Produto</label>
                <Input
                  type="text"
                  value={nome_prod}
                  onChange={(e) => {
                    setNome_prod(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      nome_prod === "" || nome_prod === null ? "icon-error" : "icon-nick"
                    }
                  >
                    {nome_prod === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
              </Col>
  
              <Col>
                <label>Descrição</label>
                <Input
                  type="text"
                  value={descricao}
                  onChange={(e) => {
                    setDescricao(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      descricao === "" || descricao === null ? "icon-error" : "icon-nick"
                    }
                  >
                    {descricao === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
              </Col>
  
              <Col>
                <label>Classificação</label>
                <Input
                  type="text"
                  value={classificacao}
                  onChange={(e) => {
                    setClassificacao(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      classificacao === "" || classificacao === null ? "icon-error" : "icon-nick"
                    }
                  >
                    {classificacao === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
              </Col>
            </Cols>
  
            <Cols>
              <Col>
                <label>Categoria</label>
                <Input
                  type="text"
                  value={id_categoria}
                  onChange={(e) => {
                    setId_categoria(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      id_categoria === "" || id_categoria === null
                        ? "icon-error"
                        : "icon-nick"
                    }
                  >
                    {id_categoria === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
              </Col>
  
              <Col>
                <label>Preço do produto</label>
                <Input
                  type="text"
                  value={preco}
                  onChange={(e) => {
                    setPreco(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      preco === "" || preco === null
                        ? "icon-error"
                        : "icon-nick"
                    }
                  >
                    {preco === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
              </Col>
  
              <Col>
                <label>Quantidade</label>
                <Input
                  type="text"
                  value={qnt}
                  onChange={(e) => {
                    setQnt(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      qnt === "" || qnt === null
                        ? "icon-error"
                        : "icon-nick"
                    }
                  >
                    {qnt === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
              </Col>
            </Cols>
  
            <Cols>
              <Col>
                <label>Desconto</label>
                <Input
                  type="text"
                  value={desconto}
                  onChange={(e) => {
                    setDesconto(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      desconto === "" || desconto === null ? "icon-error" : "icon-nick"
                    }
                  >
                    {desconto === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
              </Col>
  
              <Col>
                <label>Preco do desconto</label>
                <Input
                  type="text"
                  value={preco_desconto}
                  onChange={(e) => {
                    setPreco_desconto(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      preco_desconto === "" || preco_desconto === null ? "icon-error" : "icon-nick"
                    }
                  >
                    {preco_desconto === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
              </Col>
  
              <Col>
                <label>Parcelas</label>
                <Input
                  type="text"
                  value={qnt_parcelas}
                  onChange={(e) => {
                    setQnt_parcelas(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      qnt_parcelas === "" || qnt_parcelas === null
                        ? "icon-error"
                        : "icon-nick"
                    }
                  >
                    {qnt_parcelas === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
              </Col>
            </Cols>
  
            <Cols>
              <Col>
                <label>Preço das parcelas</label>
                <Input
                  type="text"
                  value={valor_parcela}
                  onChange={(e) => {
                    setValor_parcela(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      valor_parcela === "" || valor_parcela === null ? "icon-error" : "icon-nick"
                    }
                  >
                    {valor_parcela === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
              </Col>
  
              <Col>
                <label>Frete</label>
                <Input
                  type="text"
                  value={frete}
                  onChange={(e) => {
                    setFrete(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      frete === "" || frete === null ? "icon-error" : "icon-nick"
                    }
                  >
                    {frete === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
              </Col>
  
              <Col>
                <label>Preço do frete</label>
                <Input
                  type="text"
                  value={valor_frete}
                  onChange={(e) => {
                    setValor_frete(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      valor_frete === "" || valor_frete === null
                        ? "icon-error"
                        : "icon-nick"
                    }
                  >
                    {valor_frete === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
              </Col>
            </Cols>
  
            <Cols>
              <Btn>
                <div className="float">
                  <div className="cancel">
                    <button class="button-cancelar bg-color-cancel" role="button">
                      Cancelar
                    </button>
                  </div>
                  <div className="salvar">
                    <button
                      class="button-salvar bg-color-bule"
                      role="button"
                      onClick={
                        Enviar}
                    >
                      Salvar
                    </button>
                  </div>
                </div>
              </Btn>
            </Cols>
          </Formulario>
        </ModalCSS>
      </>
    );
}