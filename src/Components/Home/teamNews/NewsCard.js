import React from 'react';
import { Link } from 'react-router-dom'

const cardStyles ={
  
    width: 345,
    height: '100%',
    textAlign: 'center'
    

};

export default function NewsCard(props) {
  

  return (
  
        <div style={{...cardStyles}}>
            <div className="card_date_wrapper">
              <span>{props.date}</span>
              <Link to="" style={{padding : '1rem'}}>{props.tickets}</Link>
            </div>
            <div className="card_inside_controller">
                <div>
                  <img src={props.homeLogo} alt={props.description} width="110px" height="90px" />
                </div>
                <div style={{color : 'black', paddingRight : '1rem'}}>VS.</div>
                <div>
                <img src={props.awayLogo} alt={props.description} width="70px" height="70px" />
                </div>
            </div>
        </div>

  );
}
