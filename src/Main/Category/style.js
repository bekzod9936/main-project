import styled, { css } from 'styled-components';

const flex = css`
display: flex;
justify-content: center;
align-items: center;
`;

export const Container = styled.div`
width: 100%;
height:640px;
${flex}
`;
export const Wrap = styled.div`
width: 1520px;
height:440px;
${flex}
flex-direction: column;
h6{
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
text-align: center;
color: #0D263B;
margin-bottom: 10px;
}
span{
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #696969;
margin-bottom: 35px;
}
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
width: 1465px;
height:320px;
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