import React from 'react'
import  HeatLogo  from '../ReusableUI/Icons'

const Footer = () => {
    return (
        <footer className="footer_bck">
            <div className="footer_logo">
                <HeatLogo 
                    width="70px"
                    height="70px"
                    link={true}
                    linkTo="/"
                />
            </div>
            <div className="footer_discl">
                Miami Heat 2020. All rights reserverd.
            </div>
        </footer>
    )
}

export default Footer
