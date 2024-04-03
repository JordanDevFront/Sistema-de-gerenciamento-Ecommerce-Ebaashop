import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"
import { Container, ColVertical, ColsVert, ColIteim , ComponenteLoading, Loading, ComponenteMensagem, ColDetalhes, Image, Title, Info, Col, Preco, Descricao, Btns, ColBtn, FreteIncluso, FreteNaoIncluso, Categoria} from "./style";
import { Colunas } from "../../page/styleGlobalPage"
import { HeaderLogado } from "../../componentes/Header";
import { CiImport } from "react-icons/ci";


function CadastroProduto() {
    const [data, setDados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [URLIMAGE, seturlimage] = useState("https://lh3.googleusercontent.com/pw/")
    const [nenhumRegistro, setnenhumRegistro] = useState("Nenhum registro")


    useEffect(() => {
      setTimeout(() => {
        getListProduto();
      setLoading(false)
      }, 5000)

    }, []);

    const getListProduto = async () => {
      try {
        const response = await fetch('http://localhost:8080/lista/produtos', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        });
  
        const data = await response.json();
  
        if(response.status === 200){
          setDados(data);
        }
  
        if (response.status === 401) {
          console.error('Autenticação falhada. Redirecionando para a página de login.');
          Swal.fire({
            title: "Seu token expirou!",
            text: "Vamos te redirecionar para tela de login.",
            icon: "error",
          });
          setTimeout(() => {
            window.location = "/";
          }, 5000);        
          
        } else if (!response.ok) {
          throw new Error('Erro ao obter os dados');
        }
      } catch (error) {
        console.error('Erro:', error.message);
      }
    };


  return (
    <>
      <HeaderLogado />
      <Container>
        {loading ? (
          <ComponenteLoading>
            <Loading>Carregando...</Loading>
          </ComponenteLoading>
          
        ) : (
          <>
            {data === null || data.length === 0 ? (
              <ComponenteMensagem>{nenhumRegistro}</ComponenteMensagem>
            ) : (
              data.map((item, index) => {
                let imagem = URLIMAGE + item.img;
                return (
                  <ColVertical key={index}>
                    <Colunas>
                      <ColsVert>
                        <ColIteim>
                          <label>{item.nome_prod}</label>
                        </ColIteim>
                        <ColIteim>
                          <label className="clas">{item.classificacao}</label>
                        </ColIteim>
                        <ColIteim>
                          {item.frete === 1
                            ? <FreteIncluso>Frete incluso</FreteIncluso>
                            : <FreteNaoIncluso>Frete não incluso</FreteNaoIncluso>}
                        </ColIteim>
                        <ColIteim>
                          <Categoria>
                            {item.id_categoria === 1 ? "Cozinha" : "Outros"}
                          </Categoria>
                        </ColIteim>
                        <ColDetalhes>
                          <CiImport className="detalhes" />
                        </ColDetalhes>
                      </ColsVert>
                    </Colunas>

                    <div id="info">
                      <ColsVert>
                        <Image>
                          <img src={imagem} alt="img_produto" />
                        </Image>
                        <Info>
                          <Col>
                            <Title>
                              <span>Desconto</span>
                            </Title>
                            <br />
                            <span>{item.desconto}</span>
                          </Col>
                          <Col>
                            <Title>
                              <span>Preço do desconto</span>
                            </Title>
                            <br /> <span>{item.preco_desconto}</span>
                          </Col>
                          <Col>
                            <Title>
                              <span>Qnt parcelas</span>
                            </Title>
                            <br />
                            <span>{item.qnt_parcelas}</span>
                          </Col>
                          <Col>
                            <Title>
                              <span>Preço das parcelas</span>
                            </Title>
                            <br />
                            <span>R$ {item.valor_parcela}</span>
                          </Col>
                          <Col>
                            <Title>
                              <span>Valor do frete</span>
                            </Title>
                            <br />
                            <span>R$ {item.valor_frete}</span>
                          </Col>
                        </Info>
                      </ColsVert>

                      <Descricao>
                        <strong>Descrição: </strong>
                        {item.descricao}
                      </Descricao>
                      <br />
                      <Preco>R$ {item.preco}</Preco>
                      <Btns>
                        <ColBtn>
                          <button>Novo</button>
                          <button>Editar</button>
                          <button>Excluir</button>
                        </ColBtn>
                      </Btns>
                    </div>
                  </ColVertical>
                );
              })
            )}
          </>
        )}
      </Container>
    </>
  );
}

export default CadastroProduto;
