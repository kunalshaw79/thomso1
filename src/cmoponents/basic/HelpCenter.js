import React from 'react'
import './style.css'
import downblack from './media/down-black.png'
import 'bootstrap/dist/css/bootstrap.min.css'
const HelpCenter = () => {
    return (
        <>
       <div className="helpcenter">
        <em className="heading2">
            Find the answers to anything <br /> you need in our Help Center
            </em>
        </div>
        <div className="comments">
            <div className="commentbox-off">How the payment at <br /> N2O Gaming</div>
            <div className="commentbox"><em className="boxtxt">
            Did all the packages <br /> at N2O Gaming <br /> available</em>
            <div className="white"> <img src={downblack} alt="arrow" /></div>
            </div>
           
            <div className="commentbox-off">How do I know if a <br /> space is available?</div>
        </div>
        <em id='more' className="col">more options </em>
        </>
    )
}
export default HelpCenter