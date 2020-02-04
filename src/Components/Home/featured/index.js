// this is the component which will host everything from the Home and Featured router
// elements at the top is my preference to the names im giving in my raect app

import React from 'react'
import Stripes from './Stripes'
import Text from './Text'

const Featured = () => {
    return (
        <div className="featured_wrapper">
            <Stripes />
            <Text />

        </div>
    )
}

export default Featured
