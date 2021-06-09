import Card from "../Card";
import circle from '../../assets/icon/icon-card/c.svg'
import ecircle from '../../assets/icon/icon-card/ec.svg'
import { Container, Wrapper, Wrap } from './carusel';
import React, { useState } from 'react';
import { P, H } from "../main";
import Carousel  from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carusel1= () => {
  const info = [
    { title: 'New Apartment Nice Wiew', country: 'Quincy St, Brooklyn, NY, USA', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$7,500/mo' },

    { title: 'Skyper Pool Apartment', country: '112 Glenwood Ave Hyde Park, Boston, MA', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$5,250/mo' },

    { title: 'New Caledonian Wharf', country: '251 SW 6th Ln Florida City, FL', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$2,300/mo' },
    { title: 'Spacious Family Home', country: '4 W 21st St Flatiron District, New York, NY', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$1,900/mo' },
  ];
  return (
    <Wrap>
      <H>Discover Our Featured Listings</H>
      <P m='30px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</P>
      <Container>
        <Wrapper>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-padding-bottom"
            dotListClass=""
            draggable
            focusOnSelect
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 4,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 600,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 600
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
          
            {
             
              info.map((value , i) => <Card key={i} value={value} />)
              
            }
          </Carousel>
        </Wrapper>
      </Container>
    </Wrap>
  )
}

export default Carusel1

     
         
       
           


      