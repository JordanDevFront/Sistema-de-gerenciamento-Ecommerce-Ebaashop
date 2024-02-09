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
  }

  &:hover{
    background: #fbfbfb;
    box-shadow: rgb(66 197 180 / 34%) 0px 2px 8px 0px;
    height: 300px;
    

    #info{
        display:block;
    }
  }
`;

export const ColsVert = styled.div`
display: flex;
`;

export const ColIteim = styled.div`
padding: 11px;
width: 27%;
text-align: center;

  span {
    background: #11cba9;
    padding: 6px;
    border-radius: 8px;
    color: #fff;
    position: relative;
    top: -6px;
  }
  label{
    border-radius: 8px;
    color: #fff;
    position: relative;
    top: 4px;
    color:black;
  }

  .cat{
    background: #bfbb2f;
    color:white;
    padding: 6px;
  }

  #icon {
    font-size: 24px;
  }
`;

export const Display = styled.div`
display: flex;
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


export const Info = styled.div`
width: 80%;
height: 150px;
`;


export const Title = styled.div`

span{
    padding: 5px 60px;
    background: #f1f1f1;
    height: 12px;
    border-radius: 20px;
    margin: 5px;
    font-size: 11px;
}
`


export const ColInfo = styled.div`
height: 15px;
font-size: 16px;
padding:20px;
text-align:center;
margin-top:10px;

`
