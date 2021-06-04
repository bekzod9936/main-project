import styled from "styled-components";
import {ReactComponent as right} from '../../assets/icon/recent/right-arrow.svg';
import { ReactComponent as left } from '../../assets/icon/recent/left-arrow.svg';
export const Left=styled(left)`

`;
export const Right = styled(right)`

`;
export const Icon = styled.div`
position: absolute;
top:50%;
left: ${(props) => props.right ? 'null' : '-17px' }; 
right: ${(props) => props.right ?  '-17px' : 'null'};
z-index: 999;
width: 45px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
`;
export const Container=styled.div`
width:100%;
padding: 100px 200px;
`;
export const Title = styled.h1`
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
text-align: center;
color: #0D263B;
margin-bottom: 10px;
`;

export const Content = styled.p`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #696969;
margin-bottom: 40px;
`;
export const CardWrap = styled.div`
display: flex;
justify-content: space-between;
position: relative;
`;