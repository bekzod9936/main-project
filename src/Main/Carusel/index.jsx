import Card from "../Card";
import styled from 'styled-components';
import { CarouselProvider, Dot, Slide, Slider,  } from "pure-react-carousel";
import circle from '../../assets/icon/icon-card/circle.png'
import ecircle from '../../assets/icon/icon-card/ecircle.png'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container, Wrapper, Wrap } from './carusel';
import React, { Component } from 'react'

export default class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       num: 1
    }
  }
  handleClick=(n)=>{
   this.setState({
     num: n
   })
  }
  render() {
    const info = [
      { title: 'New Apartment Nice Wiew', country: 'Quincy St, Brooklyn, NY, USA', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$7,500/mo' },

      { title: 'Skyper Pool Apartment', country: '112 Glenwood Ave Hyde Park, Boston, MA', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$5,250/mo' },

      { title: 'New Caledonian Wharf', country: '251 SW 6th Ln Florida City, FL', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$2,300/mo' },
      { title: 'Spacious Family Home', country: '4 W 21st St Flatiron District, New York, NY', bed: 4, bath: 5, garage: 1, ruler: 1200, mo: "$2,800/mo", price: '$1,900/mo' },
    ];
    return (
      <Wrap>
        <Container>
          <h1>Discover Our Featured Listings</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
          <div>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={33}
              totalSlides={5}
            >
              {/* {title, country, bed, bath, garage, ruler, mo, price}
            title={title} country={country} bed={bed} bath={bath} garage={garage} ruler={ruler} mo={mo} price={price} */}
              <Slider>
                <Slide className="slide" index={0}>
                  <Wrapper>
                    {
                      info.map((value, i) => <Card value={value} key={i} />)
                    }
                  </Wrapper>
                </Slide>
                <Slide index={1}>
                  <Wrapper>
                    {
                      info.map((value , i) => <Card value={value} key={i} />)
                    }
                  </Wrapper>
                </Slide>
                <Slide index={2}>
                  <Wrapper>
                    {
                      info.map((value , i) => <Card value={value} key={i} />)
                    }
                  </Wrapper>
                </Slide>
                <Slide index={3}>
                  <Wrapper>
                    {
                      info.map((value, i) => <Card value={value} key={i} />)
                    }
                  </Wrapper>
                </Slide>
                <Slide index={4}>
                  <Wrapper>
                    {
                      info.map((value , i) => <Card value={value} key={i} />)
                    }
                  </Wrapper>
                </Slide>
              </Slider>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Dott slide={0} onClick={() => this.handleClick(0)} style={{ paddingRight: '15px' }}>
                  <img src={this.state.num === 0 ? ecircle : circle } />
                </Dott>
                
                <Dott slide={1} onClick={() => this.handleClick(1)} style={{ paddingRight: '15px' }}>
                  <img src={this.state.num === 1 ? ecircle : circle }  style={{ width: '8px', height: '8px' }} />
                </Dott>
                <Dott slide={2} onClick={() => this.handleClick(2)} style={{ paddingRight: '15px' }}>
                  <img src={this.state.num === 2 ? ecircle : circle } />
                </Dott>
                <Dott slide={3} onClick={() => this.handleClick(3)} style={{ paddingRight: '15px' }}>
                  <img src={this.state.num === 3 ? ecircle : circle } />
                </Dott>
                <Dott slide={4} onClick={() => this.handleClick(4)} style={{ paddingRight: '15px' }} >
                  <img src={this.state.num === 4 ? ecircle : circle } />
                </Dott>
              </div>
            </CarouselProvider>
          </div>
        </Container>
      </Wrap>
    )
  }
}

  const Dott=styled(Dot)`
  background-color: transparent;
  `;
     
         
       
           

       
      