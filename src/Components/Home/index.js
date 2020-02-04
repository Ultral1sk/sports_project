import React from 'react'
import Featured from './featured/index'
import Stripes from './featured/Stripes'
import Matches from './matches/index'

const Home = (props) => {
    return (
        <div className="bck_blue">
          <Featured />
          <Matches />
    
        </div>
    )
}

export default Home
