import React, {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Col, Cols, Formulario, ModalCSSCategoria, Input, Table, Coluna } from "../styleGlobal"
import { BsCheck2, BsX } from "react-icons/bs";
import { CiEdit, CiTrash  } from "react-icons/ci";

export function ModalCategoria() {
    //pronto
    const [descricao, setDescricao] = useState("");

    async function Enviar() {
      try {
        const response = await axios.post(
          "http://localhost:8080/resgister/category/",
          {
            descricao
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
    
        if (response.status === 401) {
          console.log("erro ao cadastrar!")
        } else {
          Swal.fire({
            icon: "success",
            title: "Categoria registrada com sucesso!",
            text: response.data.message,
          }).then(() => {
            window.location = "/Home";
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
        <ModalCSSCategoria>
          <div className="titulo-modal">
            <span>Cadastro de Categoria</span>
          </div>

          <Formulario>
            <Cols>
            <Col>
            <label>Categoria</label>
                <Input
                  type="text"
                  value={descricao}
                  onChange={(e) => {
                    setDescricao(e.target.value);
                  }}
                />{" "}
                <div className="flex-icon">
                  <div
                    id="icon-string"
                    className={
                      descricao === "" || descricao === null ? "icon-error" : "icon-nick"
                    }
                  >
                    {descricao === "" ? <BsX /> : <BsCheck2 />}
                  </div>
                </div>
            </Col>
            </Cols>
          </Formulario>

          <Table>
            <Coluna>
            <div className="desc">
              <span>Cozinha</span>
            </div>
            <div className="btn-excl"><CiTrash className="icon-exc"/></div>
            <div className="btn-alt"><CiEdit className="icon-alt"/></div>
            </Coluna>

            <Coluna>
            <div className="desc">
              <span>Sala</span>
            </div>
            <div className="btn-excl"><CiTrash className="icon-exc"/></div>
            <div className="btn-alt"><CiEdit className="icon-alt"/></div>
            </Coluna>
            <Coluna>
            <div className="desc">
              <span>Banheiro</span>
            </div>
            <div className="btn-excl"><CiTrash className="icon-exc"/></div>
            <div className="btn-alt"><CiEdit className="icon-alt"/></div>
            </Coluna>
          </Table>
        </ModalCSSCategoria>
      </>
    );
}