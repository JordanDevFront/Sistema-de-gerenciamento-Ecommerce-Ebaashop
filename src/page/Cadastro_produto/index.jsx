import React, { useEffect, useState } from "react";
import axios from 'axios';
import { CiDeliveryTruck } from "react-icons/ci";
import { Container, ColVertical, ColsVert, ColIteim , Display, Image, Info, Title, ColInfo} from "./style";
import Prod from "../../imagens/prod.jpg"


function CadastroProduto() {
  const [nome_prod, setNome_prod] = useState("");//
    const [descricao, setDescricao] = useState("");
    const [classificacao, setClassificacao] = useState("");//
    const [id_categoria, setId_categoria] = useState(null);//
    const [preco, setPreco] = useState("");
    const [qnt, setQnt] = useState(null);
    const [desconto, setDesconto] = useState("");//
    const [preco_desconto, setPreco_desconto] = useState("");//
    const [qnt_parcelas, setQnt_parcelas] = useState(null);//
    const [valor_parcela, setValor_parcela] = useState("");//
    const [frete, setFrete] = useState(null);//
    const [valor_frete, setValor_frete] = useState("");//

  useEffect(()=>{

  },[])

  return (
    <>
      <Container>
        <ColVertical>
          <ColsVert>
            <ColIteim><label>Kit de panelas antiaderente cor vermelha</label></ColIteim>
            <ColIteim><label>Novo</label></ColIteim>
            <ColIteim>
            <CiDeliveryTruck id="icon"/> <span> Frete incluso</span>
            </ColIteim>
            <ColIteim><label className="cat">Cozinha</label></ColIteim>
          </ColsVert>

          <div id="info">
            <Display>
              <Image>
                <img src={Prod} />
              </Image>
              <Info>
                <Display>
                  <Title>
                    <span>Desconto</span>
                    <br />
                    <ColInfo>Sim</ColInfo>
                  </Title>

                  <Title>
                    <span>Preço desconto</span>
                    <br />
                    <ColInfo>R$0.00</ColInfo>
                  </Title>

                  <Title>
                    <span>Qnt Parcelas</span>
                    <br />
                    <ColInfo>4</ColInfo>
                  </Title>

                  <Title>
                    <span>Preço das parcelas</span>
                    <br />
                    <ColInfo>R$0.00</ColInfo>
                  </Title>
                  <Title>
                    <span>Valor frete</span>
                    <br />
                    <ColInfo>R$0.00</ColInfo>
                  </Title>
                </Display>
              </Info>
            </Display>
          </div>
        </ColVertical>
      </Container>
    </>
  );
}

export default CadastroProduto;
