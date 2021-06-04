import styled , {css} from 'styled-components';

const flex=css`
display: flex;
justify-content: center;
align-items: center;
`;

export const Container=styled.div`
background: #F6F8F9;
width: 100%;
height:654px;
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
margin-bottom: 50px;
}
`;
export const Card=styled.div`
width: 345px;
height: 336px;
background: #FFFFFF;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
border-radius: 3px;
padding: 45px 30px;
${flex}
flex-direction: column;
div{
  background: ${props => props.color};
  padding: 33px;
  border-radius: 50%;
  margin-bottom: 25px;
}
h6{
  font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
text-align: center;
color: #0D263B;
margin-bottom: 15px;
}
p{
  font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
text-align: center;
color: #696969;
}
`;
export const WrapperCard=styled.div`
width:1470px;
height: 336px;
margin: 0 auto;
display: flex;
  justify-content: space-between;
`;