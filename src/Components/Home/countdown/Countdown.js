import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import CountdownCard from './CountdownCard'
import { Link } from 'react-router-dom'
import shortVideo from '../../../Resources/images/players/heat/ShortMovie/miniMovie.mp4'

import dallas from '../../../Resources/images/logos/dallas.png'
import rockets from '../../../Resources/images/logos/rockets.png'
import heat from '../../../Resources/images/logos/heatThree.png'
import boston from '../../../Resources/images/logos/boston.png'

class Countdown extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deadline: 'Mar, 28, 2020',
            days: '0',
            hours: '0',
            minutes: '0',
            seconds: '0',
            videoURL: shortVideo
        }
    }

    getCountDown = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date())
        if (time < 0) {
            console.log('Date passed');

        } else {
            const seconds = Math.floor((time / 1000) % 60)
            const minutes = Math.floor((time / 1000 / 60) % 60)
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));

            this.setState({

                days,
                hours,
                minutes,
                seconds
            })

        }
    }

    componentDidMount() {
        setInterval(() => this.getCountDown(this.state.deadline), {

        }, 1000)
    }

    render() {
        return (
            <>
                <Fade delay={1000}>

                    <div className="countdown_wrapper">
                        <div className="video-container" style={{ zIndex: -1 }}>
                            <video style={{ width: '100%', height: '100%' }} preload="preload" id="video" autoPlay="autoplay" loop="loop" muted>
                                <source src={this.state.videoURL} type="video/mp4" />
                                <p>Your user agent does not support the HTML5 Video Element.</p>
                            </video>
                            {/* container on top of the bideo with dark background */}
                            <div className="videoFadingContainer"> </div>
                            {/* container on top of the bideo with dark background */}
                        </div>

                        <div className="countdown_top">
                            <h3>Next Game</h3>
                        <div className="countdown_toptext">
                                <h2>Heat</h2>
                                <div className="countdown_innertext">
                                    <h2 >VS</h2>
                                    <h2 >TBA</h2>
                                </div>
                            </div>
                            <div className="countdown_bottom">
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.days}
                                </div>
                                <div className="countdown_tag">
                                    Days
                        </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.hours}
                                </div>
                                <div className="countdown_tag">
                                    Hours
                        </div>

                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.minutes}
                                </div>
                                <div className="countdown_tag">
                                    Minutes
                        </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.seconds}
                                </div>
                                <div className="countdown_tag">
                                    sec
                        </div>
                            </div>
                        </div>
                        </div>
                     
                        <div className="CountdownCard_wrapper">
                            <h3  className="upcoming">Upcoming Games</h3>
                            <div className="newsCards_inside_wrapper">
                                <div>
                                    <CountdownCard
                                        date="Mon, Mar 2 | 7:00 PM "
                                        tickets="Travel"
                                        homeLogo={heat}
                                        description="Dallas Logo"
                                        awayLogo={dallas}
                                    />
                                </div>
                                <div>
                                    <CountdownCard
                                        date="Wed, Mar 4 | 8:30 PM "
                                        tickets="Tickets"
                                        homeLogo={heat}
                                        description="Rockets Logo"
                                        awayLogo={rockets}
                                    />
                                </div>
                                <div>
                                    <CountdownCard
                                        date="Mon, Mar 6 | 7:30 PM "
                                        tickets="Tickets"
                                        homeLogo={heat}
                                        description="Boston Logo"
                                        awayLogo={boston}
                                    />
                                </div>
                            </div>
                            <div className="scheduleButoon">
                                <Link to="the_matches">See full Schedule</Link>
                            </div>
                        </div>


                    </div>

                </Fade>

            </>
        )
    }
}

export default Countdown
