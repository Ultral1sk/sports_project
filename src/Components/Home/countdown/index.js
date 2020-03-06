import React from 'react'
import Countdown from './Countdown'
import Bgvideo from './Bgvideo'

const CountdownRender = () => {
    return (
        <div style={{height : '100%'}}>
            <Countdown />
            <Bgvideo />
        </div>
    )
}

export default CountdownRender