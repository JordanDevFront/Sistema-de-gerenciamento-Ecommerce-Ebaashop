import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"
import { Container, ColVertical, ColsVert, ColIteim , Display, Image, Title, Info, Col, Preco, Descricao, Btns, ColBtn} from "./style";
import { Coluna, Colunas } from "../../page/styleGlobalPage"
import Prod from "../../imagens/prod.jpg"
import { HeaderLogado } from "../../componentes/Header";


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
    const [data, setDados] = useState([]);


    const [loading, setLoading] = useState(true);


    useEffect(() => {
      setTimeout(() => {
        fetchData();
      setLoading(false)
      }, 5000)

    }, []);

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        });
  
        const data = await response.json();
  
        if(response.status === 200){
          
          setDados(data);
          console.log("Dados de produtos:", data);
          setNome_prod(data.nome_prod);
          setDescricao(data.descricao);
          setClassificacao(data.classificacao);
          setId_categoria(data.id_categoria);
          setPreco(data.preco);
          setQnt(data.qnt);
          setDesconto(data.desconto);
          setPreco_desconto(data.preco_desconto);
          setQnt_parcelas(data.qnt_parcelas);
          setValor_parcela(data.valor_parcela);
          setFrete(data.frete);
          setValor_frete(data.valor_frete)
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
        <Colunas>
          <Display>
            <Coluna>
              <span>Nome do produto</span>
            </Coluna>
            <Coluna>
              <span>Classificação</span>
            </Coluna>
            <Coluna>
              <span>Frete</span>
            </Coluna>
            <Coluna>
              <span>Categoria</span>
            </Coluna>
          </Display>
        </Colunas>

        {loading ? (
          <div className="loading">
            <p>Carregando...</p>
          </div>
        ) : (
          <>
            {data === null || data.length === 0 ? (
              <p className="nenhum-regis">Nenhum registro</p>
            ) : (
              data.map((item, index) => {
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
                          <span>
                            {item.frete === 1
                              ? "Frete incluso"
                              : "Frete não incluso"}
                          </span>
                        </ColIteim>
                        <ColIteim>
                          <label className="cat">
                            {item.id_categoria === 1 ? "Cozinha" : "Foda-se"}
                          </label>
                        </ColIteim>
                      </ColsVert>
                    </Colunas>

                    <div id="info">
                      <ColsVert>
                        <Image>
                          <img src={Prod} alt="Produto" />
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
