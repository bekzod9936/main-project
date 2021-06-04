import React, { Component } from 'react';
import search1 from '../assets/icon/search1.png';
import search2 from '../assets/icon/search2.png';
import setting from '../assets/icon/setting.png';
import logo from '../assets/icon/logo.png';
import down from '../assets/icon/down.png';
import phone from '../assets/icon/phone.png';
import user from '../assets/icon/user.png';
import group from '../assets/icon/Group.png';
import { Container, Title, Text, SearchTitle, Search, Select, Wrap, Button, WrapInput,  Border,   ButtonWrap, Ul, Navbar, Logo, Bar} from './style'

export default class index extends Component {
  render() {
    return (
      <Container>
        <Navbar>
          <Logo>
            <img src={logo} />
          </Logo>
          <Bar>
            <ul>
              <li><a>Home<img src={down} /></a></li>
              <li><a>Listing <img src={down} /></a></li>
              <li><a>Property <img src={down} /></a></li>
              <li><a>Pages <img src={down} /></a></li>
              <li><a>Contact</a></li>
            </ul>
            <img src={phone} />
            <p>(+88) 1990 6886</p>
            <img src={user} className="user" />
            <button><img src={group} />Create Listing</button>
          </Bar>
        </Navbar>
        <Text>It's great to be home!</Text>
        <Title>Find Your Perfect Home</Title>
        <Ul>
          <li>Buy</li>
          <li><Border color='#FFFFFF'>Rent</Border></li>
          <li>Sold</li>
        </Ul>
        <Search>
          <Wrap>
            <SearchTitle>TYPE</SearchTitle>
            <Border color='#E6E9EC'>
              <Select>
                <option>Property Type</option>
              </Select>
            </Border>
          </Wrap>
          <Wrap>
            <SearchTitle>LOCATION</SearchTitle>
            <Border color='#E6E9EC'>
              <Select>
                <option>All Cities</option>
              </Select>
            </Border>
          </Wrap>
          <WrapInput>
            <SearchTitle>SEARCH</SearchTitle>
            <Border color='#E6E9EC'>
              <input placeholder='Enter keywords' /><img src={search1} />
            </Border>
          </WrapInput>
          <ButtonWrap>
            <img src={setting} />
            <p>Advanced <br />Search</p>
            <Button><img src={search2} />SEARCH</Button>
          </ButtonWrap>
        </Search>

      </Container>
    )
  }
}

