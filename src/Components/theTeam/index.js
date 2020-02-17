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
                            console.log(url);
                            
                        })
                    })
                );
            }

            Promise.all(promises).then(()=>{
                this.setState({
                    loading: false,
                    players
                });
            });
        });
    }

    render() {
        console.log(this.state.players);
        
        return (
            <div>
                
            </div>
        )
    }
}

export default TheTeam 
