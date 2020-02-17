import React, { Component } from 'react'
import PlayerCard           from '../ReusableUI/playerCard'
import Fade                 from 'react-reveal/Fade'
import Stripes              from '../../Resources/images/stripes.png'
import { firebasePlayers, firebase  } from '../../firebase'
import { firebaseLooper } from '../ReusableUI/miscellaneous'
import { Promise } from 'core-js'


class TheTeam extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,
            players : []
        }
    }
    
    componentDidMount(){
     
        firebasePlayers.once('value').then(snapshot =>{
            const  players =  firebaseLooper(snapshot);
            let promises = [];
            
            for(let key in players){
                promises.push(
                    new Promise((resolve,reject)=>{
                        firebase.storage().ref('players')       // reacth the storage in fireabase target the players folder
                        .child(players[key].image).getDownloadURL() //
                        .then( url => {
                            players[key].url = url; // here we add a new property URL where the images will be
                            resolve(); // after all promises are going to be resolved then we are going to set the state
                         
                            // console.log(url)
                        })
                    })
                );
            }

            // we want to proceed forward when all promises are resolved in this case thte images
            Promise.all(promises).then(()=>{
                this.setState({
                    loading: false,
                    players
                });
            });
        });
    }
    showplayersByCategory = (category) => (
        this.state.players 
        ?
            this.state.players.map((player, i ) => {
                return player.position === category ?
                // on each itteration we are going to have a differetn number
                    <Fade left delay={i*40} key={i}>
                        <div className="item">
                            <PlayerCard 
                                number={player.number}
                                name={player.name}
                                lastname={player.lastname}
                                bck={player.url}
                            />
                        </div>
                    </Fade>
                    : null
            })
        :
        null
    )

    render() {
        // console.log(this.state.players);
        
        return <div className="the_team_container" 
                    style={{ background : `url(${Stripes}) repeat`}}>

                    { 
                    !this.state.loading ? 
                       <div>

                            <div className="team_category_wrapper">
                                    <div className="title">Keeperes</div>
                                    <div className="team_cards">
                                        {this.showplayersByCategory('Keeper')}
                                    </div> 
                            </div>

                            <div className="team_category_wrapper">
                                    <div className="title">Defence</div>
                                    <div className="team_cards">
                                        {this.showplayersByCategory('Defence')}
                                    </div> 
                            </div>

                            <div className="team_category_wrapper">
                                    <div className="title">Midfield</div>
                                    <div className="team_cards">
                                        {this.showplayersByCategory('Midfield')}
                                    </div> 
                            </div>

                            <div className="team_category_wrapper">
                                    <div className="title">Strikers</div>
                                    <div className="team_cards">
                                        {this.showplayersByCategory('Striker')}
                                    </div> 
                            </div>
                            
                       </div>
                    :null
                    }   

            </div>
        
    }
}

export default TheTeam 
