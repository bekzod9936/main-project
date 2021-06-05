import React from 'react'
import { Container , Wrap , Card, WrapperCard } from './style';
import { P, H } from "../main";
import apartment from '../../assets/icon/category/apartment.svg';
import back from '../../assets/icon/category/back.svg';
import business from '../../assets/icon/category/business-and-trade.svg';
import home from '../../assets/icon/category/home.svg';
import living from '../../assets/icon/category/living-room.svg';
import next from '../../assets/icon/category/next.svg';
import villa from '../../assets/icon/category/villa.svg';
const index = () => {
  const data=[
    { type: home, title: 'House' },
    { type: apartment, title: 'Apartment' },
    { type: business , title: 'Office' },
    { type: villa, title: 'Villa' },
    { type: living, title: 'Room' },
  ]
  return (
      <Container>
        <Wrap>
        <H>Explore Our Properties</H>
        <P m='35px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec sollicitudin</P>
        <WrapperCard>
          <button><img src={back} /></button>
          {
            data.map(({type , title}, i) =>{
              return(
                <Card key={i}>
                  <img src={type} />
                  <span>{title}</span>
                </Card>
              )
            })
          }
          <button><img src={next} /></button>
        </WrapperCard>
        </Wrap>
    </Container>
  )
}

export default index;


