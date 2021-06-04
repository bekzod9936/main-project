import React from 'react'
import { Wrap, Span, Header, Button, Container, Info, InfoWrap } from "./style";
const index = () => {
  return (
    <Container>
    <Wrap>
      <Span>TRENDS</Span>
      <Header>Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home</Header>
      <Button>READ MORE</Button>
    </Wrap>
    <InfoWrap>
        <Info>
          <h1>66.180</h1>
          <p>Homes for sale</p>
        </Info>
        <Info>
          <h1>66.180</h1>
          <p>Homes for sale</p>
        </Info>
        <Info>
          <h1>66.180</h1>
          <p>Homes for sale</p>
        </Info>
        <Info>
          <h1>66.180</h1>
          <p>Homes for sale</p>
        </Info>
    </InfoWrap>
    </Container>
  )
}

export default index
