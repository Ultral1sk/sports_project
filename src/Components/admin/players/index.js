import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Table                from '@material-ui/core/Table';
import TableBody            from '@material-ui/core/TableBody';
import TableCell            from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead            from '@material-ui/core/TableHead';
import TableRow             from '@material-ui/core/TableRow';
import Paper                from '@material-ui/core/Paper';
import CircularProgress     from '@material-ui/core/CircularProgress';
import AdminLayout          from '../../../HOC/AdminLayout'

import { firebaseMatches, firebasePlayers } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ReusableUI/miscellaneous';


class AdminPlayers extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            players: []
        }
    }

    componentDidMount = () => {
        // here we are gonna fetch the list of players and we are gonna reference it into our firebase first and bring it here
        firebasePlayers.once('value').then((snapshot) => {
            const players = firebaseLooper(snapshot);

            this.setState({
                isLoading : false,
                players: reverseArray(players) // reveser Array is not needed in this scase 
            })
        })
    }
    render() {

                // console.log(this.state);
        
        return (
            <div>
                                <AdminLayout>
                    <div>
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell>Number</TableCell>
                                        <TableCell>Position</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.players ?
                                        this.state.players.map((player, i) => (
                                            <TableRow key={i}>
                                                <TableCell>
                                                    <Link to={`/admin_players/add_players/${player.id}`}>
                                                        {player.name}
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                <Link to={`/admin_players/add_players/${player.id}`}>
                                                        {player.lastname}
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                {player.number}
                                                </TableCell>
                                                <TableCell>
                                                   {player.position}
                                                </TableCell>
                                            </TableRow>
                                        ))

                                        :
                                        null

                                    }
                                </TableBody>
                            </Table>
                        </Paper>
                        <div className="admin_progress">
                            {this.state.isLoading ?

                                <CircularProgress thickness={7} style={{ color: '#89c5e9' }} />
                                : null
                            }
                        </div>
                    </div>
                </AdminLayout>
            </div>
        )
    }
}

export default AdminPlayers
