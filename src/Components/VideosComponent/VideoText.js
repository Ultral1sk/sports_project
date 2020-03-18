import React, {useState, useEffect} from 'react'
import Zoom from 'react-reveal/Zoom';

const VideoText = () => {
    const valueOne = ''
    const valueTwo = ''
    const [showMiamiHeat, setShowMiamiHeat] = useState(false)
    const [showVideo, setShowVideo] = useState(true)

    useEffect(() => {
        setTimeout(() => setShowMiamiHeat( state => ({ showMiamiHeat:  !state.showMiamiHeat})) , 3000)
        setTimeout(() => setShowVideo(     state => ({ setShowVideo:  !state.showVideo})) , 1500)
        console.log(showMiamiHeat);
        
    }, [valueOne, valueTwo ])

    return (
        <>
        <Zoom  when={showMiamiHeat} clear delay={500} duration={1500} collapse >
            <div className="miami_text">  </div>
        </Zoom>
        <Zoom  when={showVideo} collapse clear >
            <div style={{color : 'white', fontSize : '13vw', textAlign : 'center', width :"80%", paddingTop : '5rem'}}>VIDEOS</div>
        </Zoom>
        <Zoom  when={showMiamiHeat}  clear delay={900} duration={1500} collapse >
            <div className="heat_text"></div>
        </Zoom>
    </>
    )
}


export default VideoText