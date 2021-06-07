import styled from 'styled-components';

export const Container=styled.div`
margin: 100px 225px;
width: 100%;
display: flex;
flex-direction: column;
@media only screen and (min-width: 414px) and (max-width: 600px){
  margin: 50px 20px;
}
`;
export const Wrapper= styled.div`
display: flex;
justify-content: space-between;
width: 100%;
@media only screen and (min-width: 414px) and (max-width: 600px){
 flex-direction: column;
 align-items: center;
`;
export const Wrap = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;