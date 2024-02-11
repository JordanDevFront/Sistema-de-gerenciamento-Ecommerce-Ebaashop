import styled from 'styled-components'

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
