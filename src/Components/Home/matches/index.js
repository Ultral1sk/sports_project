import React from 'react'
import MiscellaneousTag from '../../ReusableUI/miscellaneous'
import Blocks from './Blocks';

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
                <Blocks />

                <MiscellaneousTag
                   bck="#ffffff"
                   size="22px"
                   color="#0e1731"
                   link={true}
                   linkTo='/the_matches'
                >
                 
                    See more matches
                </MiscellaneousTag>
    
            </div>
        </div>
    )
}

export default MatchesHome
