import styled , {css} from "styled-components";
import { ReactComponent as Blop } from '../assets/icon/header/blacklop.svg';
import { ReactComponent as Whitedown } from '../assets/icon/header/whitedown.svg';
import { ReactComponent as Barr } from '../assets/icon/header/nav.svg';
import { ReactComponent as User } from '../assets/icon/header/user.svg';
const getColor = ({ c }) => {
  switch (c) {
    case 'cb': return 'var(--blue) ';
    case 'cd': return 'var(--dark)';
    case 'cr': return 'var(--red)';
    case 'cw': return 'var(--white)';
    case 'clb': return 'var(--lightblue)';
    case 'bg1': return 'var(--bg1)';
    case 'bg2': return 'var(--bg2)';
    case 'text': return 'var(--text)';
    case 'cbor': return 'var(--border)';
    case 'cbox': return 'var(--box)';
    default: return 'black';
  }
}
export const UserLogo=styled(User)`
margin: 20px;
@media only screen and (min-width: 414px) and (max-width: 600px){
  margin: 0;
}
`;

const flexxyc=css`
display: flex;
justify-content: center;
align-items: center;`;
const F60=css`
font-weight: bold;
font-size: 60px;
line-height: 76px;
`;
const F16B=css`
font-weight: 600;
font-size: 16px;
line-height: 20px;
`;
const F13=css`
font-weight: 600;
font-size: 13px;
line-height: 17px;
`;
const F30 = css`
font-weight: 600;
font-size: 30px;
line-height: 38px;
`;
export const Wrap=styled.div`
width: 100%;
background-color: grey;
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
@media only screen and (min-width: 414px) and (max-width: 600px){
  padding: 10px 20px;
  justify-content: space-between;
  background-color: ${getColor};
}
`;
export const BarLogo=styled(Barr)`
display: none;
@media only screen and (min-width: 414px) and (max-width: 600px){
  display: block;
}
`;
export const Nav = styled.div`
display: flex;
align-items: center;

`;
export const Li1 = styled.li`
text-transform: uppercase;
color: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 20px;
${F13}
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
text-transform: uppercase;
color: #FFFFFF;
display: flex;
align-items: center;
margin-left: 20px;
${F13}
@media only screen and (min-width: 414px) and (max-width: 600px){
  display: none;
}
`;
export const Add=styled.button`
border: none;
width:170px;
height:45px;
background: #FFFFFF;
border-radius: 3px;
${flexxyc}
text-transform: uppercase;
color: ${getColor};
${F13}
@media only screen and (min-width: 414px)and (max-width: 600px){
  display: none;
}
`;
export const Inner=styled.div`
flex-direction: column;
${flexxyc}
margin: 0 435px;
padding-bottom:  250px;
@media only screen and (min-width: 414px)and (max-width: 600px){
  padding-bottom:  20px;
  margin: 225px 40px 0;
}
`;

export const Text= styled.div`
${F16B}
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
margin-bottom: 15px;
@media only screen and (min-width: 414px)and (max-width: 600px){
  font-size: 14px;
line-height: 18px;
margin-bottom: 10px;
}
`;
export const Title= styled.div`
text-align: center;
color: #FFFFFF;
margin-bottom: 60px;
${F60}
@media only screen and (min-width: 414px)and (max-width: 600px){
  ${F30}
  margin-bottom: 125px;
}
`;

export const Ul=styled.ul`
display: flex;
@media only screen and (min-width: 414px) and (max-width: 600px){
display: none;
};
margin-bottom: ${props=> props.m && '20px'};
`;
export const Ul1 = styled.ul`
display: flex;

margin-bottom: ${props => props.m && '20px'};
`;
export const Li = styled.li`
border-bottom: ${({ active }) => active && "1px solid white" };
color: #FFFFFF;
margin: 0 20px;
padding-bottom: 5px;
${F16B}
`;

export const Search=styled.div`
width: 100%;
background: #FFFFFF;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
border-radius: 3px;
display: flex;
padding: 20px;
@media only screen and (min-width: 414px) and (max-width: 600px){
  flex-direction: column;
};
`;

export const SearchTitle=styled.div`
text-transform: uppercase;
color: ${getColor};
margin-bottom: 10px;
${F16B}
@media only screen and (min-width: 414px) and (max-width: 600px){
  font-weight: 600;
font-size: 13px;
line-height: 17px;
};
`;

export const Section=styled.div`
width: ${props => props.w};
position: ${props => props.p ? 'relative' : 'static'};
margin-right: ${props=> props.besh ? '15px' : '20px' };
display: ${props => props.flex ? 'flex' : 'block'};
justify-content: space-between;
align-items: center;
@media only screen and (min-width: 414px) and (max-width: 600px){
  width: 100%;
  margin-bottom: 20px;
  justify-content: flex-start;
};
`;

export const Select= styled.select`
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
color: #FFFFFF;
${flexxyc}
${F13}
@media only screen and (min-width: 414px) and (max-width: 600px){
  width: 100%;
};
`;