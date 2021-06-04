import React from 'react'
import { Conatiner, Header, Content, Card, Info, Profil } from './style'

const index = () => {
  return (
    <Conatiner>
      <Header>Our Testimonials</Header>
      <Content>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Content>
      <div>
        <Card>
          <Info>
            “ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “
           <Profil></Profil>
          </Info>
          <h1>Marvin McKinney</h1>
          <p>Designer</p>
        </Card>
      </div>
    </Conatiner>
  )
}

export default index
