import styled from "styled-components";
import Say from "../../assets/images/Sayback.png";
export const Conatiner=styled.div`
width: 100%;
padding: 100px 225px;
background-image: url(${Say});
background:  rgba(245, 247, 252, 1);
@media only screen and (min-width: 414px) and (max-width:600px){
  padding: 50px 20px;
}
`;
export const WrapCard=styled.div`
display: flex;
justify-content: space-between;
@media only screen and (min-width: 414px) and (max-width: 600px){
  flex-direction: column;
  align-items: center;
}
`;
export const Card=styled.div`
width: 345px;
height: 305px;

h1{
  font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #0D263B;
margin: 50px 0 10px;
}
p{
  font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #696969;
}
`;
export const Info=styled.div`
width: 100%;
height: 207px;
padding: 50px 30px 60px 30px;
position: relative;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
text-align: center;
color: #696969;
background: #FFFFFF;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
border-radius: 3px;
`;
export const Profil = styled.div`
width :65px;
height :65px;
background-color: grey;
position: absolute;
bottom: -32px;
left: 40%;
border-radius: 50%;
border: 3px solid white;
box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
`;
