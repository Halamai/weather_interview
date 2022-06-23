import React from 'react'
import clearSkyIcon from "../../pictures/Sunny.png"
import lightRainIcon from "../../pictures/Group 11.png"
import overcastClouds from "../../pictures/Group 4.png"
import brokenClouds from "../../pictures/Group 3.png"

const Image = ({desc}) => { 
    let iconSrc;
    switch (desc) {
        case 'clear sky':
            iconSrc = clearSkyIcon;
            break;
        case 'light rain':
            iconSrc = lightRainIcon;
            break;
        case 'overcast clouds':
            iconSrc = overcastClouds;
            break;
        case 'broken clouds':
            iconSrc = brokenClouds;
            break;
        default:
            iconSrc = clearSkyIcon;
    }
    return (
        <img src={iconSrc}/>
    )
}
export default Image;