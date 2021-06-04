import React from 'react'
import BlogCard from "./BlogCard";
import { Container, Title, Wrap, Content } from "./style";
const index = () => {
 const data=[
    { type: "FAMILY HOUSE", user: 'Robert Fox', data: '06 April, 2021', title: 'Redfin Ranks the Most Competitive Neighborhoods of 2020', info: 'Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. ' , },
    { type: "APARTMENT", user: 'Robert Fox', data: '06 April, 2021', title: 'Housing Markets That Changed the  Most This Decade', info: 'Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. ' , },
    { type: "APARTMENT", user: 'Robert Fox', data: '06 April, 2021', title: 'Redfin Unveils the Best Canadian  Cities for Biking', info: 'Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. ' , },
    { type: "RENTAL", user: 'Robert Fox', data: '06 April, 2021', title: 'You Can Buy The Piano Teacher’s Home from Groundhog Day', info: 'Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. ' , },
  ]
  return (
    <Container>
      <Title>From Our Blog</Title>
      <Content>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Content>
      <Wrap>
        {
          data.map((value, i) => <BlogCard value={value} key={i} />)
        }
      </Wrap>
    </Container>
  )
}

export default index
