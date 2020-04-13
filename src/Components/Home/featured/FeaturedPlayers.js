import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate'
import jimmy from '../../../Resources/images/players/heat/jimmy3.png'
import dragon from '../../../Resources/images/players/heat/dragon.png'
import bam from '../../../Resources/images/players/heat/bam.png'


export class FeaturedPlayers extends Component {
    // giving the state the real values




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
                <div className="featured_wrapper_controller">
                 
                        <div id="stare" className="bam_bck"></div>
                        <div id="stare" className="dragon_bck"></div>
                        <div id="stare" className="trophy_bck"></div>
                        <div id="stare" className="butler_bck"></div>
               


                </div>
            </div>
        )
    }
}

export default FeaturedPlayers
