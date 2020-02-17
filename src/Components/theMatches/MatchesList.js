import React, { Component } from 'react'

class MatchesList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             matchesList : []
        }
    }

    static getDerivedStateFromProps(props, state)  {
        //this will update the state
        return state = {
            matchesList : props.matches
        }
    }
    
    render() {
        console.log(this.props);
        
        return (
            <div>
                
            </div>
        )
    }
}

export default MatchesList