import React from 'react';

import video1 from "../../assets/video/video1.webm"
import video2 from "../../assets/video/video2.mp4"

const Video = ({isDesktop}) => {
    return (
        <video
            src={isDesktop ? video1 : video2}
            autoPlay
            playsInline
            loop
            className='w-full lg:h-[100vh] object-cover' />
    );
}

export default Video;