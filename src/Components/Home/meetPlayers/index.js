import React, { Component } from 'react'
import Stripes from '../../../Resources/images/stripes.png'
import MiscellaneousTag from '../../ReusableUI/miscellaneous'
import Reveal from 'react-reveal/Reveal';
import HomeCards from './cards';

class MeetPlayers extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             show : false
        }
    }
    

    render() {
        return (
            <Reveal
                fraction={0.7}
                onReveal={() => {
                    this.setState({
                        show : this.show = true
                    })
                }}
            >
                <div className="home_meetplayers"
                    style={{ background: `#ffffff url(${Stripes})` }}
                >
                    <div className="container">
                        <div className="home_meetplayers_wrapper">
                            <div className="home_card_wrapper">
                                <HomeCards 
                                    show={this.state.show}

                                />
                        </div>
                            <div className="home_text_wrapper">
                                <div>
                                    <MiscellaneousTag
                                        bck="#0e1731"
                                        size="100px"
                                        color="#ffffff"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        Meet
                                </MiscellaneousTag>
                                </div>
                                <br />
                                <div>
                                    <MiscellaneousTag
                                        bck="#0e1731"
                                        size="100px"
                                        color="#ffffff"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        The
                                </MiscellaneousTag>
                                </div>
                                <br />
                                <div>
                                    <MiscellaneousTag
                                        bck="#0e1731"
                                        size="100px"
                                        color="#ffffff"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        Players
                                </MiscellaneousTag>
                                </div>
                                <br />
                                <div>
                                    <MiscellaneousTag
                                        bck="#ffffff"
                                        size="27px"
                                        color="#0e1731"
                                        link={true}
                                        linkTo='/the_team'
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px',
                                            border: '1px solid #0e1731'
                                        }}
                                    >
                                        Click to see
                                </MiscellaneousTag>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

        )
    }
}

export default MeetPlayers