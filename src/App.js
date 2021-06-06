import React , {useState , useEffect} from 'react';
import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import styled from 'styled-components';
import down from "./assets/icon/down.svg";
function App() {
  const [w, setW] = useState(window.innerWidth);

  useEffect(() =>{
    const handleListen=()=>{
      setW(window.innerWidth);
    }
    window.addEventListener('resize' , handleListen)
 
  } , [])
  return (
    <Container wid={w}>
     <Header />
      <Main />
     <Footer />
      <Up><img src={down} /></Up>
    </Container>
  );
}

export default App;


const Container=styled.div`
width: 1920px;
position: relative;
@media only screen and (min-width: 414px) and (max-width: 600px){
  width: ${({wid}) => { return(wid >414 && wid < 600) ? `${wid}px` : null;}} ;
}
`;

const Up=styled.button`
position: fixed;
width: 45px;
height: 45px;
right: 20px;
bottom: 20px;
background: #0061DF;
border-radius: 3px;
@media only screen and (min-width: 414px) and (max-width: 768px){
 right: 0;
bottom: 0;
}
`;