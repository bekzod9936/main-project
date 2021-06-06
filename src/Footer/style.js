import styled from 'styled-components';
import back from '../assets/images/fback.png';
import Logoback from '../assets/images/footlogo.png';
import bhover from '../assets/images/socialhover.png';

const getMargin = ({m}) => {
  switch (m) {
    case '75': return '75px';
    case '115': return '115px';
    case '95': return '95px';
    case '150': return '150px';
    default: return 0;
  }
}

export const Container=styled.div`
width: 100%;
margin: 0 auto;
`;
export const Section1 = styled.div`
width: 100%;
padding: 70px 0;
background-image: url(${back});
background-size: 100% 100%;
background-color: #0061DF;
display: flex;
align-items: center;
flex-direction: column;
`;
export const Header=styled.h1`
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
color: #FFFFFF;
margin-bottom: 15px;
@media only screen and (min-width: 414px) and (max-width: 600px){
font-size: 20px;
line-height: 25px;
margin-bottom: 10px;
}
`;
export const Content1=styled.p`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
margin-bottom: 25px;
`;
export const Button=styled.button`
border: 0;
width: 200px;
height: 55px;
background: #FFFFFF;
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #0061DF;
`;


export const Section2=styled.div`
width: 100%;
background-color: #0D263B;
background-image: url(${Logoback});
background-repeat: no-repeat;
background-position: 50px 45px;
background-size: 432px 520px;
@media only screen and (min-width: 414px) and (max-width: 600px){
background-size: 324px 390px;
background-position: 20px  45px;
}
`;

export const Up = styled.div`
width: 100%;
padding: 100px 225px 115px;
display: flex;
@media only screen and (min-width: 414px) and (max-width: 600px){
padding: 50px 20px;
flex-direction: column;
}
`;

export const Contact = styled.div`
width: 295px;
height: 245px;
margin-right: ${getMargin};
padding-right: 50px;
ul:last-child{
display: flex;
margin-top: 20px;
margin-left: -10px;
li{
  margin-right: 25px;
   padding: 10px;
  :hover{
    background-image: url(${bhover});
  }
}
}
@media only screen and (min-width: 414px) and (max-width: 600px){
  margin-bottom: 50px;
}
`;

export const Discover=styled.div`
width: 75px;
height: 205px;
margin-right: ${getMargin};
@media only screen and (min-width: 414px) and (max-width: 600px){
  margin-bottom: 50px;
}
`;
export const Category = styled.div`
width: 130px;
height: 285px;
margin-right: ${getMargin};
@media only screen and (min-width: 414px) and (max-width: 600px){
  margin-bottom: 50px;
}
`;
export const Links= styled.div`
width: 125px;
height: 285px;
margin-right: ${getMargin};
@media only screen and (min-width: 414px) and (max-width: 600px){
  margin-bottom: 50px;
}
`;
export const Subscribe = styled.div`
width: 470px;
height: 160px;
p{
  font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
margin-bottom: 30px;
}
@media only screen and (min-width: 414px) and (max-width: 600px){
width: 375px;
p{
  margin-bottom: 20px;
}
}
`;
export const Input=styled.input`
width: 100%;
padding: 20px 50px 20px 5px;
outline: none;
`;
export const Span=styled.div`
width: 100%;
position: relative;
background: #FFFFFF;
border-radius: 3px;
img{
  position: absolute;
  top: 4px;
  right: 3px;
  padding: 15px;
  background-color: #0061DF;
}
`;

export const Title=styled.h1`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
margin-bottom: 25px;
margin-right: ${getMargin}
`;

export const Li1 = styled.li`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 26px;
color: #FFFFFF;
display: flex;
align-items: flex-start;
margin-bottom: 10px;
 img{
    margin-right: 20px;
  }
`;
export const Li2 = styled.li`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 40px;
color: #FFFFFF;
:hover{
  border-bottom: 1px solid white;
}
`;
export const Down = styled.div`
width: 100%;
border-top: 1px solid  rgba(255, 255, 255, 0.15);
p{
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
}
ul{
  display: flex;
  justify-content: space-between;
  width: 340px;
  li{
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
text-align: right;
color: #FFFFFF;
  }
}
`;
export const Wrap=styled.div`
margin: 0 225px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px 0;
@media only screen and (min-width: 414px) and (max-width: 600px){
  margin: 0 35px;
  padding: 20px 0;
  display: grid;
  justify-items: center;
  justify-content: center;
  p{
 grid-row-start: 3;
 grid-row-end: 4;
width: 200px;
text-align: center;
  }
  ul{
    margin: 20px
  }
  
}
`;





