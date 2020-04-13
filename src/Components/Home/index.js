import React from 'react'
import Featured from './featured/index'
import Matches from './matches/index'
import MeetPlayers from './meetPlayers/index'
import PromotionalEmail from './promoEmail/index'
import CountdownRender from './countdown/index';
import TeamNews from './teamNewsHome/index'
import Navbar from '../Header_Footer/Navbar'
import Footer from '../Header_Footer/Footer'
const Home = (props) => {
    return (
        <>
       
          <Featured />
          <Matches />
          <CountdownRender />
          <TeamNews />
          <MeetPlayers />
          <PromotionalEmail />
         
        </>
    )
}

export default Home
