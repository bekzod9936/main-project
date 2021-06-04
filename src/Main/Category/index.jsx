import React from 'react'
import { Container , Wrap , Card, WrapperCard } from './style'
import apartment from '../../assets/icon/category/apartment.png';
import back from '../../assets/icon/category/back.png';
import business from '../../assets/icon/category/business-and-trade.png';
import home from '../../assets/icon/category/home.png';
import living from '../../assets/icon/category/living-room.png';
import next from '../../assets/icon/category/next.png';
import villa from '../../assets/icon/category/villa.png';
const index = () => {
  return (
      <Container>
        <Wrap>
        <h6>Explore Our Properties</h6>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec sollicitudin</span>
        <WrapperCard>
          <button><img src={back} /></button>
          <Card>
            <img src={home} />
            <span>House</span>
          </Card>
          <Card>
            <img src={apartment} />
            <span>Apartment</span>
          </Card>
          <Card>
            <img src={business} />
            <span>Office</span>
          </Card>
          <Card>
            <img src={villa} />
            <span>Villa</span>
          </Card>
          <Card>
            <img src={living} />
            <span>Room</span>
          </Card>
          <button><img src={next} /></button>
        </WrapperCard>
        </Wrap>
    </Container>
  )
}

export default index;


