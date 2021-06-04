import React from 'react'
import { Container, Card, WrapperCard } from './style'
import discord from '../../assets/icon/choose/discord.png'
import house from '../../assets/icon/choose/house.png'
import calculator from '../../assets/icon/choose/calculator.png'
import maps from '../../assets/icon/choose/maps.png'
const index = () => {
  const data=[
    { col: '#0061DF' , image:discord, title:'Trusted By Thousands' , info:'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.' },
    { col: 'white', image: house, title: 'Wide Renge Of Properties', info: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'},
    { col: 'white', image: calculator, title: 'Financing Made Easy', info: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.' },
    { col: 'white', image: maps, title: 'See Neighborhoods', info: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.' },
  ]
  return (
    <Container>
      <h6>Why Choose Us</h6>
      <span>We provide full service at every step</span>
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
