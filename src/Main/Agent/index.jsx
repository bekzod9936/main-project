import React    from 'react'
import { Container, Title, Content, Wrap, Card, CardContent, CardTitle, CardFooter , } from "./style";
import { ReactComponent as Facebook}  from "../../assets/icon/agent/facebook.svg";
import { ReactComponent as Twitter }   from "../../assets/icon/agent/twitter.svg";
import { ReactComponent as Instagram }   from "../../assets/icon/agent/ins.svg";
import { ReactComponent as Inlink }   from "../../assets/icon/agent/in.svg";
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
      <Title>Meet Our Agents</Title>
      <Content>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Content>
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
