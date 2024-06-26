import styled from 'styled-components'

export const ModalCSS = styled.div`
width: 80%;
height: 600px;
box-shadow: rgb(99 99 99 / 62%) 0px 2px 8px 0px;
margin: 17px 20px;
border-radius: 4px;

.titulo-modal span{
    padding: 10px;
    background:#cb1111;
    border-radius: 4px;
    margin-left: 20px;
    position: relative;
    top: -5px;
    color: #fff;
}

.flex{
    display:flex;
}

.barra-fechar{
    width: 79%;
    margin-top:-15px;

    .icon-table{
        font-size:28px;
        position:relative;
        top:1px;
    }
}

.barra-fechar span{
    padding: 10px;
    background: #999898;
    border-radius: 4px;
    margin-left: 20px;
    color: #fff;
    cursor: pointer;
    float: right;
}

.barra-fechar label{
    padding: 3px 10px;
    background: #11cba9;
    border-radius: 4px;
    margin-left: 20px;
    float: left;
    color: #fff;
    cursor: pointer;
    position: relative;
    top: 0px;

}
`;
export const Formulario = styled.div`
  position: relative;
  top: 15px;
  margin-left: 20px;
`;
export const Cols = styled.div`
display:flex;
`;
export const Col = styled.div`
border-left: 4px solid #8f8a8a;
    padding: 5px;
    margin: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 4px;
    width: 300px;
    background: #f9f7f7;

    label{
        padding: 5px 15px;
        background: #e9e9e9;
        border-radius: 4px;
        margin-left: 10px;
        position: relative;
        top: -12px;
        color: #505050;
        font-size: 12px;
    }

    .flex-icon{
        text-align: -webkit-right;
    width: 100%;
    }
    #icon-string{
        padding: 2px;
        width: 15px;
        height: 15px;
        color: #fff;
        border-radius: 15px;
        position: relative;
        top: 10px;
        left: 10px;
    }
    .icon-nick{
        background: #31c503;
    }
    .icon-error{
        background: red;
    }
`;
export const Input = styled.input`
width: 93%;
padding:5px;
border: none;
background: transparent;
outline: 0;
`;
export const Btn = styled.div`
width:65%;

.float{
    display:flex;
    width:36%;
    float:right;
    margin-top:10px;

}

.cancel, .salvar{
margin:10px;
}

.bg-color-bule{
    background-color: #405cf5;
}
.bg-color-cancel{
    background-color: #b3b3b3;
}
.button-salvar, .button-cancelar {
    appearance: button;
    backface-visibility: hidden;
    border-radius: 6px;
    border-width: 0;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
    font-size: 100%;
    height: 44px;
    line-height: 1.15;
    margin: 12px 0 0;
    outline: none;
    overflow: hidden;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-transform: none;
    transform: translateZ(0);
    transition: all .2s,box-shadow .08s ease-in;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
  }
  
  .button-salvar:disabled, .button-cancelar:disabled {
    cursor: default;
  }
  
  .button-salvar:focus, .button-cancelar:focus {
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
  }
`;
export const BtnProd = styled.div`
width:100%;

.float{
    display:flex;
    width:25%;
    float:right;
    margin-top:10px;

}

.cancel, .salvar{
margin:10px;
}

.bg-color-bule{
    background-color: #405cf5;
}
.bg-color-cancel{
    background-color: #b3b3b3;
}
.button-salvar, .button-cancelar {
    appearance: button;
    backface-visibility: hidden;
    border-radius: 6px;
    border-width: 0;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
    font-size: 100%;
    height: 44px;
    line-height: 1.15;
    margin: 12px 0 0;
    outline: none;
    overflow: hidden;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-transform: none;
    transform: translateZ(0);
    transition: all .2s,box-shadow .08s ease-in;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
  }
  
  .button-salvar:disabled, .button-cancelar:disabled {
    cursor: default;
  }
  
  .button-salvar:focus, .button-cancelar:focus {
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
  }
`;
export const HeaderCSS = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  .img{
    width:150px;
  }

  .flex{
    display:flex;
    width:100%;
  }

  .user{
    width: 90%;
    text-align: right;

    span{
      position: relative;
      top: 30px;
      right: 45px;
      color: #cb1111;
    }
  }

  .icon-user{
    font-size: 26px;
    position: relative;
    top: 5px;
  }
`;
export const ModalCSSCategoria = styled.div`
width: 30%;
    height: 600px;
    box-shadow: rgb(99 99 99 / 62%) 0px 2px 8px 0px;
    margin: 17px 20px;
    border-radius: 4px;
    padding: 10px;


    .titulo-modal span{
      padding: 10px;
      background:#cb1111;
      border-radius: 4px;
      margin-left: 20px;
      position: relative;
      top: -5px;
      color: #fff;
  }
`
export const Table = styled.div`
padding: 20px;
position: relative;
top: 20px;


background: #ffffff;
  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const Coluna = styled.div`
display:flex;
  background: #ffffff;
  padding: 10px;
  height: 48px; /*48*/
  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-left: 4px solid #11cba9;
  margin: 10px;
  cursor: pointer;
  transition: height 1s;

  .desc{
    width:235px;

    span{
      position: relative;
      top: 14px;
    }
  }

  .btn-excl, .btn-alt{
    width: 25px;
    font-size: 24px;
    text-align:center;
  }

  .icon-alt{
    font-size: 24px;
    position: relative;
    top: 7px;
    background: #f3d84d;
    padding: 5px;
    border-radius: 4px;
    color: #fff;
    margin-left: 15px;
  }

  .icon-exc{
    font-size: 24px;
    position: relative;
    top: 7px;
    background: #ff6464;
    padding: 5px;
    border-radius: 4px;
    color: #fff;
  }
  
  .desc, .btn-excl, .btn-alt{
  }
`