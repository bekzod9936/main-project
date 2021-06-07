import styled from 'styled-components';

export const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 100px 225px;
width: 100%;
background: #F6F8F9;
@media only screen and (min-width: 414px) and (max-width: 600px){
  padding: 50px 20px;
}
`;

export const Wrap=styled.div`
display: flex;
justify-content: space-between;
width: 100%;
@media only screen and (min-width: 414px) and (max-width: 600px){
 flex-direction: column;
 align-items: center;
}
`;