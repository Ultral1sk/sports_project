import React from 'react'
import Featured from './featured/index'
import Matches from './matches/index'
import MeetPlayers from './meetPlayers/index'
import PromotionalEmail from './promoEmail/index'
import CountdownRender from './countdown/index';
import TeamNews from './teamNews/index'
const Home = (props) => {
    return (
        <div className="bck_blue">
          <Featured />
          <TeamNews />
          <Matches />
          <MeetPlayers />
          <CountdownRender />
          <PromotionalEmail />
        </div>
    )
}

export default Home
