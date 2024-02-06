import React, { useState } from "react";
import { ModalCSS, Formulario, Cols, Col, Input, Btn } from "./style";
import { BsCheck2, BsX } from "react-icons/bs";
import Swal from "sweetalert2";

export function ModalPessoa() {
  //pronto
  const [cpf, setCpf] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [nome, setNomeCompleto] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");


  const EnviarDados = async () => {
    if (
      cpf === "" ||
      dataNasc === "" ||
      nome === "" ||
      celular === "" ||
      email === "" ||
      usuario === "" ||
      senha === "" ||
      cep === "" ||
      endereco === "" ||
      numero === "" ||
      bairro === "" ||
      cidade === "" ||
      uf === ""
    ) {
      Swal.fire({
        title: "Atenção!",
        text: "Você deve preencher todos os campos!",
        icon: "warning",
      });
    } else {
      Swal.fire({
        title: "Atenção!",
        text: "Dados enviado com sucesso!",
        icon: "success",
      });
      setCpf("");
      setDataNasc("");
      setNomeCompleto("");
      setCelular("");
      setEmail("");
      setUsuario("");
      setSenha("");
      setCep("");
      setEndereco("");
      setNumero("");
      setBairro("");
      setCidade("");
      setUf("");
    }
  };

  const fecharModal = () => {
   
  }

  return (
    <>
      <ModalCSS>
      <div className="flex">
        <div className="titulo-modal">
          <span>Cadastro de usuários</span>
        </div>
        <div className="barra-fechar" onClick={fecharModal}>
          <span>X</span>
        </div>
      </div>

      <Formulario>
        <Cols>
          <Col>
            <label>CPF</label>
            <Input
              type="text"
              value={cpf}
              onChange={(e) => {
                setCpf(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  cpf === "" || cpf === null ? "icon-error" : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>

          <Col>
            <label>Data de nascimento</label>
            <Input
              type="text"
              value={dataNasc}
              onChange={(e) => {
                setDataNasc(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  dataNasc === "" || dataNasc === null
                    ? "icon-error"
                    : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>

          <Col>
            <label>Nome completo</label>
            <Input
              type="text"
              value={nome}
              onChange={(e) => {
                setNomeCompleto(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  nome === "" || nome === null ? "icon-error" : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>
        </Cols>

        <Cols>
          <Col>
            <label>Celular</label>
            <Input
              type="text"
              value={celular}
              onChange={(e) => {
                setCelular(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  celular === "" || celular === null
                    ? "icon-error"
                    : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>

          <Col>
            <label>E-mail</label>
            <Input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  email === "" || email === null ? "icon-error" : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>

          <Col>
            <label>Usuário</label>
            <Input
              type="text"
              value={usuario}
              onChange={(e) => {
                setUsuario(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  usuario === "" || usuario === null
                    ? "icon-error"
                    : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>
        </Cols>

        <Cols>
          <Col>
            <label>Senha</label>
            <Input
              type="password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  senha === "" || senha === null ? "icon-error" : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>

          <Col>
            <label>CEP</label>
            <Input
              type="text"
              value={cep}
              onChange={(e) => {
                setCep(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  cep === "" || cep === null ? "icon-error" : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>

          <Col>
            <label>Endereço</label>
            <Input
              type="text"
              value={endereco}
              onChange={(e) => {
                setEndereco(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  endereco === "" || endereco === null
                    ? "icon-error"
                    : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>
        </Cols>

        <Cols>
          <Col>
            <label>Número</label>
            <Input
              type="text"
              value={numero}
              onChange={(e) => {
                setNumero(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  numero === "" || numero === null ? "icon-error" : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>

          <Col>
            <label>Bairro</label>
            <Input
              type="text"
              value={bairro}
              onChange={(e) => {
                setBairro(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  bairro === "" || bairro === null ? "icon-error" : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>

          <Col>
            <label>Cidade</label>
            <Input
              type="text"
              value={cidade}
              onChange={(e) => {
                setCidade(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  cidade === "" || cidade === null ? "icon-error" : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>
        </Cols>

        <Cols>
          <Col>
            <label>Estado / UF</label>
            <Input
              type="text"
              value={uf}
              onChange={(e) => {
                setUf(e.target.value);
              }}
            />{" "}
            <div className="flex-icon">
              <div
                id="icon-string"
                className={
                  uf === "" || uf === null ? "icon-error" : "icon-nick"
                }
              >
                {cpf === "" ? <BsX /> : <BsCheck2 />}
              </div>
            </div>
          </Col>

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
                  onClick={EnviarDados}
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
