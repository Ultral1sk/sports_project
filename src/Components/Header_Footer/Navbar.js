import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import HeatLogo from '../ReusableUI/Icons'
import heatLogo from '../../Resources/images/logos/heatThree.png'

// import { BurgerIcon } from './'
import styled from "styled-components";

const Navigation = styled.header`
`;

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
      <Navigation className="navbar">
        <div className="logo">
        

          
            <HeatLogo
              link={true}
              linkTo={'/'}
              width="60px"
              height="60px"
              url={heatLogo}
            />

      
        </div>
        <nav className="nav">
          <div className="hamburger_icon">

            <i
              className="fa fa-bars"
              aria-hidden="true"
              onClick={e => this.handleToggle(e)}
            />
          </div>
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink to="/">
              <li >home</li>
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
      </Navigation>
    );
  }
}

export default Nav;
