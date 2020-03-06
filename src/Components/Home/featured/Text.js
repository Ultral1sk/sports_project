import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate'

import trophy from '../../../Resources/images/logos/trophy.png'


class Text extends Component {

    // function that renders a component it is with parenthesies not with curly brackets
    animateText = () => (
        <Animate

            show={true}
            // the starting behaviour of the animation
            start={{
                opacity: 0,
                rotate: 0,

            }}

            // on render behaviour of the animation
            enter={{
                opacity: [1],
                rotate: [360],
                timing: { duration: 1000, ease: easePolyOut }
            }}
        >
            {/* a function called inside the ANIMATION which destructures the values which the <div> element is going to
            render or receive when it is being rendered */}
            {({ opacity, rotate }) => {

                return (
                    <div className="featured_text"
                        style={{
                            opacity,
                            transform: `translate(-25px, 320px) rotateY(${rotate}deg)`
                        }}
                    >
                        NATION
                    </div>
                )

            }}

        </Animate>

    )   

    animateTrophy = () => (
        // function that renders a component it is with parenthesies not with curly brackets
        <Animate
            show={true}
               // the starting behaviour of the animation
            start={{
                opacity: 0,
            }}
                  // on render behaviour of the animation
            enter={{
                opacity: [1],
                timing: { delay: 800, duration: 500, ease: easePolyOut }

            }}
        >

            {({ opacity }) => {
                return (
                    <div className="featured_trophy"
                        style={{
                            opacity,
                            background: `url(${trophy})`,
                            transform: `translate(1150px, 277px)`
                        }}
                    >

                    </div>
                )
            }}

        </Animate>
    )


    render() {
        return (
            <div className="featured_text">
                {this.animateTrophy()}
                {this.animateText()}
            </div>
        )
    }
}

export default Text
