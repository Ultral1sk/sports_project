import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate'


export class Stripes extends Component {
    // giving the state the real values
    state = {
        stripes: [
            {
                background: '#98c5e9',
                left : 120,
                rotate : 25,
                top : -260,
                delay : 0,
            },
            {
                background: '#ffffff',
                left : 360,
                rotate : 25,
                top : -379,
                delay : 200,
            },
            {
                background: '#98c5e9',
                left : 600,
                rotate : 25 ,
                top : -498,
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
                    background: '#ffffff',
                    opacity : 0,
                    left : 0,
                    rotate : 0,
                    top : 0

                }}
                enter={{
                    background: [stripe.background],
                    opacity : [1],
                    left    : [stripe.left],
                    rotate  : [stripe.rotate],
                    top     : [stripe.top],
                    timing  : {delay : stripe.delay, duration : 200, ease : easePolyOut}
                    
                }}
            >

                {({opacity, left,rotate,  top,  background}) => {
                    return (
                        <div
                            className="stripe"
                            style={{
                                background,
                                opacity,
                                transform : `rotate(${rotate}deg) translate(${left}px, ${top}px)`
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

export default Stripes
