import styled from 'styled-components';

export const Container= styled.div`
width: 345px;
height: 441px;
background: #FFFFFF;
border-radius: 3px;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
border-radius: 3px;
`;
export const ImgWarp= styled.div`
width: 100%;
height: 220px;
background-color: grey;
`;
export const Button=styled.button`
background: #0061DF;
border-radius: 3px;
width: 96px;
height: 23px;
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 13px;
color: #FFFFFF;
margin: 30px;
`;
export const Wrapper=styled.div`
width: 100%;
padding: 30px 20px ;
`;
export const Title= styled.h1`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 28px;
color: #0D263B;
margin-bottom: 10px;
`;
export const Content=styled.span`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #696969;
`;

export const Data=styled.div`
display: flex;
p{
  span{
    margin-left: 10px;
    font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #696969;
  }
  margin: 0  30px 15px 0;
}
`;
export const Link=styled.a`
display: block;
margin-top: 15px;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-decoration-line: underline;
text-transform: uppercase;
color: #0061DF;
`;