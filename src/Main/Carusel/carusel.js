import styled from 'styled-components';

export const Container=styled.div`
width: 100%;
display: flex;

`;
export const Wrapper= styled.div`
width: 100%;
padding: 0 225px;
@media only screen and (min-width: 414px) and (max-width: 600px){
  padding: 0 20px;
}
`;
export const Wrap = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 100px 0;
`;