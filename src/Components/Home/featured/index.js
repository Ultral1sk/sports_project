// this is the component which will host everything from the Home and Featured router
// elements at the top is my preference to the names im giving in my raect app

import React from 'react'
import FeaturedPlayers from './FeaturedPlayers'
import Text from './Text'

const Featured = () => {
    return (
        <div className="featured_wrapper">
            <div className="featured_heat_background">
            <FeaturedPlayers />
            <Text />
            </div>
     

        </div>
    )
}

export default Featured
