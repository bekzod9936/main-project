import React from 'react'
import { Section1, Section2, Content, Sub, List, Contact, Title, Down, Up} from './style'
import down from '../assets/icon/down-arrow.png';
import email from '../assets/icon/email.png';
import face from '../assets/icon/facebook.png';
import inst from '../assets/icon/instagram.png';
import inLink from '../assets/icon/in.png';
import  twit from '../assets/icon/twitter.png';
import message from '../assets/icon/message.png';
import phone from '../assets/icon/fphone.png';
import pin from '../assets/icon/pin.png';
import logo from '../assets/icon/logo.png';
const index = () => {
  const li1 = ['Chicago' , 'Los Angeles' , 'Miami' , 'New York'];
  const li2 = ['Apartments' , 'Condos' ,'Houses' ,'Offices' ,'Retail' , 'Villas'];
  const li3 = ['About Us' ,'Terms & Conditions' , "User’s Guide" ,"Support Center" , " Press Info " , "Contact Us"];
  return (
    <>
      <Section1>
        <h1>Become a Real Estate Agent</h1>
        <p>We only work with the best companies around the globe</p>
        <button>REGISTER NOW</button>
       </Section1>
      <Section2>
        <Up>
          <Content>
            <Contact><Title>Contact Us</Title>
              <div>
                <ul>
                  <li><img src={pin} /><span>329 Queensberry Street, North Melbourne VIC 3051, Australia.</span></li>
                  <li><img src={phone} /><span>123 456 7890</span></li>
                  <li><img src={message} /><span>support@houzing.com</span></li>
                </ul>
                <ul>
                  <li><img src={face} /></li>
                  <li><img src={twit} /></li>
                  <li><img src={inst} /></li>
                  <li><img src={inLink} /></li>
                </ul>
              </div>

            </Contact>
            <List>
              <div>
                <Title>Discover</Title>
                <ul>
                  {
                    li1.map((e, i) => <li key={i}><a>{e}</a></li>)
                  }
                </ul>
              </div>
              <div>
                <Title>Lists by Category</Title>
                <ul>
                  {
                    li2.map((e, i) => <li key={i}><a>{e}</a></li>)
                  }
                </ul>
              </div>
              <div>
                <Title>Quick Links</Title>
                <ul>
                  {
                    li3.map((e, i) => <li key={i}><a>{e}</a></li>)
                  }
                </ul>
              </div>
            </List>
            <Sub>
              <Title>Subscribe</Title>
              <p>We don’t send spam so don’t worry.</p>
              <div>
                <input type='text' placeholder='Enter your email' />
                <button><img src={email} /></button>
              </div>

            </Sub>
          </Content>
        </Up>
        <Down>
          <div>
            <p>Copyright &copy; 2021 CreativeLayers. All Right Reserved.</p>
            <img src={logo} />
            <ul>
              <li>Home</li>
              <li>Site Map</li>
              <li>Privacy policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </Down>
 
      </Section2>
    </>
  )
}

export default index;
  
