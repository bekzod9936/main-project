import styled from "styled-components";
import { ReactComponent as Blop } from '../assets/icon/header/blacklop.svg';
import { ReactComponent as Whitedown } from '../assets/icon/header/whitedown.svg';
export const Wrap=styled.div`
width: 100%;
background-color: teal;
`;
export const Down=styled(Whitedown)`
margin-left: 10px;
`;
export const NavBar=styled.div`
width: 100%;
margin-bottom:  200px;
padding: 25px 225px;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const Nav = styled.div`
display: flex;
align-items: center;
`;
export const Li1 = styled.li`
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 20px;

:hover{
border-bottom: 1px solid white;
}
a{
padding-bottom: 5px;
}
`;
export const Span=styled.span`
margin-left: 10px;
`;
export const Tel=styled.div`
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #FFFFFF;
display: flex;
align-items: center;
margin-left: 20px;
`;
export const Add=styled.button`
border: none;
width:170px;
height:45px;
background: #FFFFFF;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #0061DF;
`;
export const Inner=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 435px;
padding-bottom:  250px;
`;

export const Text= styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
margin-bottom: 15px;
`;
export const Title= styled.div`
font-style: normal;
font-weight: bold;
font-size: 60px;
line-height: 76px;
text-align: center;
color: #FFFFFF;
margin-bottom: 60px;
`;

export const Ul=styled.ul`
display: flex;
margin-bottom: ${props=> props.m && '20px'};
`;
export const Li = styled.li`
border-bottom: ${({ active }) => active && "1px solid white" };
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
margin: 0 20px;
padding-bottom: 5px;
`;

export const Search=styled.div`
width: 100%;
background: #FFFFFF;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
border-radius: 3px;
display: flex;
padding: 20px;
`;

export const SearchTitle=styled.div`
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #0D263B;
margin-bottom: 10px;
`;

export const Section=styled.div`
width: ${props => props.w};
position: ${props => props.p ? 'relative' : 'static'};
margin-right: ${props=> props.besh ? '15px' : '20px' };
display: ${props => props.flex ? 'flex' : 'block'};
justify-content: space-between;
align-items: center;
`;

export const Select= styled.select`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #696969;
border: none;
width: 100%;
padding-bottom: 10px;
border-bottom: 1px solid #E6E9EC;
outline: none;
`;


export const Input = styled.input`
width: 100%;
padding-bottom: 10px;
border: none;
border-bottom: 1px solid #E6E9EC;
outline: none;
padding-right: 30px;
`;
export const Blopp = styled(Blop)`
position: absolute;
right: 0;
top: 50%;
z-index: 999;
`;
export const Button=styled.button`
width: 155px;
height: 55px;
background: #0061DF;
border-radius: 3px;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
`;