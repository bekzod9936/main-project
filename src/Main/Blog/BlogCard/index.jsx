import React from 'react';
import {ReactComponent as User} from "../../../assets/icon/blog/user.svg";
import { ReactComponent as Calendar} from "../../../assets/icon/blog/calendar.svg";
import { Button, Container, Title, ImgWarp, Wrapper, Content, Data, Link } from "./style";
const index = (props) => {
  const {type , user , data , title , info}=props.value;
  return (
    <Container>
      <ImgWarp><Button>{type}</Button></ImgWarp>
      <Wrapper>
        <Data>
          <p><User /><span>{user}</span></p>
          <p><Calendar /><span>{data}</span></p>
        </Data>
        <Title>{title}</Title>
        <Content>{info}</Content>
        <Link>READ MORE</Link>
      </Wrapper>
    </Container>
  )
}

export default index
