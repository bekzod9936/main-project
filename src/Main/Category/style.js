import styled, { css } from 'styled-components';

const flex = css`
display: flex;
justify-content: center;
align-items: center;
`;

export const Container = styled.div`
width: 100%;
padding: 100px 225px;
${flex}
@media only screen and (min-width: 414px) and (max-width: 600px){
  padding: 50px 20px;
}
`;
export const Wrap = styled.div`
width: 100%;
${flex}
flex-direction: column;
`;
export const Card = styled.div`
width: 270px;
height:320px;
background: grey;
${flex}
flex-direction: column;
img{
  margin: 65px;
}
span{
  font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
color: #FFFFFF;
}
`;
export const WrapperCard=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
position: relative;
button{
  width: 45px;
  height: 45px;
  position: absolute;
  top: 150px;
  border: none;
  ${flex}
  background: white;
  border-radius: 50%;
}
button:first-child{
left: -22px;
}
button:last-child{
right: -22px;
}
`;