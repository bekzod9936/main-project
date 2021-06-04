import React from 'react'
import Carusel from "./Carusel";
import Choose from "./Choose";
import Category from "./Category";
import Guides from "./Guides";
import RecentList from "./RecentList";
import Say from "./Say";
import City from "./City";
import Blog from "./Blog";
import Agent from "./Agent";


const index = () => {
  return (
    <div>
      <Carusel />
      <Choose />
      <Category />
      <Guides />
      <RecentList />
      <Say />
      <City />
      <Agent />
      <Blog />
    </div>
  )
}

export default index
