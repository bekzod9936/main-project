import Card from "../Card";
import styled from 'styled-components';
import { CarouselProvider, Dot, Slide, Slider,  } from "pure-react-carousel";
import circle from '../../assets/icon/icon-card/c.svg'
import ecircle from '../../assets/icon/icon-card/ec.svg'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container, Wrapper, Wrap } from './carusel';
import React, { useState } from 'react';
import { P, H } from "../main";

const Carusel1= () => {
  const [num, setNum] = useState(0)
  const info = [
    { title: 'New Apartment Nice Wiew', country: 'Quincy St, Brooklyn, NY, USA', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$7,500/mo' },

    { title: 'Skyper Pool Apartment', country: '112 Glenwood Ave Hyde Park, Boston, MA', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$5,250/mo' },

    { title: 'New Caledonian Wharf', country: '251 SW 6th Ln Florida City, FL', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$2,300/mo' },
    { title: 'Spacious Family Home', country: '4 W 21st St Flatiron District, New York, NY', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$1,900/mo' },
  ];
  let data = [1, 2, 3, 4, 5];
  return (
    <Wrap>
      <Container>
        <H>Discover Our Featured Listings</H>
        <P m='30px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</P>
        <div>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={33}
            totalSlides={5}
          >
            <Slider>
              {
                data.map((v, i) => {
                  return <Slide className={i === 0 ? 'slide' : ''} index={i}>
                    <Wrapper>
                      {
                        info.map((value, j) => <Card value={value} key={j} />)
                      }
                    </Wrapper>
                  </Slide>
                })
              }
            </Slider>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {
                data.map((v, i) => {
                  return <Dott slide={i} onClick={() => setNum(i)} > <img src={num === i ? ecircle : circle} />
                  </Dott>
                })
              }
            </div>
          </CarouselProvider>
        </div>
      </Container>
    </Wrap>
  )
}

export default Carusel1

const Dott=styled(Dot)`
padding-right: 15px;
background-color: transparent;
`;
     
         
       
           

       
      