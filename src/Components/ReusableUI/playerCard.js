import React from 'react'
import MiscellaneousTag from './miscellaneous'


const PlayerCard = (props) => {
    return (
        <>
            <div className="player_card_wrapper">
                <div
                    className="player_card_thmb"
                    style={{ background: `url(${props.bck})`, width : props.width, height : props.height }}
                >
                    <div className="player_card_number">
                        {props.number}
                    </div>
                    <div>
                        <div className="player_card_nfo">
                            <div className="player_card_name">
                                <span>{props.name}</span><br />
                                <span>{props.lastname}</span>
                                <div className="playerd_card_abilities">
                                    <span>{props.position}</span>
                                    <span>{props.height}</span>
                                    <span>{props.lbs}</span>
                                </div>
                            </div>

                            <div className="player_card_statistics">
                                <div>
                                    <span>{props.fieldgoal}</span>
                                    <span>FG%</span>
                                </div>
                                <div>
                                    <span>{props.threept}</span>
                                    <span>3P%</span>
                                </div>
                                <div>
                                    <span>{props.points}</span>
                                    <span>PTS</span>

                                </div>
                                <div>
                                    <span>{props.assists}</span>
                                    <span>AST</span>
                                </div>
                            </div>
                            <div className="player_card_about">
                                {props.about}
                                <div className="home_card_button">
                                <MiscellaneousTag link={true} linkTo='/the_players' bck="#8a0000" padding="1rem 1.5rem">See more</MiscellaneousTag>
                                </div>
                            </div>
                                           

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PlayerCard
