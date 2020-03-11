import React, { Component } from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Reveal from 'react-reveal/Reveal';
import buttler from '../../../Resources/images/players/heat/PlayerCardImages/butler.png'
import bam from '../../../Resources/images/players/heat/PlayerCardImages/bam.png'
import derrick from '../../../Resources/images/players/heat/PlayerCardImages/derrick.png'
import nunn from '../../../Resources/images/players/heat/PlayerCardImages/nunn.png'
import robinson from '../../../Resources/images/players/heat/PlayerCardImages/robinson.png'
import PlayerCard from '../../ReusableUI/playerCard';
import MiscellaneousTag from '../../ReusableUI/miscellaneous'

class HomePlayerCards extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
    }

    render() {
        return (
            <Reveal
                fraction={0.7}
                onReveal={() => {
                    this.setState({
                        show: this.show = true
                    })
                }}
            >
                <div className="home_meetplayers"
                    style={{ background: ` url(${''})`, width: '98vw', height: '110vh' }}
                >
                    <div >
                        <div className="home_meetplayers_wrapper">
                            <div className="home_card_wrapper">
                                <div >
                                    <Carousel
                                        autoPlay={5000}
                                        animationSpeed={1500}
                                        infinite
                                    >

                                        <PlayerCard
                                            show={this.state.show}
                                            number="30"
                                            name="Jimmy"
                                            lastname=" Butler"
                                            bck={buttler}
                                            position="S-G |"
                                            height="6'.6' |"
                                            lbs="200 LBS."
                                            fieldgoal="52.2"
                                            threept="33.5"
                                            points="22.3"
                                            assists="4.4"
                                            about="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                        />
                                        <PlayerCard
                                            show={this.state.show}

                                            number="5"
                                            name="Derrick"
                                            lastname="Johnes Jr."
                                            bck={derrick}
                                            position="S-F |"
                                            height="6'.9' |"
                                            lbs="180 LBS."
                                            fieldgoal="57.2"
                                            threept="31.5"
                                            points="10.3"
                                            assists="1.4"
                                            about="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                        />
                                        <PlayerCard
                                            show={this.state.show}
                                            number="25"
                                            name="Kendrick"
                                            lastname="Nunn"
                                            bck={nunn}
                                            position="S-F |"
                                            height="6'.3' |"
                                            lbs="170 LBS."
                                            fieldgoal="53.2"
                                            threept="32.5"
                                            points="14.3"
                                            assists="2"
                                            about="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                        />
                                        <PlayerCard
                                            show={this.state.show}
                                            number="13"
                                            name="Bam"
                                            lastname="Adebayo"
                                            bck={bam}
                                            position="P-F |"
                                            height="220.6 m |"
                                            lbs="170 LBS."
                                            fieldgoal="57.2"
                                            threept="22.5"
                                            points="17.3"
                                            assists="3"
                                            about="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                        />
                                        <PlayerCard
                                            show={this.state.show}
                                            number="5"
                                            name="Duncan"
                                            lastname="Robinson"
                                            bck={robinson}
                                            position="S-G |"
                                            height="201.1 m |"
                                            lbs="190 LBS."
                                            fieldgoal="57.2"
                                            threept="42.5"
                                            points="16.3"
                                            assists="3"
                                            about="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                        >

                                        </PlayerCard>

                                    </Carousel>
                                    <div className="home_card_button" >
                                    <MiscellaneousTag link={true} linkTo='/the_players' bck="#8a0000" padding="1rem 1.5rem">See more</MiscellaneousTag>
                                </div>
                                </div>        
                            </div>
                        
                        </div>

                    </div>
                </div>
            </Reveal>

        )
    }
}

export default HomePlayerCards