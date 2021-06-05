import styled , {css} from 'styled-components';

const flex=css`
display: flex;
justify-content: center;
align-items: center;
`;

export const Container=styled.div`
background: #F6F8F9;
width: 100%;
padding: 100px 225px;
${flex}
flex-direction: column;
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
width: 100%;
display: flex;
justify-content: space-between;
`;