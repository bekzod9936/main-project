import React from 'react';
import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import styled from 'styled-components';
import down from "./assets/icon/down.svg";
function App() {
  return (
    <Container>
     <Header />
      <Main />
     <Footer />
      <Up><img src={down} /></Up>
    </Container>
  );
}

export default App;


const Container=styled.div`
width:1920px;
position: relative;
`;

const Up=styled.button`
position: fixed;
width: 45px;
height: 45px;
right: 20px;
bottom: 20px;
background: #0061DF;
border-radius: 3px;
`;