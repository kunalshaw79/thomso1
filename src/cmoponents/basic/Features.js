import React from 'react'
import './style.css'
import rightbox from './media/featureright.png'
import 'bootstrap/dist/css/bootstrap.min.css'
const Features = () => {
    return (
        <>
            <div className="features">
                <em className='heading'>FEATURES</em>
                <br />
                <br />
                <em className="smalltext">N2O Gaming is the fastest-growing iGaming platform in Asia.
                <br />
                 We meet your needs by offering iGaming white label and customisable full turnkey solutions</em>
                 <div className="box">
                    <div className="left"><em className="fir"> The Fastest iGaming Market Entry</em><br />
                    <em className="bigtext2"> Get Your Fully <br /> Managed Platform</em>
                    </div>
                    <div className="right"> <img id='rightbox' src={rightbox} alt="right" /> </div>
                 </div>
            </div>
        </>
    )
}
export default Features