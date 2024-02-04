import styled from 'styled-components'

export const Image = styled.div`
text-align: center;
img{
    width: 80px;
    margin: 10px;
}
`

export const Container = styled.div`
width:100%;
background: #fff;
margin-top: 20px;

.titulo{
    font-size: 24px;
    padding: 10px;
}
`

export const Col = styled.div`
border-left: 4px solid #cb1111;
padding: 10px;
margin: 10px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 4px;
`

export const Input = styled.input`
width: 95%;
padding: 10px;
border: none;
background: transparent;
outline: 0;
`

export const Modal = styled.div`
width:350px;
height: 350px;
border-radius: 8px;
margin:0 auto;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

#esqueceusenha{
    text-align:center;
    padding: 10px;
    margin-top:10px;
}

.btn-enviar{

  .button-86 {
    all: unset;
    width: 75%;
    height: 30px;
    font-size: 16px;
    background: transparent;
    border: none;
    position: relative;
    color: #f0f0f0;
    cursor: pointer;
    z-index: 1;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin: 0 auto;
  }
  
  .button-86::after,
  .button-86::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all .4s;
  }
  
  .button-86::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #28282d;
    border-radius: 10px;
  }
  
  .button-86::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
  }
  
  .button-86:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
    background: #cb1111;
  }
  
  .button-86:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }
  
  .button-86:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }

}
`

export const Formulario = styled.div``