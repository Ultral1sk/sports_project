import React from 'react'
import MiscellaneousTag from '../../ReusableUI/miscellaneous'
import Blocks from './Blocks';

const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container-fluid" style={{ padding: '0.5rem'}}>
                <MiscellaneousTag
                    color="black"
                    size="50px"


                >
                    Matches
                </MiscellaneousTag>
                <h2>All matches are postponed because of the COVID-19 pendemic, for more info click the    <MiscellaneousTag
                    
                        size="30px"
                        color="rgb(138, 0, 0)"
                        link={true}
                        linkTo='/the_matches'
                    >

                        link
                </MiscellaneousTag></h2>
                <Blocks />
                <div style={{ textAlign: 'center', paddingTop : '5rem' }}>

                 
                </div>

            </div>
        </div>
    )
}

export default MatchesHome
