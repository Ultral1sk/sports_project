import React from 'react';
import YouTube from 'react-youtube';
import Zoom from 'react-reveal/Zoom';
import VideoText from './VideoText'

export class Video extends React.Component {

    state = { showMiamiHeat: true, showVideo : false  }

    componentDidMount(){
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            },

        };

      


        return (



            <>
                <div className="youtube_background_container">
                    <div style={{ height: '10vh' }}></div>
                    <div className="text_container">
                           

                            <VideoText />
                            
                        
                        
                        </div>


                    <YouTube
                        videoId="2g811Eo7K8U"
                        opts={opts}
                        onReady={this._onReady}
                    />

                </div>




            </>
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}







