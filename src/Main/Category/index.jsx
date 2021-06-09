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
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const index = () => {
  const data=[
    { type: home, title: 'House' },
    { type: apartment, title: 'Apartment' },
    { type: business , title: 'Office' },
    { type: villa, title: 'Villa' },
    { type: living, title: 'Room' },
  ]
  return (
     
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
                items: 3,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
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
              data.map(({ type, title }, i) => {
                return (
                  <Card key={i}>
                    <img src={type} />
                    <span>{title}</span>
                  </Card>
                )
              })
            }
          </Carousel>
       
  )
}

export default index;




{/* <Container>
  <Wrap>
    <H>Explore Our Properties</H>
    <P m='35px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec sollicitudin</P>
    <WrapperCard> */}
//  <button><img src={back} /></button>
// {
//   data.map(({ type, title }, i) => {
//     return (
//       <Card key={i}>
//         <img src={type} />
//         <span>{title}</span>
//       </Card>
//     )
//   })
// }
// <button><img src={next} /></button>
//  </WrapperCard >
//         </Wrap >
//     </Container >