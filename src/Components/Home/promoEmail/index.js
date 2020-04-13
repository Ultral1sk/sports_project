import React from 'react'
import PromotionalAnimation from './promoAnimation'
import Enroll from './Enroll'


const PromotinalEmail = () => {
    return (
        <div className="promotion_wrapper" style={{background : '#ffffff'}}>
            <div className="container-fluid" style={{position: 'relative'}}>
                <PromotionalAnimation />
                <Enroll />
            </div>
        </div>
    )
}

export default PromotinalEmail
