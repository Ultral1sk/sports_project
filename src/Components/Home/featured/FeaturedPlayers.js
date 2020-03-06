import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate'
import jimmy from '../../../Resources/images/players/heat/jimmy3.png'
import dragon from '../../../Resources/images/players/heat/dragon.png'
import bam from '../../../Resources/images/players/heat/bam.png'


export class FeaturedPlayers extends Component {
    // giving the state the real values
    state = {
        stripes: [
            {
                background: `url(${jimmy}) center center no-repeat`,
                backgroundSize : 'cover',

                left : 1250,
                top :  148,
                delay : 200,
            },
            {
                background: `url(${dragon}) center center no-repeat `,
                backgroundSize : 'cover',
                left : 760,
                top : 162,
                delay : 200,
            },
            {
                background: `url(${bam}) no-repeat `,
                left : 600,
                top : 327,
                delay : 400,
            }
        ]
    }


    showStripes = () => (
        // looping through the state
        this.state.stripes.map((stripe, i) => (
            // rendering the Animate component which will give us the possibility to use animation
            <Animate
                key={i}
                show={true}

                start={{
                    background: '',
                    opacity : 0,
                    left : 0,
                    top : 0

                }}
                enter={{
                    background: [stripe.background],
                    opacity : [1],
                    left    : [stripe.left],
                    top     : [stripe.top],
                    timing  : {delay : stripe.delay, duration : 400, ease : easePolyOut}
                    
                }}
            >

                {({opacity, left, top, background}) => {
                    return (
                        <div
                            className="stripe"
                            style={{
                                background,
                                opacity,
                                transform : `translate(${left}px, ${top}px)`
                            }}
                        >
                        </div>
                    )
                }}
            </Animate>
        ))

    )
    render() {
        // function that is only going to render what is going to receive
        // in this case it receives a COMPONENT from the react-move LIBRARY
       // 1     - in the state is the real value which the component should RENDER
       // 1.5   - inside the function showStripes then we are going to loop thorugh the state and create multiple COMPONENTS 
       //         with different values of the state
       // 2     - The Animate component has multiple attributes one of them is START - which means how should the STATE of the Component look like before it renders
       // 2.5   - and ENTER - how should the STATE of the COMPONENT look like when it is being RENDERED 
       // 3     - both of them will accept the blueprint of the state the ENTER attribute has one exception we have to put the value in [] brackets
       // 4     - in order the styles to be passed clearly we call a function in where we DESTRUCTURE the STYLES which we want to pass on to the COMPONENT 
       // 5     - at the end because we already call the function in the our main REDNER itll display the component
        return (
            <div className="featured_stripes">
                {this.showStripes()}
            </div>
        )
    }
}

export default FeaturedPlayers
