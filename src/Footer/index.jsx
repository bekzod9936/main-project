import React from 'react'
import { Container, Section1, Header, Content1, Button, Up, Section2, Contact, Discover, Category, Links, Subscribe, Down, Title, Li1, Li2, Input, Span, Wrap } from "./style";
import pin from "../assets/icon/footer/pin.svg";
import message from "../assets/icon/footer/email.svg";
import email from "../assets/icon/footer/email2.svg";
import face from "../assets/icon/facebook.svg";
import inLink from "../assets/icon/in.svg";
import inst from "../assets/icon/ins.svg";
import logo from "../assets/icon/logo.svg";
import phone from "../assets/icon/footer/phone.svg";
import twit from "../assets/icon/twitter.svg";
const index = () => {
  const li1 = ['Chicago', 'Los Angeles', 'Miami', 'New York'];
  const li2 = ['Apartments', 'Condos', 'Houses', 'Offices', 'Retail', 'Villas'];
  const li3 = ['About Us', 'Terms & Conditions', "User’s Guide", "Support Center", " Press Info ", "Contact Us"];
  return (
    <Container>
      <Section1>
        <Header>Become a Real Estate Agent</Header>
        <Content1>We only work with the best companies around the globe</Content1>
        <Button>REGISTER NOW</Button>
      </Section1>
      <Section2>
        <Up>
          <Contact m='75'>
            <Title>Contact Us</Title>
            <ul>
              <Li1><img src={pin} /> 
              <span>329 Queensberry Street, North Melbourne VIC 3051, Australia.</span></Li1>
              <Li1><img src={phone} /><span>123 456 7890</span></Li1>
              <Li1><img src={message} /><span>support@houzing.com</span></Li1>
            </ul>
            <ul>
              <li><img src={face} /></li>
              <li><img src={twit} /></li>
              <li><img src={inst} /></li>
              <li><img src={inLink} /></li>
            </ul>
          </Contact>
          <Discover m='95'>
            <Title >Discover</Title>
            <ul>
              {
                li1.map((value, i) => <Li2 key={i}>{value}</Li2>)
              }
            </ul>
          </Discover>
          <Category m='150'>
            <Title>Lists by Category</Title>
            <ul>
              {
                li2.map((value, i) => <Li2 key={i}>{value}</Li2>)
              }
            </ul>
          </Category>
          <Links m='115'>
            <Title >Quick Links</Title>
            <ul>
              {
                li3.map((value, i) => <Li2 key={i}>{value}</Li2>)
              }
            </ul>
          </Links>
          <Subscribe>
            <Title>Subscribe</Title>
            <p>We don’t send spam so don’t worry.</p>
            <Span><Input type='text' placeholder='Enter your email' />
            <img src={email} />
            </Span>
          </Subscribe>
        </Up>
        <Down>
          <Wrap>
            <p>Copyright &copy; 2021 CreativeLayers. All Right Reserved.</p>
            <img src={logo} />
            <ul>
              <li>Home</li>
              <li>Site Map</li>
              <li>Privacy policy</li>
              <li>Cookie Policy</li>
            </ul>
          </Wrap>
        </Down>
      </Section2>
    </Container>
  )
}

export default index;