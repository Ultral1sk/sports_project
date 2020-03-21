import React from 'react';
import YouTube from 'react-youtube';
import VideoText from './VideoText'



const Video = () => {

    // access to player in all event handlers via event.target
    const videoOnReady = (event) => { event.target.pauseVideo(); }
    const opts = {
        height: '350',
        width: '440',
        playerVars: {
            host: `${window.location.href}//www.youtube.com`,
            autoplay: 0,
            showinfo: 0,
            controls: 1,
            enablejsapi: 1
        },
    };

    return (
        <>
            {/* container to create space */}
            <div style={{ backgroundColor: 'black', height: '30vh', width: '100%' }}></div>
            {/* container to create space */}
            <div className="youtube_background_container">
                <div className="text_container"><VideoText /></div>
                <div className="video_wrapperOne">
                    <div className="video_outer_wrapper" >
                    <p>Thursday 11/3</p>
                        <div className="video_inner_wrapper">

                            <YouTube opts={opts}  onReady={videoOnReady} videoId='InWz6nThCYU'
                            />

                        </div>
                    </div>
                    <div className="video_outer_wrapper" > 
                    <p>Monday 08/3</p>
                        <div className="video_inner_wrapper">
                        
                            <YouTube opts={opts} onReady={videoOnReady} videoId='UKnZOfc60rY'
                            />

                        </div>
                    </div>
                </div>
            </div>
            <div className="video_wrapperTwo" >
                <div className="video_outer_wrapper" >
                <p>Saturday 06/3</p>
                    <div className="video_inner_wrapper">
                        <YouTube opts={opts} onReady={videoOnReady} videoId='6pYQc8HSWoo'
                            /> 
                    </div>
                </div>
                <div className="video_outer_wrapper" >
                <p>Wednesday 04/3</p>
                    <div className="video_inner_wrapper">
                    <YouTube opts={opts} videoId='-s8FTbHfwqY' onReady={videoOnReady}
                            />
                    </div>
                </div>
                <div className="video_outer_wrapper" >
                <p>Monday 02/3</p>

                    <div className="video_inner_wrapper">
                    <YouTube videoId='rtD3kIDftJc' opts={opts} onReady={videoOnReady}
                            />
                    </div>
                </div>
            </div>
            <div className="video_wrapperTwo" >
                <div className="video_outer_wrapper" >
                <p>Wednesday 29/2</p>

                    <div className="video_inner_wrapper">

                   <YouTube opts={opts} onReady={videoOnReady} videoId='-XBIS09NdMU'
                            /> 

                    </div>
                </div>
                <div className="video_outer_wrapper" >
                <p>Wednesday 28/2</p>
                    <div className="video_inner_wrapper">

                    <YouTube opts={opts} videoId='-s8FTbHfwqY' onReady={videoOnReady}
                            />
                            
                    </div>
                </div>
                <div className="video_outer_wrapper" >
                <p>Wednesday 27/2</p>
                    <div className="video_inner_wrapper">

                    <YouTube videoId='NTg8h2Q8gb8' opts={opts} onReady={videoOnReady}
                            />

                    </div>
                </div>  
            </div>
        </>
    )
}

export default Video








