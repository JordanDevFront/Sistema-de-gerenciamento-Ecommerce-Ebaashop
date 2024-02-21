import styled from "styled-components";

export const Display = styled.div`
display: flex;
    margin: 0 auto;
`;

export const Coluna = styled.div`
padding: 20px;
text-align: center;
margin: 0 auto;
width: 100%;


span{
    border-radius: 18px;
    color: #2c2416;
    font-size: 14px;
    font-weight: 700;
}
`

export const Colunas = styled.div`
padding:15px;
`

export const ColVertical = styled.div`
  width: 93.5%;
  background: #ffffff;
  height: 450px; /*48*/
  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-left: 4px solid #11cba9;
  margin: 10px;
  cursor: pointer;
  transition: height 1s;
  padding:20px;

  #info{
    display:none;
    padding:20px;

    transform: translate(-0%, 0);
    transition: display 5s ease-out, opacity 1.5s ease-out;
  }


  &:hover{
    background: #fbfbfb;
    box-shadow: rgb(66 197 180 / 34%) 0px 2px 8px 0px;
    height: 450px;
  }

  &:hover #info {
    display: block;
  }
`;

export const ColsVert = styled.div`
display: flex;
width: 100%;
`;

export const ColIteim = styled.div`
margin:0 auto;
width:100%;

strong{
    position: relative;
    top: -31px;
    padding: 5px 25px;
    background: #d9d9d9;
    font-size: 11px;
    border-radius: 10px;
}
  span {
    border-radius: 8px;
  }
  label{
    border-radius: 8px;
    color:black;
  }
`;

export const DadosCliente = styled.div`
margin-top:25px;


li{
    list-style-type: none
}
label{
    font-weight: 700;
    font-size: 12px;
}

span{
    font-weight: 300;
    font-size: 12px;
}
`

export const ArrayProd = styled.div`
  `

  export const ItemProd = styled.div`
  width: 93.5%;
  background: #ffffff;
  height: 48px; /*48*/
  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-left: 4px solid #11cba9;
  margin: 10px;


  ul{
    list-style: none;
    display: flex;
    position: relative;
    top: 15px;
  }

  .descript{
    width:600px;
  }
  .qnt{
    width:90px;
  }
  `

  export const Info = styled.div`
    display: flex;
    width: 93.5%;
    padding:20px 0;

    .frete,
    .total {
      width: 100%;
    }

    .frete span {
      position: relative;
      left: 54px;
    }

    .total {
      text-align: right;
    }
    .total span {
      position: relative;
      right: 71px;
    }
  `;