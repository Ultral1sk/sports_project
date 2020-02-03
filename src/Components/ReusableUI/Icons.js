import React from 'react';
import { Link } from 'react-router-dom';

import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png'


// creating a reusable component
const CityLogo = (props) => {

    const template = <div 
                        className="img_cover"
                        style={{
                            width       : props.width,
                            height      : props.height,
                            background  : `url(${mcitylogo}) no-repeat`
                        }}
                    >
                    </div>

    // this component expets to receive props
    // if we have a value inside props.link we are going to return a logo with a wrapped LINK around
    if(props.link){
        return(
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
        // if not we are going to return an empty div which means we dont need it
    } else {
        return template
    }
}

export default CityLogo