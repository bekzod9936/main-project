import React from 'react'
import { Wrap, Inner, Text, Title, Ul, Ul1, Li, Search, Section, SearchTitle, Input, Select, Blopp, Button, NavBar, Nav, Li1, UserLogo , Down, Tel, Span, Add, BarLogo } from "./style";
import { ReactComponent as Logo } from '../assets/icon/logo.svg'
import { ReactComponent as Phone } from '../assets/icon/header/phone.svg'
import { ReactComponent as Plus } from '../assets/icon/header/plus.svg'
import { ReactComponent as Setting } from '../assets/icon/header/setting.svg'
import { ReactComponent as User } from '../assets/icon/header/user.svg'
import { ReactComponent as Wlop } from '../assets/icon/header/whitelop.svg'


const index = () => {
  return (
    <Wrap c='cd'>
      <NavBar cd>
        <BarLogo />
        <Logo />
        <Nav>
          <Ul>                                    
            <Li1><a>Home <Down /></a></Li1>
            <Li1><a>Listing <Down /></a></Li1>
            <Li1><a>Property <Down /></a></Li1>
            <Li1><a>Pages <Down /></a></Li1>
            <Li1><a>Contact <Down /></a></Li1>
          </Ul>
          <Tel>
            <Phone /> <Span>(+88) 1990 6886</Span>
        </Tel>
          <UserLogo  />
          <Add c='cb'><Plus /><Span>Create Listing</Span> </Add>
        </Nav>
        </NavBar>
      <Inner>
        <Text>It's great to be home!</Text>
        <Title>Find Your Perfect Home</Title>
        <Ul1 m>
          <Li>Buy</Li>
          <Li active>Rent</Li>
          <Li>Sold</Li>
        </Ul1>
        <Search>
          <Section w="190px">
            <SearchTitle c='cd'>TYPE</SearchTitle>
            <Select>
              <option>Property Type</option>
            </Select>
          </Section>
          <Section w='190px'>
            <SearchTitle>LOCATION</SearchTitle>
            <Select>
              <option>All Cities</option>
            </Select>
            </Section>
          <Section w='300px' p>
            <SearchTitle>SEARCH</SearchTitle>
            <Input type='text' placeholder="Enter keywords" ></Input>
            <Blopp />
            </Section>
          <Section w='100px' besh flex><Setting style={{marginRight: '10px'}} /><div>Advanced
Search</div></Section>
          <Button><Wlop style={{marginRight: "10px"}} />SEARCH</Button>
        </Search>
      </Inner>
    </Wrap>
  )
}

export default index
