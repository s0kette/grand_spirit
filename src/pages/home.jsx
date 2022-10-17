import React from 'react'
import Introduction from '../components/Introduction'
import News from '../components/News'
import Shop from '../components/Shop'
import SocialNetwork from '../components/SocialNetwork'
import Teams from '../components/Teams'
import Values from '../components/Values';
import Disclaimer from '../components/Disclaimer';

function home() {



  return (
    <>
      <Disclaimer />
      <Introduction/>
      <Values/>
      <Teams/>
      <Shop/>
      <News/>
    </>
  )
}

export default home