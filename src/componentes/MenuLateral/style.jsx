import styled from 'styled-components'


export const Container = styled.div`
display:flex;
margin-top:5px;
`
export const MenuCSS = styled.div`
  width: 280px;
  height: 100vh;
  background: #cb1111;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  border-radius: 4px;
`;

export const Botao = styled.div`

  .base {
    display: flex;
    width: 100%;
    text-align: center;
    cursor: pointer;
    color: #fff;
    font-weight: 300;
    transform: translate(0%, 0%);
    background: rgb(229 32 32 / 50%);  /*rgb(38 37 37);*/
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    height: 50px;
    margin-top: 10px;
  }

  .base:hover {
    border-left: 6px solid #fff;
    color: #fff;
    border-radius: 0 4px 4px 0;
  }

  .titulo {
    width: 100%;
    padding: 15px 0px 0px 25px;
  }
  .icon {
    background: #fff;
    color: black;
    border-radius: 4px;
    position: relative;
    left: 15px;
    width: 50px;
    top: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height: 40px;
  }
  #icon{
    margin-top: 10px;
  }
`;
