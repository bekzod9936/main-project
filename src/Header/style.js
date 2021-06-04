import styled , {css} from 'styled-components';
const flex=css`
display: flex;`;
const just = css`
justify-content: center;`;
const align = css`
align-items: center;`;

export const Container = styled.div`
${flex}
${align}
${just}
height: 860px;
width: 100%;
flex-direction:column;
padding-top: 30px;
position: relative;
background: teal;
`;
export const Navbar=styled.div`
 position: absolute;
 z-index: 4;
 top: 0;
 left: 225px;
 width: 1470px;
 height: 95px;
 ${flex}
 ${align}
`;
export const Bar=styled.div`
width: 820px;
 ${flex}
 justify-content: flex-end;
 ${align}
& > img{
  width: 20px;
  height: 20px;
}
& > img:nth-child(4){
    width: 16px;
    height: 16px;
    margin: 0 33px 0 30px;
}


& > button{
background: #FFFFFF;
border-radius: 3px;
border:none;
width: 170px;
height: 45px;
cursor: pointer;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #0061DF;
${flex}
${just}
${align}
 & > img{
   margin: 0 10px 0 0;
 }
}
& >p{
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #FFFFFF;
  margin-left:10px;
}
& > ul{
  list-style-type: none;
  
  ${flex}
  & > li{
    cursor: pointer;
  
& > a{
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  text-transform: uppercase;
  color: #FFFFFF;
  & > img{
  padding-left: 5px;
    }
    margin-right: 20px;
     &:hover{
        border-bottom: 1px solid #FFFFFF;
    }
    }
  }
}
`;
export const Logo = styled.div`
width: 650px;
img{
  width: 155px;
  height: 48px; 
}
`;
export const Text= styled.p`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
margin-bottom: 15px;
`;
export const Title = styled.h1`
font-style: normal;
font-weight: bold;
font-size: 60px;
line-height: 76px;
text-align: center;
color: #FFFFFF;
margin-bottom: 60px;
`;
export const Ul = styled.ul`
list-style-type: none;
${flex}
justify-content: space-around;
${align}
width: 183px;
height:27px;
li{
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
}
margin-bottom: 20px; 
`;



export const Search=styled.div`
width: 1050px;
height: 95px;
${flex}
${align}
background: #FFFFFF;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
border-radius: 3px;
padding: 20px;
`;

export const SearchTitle = styled.div`
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #0D263B;
`;
export const Wrap = styled.div`
width: 193px;
height: 55px;
${flex}
flex-direction: column;
justify-content: space-around;
margin-right: 20px;
`;
export const Select = styled.select`
border: none;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #696969;
width: 100%;
`;
export const WrapInput = styled.div`
width:300px;
height: 55px;
${flex}
flex-direction: column;
justify-content: space-around;
span{
  width: 100%;
  ${flex}
  justify-content: space-between;
  input{
  border:none;
}
}
`;
export const Border = styled.span`
border-bottom: 1px solid ${props => props.color};
padding-bottom: 5px ;
`;
export const Button = styled.button`
width: 155px;
height: 55px;
left: 1310px;
top: 533px;
background: #0061DF;
border-radius: 3px;
border:none;
font-style: normal;
font-weight 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #FFFFFF;
${flex}
${just}
${align}
cursor:pointer;
& > img{
margin-right: 10px;
width: 16px;
height: 16px;
}
`;
export const ButtonWrap = styled.div`
width:30%;
height: 55px;
${flex}
justify-content: space-around;
${align}
& > img{
width: 20px;
height:20px;
margin: 0 20px;
}
& > p{
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #0D263B;
margin-right: 15px;
}
`;




