import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 20px;

  .titulo {
    font-size: 24px;
    padding: 10px;
  }
`;

export const Display = styled.div`
display: flex;
width: 95%;
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
width:100%;
padding:3px;
`

export const ColVertical = styled.div`
  width: 95%;
  background: #ffffff;
  padding: 20px;
  height: 48px; /*48*/
  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-left: 4px solid #11cba9;
  margin: 10px;
  cursor: pointer;
  transition: height 1s;

  #info{
    display:none;
    padding:20px;

    transform: translate(-0%, 0);
    transition: display 5s ease-out, opacity 1.5s ease-out;
  }


  &:hover{
    background: #fbfbfb;
    box-shadow: rgb(66 197 180 / 34%) 0px 2px 8px 0px;
    height: 350px;
  }

  &:hover #info {
    display: block;
  }
`;

export const ColsVert = styled.div`
display: flex;
`;

export const ColIteim = styled.div`
padding: 11px;
width: 100%;
text-align: center;

  span {
    background: #11cba9;
    padding: 6px 20px;
    border-radius: 8px;
    color: #fff;
  }
  label{
    border-radius: 8px;
    color: #fff;
    color:black;
  }

  .cat{
    background: #bfbb2f;
    color:white;
    padding: 6px 20px;
  }

  #icon {
    font-size: 24px;
  }

  .fre{
    position:relative;
    left:52px;
  }
  .clas{
    padding: 5px 30px;
    background: #42e75f;
    color: #fff;
  }
`;

export const Image = styled.div`
width: 150px;
height: 150px;

img{
    width: 100%;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
`;

export const Title = styled.div`
width: 150px;
text-align: center;
border-radius: 16px;
font-size: 14px;
background: #c7c7c7;
color: #404040;
margin: 5px;
height: 16px;
padding: 2px;
font-size: 13px;
`;

export const Info = styled.div`
width:100%;
padding:3px;
display:flex;
`

export const Col = styled.div`
text-align: center;
`

export const Descricao = styled.div`
padding:10px 0;
`

export const Preco = styled.div`
padding:10px 0;
`

export const Btns = styled.div`
width:100%;
height: 39px;
`

export const ColBtn = styled.div`
width:256px;
float: right;

button{
    padding: 6px 20px;
    margin: 5px;
    border: none;
    border-radius: 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
`
