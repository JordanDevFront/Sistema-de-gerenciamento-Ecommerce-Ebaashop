import React, { useState } from "react";
import { Col, Container, Input, Modal, Image, Formulario } from "./style";
import user from "../../imagens/user.jpg";
import { HeaderDeslogada } from "../../componentes/HeaderDeslogado";

function HomeDeslogado() {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

async function signIn() {
  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, senha }),
    });

    if (response.status === 200) {
      const data = await response.json();
      const token = data.token;
      //const documento = data.cpf;
      const usuario = data.username;
      localStorage.setItem("token", token);
      //localStorage.setItem("documento", documento);
      localStorage.setItem("usuario", usuario);
      window.location = "/Home"
    } else {
      console.error("Falha no login:", response.statusText);
    }
  } catch (error) {
    console.error("Erro durante o login:", error.message);
  }
}

  return (
    <>
    <HeaderDeslogada/>
      <Container>
        <Modal>
          <Image>
            <img src={user} />
          </Image>
          <Formulario>
            <Col>
              <Input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Col>
            <Col>
              <Input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              />
            </Col>
            <div className="btn-enviar">
            <a
            className="button-86"
              role="button"
              name="enviar"
              id="enviar"
              onClick={() => {
                signIn();
              }}
            >ENTRAR</a>
            </div>
          </Formulario>

          <div id="esqueceusenha">
            <span>
              Esqueceu sua senha? <a href="#">Clique aqui</a>
            </span>
          </div>
        </Modal>
      </Container>
    </>
  );
}

export default HomeDeslogado;
