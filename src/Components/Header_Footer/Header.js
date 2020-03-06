import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import CityLogo from '../ReusableUI/Icons'
import heatLogo from '../../Resources/images/logos/heatThree.png'


const AppBarStyling = {

    backgroundColor: 'black',
    boxShadow: 'none',
    border: '2px solid #404040',
    display: 'block',
    
}

const ToolBarStyling = {
    border: '1px solid #404040	',
    borderBottom: 'none',
    height: '100%',
    width: '200px',


}

const ToolbarLogoStyling = {
    display: 'flex',
    justifyContent: 'center',
    alignItems : 'center'

}
export class Header extends Component {
    render() {
        return (
            <>
                <AppBar
                    
                    style={{ ...AppBarStyling }}
                >

                    <Toolbar style={{ ...ToolbarLogoStyling }}>
                        <div className="header_wrapper">
                            <div className="header_inner_wrapper">
                                <h2>HEAT</h2>
                                
                                <CityLogo
                                    link={true}
                                    linkTo={'/'}
                                    width="110px"
                                    height="110px"
                                    url={heatLogo}
                                />
                                <span>NATION</span>                                          
                            </div>


                            <div className="header_inner_span">
                                <span>2019 - 2020 season</span>
                            </div>
                        </div>
             
                  

                    </Toolbar>
                    <Toolbar style={{ display: 'flex', height: '100%', padding: '0', margin: '0'}}>
                        <div style={{ flexGrow: 1, width: '200px', height: '65px'}}>
                            <Link to="/the_team">
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    The Team
                    </Button>
                            </Link>
                            <Link to="/the_matches" >
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    Matches
                    </Button>
                            </Link>
                            <Link to="/the_matches" >
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    The Players
                    </Button>
                            </Link>
                            <Link to="/the_matches" >
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    Schedule
                    </Button>
                            </Link>
                            <Link to="/the_matches" >
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    Video
                    </Button>
                            </Link>
                            <Link to="/the_matches" >
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    Tickets
                    </Button>
                            </Link>
                            <Link to="/the_matches" >
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    Store
                    </Button>
                            </Link>
                            <Link to="/the_matches" >
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    Fans
                    </Button>
                            </Link>
                        </div>
                    </Toolbar>

                </AppBar>
            </>
        )
    }
}



export default Header
