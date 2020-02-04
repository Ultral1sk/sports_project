import React from 'react'
import MiscellaneousTag from '../../ReusableUI/miscellaneous'


const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <MiscellaneousTag 
                    bck="#0e1731"
                    size="50px"
                    color="#ffffff"
                    
                >
                Matches
                </MiscellaneousTag>
                BLOCK

                <MiscellaneousTag
                   bck="#ffffff"
                   size="22px"
                   color="#0e1731"
                   link={true}
                   linkTo='/the_team'
                >
                 
                    See more matches
                </MiscellaneousTag>
    
            </div>
        </div>
    )
}

export default MatchesHome