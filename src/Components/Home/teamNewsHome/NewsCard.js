import React, { Component } from 'react'
import TeamNewsCarousel from './TeamNewsCarousel'
import { Link } from 'react-router-dom'
class NewsCard extends Component {
    render() {
        return (
            <>
              <div className="news_outer_wrapper">
                    <div>
                        <h2>HEAT NEWS</h2>
                    </div>
                 <div className="news_inner_wrapper">
               
                     <div className="newsLeft">
                         <p></p>
                     </div>
                     <div className="newsRight">
                        <p></p>
                     </div>

                 </div> 
                 <div>
                     <TeamNewsCarousel />
                     <div style={{textAlign : 'center'}}>
                         <Link to="team_news" style={{padding : '1rem', background: '#8a0000', color: 'white'}}>More News</Link>
                     </div>
                 </div>

              </div>  
            </>
        )
    }
}

export default NewsCard