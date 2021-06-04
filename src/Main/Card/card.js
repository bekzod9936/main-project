import styled, { css } from 'styled-components';
import light from '../../assets/icon/icon-card/light.png';
import dark from '../../assets/icon/icon-card/dark.png';
export const Card=styled.div`
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-sizing: border-box;
border-radius: 3px;
width:345px;
height:430px;
&:hover{
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
}
`;
export const CardImg = styled.div`
width: 100%;
height: 220px;
position: relative;
img{
  position: absolute;
  right: 0;
  bottom: -30px;
}

background-image: url(${light});
display: flex;
padding: 30px;
justify-content: space-between;
button:first-child{
  align-self: flex-start;
  background: #0061DF;
  border-radius: 3px;
  color: white; 
  padding: 5px 12px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
}
button:last-child{
  align-self: flex-start;
  background: #0D263B;
  border-radius: 3px;
  padding: 5px 12px; 
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
}

`;
export const CardBody = styled.div`
height: 150px;
border-bottom: 1px solid #E6E9EC;
padding: 20px;
div{
  display: flex;
  justify-content: space-between;
}
h4{
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #0D263B;
margin-bottom: 10px;
}
p{
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #696969;
margin-bottom: 20px;
}
`;
export const CardFooter = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
align-items:center;
padding: 20px;
div:first-child{
  p{
    font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
text-decoration-line: line-through;
color: #696969;
  }
  h1{
    font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #0D263B;
  }
}
div:last-child{
  display: flex;
  img{
    align-self: center;
  }
  img:nth-child(2){
    margin: 0 20px;
  }
}
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img{
   width: 20px;
   height: 20px;
   margin-bottom: 7px;
  }
  `;