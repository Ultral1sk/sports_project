import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { firebasePlayers, firebase } from '../../firebase'
import { firebaseLooper } from '../ReusableUI/miscellaneous'
import { Promise } from 'core-js'


class ThePlayers extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            players: []
        }
    }

    componentDidMount() {

        firebasePlayers.once('value').then(snapshot => {
            const players = firebaseLooper(snapshot);
            let promises = [];

            for (let key in players) {
                console.log(players)
                promises.push(
                    new Promise((resolve, reject) => {
                        firebase.storage().ref('players')       // reacth the storage in fireabase target the players folder
                            .child(players[key].image).getDownloadURL() //
                            .then(url => {
                                players[key].url = url; // here we add a new property URL where the images will be
                                resolve(); // after all promises are going to be resolved then we are going to set the state

                                // console.log(url)
                            })
                    })
                );
            }

            // we want to proceed forward when all promises are resolved in this case thte images
            Promise.all(promises).then(() => {
                this.setState({
                    loading: false,
                    players
                });
            });
        });
    }
    showplayersByCategory = (category) => (
        // looping through the category into our database and displaying players
        // that are going to have different category

        this.state.players
            ?
            this.state.players.map((player, i) => {
                return player.position === category ?
                    // on each itteration we are going to have a differetn number
                    <Fade left delay={i * 40} key={i}>

                        <div className="player_card_wrapper">
                            <div
                                className="player_card_thmb"
                                style={{ background: `url(${player.url})`, width: player.width, height: player.height }}
                            >
                                <div className="player_card_number">
                                    {player.number}
                                </div>
                                <div>
                                    <div className="player_card_nfo">
                                        <div className="player_card_name">
                                            <span>{player.name}</span><br />
                                            <span>{player.lastname}</span>
                                            <div className="playerd_card_abilities">
                                                <span>{player.position}</span>
                                                <span>{player.height}</span>
                                                <span>{player.lbs}</span>
                                            </div>
                                        </div>

                                        <div className="player_card_statistics">
                                            <div>
                                                <span>{player.fieldgoal}</span>
                                                <span>FG%</span>
                                            </div>
                                            <div>
                                                <span>{player.threept}</span>
                                                <span>3P%</span>
                                            </div>
                                            <div>
                                                <span>{player.points}</span>
                                                <span>PTS</span>

                                            </div>
                                            <div>
                                                <span>{player.assists}</span>
                                                <span>AST</span>
                                            </div>
                                        </div>
                                        <div className="player_card_about">
                                            {player.about}

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Fade>
                    : null
            })
            :
            null
    )

    render() {
        // console.log(this.state.players);

        return <div className="the_team_container">

            {
                !this.state.loading ?
                    <div>

                        <div className="team_category_wrapper">
                            <div className="title">Point Guard</div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Point Guard')}
                            </div>
                        </div>

                        <div className="team_category_wrapper">
                            <div className="title">Shooting Guard</div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Shooting Guard')}
                            </div>
                        </div>

                        <div className="team_category_wrapper">
                            <div className="title">Small Forward</div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Small Forward')}
                            </div>
                        </div>

                        <div className="team_category_wrapper">
                            <div className="title">Power Forward</div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Power Forward')}
                            </div>
                        </div>
                        <div className="team_category_wrapper">
                            <div className="title">Center</div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Center')}
                            </div>
                        </div>

                    </div>
                    : null
            }

        </div>

    }
}

export default ThePlayers 
