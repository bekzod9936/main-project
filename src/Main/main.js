import styled from 'styled-components' ;

export const H=styled.h1`
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
text-align: center;
color: #0D263B;
margin-bottom: 10px;
@media only screen and (min-width: 414px) and (max-width: 600px){
 font-size: 22px;
line-height: 28px;
margin-bottom: 5px;
}
`;
export const P=styled.p`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #696969;
margin-bottom: ${props => props.m};
@media only screen and (min-width: 414px) and (max-width: 600px){
  font-size: 14px;
line-height: 18px;
}
`;