import React from 'react'
import MiscellaneousTag from '../../ReusableUI/miscellaneous'
import Blocks from './Blocks';

const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <MiscellaneousTag
                    color="black"
                    size="50px"


                >
                    Matches
                </MiscellaneousTag>
                <Blocks />
                <div style={{ textAlign: 'center' }}>

                    <MiscellaneousTag
                        bck="rgb(138, 0, 0)"
                        size="45px"
                        color="white"
                        link={true}
                        linkTo='/the_matches'
                    >

                        Click for more matches
                </MiscellaneousTag>
                </div>

            </div>
        </div>
    )
}

export default MatchesHome
