import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ReusableUI/miscellaneous';

import MatchesBlock from '../../ReusableUI/matches_block';

import Slide from 'react-reveal';

class Blocks extends Component {

    state = {
        //storing the data from the database into the state so we can manipulate it
        matches: [firebaseMatches]
    }

    componentDidMount() {
        // this helper function brings the last six folders from the database
        firebaseMatches.limitToLast(6).once('value').then((snapshot) => {
            const matches = firebaseLooper(snapshot) //this firebase looper will loop throug the array and will return object which is what we want

            this.setState({
                matches: reverseArray(matches)
            })
        })
    }

    showMatches = (matches) => (
        //if  we have matches return this if not return null

        matches ?
            matches.map((match) => (
                <Slide bottom key={match.id}>
                    <div className="item">
                        <div className="wrapper">
                            <MatchesBlock match={match} />
                            {console.log(match)}
                        </div>
                    </div>
                </Slide>

            ))
            : null


    )



    render() {

        console.log(this.state)
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
            // this showMatches is a function that is just going to render things
        )
    }
}

export default Blocks
