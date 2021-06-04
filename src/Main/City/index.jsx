import React from 'react'
import { Container, Header, Info, Wrapper } from "./style";
const index = () => {
  const data=[
    { country: 'Los Angeles', property: "15 Properties"},
    { country: 'New York', property: "7543 Properties" },
    { country: 'Florida', property: "411 Properties" },
    { country: 'Miami', property: "42 Properties" },
    { country: 'London', property: "23 Properties" },
    { country: 'Paris', property: "821 Properties" },
    { country: 'Istanbul', property: "392 Properties" },
  ];
  return (
    <Container>
      <Header>Explore Cities</Header>
      <Info>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Info>
      <Wrapper>
        {
          data.map(({country , property} , i) => <div key={i}>
            <h1>{country}</h1>
            <p>{property}</p>
          </div> )
        }
      </Wrapper>
    </Container>
  )
}

export default index
