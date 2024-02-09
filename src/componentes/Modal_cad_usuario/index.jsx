import React, { useState } from "react";
import axios from "axios";
import { ModalCSS, Formulario, Cols, Col, Input, Btn } from "../styleGlobal"
import { BsCheck2, BsX } from "react-icons/bs";
import Swal from "sweetalert2";

export function ModalUsuario() {
  //pronto
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [data_nasc, setDataNasc] = useState("");
  const [nome_completo, setNomeCompleto] = useState("");
  const [nome_mae, setNomeMae] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");


  async function Enviar() {
    try {
      const response = await axios.post('http://localhost:8080/auth/registerUser/', {
        cpf: cpf,
        rg: rg,
        nome_completo: nome_completo,
        nome_mae: nome_mae,
        data_nasc: data_nasc,
        celular: celular,
        email: email,
        cargo: cargo,
        username: username,
        senha: senha,
        cep: cep,
        endereco: endereco,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
  
      if (response.status === 401) {
        console.log("erro ao cadastrar!")
      } else {
        Swal.fire({
          icon: "success",
          title: "Dados Enviado!",
          text: "response.data.message",
        }).then(() => {
          window.location = "/CadastroUsuario";
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
            <span>Cadastro de usuários</span>
          </div>
          <div className="barra-fechar">
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
              <label>RG</label>
              <Input
                type="text"
                value={rg}
                onChange={(e) => {
                  setRg(e.target.value);
                }}
              />{" "}
              <div className="flex-icon">
                <div
                  id="icon-string"
                  className={
                    rg === "" || rg === null ? "icon-error" : "icon-nick"
                  }
                >
                  {rg === "" ? <BsX /> : <BsCheck2 />}
                </div>
              </div>
            </Col>

            <Col>
              <label>Nome completo</label>
              <Input
                type="text"
                value={nome_completo}
                onChange={(e) => {
                  setNomeCompleto(e.target.value);
                }}
              />{" "}
              <div className="flex-icon">
                <div
                  id="icon-string"
                  className={
                    nome_completo === "" || nome_completo === null ? "icon-error" : "icon-nick"
                  }
                >
                  {nome_completo === "" ? <BsX /> : <BsCheck2 />}
                </div>
              </div>
            </Col>
          </Cols>

          <Cols>
            <Col>
              <label>Nome da Mãe</label>
              <Input
                type="text"
                value={nome_mae}
                onChange={(e) => {
                  setNomeMae(e.target.value);
                }}
              />{" "}
              <div className="flex-icon">
                <div
                  id="icon-string"
                  className={
                    nome_mae === "" || nome_mae === null
                      ? "icon-error"
                      : "icon-nick"
                  }
                >
                  {nome_mae === "" ? <BsX /> : <BsCheck2 />}
                </div>
              </div>
            </Col>

            <Col>
              <label>Data de nascimento</label>
              <Input
                type="text"
                value={data_nasc}
                onChange={(e) => {
                  setDataNasc(e.target.value);
                }}
              />{" "}
              <div className="flex-icon">
                <div
                  id="icon-string"
                  className={
                    data_nasc === "" || data_nasc === null
                      ? "icon-error"
                      : "icon-nick"
                  }
                >
                  {data_nasc === "" ? <BsX /> : <BsCheck2 />}
                </div>
              </div>
            </Col>

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
                  {celular === "" ? <BsX /> : <BsCheck2 />}
                </div>
              </div>
            </Col>
          </Cols>

          <Cols>
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
                  {email === "" ? <BsX /> : <BsCheck2 />}
                </div>
              </div>
            </Col>

            <Col>
              <label>Cargo</label>
              <Input
                type="text"
                value={cargo}
                onChange={(e) => {
                  setCargo(e.target.value);
                }}
              />{" "}
              <div className="flex-icon">
                <div
                  id="icon-string"
                  className={
                    cargo === "" || cargo === null ? "icon-error" : "icon-nick"
                  }
                >
                  {cargo === "" ? <BsX /> : <BsCheck2 />}
                </div>
              </div>
            </Col>

            <Col>
              <label>Usuário</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />{" "}
              <div className="flex-icon">
                <div
                  id="icon-string"
                  className={
                    username === "" || username === null
                      ? "icon-error"
                      : "icon-nick"
                  }
                >
                  {username === "" ? <BsX /> : <BsCheck2 />}
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
                  {senha === "" ? <BsX /> : <BsCheck2 />}
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
                  {cep === "" ? <BsX /> : <BsCheck2 />}
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
                  {endereco === "" ? <BsX /> : <BsCheck2 />}
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
                    numero === "" || numero === null
                      ? "icon-error"
                      : "icon-nick"
                  }
                >
                  {numero === "" ? <BsX /> : <BsCheck2 />}
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
                    bairro === "" || bairro === null
                      ? "icon-error"
                      : "icon-nick"
                  }
                >
                  {bairro === "" ? <BsX /> : <BsCheck2 />}
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
                    cidade === "" || cidade === null
                      ? "icon-error"
                      : "icon-nick"
                  }
                >
                  {cidade === "" ? <BsX /> : <BsCheck2 />}
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
                  {uf === "" ? <BsX /> : <BsCheck2 />}
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
