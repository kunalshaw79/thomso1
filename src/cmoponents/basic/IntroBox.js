import React from 'react'
import './style.css'
import imgvid from './media/imagevideo.png'
import play from './media/playimg.png'
import 'bootstrap/dist/css/bootstrap.min.css'
const IntroBox =()=>{
 return(
    <>
    <div className="container">
        <div className="bigtext">White Label <em style={{color:"#D9B346"}}>Solution</em> <br /> for iGaming</div>
        <div className="smalltext">Discover our innovative platform, and launch your Online Casino, Slot Games,
        <br /> Poker or Sportsbook in less than you might imagine!</div>
        <div className="button">
            <button className="book">Book A Demo</button>
            <button className="explore">Explore Premium</button>
        </div>
        <img id='imgvid' src={imgvid} alt="video"/><img id='play' src={play} alt='play'/>
        
    </div>
    <br />
    <br />
    </>
 )
}
export default IntroBox