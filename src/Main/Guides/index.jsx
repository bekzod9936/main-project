import React from 'react'
import { Wrap, Span, Header, Button, Container, Info, InfoWrap } from "./style";
const index = () => {
  const data=[
    { price: '66.180', title: 'Homes for sale' },
    { price: '4.809', title: 'Open houses' },
    { price: '30.469', title: 'Recently sold' },
    { price: '2.919', title: 'Price reduced' },
  ]
  return (
    <Container>
    <Wrap>
      <Span>TRENDS</Span>
      <Header>Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home</Header>
      <Button>READ MORE</Button>
    </Wrap>
    <InfoWrap>
        {
      data.map(({ price, title }, i) => <Info key={i}><h1>{price}</h1><p>{title}</p></Info>)
        }
    </InfoWrap>
    </Container>
  )
}

export default index
