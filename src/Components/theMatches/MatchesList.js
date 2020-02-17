import React, { Component } from 'react'
import { easePolyOut }      from 'd3-ease';
import NodeGroup            from 'react-move/NodeGroup';

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

    showMatches = () => (
        this.state.matchesList 
            ? 
                <NodeGroup
                    data={this.state.matchesList}
                    keyAccessor={(d) => d.id}

                    start={() => ({
                        opacity : 0,
                        x : -200,

                    })}

                    enter={( d, i ) => ({
                        opacity : [1],
                        x       : [0],
                        timing  : { duration : 500, delay : i * 50, ease : easePolyOut}
                    })}

                    update={( d, i ) => ({
                        opacity : [1],
                        x       : [0],
                        timing  : { duration : 500, delay : i * 50, ease : easePolyOut}
                    })}

                    leave={( d, i ) => ({
                        opacity : [0],
                        x       : [-200],
                        timing  : { duration : 500, delay : i * 50, ease : easePolyOut}
                    })}

                >
                {
                    (nodes => (
                        <div>
                            { nodes.map(({ key, data, state : { x, opacity }}) => (
                                <div
                                    key={key} className="match_box_big"
                                    style={{
                                        opacity,
                                        transform: `translate(${x}px)`
                                    }}     
                                >

                                </div>
                            ))}
                        </div>
                    ))
                }
         </NodeGroup>
            :
        null
    )
    
    render() {
        // console.log(this.props);
        
        return (
            <div>
                {this.showMatches()}
            </div>
        )
    }
}

export default MatchesList