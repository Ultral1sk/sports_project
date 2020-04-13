import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HeatLogo from '../ReusableUI/Icons'
import heatLogo from '../../Resources/images/logos/heatThree.png'

// import { BurgerIcon } from './'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <div className="navbar">
    
        

          
            <HeatLogo
              link={true}
              linkTo={'/'}
              width="110px"
              height="110px"
              url={heatLogo}
            />

      
       
        <nav className="nav">
          <div className="hamburger_icon">

            <i
              className="fa fa-bars"
              aria-hidden="true"
              onClick={e => this.handleToggle(e)}
            />
          </div>
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink to="/" >
              <li >Home</li>
            </NavLink>
            <NavLink to="team_news">
              <li >News</li>
            </NavLink>
            <NavLink to="/the_matches">
              <li>Matches</li>
            </NavLink>
            <NavLink to="/team_players">
              <li>Players</li>
            </NavLink>
            <NavLink to="/the_videos">
              <li >Highlights</li>
            </NavLink>
            <NavLink to="/team_fans">
              <li>Fans</li>
            </NavLink>
           
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
