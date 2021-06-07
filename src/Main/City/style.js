
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 100px 225px;
border-bottom: 1px solid #E6E9EC;
@media only screen and (min-width: 414px) and (max-width: 600px){
  padding: 50px 20px;
}
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
@media only screen and (min-width: 414px) and (max-width: 600px){
  grid-template-columns: 180px 180px;
  grid-template-rows: 180px 180px 370px 180px ;
  grid-gap: 10px;
  justify-content: center;
  div:nth-child(3){
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}
div{
  h1{
    font-size: 16px;
line-height: 20px;
margin-bottom: 5px;
  }
}
}
`;
