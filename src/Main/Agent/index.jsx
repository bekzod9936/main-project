import React    from 'react'
import { Container, Wrap, Card, CardContent, CardTitle, CardFooter , } from "./style";
import { P, H } from "../main";
import { ReactComponent as Facebook}  from "../../assets/icon/facebook.svg";
import { ReactComponent as Twitter }   from "../../assets/icon/twitter.svg";
import { ReactComponent as Instagram }   from "../../assets/icon/ins.svg";
import { ReactComponent as Inlink }   from "../../assets/icon/in.svg";
const index = () => {
  const data=[
    { user: 'Robert Fox', job: 'Lead Designer' } ,
    { user: 'Floyd Miles', job: 'CEO, Director' },
    { user: 'Albert Flores', job: 'Marketer' },
    { user: 'Darlene Robertson', job: 'Project Manager' },
    { user: 'Savannah Nguyen', job: 'Lead Developer' },
  ]
  return (
    <Container>
      <H>Meet Our Agents</H>
      <P m='80px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</P>
      <Wrap>
         {
          data.map(({ user, job }, i) => <Card key={i}>
            <div><div><Facebook /> <Twitter /> <Instagram /> <Inlink /></div></div>
            <CardFooter><CardTitle>{user}</CardTitle><CardContent>{job}</CardContent></CardFooter>
            </Card>)
         }
      </Wrap>
    </Container>
  )
}

export default index
