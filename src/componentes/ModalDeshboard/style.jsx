import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  background: #f1f1f1;
  padding: 10px;
  position: relative;
  left: 20px;
  margin-top: 20px;
  border-radius: 4px;
`;

export const Modal = styled.div`
  display: flex;
`;

export const ItemProd = styled.div`
  padding: 10px;
  height: 90px;
  margin: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-left: 4px solid #11cb75;
  border-radius: 2px;
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 10px;

  .icon-font {
    font-size: 28px;
    position: relative;
    top: -8px;
    cursor: pointer;
  }
`;

export const Item = styled.li`
  width: 300px;
  margin: 5px;
  list-style: none;
  text-align: center;

  span {
    font-size: 11px;
    color: #727272;
  }

  label {
    color: #28116a;
    font-weight: 600;
  }
`;

/* MODAL INFORMAÇÃO */

export const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  background-color: #fefefe;
  margin: -10% auto;
  padding: 20px;
  border: 1px solid #88888873;
  width: 80%;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 2;
  right: 0;
  border-radius: 4px;
  height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px; /* largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aaa; /* cor do botão de rolagem */
    border-radius: 5px; /* borda arredondada */
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5; /* cor do plano de fundo da barra de rolagem */
  }

  .line {
    border: 1px solid #bfbfbf;
    height: 95px;
    margin: 5px;
  }

  h3,
  h4 {
    padding: 0 15px 0;
  }

  .line-vert {
    border: 1px solid #bfbfbf;
    width: 90%;
    margin: 5px;
  }

  .vl-total {
    padding: 15px;
    font-size: 24px;
    font-weight: 300;
    color: #28116a;
    position: relative;
    top: -15px;
  }

  .container {
    text-align: right;
  }

  .btns {
  }

  .btn-display {
    display: flex;
    padding: 10px;
    width: 340px;
    float: right;
  }

  .btn-fechar {
    padding: 10px;
    background: #999898;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    width: 10px;
    float: right;
  }

  .importar {
    .inputfile {
      display: none;
    }

    .custom-file-upload {
      display: inline-block;
      cursor: pointer;
      padding: 10px 20px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 5px;
      margin: 5px;
      font-size: 16px;
    }

    .custom-file-upload:hover {
      background-color: #45a049;
    }
  }

  .enviar {
    .InputButton {
      display: inline-block;
      cursor: pointer;
      padding: 10px 20px;
      background-color: #0269fd;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      margin: 5px;
      text-decoration: none;
    }

    .InputButton:hover {
      background-color: #055edd;
    }
  }

  .exportar {
    .exportPDF {
      display: inline-block;
      cursor: pointer;
      padding: 4px 20px;
      background-color: #afafaf;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 25px;
      margin: 5px;
      text-decoration: none;
    }
  }
`;

export const Image = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  padding: 10px;

  img {
    width: 100%;
    border-radius: 100%;
  }
`;

export const Dados = styled.div`
  ul {
    padding: 0;
  }

  ul li {
    list-style-type: none;
  }

  ul li strong {
    font-size: 12px;
    color: #727272;
    margin: 5px;
  }

  ul li span {
    color: #28116a;
    font-weight: 600;
    font-size: 12px;
  }
`;

export const ListProdutos = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 10px;
`;

export const Li = styled.li`
  width: 300px;

  span {
    font-size: 12px;
    color: #727272;
    margin: 5px;
  }

  label {
    color: #28116a;
    font-weight: 600;
    font-size: 14px;
    margin: 5px;
  }
`;
