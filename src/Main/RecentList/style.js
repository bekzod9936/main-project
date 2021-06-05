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
left: ${(props) => props.right ? 'null' : '-30px' }; 
right: ${(props) => props.right ?  '-30px' : 'null'};
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
export const CardWrap = styled.div`
display: flex;
justify-content: space-between;
position: relative;
`;