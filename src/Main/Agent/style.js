import styled from "styled-components";


export const Container=styled.div`
width:100%;
padding: 100px 225px 150px;
@media only screen and (min-width: 414px) and (max-width: 600px){
  padding: 50px 20px;
}
`;

export const Wrap=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
@media only screen and (min-width: 414px) and (max-width: 600px){
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
`;

export const Card=styled.div`
width: 270px;
height: 320px;
background-color: lightgray;
position: relative;
border-radius: 3px;
@media only screen and (min-width: 414px) and (max-width){
  width: 180px;
height: 240px;
}
&:hover{
  div:first-child{
height: 100%;
top: 0;
  }
}
div:first-child{
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    display: flex;
    justify-content: space-evenly;
  }
width:100%;
height: 0;
position: absolute;
left: 0;
top: -100%;
background-color: gray;
}
`;
export const CardFooter=styled.div`
width: 230px;
height: 80px;
background: #FFFFFF;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
border-radius: 3px;
position: absolute;
left: 20px;
bottom: -40px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
@media only screen and(min-width: 414px) and (max-width: 600px){
width: 140px;
height: 70px;
}
`;
export const CardTitle = styled.h1`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #0D263B;
margin-bottom: 5px;
@media only screen and(min-width: 414px) and (max-width: 600px){
font-size: 14px;
line-height: 18px;
}
`;
export const CardContent = styled.p`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
text-align: center;
color: #696969;
`;