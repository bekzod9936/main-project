import React from 'react'
import BlogCard from "./BlogCard";
import { P , H } from "../main";
import { Container,  Wrap} from "./style";
const index = () => {
 const data=[
    { type: "FAMILY HOUSE", user: 'Robert Fox', data: '06 April, 2021', title: 'Redfin Ranks the Most Competitive Neighborhoods of 2020', info: 'Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. ' , },
    { type: "APARTMENT", user: 'Robert Fox', data: '06 April, 2021', title: 'Housing Markets That Changed the  Most This Decade', info: 'Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. ' , },
    { type: "APARTMENT", user: 'Robert Fox', data: '06 April, 2021', title: 'Redfin Unveils the Best Canadian  Cities for Biking', info: 'Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. ' , },
    { type: "RENTAL", user: 'Robert Fox', data: '06 April, 2021', title: 'You Can Buy The Piano Teacher’s Home from Groundhog Day', info: 'Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. ' , },
  ]
  return (
    <Container>
      <H>From Our Blog</H>
      <P m='40px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</P>
      <Wrap>
        {
          data.map((value, i) => <BlogCard value={value} key={i} />)
        }
      </Wrap>
    </Container>
  )
}

export default index
