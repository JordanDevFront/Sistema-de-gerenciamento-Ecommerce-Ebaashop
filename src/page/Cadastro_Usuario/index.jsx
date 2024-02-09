import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2"
import { BiChevronDown } from "react-icons/bi";
import { FiPhone, FiAtSign, FiUser, FiCalendar } from "react-icons/fi";
import { Col, Container, Modal, ModalEndereço } from "./style";
import Localizacao from "../../imagens/localizacao.jpg"

function Cadastro_Usuario() {
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
    fetchData();
  },[])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/registrations/', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });

      const data = await response.json();

      if(response.status === 200){
        
        setDados(data);
        console.log("Dados de clientes:", data);
        setCpf(data.cpf);
        setNomeCompleto(data.nome_completo);
        setData_nasc(data.data_nasc);
        setCelular(data.celular);
        setEmail(data.email);
        setCep(data.cep);
        setEndereco(data.endereco);
        setNumero(data.numero);
        setBairro(data.bairro);
        setCidade(data.cidade);
        setUf(data.uf);
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
      <>
      <Container>

        <div className="titulo">
          <label>Cadastro de usuários</label>
        </div>
        {
          Dados.map((item, index) => {
            return (
              <>
              <Modal key={index.cpf}>
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
   </>

  );
}

export default Cadastro_Usuario;
