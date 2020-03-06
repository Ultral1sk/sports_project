import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HeatLogo from '../ReusableUI/Icons'
import heatLogo from '../../Resources/images/logos/heatThree.png'


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



export class Header extends Component {
 constructor(props) {
      super(props);
      this.state = {
         // current position
         pos: window.pageYOffset,
         visible: false
      };
   }
   componentDidMount    = () =>  window.addEventListener("scroll", this.handleScroll);
   componentWillUnmount = () =>  window.removeEventListener("scroll", this.handleScroll);
   
   // Hide or show the menu.
   handleScroll = () => {
      const { pos } = this.state;
      const temp = window.pageYOffset;
      // updated position

      if( temp > 100 ) this.setState({ visible : this.state.visible = true})
      else             this.setState({ visible : this.state.visible = false})
      
      this.setState({ pos: temp});
      
   };


    render() {
        return (
            <>
                <AppBar
                    
                    style={{ ...AppBarStyling }}
                >

                    <Toolbar className={this.state.visible ? "ToolbarLogoStylingOff" : "ToolbarLogoStylingOn"}>
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
                    <Toolbar style={{ display: 'flex', height: '100%', padding: '0', margin: '0'}}>
                        <div style={{ flexGrow: 1, width: '200px', height: '65px'}}>
                        {this.state.visible ?
                           <Link to="/" onClick={() => window.location.reload()}>
                                <Button color="inherit" style={{ ...ToolBarStyling }}>
                                    Home
                                </Button>
                            </Link>
                            :
                            ''
                         }
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
