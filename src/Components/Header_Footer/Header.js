import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HeatLogo from '../ReusableUI/Icons'
import heatLogo from '../../Resources/images/logos/heatThree.png'
import Fade from 'react-reveal/Fade';


export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // current position
            pos: window.pageYOffset,
            visible: true
        };
    }
    componentDidMount = () => window.addEventListener("scroll", this.handleScroll);
    componentWillUnmount = () => window.removeEventListener("scroll", this.handleScroll);

    // Hide or show the menu.
    handleScroll = () => {

        const temp = window.pageYOffset;
        // updated position

        if (temp > 50) this.setState(state => ({ visible: state.visible = false }))
        else this.setState(state => ({ visible: state.visible = true }))

        this.setState({ pos: temp });

    };


    render() {
        return (
            <>
                <AppBar
                    style={{ ...AppBarStyling }}
                >
                    <Fade when={this.state.visible} collapse>
                        <Toolbar className="Toolbar">
                            <div className="header_wrapper">
                                <div className="header_inner_wrapper">

                                    <h2>HEAT</h2>
                                    <HeatLogo
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
                    </Fade>
                    <Toolbar style={{ display: 'flex', height: '80%', padding: '0', margin: '0' }}>
                        <div style={{ flexGrow: 1, width: '200px', height: '65px' }}>

                            <Link to="/">
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    Home
                                 </Button>
                            </Link>
                            <Link to="/team_news">
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    Team News
                                </Button>
                            </Link>

                            <Link to="/team_players" >
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    Team Players
                                </Button>
                            </Link>
                            <Link to="/the_matches" >
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    Matches
                                </Button>
                            </Link>
                            <Link to="/the_videos" >
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    Videos
                                </Button>
                            </Link>
                            <Link to="/team_fans" >
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


const AppBarStyling = {

    backgroundColor: 'black',
    boxShadow: 'none',
    border: '1px solid #202020',
    display: 'block',

}

const ToolBarStyling = {
    border: '1px solid #252525',
    borderBottom: 'none',
    height: '100%',
    width: '200px',


}


export default Header
