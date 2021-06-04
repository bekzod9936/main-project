
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 100px 225px;
border-bottom: 1px solid #E6E9EC;
`;

export const Header=styled.h1`
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
text-align: center;
color: #0D263B;
margin-bottom: 10px;
`;
export const Info=styled.p`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #696969;
margin-bottom: 40px;
`;

export const Wrapper=styled.div`
display: grid;
grid-template-columns: 270px 270px 570px 270px;
grid-template-rows: 250px 250px;
grid-gap: 20px;
div{
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 3px;
  h1{
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
text-align: center;
color: #FFFFFF;
margin-bottom: 7px;
  }
  p{
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-align: center;
color: #FFFFFF;
margin-bottom: 16px;
  }
}
div:nth-child(3){
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
`;
