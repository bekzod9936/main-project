import React from 'react';
import { Container, Card, WrapperCard } from './style';
import { P, H } from "../main";
import discord from '../../assets/icon/choose/discord.svg'
import house from '../../assets/icon/choose/house.svg'
import calculator from '../../assets/icon/choose/calculator.svg'
import maps from '../../assets/icon/choose/maps.svg'
const index = () => {
  const data=[
    { col: '#0061DF' , image:discord, title:'Trusted By Thousands' , info:'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.' },
    { col: 'white', image: house, title: 'Wide Renge Of Properties', info: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'},
    { col: 'white', image: calculator, title: 'Financing Made Easy', info: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.' },
    { col: 'white', image: maps, title: 'See Neighborhoods', info: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.' },
  ]
  return (
    <Container>
      <H>Why Choose Us</H>
      <P m='50px'>We provide full service at every step</P>
      <WrapperCard>
        {
          data.map(({ col, image, title, info }, i) => <Card key={i} color={col}>
            <div>
              <img src={image} />
            </div>
            <h6>
              {title}
            </h6>
            <p>{info}</p>
          </Card>)
        }
      </WrapperCard>
    </Container>
  )
}

export default index
