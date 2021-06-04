import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
border-bottom: 1px solid #E6E9EC;
`;
export const InfoWrap = styled.div`
display: flex;
justify-content: space-between;
margin: 60px  470px ; 
`;
export const Info= styled.div`
h1{
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
text-align: center;
color: #0061DF;
}
p{
  font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
text-align: center;
text-transform: uppercase;
color: #696969;
}
`;

export const Wrap=styled.div`
width: 100%;
background-color: grey;
display: flex;
flex-direction: column;
align-items: center;
padding: 200px 0 ;
`;
export const Span= styled.span`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
`;
export const Header= styled.h1`
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 45px;
text-align: center;
color: #FFFFFF;
margin: 15px 0;
`;
export const Button= styled.button`
width: 176px;
height: 55px;
background: #0061DF;
border-radius: 3px;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
border:0;
cursor: pointer;
`;

