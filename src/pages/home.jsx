import React from 'react'
import Introduction from '../components/Introduction'
import News from '../components/News'
import Shop from '../components/Shop'
import SocialNetwork from '../components/SocialNetwork'
import Teams from '../components/Teams'
import Values from '../components/Values'

function home() {
  return (
    <>
      <Introduction/>
      <Values/>
      <Teams/>
      <Shop/>
      <News/>
      <SocialNetwork/>
    </>
  )
}

export default home