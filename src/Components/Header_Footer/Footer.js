import React from 'react'
import HeatLogo from '../ReusableUI/Icons'
import heatLogo from '../../Resources/images/logos/heatThree.png';


const Footer = () => {
    return (
        <footer className="footer_bck">
            <div className="footer_logo">
                <HeatLogo
                    width="120px"
                    height="120px"
                    link={true}
                    linkTo="/"
                    url={heatLogo}
                />
                <div className="footer_discl">
                    Jovan's Heat Blog 2020. All rights reserverd.
                </div>
            </div>
          
        </footer>
    )
}

export default Footer
