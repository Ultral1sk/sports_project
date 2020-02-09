import React from 'react'
import Featured from './featured/index'
import Matches from './matches/index'
import MeetPlayers from './meetPlayers/index'
import PromotionalEmail from './promoEmail/index'

const Home = (props) => {
    return (
        <div className="bck_blue">
          <Featured />
          <Matches />
          <MeetPlayers />
          <PromotionalEmail />
        </div>
    )
}

export default Home
