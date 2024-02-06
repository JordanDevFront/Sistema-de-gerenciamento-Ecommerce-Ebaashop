import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"
import { Col, Container, Input, Modal, Image, Formulario } from "./style";
import user from "../../imagens/user.jpg";

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
      const documento = data.cpf;
      const usuario = data.username;
      localStorage.setItem("token", token);
      localStorage.setItem("documento", documento);
      localStorage.setItem("usuario", usuario);
      window.location = "/Home"
    } else {
      console.error("Falha no login:", response.statusText);
    }
  } catch (error) {
    console.error("Erro durante o login:", error.message);
  }
}

  const login = async (response, request) => {
    const url = "http://localhost:8080/auth/login";

    const data = {
      username: username,
      senha: senha,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, senha }),
    };

    axios
      .post(url, data, config)
      .then(async () => {
        //const dados = await response.json()
        const data = await response.json();
      const token = data.token;
        
        localStorage.setItem('token', token);
     

        console.log('Login bem-sucedido!', token);
        //window.location = "/Home";
        return;
      })
      .catch((error) => {
        Swal.fire({
          title: "Atenção!",
          text: error,
          icon: "warning",
        });
      });
  };

  return (
    <>
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
