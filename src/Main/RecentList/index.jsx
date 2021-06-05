import React from 'react'
import { P, H } from "../main";
import { Container, Title, Content, CardWrap, Left, Right , Icon } from './style'
import Card from "../Card";
const index = () => {
  const info = [
    { title: 'New Apartment Nice Wiew', country: 'Quincy St, Brooklyn, NY, USA', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$7,500/mo' },

    { title: 'Skyper Pool Apartment', country: '112 Glenwood Ave Hyde Park, Boston, MA', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$5,250/mo' },

    { title: 'New Caledonian Wharf', country: '251 SW 6th Ln Florida City, FL', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$2,300/mo' },
    { title: 'Spacious Family Home', country: '4 W 21st St Flatiron District, New York, NY', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$1,900/mo' },
  ];
  return (
    <Container>
      <H>Recent Properties for Rent</H>
      <P m='40px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</P>
      <CardWrap>
        <Icon>
          <Left />
        </Icon>
        {
          info.map((value , i) => <Card value={value} key={i} />)
        }
        <Icon right={true} >
          <Right />
        </Icon>
      </CardWrap>
    </Container>
  )
}

export default index
