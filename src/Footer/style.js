import styled ,  {css} from 'styled-components';
import back from '../assets/images/fback.png';
import bhover from '../assets/icon/socialhover.png';
import Logoback from '../assets/images/footlogo.png'
import { Container } from '../Header/style';
const flex=css`
display: flex;
`;
const just = css`
justify-content: center;
`;
const align = css`
align-items: center;
`;
export const Section1=styled.div`
${flex}
${just}
${align}
width: 100%;
height: 290px;
flex-direction: column;
background-image: url(${back});
background-size: 100% 100%;
background-color: #0061DF;
& > h1{
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
color: #FFFFFF;
margin-bottom: 15px;
}
& > p{
 font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
margin-bottom: 25px;
}
& > button{
  width: 198px;
  height: 55px;
  background: #FFFFFF;
  border-radius: 3px;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #0061DF;
  border:none;
}
`;



export const Section2=styled.div`
width: 100%;
height: 605px;
background-color: #0D263B;
background-repeat: no-repeat;
background-position: 20px , 20px;
background-size: 432px 520px;
background-image: url(${Logoback});
ul{
  list-style-type: none;
 }
`;
export const Up = styled.div`
width: 100%;
height: 500px;
${flex}
${just}
${align}
`;
export const Content = styled.div`
width: 1470px;
height: 285px;
${flex}
`;
export const Title = styled.h1`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
margin-bottom: 40px;
`;
export const Contact= styled.div`
width: 295px;
height: 245px;
div{
  width: 256px;
ul:first-child{
  li{
    font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 26px;
color: #FFFFFF;

    ${flex}
    margin-bottom: 15px;
    img{
        vertical-align: top;
        margin-right: 20px;
        width: 18px;
        height: 18px;
    }
  }
}
ul:last-child{
  ${flex}
  justify-content:space-between;
  width: 80%;
  margin-top: 30px;
  margin-left: -15px;
  li{
        cursor: pointer;
    ${flex}
  ${just}
  ${align}
  padding: 15px;
  }
  li:hover{
  background-image: url(${bhover});
  background-size: 100% 100%;
  }
}
}

`;
export const List = styled.div`
width:40%;
${flex}
justify-content: space-around;
div{
  ul{
    li{
      font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 40px;
color: #FFFFFF;
      a{
        width: 100%;
          padding-bottom: 5px;
       &:hover{
        border-bottom: 1px solid white;
      }
      }
    
    }
  }
}
`;

export const Sub= styled.div`
width: 30%;
p{
  font-family: Cerebri Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
margin-bottom: 30px;
}
div{
  background: white;
  width: 470px;
  height: 60px;
  padding: 5px;
  ${flex}
  ${just}
  ${align}
  input{
    width: 90%;
    border: none;
    height: 40px;
  }
  button{
    width: 50px;
    height: 50px;
    background: #0061DF;
    border-radius: 3px;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    ${flex}
    ${align}
    ${just}
    img{
      width: 20px;
      height: 20px;
    }
  }
}
`;




export const Down = styled.div`
width: 100%; 
height: 100px;
border-top: 1px solid rgba(255, 255, 255, 0.15);
& > div{
  width: 1470px;
  height:100%;
  ${flex}
  ${align}
  justify-content: space-between;
margin: 0 auto;
& > ul{
  ${flex}
  li{
    font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
text-align: right;
color: #FFFFFF;
margin-right: 15px;

  }
}
& > p{
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
}
}
`;