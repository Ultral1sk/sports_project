import React, { useState, useEffect } from 'react'
import Zoom from 'react-reveal/Zoom';

const VideoText = () => {

    const [showMiamiHeat, setShowMiamiHeat] = useState(true)
    const [showVideo, setShowVideo] = useState(false)



    useEffect(
        () => {
            let hideMiamiHeat = setTimeout(() => setShowMiamiHeat(!showMiamiHeat), 1500)
            let showVideoTxt = setTimeout(() => setShowVideo(!showVideo), 3000)

            // this will clear Timeout when component unmont like in willComponentUnmount
            return () => {     clearTimeout(hideMiamiHeat, showVideoTxt)
            }
        },
        [] //useEffect will run only one time
        //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
    )



    return (
        <>
            <div>
                <Zoom when={showMiamiHeat} clear delay={500} duration={1500} collapse >
                    <div className="miami_text"></div>
                </Zoom>
                <Zoom when={showVideo} collapse clear >
                    <div style={{ color: 'white', fontSize: '13vw', textAlign: 'center', width: "65%", paddingTop : '5rem'  }}>
                        <i>VIDEOS</i>
                    </div>
                </Zoom>
                <Zoom when={showMiamiHeat} clear delay={900} duration={1500} collapse >
                    <div className="heat_text"></div>
                </Zoom>
            </div>
        </>
    )
}


export default VideoText