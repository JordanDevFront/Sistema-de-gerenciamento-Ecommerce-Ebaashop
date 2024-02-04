import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2"
import { Container, Col, Input } from "./style";

function CadastroProduto() {
  const [Dados, setDados] = useState([]);
  const [id_prod, setId_prod] = useState("");
  const [nome_prod, setNome_produto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [id_categoria, setId_categoria] = useState("");
  const [preco, setPreco] = useState("");
  const [qnt, setqnt] = useState("");
  const [desconto, setDesconto] = useState("");

  const [preco_desconto, setPreco_desconto] = useState("");
  const [qnt_parcelas, setQnt_parcelas] = useState("");
  const [valor_parcela, setValor_parcela] = useState("");
  const [frete, setFrete] = useState("");
  const [valor_frete, setValor_frete] = useState("");

  useEffect(()=>{

  },[])

  async function Adicionar() {
    const dados = {
        id_prod: id_prod,
      nome_prod: nome_prod,
      descricao: descricao,
      classificacao: classificacao,
      id_categoria: id_categoria,
      preco: preco,
      qnt: qnt,
      desconto: desconto,
      preco_desconto: preco_desconto,
      qnt_parcelas: qnt_parcelas,
      valor_parcela: valor_parcela,
      frete: frete,
      valor_frete: valor_frete,
    };
    axios
      .post(`http://localhost:8080/resgister/product/`, dados)
      .then(function (response) {
        Swal.fire({
          title: "Parabéns!",
          text: response.data.message,
          icon: "success",
        });
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
        Swal.fire({
          title: "Atenção!",
          text: error,
          icon: "warning",
        });
      });
  }

  return (
   <>
      <Container>

        <div className="titulo">
          <label>Cadastro de Produtos</label>
        </div>

        <form>

        <Col>
            <Input
              type="text"
              placeholder="ID"
              value={id_prod}
              onChange={(e) => {
                setId_prod(e.target.value);
              }}
            />
          </Col>


        <Col>
            <Input
              type="text"
              placeholder="Digite o nome do produto"
              value={nome_prod}
              onChange={(e) => {
                setNome_produto(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Digite a descrição do produto"
              value={descricao}
              onChange={(e) => {
                setDescricao(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Digite a classificação do produto"
              value={classificacao}
              onChange={(e) => {
                setClassificacao(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="number"
              placeholder="Categoria"
              value={id_categoria}
              onChange={(e) => {
                setId_categoria(e.target.value);
              }}
            />
          </Col>


          <Col>
            <Input
              type="text"
              placeholder="Digite o preço do produto"
              value={preco}
              onChange={(e) => {
                setPreco(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="number"
              placeholder="Quantidade"
              value={qnt}
              onChange={(e) => {
                setqnt(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Desconto do produto"
              value={desconto}
              onChange={(e) => {
                setDesconto(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Preço do produto com desconto"
              value={preco_desconto}
              onChange={(e) => {
                setPreco_desconto(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="number"
              placeholder="Quantidade de parcelas"
              value={qnt_parcelas}
              onChange={(e) => {
                setQnt_parcelas(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Digite o valor das parcelas"
              value={valor_parcela}
              onChange={(e) => {
                setValor_parcela(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="number"
              placeholder="Frete do produto"
              value={frete}
              onChange={(e) => {
                setFrete(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Digite o valor do frete"
              value={valor_frete}
              onChange={(e) => {
                setValor_frete(e.target.value);
              }}
            />
          </Col>

          <input
            type="button"
            name="enviar"
            id="enviar"
            onClick={() => {
              Adicionar();
            }}
            value=" Enviar "
          />

        </form>

        
      </Container>
   </>

  );
}

export default CadastroProduto;
