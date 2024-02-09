import styled from 'styled-components'

export const Container = styled.div`
width:100%;
background: #fff;
margin-top: 20px;

.titulo{
    font-size: 24px;
    padding: 10px;
}
`

export const Modal = styled.div`
    width: 98.5%;
    height: 50px;
    border-radius: 4px;
    margin: 10px;
    display:flex;
    border-left: 4px solid #cb1111;
    background: #f9f7f7;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
`

export const Col = styled.div`
width: 96%;
    height: 38px;
    margin: 5px;
    

    span{
        position: relative;
        top: 10px;
    }
    
`

export const ModalEndereço = styled.div`
width: 98.5%;
height: 50px;
margin: 10px;
display:flex;
background: #fff;

.ft-locali{
    width:50px;
    height: 50px;
}
.img{
    width:50px;
}
`