import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BiChevronDown } from "react-icons/bi";
import { FiPhone, FiAtSign, FiUser, FiCalendar } from "react-icons/fi";
import { Col, Container, Modal, ModalEndereço } from "./style";
import Localizacao from "../../imagens/localizacao.jpg"

function Cadastro() {
  const [Dados, setDados] = useState([]);
  const [cpf, setCpf] = useState("");
  const [nome_completo, setNomeCompleto] = useState("");
  const [data_nasc, setData_nasc] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("")

  useEffect(()=>{
    getUser();
  },[])

  async function getUser() {
    try {
      const response = await axios.get('http://localhost:8080/registrations/');
      console.log(response);
      setDados(response.data)
      setCpf(response.data.cpf);
      setNomeCompleto(response.data.nome_completo);
      setData_nasc(response.data.data_nasc);
      setCelular(response.data.celular);
      setEmail(response.data.email);
      setCep(response.data.cep);
      setEndereco(response.data.endereco);
      setNumero(response.data.numero)
      setBairro(response.data.bairro)
      setCidade(response.data.cidade);
      setUf(response.data.uf)

    } catch (error) {
      console.error(error);
    }
  }

  return (
   <>
      <Container>

        <div className="titulo">
          <label>Cadastro de clientes</label>
        </div>
        {
          Dados.map((item, index) => {
            return (
              <>
              <Modal>
              <Col><span><FiUser /> {item.nome_completo}</span></Col>
                <Col><span>{item.cpf}</span></Col>
                <Col><span><FiCalendar /> {item.data_nasc}</span></Col>
                <Col><span><FiPhone />{item.celular}</span></Col>
                <Col><span><FiAtSign /> {item.email}</span></Col>
                <div><span><BiChevronDown /></span></div>
              </Modal>
              <ModalEndereço> 
                <div className="ft-locali"><img src={Localizacao} className="img"/> </div>
                <Col> <span>{item.cep} | {item.endereco} - {item.numero} {item.bairro} | {item.cidade} - {item.uf}</span></Col>
              </ModalEndereço>
              </>
              
            );
          })

        }
      </Container>
   </>

  );
}

export default Cadastro;
