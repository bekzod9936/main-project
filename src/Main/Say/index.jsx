import React from 'react'
import { Conatiner, Header, Content, Card, Info, Profil, WrapCard } from './style'

const index = () => {
  const data = [{ info: " “ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “", title: "Marvin McKinney", job: "Designer"  } ,
    { info: " “ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “ ", title: "Theresa Webb", job: "Host" },
    { info: " “ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “", title: "Robert Fox", job: "Reporter" },
    { info: " “ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “", title: "Guy Hawkins", job: "Developer" }, ]
  return (
    <Conatiner>
      <Header>Our Testimonials</Header>
      <Content>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Content>
      <WrapCard>
        {
          data.map(({info , title , job }, i) => <Card><Info>{info}<Profil></Profil></Info>
            <h1>{title}</h1>
            <p>{job}</p>
          </Card>)
        }
      </WrapCard>
    </Conatiner>
  )
}

export default index
